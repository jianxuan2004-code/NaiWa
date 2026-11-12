import * as THREE from 'three';
import {skinMaterial,patchUV,SKIN_UV,CREAM_UV,onSkinColor} from './skin.js';
import {skinGarment} from './garments.js';

/* 奶鱼 / 奶猫 / 奶鼠 / 奶屎: smooth clay-toy bodies modelled to the reference pictures (tools/mkpets.mjs turns blended
   signed-distance shapes into meshes). They use the same PBR textures as 奶蛙 and one shared face painter, and expose the same
   interface as the 奶蛙 / 奶蛋 models (group, uniforms, colliders, regionOf, pose, paint, anchors, wearFrame, fit). */

const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
const ss=(a,b,x)=>{const t=clamp((x-a)/(b-a),0,1);return t*t*(3-2*t)};
const u8=(s,T)=>{const bin=atob(s),u=new Uint8Array(bin.length);for(let i=0;i<bin.length;i++)u[i]=bin.charCodeAt(i);return new T(u.buffer)};

function decode(p){
  const Q=u8(p.P,Int16Array),Nn=u8(p.N,Int16Array),U=u8(p.U,Uint16Array),n=Q.length/3,pos=new Float32Array(n*3),nor=new Float32Array(n*3),uv=new Float32Array(n*2);
  for(let v=0;v<n;v++){for(let a=0;a<3;a++){pos[v*3+a]=p.min[a]+(Q[v*3+a]+32768)/65535*p.size[a];nor[v*3+a]=Nn[v*3+a]/32767}uv[v*2]=U[v*2]/65535;uv[v*2+1]=U[v*2+1]/65535}
  const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.BufferAttribute(pos,3));g.setAttribute('normal',new THREE.BufferAttribute(nor,3));g.setAttribute('uv',new THREE.BufferAttribute(uv,2));
  if(p.SI){const si=u8(p.SI,Uint8Array),sw=u8(p.SW,Uint8Array),W=new Float32Array(sw.length);for(let i=0;i<sw.length;i++)W[i]=sw[i]/255;
    g.setAttribute('skinIndex',new THREE.BufferAttribute(Uint16Array.from(si),4));g.setAttribute('skinWeight',new THREE.BufferAttribute(W,4))}
  g.setIndex(new THREE.BufferAttribute(u8(p.I,p.idx32?Uint32Array:Uint16Array),1));return g;
}
let EARTEX=null;const earTexture=()=>{if(!EARTEX){EARTEX=new THREE.TextureLoader().load(window.ASSETS.earTex);EARTEX.colorSpace=THREE.SRGBColorSpace;EARTEX.anisotropy=4}return EARTEX};
const tubeGeo=(pts,r,seg=40)=>new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts.map(p=>new THREE.Vector3(...p))),seg,r,10);
const ellGeo=(sx,sy,sz,px,py,pz)=>{const g=new THREE.SphereGeometry(1,24,18);g.scale(sx,sy,sz);g.translate(px,py,pz);return g};

