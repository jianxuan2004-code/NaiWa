import * as THREE from 'three';
import {skinMaterial,patchUV,CREAM_UV} from './skin.js';
import {skinGarment} from './garments.js';

/* 奶鱼 (NaiYu v5): the supplied rigged seal-fish (tools/mknaiyu.mjs packs the GLB into assets/pets/naiyu.json). 18 bones: body chain, head, eyes +
   pupils, three mouth corners, two 2-bone side fins, tail base and two flukes. Rendered with the same PBR skin set as 奶蛙 (albedo / normal /
   roughness; the cream belly uses the atlas' pale patch) and the 奶蛙 jelly shader; the face parts are flat colours. */

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
  g.setIndex(new THREE.BufferAttribute(u8(p.I,p.idx32?Uint32Array:Uint16Array),1));return{g,pos,si,sw};
}
function blushTex(){const c=document.createElement('canvas');c.width=c.height=64;const x=c.getContext('2d'),r=x.createRadialGradient(32,32,0,32,32,32);
  r.addColorStop(0,'rgba(255,110,100,.9)');r.addColorStop(1,'rgba(255,110,100,0)');x.fillStyle=r;x.fillRect(0,0,64,64);const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;return t}

export function buildNaiYu(){
  const J=JSON.parse(window.ASSETS.pets.naiyu);
  const uniforms={uDent:{value:new THREE.Vector4(0,1,1,0)},uInfl:{value:0},uBelly:{value:0}};
  const BELLY_Y=2.0;
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
  const wl=(i,x,y,z)=>new THREE.Vector3(x,y,z).applyQuaternion(PQi[i]);
  const boneInv=bones.map((_,i)=>new THREE.Matrix4().fromArray(J.ibm,i*16));
  const skeleton=new THREE.Skeleton(bones,boneInv);
  const attach=n=>{const o=new THREE.Object3D();o.matrixAutoUpdate=false;o.matrix.copy(restM[n]).invert();by[n].add(o);return o};

  /* ---- meshes ---- */
  const bodyPos={all:[]},meshes={},finIdx=new Set(['Fin.L','FinTip.L','Fin.R','FinTip.R'].map(n=>idx[n]));let finMask=null;
  const FLAT=(p,extra={})=>{const m=new THREE.MeshPhysicalMaterial({roughness:p.rough,clearcoat:.2,clearcoatRoughness:.5,...extra});m.color.setRGB(p.color[0],p.color[1],p.color[2]);return m};
  for(const p of J.parts){
    const {g,pos,si,sw}=decode(p);let mat;
    if(p.kind==='skin'||p.kind==='belly'){
      patchUV(g,p.kind==='belly'?[0,1.97,1.0,1.7]:[0,2.1,2.6,3.9],p.kind==='belly'?CREAM_UV:undefined);
      mat=skinMaterial(0xffffff,true,{clearcoat:.2,clearcoatRoughness:.5});mat.onBeforeCompile=patch;mat.customProgramCacheKey=()=>'naiyu'}
    else mat=FLAT(p,p.kind==='mouth'||p.kind==='lip'?{side:THREE.DoubleSide,clearcoat:0}:p.kind==='pupil'?{polygonOffset:true,polygonOffsetFactor:-8,polygonOffsetUnits:-8}:{});
    const m=new THREE.SkinnedMesh(g,mat);m.frustumCulled=false;inner.add(m);m.bind(skeleton,new THREE.Matrix4());meshes[p.n]=m;
    if(p.n==='body'){bodyPos.body=pos;finMask=new Uint8Array(pos.length/3);
      for(let v=0;v<finMask.length;v++){let b=0,bw=-1;for(let k=0;k<4;k++)if(sw[v*4+k]>bw){bw=sw[v*4+k];b=si[v*4+k]}finMask[v]=finIdx.has(b)?1:0}}
    if(p.n==='body'||p.kind==='eye'||p.kind==='pupil'||p.kind==='mouth'||p.kind==='lip'||p.kind==='belly')bodyPos.all.push(pos);
  }
  const BP=bodyPos.body;

  /* ---- surface tables (fins are left out so clothes and glasses fit the torso) ---- */
  const CS=.05,X0=-2,Y0=0,NX=80,NY=84,grid=new Float32Array(NX*NY).fill(-99);
  for(const P of bodyPos.all)for(let v=0;v<P.length/3;v++){if(P===BP&&finMask[v])continue;const i=Math.round((P[v*3]-X0)/CS),j=Math.round((P[v*3+1]-Y0)/CS);if(i<0||j<0||i>=NX||j>=NY)continue;if(P[v*3+2]>grid[j*NX+i])grid[j*NX+i]=P[v*3+2]}
  const surf=(x,y)=>{const i=Math.round((x-X0)/CS),j=Math.round((y-Y0)/CS);let z=-99;
    for(let b=-1;b<=1;b++)for(let a=-1;a<=1;a++){const ii=i+a,jj=j+b;if(ii>=0&&jj>=0&&ii<NX&&jj<NY)z=Math.max(z,grid[jj*NX+ii])}
    return z<-50?null:z};
  const PD=.04,PN=100,prof=new Float32Array(PN*3);
  for(let r=0;r<PN;r++){const y=r*PD;let rx=0,zf=-9,zb=9,any=false;
    for(let v=0;v<BP.length/3;v++){if(finMask[v]||Math.abs(BP[v*3+1]-y)>PD*1.2)continue;any=true;rx=Math.max(rx,Math.abs(BP[v*3]));if(Math.abs(BP[v*3])<.4){zf=Math.max(zf,BP[v*3+2]);zb=Math.min(zb,BP[v*3+2])}}
    if(any&&zf>-8){prof[r*3]=rx;prof[r*3+1]=zf;prof[r*3+2]=zb}else prof[r*3]=-1}
  for(let r=PN-1;r>=0;r--)if(prof[r*3]<0){const s=r<PN-1?r+1:r-1;for(let k=0;k<3;k++)prof[r*3+k]=prof[s*3+k]}
  const profAt=y=>{const f=clamp(y/PD,0,PN-1.001),i=Math.floor(f),t=f-i,g=k=>prof[i*3+k]*(1-t)+prof[(i+1)*3+k]*t;return{rx:g(0),zf:g(1),zb:g(2)}};
  const side=y=>profAt(y).rx;
  let top=0,tz=0,tn=0;for(let v=0;v<BP.length/3;v++)if(!finMask[v]&&Math.abs(BP[v*3])<.3)top=Math.max(top,BP[v*3+1]);
  for(let v=0;v<BP.length/3;v++)if(!finMask[v]&&Math.abs(BP[v*3])<.3&&BP[v*3+1]>top-.08){tz+=BP[v*3+2];tn++}tz/=tn||1;

  /* ---- face geometry facts ---- */
  const bb=n=>{const p=J.parts.find(q=>q.n===n);return{c:[0,1,2].map(a=>(p.bb.min[a]+p.bb.max[a])/2),r:[0,1,2].map(a=>(p.bb.max[a]-p.bb.min[a])/2)}};
  const eL=bb('eyeL'),eR=bb('eyeR'),mo=bb('lip');
  const eyeY=(eL.c[1]+eR.c[1])/2,eyeCX=(eL.c[0]+eR.c[0])/2,eyeX=Math.abs(eR.c[0]-eL.c[0])/2,eyeR=(eL.r[0]+eL.r[1])/2;
  const mouthC=mo.c,neckY=2.9;

  /* ---- procedural open mouth + blush, riding on the head ---- */
  const headF=attach('Head'),bodyF=attach('BodyUpper');
  const mouthO=new THREE.Mesh(new THREE.SphereGeometry(1,24,14),new THREE.MeshBasicMaterial({color:0x3c1510,side:THREE.DoubleSide})),tongueO=new THREE.Mesh(new THREE.SphereGeometry(1,16,10),new THREE.MeshBasicMaterial({color:0xd8656c}));
  const mz=surf(mouthC[0],mouthC[1])??.5;
  mouthO.position.set(mouthC[0],mouthC[1],mz-.02);mouthO.visible=false;mouthO.renderOrder=3;headF.add(mouthO);
  tongueO.position.set(mouthC[0],mouthC[1]-.03,mz-.015);tongueO.visible=false;tongueO.renderOrder=4;headF.add(tongueO);
  const bt=blushTex(),blush=[];
  for(const s of[-1,1]){const x=eyeCX+s*eyeX*1.7,y=mouthC[1]+.12,z=surf(x,y);if(z==null)continue;
    const m=new THREE.Mesh(new THREE.PlaneGeometry(.3,.22),new THREE.MeshBasicMaterial({map:bt,transparent:true,opacity:0,depthWrite:false}));m.position.set(x,y,z+.012);m.renderOrder=2;headF.add(m);blush.push(m)}

  /* ---- colliders ---- */
  const hm=new THREE.MeshBasicMaterial({visible:false}),sph=new THREE.SphereGeometry(1,16,12);
  const colliders=[['Head',[0,3.3,0],[.7,.62,.6],'body'],['BodyUpper',[0,2.15,0],[.95,1.1,.7],'body'],['BodyLower',[0,1.1,0],[.7,.9,.6],'body'],
    ['FinTip.L',[-1.0,2.65,0],[.4,.3,.2],'arm'],['FinTip.R',[1.0,2.65,0],[.4,.3,.2],'arm']].map(([b,c,r,reg])=>{
    const m=new THREE.Mesh(sph,hm);m.position.set(...c);m.scale.set(...r);m.userData.region=reg;attach(b).add(m);return m});
  const regionOf=l=>Math.abs(l.x)>.85&&l.y>2.0&&l.y<3.0?'arm':l.y>2.95?'head':'belly';

  const fit={hatX:0,hatY:top-.04,hatZ:tz*.5,hatR:clamp(side(top-.22)*.78,.24,.42),eyeY,eyeX,eyeCX,eyeR,neckY,z:(x,y)=>surf(x,y)??0,
    scarf:{y:neckY-.12,rx:side(neckY-.12)+.03,rz:(profAt(neckY-.12).zf-profAt(neckY-.12).zb)/2+.03,cz:(profAt(neckY-.12).zf+profAt(neckY-.12).zb)/2,tube:.085},
    prof:profAt,torso:[.9,2.8],patch,patchKey:'naiyu'};

  /* ---- pose ---- */
  const dq=new THREE.Quaternion(),de=new THREE.Euler();
  const R=(n,x,y,z)=>{const i=idx[n];de.set(x,y,z,'XYZ');dq.setFromEuler(de);bones[i].quaternion.copy(PQi[i]).multiply(dq).multiply(PQ[i]).multiply(rest[i].q)};
  let armPad=0,infl=0;   // armPad: clothes hold the fins away from the body; infl: the body puffs out when angry, the face rides on it
  const pose=P=>{
    infl=(P.inflate||0)*1.3;for(const s of['L','R']){const i=ei[s],v=wl(i,0,0,infl);bones[i].position.set(rest[i].p.x+v.x,rest[i].p.y+v.y,rest[i].p.z+v.z)}
    const t=performance.now()/1000,lie=P.lie||0,k=1-.6*lie,sit=P.sit||0,ha=P.ha||0,br=Math.sin(t*2.1)*.012*(1-.5*lie);
    const lean=P.lean||0,nod=P.nod||0,yaw=P.yaw||0,roll=P.roll||0,tilt=P.tilt||0,h=P.hip||0;
    inner.scale.y=1-.05*sit;
    R('Root',0,0,h*.05);R('BodyUpper',(lean*.3+br)*k,yaw*.12*k,tilt*.12+roll*.08);
    R('Head',nod*.8,yaw*.8,roll*.7+tilt*.2);
    // fins: they hang out at the sides; they flap lazily, lift when happy, and every ~9 s the left one waves
    const c=t%9,al=P.al||ARM_REST,ar=P.ar||ARM_REST,calm=al[1]>=ARM_REST[1]-.05&&sit<.3&&!lie?1:0;
    const wv=Math.max(ss(0,.5,c)*(1-ss(3.0,3.7,c)),clamp(ha*3,0,1))*calm,out=a=>Math.max(0,(a-ARM_REST[1])*.8);
    const fl=armPad+Math.sin(t*2.2)*.12+ha*.2;
    R('Fin.L',(al[0]-ARM_REST[0])*.3*(1-wv),0,-(1-wv)*(fl+out(al[1]))-wv*(.9+Math.sin(t*7)*.12));R('FinTip.L',0,0,-Math.sin(t*2.2-.8)*.15*(1-wv)-wv*Math.sin(t*9)*.3);
    R('Fin.R',(ar[0]-ARM_REST[0])*.3,0,fl+out(ar[1])+Math.sin(t*2.2+1)*.04);R('FinTip.R',0,0,Math.sin(t*2.2-.8+1)*.15);
    // tail: the body sways, the flukes beat
    R('BodyLower',0,Math.sin(t*2.4)*(.06+.1*ha)*(1-.5*lie),0);R('TailBase',0,Math.sin(t*2.4-.7)*(.12+.18*ha)*(1-.5*lie),0);
    R('Fluke.L',0,0,Math.sin(t*3.0-1.2)*(.08+.14*ha));R('Fluke.R',0,0,-Math.sin(t*3.0-1.2)*(.08+.14*ha));
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
      const p=bones[pi[s]];p.position.set(rest[pi[s]].p.x+P.lx*.025,rest[pi[s]].p.y-P.ly*.025,rest[pi[s]].p.z+.025+Math.hypot(P.lx,P.ly)*.015);
      const ps=P.pup||1;p.scale.set(ps,ps,1)}
    const sm=P.sm;
    place(mi.L,0,sm*.04,infl);place(mi.R,0,sm*.04,infl);place(mi.C,0,-sm*.01,infl);
    const m=clamp(P.mo,0,1);
    mouthO.position.z=mz-.02+infl;tongueO.position.z=mz-.015+infl;
    meshes.mouth.visible=meshes.lip.visible=m<=.06;   // the closed mouth is replaced by the open one, so the two never show at once
    if(m>.06){mouthO.visible=true;mouthO.scale.set(halfW*(.4+.35*m),.025+.075*m,.04);mouthO.position.y=mouthC[1]-.015-.04*m;mouthO.position.x=mouthC[0];
      tongueO.visible=m>.5;tongueO.scale.set(halfW*.3,.025,.04);tongueO.position.y=mouthC[1]-.015-.08*m}
    else{mouthO.visible=false;tongueO.visible=false}
    for(const b of blush)b.material.opacity=clamp(P.bl,0,1)*.65;
  };
  paint({u:.08,l:0,sl:0,arc:0,mo:0,sm:.5,bl:0,lx:0,ly:0});

  const anchors={head:[headF,[eyeCX,eyeY+.1,.8]],mouth:[headF,[mouthC[0],mouthC[1],.8]],belly:[bodyF,[0,1.0,.9]],feet:[group,[0,.1,.4]],top:[headF,[0,top+.3,.1]]};
  return{group,uniforms,colliders,regionOf,pose,paint,anchors,wearFrame:headF,bodyFrame:inner,fit,hipY:1.9,parts:meshes,bones:by,setArmPad:p=>{armPad=p*2.4},
    skinGarment:g=>skinGarment(g,skeleton,n=>idx[n],[['BodyLower',1.0],['Root',1.9],['BodyUpper',2.25],['Head',2.9]])};
}
