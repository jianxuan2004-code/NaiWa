import * as THREE from 'three';

/* Loads the supplied rigged 奶蛙 model (exported from the FBX by tools: baked to y-up, 3.1 tall, feet at y=0,
   Mixamo-style skeleton) and drives it procedurally with world-axis rotation deltas. */

const clamp=(v,a,b)=>Math.max(a,Math.min(b,v)),lerp=(a,b,t)=>a+(b-a)*t;
const AX=new THREE.Vector3(1,0,0),AY=new THREE.Vector3(0,1,0),AZ=new THREE.Vector3(0,0,1);
const qAxis=(ax,a)=>new THREE.Quaternion().setFromAxisAngle(ax,a);
const rx=a=>qAxis(AX,a),ry=a=>qAxis(AY,a),rz=a=>qAxis(AZ,a);
const mul=(...q)=>q.reduce((a,b)=>a.multiply(b));
const b64=(s,T)=>{const bin=atob(s),u=new Uint8Array(bin.length);for(let i=0;i<bin.length;i++)u[i]=bin.charCodeAt(i);return new T(u.buffer)};

export function buildFrog(){
  const t0=performance.now();
  const M=JSON.parse(window.ASSETS.model);
  const geo=new THREE.BufferGeometry();
  geo.setAttribute('position',new THREE.BufferAttribute(b64(M.pos,Float32Array),3));
  geo.setAttribute('normal',new THREE.BufferAttribute(b64(M.nor,Float32Array),3));
  geo.setAttribute('uv',new THREE.BufferAttribute(b64(M.uv,Float32Array),2));
  geo.setAttribute('skinIndex',new THREE.BufferAttribute(b64(M.si,Uint16Array),4));
  geo.setAttribute('skinWeight',new THREE.BufferAttribute(b64(M.sw,Float32Array),4));
  geo.setIndex(new THREE.BufferAttribute(b64(M.idx,Uint32Array),1));

  /* ---- armpit fix: torso skin under the arm must not follow the raised arm (no webbing) ---- */
  {const P=geo.attributes.position,SI=geo.attributes.skinIndex.array,SW=geo.attributes.skinWeight.array;
   const nm=M.bones.map(b=>b.n),isArm=i=>/(Left|Right)(Arm|Shoulder)$/.test(nm[i]),isSp=i=>/^(Spine|Spine1|Spine2|Hips)$/.test(nm[i]);
   const sp1=nm.indexOf('Spine1'),ss=(a,b,x)=>{const t=Math.min(1,Math.max(0,(x-a)/(b-a)));return t*t*(3-2*t)};
   for(let v=0;v<P.count;v++){const ax=Math.abs(P.getX(v)),y=P.getY(v),t=Math.min(1,1.8*ss(1.08,.8,ax)*ss(1.6,1.85,y)*ss(2.25,1.98,y));if(t<=0)continue;
     for(let j=0;j<4;j++){const o=v*4+j;if(SW[o]>0&&isArm(SI[o])){let tgt=-1;for(let q=0;q<4;q++)if(SW[v*4+q]>0&&isSp(SI[v*4+q]))tgt=v*4+q;
       if(tgt>=0){const mv=SW[o]*t;SW[o]-=mv;SW[tgt]+=mv}else if(t>.5){SI[o]=sp1}}}}
   geo.attributes.skinIndex.needsUpdate=geo.attributes.skinWeight.needsUpdate=true;}

  /* ---- smooth the beak/muzzle ridge so the face has no crease lines (positions + normals, seam-safe) ---- */
  {const P=geo.attributes.position,N=geo.attributes.normal,I=geo.index.array,cnt=P.count;
   const key=new Map(),cid=new Int32Array(cnt);let nc=0;
   for(let v=0;v<cnt;v++){const k=Math.round(P.getX(v)*2e3)+','+Math.round(P.getY(v)*2e3)+','+Math.round(P.getZ(v)*2e3);let c=key.get(k);if(c===undefined){c=nc++;key.set(k,c)}cid[v]=c}
   const cp=new Float64Array(nc*3),cw=new Float32Array(nc),nb=Array.from({length:nc},()=>new Set());
   for(let v=0;v<cnt;v++){const c=cid[v];cp[c*3]=P.getX(v);cp[c*3+1]=P.getY(v);cp[c*3+2]=P.getZ(v)}
   const sm=(a,b,x)=>{const t=Math.min(1,Math.max(0,(x-a)/(b-a)));return t*t*(3-2*t)};
   for(let c=0;c<nc;c++){const x=Math.abs(cp[c*3]),y=cp[c*3+1],z=cp[c*3+2];
     const mx=sm(.62,.4,x),my=sm(2.36,2.5,y)*sm(3.14,2.96,y);cw[c]=z>0?mx*my:0}
   for(let t=0;t<I.length;t+=3)for(let a=0;a<3;a++){const p=cid[I[t+a]],q=cid[I[t+(a+1)%3]];if(p!==q){nb[p].add(q);nb[q].add(p)}}
   const nbA=nb.map(s=>[...s]);let cur=cp;
   for(let it=0;it<14;it++){const nx=Float64Array.from(cur);
     for(let c=0;c<nc;c++){const w=cw[c];if(w<=0||!nbA[c].length)continue;let ax=0,ay=0,az=0;for(const q of nbA[c]){ax+=cur[q*3];ay+=cur[q*3+1];az+=cur[q*3+2]}
       const k=nbA[c].length,a=.6*w;nx[c*3]+=(ax/k-cur[c*3])*a;nx[c*3+1]+=(ay/k-cur[c*3+1])*a;nx[c*3+2]+=(az/k-cur[c*3+2])*a}
     cur=nx}
   for(let v=0;v<cnt;v++){const c=cid[v];P.setXYZ(v,cur[c*3],cur[c*3+1],cur[c*3+2])}
   // recompute normals for the smoothed area (averaged across seams)
   const acc=new Float64Array(nc*3);
   for(let t=0;t<I.length;t+=3){const a=I[t],b=I[t+1],d=I[t+2];
     const ux=P.getX(b)-P.getX(a),uy=P.getY(b)-P.getY(a),uz=P.getZ(b)-P.getZ(a),vx=P.getX(d)-P.getX(a),vy=P.getY(d)-P.getY(a),vz=P.getZ(d)-P.getZ(a);
     const nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx;for(const q of[a,b,d]){const c=cid[q];acc[c*3]+=nx;acc[c*3+1]+=ny;acc[c*3+2]+=nz}}
   for(let v=0;v<cnt;v++){const c=cid[v],w=Math.min(1,cw[c]*1.5);if(w<=0)continue;const l=Math.hypot(acc[c*3],acc[c*3+1],acc[c*3+2])||1;
     let x=N.getX(v)*(1-w)+acc[c*3]/l*w,y=N.getY(v)*(1-w)+acc[c*3+1]/l*w,z=N.getZ(v)*(1-w)+acc[c*3+2]/l*w;const m=Math.hypot(x,y,z)||1;N.setXYZ(v,x/m,y/m,z/m)}
   P.needsUpdate=N.needsUpdate=true;}

  /* ---- material (albedo / normal / roughness from the supplied PBR set) ---- */
  const tl=new THREE.TextureLoader();
  const albedo=tl.load(window.ASSETS.albedo);albedo.colorSpace=THREE.SRGBColorSpace;albedo.anisotropy=4;
  const normal=tl.load(window.ASSETS.normal);
  const rough=tl.load(window.ASSETS.rough);
  const uniforms={uDent:{value:new THREE.Vector4(0,1,1,0)},uInfl:{value:0},uBelly:{value:0}};
  const mat=new THREE.MeshStandardMaterial({map:albedo,normalMap:normal,normalScale:new THREE.Vector2(1,1),roughnessMap:rough,roughness:1,metalness:0});
  const patch=sh=>{
    Object.assign(sh.uniforms,uniforms);
    sh.vertexShader=sh.vertexShader.replace('#include <common>','#include <common>\nuniform vec4 uDent;uniform float uInfl;uniform float uBelly;varying vec3 vRP;')
      .replace('#include <skinning_vertex>',`#include <skinning_vertex>
        vec3 dd=transformed-uDent.xyz;
        transformed-=objectNormal*(uDent.w*.28*exp(-dot(dd,dd)/.45)*(1.0-smoothstep(1.9,2.2,transformed.y)));
        float by=transformed.y-1.35;
        transformed+=objectNormal*(uInfl+uBelly*exp(-by*by/.5)*smoothstep(-.2,.5,objectNormal.z));`);
    sh.fragmentShader=sh.fragmentShader.replace('#include <common>','#include <common>\nvarying vec3 vRP;')
      .replace('#include <normal_fragment_maps>',THREE.ShaderChunk.normal_fragment_maps.replace('mapN.xy *= normalScale;',
       'vec2 q1=(vRP.xy-vec2(0.,2.7))/vec2(.55,.34);vec2 q2=vec2(abs(vRP.x)-.2,vRP.y-2.85)/.26;float fm=min(smoothstep(.55,1.,length(q1)),smoothstep(.5,1.,length(q2)));fm=mix(1.,fm,step(.05,vRP.z));mapN.xy *= normalScale*fm;'));
  };
  mat.onBeforeCompile=patch;

  /* ---- skeleton ---- */
  const group=new THREE.Group();
  const mesh=new THREE.SkinnedMesh(geo,mat);mesh.frustumCulled=false;group.add(mesh);
  const bones=M.bones.map(b=>{const bn=new THREE.Bone();bn.name=b.n;bn.position.fromArray(b.pos);bn.quaternion.fromArray(b.q);return bn});
  const idx={};M.bones.forEach((b,i)=>idx[b.n]=i);
  M.bones.forEach((b,i)=>{if(b.p>=0)bones[b.p].add(bones[i]);else mesh.add(bones[i])});
  group.updateMatrixWorld(true);
  const restW=bones.map(b=>b.matrixWorld.clone());
  const restQ=bones.map(b=>b.quaternion.clone()),restP=bones.map(b=>b.position.clone());
  const skeleton=new THREE.Skeleton(bones);
  mesh.bind(skeleton,new THREE.Matrix4());
  const by={};bones.forEach(b=>by[b.name]=b);
  // topological order (parents first)
  const order=[];{const seen=new Set();const visit=i=>{if(seen.has(i))return;const p=M.bones[i].p;if(p>=0)visit(p);seen.add(i);order.push(i)};for(let i=0;i<bones.length;i++)visit(i)}

  /* "attach" gives an Object3D that follows a bone but whose rest world frame is identity,
     so children can be placed with absolute rest-pose (world) coordinates. */
  const attach=name=>{const o=new THREE.Object3D();const m=restW[idx[name]].clone().invert();m.decompose(o.position,o.quaternion,o.scale);by[name].add(o);return o};
  const face=attach('Head'),body=attach('Spine1');

  /* ---- rest-pose raycasting for face placement ---- */
  const tmp=new THREE.Mesh(geo,new THREE.MeshBasicMaterial({side:THREE.DoubleSide}));
  const ray=new THREE.Raycaster();
  const surf=(x,y,dirx=0)=>{ // shoot from the front towards -z
    ray.set(new THREE.Vector3(x+dirx*1.0,y,2),new THREE.Vector3(-dirx*.35,0,-1).normalize());
    const h=ray.intersectObject(tmp,false)[0];if(!h)return null;
    const n=h.face.normal.clone();return{x:h.point.x,y:h.point.y,z:h.point.z,n:[n.x,n.y,n.z]};
  };
  const FX0=-.7,FX1=.7,FY0=1.85,FY1=3.05,FNX=43,FNY=37,tab=new Float32Array(FNX*FNY);
  for(let j=0;j<FNY;j++)for(let i=0;i<FNX;i++){const s=surf(lerp(FX0,FX1,i/(FNX-1)),lerp(FY0,FY1,j/(FNY-1)));tab[j*FNX+i]=s?s.z:.3}
  const faceZ=(x,y)=>{const fx=clamp((x-FX0)/(FX1-FX0),0,1)*(FNX-1),fy=clamp((y-FY0)/(FY1-FY0),0,1)*(FNY-1),i=Math.min(FNX-2,Math.floor(fx)),j=Math.min(FNY-2,Math.floor(fy)),a=fx-i,b=fy-j;
    return lerp(lerp(tab[j*FNX+i],tab[j*FNX+i+1],a),lerp(tab[(j+1)*FNX+i],tab[(j+1)*FNX+i+1],a),b)};

  /* ---- invisible hit colliders (absolute coords, attached to bones) ---- */
  const hm=new THREE.MeshBasicMaterial({visible:false}),colliders=[];
  const sph=new THREE.SphereGeometry(1,16,12);
  const addEll=(boneName,region,c,r)=>{const o=attach(boneName),m=new THREE.Mesh(sph,hm);m.position.set(...c);m.scale.set(...r);m.userData.region=region;o.add(m);colliders.push(m)};
  const addCap=(boneName,region,a,b,rad)=>{const o=attach(boneName),A=new THREE.Vector3(...a),Bv=new THREE.Vector3(...b),len=A.distanceTo(Bv);
    const m=new THREE.Mesh(new THREE.CapsuleGeometry(rad,Math.max(.01,len-2*rad),4,8),hm);m.position.copy(A).add(Bv).multiplyScalar(.5);m.quaternion.setFromUnitVectors(AY,Bv.clone().sub(A).normalize());m.userData.region=region;o.add(m);colliders.push(m)};
  addEll('Head','head',[0,2.75,.05],[.62,.58,.55]);
  addEll('Spine1','belly',[0,1.45,0],[.98,.95,.82]);
  const wp=n=>new THREE.Vector3().setFromMatrixPosition(restW[idx[n]]);
  for(const s of['Left','Right']){
    const a=wp(s+'Arm'),f=wp(s+'ForeArm'),h=wp(s+'Hand'),he=wp(s+'Hand_end');
    addCap(s+'Arm','arm',a.toArray(),f.toArray(),.2);addCap(s+'ForeArm','arm',f.toArray(),he.toArray(),.2);
    const u=wp(s+'UpLeg'),l=wp(s+'Leg'),ft=wp(s+'Foot');
    addCap(s+'UpLeg','foot',u.toArray(),l.toArray(),.3);addCap(s+'Leg','foot',l.toArray(),ft.toArray(),.25);
  }
  // arm rest angle (below horizontal) for hang computation
  const armPhi=s=>{const a=wp(s+'Arm'),e=wp(s+'Hand_end');return Math.atan2(a.y-e.y,Math.abs(e.x-a.x))};
  const PHI={Left:armPhi('Left'),Right:armPhi('Right')};

  /* ---- procedural posing ----
     P: {dy, lean, tilt, nod, yaw, roll, ar:[sx,sz,ex,ez], al:[..], fing, hip, sit, kneeBend, sway}
     Rotations are world-axis deltas (x = left/right, y = up, z = forward). */
  const wq=bones.map(()=>new THREE.Quaternion()),D=bones.map(()=>null);
  const I=new THREE.Quaternion(),_pw=new THREE.Quaternion(),_v=new THREE.Vector3();
  const set=(name,q)=>{const i=idx[name];D[i]=D[i]?D[i].multiply(q):q};

  /* ---- arm vs belly collision ----
     The belly is approximated by a sphere that follows Spine1; if any arm point would end up inside it the
     arm angles are nudged (small gradient steps) until the arm rests on the surface instead of sinking in. */
  const BELLY_R=.8,bellyLocal=new THREE.Vector3(0,1.45,-.06).applyMatrix4(restW[idx.Spine1].clone().invert());
  const bc=new THREE.Vector3(),pa=new THREE.Vector3(),pb=new THREE.Vector3(),pc=new THREE.Vector3();
  const armIdx=s=>['Arm','ForeArm','Hand','Hand_end'].map(n=>idx[s+n]);
  function setArm(s,side,v,fing,ci){
    const hang=side*(-(Math.PI/2-PHI[s]));
    const Ds=[mul(rx(v[0]),rz(hang+side*v[1])),mul(rx(v[2]),rz(side*v[3])),rx(-fing*.45),null];
    for(let k=0;k<4;k++){const i=ci[k],pq=wq[M.bones[i].p];_pw.copy(pq).invert();
      const q=Ds[k]?_pw.clone().multiply(Ds[k]).multiply(pq).multiply(restQ[i]):restQ[i];
      bones[i].quaternion.copy(q);wq[i].copy(pq).multiply(q)}
    bones[ci[0]].updateMatrixWorld(true);
  }
  function penetration(ci,R){
    let tot=0;
    const chk=(p,clr)=>{const d=p.distanceTo(bc),need=R+clr;if(d<need)tot+=(need-d)*(need-d)};
    pa.setFromMatrixPosition(bones[ci[0]].matrixWorld);pb.setFromMatrixPosition(bones[ci[1]].matrixWorld);pc.setFromMatrixPosition(bones[ci[2]].matrixWorld);
    chk(pc,.07);
    pa.setFromMatrixPosition(bones[ci[3]].matrixWorld);chk(pa,.05);chk(pc.clone().lerp(pa,.5),.06);
    return tot;
  }
  function solveArm(s,side,v0,fing,R){
    const ci=armIdx(s),v=[...v0],W=[1,1.3,.7,.7];
    setArm(s,side,v,fing,ci);let e=penetration(ci,R);
    for(let it=0;it<8&&e>1e-5;it++){
      const g=[0,0,0,0];
      for(let k=0;k<4;k++){const o=v[k];v[k]=o+.05;setArm(s,side,v,fing,ci);g[k]=(penetration(ci,R)-e)/.05*W[k];v[k]=o}
      const gn=g[0]*g[0]+g[1]*g[1]+g[2]*g[2]+g[3]*g[3];if(gn<1e-10)break;
      const st=e/gn*1.1;for(let k=0;k<4;k++)v[k]=clamp(v[k]-clamp(g[k]*st,-.2,.2),v0[k]-.7,v0[k]+.7);
      setArm(s,side,v,fing,ci);e=penetration(ci,R);
    }
    return v;
  }
  function pose(P){
    D.fill(null);
    const L=P.lean,T=P.tilt;
    set('Hips',mul(rx(L*.25),rz(T*.1)));
    set('Spine',mul(rx(L*.25),rz(T*.2)));
    set('Spine1',mul(rx(L*.3),rz(T*.2)));
    set('Spine2',mul(rx(L*.2),rz(T*.2)));
    set('Neck',mul(rx(P.nod*.35),ry(P.yaw*.4),rz(P.roll*.4)));
    set('Head',mul(rx(P.nod*.65),ry(P.yaw*.6),rz(P.roll*.6)));
    for(const[s,side] of[['Left',1],['Right',-1]])set(s+'UpLeg',mul(rx(P.hip),rz(side*P.sit*.12)));
    if(P.sit>0){for(const s of['Left','Right']){set(s+'UpLeg',rx(-1.35*P.sit))}}
    for(const i of order){
      const p=M.bones[i].p,pq=p>=0?wq[p]:I;
      _pw.copy(pq).invert();
      const q=D[i]?_pw.clone().multiply(D[i]).multiply(pq).multiply(restQ[i]):restQ[i];
      bones[i].quaternion.copy(q);bones[i].position.copy(restP[i]);
      wq[i].copy(pq).multiply(q);
    }
    // hips vertical offset (sit / bounce)
    const hi=idx.Hips,pq=M.bones[hi].p>=0?wq[M.bones[hi].p]:I;
    _v.set(0,P.dy,0).applyQuaternion(_pw.copy(pq).invert());bones[hi].position.add(_v);
    group.updateMatrixWorld(true);
    bc.copy(bellyLocal).applyMatrix4(bones[idx.Spine1].matrixWorld);
    const R=BELLY_R+(P.inflate||0);
    for(const[s,side,v] of[['Left',1,P.ar],['Right',-1,P.al]]){
      const sv=solveArm(s,side,v,P.fing,R);setArm(s,side,sv,P.fing,armIdx(s));
    }
  }
  /* ---- face decal: a skinned copy of the front-of-head triangles, lifted 4mm, textured with a canvas ---- */
  const nor=geo.attributes.normal,si=geo.attributes.skinIndex,sw=geo.attributes.skinWeight,ps=geo.attributes.position,ix=geo.index.array,uvA=geo.attributes.uv;
  const DX0=-.55,DX1=.55,DY0=2.2,DY1=3.2,SC=640,CW=Math.round((DX1-DX0)*SC),CH=Math.round((DY1-DY0)*SC);
  const inFace=v=>{const x=ps.getX(v),y=ps.getY(v);return x>DX0&&x<DX1&&y>DY0&&y<DY1&&ps.getZ(v)>.1&&nor.getZ(v)>-.1};
  const remap=new Map(),dp=[],dn=[],duv=[],dsi=[],dsw=[],di=[];
  const addV=v=>{let k=remap.get(v);if(k===undefined){k=dp.length/3;remap.set(v,k);
    const x=ps.getX(v),y=ps.getY(v),z=ps.getZ(v),nx=nor.getX(v),ny=nor.getY(v),nz=nor.getZ(v);
    dp.push(x+nx*.004,y+ny*.004,z+nz*.004);dn.push(nx,ny,nz);duv.push((x-DX0)/(DX1-DX0),(y-DY0)/(DY1-DY0));
    for(let j=0;j<4;j++){dsi.push(si.array[v*4+j]);dsw.push(sw.array[v*4+j])}}return k};
  for(let t=0;t<ix.length;t+=3){const a=ix[t],b=ix[t+1],c=ix[t+2];if(inFace(a)&&inFace(b)&&inFace(c))di.push(addV(a),addV(b),addV(c))}
  const dgeo=new THREE.BufferGeometry();
  dgeo.setAttribute('position',new THREE.BufferAttribute(new Float32Array(dp),3));dgeo.setAttribute('normal',new THREE.BufferAttribute(new Float32Array(dn),3));
  dgeo.setAttribute('uv',new THREE.BufferAttribute(new Float32Array(duv),2));
  dgeo.setAttribute('skinIndex',new THREE.BufferAttribute(new Uint16Array(dsi),4));dgeo.setAttribute('skinWeight',new THREE.BufferAttribute(new Float32Array(dsw),4));
  dgeo.setIndex(di);
  const cv=document.createElement('canvas');cv.width=CW;cv.height=CH;const cx=cv.getContext('2d');
  const ctex=new THREE.CanvasTexture(cv);ctex.colorSpace=THREE.SRGBColorSpace;ctex.anisotropy=4;
  const dmat=new THREE.MeshStandardMaterial({map:ctex,transparent:true,roughness:.6,depthWrite:false,polygonOffset:true,polygonOffsetFactor:-2,polygonOffsetUnits:-2});
  dmat.onBeforeCompile=patch;
  const decal=new THREE.SkinnedMesh(dgeo,dmat);decal.frustumCulled=false;decal.renderOrder=2;group.add(decal);decal.bind(skeleton,new THREE.Matrix4());
  let skin=[244,201,60],lastKey='';
  // skin colour sampled from the supplied albedo (forehead area) so eyelids match the painted skin
  let skinM=skin;
  {const im=new Image();im.onload=()=>{const c=document.createElement('canvas');c.width=im.width;c.height=im.height;const g=c.getContext('2d',{willReadFrequently:true});g.drawImage(im,0,0);
      const acc=()=>({r:0,g:0,b:0,n:0}),E=acc(),Mo=acc();
      for(const v of remap.keys()){const x=ps.getX(v),y=ps.getY(v);
        const de=Math.min(Math.hypot(x-.2,y-2.85),Math.hypot(x+.2,y-2.85)),dm=Math.hypot(x/.17,(y-2.68)/.075);
        const tgt=(de>.14&&de<.19)?E:(dm>1.25&&dm<1.9&&y<2.78)?Mo:null;if(!tgt)continue;
        const u=uvA.getX(v),w=uvA.getY(v);const d=g.getImageData(Math.floor(u*(c.width-1)),Math.floor((1-w)*(c.height-1)),1,1).data;tgt.r+=d[0];tgt.g+=d[1];tgt.b+=d[2];tgt.n++}
      const rgb=a=>a.n>8?[Math.round(a.r/a.n),Math.round(a.g/a.n),Math.round(a.b/a.n)]:null;
      const e=rgb(E),m=rgb(Mo)||e;if(e){skin=e;skinM=m;lastKey=''}};im.src=window.ASSETS.albedo}
  const px=x=>(x-DX0)*SC,py=y=>(DY1-y)*SC;
  const EYE={x:.2,y:2.85,r:.115};
  function paint(P){
    const key=[P.u,P.l,P.sl,P.arc,P.mo,P.sm,P.te,P.tg,P.bl,P.lx,P.ly,P.pup||1].map(v=>Math.round(v*60)).join(',');if(key===lastKey)return;lastKey=key;
    cx.clearRect(0,0,CW,CH);
    // cover the painted eyes + mouth with skin so nothing static is left behind; we draw our own
    const rgba=(c,a)=>'rgba('+c[0]+','+c[1]+','+c[2]+','+a+')';
    const patch=(x,y,rx,ry,col)=>{cx.save();cx.translate(px(x),py(y));cx.scale(1,ry/rx);const R=rx*SC,g=cx.createRadialGradient(0,0,R*.9,0,0,R*1.55);g.addColorStop(0,rgba(col,1));g.addColorStop(1,rgba(col,0));cx.fillStyle=g;cx.beginPath();cx.arc(0,0,R*1.55,0,Math.PI*2);cx.fill();cx.restore()};
    for(const s of[-1,1])patch(s*.2,2.85,.128,.128,skin);
    patch(0,2.68,.17,.075,skinM);
    // blush
    if(P.bl>.03)for(const s of[-1,1]){const g=cx.createRadialGradient(px(s*.31),py(2.6),0,px(s*.31),py(2.6),.12*SC);g.addColorStop(0,'rgba(255,100,100,'+(.5*Math.min(1,P.bl))+')');g.addColorStop(1,'rgba(255,100,100,0)');cx.fillStyle=g;cx.fillRect(px(s*.31)-.12*SC,py(2.6)-.12*SC,.24*SC,.24*SC)}
    // our own eyes (green ring, pupil that follows the pointer, highlight)
    for(const s of[-1,1]){const ex=s*.2+P.lx*.016,ey=2.85+P.ly*.013,K=1.06,R=.088;
      cx.save();cx.translate(px(s*.2),py(2.85));cx.scale(1,K);
      {const g=cx.createRadialGradient(0,0,.045*SC,0,0,R*SC);g.addColorStop(0,'#8fd14a');g.addColorStop(.8,'#74c23c');g.addColorStop(1,'#4f9a2c');cx.fillStyle=g}
      cx.beginPath();cx.arc(0,0,R*SC,0,Math.PI*2);cx.fill();
      {const an=clamp(P.sl/.4,0,1);if(an>.02){cx.strokeStyle='rgba(55,75,20,'+(.6*an)+')';cx.lineWidth=1.5+2*an;cx.stroke()}} // angry: dark rim around the eye
      cx.restore();
      cx.save();cx.translate(px(ex),py(ey));cx.scale(1,K);cx.fillStyle='#0a0a0a';cx.beginPath();cx.arc(0,0,.05*(P.pup||1)*SC,0,Math.PI*2);cx.fill();cx.restore();
    }
    // closed mouth line (replaces the painted one)
    if(P.mo<=.04){const sm=P.sm,fr=Math.max(0,-sm),hw=.1+.018*fr;cx.strokeStyle='#5a3a12';cx.lineWidth=3+.3*fr;cx.lineCap='round';cx.beginPath();
      for(let i=0;i<=20;i++){const x=-hw+2*hw*i/20;const y=sm>=0?2.7+sm*.012*(x*x)/.01-sm*.008:2.688+fr*.042*(1-(x/hw)**2);i?cx.lineTo(px(x),py(y)):cx.moveTo(px(x),py(y))}cx.stroke()}
    // open mouth
    if(P.mo>.04){
      const mo=P.mo,mw=.11+.13*mo,YMo=2.73,sm=P.sm;
      const top=x=>YMo+sm*.06*(x*x)/(mw*mw)-sm*.025,bot=x=>top(x)-mo*.3*Math.pow(Math.max(0,1-(x*x)/(mw*mw)),.55);
      const N=28,outline=()=>{cx.beginPath();cx.moveTo(px(-mw),py(top(-mw)));for(let i=0;i<=N;i++){const x=-mw+2*mw*i/N;cx.lineTo(px(x),py(top(x)))}for(let i=N;i>=0;i--){const x=-mw+2*mw*i/N;cx.lineTo(px(x),py(bot(x)))}cx.closePath()};
      cx.save();outline();cx.fillStyle='#4b1414';cx.fill();cx.clip();
      cx.fillStyle='#e8737f';cx.beginPath();cx.ellipse(px(0),py(bot(0)+.01),mw*.62*SC,Math.max(2,(top(0)-bot(0))*.5*SC*Math.min(1,P.tg+.25)),0,0,Math.PI*2);cx.fill();
      if(P.te>.1){const th=.045*Math.min(1,mo*2)*Math.min(1,P.te);cx.fillStyle='#fff';cx.beginPath();cx.moveTo(px(-mw*.9),py(top(-mw*.9)));for(let i=0;i<=N;i++){const x=-mw*.9+1.8*mw*i/N;cx.lineTo(px(x),py(top(x)))}for(let i=N;i>=0;i--){const x=-mw*.9+1.8*mw*i/N;cx.lineTo(px(x),py(top(x)-th))}cx.closePath();cx.fill()}
      cx.restore();
      outline();cx.strokeStyle='rgba(120,60,10,.75)';cx.lineWidth=3;cx.lineJoin='round';cx.stroke();
    }
    // eyelids and happy arcs (skin-coloured lids painted over the painted eyes)
    for(const s of[-1,1]){
      const ex=s*EYE.x,ey=EYE.y,r=EYE.r*SC,ang=(s<0?1:-1)*P.sl*.7;
      const lid=(from,to)=>{cx.save();cx.translate(px(ex),py(ey));cx.rotate(ang);cx.beginPath();cx.rect(-r*1.6,from,r*3.2,to-from);cx.clip();
        cx.fillStyle=rgba(skin,1);if('filter' in cx)cx.filter='blur(2.5px)';cx.beginPath();cx.arc(0,0,r*1.08,0,Math.PI*2);cx.fill();cx.restore()};
      if(P.u>.03){const yE=-r+2*r*P.u;lid(-r*1.6,yE);
        cx.save();cx.translate(px(ex),py(ey));cx.rotate(ang);{const a=clamp(P.sl/.4,0,1);cx.strokeStyle='rgba(95,50,8,'+Math.max(.4*Math.min(1,Math.max(0,(P.u-.12)/.25)),.9*a)+')';cx.lineWidth=1.5+2.5*a}cx.beginPath();const hw=Math.sqrt(Math.max(0,(r*1.08)**2-yE*yE));cx.moveTo(-hw,yE);cx.lineTo(hw,yE);cx.stroke();cx.restore()}
      if(P.l>.03){lid(r-2*r*P.l,r*1.6)}
      if(Math.abs(P.arc)>.35&&P.u>.92){
        cx.save();cx.translate(px(ex),py(ey));cx.strokeStyle='#3a1c08';cx.lineWidth=.02*SC;cx.lineCap='round';cx.beginPath();
        if(P.arc>0)cx.arc(0,r*.35,r*.8,Math.PI*1.15,Math.PI*1.85);else cx.arc(0,-r*.35,r*.8,Math.PI*.15,Math.PI*.85);
        cx.stroke();cx.restore();
      }
    }
    ctex.needsUpdate=true;
  }

  console.log('model built',geo.attributes.position.count,'verts',(performance.now()-t0|0)+'ms','armPhi',PHI.Left.toFixed(2));
  return{group,mesh,bones:by,uniforms,surf,faceZ,colliders,face,body,hipY:wp('Hips').y,pose,paint,HEAD:{x:0,y:0,z:0}};
}