/* ---------- face decal: a thin grid hugging the front surface, painted from a canvas ---------- */
function makeFace(parent,surf,cfg,patch){
  const {x0,x1,y0,y1,sc}=cfg.region,CW=Math.round((x1-x0)*sc),CH=Math.round((y1-y0)*sc);
  const cvs=document.createElement('canvas');cvs.width=CW;cvs.height=CH;const cx=cvs.getContext('2d');
  const tex=new THREE.CanvasTexture(cvs);tex.colorSpace=THREE.SRGBColorSpace;tex.anisotropy=4;
  const NX=48,NY=40,pos=[],nor=[],uv=[],idx=[],ok=[],zs=[],W=NX+1;
  for(let j=0;j<=NY;j++)for(let i=0;i<=NX;i++)zs.push(surf(x0+(x1-x0)*i/NX,y0+(y1-y0)*j/NY));
  const zAt=(i,j,z0)=>{const v=zs[clamp(j,0,NY)*W+clamp(i,0,NX)];return v==null?z0:v};
  const dx=(x1-x0)/NX,dy=(y1-y0)/NY;
  for(let j=0;j<=NY;j++)for(let i=0;i<=NX;i++){const x=x0+dx*i,y=y0+dy*j,z=zs[j*W+i];
    if(z==null){pos.push(x,y,0);nor.push(0,0,1);uv.push(i/NX,j/NY);ok.push(0);continue}
    const dzx=(zAt(i+1,j,z)-zAt(i-1,j,z))/(2*dx),dzy=(zAt(i,j+1,z)-zAt(i,j-1,z))/(2*dy),l=Math.hypot(dzx,dzy,1),nx=-dzx/l,ny=-dzy/l,nz=1/l;
    pos.push(x+nx*.012,y+ny*.012,z+nz*.012);nor.push(nx,ny,nz);uv.push(i/NX,j/NY);ok.push(1)}
  for(let j=0;j<NY;j++)for(let i=0;i<NX;i++){const a=j*(NX+1)+i,b=a+1,c=a+NX+1,d=c+1;if(ok[a]&&ok[b]&&ok[c]&&ok[d])idx.push(a,b,d,a,d,c)}
  const dg=new THREE.BufferGeometry();dg.setAttribute('position',new THREE.Float32BufferAttribute(pos,3));dg.setAttribute('normal',new THREE.Float32BufferAttribute(nor,3));dg.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));dg.setIndex(idx);
  const dm=new THREE.MeshPhysicalMaterial({map:tex,transparent:true,depthWrite:false,polygonOffset:true,polygonOffsetFactor:-2,polygonOffsetUnits:-2,roughness:.5,clearcoat:.2,clearcoatRoughness:.5});dm.onBeforeCompile=patch;
  const decal=new THREE.Mesh(dg,dm);decal.frustumCulled=false;decal.renderOrder=2;parent.add(decal);

  const px=x=>(x-x0)*sc,py=y=>(y1-y)*sc,E=cfg.eye,M=cfg.mouth,k=E.r/.145;let SKIN=cfg.skin,lastKey='';
  function paint(P){
    const key=[P.u,P.l,P.sl,P.arc,P.mo,P.sm,P.bl,P.lx,P.ly,P.pup||1].map(v=>Math.round(v*60)).join(',');if(key===lastKey)return;lastKey=key;
    cx.clearRect(0,0,CW,CH);
    if(P.bl>.03)for(const s of[-1,1]){const x=px(s*E.x*1.55),y=py(M.y+.07),r=.13*sc,gr=cx.createRadialGradient(x,y,0,x,y,r);gr.addColorStop(0,'rgba(255,120,110,'+(.4*Math.min(1,P.bl))+')');gr.addColorStop(1,'rgba(255,120,110,0)');cx.fillStyle=gr;cx.fillRect(x-r,y-r,2*r,2*r)}
    for(const s of[-1,1]){const cxp=px(s*E.x),cyp=py(E.y),r=E.r*sc;
      const gr=cx.createRadialGradient(cxp,cyp,r*.2,cxp,cyp,r);gr.addColorStop(0,cfg.iris[0]);gr.addColorStop(.6,cfg.iris[1]);gr.addColorStop(.9,cfg.iris[2]);gr.addColorStop(1,cfg.iris[3]);
      cx.fillStyle=gr;cx.beginPath();cx.arc(cxp,cyp,r,0,Math.PI*2);cx.fill();
      const an=clamp(P.sl/.4,0,1);cx.strokeStyle='rgba(70,90,40,'+(.35+.4*an)+')';cx.lineWidth=1.5+2*an;cx.stroke();
      cx.fillStyle='#070707';cx.beginPath();cx.arc(cxp+P.lx*.04*sc*k,cyp-P.ly*.035*sc*k,r*.55*(P.pup||1),0,Math.PI*2);cx.fill();
      const ang=(s<0?1:-1)*P.sl*.7,U=clamp((P.u-.1)/.9,0,1);
      const lid=(from,to)=>{cx.save();cx.translate(cxp,cyp);cx.rotate(ang);cx.beginPath();cx.rect(-r*1.7,from,r*3.4,to-from);cx.clip();
        cx.fillStyle=SKIN;if('filter' in cx)cx.filter='blur(1.5px)';cx.beginPath();cx.arc(0,0,r*1.14,0,Math.PI*2);cx.fill();cx.restore()};
      if(U>.02){const yE=-r+2*r*U;lid(-r*1.7,yE);
        if(U>.1||P.sl>.1){cx.save();cx.translate(cxp,cyp);cx.rotate(ang);cx.strokeStyle='rgba(120,80,20,'+Math.max(.45*Math.min(1,U/.25),.9*an)+')';cx.lineWidth=2+2*an;cx.beginPath();const hw=Math.sqrt(Math.max(0,(r*1.12)**2-yE*yE));cx.moveTo(-hw,yE);cx.lineTo(hw,yE);cx.stroke();cx.restore()}}
      if(P.l>.03)lid(r-2*r*P.l,r*1.7);
      if(Math.abs(P.arc)>.35&&P.u>.92){cx.save();cx.strokeStyle='#4a3208';cx.lineWidth=.024*sc*k;cx.lineCap='round';cx.beginPath();
        if(P.arc>0)cx.arc(cxp,cyp+.045*sc*k,.1*sc*k,Math.PI*1.12,Math.PI*1.88);else cx.arc(cxp,cyp-.05*sc*k,.1*sc*k,Math.PI*.12,Math.PI*.88);cx.stroke();cx.restore()}}
    const mo=clamp(P.mo,0,1),y0m=M.y,hw0=M.hw;
    if(mo>.05){const hw=(hw0*.9+hw0*.9*mo)*(1+.15*Math.max(0,P.sm)),cr=.035*P.sm,dep=.05+.2*mo;
      cx.fillStyle='#3c1510';cx.beginPath();cx.moveTo(px(-hw),py(y0m+cr));cx.quadraticCurveTo(px(0),py(y0m-dep*2),px(hw),py(y0m+cr));cx.quadraticCurveTo(px(0),py(y0m+.014),px(-hw),py(y0m+cr));cx.closePath();cx.fill();
      if(mo>.5){cx.save();cx.clip();cx.fillStyle='#d8656c';cx.beginPath();cx.ellipse(px(0),py(y0m-dep*1.05),hw*.55*sc,.05*sc,0,0,Math.PI*2);cx.fill();cx.restore()}
      cx.strokeStyle='rgba(110,70,25,.8)';cx.lineWidth=2;cx.lineCap='round';cx.beginPath();cx.moveTo(px(-hw),py(y0m+cr));cx.quadraticCurveTo(px(0),py(y0m+.014),px(hw),py(y0m+cr));cx.stroke()}
    else{const sm=P.sm,fr=Math.max(0,-sm);cx.strokeStyle='#6b4515';cx.lineWidth=2.2+.6*fr;cx.lineCap='round';cx.beginPath();
      for(let i=0;i<=20;i++){const x=-hw0+2*hw0*i/20,t=(x/hw0)**2;const y=sm>=0?y0m-sm*.03*(1-t)+.004:y0m+fr*.04*(1-t);i?cx.lineTo(px(x),py(y)):cx.moveTo(px(x),py(y))}cx.stroke()}
    tex.needsUpdate=true;
  }
  paint({u:.08,l:0,sl:0,arc:0,mo:0,sm:.5,bl:0,lx:0,ly:0});
  return{paint,setSkin:c=>{SKIN=c;lastKey=''}};
}

