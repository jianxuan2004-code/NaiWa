import * as THREE from 'three';
import {skinMaterial,patchUV} from './skin.js';
import {skinGarment} from './garments.js';

/* 奶猫 (NaiMao V3): the supplied rigged quadruped cat (tools/mknaimao.mjs packs the GLB into assets/pets/naimao.json). 31 bones: spine chain,
   head, ears, eyes + pupils, three mouth corners, four 3-bone legs, a 5-bone tail. It is rendered with the same PBR skin set as 奶蛙
   (albedo / normal / roughness) and the 奶蛙 jelly shader (poke dents, belly breathing); ear insides, paw pads and the face parts are flat colours. */

const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
const ss=(a,b,x)=>{const t=clamp((x-a)/(b-a),0,1);return t*t*(3-2*t)};
const u8=(s,T)=>{const bin=atob(s),u=new Uint8Array(bin.length);for(let i=0;i<bin.length;i++)u[i]=bin.charCodeAt(i);return new T(u.buffer)};
const ARM_REST=[-.1,.55,-.15,.05];

function decode(p){
  const Q=u8(p.P,Int16Array),Nn=u8(p.N,Int16Array),n=Q.length/3,pos=new Float32Array(n*3),nor=new Float32Array(n*3);
  for(let v=0;v<n;v++)for(let a=0;a<3;a++){pos[v*3+a]=p.min[a]+(Q[v*3+a]+32768)/65535*p.size[a];nor[v*3+a]=Nn[v*3+a]/32767}
  const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.BufferAttribute(pos,3));g.setAttribute('normal',new THREE.BufferAttribute(nor,3));
  const si=u8(p.SI,Uint8Array),sw=u8(p.SW,Uint8Array),W=new Float32Array(sw.length);for(let i=0;i<sw.length;i++)W[i]=sw[i]/255;
  g.setAttribute('skinIndex',new THREE.BufferAttribute(Uint16Array.from(si),4));g.setAttribute('skinWeight',new THREE.BufferAttribute(W,4));
  g.setIndex(new THREE.BufferAttribute(u8(p.I,p.idx32?Uint32Array:Uint16Array),1));return{g,pos};
}
function blushTex(){const c=document.createElement('canvas');c.width=c.height=64;const x=c.getContext('2d'),r=x.createRadialGradient(32,32,0,32,32,32);
  r.addColorStop(0,'rgba(255,110,100,.9)');r.addColorStop(1,'rgba(255,110,100,0)');x.fillStyle=r;x.fillRect(0,0,64,64);const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;return t}

