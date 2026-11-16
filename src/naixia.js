import * as THREE from 'three';
import {skinMaterial,patchUV} from './skin.js';

/* 奶虾 (NaiXia, the chubby version): the supplied rigged prawn (tools/mkglb.mjs packs the GLB into assets/pets/naixia.json). 34 bones: head, an 8-segment
   curled abdomen, tail fan, two eyes with pupils, two 5-bone antennae and six little legs. In the model the head points to -x and the abdomen curls
   up behind it, so the whole rig sits in a pivot turned to a 3/4 view; hats / glasses live in a frame whose +z is the direction the head faces.
   Body parts use the same PBR skin set as 奶蛙 (+ the jelly shader); the prawn has no mouth of its own, so an open mouth is drawn under the rostrum. */

const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
const ss=(a,b,x)=>{const t=clamp((x-a)/(b-a),0,1);return t*t*(3-2*t)};
const u8=(s,T)=>{const bin=atob(s),u=new Uint8Array(bin.length);for(let i=0;i<bin.length;i++)u[i]=bin.charCodeAt(i);return new T(u.buffer)};
const YAW=.95;   // the 3/4 view (radians about y)

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

export function buildNaiXia(){
  const J=JSON.parse(window.ASSETS.pets.naixia);
  const uniforms={uDent:{value:new THREE.Vector4(0,1,1,0)},uInfl:{value:0},uBelly:{value:0}};
  const BELLY_Y=1.0;
  const patch=sh=>{Object.assign(sh.uniforms,uniforms);
    sh.vertexShader=sh.vertexShader.replace('#include <common>','#include <common>\nuniform vec4 uDent;uniform float uInfl;uniform float uBelly;')
      .replace('#include <skinning_vertex>',`#include <skinning_vertex>
        vec3 dd=transformed-uDent.xyz;
        transformed-=objectNormal*(uDent.w*.3*exp(-dot(dd,dd)/.5));
        float by=transformed.y-${BELLY_Y.toFixed(2)};
        transformed+=objectNormal*(uInfl+uBelly*exp(-by*by/.6)*smoothstep(-.2,.5,objectNormal.z));`)};
  const CX=-.25;   // model centre (x) the pivot turns about
  const group=new THREE.Group(),pivot=new THREE.Group(),inner=new THREE.Group();group.add(pivot);pivot.add(inner);
  pivot.rotation.y=YAW;pivot.position.set(-CX*Math.cos(YAW),0,CX*Math.sin(YAW));pivot.updateMatrix();
  const qPiv=new THREE.Quaternion().setFromEuler(new THREE.Euler(0,YAW,0)),qPivi=qPiv.clone().invert();

  /* ---- skeleton ---- */
  const bones=J.bones.map(b=>{const o=new THREE.Bone();o.name=b.n;o.position.set(...b.t);o.quaternion.set(...b.q);o.scale.set(...b.s);return o});
  const by={},idx={};J.bones.forEach((b,i)=>{by[b.n]=bones[i];idx[b.n]=i;(b.p>=0?bones[b.p]:inner).add(bones[i])});
  const rest=J.bones.map(b=>({p:new THREE.Vector3(...b.t),q:new THREE.Quaternion(...b.q)}));
  inner.updateMatrixWorld(true);
  const restM={},restQ={};
  for(const b of J.bones){const o=by[b.n];restM[b.n]=o.matrixWorld.clone();restQ[b.n]=new THREE.Quaternion().setFromRotationMatrix(o.matrixWorld)}
  // restM were measured with the pivot on; take it out so they are plain model coordinates
  const pivInv=new THREE.Matrix4().copy(pivot.matrix).invert();for(const k in restM)restM[k].premultiply(pivInv);
  for(const k in restQ)restQ[k].premultiply(qPivi);
  const PQ=J.bones.map(b=>b.p>=0?restQ[J.bones[b.p].n]:new THREE.Quaternion()),PQi=PQ.map(q=>q.clone().invert());
  const boneInv=bones.map((_,i)=>new THREE.Matrix4().fromArray(J.ibm,i*16));
  const skeleton=new THREE.Skeleton(bones,boneInv);
  const attach=n=>{const o=new THREE.Object3D();o.matrixAutoUpdate=false;o.matrix.copy(restM[n]).invert();by[n].add(o);return o};
  // the head frame the game dresses: +z = the way the head faces (model -x), +y up
  const MR=new THREE.Matrix4().makeRotationY(-Math.PI/2);          // g -> model
  const headF=new THREE.Object3D();headF.matrixAutoUpdate=false;headF.matrix.copy(restM.Head).invert().multiply(MR);by.Head.add(headF);
  const toG=(x,y,z)=>[z,y,-x];                                     // model -> head-frame coordinates

  /* ---- meshes ---- */
  const meshes={},gpos={body:[],all:[]};
  const FLAT=(p,extra={})=>{const m=new THREE.MeshPhysicalMaterial({roughness:p.rough,clearcoat:.15,clearcoatRoughness:.5,...extra});m.color.setRGB(p.color[0],p.color[1],p.color[2]);return m};
  for(const p of J.parts){
    const {g,pos}=decode(p);let mat;
    if(p.kind==='skin'){patchUV(g,[0,1.0,3.0,2.0]);mat=skinMaterial(0xffffff,true,{clearcoat:.2,clearcoatRoughness:.5});mat.onBeforeCompile=patch;mat.customProgramCacheKey=()=>'naixia'}
    else mat=FLAT(p,p.kind==='pupil'?{polygonOffset:true,polygonOffsetFactor:-8,polygonOffsetUnits:-8}:{});
    const m=new THREE.SkinnedMesh(g,mat);m.frustumCulled=false;if(p.kind!=='skin')m.userData.noDirt=true;inner.add(m);m.bind(skeleton,new THREE.Matrix4());meshes[p.n]=m;
    if(p.kind==='skin'||p.kind==='eye'||p.kind==='pupil'){gpos.all.push(pos);if(p.kind==='skin')gpos.body.push(pos)}
  }

  /* ---- surface tables in head-frame coordinates (x = across, z = forward) ---- */
  const CS=.05,X0=-1.5,Y0=0,NX=60,NY=50,grid=new Float32Array(NX*NY).fill(-99);
  for(const P of gpos.all)for(let v=0;v<P.length/3;v++){const [gx,gy,gz]=toG(P[v*3],P[v*3+1],P[v*3+2]);if(P[v*3]>.15)continue;   // head part only
    const i=Math.round((gx-X0)/CS),j=Math.round((gy-Y0)/CS);if(i<0||j<0||i>=NX||j>=NY)continue;if(gz>grid[j*NX+i])grid[j*NX+i]=gz}
  const surf=(x,y)=>{const i=Math.round((x-X0)/CS),j=Math.round((y-Y0)/CS);let z=-99;
    for(let b=-1;b<=1;b++)for(let a=-1;a<=1;a++){const ii=i+a,jj=j+b;if(ii>=0&&jj>=0&&ii<NX&&jj<NY)z=Math.max(z,grid[jj*NX+ii])}
    return z<-50?null:z};
  // Clothes are built around a vertical torso, so for the prawn they are built in a "garment frame" lying along its thorax and then laid onto it:
  //   garment (x,y,z) -> model (-y, z, -x):  y = along the body towards the head, z = up (the back), x = across.
  const GOFF=0,GM=new THREE.Matrix4().set(0,-1,0,GOFF, 0,0,1,0, -1,0,0,0, 0,0,0,1);
  const PD=.04,PN=60,prof=new Float32Array(PN*3);
  for(let r=0;r<PN;r++){const y=r*PD;let rx=0,zf=-9,zb=9,any=false;
    for(const P of gpos.body)for(let v=0;v<P.length/3;v++){if(P[v*3]>.04||P[v*3+1]<.84||Math.abs(GOFF-P[v*3]-y)>PD*1.2)continue;   // carapace only (no abdomen, no legs)
      any=true;rx=Math.max(rx,Math.abs(P[v*3+2]));zf=Math.max(zf,P[v*3+1]);zb=Math.min(zb,P[v*3+1])}
    if(any){prof[r*3]=rx;prof[r*3+1]=zf;prof[r*3+2]=zb}else prof[r*3]=-1}
  for(let r=PN-1;r>=0;r--)if(prof[r*3]<0){const s=r<PN-1?r+1:r-1;for(let k=0;k<3;k++)prof[r*3+k]=prof[s*3+k]}
  const profAt=y=>{const f=clamp(y/PD,0,PN-1.001),i=Math.floor(f),t=f-i,g=k=>prof[i*3+k]*(1-t)+prof[(i+1)*3+k]*t;return{rx:g(0),zf:g(1),zb:g(2)}};
  let top=0,topX=-.5;for(const P of gpos.body)for(let v=0;v<P.length/3;v++)if(P[v*3]<-.05&&Math.abs(P[v*3+2])<.2&&P[v*3+1]>top){top=P[v*3+1];topX=P[v*3]}

  /* ---- face facts ---- */
  const bb=n=>{const p=J.parts.find(q=>q.n===n);return{c:[0,1,2].map(a=>(p.bb.min[a]+p.bb.max[a])/2),r:[0,1,2].map(a=>(p.bb.max[a]-p.bb.min[a])/2)}};
  const eL=bb('eyeL'),eR=bb('eyeR'),eyeY=eL.c[1],eyeX=Math.abs(eL.c[2]-eR.c[2])/2,eyeR=(eL.r[0]+eL.r[1])/2,eyeFront=-eL.c[0];
  const mouthY=1.0,mouthZ=surf(0,mouthY)??1.0;

  /* ---- open mouth + blush (the prawn has none of its own) ---- */
  const mouthO=new THREE.Mesh(new THREE.SphereGeometry(1,24,14),new THREE.MeshBasicMaterial({color:0x3c1510,side:THREE.DoubleSide})),tongueO=new THREE.Mesh(new THREE.SphereGeometry(1,16,10),new THREE.MeshBasicMaterial({color:0xd8656c}));
  mouthO.position.set(0,mouthY,mouthZ-.03);mouthO.visible=false;mouthO.renderOrder=3;headF.add(mouthO);
  tongueO.position.set(0,mouthY-.02,mouthZ-.025);tongueO.visible=false;tongueO.renderOrder=4;headF.add(tongueO);
  const bt=blushTex(),blush=[];
  for(const s of[-1,1]){const x=s*eyeX*1.1,y=eyeY-.2,z=surf(x,y);if(z==null)continue;
    const m=new THREE.Mesh(new THREE.PlaneGeometry(.34,.24),new THREE.MeshBasicMaterial({map:bt,transparent:true,opacity:0,depthWrite:false}));m.position.set(x,y,z+.01);m.renderOrder=2;headF.add(m);blush.push(m)}

  /* ---- colliders (model coordinates) ---- */
  const hm=new THREE.MeshBasicMaterial({visible:false}),sph=new THREE.SphereGeometry(1,16,12);
  const colliders=[['Head',[-.55,1.25,0],[.8,.5,.55],'body'],['Body.3',[.65,1.0,0],[.65,.55,.45],'body'],['Body.6',[.7,.45,0],[.55,.55,.4],'body']].map(([b,c,r,reg])=>{
    const m=new THREE.Mesh(sph,hm);m.position.set(...c);m.scale.set(...r);m.userData.region=reg;attach(b).add(m);return m});
  const tmpV=new THREE.Vector3();
  const regionOf=l=>{tmpV.set(l.x,l.y,l.z).applyMatrix4(pivInv);return tmpV.x<-.45?'head':'belly'};

  const fit={hatX:0,hatY:top-.04,hatZ:-topX,hatR:.34,eyeY,eyeX,eyeCX:0,eyeR,neckY:1.05,z:(x,y)=>surf(x,y)??0,
    scarf:{y:1.0,rx:.5,rz:.55,cz:.0,tube:.08},prof:profAt,torso:[.05,.6],patch,patchKey:'naixia'};

  /* ---- pose: R takes rotations about the screen axes (x right, y up, z towards you); RM about the model's own axes ---- */
  const dq=new THREE.Quaternion(),de=new THREE.Euler();
  const apply=(i)=>{bones[i].quaternion.copy(PQi[i]).multiply(dq).multiply(PQ[i]).multiply(rest[i].q)};
  const R=(n,x,y,z)=>{const i=idx[n];de.set(x,y,z,'XYZ');dq.setFromEuler(de);dq.premultiply(qPivi).multiply(qPiv);apply(i)};   // screen axes -> model axes
  const RM=(n,x,y,z)=>{const i=idx[n];de.set(x,y,z,'XYZ');dq.setFromEuler(de);apply(i)};
  let infl=0,armPad=0;
  const ei={L:idx['Eye.L'],R:idx['Eye.R']},pi={L:idx['Pupil.L'],R:idx['Pupil.R']};
  // the local axis of each eye bone that points up in the model (that is the one a blink squashes)
  const vAxis={};for(const s of['L','R']){const q=restQ[s==='L'?'Eye.L':'Eye.R'];let best=0,bv=-1;[[1,0,0],[0,1,0],[0,0,1]].forEach((a,k)=>{const d=Math.abs(new THREE.Vector3(...a).applyQuaternion(q).y);if(d>bv){bv=d;best=k}});vAxis[s]=best}
  const pose=P=>{
    infl=(P.inflate||0)*1.3;
    const t=performance.now()/1000,lie=P.lie||0,sit=P.sit||0,ha=P.ha||0,br=Math.sin(t*2.1)*.012;
    const lean=P.lean||0,nod=P.nod||0,yaw=P.yaw||0,roll=P.roll||0,tilt=P.tilt||0,h=P.hip||0;
    inner.scale.y=1-.05*sit;
    R('Head',nod*.7,yaw*.7,roll*.5+tilt*.2);
    // the abdomen: bends with the lean, curls tighter when sad / asleep, ripples when happy
    for(let i=1;i<=8;i++){RM('Body.'+i,0,0,(lean*.05+sit*.06+lie*.05)+Math.sin(t*2.0-i*.5)*.012*(1+ha*3)+br*.3)}
    RM('TailBase',0,0,Math.sin(t*3.0)*(.06+.12*ha)+h*.05);
    RM('Fan.Upper',0,0,Math.sin(t*3.0-.6)*(.08+.14*ha));RM('Fan.Lower',0,0,-Math.sin(t*3.0-.6)*(.08+.14*ha));
    // antennae sway
    for(const a of['A','B'])for(let i=1;i<=5;i++){const k=a==='A'?1:-1;RM('Antenna'+a+'.'+i,Math.sin(t*1.3+i*.5+k)*.05,Math.sin(t*1.7+i*.6)*.06*(1+ha*2),0)}
    // little legs paddle
    for(let i=1;i<=3;i++)for(const s of['L','R'])RM('Leg.'+i+'.'+s,Math.sin(t*(3+ha*5)+i*1.1+(s==='L'?0:2))*(.12+.1*ha),0,0);
  };

  /* ---- face ---- */
  const WL=(i,x,y,z)=>new THREE.Vector3(x,y,z).applyQuaternion(qPivi).applyQuaternion(PQi[i]);   // a displacement along the screen axes -> a bone's local frame
  const halfW=.16;let lastKey='';
  const paint=P=>{
    const key=[P.u,P.l,P.sl,P.arc,P.mo,P.sm,P.bl,P.lx,P.ly,P.pup||1,infl].map(v=>Math.round(v*60)).join(',');if(key===lastKey)return;lastKey=key;
    const closed=clamp(Math.max((P.u-.08)/.92,P.l*.7),0,1),open=Math.max(.06,Math.abs(P.arc)>.35&&P.u>.9?.14:1-.9*closed);
    for(const s of['L','R']){const e=bones[ei[s]],sc=[1,1,1];sc[vAxis[s]]=open;e.scale.set(...sc);
      const p=bones[pi[s]],outward=Math.sign(rest[pi[s]].p.z)||1,d=WL(pi[s],P.lx*.03,-P.ly*.03,0);
      p.position.set(rest[pi[s]].p.x+d.x,rest[pi[s]].p.y+d.y,rest[pi[s]].p.z+d.z+outward*(.02+Math.hypot(P.lx,P.ly)*.015));
      const ps=P.pup||1;p.scale.set(ps,ps,ps)}
    const m=clamp(P.mo,0,1);
    mouthO.position.z=mouthZ-.03+infl;tongueO.position.z=mouthZ-.025+infl;
    if(m>.06){mouthO.visible=true;mouthO.scale.set(halfW*(.5+.4*m),.02+.09*m,.05);mouthO.position.y=mouthY-.04*m;tongueO.visible=m>.5;tongueO.scale.set(halfW*.35,.03,.05);tongueO.position.y=mouthY-.09*m}
    else{mouthO.visible=false;tongueO.visible=false}
    for(const b of blush)b.material.opacity=clamp(P.bl,0,1)*.6;
  };
  paint({u:.08,l:0,sl:0,arc:0,mo:0,sm:.5,bl:0,lx:0,ly:0});

  const bodyF=attach('Body.2');
  const anchors={head:[headF,[0,eyeY+.1,.9]],mouth:[headF,[0,mouthY,mouthZ+.1]],belly:[bodyF,[.4,.0,.3]],feet:[group,[0,.1,.4]],top:[headF,[0,top+.35,.5]]};
  return{group,uniforms,colliders,regionOf,pose,paint,anchors,wearFrame:headF,bodyFrame:inner,fit,hipY:1.0,parts:meshes,bones:by,setArmPad:p=>{armPad=p},
    skinGarment:g=>{   // lay the garment (built in the garment frame) onto the thorax and bind it to the head bone, which carries the carapace
      const out=new THREE.Group();out.userData=g.userData;const hi=idx.Head,v=new THREE.Vector3();
      for(const o of g.children){const geo=o.geometry;geo.applyMatrix4(GM);const rad=geo.attributes.aRad;
        if(rad)for(let i=0;i<rad.count;i++){v.fromBufferAttribute(rad,i).transformDirection(GM);rad.setXYZ(i,v.x,v.y,v.z)}
        const n=geo.attributes.position.count,si=new Uint16Array(n*4),sw=new Float32Array(n*4);for(let i=0;i<n;i++){si[i*4]=hi;sw[i*4]=1}
        geo.setAttribute('skinIndex',new THREE.BufferAttribute(si,4));geo.setAttribute('skinWeight',new THREE.BufferAttribute(sw,4));
        const m=new THREE.SkinnedMesh(geo,o.material);m.frustumCulled=false;m.bind(skeleton,new THREE.Matrix4());out.add(m)}
      return out}};
}
