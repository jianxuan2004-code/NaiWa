import * as THREE from 'three';

/* 衣服: clothes are shells wrapped around a character's torso. Every character provides a torso profile
   prof(y) -> {rx, zf, zb} (half-width, front depth, back depth) and a [y0,y1] range to dress, so the same garment
   fits the frog, the egg, the cat loaf, the pear mouse, the seal and the soft-serve alike. */

const M=(color,o={})=>new THREE.MeshStandardMaterial({color,roughness:.7,metalness:0,side:THREE.DoubleSide,...o});
const lerp=(a,b,t)=>a+(b-a)*t,clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
const add=(g,geo,mat,p=[0,0,0],r=[0,0,0],s=[1,1,1])=>{const m=new THREE.Mesh(geo,mat);m.position.set(...p);m.rotation.set(...r);m.scale.set(...s);m.frustumCulled=false;g.add(m);return m};

function canvasTex(w,h,draw,repX=1,repY=1){
  const c=document.createElement('canvas');c.width=w;c.height=h;draw(c.getContext('2d'),w,h);
  const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;t.wrapS=t.wrapT=THREE.RepeatWrapping;t.repeat.set(repX,repY);t.anisotropy=4;return t;
}

/* parametric shell: ellipse cross-sections from y1 (top) down to y0, optionally only an arc of the circumference
   (angle 0 = front, ±π = back) and flaring out towards the bottom */
function shell(P,y0,y1,o={}){
  const {gap=.055,flare=0,flareFrom=.45,ny=44,nt=72,arc=null,ru=1,rv=1,xs=1,zs=1,topIn=0}=o;
  const pos=[],uv=[],idx=[],a0=arc?arc[0]:0,a1=arc?arc[1]:Math.PI*2;
  for(let j=0;j<=ny;j++){
    const t=j/ny,y=lerp(y1,y0,t),p=P(y),cz=(p.zf+p.zb)/2,fl=1+flare*Math.pow(Math.max(0,(t-flareFrom)/(1-flareFrom)),1.6);
    const sc=1-topIn*(1-t)*(1-t)*(t<.15?1:0); // slight narrowing at the neck opening
    const rx=(p.rx+gap)*fl*xs*sc,rz=((p.zf-p.zb)/2+gap)*fl*zs*sc;
    for(let i=0;i<=nt;i++){const a=lerp(a0,a1,i/nt);pos.push(Math.sin(a)*rx,y,cz+Math.cos(a)*rz);uv.push(i/nt*ru,t*rv)}
  }
  for(let j=0;j<ny;j++)for(let i=0;i<nt;i++){const a=j*(nt+1)+i,b=a+1,c=a+nt+1,d=c+1;idx.push(a,c,b,b,c,d)}
  const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(pos,3));g.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));g.setIndex(idx);g.computeVertexNormals();return g;
}
/* a thin elastic ring (collar, belt, hem) following the torso outline at height y */
function ring(g,P,y,tube,color,o={}){
  const p=P(y),gap=o.gap??.05,cz=(p.zf+p.zb)/2,rx=(p.rx+gap)*(o.k||1),rz=((p.zf-p.zb)/2+gap)*(o.k||1);
  return add(g,new THREE.TorusGeometry(1,tube,10,56),M(color,{roughness:o.rough??.6}),[0,y,cz],[Math.PI/2,0,0],[rx,rz,1]);
}
const frontPt=(P,x,y,gap=.05)=>{const p=P(y),cz=(p.zf+p.zb)/2,rx=p.rx+gap,rz=(p.zf-p.zb)/2+gap,u=clamp(x/rx,-.98,.98);return new THREE.Vector3(x,y,cz+rz*Math.sqrt(1-u*u))};
const backPt=(P,x,y,gap=.05)=>{const p=P(y),cz=(p.zf+p.zb)/2,rx=p.rx+gap,rz=(p.zf-p.zb)/2+gap,u=clamp(x/rx,-.98,.98);return new THREE.Vector3(x,y,cz-rz*Math.sqrt(1-u*u))};
const normalAt=(P,x,y,gap=.05)=>{const e=.03,a=frontPt(P,x-e,y,gap),b=frontPt(P,x+e,y,gap),c=frontPt(P,x,y-e,gap),d=frontPt(P,x,y+e,gap);
  return b.clone().sub(a).cross(d.clone().sub(c)).normalize().multiplyScalar(-1)};
function patchAt(g,P,x,y,geo,mat,gap=.07,rot=0){const p=frontPt(P,x,y,gap),n=normalAt(P,x,y,gap);if(n.z<0)n.negate();
  const m=add(g,geo,mat,[p.x,p.y,p.z]);m.quaternion.setFromUnitVectors(new THREE.Vector3(0,0,1),n);m.rotateZ(rot);return m}