export function buildNaiMao(){
  const J=JSON.parse(window.ASSETS.pets.naimao);
  const uniforms={uDent:{value:new THREE.Vector4(0,1,1,0)},uInfl:{value:0},uBelly:{value:0}};
  const BELLY_Y=1.0;
  const patch=sh=>{Object.assign(sh.uniforms,uniforms);
    sh.vertexShader=sh.vertexShader.replace('#include <common>','#include <common>\nuniform vec4 uDent;uniform float uInfl;uniform float uBelly;')
      .replace('#include <skinning_vertex>',`#include <skinning_vertex>
        vec3 dd=transformed-uDent.xyz;
        transformed-=objectNormal*(uDent.w*.3*exp(-dot(dd,dd)/.5));
        float by=transformed.y-${BELLY_Y.toFixed(2)};
        transformed+=objectNormal*(uInfl+uBelly*exp(-by*by/.6)*smoothstep(-.2,.5,objectNormal.z));`)};
  const group=new THREE.Group(),inner=new THREE.Group();group.add(inner);

  /* ---- skeleton ---- */
  const bones=J.bones.map(b=>{const o=new THREE.Bone();o.name=b.n;o.position.set(...b.t);o.quaternion.set(...b.q);o.scale.set(...b.s);return o});
  const by={},idx={};J.bones.forEach((b,i)=>{by[b.n]=bones[i];idx[b.n]=i;(b.p>=0?bones[b.p]:inner).add(bones[i])});
  const rest=J.bones.map(b=>({p:new THREE.Vector3(...b.t),q:new THREE.Quaternion(...b.q)}));
  inner.updateMatrixWorld(true);
  const restM={},restQ={};
  for(const b of J.bones){const o=by[b.n];restM[b.n]=o.matrixWorld.clone();restQ[b.n]=new THREE.Quaternion().setFromRotationMatrix(o.matrixWorld)}
  // world-axis rotation deltas (expressed in the rest pose) -> local bone rotation: local = Pinv * delta * P * restLocal
  const PQ=J.bones.map(b=>b.p>=0?restQ[J.bones[b.p].n]:new THREE.Quaternion()),PQi=PQ.map(q=>q.clone().invert());
  const wl=(i,x,y,z)=>new THREE.Vector3(x,y,z).applyQuaternion(PQi[i]);   // a displacement along the world axes -> the bone's local frame
  const boneInv=bones.map((_,i)=>new THREE.Matrix4().fromArray(J.ibm,i*16));
  const skeleton=new THREE.Skeleton(bones,boneInv);
  const attach=n=>{const o=new THREE.Object3D();o.matrixAutoUpdate=false;o.matrix.copy(restM[n]).invert();by[n].add(o);return o};

  /* ---- meshes: frog skin material (+ jelly shader) on body and tail, flat colours elsewhere ---- */
  const bodyPos={all:[]},meshes={};
  const FLAT=(p,extra={})=>{const m=new THREE.MeshPhysicalMaterial({roughness:p.rough,clearcoat:.2,clearcoatRoughness:.5,...extra});m.color.setRGB(p.color[0],p.color[1],p.color[2]);return m};
  for(const p of J.parts){
    const {g,pos}=decode(p);let mat;
    if(p.kind==='skin'){patchUV(g,[0,1.5,2.6,3.2]);mat=skinMaterial(0xffffff,true,{clearcoat:.2,clearcoatRoughness:.5});mat.onBeforeCompile=patch;mat.customProgramCacheKey=()=>'naimao'}
    else mat=FLAT(p,p.kind==='mouth'?{side:THREE.DoubleSide,clearcoat:0}:p.kind==='pupil'?{polygonOffset:true,polygonOffsetFactor:-8,polygonOffsetUnits:-8}:{});
    const m=new THREE.SkinnedMesh(g,mat);m.frustumCulled=false;inner.add(m);m.bind(skeleton,new THREE.Matrix4());meshes[p.n]=m;
    if(p.n==='body')bodyPos.body=pos;if(p.n==='body'||p.kind==='eye'||p.kind==='pupil'||p.kind==='mouth')bodyPos.all.push(pos);
  }
  const BP=bodyPos.body;

  /* ---- surface tables, measured from the rest-pose geometry ---- */
  const CS=.05,X0=-2,Y0=0,NX=80,NY=64,grid=new Float32Array(NX*NY).fill(-99);
  for(const P of bodyPos.all)for(let v=0;v<P.length/3;v++){const i=Math.round((P[v*3]-X0)/CS),j=Math.round((P[v*3+1]-Y0)/CS);if(i<0||j<0||i>=NX||j>=NY)continue;if(P[v*3+2]>grid[j*NX+i])grid[j*NX+i]=P[v*3+2]}
  const surf=(x,y)=>{const i=Math.round((x-X0)/CS),j=Math.round((y-Y0)/CS);let z=-99;
    for(let b=-1;b<=1;b++)for(let a=-1;a<=1;a++){const ii=i+a,jj=j+b;if(ii>=0&&jj>=0&&ii<NX&&jj<NY)z=Math.max(z,grid[jj*NX+ii])}
    return z<-50?null:z};
  const PD=.04,PN=80,prof=new Float32Array(PN*3);
  for(let r=0;r<PN;r++){const y=r*PD;let rx=0,zf=-9,zb=9,any=false;
    for(let v=0;v<BP.length/3;v++){if(Math.abs(BP[v*3+1]-y)>PD*1.2)continue;any=true;rx=Math.max(rx,Math.abs(BP[v*3]));if(Math.abs(BP[v*3])<.8){zf=Math.max(zf,BP[v*3+2]);zb=Math.min(zb,BP[v*3+2])}}
    if(any&&zf>-8){prof[r*3]=rx;prof[r*3+1]=zf;prof[r*3+2]=zb}else prof[r*3]=-1}
  for(let r=PN-1;r>=0;r--)if(prof[r*3]<0){const s=r<PN-1?r+1:r-1;for(let k=0;k<3;k++)prof[r*3+k]=prof[s*3+k]}
  const profAt=y=>{const f=clamp(y/PD,0,PN-1.001),i=Math.floor(f),t=f-i,g=k=>prof[i*3+k]*(1-t)+prof[(i+1)*3+k]*t;return{rx:g(0),zf:g(1),zb:g(2)}};
  // top of the head (the front half of the body, between the ears)
  let top=0,tz=0,tn=0;for(let v=0;v<BP.length/3;v++)if(Math.abs(BP[v*3])<.3&&BP[v*3+2]>.3)top=Math.max(top,BP[v*3+1]);
  for(let v=0;v<BP.length/3;v++)if(Math.abs(BP[v*3])<.3&&BP[v*3+2]>.3&&BP[v*3+1]>top-.08){tz+=BP[v*3+2];tn++}tz/=tn||1;

  /* ---- face geometry facts ---- */
  const bb=n=>{const p=J.parts.find(q=>q.n===n);return{c:[0,1,2].map(a=>(p.bb.min[a]+p.bb.max[a])/2),r:[0,1,2].map(a=>(p.bb.max[a]-p.bb.min[a])/2)}};
  const eL=bb('eyeL'),eR=bb('eyeR'),mo=bb('mouth');
  const eyeY=(eL.c[1]+eR.c[1])/2,eyeCX=(eL.c[0]+eR.c[0])/2,eyeX=Math.abs(eR.c[0]-eL.c[0])/2,eyeR=(eL.r[0]+eL.r[1])/2;
  const mouthC=mo.c,neckY=1.75;

  /* ---- procedural open mouth + blush, riding on the head ---- */
  const headF=attach('Head'),chestF=attach('Chest');
  const mouthO=new THREE.Mesh(new THREE.SphereGeometry(1,24,14),new THREE.MeshBasicMaterial({color:0x3c1510,side:THREE.DoubleSide})),tongueO=new THREE.Mesh(new THREE.SphereGeometry(1,16,10),new THREE.MeshBasicMaterial({color:0xd8656c}));
  const mz=surf(mouthC[0],mouthC[1])??1.5;
  mouthO.position.set(mouthC[0],mouthC[1],mz-.02);mouthO.visible=false;mouthO.renderOrder=3;headF.add(mouthO);
  tongueO.position.set(mouthC[0],mouthC[1]-.03,mz-.015);tongueO.visible=false;tongueO.renderOrder=4;headF.add(tongueO);
  const bt=blushTex(),blush=[];
  for(const s of[-1,1]){const x=eyeCX+s*eyeX*1.5,y=mouthC[1]+.22,z=surf(x,y);if(z==null)continue;
    const m=new THREE.Mesh(new THREE.PlaneGeometry(.4,.3),new THREE.MeshBasicMaterial({map:bt,transparent:true,opacity:0,depthWrite:false}));m.position.set(x,y,z+.012);m.renderOrder=2;headF.add(m);blush.push(m)}

  /* ---- colliders ---- */
  const hm=new THREE.MeshBasicMaterial({visible:false}),sph=new THREE.SphereGeometry(1,16,12);
  const colliders=[['Head',[0,2.15,1.0],[.95,.85,.85],'body'],['Chest',[0,1.15,.3],[1.2,1.1,1.5],'body'],
    ['Paw.FL',[-.72,.3,1.1],[.42,.32,.45],'body'],['Paw.FR',[.72,.3,1.1],[.42,.32,.45],'body'],['Paw.HL',[-.85,.3,-.7],[.42,.32,.5],'body'],['Paw.HR',[.85,.3,-.7],[.42,.32,.5],'body']].map(([b,c,r,reg])=>{
    const m=new THREE.Mesh(sph,hm);m.position.set(...c);m.scale.set(...r);m.userData.region=reg;attach(b).add(m);return m});
  const regionOf=l=>l.y>1.72&&l.z>.35?'head':'belly';

  const fit={hatX:0,hatY:top-.05,hatZ:tz*.7,hatR:.36,eyeY,eyeX,eyeCX,eyeR,neckY,z:(x,y)=>surf(x,y)??0,
    scarf:{y:neckY-.12,rx:.95,rz:.8,cz:.85,tube:.085},   // a collar around the neck, not around the whole horizontal body
    prof:profAt,torso:[.5,1.6],patch,patchKey:'naimao'};

  /* ---- pose ---- */
  const dq=new THREE.Quaternion(),de=new THREE.Euler();
  const R=(n,x,y,z)=>{const i=idx[n];de.set(x,y,z,'XYZ');dq.setFromEuler(de);bones[i].quaternion.copy(PQi[i]).multiply(dq).multiply(PQ[i]).multiply(rest[i].q)};
  let infl=0;   // the body puffs out when angry; the eyes / mouth ride on it so they never sink into the skin
  const pose=P=>{
    infl=(P.inflate||0)*1.3;for(const s of['L','R']){const i=ei[s],v=wl(i,0,0,infl);bones[i].position.set(rest[i].p.x+v.x,rest[i].p.y+v.y,rest[i].p.z+v.z)}
    const t=performance.now()/1000,lie=P.lie||0,k=1-.6*lie,sit=P.sit||0,ha=P.ha||0,br=Math.sin(t*2.1)*.012*(1-.5*lie);
    const lean=P.lean||0,nod=P.nod||0,yaw=P.yaw||0,roll=P.roll||0,tilt=P.tilt||0,h=P.hip||0;
    inner.scale.y=1-.05*sit-.12*lie;
    R('Pelvis',0,0,h*.06+tilt*.05);R('Spine',(lean*.2+br)*k,0,tilt*.1);R('Chest',(lean*.25+br*1.5)*k,yaw*.1*k,tilt*.1);
    R('Head',nod*.8,yaw*.8,roll*.7+tilt*.2);
    // every ~9 s (and when laughing) the front-left paw lifts and waves
    const c=t%9,al=P.al||ARM_REST,calm=al[1]>=ARM_REST[1]-.05&&sit<.3&&!lie?1:0,wv=Math.max(ss(0,.5,c)*(1-ss(3.0,3.7,c)),clamp(ha*3,0,1))*calm;
    R('Upper.FL',-1.0*wv,0,0);R('Lower.FL',-.5*wv,0,Math.sin(t*9)*.25*wv);R('Paw.FL',-.3*wv,0,0);
    R('Upper.HL',-h*.25,0,0);R('Upper.HR',h*.25,0,0);
    // tail: a travelling wave, wider when happy
    for(let i=1;i<=5;i++)R('Tail.'+i,0,Math.sin(t*1.5+i*.5)*.04,Math.sin(t*3.0-i*.8)*(.1+.14*ha)*(1-.5*lie)*(i>1?1.1:.6));
    // ears: small twitches, lag behind head turns, droop when asleep
    for(const s of[-1,1]){const tw=Math.max(0,Math.sin(t*.8+s*1.7))>.96?.2:0,n=s<0?'Ear.L':'Ear.R';
      R(n,0,-yaw*.12,-s*(.02+Math.sin(t*1.1+s)*.03+tw+lie*.35)+roll*.1)}
  };

  /* ---- face (blink / look / smile / open mouth / blush) ---- */
  const ei={L:idx['Eye.L'],R:idx['Eye.R']},pi={L:idx['Pupil.L'],R:idx['Pupil.R']},mi={L:idx['Mouth.L'],C:idx['Mouth.C'],R:idx['Mouth.R']};
  const halfW=mo.r[0]*1.05;let lastKey='';
  const place=(i,dx,dy,dz)=>{const v=wl(i,dx,dy,dz);bones[i].position.set(rest[i].p.x+v.x,rest[i].p.y+v.y,rest[i].p.z+v.z)};
  const paint=P=>{
    const key=[P.u,P.l,P.sl,P.arc,P.mo,P.sm,P.bl,P.lx,P.ly,P.pup||1,infl].map(v=>Math.round(v*60)).join(',');if(key===lastKey)return;lastKey=key;
    const closed=clamp(Math.max((P.u-.08)/.92,P.l*.7),0,1),open=Math.abs(P.arc)>.35&&P.u>.9?.14:1-.9*closed;
    for(const s of['L','R']){const sgn=s==='L'?-1:1,e=bones[ei[s]];
      e.scale.set(1,Math.max(.06,open),1);
      de.set(0,0,-sgn*P.sl*.45);dq.setFromEuler(de);e.quaternion.copy(PQi[ei[s]]).multiply(dq).multiply(PQ[ei[s]]).multiply(rest[ei[s]].q);
      // the pupil moves in the eye's own frame; keep it a touch in front of the green surround
      const p=bones[pi[s]];p.position.set(rest[pi[s]].p.x+P.lx*.03,rest[pi[s]].p.y-P.ly*.03,rest[pi[s]].p.z+.03+Math.hypot(P.lx,P.ly)*.02);
      const ps=P.pup||1;p.scale.set(ps,ps,1)}
    const sm=P.sm;
    place(mi.L,0,sm*.06,infl);place(mi.R,0,sm*.06,infl);place(mi.C,0,-sm*.015,infl);
    const m=clamp(P.mo,0,1);
    mouthO.position.z=mz-.02+infl;tongueO.position.z=mz-.015+infl;
    meshes.mouth.visible=m<=.06;   // the smile line is replaced by the open mouth, so the two never show at once
    if(m>.06){mouthO.visible=true;mouthO.scale.set(halfW*(.4+.35*m),.03+.09*m,.05);mouthO.position.y=mouthC[1]-.03-.05*m;mouthO.position.x=mouthC[0];
      tongueO.visible=m>.5;tongueO.scale.set(halfW*.3,.03,.05);tongueO.position.y=mouthC[1]-.03-.1*m}
    else{mouthO.visible=false;tongueO.visible=false}
    for(const b of blush)b.material.opacity=clamp(P.bl,0,1)*.65;
  };
  paint({u:.08,l:0,sl:0,arc:0,mo:0,sm:.5,bl:0,lx:0,ly:0});

  const anchors={head:[headF,[eyeCX,eyeY+.1,1.7]],mouth:[headF,[mouthC[0],mouthC[1],1.8]],belly:[chestF,[0,1.0,1.5]],feet:[group,[0,.1,.4]],top:[headF,[0,top+.3,1.0]]};
  return{group,uniforms,colliders,regionOf,pose,paint,anchors,wearFrame:headF,bodyFrame:inner,fit,hipY:1.2,parts:meshes,bones:by,
    skinGarment:g=>skinGarment(g,skeleton,n=>idx[n],[['Pelvis',.5],['Spine',1.1],['Chest',1.5],['Head',2.0]])};
}
