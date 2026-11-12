import * as THREE from 'three';

/* 出门玩: three little outdoor scenes (公园 / 海边 / 雪地) built from primitives, swapped in for the room. */

const M=(c,o={})=>new THREE.MeshStandardMaterial({color:c,roughness:.9,...o});
const B=(c,o={})=>new THREE.MeshBasicMaterial({color:c,...o});
const mesh=(geo,mat,p=[0,0,0],r=[0,0,0],s=[1,1,1])=>{const m=new THREE.Mesh(geo,mat);m.position.set(...p);m.rotation.set(...r);m.scale.set(...s);return m};
let seed=7;const rnd=(a=0,b=1)=>{seed=(seed*16807)%2147483647;return a+(seed/2147483647)*(b-a)};
const ground=(c,r=18)=>mesh(new THREE.CircleGeometry(r,56),M(c),[0,0,-1],[-Math.PI/2,0,0]);
const sphere=(r,c,p,s)=>mesh(new THREE.SphereGeometry(r,18,14),M(c),p,[0,0,0],s);

function cloud(x,y,z,s){const g=new THREE.Group();const m=B(0xffffff,{transparent:true,opacity:.95});
  for(const [dx,dy,r] of[[0,0,.8],[.9,-.1,.65],[-.9,-.12,.6],[.35,.35,.6]])g.add(mesh(new THREE.SphereGeometry(r,14,10),m,[dx,dy,0],[0,0,0],[1.2,.8,.7]));
  g.position.set(x,y,z);g.scale.setScalar(s);return g}
function pine(x,z,s,leaf=0x2f8a55,snow=false){const g=new THREE.Group();g.position.set(x,0,z);g.scale.setScalar(s);
  g.add(mesh(new THREE.CylinderGeometry(.12,.16,.6,8),M(0x7a5230),[0,.3,0]));
  for(let i=0;i<3;i++){const r=.95-i*.25,y=.75+i*.55;g.add(mesh(new THREE.ConeGeometry(r,.9,12),M(leaf),[0,y,0]));
    if(snow)g.add(mesh(new THREE.ConeGeometry(r*.78,.45,12),M(0xffffff,{roughness:1}),[0,y+.25,.0]))}
  return g}
function roundTree(x,z,s,leaf=0x58b84c){const g=new THREE.Group();g.position.set(x,0,z);g.scale.setScalar(s);
  g.add(mesh(new THREE.CylinderGeometry(.14,.2,1.3,8),M(0x8a5a30),[0,.65,0]));
  for(const [dx,dy,dz,r] of[[0,1.7,0,.85],[.5,1.4,.1,.6],[-.5,1.45,-.1,.6],[0,2.2,0,.55]])g.add(sphere(r,leaf,[dx,dy,dz]));
  return g}

