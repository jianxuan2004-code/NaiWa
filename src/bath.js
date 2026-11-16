import * as THREE from 'three';

/* 洗澡: a bathtub (white enamel, gold feet, water + foam bubbles + a rubber duck) that the pet sits in. */

export const TUB={z:.25,r:1.95,h:.62,water:.5};
const M=(c,o={})=>new THREE.MeshStandardMaterial({color:c,roughness:.45,...o});

function foamTex(){const c=document.createElement('canvas');c.width=c.height=64;const g=c.getContext('2d');
  const r=g.createRadialGradient(24,24,2,32,32,30);r.addColorStop(0,'rgba(255,255,255,1)');r.addColorStop(.7,'rgba(235,248,255,.95)');r.addColorStop(1,'rgba(200,230,255,.0)');
  g.fillStyle=r;g.beginPath();g.arc(32,32,30,0,7);g.fill();const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;return t}

export function buildBath(){
  const group=new THREE.Group();group.position.z=TUB.z;group.visible=false;
  const wall=new THREE.Mesh(new THREE.CylinderGeometry(TUB.r,TUB.r*.88,TUB.h,48,1,true),M(0xffffff,{side:THREE.DoubleSide}));wall.position.y=TUB.h/2+.12;group.add(wall);
  const rim=new THREE.Mesh(new THREE.TorusGeometry(TUB.r,.11,12,56),M(0xf4f9ff));rim.rotation.x=Math.PI/2;rim.position.y=TUB.h+.12;group.add(rim);
  const stripe=new THREE.Mesh(new THREE.CylinderGeometry(TUB.r*.985,TUB.r*.955,.16,48,1,true),M(0x6ec6ff,{side:THREE.DoubleSide}));stripe.position.y=TUB.h*.72+.12;group.add(stripe);
  const floor=new THREE.Mesh(new THREE.CircleGeometry(TUB.r*.88,40),M(0xe8f1f8));floor.rotation.x=-Math.PI/2;floor.position.y=.14;group.add(floor);
  for(let i=0;i<4;i++){const a=i/4*Math.PI*2+Math.PI/4;const f=new THREE.Mesh(new THREE.SphereGeometry(.17,12,10),M(0xe0b04a,{metalness:.6,roughness:.35}));f.position.set(Math.cos(a)*TUB.r*.78,.1,Math.sin(a)*TUB.r*.78);group.add(f)}
  const waterM=new THREE.MeshStandardMaterial({color:0x7fd8ff,transparent:true,opacity:.62,roughness:.15,metalness:.05});
  const water=new THREE.Mesh(new THREE.CircleGeometry(TUB.r*.94,48),waterM);water.rotation.x=-Math.PI/2;water.position.y=TUB.water;group.add(water);
  // foam bubbles floating on the water
  const ft=foamTex(),foam=[];
  for(let i=0;i<46;i++){const s=new THREE.Sprite(new THREE.SpriteMaterial({map:ft,transparent:true,depthWrite:false}));
    const a=Math.random()*Math.PI*2,r=Math.sqrt(Math.random())*TUB.r*.88,sc=.35+Math.random()*.55;
    s.position.set(Math.cos(a)*r,TUB.water+.06+Math.random()*.12,Math.sin(a)*r);s.scale.setScalar(sc);s.userData={b:sc,ph:Math.random()*6.28};group.add(s);foam.push(s)}
  // rubber duck
  const duck=new THREE.Group();const Y=M(0xffd23f,{roughness:.5});
  const body=new THREE.Mesh(new THREE.SphereGeometry(.22,16,12),Y);body.scale.set(1.2,.85,1);duck.add(body);
  const head=new THREE.Mesh(new THREE.SphereGeometry(.14,14,10),Y);head.position.set(.17,.2,0);duck.add(head);
  const beak=new THREE.Mesh(new THREE.ConeGeometry(.05,.12,8),M(0xff8a2a));beak.rotation.z=-Math.PI/2;beak.position.set(.33,.18,0);duck.add(beak);
  for(const z of[-.06,.06]){const e=new THREE.Mesh(new THREE.SphereGeometry(.022,6,6),M(0x111111));e.position.set(.26,.25,z);duck.add(e)}
  duck.position.set(1.15,TUB.water+.1,1.0);group.add(duck);
  return{group,update(T,k){
    group.visible=k>.01;const s=.001+k;group.scale.set(s,s,s);
    for(const f of foam){const u=f.userData;f.position.y=TUB.water+.08+Math.sin(T*1.4+u.ph)*.03;f.scale.setScalar(u.b*(1+.06*Math.sin(T*2+u.ph)))}
    duck.position.y=TUB.water+.1+Math.sin(T*1.8)*.04;duck.rotation.y=Math.sin(T*.7)*.5;duck.rotation.z=Math.sin(T*1.8)*.08;
  }};
}

