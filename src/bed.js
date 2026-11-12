import * as THREE from 'three';

/* A cosy wooden bed seen from the side, against the back wall: headboard on the left, pillow, quilted mattress, a folded
   blanket at the foot. Whoever sleeps lies along it (head on the pillow). */

export const BED={cx:-.3,z:-1.72,top:.86,len:3.7,depth:1.55};

function canvasTex(w,h,draw,rep=[1,1]){const c=document.createElement('canvas');c.width=w;c.height=h;draw(c.getContext('2d'),w,h);
  const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;t.wrapS=t.wrapT=THREE.RepeatWrapping;t.repeat.set(...rep);t.anisotropy=4;return t}

/* rounded box: a rounded-rectangle extrusion (x = length, y = thickness, z = depth) */
function rbox(w,h,d,r,bevel=.04){
  const s=new THREE.Shape(),x=w/2-bevel,z=d/2-bevel,k=Math.min(r,x,z);
  s.moveTo(-x+k,-z);s.lineTo(x-k,-z);s.quadraticCurveTo(x,-z,x,-z+k);s.lineTo(x,z-k);s.quadraticCurveTo(x,z,x-k,z);s.lineTo(-x+k,z);s.quadraticCurveTo(-x,z,-x,z-k);s.lineTo(-x,-z+k);s.quadraticCurveTo(-x,-z,-x+k,-z);
  const g=new THREE.ExtrudeGeometry(s,{depth:h-bevel*2,bevelEnabled:true,bevelThickness:bevel,bevelSize:bevel,bevelSegments:4,curveSegments:10});
  g.rotateX(-Math.PI/2);g.translate(0,-(h-bevel*2)/2,0);return g;
}
const mat=(c,o={})=>new THREE.MeshStandardMaterial({color:c,roughness:.7,...o});

export function buildBed(){
  const g=new THREE.Group();g.position.set(BED.cx,0,BED.z);
  const wood=mat(0x9a6034,{roughness:.6}),woodD=mat(0x7d4a24,{roughness:.6}),L=BED.len,D=BED.depth;
  const add=(geo,m,p,rot)=>{const o=new THREE.Mesh(geo,m);o.position.set(...p);if(rot)o.rotation.set(...rot);o.castShadow=false;g.add(o);return o};
  // legs + frame
  for(const sx of[-1,1])for(const sz of[-1,1])add(new THREE.CylinderGeometry(.09,.07,.24,12),woodD,[sx*(L/2-.12),.12,sz*(D/2-.12)]);
  add(rbox(L,.3,D,.12,.03),wood,[0,.38,0]);
  // headboard (left) and footboard (right)
  add(rbox(.16,1.55,D+.06,.06,.03),wood,[-L/2+.02,1.0,0]);
  add(rbox(.16,.85,D+.06,.06,.03),wood,[L/2-.02,.72,0]);
  for(const sz of[-1,1]){add(new THREE.SphereGeometry(.1,14,12),woodD,[-L/2+.02,1.96,sz*(D/2-.1)]);add(new THREE.SphereGeometry(.09,14,12),woodD,[L/2-.02,1.2,sz*(D/2-.08)])}
  // mattress with a quilted pattern
  const quilt=canvasTex(256,256,(x,w,h)=>{x.fillStyle='#fff1dc';x.fillRect(0,0,w,h);x.strokeStyle='rgba(235,150,120,.55)';x.lineWidth=3;
    for(let i=0;i<=w;i+=64){x.beginPath();x.moveTo(i,0);x.lineTo(i,h);x.stroke();x.beginPath();x.moveTo(0,i);x.lineTo(w,i);x.stroke()}
    x.fillStyle='rgba(255,170,150,.5)';for(let i=32;i<w;i+=64)for(let j=32;j<h;j+=64){x.beginPath();x.arc(i,j,5,0,7);x.fill()}},[3,1.6]);
  add(rbox(L-.32,.34,D-.1,.16,.08),mat(0xffffff,{map:quilt,roughness:.9}),[.02,.69,0]);
  // pillow (head end) and a folded blanket (foot end)
  const pil=new THREE.Mesh(new THREE.SphereGeometry(1,32,20),mat(0xfff7ee,{roughness:.9}));pil.scale.set(.66,.2,.5);pil.position.set(-L/2+.95,BED.top+.12,0);g.add(pil);
  const pil2=new THREE.Mesh(new THREE.SphereGeometry(1,32,20),mat(0xffd6e0,{roughness:.9}));pil2.scale.set(.5,.17,.36);pil2.position.set(-L/2+.98,BED.top+.3,.1);pil2.rotation.z=.06;g.add(pil2);
  const bl=canvasTex(256,128,(x,w,h)=>{x.fillStyle='#7fc8d6';x.fillRect(0,0,w,h);x.fillStyle='#a5dce6';for(let i=0;i<w;i+=64)x.fillRect(i,0,32,h);x.fillStyle='rgba(255,255,255,.7)';for(let i=16;i<w;i+=64){x.beginPath();x.arc(i+16,h/2,8,0,7);x.fill()}},[2,1]);
  add(rbox(1.15,.2,D-.16,.1,.07),mat(0xffffff,{map:bl,roughness:.95}),[L/2-.95,BED.top+.07,0],[0,0,-.03]);
  g.userData.region='bed';
  return {group:g};
}
