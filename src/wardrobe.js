import * as THREE from 'three';
import {GARMENTS,buildGarment,finishGarment} from './garments.js';

/* 换装: little procedural accessories (no external assets). Every item is built in the head frame of the character,
   sized by a per-character "fit" table, and attached to that frame by the game. */

export const SLOTS=[{id:'body',name:'衣服'},{id:'hat',name:'帽子'},{id:'face',name:'眼镜'},{id:'neck',name:'领饰'}];
export const ITEMS=[
  ...GARMENTS,
  {id:'bow',   slot:'hat', name:'蝴蝶结', icon:'🎀', price:10},
  {id:'sprout',slot:'hat', name:'小嫩芽', icon:'🌱', price:8},
  {id:'cap',   slot:'hat', name:'鸭舌帽', icon:'🧢', price:12},
  {id:'party', slot:'hat', name:'派对帽', icon:'🎉', price:14},
  {id:'chef',  slot:'hat', name:'厨师帽', icon:'👨‍🍳', price:20},
  {id:'tophat',slot:'hat', name:'绅士帽', icon:'🎩', price:26},
  {id:'crown', slot:'hat', name:'小皇冠', icon:'👑', price:40},
  {id:'beanie',slot:'hat', name:'毛线帽', icon:'🧶', price:12},
  {id:'straw', slot:'hat', name:'草帽',   icon:'👒', price:14},
  {id:'wizard',slot:'hat', name:'巫师帽', icon:'🧙', price:22},
  {id:'halo',  slot:'hat', name:'天使环', icon:'😇', price:18},
  {id:'flower',slot:'hat', name:'小花花', icon:'🌸', price:9},
  {id:'nerd',  slot:'face',name:'方框镜', icon:'🤓', price:10},
  {id:'star',  slot:'face',name:'星星镜', icon:'🌟', price:20},
  {id:'round', slot:'face',name:'圆眼镜', icon:'👓', price:8},
  {id:'sun',   slot:'face',name:'墨镜',   icon:'🕶️', price:14},
  {id:'heart', slot:'face',name:'爱心镜', icon:'💗', price:18},
  {id:'bowtie',slot:'neck',name:'领结',   icon:'👔', price:6},
  {id:'bell',  slot:'neck',name:'小铃铛', icon:'🔔', price:10},
  {id:'medal', slot:'neck',name:'金奖牌', icon:'🥇', price:22},
  {id:'pearl', slot:'neck',name:'珍珠链', icon:'📿', price:18},
  {id:'bandana',slot:'neck',name:'三角巾',icon:'🧣', price:8},
  {id:'scarf', slot:'neck',name:'红围巾', icon:'🧣', price:16},
];
export const ITEM=Object.fromEntries(ITEMS.map(i=>[i.id,i]));

/* where things go on each character (coordinates of the head frame) */
export const FIT={
  frog:{hatY:3.0,hatZ:.03,hatR:.31,eyeY:2.85,eyeX:.2,eyeZ:.405,eyeR:.115,neckY:2.24,neckZ:.43,scarf:{y:2.3,rx:.62,rz:.5,tube:.085}},
  egg: {hatY:2.6,hatZ:.0, hatR:.34,eyeY:2.12,eyeX:.38,eyeZ:.8,  eyeR:.15, neckY:1.72,neckZ:1.07,scarf:{y:1.5,rx:1.17,rz:1.16,tube:.1}},
};

const M=(color,o={})=>new THREE.MeshStandardMaterial({color,roughness:.55,metalness:0,...o});
const add=(g,geo,mat,p=[0,0,0],r=[0,0,0],s=[1,1,1])=>{const m=new THREE.Mesh(geo,mat);m.position.set(...p);m.rotation.set(...r);m.scale.set(...s);m.castShadow=false;g.add(m);return m};
/* a frame lying on the character's surface at (x,y): position pushed out by `gap`, z axis along the surface normal.
   f.z(x,y) = surface depth of that character (set by the game), so items follow the real curvature instead of floating / sinking */
