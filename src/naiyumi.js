import * as THREE from 'three';
import {skinGarment} from './garments.js';

/* 奶玉米 (NaiYuMi): the supplied rigged corn cob (tools/mkglb.mjs packs the GLB into assets/pets/naiyumi.json). 25 bones: stem, a 3-joint cob + tip,
   eyes with pupils and three smile bones on the face, and four 3-joint husk leaves (they act as its arms: they open when it is happy, droop when it is
   sad, and one waves now and then). Kernels, husks and face keep the model's own colours; the jelly shader gives pokes and breathing. */

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

export function buildNaiYuMi(){
  const J=JSON.parse(window.ASSETS.pets.naiyumi);
  const uniforms={uDent:{value:new THREE.Vector4(0,1,1,0)},uInfl:{value:0},uBelly:{value:0}};
  const BELLY_Y=1.4;
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
  const PQ=J.bones.map(b=>b.p>=0?restQ[J.bones[b.p].n]:new THREE.Quaternion()),PQi=PQ.map(q=>q.clone().invert());
  const boneInv=bones.map((_,i)=>new THREE.Matrix4().fromArray(J.ibm,i*16));
  const skeleton=new THREE.Skeleton(bones,boneInv);
  const attach=n=>{const o=new THREE.Object3D();o.matrixAutoUpdate=false;o.matrix.copy(restM[n]).invert();by[n].add(o);return o};

  /* ---- meshes ---- */
  const meshes={},bodyPos={body:[],all:[]};
  const FLAT=(p,extra={})=>{const m=new THREE.MeshPhysicalMaterial({roughness:p.rough,clearcoat:.2,clearcoatRoughness:.5,...extra});m.color.setRGB(p.color[0],p.color[1],p.color[2]);return m};
  for(const p of J.parts){
    const {g,pos}=decode(p);
    const mat=FLAT(p,p.kind==='mouth'?{side:THREE.DoubleSide,clearcoat:0}:p.kind==='pupil'?{polygonOffset:true,polygonOffsetFactor:-8,polygonOffsetUnits:-8}:p.n==='m3'||p.n==='m4'||p.n==='m5'?{side:THREE.DoubleSide}:{});
    if(p.n==='m0'||p.n==='m1'||p.n==='m2'){mat.onBeforeCompile=patch;mat.customProgramCacheKey=()=>'naiyumi'}
    const m=new THREE.SkinnedMesh(g,mat);m.frustumCulled=false;if(!/^m[012]$/.test(p.n))m.userData.noDirt=true;inner.add(m);m.bind(skeleton,new THREE.Matrix4());meshes[p.n]=m;
    if(/^m[012]$/.test(p.n))bodyPos.body.push(pos);if(/^m[012]$/.test(p.n)||p.kind==='eye'||p.kind==='pupil'||p.kind==='mouth')bodyPos.all.push(pos);
  }

  /* ---- surface tables ---- */
  const CS=.05,X0=-2,Y0=0,NX=80,NY=84,grid=new Float32Array(NX*NY).fill(-99);
  for(const P of bodyPos.all)for(let v=0;v<P.length/3;v++){const i=Math.round((P[v*3]-X0)/CS),j=Math.round((P[v*3+1]-Y0)/CS);if(i<0||j<0||i>=NX||j>=NY)continue;if(P[v*3+2]>grid[j*NX+i])grid[j*NX+i]=P[v*3+2]}
  const surf=(x,y)=>{const i=Math.round((x-X0)/CS),j=Math.round((y-Y0)/CS);let z=-99;
    for(let b=-1;b<=1;b++)for(let a=-1;a<=1;a++){const ii=i+a,jj=j+b;if(ii>=0&&jj>=0&&ii<NX&&jj<NY)z=Math.max(z,grid[jj*NX+ii])}
    return z<-50?null:z};
  const PD=.04,PN=100,prof=new Float32Array(PN*3);
  for(let r=0;r<PN;r++){const y=r*PD;let rx=0,zf=-9,zb=9,any=false;
    for(const P of bodyPos.body)for(let v=0;v<P.length/3;v++){if(Math.abs(P[v*3+1]-y)>PD*1.2)continue;any=true;rx=Math.max(rx,Math.abs(P[v*3]));zf=Math.max(zf,P[v*3+2]);zb=Math.min(zb,P[v*3+2])}
    if(any){prof[r*3]=rx;prof[r*3+1]=zf;prof[r*3+2]=zb}else prof[r*3]=-1}
  for(let r=PN-1;r>=0;r--)if(prof[r*3]<0){const s=r<PN-1?r+1:r-1;for(let k=0;k<3;k++)prof[r*3+k]=prof[s*3+k]}
  const profAt=y=>{const f=clamp(y/PD,0,PN-1.001),i=Math.floor(f),t=f-i,g=k=>prof[i*3+k]*(1-t)+prof[(i+1)*3+k]*t;return{rx:g(0),zf:g(1),zb:g(2)}};
  const side=y=>profAt(y).rx;
  let top=0;for(const P of bodyPos.body)for(let v=0;v<P.length/3;v++)top=Math.max(top,P[v*3+1]);
  let hatY=top-.2;for(let y=top-.1;y>1;y-=.02){hatY=y;if(side(y)>=.4)break}

  /* ---- face facts ---- */
  const bb=n=>{const p=J.parts.find(q=>q.n===n);return{c:[0,1,2].map(a=>(p.bb.min[a]+p.bb.max[a])/2),r:[0,1,2].map(a=>(p.bb.max[a]-p.bb.min[a])/2)}};
  const eL=bb('eyeL'),eR=bb('eyeR'),mo=bb('mouth');
  const eyeY=(eL.c[1]+eR.c[1])/2,eyeX=Math.abs(eR.c[0]-eL.c[0])/2,eyeR=(eL.r[0]+eL.r[1])/2,mouthC=mo.c,neckY=2.2;

  /* ---- open mouth + blush ---- */
  const headF=attach('Cob.Upper'),midF=attach('Cob.Middle');
  const mouthO=new THREE.Mesh(new THREE.SphereGeometry(1,24,14),new THREE.MeshBasicMaterial({color:0x3c1510,side:THREE.DoubleSide})),tongueO=new THREE.Mesh(new THREE.SphereGeometry(1,16,10),new THREE.MeshBasicMaterial({color:0xd8656c}));
  const mz=surf(mouthC[0],mouthC[1])??.7;
  mouthO.position.set(mouthC[0],mouthC[1],mz-.02);mouthO.visible=false;mouthO.renderOrder=3;headF.add(mouthO);
  tongueO.position.set(mouthC[0],mouthC[1]-.03,mz-.015);tongueO.visible=false;tongueO.renderOrder=4;headF.add(tongueO);
  const bt=blushTex(),blush=[];
  for(const s of[-1,1]){const x=s*eyeX*1.45,y=mouthC[1]+.15,z=surf(x,y);if(z==null)continue;
    const m=new THREE.Mesh(new THREE.PlaneGeometry(.3,.22),new THREE.MeshBasicMaterial({map:bt,transparent:true,opacity:0,depthWrite:false}));m.position.set(x,y,z+.02);m.renderOrder=2;headF.add(m);blush.push(m)}

  /* ---- colliders ---- */
  const hm=new THREE.MeshBasicMaterial({visible:false}),sph=new THREE.SphereGeometry(1,16,12);
  const colliders=[['Cob.Lower',[0,.95,0],[.72,.85,.68],'body'],['Cob.Middle',[0,1.9,0],[.75,.8,.7],'body'],['Cob.Upper',[0,3.0,0],[.65,.85,.62],'body'],
    ['Leaf.Front.L.2',[-.8,1.7,.35],[.5,1.0,.3],'arm'],['Leaf.Front.R.2',[.8,1.7,.35],[.5,1.0,.3],'arm']].map(([b,c,r,reg])=>{
    const m=new THREE.Mesh(sph,hm);m.position.set(...c);m.scale.set(...r);m.userData.region=reg;attach(b).add(m);return m});
  const regionOf=l=>Math.abs(l.x)>.9&&l.y>.4&&l.y<3.3?'arm':l.y>2.1?'head':'belly';

  const fit={hatX:0,hatY:hatY,hatZ:0,hatR:clamp(side(hatY)*.78,.24,.4),eyeY,eyeX,eyeCX:0,eyeR,neckY,z:(x,y)=>surf(x,y)??0,
    scarf:{y:neckY-.12,rx:side(neckY-.12)+.04,rz:(profAt(neckY-.12).zf-profAt(neckY-.12).zb)/2+.04,cz:(profAt(neckY-.12).zf+profAt(neckY-.12).zb)/2,tube:.085},
    prof:profAt,torso:[.8,2.1],patch,patchKey:'naiyumi'};

  /* ---- pose (rotations about world axes in the rest pose) ---- */
  const dq=new THREE.Quaternion(),de=new THREE.Euler();
  const R=(n,x,y,z)=>{const i=idx[n];de.set(x,y,z,'XYZ');dq.setFromEuler(de);bones[i].quaternion.copy(PQi[i]).multiply(dq).multiply(PQ[i]).multiply(rest[i].q)};
  let armPad=0,infl=0;
  const pose=P=>{
    infl=(P.inflate||0)*1.3;for(const s of['L','R']){const i=ei[s];bones[i].position.set(rest[i].p.x,rest[i].p.y,rest[i].p.z+infl)}
    const t=performance.now()/1000,lie=P.lie||0,k=1-.6*lie,sit=P.sit||0,ha=P.ha||0,br=Math.sin(t*2.1)*.012*(1-.5*lie);
    const lean=P.lean||0,nod=P.nod||0,yaw=P.yaw||0,roll=P.roll||0,tilt=P.tilt||0,h=P.hip||0;
    inner.scale.y=1-.05*sit;
    R('Root',0,0,h*.04);
    R('Cob.Lower',(lean*.1+br)*k,yaw*.1*k,(roll*.12+tilt*.05+Math.sin(t*1.3)*.012)*k);
    R('Cob.Middle',(lean*.15+br*1.4)*k,yaw*.15*k,(roll*.15+tilt*.1+Math.sin(t*1.3-.4)*.016)*k);
    R('Cob.Upper',(lean*.2+nod*.6)*k+br*1.6,yaw*.5*k,(roll*.3+tilt*.15+Math.sin(t*1.3-.8)*.02)*k);
    R('Tip',0,0,Math.sin(t*1.9)*.05);
    // husk leaves = arms: open when happy, close when sad / angry; every ~9 s the front-left one waves
    const c=t%9,al=P.al||ARM_REST,ar=P.ar||ARM_REST,calm=al[1]>=ARM_REST[1]-.05&&sit<.3&&!lie?1:0,wv=Math.max(ss(0,.5,c)*(1-ss(3.0,3.7,c)),clamp(ha*3,0,1))*calm;
    const lo=-.3+clamp(armPad/.1,0,1)*.3,open=a=>clamp((a-ARM_REST[1])*.5,-.3,.55),sw=Math.sin(t*1.6)*.05+ha*.2+armPad;
    R('Leaf.Front.L.1',0,0,sw+Math.max(open(al[1]),lo)+.55*wv+Math.sin(t*7)*.08*wv);R('Leaf.Front.L.2',0,0,Math.sin(t*1.6-.6)*.04+wv*Math.sin(t*8)*.3);R('Leaf.Front.L.3',0,0,Math.sin(t*1.6-1.2)*.05);
    R('Leaf.Front.R.1',0,0,-(sw+Math.max(open(ar[1]),lo)+Math.sin(t*1.6+1)*.03));R('Leaf.Front.R.2',0,0,-Math.sin(t*1.6-.6+1)*.04);R('Leaf.Front.R.3',0,0,-Math.sin(t*1.6-1.2+1)*.05);
    for(const s of[['L',1],['R',-1]]){R('Leaf.Back.'+s[0]+'.1',0,0,s[1]*(sw*.7+Math.max(open(s[0]==='L'?al[1]:ar[1]),lo)*.6));R('Leaf.Back.'+s[0]+'.2',0,0,s[1]*Math.sin(t*1.5-.5+s[1])*.04);R('Leaf.Back.'+s[0]+'.3',0,0,s[1]*Math.sin(t*1.5-1)*.05)}
  };

  /* ---- face ---- */
  const ei={L:idx['Eye.L'],R:idx['Eye.R']},pi={L:idx['Pupil.L'],R:idx['Pupil.R']},mi={L:idx['Mouth.L'],C:idx['Mouth.C'],R:idx['Mouth.R']};
  const halfW=mo.r[0]*1.05;let lastKey='';
  const paint=P=>{
    const key=[P.u,P.l,P.sl,P.arc,P.mo,P.sm,P.bl,P.lx,P.ly,P.pup||1,infl].map(v=>Math.round(v*60)).join(',');if(key===lastKey)return;lastKey=key;
    const closed=clamp(Math.max((P.u-.08)/.92,P.l*.7),0,1),open=Math.abs(P.arc)>.35&&P.u>.9?.14:1-.9*closed;
    for(const s of['L','R']){const sgn=s==='L'?-1:1,e=bones[ei[s]];
      e.scale.set(1,Math.max(.06,open),1);
      de.set(0,0,-sgn*P.sl*.45);dq.setFromEuler(de);e.quaternion.copy(rest[ei[s]].q).multiply(dq);
      const p=bones[pi[s]];p.position.set(rest[pi[s]].p.x+P.lx*.03,rest[pi[s]].p.y-P.ly*.03,rest[pi[s]].p.z+.025+Math.hypot(P.lx,P.ly)*.015);
      const ps=P.pup||1;p.scale.set(ps,ps,1)}
    const sm=P.sm,pz=infl;
    bones[mi.L].position.set(rest[mi.L].p.x,rest[mi.L].p.y+sm*.05,rest[mi.L].p.z+pz);
    bones[mi.R].position.set(rest[mi.R].p.x,rest[mi.R].p.y+sm*.05,rest[mi.R].p.z+pz);
    bones[mi.C].position.set(rest[mi.C].p.x,rest[mi.C].p.y-sm*.012,rest[mi.C].p.z+pz);
    const m=clamp(P.mo,0,1);
    mouthO.position.z=mz-.02+infl;tongueO.position.z=mz-.015+infl;
    meshes.mouth.visible=m<=.06;
    if(m>.06){mouthO.visible=true;mouthO.scale.set(halfW*(.4+.35*m),.025+.08*m,.04);mouthO.position.y=mouthC[1]-.03-.04*m;mouthO.position.x=mouthC[0];
      tongueO.visible=m>.5;tongueO.scale.set(halfW*.3,.03,.04);tongueO.position.y=mouthC[1]-.03-.09*m}
    else{mouthO.visible=false;tongueO.visible=false}
    for(const b of blush)b.material.opacity=clamp(P.bl,0,1)*.6;
  };
  paint({u:.08,l:0,sl:0,arc:0,mo:0,sm:.5,bl:0,lx:0,ly:0});

  const anchors={head:[headF,[0,eyeY+.1,.9]],mouth:[headF,[mouthC[0],mouthC[1],.9]],belly:[midF,[0,1.4,.9]],feet:[group,[0,.1,.4]],top:[headF,[0,top+.3,.1]]};
  return{group,uniforms,colliders,regionOf,pose,paint,anchors,wearFrame:headF,bodyFrame:inner,fit,hipY:1.9,parts:meshes,bones:by,setArmPad:p=>{armPad=p*1.6},
    skinGarment:g=>skinGarment(g,skeleton,n=>idx[n],[['Stem',.2],['Cob.Lower',.6],['Cob.Middle',1.5],['Cob.Upper',2.3]])};
}