const knit=(c1,c2)=>canvasTex(128,128,(x,w,h)=>{x.fillStyle=c1;x.fillRect(0,0,w,h);x.fillStyle=c2;for(let i=0;i<w;i+=8){x.globalAlpha=.55;x.fillRect(i,0,4,h);x.globalAlpha=1}
  x.fillStyle='rgba(0,0,0,.08)';for(let j=0;j<h;j+=6)x.fillRect(0,j,w,2)},4,3);
const stripes=(c1,c2)=>canvasTex(64,128,(x,w,h)=>{x.fillStyle=c1;x.fillRect(0,0,w,h);x.fillStyle=c2;x.fillRect(0,h*.5,w,h*.5)},1,7);
const dots=(c1,c2)=>canvasTex(96,96,(x,w,h)=>{x.fillStyle=c1;x.fillRect(0,0,w,h);x.fillStyle=c2;for(const[a,b]of[[24,24],[72,72],[72,0],[0,72],[24,96],[96,24]]){x.beginPath();x.arc(a,b,9,0,7);x.fill()}},6,4);

export const GARMENTS=[
  {id:'tee',    slot:'body',name:'小背心',  icon:'👕', price:12},
  {id:'stripe', slot:'body',name:'条纹衫',  icon:'🎽', price:16},
  {id:'sweater',slot:'body',name:'针织毛衣',icon:'🧶', price:20},
  {id:'overall',slot:'body',name:'背带裤',  icon:'👖', price:22},
  {id:'dress',  slot:'body',name:'波点裙',  icon:'👗', price:24},
  {id:'apron',  slot:'body',name:'小围裙',  icon:'🍳', price:14},
  {id:'rain',   slot:'body',name:'小雨衣',  icon:'🧥', price:26},
  {id:'cape',   slot:'body',name:'英雄披风',icon:'🦸', price:30},
  {id:'swim',   slot:'body',name:'游泳圈',  icon:'🛟', price:18},
  {id:'wings',  slot:'body',name:'天使翅膀',icon:'😇', price:36},
];