/* ---------- generic pet assembly ---------- */
const IRIS=['#eef3cc','#d6e4a8','#b4cc85','#7d9a58'];
function assemble(name,def){
  const J=JSON.parse(window.ASSETS.pets[name]),info=J.info;
  const uniforms={uDent:{value:new THREE.Vector4(0,1,1,0)},uInfl:{value:0},uBelly:{value:0}};
  const patch=sh=>{Object.assign(sh.uniforms,uniforms);
    sh.vertexShader=sh.vertexShader.replace('#include <common>','#include <common>\nuniform vec4 uDent;uniform float uInfl;uniform float uBelly;')
      .replace('#include <skinning_vertex>',`#include <skinning_vertex>
        vec3 dd=transformed-uDent.xyz;
        transformed-=objectNormal*(uDent.w*.3*exp(-dot(dd,dd)/.5));
        float by=transformed.y-${def.bellyY.toFixed(2)};
        transformed+=objectNormal*(uInfl+uBelly*exp(-by*by/.6)*smoothstep(-.2,.5,objectNormal.z));`)};
  const tint=def.tint==null?0xffffff:def.tint;
  const group=new THREE.Group(),pivot=new THREE.Group(),inner=new THREE.Group();
  pivot.position.y=def.cy;inner.position.y=-def.cy;group.add(pivot);pivot.add(inner);
  const pbr={clearcoat:.2,clearcoatRoughness:.5};
  const parts={},skins=[];
  /* optional skeleton: bones have no rest rotation, so the rest world positions are all that is needed */
  let rig=null;
  if(J.rig){
    const B=J.rig.bones,bones=B.map(b=>{const o=new THREE.Bone();o.name=b.n;return o}),by={};
    B.forEach((b,i)=>{by[b.n]=bones[i];if(b.p>=0){bones[b.p].add(bones[i]);const q=B[b.p].pos;bones[i].position.set(b.pos[0]-q[0],b.pos[1]-q[1],b.pos[2]-q[2])}else{inner.add(bones[i]);bones[i].position.set(...b.pos)}});
    group.updateMatrixWorld(true);
    const skeleton=new THREE.Skeleton(bones),rest=Object.fromEntries(B.map(b=>[b.n,b.pos]));
    // a frame that follows a bone but whose rest world frame is the identity, so children use absolute rest-pose coordinates
    const attach=n=>{const o=new THREE.Object3D();o.position.set(-rest[n][0],-rest[n][1],-rest[n][2]);by[n].add(o);return o};
    rig={bones,by,skeleton,attach,restY:{hips:rest.hips[1]}};
  }
  const mk=(geo,mat)=>{if(rig&&geo.attributes.skinIndex){const m=new THREE.SkinnedMesh(geo,mat);m.frustumCulled=false;m.bind(rig.skeleton,new THREE.Matrix4());return m}const m=new THREE.Mesh(geo,mat);m.frustumCulled=false;return m};
  const addSkin=(geo,nm)=>{const mat=skinMaterial(tint,true,pbr);mat.onBeforeCompile=patch;mat.customProgramCacheKey=()=>'pet'+def.bellyY;const m=mk(geo,mat);m.frustumCulled=false;inner.add(m);skins.push(m);parts[nm]=m;return m};
  const addExtra=(geo,color,nm,pivotAt,ear)=>{const mat=ear?new THREE.MeshPhysicalMaterial({map:earTexture(),roughness:.55,...pbr}):color?new THREE.MeshPhysicalMaterial({color,roughness:.55,...pbr}):skinMaterial(tint,true,pbr);
    const m=mk(geo,mat);let o=m;if(pivotAt){o=new THREE.Group();o.position.set(...pivotAt);m.position.set(-pivotAt[0],-pivotAt[1],-pivotAt[2]);o.add(m)}inner.add(o);if(nm)parts[nm]=o;return o};
  for(const p of J.parts){
    const g=decode(p);if(p.tex!=='flat'&&p.tex!=='ear')patchUV(g,null,p.tex==='cream'?CREAM_UV:SKIN_UV);
    if(p.kind==='skin'){const m=addSkin(g,p.n);if(p.tex==='cream'){m.material.color.set(0xffffff)}}
    else addExtra(g,p.tex==='flat'?p.color:null,p.n,p.pivot,p.tex==='ear');
  }
  if(def.more)def.more({extra:addExtra,tube:(pts,r,seg)=>patchUV(tubeGeo(pts,r,seg)),ell:(...a)=>patchUV(ellGeo(...a))});
  inner.updateMatrixWorld(true);group.updateMatrixWorld(true);

  /* surface lookups come from tables baked by the mesher (no raycasting at start-up) */
  const zt=info.zt,ZD=u8(zt.d,Float32Array);
  const surf=(x,y)=>{const fx=(x-zt.x0)/(zt.x1-zt.x0)*(zt.nx-1),fy=(y-zt.y0)/(zt.y1-zt.y0)*(zt.ny-1);if(fx<0||fy<0||fx>zt.nx-1||fy>zt.ny-1)return null;
    const i=Math.min(zt.nx-2,Math.floor(fx)),j=Math.min(zt.ny-2,Math.floor(fy)),a=fx-i,b=fy-j,q=[ZD[j*zt.nx+i],ZD[j*zt.nx+i+1],ZD[(j+1)*zt.nx+i],ZD[(j+1)*zt.nx+i+1]];
    if(q.some(v=>v<-50)){const v=ZD[Math.round(fy)*zt.nx+Math.round(fx)];return v<-50?null:v}
    return q[0]*(1-a)*(1-b)+q[1]*a*(1-b)+q[2]*(1-a)*b+q[3]*a*b};
  const surfN=(x,y)=>surf(x,y)??0;
  const HW=u8(info.hw,Float32Array),side=y=>{const f=clamp(y/info.hwDy,0,HW.length-2),i=Math.floor(f);return HW[i]+(HW[i+1]-HW[i])*(f-i)};
  const top=info.top,topZ=info.hatZ,hatW=side(top-.22);
  const PF=u8(info.prof.d,Float32Array),prof=y=>{const f=clamp(y/info.prof.dy,0,info.prof.n-1.001),i=Math.floor(f),t=f-i,g=k=>PF[i*3+k]*(1-t)+PF[(i+1)*3+k]*t;return{rx:g(0),zf:g(1),zb:g(2)}};
  const headF=rig?rig.attach('head'):inner,chestF=rig?rig.attach('chest'):inner,spineF=rig?rig.attach('spine'):inner;
  const face=makeFace(headF,surf,{region:def.region,skin:'#f4c93c',eye:def.eye,mouth:def.mouth,iris:def.iris||IRIS},patch);
  onSkinColor(c=>{const tc=new THREE.Color(tint),lin=v=>{v/=255;return v<=.04045?v/12.92:Math.pow((v+.055)/1.055,2.4)},sr=v=>Math.round(255*(v<=.0031308?v*12.92:1.055*Math.pow(v,1/2.4)-.055));
    const t=[tc.r,tc.g,tc.b];face.setSkin('rgb('+c.map((v,i)=>sr(lin(v)*t[i])).join(',')+')')});
  // hit colliders = the body meshes themselves
  const hm=new THREE.MeshBasicMaterial({visible:false}),sph=new THREE.SphereGeometry(1,16,12);
  const colliders=rig?def.colliders.map(([bone,c,rr])=>{const m=new THREE.Mesh(sph,hm);m.position.set(...c);m.scale.set(...rr);m.userData.region='body';rig.attach(bone).add(m);return m})
    :skins.map(s=>{const m=new THREE.Mesh(s.geometry,hm);m.userData.region='body';inner.add(m);return m});
  const regionOf=l=>l.y>def.headThr?'head':'belly';
  const fit={hatY:top-.03,hatZ:topZ,hatR:clamp(hatW*.78,.24,.42),eyeY:def.eye.y,eyeX:def.eye.x,eyeR:def.eye.r,neckY:def.neckY,z:surfN,
    scarf:{y:def.neckY-.12,rx:side(def.neckY-.12)+.025,rz:(def.scarfRz||side(def.neckY-.12))+.025,cz:def.scarfCz||topZ,tube:.085},prof,torso:def.torso,patch,patchKey:'pet'+def.bellyY,...(def.fit||{})};
  const pose=P=>{
    const t=performance.now()/1000,sit=P.sit||0,k=rig?.35:1;   // with a skeleton the bones do most of the leaning / turning
    pivot.rotation.set((P.lean*.9+P.nod*.32)*k+sit*.1,P.yaw*.75*k,P.roll*.9*k+Math.sin(t*1.5)*def.rock+(P.hip||0)*.1+(def.tilt||0)*(1-(P.lie||0)),'YXZ');
    pivot.position.y=def.cy+(def.float||0)*(1-(P.lie||0))+Math.sin(t*1.6)*(def.bob||0);
    inner.scale.y=1-.05*sit;
    if(rig&&def.rigPose)def.rigPose(P,t,rig.by);
    if(def.anim)def.anim(t,P,parts,{pivot,inner});
  };
  const A=def.anchors;
  const anchors={head:[headF,A.head],mouth:[headF,[0,def.mouth.y,A.mouthZ]],belly:[spineF,A.belly],feet:[group,[0,.1,.4]],top:[headF,[0,top+.3,.1]]};
  return{group,uniforms,colliders,regionOf,pose,paint:face.paint,anchors,wearFrame:headF,bodyFrame:rig?inner:chestF,fit,hipY:def.cy,parts,bones:rig&&rig.by,
    skinGarment:rig&&def.garmentChain?(g=>skinGarment(g,rig.skeleton,n=>rig.bones.findIndex(b=>b.name===n),def.garmentChain)):null};
}

