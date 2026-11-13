import * as THREE from 'three';
import {skinMaterial,patchUV} from './skin.js';

/* 奶屎 (NaiShi): the supplied rigged soft-serve model (tools/mknaishi.mjs packs the GLB into assets/pets/naishi.json).
   15-bone skeleton (Root, Base, three coils, Head, two tip bones, eyes + pupils, three mouth corners). The game's pose parameters
   (lean / nod / yaw / roll / hip …) drive the bones, the face parameters (blink, look, smile, open mouth, blush) drive the eye,
   pupil and mouth bones plus a small procedural open mouth. Exposes the same interface as the other characters. */

const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
const u8=(s,T)=>{const bin=atob(s),u=new Uint8Array(bin.length);for(let i=0;i<bin.length;i++)u[i]=bin.charCodeAt(i);return new T(u.buffer)};

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

export function buildNaiShi(){
  const J=JSON.parse(window.ASSETS.pets.naishi);
  const uniforms={uDent:{value:new THREE.Vector4(0,1,1,0)},uInfl:{value:0},uBelly:{value:0}};
  const BELLY_Y=1.3;
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
  const by={};J.bones.forEach((b,i)=>{by[b.n]=bones[i];(b.p>=0?bones[b.p]:inner).add(bones[i])});
  const rest=J.bones.map(b=>({p:new THREE.Vector3(...b.t),q:new THREE.Quaternion(...b.q)}));
  inner.updateMatrixWorld(true);
  const restM={},restP={};for(const b of J.bones){const o=by[b.n];restM[b.n]=o.matrixWorld.clone();restP[b.n]=new THREE.Vector3().setFromMatrixPosition(o.matrixWorld)}
  const ibm=J.ibm,boneInv=bones.map((_,i)=>new THREE.Matrix4().fromArray(ibm,i*16));
  const skeleton=new THREE.Skeleton(bones,boneInv);
  // a frame that follows a bone but whose rest world frame is the identity, so children use absolute rest-pose coordinates
  const attach=n=>{const o=new THREE.Object3D();o.matrixAutoUpdate=false;o.matrix.copy(restM[n]).invert();by[n].add(o);return o};

  /* ---- meshes ---- */
  const geos={};let bodyPos=null;const allPos=[];
  const MAT=(p,extra={})=>{const m=new THREE.MeshPhysicalMaterial({roughness:p.rough,clearcoat:.2,clearcoatRoughness:.5,...extra});m.color.setRGB(p.color[0],p.color[1],p.color[2]);return m};
  const meshes={};
  for(const p of J.parts){
    const {g,pos}=decode(p);geos[p.n]=g;allPos.push(pos);if(p.kind==='body')bodyPos=pos;
    if(p.kind==='body')patchUV(g,[0,1.65,3.2,3.4]);   // same PBR skin set as 奶蛙 (albedo / normal / roughness)
    const mat=p.kind==='body'?skinMaterial(0xffffff,true,{clearcoat:.2,clearcoatRoughness:.5}):MAT(p,p.kind==='mouth'?{side:THREE.DoubleSide,clearcoat:0}:p.kind==='pupil'?{polygonOffset:true,polygonOffsetFactor:-8,polygonOffsetUnits:-8}:{});
    if(p.kind==='body'){mat.onBeforeCompile=patch;mat.customProgramCacheKey=()=>'naishi'}
    const m=new THREE.SkinnedMesh(g,mat);m.frustumCulled=false;inner.add(m);m.bind(skeleton,new THREE.Matrix4());meshes[p.n]=m;
  }

  /* ---- surface tables, measured from the rest-pose geometry ---- */
  const CS=.05,X0=-2,Y0=0,NX=80,NY=76,grid=new Float32Array(NX*NY).fill(-99);
  for(const P of allPos)for(let v=0;v<P.length/3;v++){const i=Math.round((P[v*3]-X0)/CS),j=Math.round((P[v*3+1]-Y0)/CS);if(i<0||j<0||i>=NX||j>=NY)continue;if(P[v*3+2]>grid[j*NX+i])grid[j*NX+i]=P[v*3+2]}
  const surf=(x,y)=>{const i=Math.round((x-X0)/CS),j=Math.round((y-Y0)/CS);let z=-99;
    for(let b=-1;b<=1;b++)for(let a=-1;a<=1;a++){const ii=i+a,jj=j+b;if(ii>=0&&jj>=0&&ii<NX&&jj<NY)z=Math.max(z,grid[jj*NX+ii])}
    return z<-50?null:z};
  const PD=.04,PN=88,prof=new Float32Array(PN*3);
  for(let r=0;r<PN;r++){const y=r*PD;let rx=0,zf=-9,zb=9,any=false;
    for(let v=0;v<bodyPos.length/3;v++){if(Math.abs(bodyPos[v*3+1]-y)>PD*1.2)continue;any=true;rx=Math.max(rx,Math.abs(bodyPos[v*3]));zf=Math.max(zf,bodyPos[v*3+2]);zb=Math.min(zb,bodyPos[v*3+2])}
    if(any){prof[r*3]=rx;prof[r*3+1]=zf;prof[r*3+2]=zb}else{prof[r*3]=-1}}
  for(let r=PN-1;r>=0;r--)if(prof[r*3]<0){const s=r<PN-1?r+1:r-1;for(let k=0;k<3;k++)prof[r*3+k]=prof[s*3+k]}
  const profAt=y=>{const f=clamp(y/PD,0,PN-1.001),i=Math.floor(f),t=f-i,g=k=>prof[i*3+k]*(1-t)+prof[(i+1)*3+k]*t;return{rx:g(0),zf:g(1),zb:g(2)}};
  const side=y=>profAt(y).rx;
  let top=0;for(let v=0;v<bodyPos.length/3;v++)top=Math.max(top,bodyPos[v*3+1]);
  // hats sit where the tip is still about as wide as a hat: scan down from the top
  let hatY=top-.2;for(let y=top-.1;y>1;y-=.02){hatY=y;if(side(y)>=.42)break}
  let hx=0,hz=0,hn=0;for(let v=0;v<bodyPos.length/3;v++)if(Math.abs(bodyPos[v*3+1]-hatY)<.04){hx+=bodyPos[v*3];hz+=bodyPos[v*3+2];hn++}
  hx/=hn||1;hz/=hn||1;

  /* ---- face geometry facts ---- */
  const bb=n=>{const p=J.parts.find(q=>q.n===n);return{c:[0,1,2].map(a=>(p.bb.min[a]+p.bb.max[a])/2),r:[0,1,2].map(a=>(p.bb.max[a]-p.bb.min[a])/2)}};
  const eL=bb('eyeL'),eR=bb('eyeR'),mo=bb('mouth');
  const eyeY=(eL.c[1]+eR.c[1])/2,eyeCX=(eL.c[0]+eR.c[0])/2,eyeX=Math.abs(eR.c[0]-eL.c[0])/2,eyeR=(eL.r[0]+eL.r[1])/2;
  const mouthC=mo.c,neckY=2.25;

  /* ---- procedural open mouth + blush, riding on the head ---- */
  const headF=attach('Head'),spineF=attach('Coil_Middle');
  const mouthMat=new THREE.MeshBasicMaterial({color:0x3c1510,side:THREE.DoubleSide}),tongueMat=new THREE.MeshBasicMaterial({color:0xd8656c});
  const mouthO=new THREE.Mesh(new THREE.SphereGeometry(1,24,14),mouthMat),tongueO=new THREE.Mesh(new THREE.SphereGeometry(1,16,10),tongueMat);
  const mz=(surf(mouthC[0],mouthC[1])??.6);
  mouthO.position.set(mouthC[0],mouthC[1],mz-.02);mouthO.visible=false;mouthO.renderOrder=3;headF.add(mouthO);
  tongueO.position.set(mouthC[0],mouthC[1]-.03,mz-.015);tongueO.visible=false;tongueO.renderOrder=4;headF.add(tongueO);
  const bt=blushTex(),blush=[];
  for(const s of[-1,1]){const x=eyeCX+s*eyeX*1.55,y=mouthC[1]+.12,z=surf(x,y);if(z==null)continue;
    const m=new THREE.Mesh(new THREE.PlaneGeometry(.34,.24),new THREE.MeshBasicMaterial({map:bt,transparent:true,opacity:0,depthWrite:false}));m.position.set(x,y,z+.012);m.renderOrder=2;headF.add(m);blush.push(m)}

  /* ---- colliders (ellipsoids on the bones) ---- */
  const hm=new THREE.MeshBasicMaterial({visible:false}),sph=new THREE.SphereGeometry(1,16,12);
  const colliders=[['Coil_Lower',[0,.72,0],[1.6,.62,1.55]],['Coil_Middle',[0,1.35,0],[1.4,.62,1.35]],['Coil_Upper',[0,1.95,0],[1.2,.55,1.15]],['Head',[-.1,2.6,0],[.95,.62,.7]]].map(([b,c,r])=>{
    const m=new THREE.Mesh(sph,hm);m.position.set(...c);m.scale.set(...r);m.userData.region='body';attach(b).add(m);return m});
  const regionOf=l=>l.y>2.25?'head':'belly';

  const fit={hatX:hx,hatY,hatZ:hz,hatR:clamp(side(hatY)*.78,.24,.4),eyeY,eyeX,eyeCX,eyeR,neckY,z:(x,y)=>surf(x,y)??0,
    scarf:{y:neckY-.12,rx:side(neckY-.12)+.03,rz:(profAt(neckY-.12).zf-profAt(neckY-.12).zb)/2+.03,cz:(profAt(neckY-.12).zf+profAt(neckY-.12).zb)/2,tube:.085},
    prof:profAt,torso:[.3,2.0],patch,patchKey:'naishi'};

  /* ---- pose ---- */
  const dq=new THREE.Quaternion(),de=new THREE.Euler();
  const R=(n,x,y,z)=>{const i=J.bones.findIndex(b=>b.n===n);de.set(x,y,z,'XYZ');dq.setFromEuler(de);bones[i].quaternion.copy(rest[i].q).multiply(dq)};
  let infl=0;   // the body puffs out when angry; the eyes / mouth ride on it so they never sink into the skin
  const pose=P=>{
    infl=(P.inflate||0)*1.3;for(const s of['L','R'])bones[ei[s]].position.z=rest[ei[s]].p.z+infl;
    const t=performance.now()/1000,lie=P.lie||0,k=1-.6*lie,sit=P.sit||0,ha=P.ha||0,br=Math.sin(t*2.1)*.012*(1-.5*lie);
    const lean=P.lean||0,nod=P.nod||0,yaw=P.yaw||0,roll=P.roll||0,tilt=P.tilt||0,hip=P.hip||0;
    inner.scale.y=1-.05*sit;
    R('Base',0,0,hip*.08);
    R('Coil_Lower',lean*.12*k+br,yaw*.1*k,(roll*.18+tilt*.05+Math.sin(t*1.3)*.012)*k+hip*.06);
    R('Coil_Middle',lean*.2*k+br*1.4,yaw*.15*k,(roll*.2+tilt*.1+Math.sin(t*1.3-.4)*.018)*k-hip*.06);
    R('Coil_Upper',(lean*.25+nod*.12)*k+br*1.6,yaw*.25*k,(roll*.25+tilt*.15+Math.sin(t*1.3-.8)*.025)*k);
    R('Head',nod*.45,yaw*.4*k,roll*.3+tilt*.3);
    R('Tip_01',0,0,Math.sin(t*2.2)*(.06+.1*ha));
    R('Tip_02',0,0,Math.sin(t*2.2-.8)*(.1+.14*ha));
  };

  /* ---- face (driven every frame; cheap early-out when nothing changed) ---- */
  const ei={L:J.bones.findIndex(b=>b.n==='Eye.L'),R:J.bones.findIndex(b=>b.n==='Eye.R')},pi={L:J.bones.findIndex(b=>b.n==='Pupil.L'),R:J.bones.findIndex(b=>b.n==='Pupil.R')};
  const mi={L:J.bones.findIndex(b=>b.n==='Mouth.L'),C:J.bones.findIndex(b=>b.n==='Mouth.C'),R:J.bones.findIndex(b=>b.n==='Mouth.R')};
  const halfW=(mo.r[0])*1.05;let lastKey='';
  const paint=P=>{
    const key=[P.u,P.l,P.sl,P.arc,P.mo,P.sm,P.bl,P.lx,P.ly,P.pup||1,infl].map(v=>Math.round(v*60)).join(',');if(key===lastKey)return;lastKey=key;
    const closed=clamp(Math.max((P.u-.08)/.92,P.l*.7),0,1),open=Math.abs(P.arc)>.35&&P.u>.9?.14:1-.9*closed;
    for(const s of['L','R']){const sgn=s==='L'?-1:1,e=bones[ei[s]],p=bones[pi[s]];
      e.scale.set(1,Math.max(.06,open),1);
      de.set(0,0,-sgn*P.sl*.45);dq.setFromEuler(de);e.quaternion.copy(rest[ei[s]].q).multiply(dq);
      p.position.set(rest[pi[s]].p.x+P.lx*.03,rest[pi[s]].p.y-P.ly*.03,rest[pi[s]].p.z+.03+Math.hypot(P.lx,P.ly)*.02);
      const ps=P.pup||1;p.scale.set(ps,ps,1)}
    // smile / frown moves the two mouth corners (the centre dips slightly the other way)
    const sm=P.sm;
    bones[mi.L].position.set(rest[mi.L].p.x,rest[mi.L].p.y+sm*.05,rest[mi.L].p.z+infl);
    bones[mi.R].position.set(rest[mi.R].p.x,rest[mi.R].p.y+sm*.05,rest[mi.R].p.z+infl);
    bones[mi.C].position.set(rest[mi.C].p.x,rest[mi.C].p.y-sm*.012,rest[mi.C].p.z+infl);
    const m=clamp(P.mo,0,1);
    mouthO.position.z=mz-.02+infl;tongueO.position.z=mz-.015+infl;
    meshes.mouth.visible=m<=.06;
    if(m>.06){mouthO.visible=true;mouthO.scale.set(halfW*(.4+.35*m),.02+.065*m,.04);mouthO.position.y=mouthC[1]-.01-.03*m;mouthO.position.x=mouthC[0];
      tongueO.visible=m>.5;tongueO.scale.set(halfW*.3,.022,.04);tongueO.position.y=mouthC[1]-.01-.065*m}
    else{mouthO.visible=false;tongueO.visible=false}
    for(const b of blush)b.material.opacity=clamp(P.bl,0,1)*.65;
  };
  paint({u:.08,l:0,sl:0,arc:0,mo:0,sm:.5,bl:0,lx:0,ly:0});

  const anchors={head:[headF,[eyeCX,eyeY+.1,.8]],mouth:[headF,[mouthC[0],mouthC[1],.9]],belly:[spineF,[0,1.1,1.45]],feet:[group,[0,.1,.4]],top:[headF,[0,top+.3,.1]]};
  return{group,uniforms,colliders,regionOf,pose,paint,anchors,wearFrame:headF,bodyFrame:inner,fit,hipY:1.3,parts:meshes,bones:by,skinGarment:null};
}
