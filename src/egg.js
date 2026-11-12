import * as THREE from 'three';
import {mergeVertices} from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import {skinMaterial,patchUV,onSkinColor} from './skin.js';

/* 奶蛋: a smooth egg-shaped character (no limbs) with big green eyes and a tiny beak.
   Same interface as the 奶蛙 model (group / uniforms / colliders / pose / paint) so the game can swap between them. */

const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
const H=2.7,Hh=H/2,R=1.17,K=.17,CY=1.25;           // height, half height, max radius, taper (narrower top), rotation pivot height
let SKIN='#f4c93c';const BEAK='#fbd96e'; // SKIN (eyelid colour) is replaced by the sampled colour of the frog's albedo once it has decoded
const ringR=y=>{const t=y/Hh-1;return R*Math.sqrt(Math.max(0,1-t*t))*(1-K*t)}; // body radius at height y
const surfZ=(x,y)=>Math.sqrt(Math.max(0,ringR(y)**2-x*x));
export const eggSurfZ=surfZ;

export function buildEgg(){
  /* ---- body ---- */
  let g=new THREE.SphereGeometry(1,80,60);
  {const P=g.attributes.position;for(let i=0;i<P.count;i++){const x=P.getX(i),y=P.getY(i),z=P.getZ(i),k=R*(1-K*y);P.setXYZ(i,x*k,Hh*(1+y),z*k)}}
  g.deleteAttribute('uv');g.deleteAttribute('normal');g=mergeVertices(g,1e-4);g.computeVertexNormals();
  patchUV(g,[0,Hh,2*R,H]); // borrow the plain-yellow patch of the 奶蛙 albedo so the egg is shaded by the same PBR textures

  const uniforms={uDent:{value:new THREE.Vector4(0,1,1,0)},uInfl:{value:0},uBelly:{value:0}};
  const patch=sh=>{Object.assign(sh.uniforms,uniforms);
    sh.vertexShader=sh.vertexShader.replace('#include <common>','#include <common>\nuniform vec4 uDent;uniform float uInfl;uniform float uBelly;')
      .replace('#include <skinning_vertex>',`#include <skinning_vertex>
        vec3 dd=transformed-uDent.xyz;
        transformed-=objectNormal*(uDent.w*.3*exp(-dot(dd,dd)/.5));
        float by=transformed.y-1.0;
        transformed+=objectNormal*(uInfl+uBelly*exp(-by*by/.6)*smoothstep(-.2,.5,objectNormal.z));`)};
  const params={roughness:.5,clearcoat:.28,clearcoatRoughness:.45};
  const bodyMat=skinMaterial(0xffffff,true,{clearcoat:.28,clearcoatRoughness:.45});bodyMat.onBeforeCompile=patch;
  const body=new THREE.Mesh(g,bodyMat);body.frustumCulled=false;

  /* ---- hierarchy: group (ground) > pivot (rotates about the egg's middle) > inner (egg coordinates) ---- */
  const group=new THREE.Group(),pivot=new THREE.Group(),inner=new THREE.Group();
  pivot.position.y=CY;inner.position.y=-CY;group.add(pivot);pivot.add(inner);inner.add(body);

  /* ---- hit collider (the egg itself): upper part counts as "head", the rest as "belly" ---- */
  const hm=new THREE.MeshBasicMaterial({visible:false}),hit=new THREE.Mesh(g,hm);hit.userData.region='egg';inner.add(hit);
  const regionOf=l=>l.y>1.75?'head':'belly';

  /* ---- (no nose; the beak is painted flat onto the face below) ---- */

  /* ---- face decal: canvas painted onto a thin grid hugging the egg surface ---- */
  const X0=-.8,X1=.8,Y0=1.4,Y1=2.5,SC=400,CW=Math.round((X1-X0)*SC),CH=Math.round((Y1-Y0)*SC);
  const cvs=document.createElement('canvas');cvs.width=CW;cvs.height=CH;const cx=cvs.getContext('2d');
  const tex=new THREE.CanvasTexture(cvs);tex.colorSpace=THREE.SRGBColorSpace;tex.anisotropy=4;
  {const NX=48,NY=36,pos=[],nor=[],uv=[],idx=[];
   for(let j=0;j<=NY;j++)for(let i=0;i<=NX;i++){const x=X0+(X1-X0)*i/NX,y=Y0+(Y1-Y0)*j/NY,z=surfZ(x,y);
     const e=.002,dzx=(surfZ(x+e,y)-surfZ(x-e,y))/(2*e),dzy=(surfZ(x,y+e)-surfZ(x,y-e))/(2*e),l=Math.hypot(dzx,dzy,1),nx=-dzx/l,ny=-dzy/l,nz=1/l;
     pos.push(x+nx*.004,y+ny*.004,z+nz*.004);nor.push(nx,ny,nz);uv.push(i/NX,j/NY)}
   for(let j=0;j<NY;j++)for(let i=0;i<NX;i++){const a=j*(NX+1)+i,b=a+1,c=a+NX+1,d=c+1;idx.push(a,b,d,a,d,c)}
   const dg=new THREE.BufferGeometry();dg.setAttribute('position',new THREE.Float32BufferAttribute(pos,3));dg.setAttribute('normal',new THREE.Float32BufferAttribute(nor,3));dg.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));dg.setIndex(idx);
   const dm=new THREE.MeshPhysicalMaterial({map:tex,transparent:true,depthWrite:false,polygonOffset:true,polygonOffsetFactor:-2,polygonOffsetUnits:-2,...params});dm.onBeforeCompile=patch;
   const decal=new THREE.Mesh(dg,dm);decal.frustumCulled=false;decal.renderOrder=2;inner.add(decal)}

  const px=x=>(x-X0)*SC,py=y=>(Y1-y)*SC;
  const EYE={x:.38,y:2.12,r:.175};
  let lastKey='';
  onSkinColor(c=>{SKIN='rgb('+c[0]+','+c[1]+','+c[2]+')';lastKey=''});
  function paint(P){
    const key=[P.u,P.l,P.sl,P.arc,P.mo,P.sm,P.bl,P.lx,P.ly].map(v=>Math.round(v*60)).join(',');if(key===lastKey)return;lastKey=key;
    cx.clearRect(0,0,CW,CH);
    // blush
    if(P.bl>.03)for(const s of[-1,1]){const x=px(s*.62),y=py(1.9),r=.13*SC,gr=cx.createRadialGradient(x,y,0,x,y,r);gr.addColorStop(0,'rgba(255,120,110,'+(.45*Math.min(1,P.bl))+')');gr.addColorStop(1,'rgba(255,120,110,0)');cx.fillStyle=gr;cx.fillRect(x-r,y-r,2*r,2*r)}
    // eyes: green iris, black pupil that follows the pointer (no highlight, so they look blank and cute)
    for(const s of[-1,1]){const ex=s*EYE.x,ey=EYE.y,r=EYE.r*SC,cxp=px(ex),cyp=py(ey);
      const gr=cx.createRadialGradient(cxp,cyp,r*.15,cxp,cyp,r);gr.addColorStop(0,'#a9de80');gr.addColorStop(.6,'#82c859');gr.addColorStop(.9,'#5da644');gr.addColorStop(1,'#3d8132');
      cx.fillStyle=gr;cx.beginPath();cx.arc(cxp,cyp,r,0,Math.PI*2);cx.fill();
      cx.strokeStyle='rgba(40,85,35,.55)';cx.lineWidth=2;cx.stroke();
      cx.fillStyle='#070707';cx.beginPath();cx.arc(cxp+P.lx*.04*SC,cyp-P.ly*.035*SC,r*.5,0,Math.PI*2);cx.fill();
      // eyelids (skin-coloured), slanted by P.sl
      const ang=(s<0?1:-1)*P.sl*.7,U=clamp((P.u-.1)/.9,0,1);
      const lid=(from,to)=>{cx.save();cx.translate(cxp,cyp);cx.rotate(ang);cx.beginPath();cx.rect(-r*1.7,from,r*3.4,to-from);cx.clip();
        cx.fillStyle=SKIN;if('filter' in cx)cx.filter='blur(1.5px)';cx.beginPath();cx.arc(0,0,r*1.12,0,Math.PI*2);cx.fill();cx.restore()};
      if(U>.02){const yE=-r+2*r*U;lid(-r*1.7,yE);
        if(U>.1){cx.save();cx.translate(cxp,cyp);cx.rotate(ang);cx.strokeStyle='rgba(120,80,20,'+(.45*Math.min(1,U/.25))+')';cx.lineWidth=2;cx.beginPath();const hw=Math.sqrt(Math.max(0,(r*1.1)**2-yE*yE));cx.moveTo(-hw,yE);cx.lineTo(hw,yE);cx.stroke();cx.restore()}}
      if(P.l>.03)lid(r-2*r*P.l,r*1.7);
      if(Math.abs(P.arc)>.35&&P.u>.92){ // happy ^ ^ / sleepy u u
        cx.save();cx.strokeStyle='#4a3208';cx.lineWidth=.024*SC;cx.lineCap='round';cx.beginPath();
        if(P.arc>0)cx.arc(cxp,cyp+.045*SC,.1*SC,Math.PI*1.12,Math.PI*1.88);else cx.arc(cxp,cyp-.05*SC,.1*SC,Math.PI*.12,Math.PI*.88);
        cx.stroke();cx.restore()}
    }
    // mouth: dark opening (wide smile when speaking / laughing) (wide smile when speaking / laughing)
    const mo=clamp(P.mo,0,1),y0=1.822;
    if(mo>.05){const hw=(.12+.12*mo)*(1+.15*Math.max(0,P.sm)),cr=.035*P.sm,dep=.05+.19*mo;
      cx.fillStyle='#3c1510';cx.beginPath();cx.moveTo(px(-hw),py(y0+cr));cx.quadraticCurveTo(px(0),py(y0-dep*2),px(hw),py(y0+cr));cx.quadraticCurveTo(px(0),py(y0+.012),px(-hw),py(y0+cr));cx.closePath();cx.fill();
      if(mo>.5){cx.save();cx.clip();cx.fillStyle='#d8656c';cx.beginPath();cx.ellipse(px(0),py(y0-dep*1.05),hw*.55*SC,.05*SC,0,0,Math.PI*2);cx.fill();cx.restore()}}
    // closed mouth: a thin soft smile (no beak)
    else{const sm=P.sm,fr=Math.max(0,-sm),hw=.13;cx.strokeStyle='#7a4a12';cx.lineWidth=3;cx.lineCap='round';cx.beginPath();
      for(let i=0;i<=20;i++){const x=-hw+2*hw*i/20,t=(x/hw)**2,y=sm>=0?y0+.03+(-sm*.035)*(1-t):y0+.03+fr*.035*(1-t);i?cx.lineTo(px(x),py(y)):cx.moveTo(px(x),py(y))}cx.stroke()}
    tex.needsUpdate=true;
  }
  paint({u:.08,l:0,sl:0,arc:0,mo:0,sm:.5,bl:0,lx:0,ly:0});

  /* ---- pose: the whole egg rocks about its middle (weeble), leans and turns toward the pointer ---- */
  function pose(P){
    const t=performance.now()/1000,rock=Math.sin(t*1.5)*.02,sit=P.sit||0;
    pivot.rotation.set(P.lean*.9+P.nod*.32+sit*.1,P.yaw*.75,P.roll*.9+rock+(P.hip||0)*.1,'YXZ');
    inner.scale.y=1-.05*sit;
  }

  const anchors={head:[inner,[0,2.3,.6]],mouth:[inner,[0,1.82,1.1]],belly:[inner,[0,1.0,1.2]],feet:[group,[0,.1,.4]],top:[inner,[0,H+.3,.1]]};
  const prof=y=>{const r=ringR(clamp(y,.02,H-.02));return{rx:r,zf:r,zb:-r}};
  return{group,uniforms,colliders:[hit],regionOf,pose,paint,anchors,hipY:CY,prof,patch,patchKey:'egg'};
}