/* ============================ the four characters ============================ */

/* 奶鱼: a seal — floating a little tilted, cream belly, paddle flippers, flat tail */
function fish(){
  return assemble('fish',{torso:[.55,2.35],cy:1.55,rock:.025,tilt:.42,float:.22,bob:.07,headThr:2.4,bellyY:1.6,neckY:2.5,
    eye:{x:.3,y:3.04,r:.14},mouth:{y:2.78,hw:.14},region:{x0:-.8,x1:.8,y0:2.35,y1:3.5,sc:380},
    anchors:{head:[0,3.0,.8],belly:[0,1.5,1],mouthZ:.9},
    anim(t,P,p){const f=Math.sin(t*2.2)*.14+(P.ha||0)*.2;if(p['flip-1'])p['flip-1'].rotation.z=f;if(p.flip1)p.flip1.rotation.z=-f;
      for(const s of[-1,1]){const o=p['tail'+s];if(o)o.rotation.x=Math.sin(t*2.4+s)*.12}}});
}

/* 奶猫: a chubby loaf with fused head, triangular ears and fat toed paws */
function cat(){
  return assemble('cat',{torso:[.5,1.3],fit:{kx:.85,kz:.9},cy:1.1,rock:.025,headThr:1.45,bellyY:.9,neckY:1.45,
    eye:{x:.5,y:1.98,r:.23},mouth:{y:1.5,hw:.22},region:{x0:-1.0,x1:1.0,y0:1.15,y1:2.5,sc:340},
    anchors:{head:[0,2.0,1.0],belly:[0,.9,1.3],mouthZ:1.25},
    more(h){h.extra(h.tube([[.7,.45,-1.0],[1.2,.35,-1.25],[1.55,.75,-1.15],[1.5,1.25,-.9]],.14),null,'tail',[.7,.45,-1.0])},
    anim(t,P,p){if(p.tail){p.tail.rotation.y=Math.sin(t*1.8)*.2}const tw=Math.max(0,Math.sin(t*.9))>.97?.2:0;
      for(const s of[-1,1]){const e=p['ear'+s],i=p['earIn'+s];if(e)e.rotation.z=-s*tw;if(i)i.rotation.z=-s*tw}}});
}

