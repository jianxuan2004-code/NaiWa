import * as THREE from 'three';

/* 洗澡: a bathtub (white enamel, gold feet, water + foam bubbles + a rubber duck) that the pet sits in. */

export const TUB={z:.25,r:1.95,h:1.05,water:.82};
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