export function buildGarment(id,f){
  const g=new THREE.Group();g.userData.item=id;
  const base=f.prof,[T0,T1]=f.torso,H=T1-T0,kx=f.kx||1,kz=f.kz||1,P=y=>{const p=base(y);return{rx:p.rx*kx,zf:p.zf*kz,zb:p.zb*kz}};
  switch(id){
    case'tee':{
      add(g,shell(P,T0+H*.18,T1,{topIn:.04}),M(0x4aa3df));
      ring(g,P,T1-.01,.035,0xffffff);ring(g,P,T0+H*.18,.03,0x3a86bd);
      patchAt(g,P,0,T0+H*.62,new THREE.CircleGeometry(.17,24),M(0xffd54a,{roughness:.5}));
      const st=new THREE.Shape();for(let i=0;i<10;i++){const r=i%2?.045:.1,a=i/10*Math.PI*2+Math.PI/2;i?st.lineTo(Math.cos(a)*r,Math.sin(a)*r):st.moveTo(Math.cos(a)*r,Math.sin(a)*r)}
      patchAt(g,P,0,T0+H*.62,new THREE.ShapeGeometry(st),M(0xe2552b),.085);break}
    case'stripe':{
      add(g,shell(P,T0+H*.15,T1,{ru:4,rv:1,topIn:.04}),M(0xffffff,{map:stripes('#1f3f7a','#fffaf0')}));
      ring(g,P,T1-.01,.035,0x1f3f7a);ring(g,P,T0+H*.15,.035,0x1f3f7a);break}
    case'sweater':{
      const t=knit('#e2574c','#c93f35');
      add(g,shell(P,T0+H*.1,T1,{gap:.07,ru:3,rv:1,topIn:.05}),M(0xffffff,{map:t,roughness:.95}));
      ring(g,P,T1,.085,0xd24a3f,{gap:.045,rough:.95});ring(g,P,T0+H*.1,.07,0xc93f35,{gap:.065,rough:.95});
      patchAt(g,P,0,T0+H*.6,new THREE.SphereGeometry(.13,16,12),M(0xfff2d0,{roughness:.9}),.085);break}
    case'overall':{
      const den=M(0x3d6fb5,{roughness:.8}),dk=M(0x2b5594,{roughness:.8});
      const ym=T0+H*.64;
      add(g,shell(P,T0+H*.08,ym,{gap:.05}),den);ring(g,P,ym,.03,0x2b5594);
      add(g,shell(P,ym,T0+H*.88,{gap:.052,arc:[-.95,.95],ny:20,nt:30}),den);   // bib
      for(const s of[-1,1]){
        const x=s*.3*P(ym).rx;const pts=[frontPt(P,x,T0+H*.88,.06),frontPt(P,x,T1-.01,.06),backPt(P,x,T1-.02,.06),backPt(P,x,ym,.06)];
        add(g,new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts),24,.045,8),dk);
        add(g,new THREE.SphereGeometry(.06,12,10),M(0xf5c518,{metalness:.5,roughness:.3}),[pts[0].x,pts[0].y-.02,pts[0].z+.03]);
      }
      patchAt(g,P,0,ym+H*.12,new THREE.PlaneGeometry(.34,.24),M(0xf2c14e,{roughness:.8}),.075);break}
    case'dress':{
      const t=dots('#ff8fb8','#ffffff');
      add(g,shell(P,T0-.05,T1,{flare:.55,flareFrom:.38,ru:5,rv:2.5,topIn:.04}),M(0xffffff,{map:t}));
      ring(g,P,T0+H*.55,.05,0xd9487f);ring(g,P,T1,.04,0xffffff);
      add(g,new THREE.TorusGeometry(1,.06,10,56),M(0xffffff),[0,T0-.05,(P(T0).zf+P(T0).zb)/2],[Math.PI/2,0,0],[(P(T0).rx+.05)*1.55,((P(T0).zf-P(T0).zb)/2+.05)*1.55,1]);
      const b=frontPt(P,0,T0+H*.55,.08);
      add(g,new THREE.ConeGeometry(.12,.26,14),M(0xd9487f),[b.x+.13,b.y,b.z],[0,0,Math.PI/2]);add(g,new THREE.ConeGeometry(.12,.26,14),M(0xd9487f),[b.x-.13,b.y,b.z],[0,0,-Math.PI/2]);
      add(g,new THREE.SphereGeometry(.055,12,10),M(0xb73468),[b.x,b.y,b.z+.01]);break}
    case'apron':{
      const w=M(0xfdfbf4,{roughness:.85});
      add(g,shell(P,T0+H*.02,T1-H*.06,{gap:.06,arc:[-1.1,1.1],ny:30,nt:40}),w);
      ring(g,P,T1+.0,.03,0xe9e2d0);ring(g,P,T0+H*.5,.03,0xe9e2d0,{gap:.05});
      patchAt(g,P,0,T0+H*.3,new THREE.PlaneGeometry(.42,.22),M(0xf1e7cf,{roughness:.85}),.085);
      patchAt(g,P,0,T0+H*.62,new THREE.CircleGeometry(.07,16),M(0xe2552b),.085);break}
    case'rain':{
      add(g,shell(P,T0-.02,T1,{gap:.07,flare:.12,topIn:.05}),M(0x2f8fd6,{roughness:.35}));
      ring(g,P,T1,.06,0x1f6fb0,{gap:.06});ring(g,P,T0-.02,.04,0x1f6fb0,{gap:.075,k:1.05});
      for(let i=0;i<4;i++)patchAt(g,P,0,T1-.16-i*(H*.2),new THREE.SphereGeometry(.05,12,10),M(0xffffff,{roughness:.3}),.085);
      patchAt(g,P,.3*P(T0+H*.3).rx,T0+H*.3,new THREE.PlaneGeometry(.3,.2),M(0x1f6fb0,{roughness:.4}),.085);break}
    case'cape':{
      const c=M(0xd7263d,{roughness:.55});
      add(g,shell(P,T0-.25,T1,{gap:.09,flare:.35,flareFrom:.2,arc:[Math.PI*.62,Math.PI*1.38],ny:36,nt:30}),c);
      ring(g,P,T1,.05,0xf5c518,{gap:.06,rough:.3});
      const b=frontPt(P,0,T1-.02,.09);add(g,new THREE.SphereGeometry(.09,14,12),M(0xf5c518,{metalness:.6,roughness:.25}),[b.x,b.y,b.z+.02]);break}
    case'swim':{
      const p=P(T0+H*.55),cz=(p.zf+p.zb)/2,rx=p.rx+.16,rz=(p.zf-p.zb)/2+.16,n=8;
      for(let i=0;i<n;i++)add(g,new THREE.TorusGeometry(1,.17,14,14,Math.PI*2/n*.98),M(i%2?0xffffff:0xe8413a,{roughness:.4}),[0,T0+H*.55,cz],[Math.PI/2,0,i/n*Math.PI*2],[rx,rz,1]);break}
    case'wings':{
      const w=M(0xffffff,{roughness:.5});
      for(const s of[-1,1]){const W=new THREE.Group();const y=T0+H*.62,b=backPt(P,0,y,.1);W.position.set(s*.5*P(y).rx,y,b.z+.1);W.rotation.set(0,s*1.0,s*-.3);g.add(W);
        const sc=P(y).rx;
        add(W,new THREE.SphereGeometry(1,20,14),w,[s*sc*.5,.15,0],[0,0,s*-.5],[sc*.8,sc*.26,.07]);
        add(W,new THREE.SphereGeometry(1,20,14),M(0xf3f7ff,{roughness:.5}),[s*sc*.42,-.25,0],[0,0,s*-.9],[sc*.65,sc*.2,.06]);
        add(W,new THREE.SphereGeometry(1,20,14),M(0xe8eefc,{roughness:.5}),[s*sc*.3,-.52,0],[0,0,s*-1.2],[sc*.5,sc*.16,.05])}
      break}
  }
  return g;
}