/* 奶鼠: the supplied NaiShu model, now rigged (tools/mkmouse.mjs builds the skeleton and skin weights): spine + neck + head, two 3-bone arms,
   legs, a 4-bone tail and two 2-bone ears. The game's pose parameters (lean, nod, yaw, roll, arms, hip, lie…) drive the bones.
   Its eyes and smile are replaced by the animated face decal, which rides on the head bone. */
const ARM_REST=[-.1,.55,-.15,.05];
function mouse(){
  return assemble('mouse',{garmentChain:[['hips',.8],['spine',1.35],['chest',2.0],['neck',2.2]],torso:[.6,2.3],cy:1.7,rock:.03,headThr:2.85,bellyY:1.6,neckY:2.5,
    iris:['#d9e9b4','#b9d377','#8fba4c','#6e9c2b'],
    eye:{x:.385,y:3.1,r:.19},mouth:{y:2.76,hw:.26},region:{x0:-.85,x1:.85,y0:2.4,y1:3.5,sc:380},
    anchors:{head:[0,3.1,.7],belly:[0,1.6,1.0],mouthZ:.6},
    colliders:[['head',[0,3.0,.05],[.75,.72,.65]],['spine',[0,1.4,0],[1.1,1.3,.95]],['elbow-1',[-1.15,1.66,0],[.5,.32,.3]],['elbow1',[1.15,1.66,0],[.5,.32,.3]],['foot-1',[-.58,.3,.05],[.4,.35,.5]],['foot1',[.58,.3,.05],[.4,.35,.5]]],
    rigPose(P,t,B){
      const lie=P.lie||0,ha=P.ha||0,R=(n,x,y,z)=>B[n].rotation.set(x,y,z),br=Math.sin(t*2.1)*.012*(1-.5*lie);
      B.hips.position.y=.8+(P.dy||0)*.4;
      R('hips',0,0,(P.tilt||0)*.05);R('spine',(P.lean||0)*.25+br,0,(P.tilt||0)*.15);R('chest',(P.lean||0)*.3+br*1.5,P.yaw*.12,(P.tilt||0)*.15);
      R('neck',P.nod*.3,P.yaw*.35,P.roll*.25);R('head',P.nod*.55,P.yaw*.5,P.roll*.55);
      // both arms hang at rest; every ~9 s (and when laughing) the left one lifts, waves, then lowers again
      const c=t%9,wv=Math.max(ss(0,.5,c)*(1-ss(3.0,3.7,c)),clamp(ha*3,0,1))*(1-lie),al=P.al||ARM_REST;
      R('shoulder-1',(al[0]-ARM_REST[0])*.5*(1-wv),0,-1.4*wv-(1-wv)*(Math.sin(t*1.3)*.04+ha*.2+(al[1]-ARM_REST[1])*.8)+wv*Math.sin(t*7)*.1);
      R('elbow-1',(al[2]-ARM_REST[2])*.5*(1-wv),0,-wv*(Math.sin(t*9)*.5+.15)-(1-wv)*Math.sin(t*1.5+1)*.03);
      R('wrist-1',0,0,-wv*Math.sin(t*9+1)*.35);
      const ar=P.ar||ARM_REST;
      R('shoulder1',(ar[0]-ARM_REST[0])*.5,0,Math.sin(t*1.3+1)*.04+ha*.2+(ar[1]-ARM_REST[1])*.8+lie*.3);
      R('elbow1',(ar[2]-ARM_REST[2])*.5,0,Math.sin(t*1.5)*.03+(ar[3]-ARM_REST[3])*.3);R('wrist1',0,0,0);
      // legs sway while playing; feet counter-rotate
      const h=P.hip||0;R('thigh-1',h*.4,0,0);R('thigh1',-h*.4,0,0);R('foot-1',-h*.2,0,0);R('foot1',h*.2,0,0);
      // tail: a travelling wave, wider when happy
      for(let i=0;i<4;i++)R('tail'+i,0,Math.sin(t*3.0-i*.8)*(.1+.14*ha)*(1-.5*lie)*(i?1.1:.6),Math.sin(t*1.5+i*.5)*.05);
      // ears: lazy flop, small twitches, lag behind head turns, droop when asleep
      for(const s of[-1,1]){const tw=Math.max(0,Math.sin(t*.8+s*1.7))>.96?.14:0;
        R('earA'+s,0,-P.yaw*.12,-s*(.02+Math.sin(t*1.1+s)*.04+tw+lie*.5)+P.roll*.1);R('earB'+s,0,0,-s*(Math.sin(t*1.1+s-.7)*.1+lie*.4)-P.roll*.15)}
    },
    anim(t,P,p,o){
      const look=Math.sin(t*.55)*Math.max(0,Math.sin(t*.19+1))*.5;o.pivot.rotation.y+=look*.5;o.pivot.rotation.z+=look*.02;
    }});
}

/* 奶屎: soft-serve swirl — three fat coils with creases and a curled tip, face on the top coil */
function poop(){
  return assemble('poop',{torso:[.15,1.3],tint:0xffd8a0,cy:1.3,rock:.035,headThr:1.65,bellyY:.9,neckY:1.5,scarfRz:1.0,
    eye:{x:.27,y:2.04,r:.15},mouth:{y:1.78,hw:.13},region:{x0:-.62,x1:.62,y0:1.55,y1:2.4,sc:520},
    anchors:{head:[0,2.0,.7],belly:[0,.8,1.2],mouthZ:.8},fit:{hatX:-.3,hatY:3.05,hatR:.3,hatZ:0},
    anim(t,P,p,o){const w=1+(P.ha||0)*3;o.inner.scale.x=1+Math.sin(t*2.6)*.014*w;o.inner.scale.z=1+Math.sin(t*2.6+.8)*.014*w}});
}

export function buildPet(kind){return({fish,cat,mouse,poop})[kind]()}
