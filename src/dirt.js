import * as THREE from 'three';

/* 污渍: real dirt on the pet's skin. Every large, opaque skin material of every character gets a few lines of shader injected
   (once, before the first frame): up to 12 mud spots given in the character's rest-pose coordinates (the same space as the mesh's
   `position` attribute), blended into the albedo with a ragged edge. Because the spots live in the mesh's rest space they are
   skinned with the pet - they bend, wobble and turn with it - and scrubbing simply lowers a spot's amount to 0. */

export const MAX_SPOTS=12,SPOT_R=.3;
const U={uDirt:{value:Array.from({length:MAX_SPOTS},()=>new THREE.Vector4(0,0,0,0))},uDirtOn:{value:0}};
const GLSL_COMMON='uniform vec4 uDirt['+MAX_SPOTS+'];uniform float uDirtOn;varying vec3 vDirtP;';
const GLSL_BLEND=`
  if(uDirtOn>.5){
    float dm=0.;
    for(int i=0;i<${MAX_SPOTS};i++){vec4 d=uDirt[i];if(d.w>0.){
      vec3 q=vDirtP-d.xyz;float r=length(q);
      float n=sin(q.x*9.+q.y*7.)*sin(q.z*8.+q.x*5.)*.07+sin(q.y*13.+q.z*11.)*.035;   // ragged edge
      dm=max(dm,smoothstep(${SPOT_R.toFixed(2)}+n,${(SPOT_R*.35).toFixed(2)}+n,r)*d.w);}}
    vec3 mud=vec3(.24,.14,.06)*(.85+.3*sin(vDirtP.x*11.+vDirtP.y*9.+vDirtP.z*7.));
    diffuseColor.rgb=mix(diffuseColor.rgb,mud,clamp(dm*1.15,0.,.92));
  }`;

const meshesOf=new WeakMap();

/* hook one character's skin materials (call once per character group, before it is first rendered) */
export function hookDirt(root,minVerts=3000){
  const list=[];
  root.traverse(o=>{
    if(!o.isMesh||o.userData.region||o.userData.noDirt||!o.geometry||!o.geometry.attributes.position)return;
    for(let p=o.parent;p;p=p.parent)if(p.userData&&p.userData.item)return;           // clothes are not dirtied (they come off for the bath)
    const m=o.material;if(!m||Array.isArray(m)||m.transparent||!(m.isMeshStandardMaterial||m.isMeshPhysicalMaterial))return;
    if(o.geometry.attributes.position.count<minVerts)return;                            // eyes, pupils, mouths…
    const prev=m.onBeforeCompile,prevKey=m.customProgramCacheKey;
    m.onBeforeCompile=(sh,r)=>{if(prev)prev.call(m,sh,r);sh.uniforms.uDirt=U.uDirt;sh.uniforms.uDirtOn=U.uDirtOn;
      sh.vertexShader=sh.vertexShader.replace('#include <common>','#include <common>\nvarying vec3 vDirtP;').replace('#include <begin_vertex>','#include <begin_vertex>\nvDirtP=position;');
      sh.fragmentShader=sh.fragmentShader.replace('#include <common>','#include <common>\n'+GLSL_COMMON).replace('#include <map_fragment>','#include <map_fragment>\n'+GLSL_BLEND)};
    m.customProgramCacheKey=()=>(prevKey?prevKey.call(m):m.type)+'|dirt';m.needsUpdate=true;
    list.push(o);
  });
  list.sort((a,b)=>b.geometry.attributes.position.count-a.geometry.attributes.position.count);
  meshesOf.set(root,list);
}

/* pick n random spots on the front-facing skin of the character's biggest mesh (a vertex index each, kept apart from one another) */
export function pickSpots(root,n,ok){
  const list=meshesOf.get(root);if(!list||!list.length)return[];
  const mesh=list[0],P=mesh.geometry.attributes.position,N=mesh.geometry.attributes.normal,cnt=P.count,out=[],v=new THREE.Vector3();
  for(let tries=0;tries<2500&&out.length<n;tries++){
    const i=Math.floor(Math.random()*cnt);if(N.getZ(i)<.25)continue;
    v.fromBufferAttribute(P,i);
    if(out.some(s=>s.pos.distanceTo(v)<SPOT_R*1.3)||(ok&&!ok({pos:v})))continue;
    out.push({mesh,vi:i,pos:v.clone()});
  }
  return out;
}
/* where a spot is now (world space, following the skinning) */
export function spotWorld(spot,target){spot.mesh.getVertexPosition(spot.vi,target);return spot.mesh.localToWorld(target)}

/* push the spot list to the shaders: amounts[i] in 0..1 (0 = clean); no spots when `spots` is null */
export function setDirt(spots,amounts){
  const a=U.uDirt.value;U.uDirtOn.value=spots?1:0;
  for(let i=0;i<MAX_SPOTS;i++){const s=spots&&spots[i];if(s)a[i].set(s.pos.x,s.pos.y,s.pos.z,amounts[i]);else a[i].set(0,0,0,0)}
}