export function buildOutdoor(){
  const root=new THREE.Group(),scenes={},anim={};

  /* ---------- 公园 ---------- */
  {const g=new THREE.Group();g.visible=false;g.userData.bg=0xbfe6ff;
   g.add(ground(0x86cf68));
   g.add(mesh(new THREE.CircleGeometry(2.6,40),M(0x9bdc78),[0,.004,.4],[-Math.PI/2,0,0]));
   for(const [x,z,s,c] of[[-9,-13,6,0x6fbf5a],[7,-14,7,0x7ccb62],[0,-16,8,0x69b955]])g.add(sphere(1,c,[x,-s*.55,z],[s*1.6,s,s]));
   g.add(roundTree(-2.5,-1.8,1.15));g.add(roundTree(2.9,-2.6,1.3,0x62c04f));g.add(roundTree(-5,-5,1.5,0x4fae4a));g.add(roundTree(5.5,-6,1.5));
   const cols=[0xff6f91,0xffd166,0xffffff,0xc77dff,0xff9f45];
   for(let i=0;i<46;i++){const x=rnd(-7,7),z=rnd(-8,3);if(Math.abs(x)<2&&z>-1.2)continue;
     const f=new THREE.Group();f.position.set(x,0,z);f.add(mesh(new THREE.CylinderGeometry(.015,.015,.3,5),M(0x4fa84a),[0,.15,0]));
     f.add(mesh(new THREE.SphereGeometry(.08,8,6),M(cols[i%cols.length]),[0,.32,0]));f.add(mesh(new THREE.SphereGeometry(.035,6,5),M(0xffe27a),[0,.37,0]));g.add(f)}
   const sun=mesh(new THREE.CircleGeometry(.9,32),B(0xfff3a0),[3.6,6.4,-14]);g.add(sun);
   const clouds=[cloud(-3,6,-12,1.3),cloud(2,7.2,-14,1.6),cloud(6,5.6,-13,1)];clouds.forEach(c=>g.add(c));
   const bf=[];for(let i=0;i<3;i++){const b=new THREE.Group(),c=[0xff7eb6,0xffd23f,0x7dd3fc][i];
     for(const s of[-1,1]){const w=mesh(new THREE.CircleGeometry(.14,10),B(c,{side:THREE.DoubleSide}),[s*.1,0,0],[0,0,0],[1,1.2,1]);w.userData.s=s;b.add(w)}
     b.userData={cx:rnd(-2.4,2.4),cy:rnd(1.4,3.2),cz:rnd(-1,1),ph:rnd(0,6)};g.add(b);bf.push(b)}
   anim.park=(T,dt)=>{clouds.forEach((c,i)=>{c.position.x+=dt*(.18+i*.05);if(c.position.x>9)c.position.x=-9});
     bf.forEach((b,i)=>{const u=b.userData,t=T*.7+u.ph;b.position.set(u.cx+Math.sin(t)*1.4,u.cy+Math.sin(t*1.7)*.35,u.cz+Math.cos(t*.8)*1.2);b.rotation.y=Math.cos(t)*.6;
       b.children.forEach(w=>{w.rotation.y=w.userData.s*(.2+Math.abs(Math.sin(T*14+i))*1.1)})})};
   scenes.park=g;root.add(g)}

  /* ---------- 海边 ---------- */
  {const g=new THREE.Group();g.visible=false;g.userData.bg=0x9fe0ff;
   g.add(ground(0xf4dca2));
   const sea=mesh(new THREE.PlaneGeometry(60,26),M(0x35b8e8,{roughness:.25,metalness:.1}),[0,.01,-18],[-Math.PI/2,0,0]);g.add(sea);
   const foam=[];for(let i=0;i<3;i++){const f=mesh(new THREE.PlaneGeometry(40,.35),B(0xffffff,{transparent:true,opacity:.8}),[0,.03,-5.6-i*.1],[-Math.PI/2,0,0]);g.add(f);foam.push(f)}
   g.add(mesh(new THREE.CircleGeometry(1,32),B(0xfff3a0),[-3.4,6,-20],[0,0,0],[1.1,1.1,1]));
   // palm tree
   {const p=new THREE.Group();p.position.set(-2.6,0,-2.2);
    for(let i=0;i<5;i++)p.add(mesh(new THREE.CylinderGeometry(.13-i*.01,.15-i*.01,.7,8),M(0x9a6b3c),[i*.1,.35+i*.66,0],[0,0,-.08]));
    for(let i=0;i<6;i++){const a=i/6*Math.PI*2;const l=mesh(new THREE.ConeGeometry(.2,1.5,6),M(0x3fa34d),[.45+Math.cos(a)*.65,3.45,Math.sin(a)*.65],[Math.sin(a)*1.1,0,-Math.cos(a)*1.1-0]);p.add(l)}
    p.add(sphere(.16,0x7a4a20,[.45,3.3,.1]));g.add(p)}
   // umbrella
   {const u=new THREE.Group();u.position.set(2.7,0,-2.8);u.add(mesh(new THREE.CylinderGeometry(.04,.04,2.4,8),M(0xffffff),[0,1.2,0]));
    u.add(mesh(new THREE.ConeGeometry(1.2,.6,16,1,true),M(0xff5d5d,{side:THREE.DoubleSide}),[0,2.5,0]));u.add(mesh(new THREE.ConeGeometry(1.2,.6,16,1,true,0,Math.PI/2),M(0xffffff,{side:THREE.DoubleSide}),[0,2.505,0]));
    u.add(mesh(new THREE.BoxGeometry(1.5,.08,.7),M(0x6ec6ff),[-.2,.05,1.4]));g.add(u)}
   // beach ball
   {const c=document.createElement('canvas');c.width=128;c.height=64;const x=c.getContext('2d');const cs=['#ff5d5d','#ffffff','#ffd23f','#ffffff','#4da3ff','#ffffff'];cs.forEach((k,i)=>{x.fillStyle=k;x.fillRect(i*128/6,0,128/6+1,64)});
    const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;g.add(mesh(new THREE.SphereGeometry(.34,20,14),M(0xffffff,{map:t,roughness:.5}),[1.9,.34,1.7]))}
   for(let i=0;i<26;i++){const x=rnd(-7,7),z=rnd(-4.5,3);if(Math.abs(x)<1.8&&z>-1)continue;g.add(mesh(new THREE.SphereGeometry(.09,8,6),M(i%2?0xffc4d6:0xffffff),[x,.05,z],[0,rnd(0,3),0],[1.3,.6,1]))}
   anim.beach=(T)=>{foam.forEach((f,i)=>{f.position.z=-5.6-i*.1+Math.sin(T*.9+i*1.3)*.45;f.material.opacity=.5+.3*Math.sin(T*.9+i*1.3)});sea.position.y=.01+Math.sin(T*1.2)*.01};
   scenes.beach=g;root.add(g)}

  /* ---------- 雪地 ---------- */
  {const g=new THREE.Group();g.visible=false;g.userData.bg=0xdce9f6;
   {const gr=ground(0xffffff);gr.material.emissive=new THREE.Color(0x70757c);g.add(gr)}
   for(const [x,z,s] of[[-7,-16,5],[3,-18,7],[11,-15,5],[-1,-20,6]]){g.add(mesh(new THREE.ConeGeometry(s,s*1.6,6),M(0xbcd3ea),[x,s*.8-.3,z]));g.add(mesh(new THREE.ConeGeometry(s*.42,s*.7,6),M(0xffffff),[x,s*1.25-.3,z]))}
   g.add(pine(-2.5,-1.8,1.2,0x2f8a55,true));g.add(pine(3,-2.8,1.4,0x2a7d4e,true));g.add(pine(-5,-5,1.6,0x2f8a55,true));g.add(pine(5.8,-6,1.6,0x2a7d4e,true));
   // snowman
   {const s=new THREE.Group();s.position.set(2.1,0,-1.2);const w=M(0xffffff,{roughness:1});
    s.add(sphere(.55,0xffffff,[0,.55,0]));s.add(sphere(.4,0xffffff,[0,1.3,0]));s.add(sphere(.3,0xffffff,[0,1.8,0]));
    s.add(mesh(new THREE.ConeGeometry(.05,.25,8),M(0xff8a2a),[0,1.8,.32],[Math.PI/2,0,0]));
    for(const x of[-.1,.1])s.add(sphere(.035,0x111111,[x,1.88,.27]));
    s.add(mesh(new THREE.CylinderGeometry(.2,.2,.04,12),M(0x222222),[0,2.08,0]));s.add(mesh(new THREE.CylinderGeometry(.14,.14,.26,12),M(0x222222),[0,2.2,0]));void w;g.add(s)}
   const N=260,pos=new Float32Array(N*3);for(let i=0;i<N;i++){pos[i*3]=rnd(-6,6);pos[i*3+1]=rnd(0,8);pos[i*3+2]=rnd(-7,5)}
   const pg=new THREE.BufferGeometry();pg.setAttribute('position',new THREE.BufferAttribute(pos,3));
   const flakes=new THREE.Points(pg,new THREE.PointsMaterial({color:0xffffff,size:.11,sizeAttenuation:true,transparent:true,opacity:.95}));flakes.frustumCulled=false;g.add(flakes);
   anim.snow=(T,dt)=>{const p=pg.attributes.position;for(let i=0;i<N;i++){let y=p.getY(i)-dt*(.7+(i%5)*.12);if(y<0)y=8;p.setY(i,y);p.setX(i,p.getX(i)+Math.sin(T+i)*dt*.15)}p.needsUpdate=true};
   scenes.snow=g;root.add(g)}

  return{root,scenes,update(name,T,dt){const f=anim[name];if(f)f(T,dt)}};
}