/* ================= 浴室: a tiled bathroom of its own (the bath is no longer taken in the bedroom) with a shower head whose water is animated ================= */
export const SHOWER={head:new THREE.Vector3(1.25,4.35,.55)};

function tileTex(w,h,draw,rep){const c=document.createElement('canvas');c.width=w;c.height=h;draw(c.getContext('2d'),w,h);
  const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;t.wrapS=t.wrapT=THREE.RepeatWrapping;t.repeat.set(...rep);t.anisotropy=4;return t}

export function buildBathroom(WALLZ){
  const g=new THREE.Group();g.visible=false;
  const mat=(c,o={})=>new THREE.MeshStandardMaterial({color:c,roughness:.5,...o});
  // walls: glossy white / pale-aqua tiles with a blue band
  const wallT=tileTex(256,256,(x,w,h)=>{x.fillStyle='#e9f7f7';x.fillRect(0,0,w,h);for(let i=0;i<4;i++)for(let j=0;j<4;j++){x.fillStyle=(i+j)%2?'#f6fdfd':'#e2f3f4';x.fillRect(i*64+2,j*64+2,60,60)}
    x.strokeStyle='#bcd9dc';x.lineWidth=3;for(let i=0;i<=4;i++){x.beginPath();x.moveTo(i*64,0);x.lineTo(i*64,h);x.stroke();x.beginPath();x.moveTo(0,i*64);x.lineTo(w,i*64);x.stroke()}},[7,4.5]);
  const wall=new THREE.Mesh(new THREE.PlaneGeometry(14,9),mat(0xffffff,{map:wallT,roughness:.35}));wall.position.set(0,4.2,WALLZ);g.add(wall);
  for(const [y,h,c] of[[2.7,.3,0x6ec6ff],[2.95,.08,0xffffff]]){const b=new THREE.Mesh(new THREE.PlaneGeometry(14,h),mat(c,{roughness:.3}));b.position.set(0,y,WALLZ+.01);g.add(b)}
  const floorT=tileTex(256,256,(x,w,h)=>{for(let i=0;i<2;i++)for(let j=0;j<2;j++){x.fillStyle=(i+j)%2?'#ffffff':'#bfe6ef';x.fillRect(i*128,j*128,128,128)}x.strokeStyle='rgba(120,170,185,.5)';x.lineWidth=3;x.strokeRect(0,0,w,h);x.beginPath();x.moveTo(128,0);x.lineTo(128,h);x.moveTo(0,128);x.lineTo(w,128);x.stroke()},[4,5]);
  const floor=new THREE.Mesh(new THREE.PlaneGeometry(14,16),mat(0xffffff,{map:floorT,roughness:.3}));floor.rotation.x=-Math.PI/2;floor.position.set(0,0,WALLZ+8);g.add(floor);
  const skirt=new THREE.Mesh(new THREE.BoxGeometry(14,.3,.1),mat(0x8fcfdc));skirt.position.set(0,.15,WALLZ+.05);g.add(skirt);
  // frosted window
  const wf=new THREE.Mesh(new THREE.BoxGeometry(1.5,1.7,.1),mat(0xffffff));wf.position.set(-2.7,4.3,WALLZ+.06);g.add(wf);
  const gl=new THREE.Mesh(new THREE.PlaneGeometry(1.3,1.5),new THREE.MeshBasicMaterial({color:0xcdeeff}));gl.position.set(-2.7,4.3,WALLZ+.12);g.add(gl);
  // towel rail with a towel, shelf with bottles, bath mat
  {const rail=new THREE.Mesh(new THREE.CylinderGeometry(.04,.04,1.5,10),mat(0xcfd6dc,{metalness:.4,roughness:.3}));rail.rotation.z=Math.PI/2;rail.position.set(3.2,3.6,WALLZ+.35);g.add(rail);
   const tw=new THREE.Mesh(new THREE.BoxGeometry(.9,1.15,.08),mat(0xff9fb5,{roughness:.95}));tw.position.set(3.2,3.0,WALLZ+.4);g.add(tw);
   const st=new THREE.Mesh(new THREE.BoxGeometry(.9,.04,.1),mat(0x4aa9c4));stripe(tw);function stripe(t){t.add(stripeMesh())}
   function stripeMesh(){const s=new THREE.Mesh(new THREE.BoxGeometry(.92,.1,.09),mat(0xffffff,{roughness:.95}));s.position.y=-.35;return s}void st;
   const shelf=new THREE.Mesh(new THREE.BoxGeometry(1.5,.07,.45),mat(0xb98a55,{roughness:.7}));shelf.position.set(-3.6,3.2,WALLZ+.3);g.add(shelf);
   [[0xff8fb1,-.5,.34,.13],[0x7fd0ff,-.2,.4,.12],[0xffe15a,.15,.3,.14]].forEach(([c,x,h,r])=>{const b=new THREE.Mesh(new THREE.CylinderGeometry(r,r,h,16),mat(c,{roughness:.3}));b.position.set(-3.6+x,3.235+h/2,WALLZ+.3);g.add(b);
     const cap=new THREE.Mesh(new THREE.CylinderGeometry(r*.45,r*.45,.08,12),mat(0xffffff));cap.position.set(-3.6+x,3.235+h+.04,WALLZ+.3);g.add(cap)});
   const matr=new THREE.Mesh(new THREE.CylinderGeometry(1.7,1.7,.03,40),mat(0xffd36b,{roughness:.95}));matr.scale.set(1.3,1,.65);matr.position.set(0,.016,3.4);g.add(matr)}

  // the shower: a pipe from the ceiling, an elbow and a round head with a face of nozzles
  const chrome=mat(0xdfe6ea,{metalness:.55,roughness:.22});
  const pipe=new THREE.Mesh(new THREE.CylinderGeometry(.09,.09,6,14),chrome);pipe.position.set(SHOWER.head.x,7.4,SHOWER.head.z);g.add(pipe);
  const neck=new THREE.Mesh(new THREE.CylinderGeometry(.07,.12,.5,14),chrome);neck.position.set(SHOWER.head.x,SHOWER.head.y+.5,SHOWER.head.z);g.add(neck);
  const head=new THREE.Group();head.position.copy(SHOWER.head);g.add(head);
  const disc=new THREE.Mesh(new THREE.CylinderGeometry(.6,.5,.14,32),chrome);head.add(disc);
  const face=new THREE.Mesh(new THREE.CircleGeometry(.5,32),mat(0x9fb4bd,{metalness:.4,roughness:.4}));face.rotation.x=Math.PI/2;face.position.y=-.075;head.add(face);
  for(let i=0;i<19;i++){const a=i*2.4,r=i?Math.sqrt(i/19)*.42:0,n=new THREE.Mesh(new THREE.CircleGeometry(.03,8),new THREE.MeshBasicMaterial({color:0x222b30}));n.rotation.x=Math.PI/2;n.position.set(Math.cos(a)*r,-.078,Math.sin(a)*r);head.add(n)}
  head.rotation.z=-.6;   // the head swivels towards the middle of the room

  // water: 200 translucent streaks falling from the nozzles to the tub, plus a ripple on the water surface
  const N=200,streak=new THREE.InstancedMesh(new THREE.BoxGeometry(.034,.6,.034),new THREE.MeshBasicMaterial({color:0x86cffa,transparent:true,opacity:.9,depthWrite:false}),N);
  streak.frustumCulled=false;streak.visible=false;g.add(streak);
  const seed=[];for(let i=0;i<N;i++){const a=Math.random()*Math.PI*2,r=Math.sqrt(Math.random())*.42;seed.push({a,r,ph:Math.random(),sp:.85+Math.random()*.4,k:1.6+Math.random()*1.4})}
  const ring=new THREE.Mesh(new THREE.RingGeometry(.6,.7,40),new THREE.MeshBasicMaterial({color:0xffffff,transparent:true,opacity:0,depthWrite:false,side:THREE.DoubleSide}));ring.rotation.x=-Math.PI/2;ring.position.set(0,TUB.water+.04,TUB.z);ring.visible=false;g.add(ring);
  const dm=new THREE.Object3D(),yEnd=1.0;
  /* flow 0..1: how hard the water runs */
  function update(T,flow){
    streak.visible=ring.visible=flow>.02;if(!streak.visible)return;
    for(let i=0;i<N;i++){const s=seed[i],life=(T*s.sp*1.7+s.ph)%1,y0=SHOWER.head.y-.1,y=y0-life*(y0-yEnd),sp=1+life*s.k;
      const ease=life*life*(3-2*life),x=SHOWER.head.x+(.05-SHOWER.head.x)*ease+Math.cos(s.a)*s.r*sp,z=SHOWER.head.z+Math.sin(s.a)*s.r*sp*.8+life*.15;
      dm.position.set(x,y,z);dm.rotation.set(Math.sin(s.a)*.12*life,0,-Math.cos(s.a)*.12*life);dm.scale.set(1,.35+.65*flow,1);dm.updateMatrix();streak.setMatrixAt(i,dm.matrix)}
    streak.instanceMatrix.needsUpdate=true;streak.material.opacity=.9*Math.min(1,flow*1.5);
    const rp=(T*1.6)%1;ring.scale.setScalar(1+rp*2.2);ring.material.opacity=.5*(1-rp)*flow;
  }
  return{group:g,update,head:SHOWER.head};
}