const Z=new THREE.Vector3(0,0,1);
function surfFrame(f,x,y,gap){const z=f.z,e=.02,z0=z(x,y),dzx=(z(x+e,y)-z(x-e,y))/(2*e),dzy=(z(x,y+e)-z(x,y-e))/(2*e);
  const n=new THREE.Vector3(-dzx,-dzy,1).normalize();return{p:new THREE.Vector3(x,y,z0).addScaledVector(n,gap),q:new THREE.Quaternion().setFromUnitVectors(Z,n)}}
const heart=()=>{const s=new THREE.Shape();s.moveTo(0,-.5);s.bezierCurveTo(-.15,-.35,-.55,-.1,-.55,.2);s.bezierCurveTo(-.55,.5,-.15,.55,0,.3);s.bezierCurveTo(.15,.55,.55,.5,.55,.2);s.bezierCurveTo(.55,-.1,.15,-.35,0,-.5);return s};

export function buildItem(id,ch){
  if(ITEM[id]&&ITEM[id].slot==='body')return finishGarment(buildGarment(id,FIT[ch]),FIT[ch]);
  const f=FIT[ch],g=new THREE.Group(),R=f.hatR;
  g.userData.item=id;
  switch(id){
    /* ---------- hats (sit on top of the head) ---------- */
    case'tophat':{g.position.set(f.hatX||0,f.hatY-.02,f.hatZ);const k=M(0x2b2b33,{roughness:.35});
      add(g,new THREE.CylinderGeometry(R*1.45,R*1.45,R*.12,32),k,[0,R*.06,0]);
      add(g,new THREE.CylinderGeometry(R*.88,R*.95,R*1.5,32),k,[0,R*.8,0]);
      add(g,new THREE.CylinderGeometry(R*.96,R*.96,R*.3,32),M(0xc43b3b),[0,R*.28,0]);break}
    case'crown':{g.position.set(f.hatX||0,f.hatY-.03,f.hatZ);const k=M(0xf5c518,{metalness:.5,roughness:.3});
      add(g,new THREE.CylinderGeometry(R*.95,R*.85,R*.5,24,1,true),k,[0,R*.25,0]).material.side=THREE.DoubleSide;
      for(let i=0;i<5;i++){const a=i/5*Math.PI*2;add(g,new THREE.ConeGeometry(R*.2,R*.55,8),k,[Math.sin(a)*R*.82,R*.7,Math.cos(a)*R*.82]);
        add(g,new THREE.SphereGeometry(R*.07,10,8),M(0xe23b5b),[Math.sin(a)*R*.82,R*1.0,Math.cos(a)*R*.82])}
      add(g,new THREE.SphereGeometry(R*.11,12,10),M(0x3b8be2),[0,R*.28,R*.93]);break}
    case'cap':{g.position.set(f.hatX||0,f.hatY-.04,f.hatZ);const k=M(0xd8402f);
      add(g,new THREE.SphereGeometry(R*1.02,28,16,0,Math.PI*2,0,Math.PI/2),k,[0,0,0],[0,0,0],[1,.95,1.05]);
      add(g,new THREE.CylinderGeometry(R*.62,R*.62,R*.07,24),k,[0,R*.03,R*.78],[0,0,0],[1.25,1,.85]);
      add(g,new THREE.SphereGeometry(R*.1,10,8),M(0xfff2d0),[0,R*.98,0]);break}
    case'party':{g.position.set(f.hatX||0,f.hatY-.03,f.hatZ);g.rotation.z=-.12;const k=M(0xff7ab8);
      add(g,new THREE.ConeGeometry(R*.72,R*1.7,24),k,[0,R*.85,0]);
      for(const y of[.4,.8,1.2])add(g,new THREE.TorusGeometry(R*.72*(1-y/1.7)+.01,R*.035,6,24),M(0xffe15a),[0,R*y,0],[Math.PI/2,0,0]);
      add(g,new THREE.SphereGeometry(R*.16,12,10),M(0xffffff),[0,R*1.75,0]);break}
    case'chef':{g.position.set(f.hatX||0,f.hatY-.03,f.hatZ);const k=M(0xfafafa,{roughness:.8});
      add(g,new THREE.CylinderGeometry(R*.85,R*.8,R*.55,28),k,[0,R*.27,0]);
      for(let i=0;i<6;i++){const a=i/6*Math.PI*2;add(g,new THREE.SphereGeometry(R*.45,14,12),k,[Math.sin(a)*R*.5,R*.78,Math.cos(a)*R*.5])}
      add(g,new THREE.SphereGeometry(R*.5,14,12),k,[0,R*.95,0]);break}
    case'sprout':{g.position.set(f.hatX||0,f.hatY-.03,f.hatZ);const k=M(0x5fbf4a);
      add(g,new THREE.CylinderGeometry(R*.04,R*.05,R*.5,8),k,[0,R*.25,0]);
      add(g,new THREE.SphereGeometry(R*.3,14,10),k,[R*.3,R*.55,0],[0,0,-.5],[1.5,.5,.8]);
      add(g,new THREE.SphereGeometry(R*.3,14,10),M(0x7ed957),[-R*.3,R*.62,0],[0,0,.5],[1.5,.5,.8]);break}
    case'bow':{const F=surfFrame(f,R*.62,f.hatY-.06,.04);g.position.copy(F.p);g.quaternion.copy(F.q);g.rotateZ(-.35);const k=M(0xff5f9e);
      add(g,new THREE.ConeGeometry(R*.34,R*.55,16),k,[R*.3,0,0],[0,0,Math.PI/2]);
      add(g,new THREE.ConeGeometry(R*.34,R*.55,16),k,[-R*.3,0,0],[0,0,-Math.PI/2]);
      add(g,new THREE.SphereGeometry(R*.14,12,10),M(0xff3d86),[0,0,0]);break}
    case'beanie':{g.position.set(f.hatX||0,f.hatY-.06,f.hatZ);const k=M(0x3b82c4,{roughness:.95});
      add(g,new THREE.SphereGeometry(R*1.1,28,16,0,Math.PI*2,0,Math.PI/2),k,[0,0,0],[0,0,0],[1,.95,1]);
      add(g,new THREE.TorusGeometry(R*1.07,R*.16,10,32),M(0x2b64a0,{roughness:.95}),[0,R*.02,0],[Math.PI/2,0,0]);
      add(g,new THREE.SphereGeometry(R*.24,14,12),M(0xffffff,{roughness:.95}),[0,R*1.0,0]);break}
    case'straw':{g.position.set(f.hatX||0,f.hatY-.05,f.hatZ);const k=M(0xe6c06a,{roughness:.9});
      add(g,new THREE.CylinderGeometry(R*2.0,R*2.0,R*.07,36),k,[0,0,0]);
      add(g,new THREE.SphereGeometry(R*.95,28,14,0,Math.PI*2,0,Math.PI/2),k,[0,0,0],[0,0,0],[1,.85,1]);
      add(g,new THREE.TorusGeometry(R*.96,R*.07,8,32),M(0xd7263d),[0,R*.08,0],[Math.PI/2,0,0]);break}
    case'wizard':{g.position.set(f.hatX||0,f.hatY-.03,f.hatZ);g.rotation.z=-.1;const k=M(0x5b3aa0,{roughness:.6});
      add(g,new THREE.CylinderGeometry(R*1.6,R*1.6,R*.07,32),k,[0,0,0]);
      add(g,new THREE.ConeGeometry(R*.95,R*2.2,28),k,[0,R*1.1,0]);
      for(const[y,a]of[[.5,.3],[.95,2.6],[1.4,4.5]])add(g,new THREE.SphereGeometry(R*.1,10,8),M(0xffe15a,{emissive:0x886600}),[Math.sin(a)*R*.62*(1-y/2.2),R*y,Math.cos(a)*R*.62*(1-y/2.2)]);break}
    case'halo':{g.position.set(f.hatX||0,f.hatY+R*.7,f.hatZ);add(g,new THREE.TorusGeometry(R*.85,R*.09,10,40),M(0xffe15a,{emissive:0xc99a00,roughness:.3}),[0,0,0],[Math.PI/2,0,0]);break}
    case'flower':{const F=surfFrame(f,R*.62,f.hatY-.06,.05);g.position.copy(F.p);g.quaternion.copy(F.q);g.rotateZ(-.3);
      for(let i=0;i<6;i++){const a=i/6*Math.PI*2;add(g,new THREE.SphereGeometry(R*.2,12,10),M(0xff8fc0),[Math.cos(a)*R*.27,Math.sin(a)*R*.27,0],[0,0,0],[1,1,.55])}
      add(g,new THREE.SphereGeometry(R*.15,12,10),M(0xffd54a),[0,0,R*.05]);break}
    /* ---------- glasses (in front of the eyes) ---------- */
    case'round':case'sun':case'heart':case'nerd':case'star':{const r=f.eyeR*1.35;
      const frame=M(id==='heart'?0xff4f92:id==='sun'?0x15151a:id==='star'?0xffc61a:id==='nerd'?0x7a4a22:0x23232b,{roughness:.3,metalness:.2});
      const inner=[];
      for(const sd of[-1,1]){const L=new THREE.Group(),F=surfFrame(f,sd*f.eyeX,f.eyeY,.03);L.position.copy(F.p);L.quaternion.copy(F.q);g.add(L);
        if(id==='heart'){const sh=heart(),geo=new THREE.ExtrudeGeometry(sh,{depth:.02,bevelEnabled:true,bevelThickness:.012,bevelSize:.012,bevelSegments:2});
          add(L,geo,frame,[0,.01,0],[0,0,0],[r*2.2,r*2.2,1]);
          add(L,new THREE.ShapeGeometry(sh),M(0xffc2dc,{transparent:true,opacity:.35}),[0,.01,.034],[0,0,0],[r*1.95,r*1.95,1])}
        else if(id==='nerd'){const w=r*1.05,h=r*.82,sh=new THREE.Shape();sh.moveTo(-w,-h);sh.lineTo(w,-h);sh.lineTo(w,h);sh.lineTo(-w,h);sh.closePath();const hole=new THREE.Path(),q=.82;hole.moveTo(-w*q,-h*q);hole.lineTo(-w*q,h*q);hole.lineTo(w*q,h*q);hole.lineTo(w*q,-h*q);hole.closePath();sh.holes.push(hole);
          add(L,new THREE.ExtrudeGeometry(sh,{depth:.025,bevelEnabled:false}),frame);add(L,new THREE.PlaneGeometry(w*1.7,h*1.7),M(0xbfe6ff,{transparent:true,opacity:.22,roughness:.1}),[0,0,.004])}
        else if(id==='star'){const sh=new THREE.Shape();for(let i=0;i<10;i++){const rr=i%2?r*.55:r*1.25,a=i/10*Math.PI*2+Math.PI/2;i?sh.lineTo(Math.cos(a)*rr,Math.sin(a)*rr):sh.moveTo(Math.cos(a)*rr,Math.sin(a)*rr)}sh.closePath();
          add(L,new THREE.ExtrudeGeometry(sh,{depth:.02,bevelEnabled:true,bevelThickness:.01,bevelSize:.01,bevelSegments:2}),frame);add(L,new THREE.ShapeGeometry(sh),M(0xfff0a0,{transparent:true,opacity:.4}),[0,0,.034],[0,0,0],[.82,.82,1])}
        else{add(L,new THREE.TorusGeometry(r,r*.13,10,32),frame);
          add(L,new THREE.CircleGeometry(r*.98,28),id==='sun'?M(0x0a0a10,{roughness:.1,metalness:.3}):M(0xbfe6ff,{transparent:true,opacity:.22,roughness:.1}),[0,0,.003])}
        add(L,new THREE.CylinderGeometry(r*.07,r*.07,.34,8),frame,[sd*r,0,-.17],[Math.PI/2,0,0]);
        inner.push(new THREE.Vector3(-sd*r*.92,0,.01).applyQuaternion(F.q).add(F.p))}
      // nose bridge joins the two inner rims, kept just outside the surface
      const [A,B2]=inner,mid=A.clone().add(B2).multiplyScalar(.5),len=A.distanceTo(B2),zc=f.z(0,mid.y)+.016;if(mid.z<zc)mid.z=zc;
      const br=add(g,new THREE.CylinderGeometry(r*.09,r*.09,len+.02,8),frame,[mid.x,mid.y,mid.z]);br.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),B2.clone().sub(A).normalize());break}
    /* ---------- neck ---------- */
    case'bowtie':{const F=surfFrame(f,0,f.neckY,.035);g.position.copy(F.p);g.quaternion.copy(F.q);const k=M(0xd7263d);
      add(g,new THREE.ConeGeometry(.12,.24,16),k,[.12,0,0],[0,0,Math.PI/2]);
      add(g,new THREE.ConeGeometry(.12,.24,16),k,[-.12,0,0],[0,0,-Math.PI/2]);
      add(g,new THREE.SphereGeometry(.06,12,10),M(0xa81b2d));break}
    case'bell':{const s=f.scarf;g.position.set(0,s.y,s.cz||0);
      const ring=add(g,new THREE.TorusGeometry(1,s.tube*.45,10,40),M(0xc43b3b),[0,0,0],[Math.PI/2,0,0],[s.rx,s.rz,1]);
      add(g,new THREE.SphereGeometry(.1,16,12),M(0xf5c518,{metalness:.6,roughness:.25}),[0,-.06,s.rz+.04]);
      add(g,new THREE.CylinderGeometry(.115,.115,.012,16),M(0xb8890a),[0,-.06,s.rz+.04],[Math.PI/2,0,0]);void ring;break}
    case'medal':{const s=f.scarf;g.position.set(0,s.y,s.cz||0);
      add(g,new THREE.TorusGeometry(1,s.tube*.35,8,48),M(0xd7263d),[0,0,0],[Math.PI/2,0,0],[s.rx,s.rz,1]);
      const F=surfFrame(f,0,f.neckY-.26,.07),m=new THREE.Group();m.position.copy(F.p).sub(g.position);m.quaternion.copy(F.q);g.add(m);
      add(m,new THREE.CylinderGeometry(.17,.17,.04,28),M(0xf5c518,{metalness:.6,roughness:.25}),[0,0,0],[Math.PI/2,0,0]);add(m,new THREE.CylinderGeometry(.11,.11,.05,24),M(0xe2a90f,{metalness:.6,roughness:.3}),[0,0,.005],[Math.PI/2,0,0]);
      add(m,new THREE.BoxGeometry(.1,.2,.03),M(0x2b64a0),[-.05,.2,-.02],[0,0,.4]);add(m,new THREE.BoxGeometry(.1,.2,.03),M(0xd7263d),[.05,.2,-.02],[0,0,-.4]);break}
    case'pearl':{const s=f.scarf;g.position.set(0,s.y,s.cz||0);const k=M(0xfaf6ee,{roughness:.15,metalness:.1});
      for(let i=0;i<26;i++){const a=i/26*Math.PI*2;add(g,new THREE.SphereGeometry(s.tube*.7,12,10),k,[Math.sin(a)*s.rx,0,Math.cos(a)*s.rz])}
      add(g,new THREE.SphereGeometry(s.tube*1.1,14,12),k,[0,-.05,s.rz+.03]);break}
    case'bandana':{const s=f.scarf;g.position.set(0,s.y,s.cz||0);const k=M(0xe0452a,{roughness:.85});
      add(g,new THREE.TorusGeometry(1,s.tube*.85,10,48),k,[0,0,0],[Math.PI/2,0,0],[s.rx,s.rz,1]);
      const sh=new THREE.Shape();sh.moveTo(-.3,0);sh.lineTo(.3,0);sh.lineTo(0,-.42);sh.closePath();
      add(g,new THREE.ShapeGeometry(sh),M(0xe0452a,{roughness:.85,side:THREE.DoubleSide}),[0,0,s.rz+.02],[-.18,0,0]);
      for(const[x,y]of[[-.1,-.1],[.1,-.1],[0,-.24]])add(g,new THREE.CircleGeometry(.035,10),M(0xffffff,{side:THREE.DoubleSide}),[x,y,s.rz+.03],[-.18,0,0]);break}
    case'scarf':{const s=f.scarf;g.position.set(0,s.y,s.cz||0);const k=M(0xe0453a,{roughness:.85});
      add(g,new THREE.TorusGeometry(1,s.tube,12,48),k,[0,0,0],[Math.PI/2,0,0],[s.rx,s.rz,1]);
      add(g,new THREE.BoxGeometry(.16,.5,.07),k,[s.rx*.35,-.25,s.rz+.02],[0,0,.12]);
      add(g,new THREE.BoxGeometry(.16,.4,.07),M(0xc93228,{roughness:.85}),[s.rx*.15,-.2,s.rz+.06],[0,0,-.1]);break}
  }
  return g;
}
