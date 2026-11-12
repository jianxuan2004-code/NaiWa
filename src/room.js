import * as THREE from 'three';

/* Room decoration: striped wallpaper with little stars, mint wainscot with a rail, curtains and a plant on the window, a floating shelf with
   books and a cactus, fairy lights, a planked floor, a toy basket and a floor plant. setNight() makes the lights glow after dark. */

const tex=(w,h,draw,rep=[1,1])=>{const c=document.createElement('canvas');c.width=w;c.height=h;draw(c.getContext('2d'),w,h);
  const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;t.wrapS=t.wrapT=THREE.RepeatWrapping;t.repeat.set(...rep);t.anisotropy=8;return t};
const mat=(c,o={})=>new THREE.MeshStandardMaterial({color:c,roughness:.7,...o});
const rnd=(a,b)=>a+Math.random()*(b-a);

function star(g,x,y,r,col){g.fillStyle=col;g.beginPath();for(let i=0;i<10;i++){const rr=i%2?r*.45:r,a=i/10*Math.PI*2-Math.PI/2;i?g.lineTo(x+Math.cos(a)*rr,y+Math.sin(a)*rr):g.moveTo(x+Math.cos(a)*rr,y+Math.sin(a)*rr)}g.closePath();g.fill()}

export function buildDecor({WALLZ,wall,floor,skirt}){
  const group=new THREE.Group();
  const add=(geo,m,p,rot,sc)=>{const o=new THREE.Mesh(geo,m);o.position.set(...p);if(rot)o.rotation.set(...rot);if(sc)o.scale.set(...sc);group.add(o);return o};

  /* ---- wallpaper: soft peach stripes + tiny stars ---- */
  wall.material.map=tex(512,512,(g,w,h)=>{
    g.fillStyle='#ffd9a2';g.fillRect(0,0,w,h);
    for(let x=0;x<w;x+=128){g.fillStyle='rgba(255,240,212,.55)';g.fillRect(x,0,64,h)}
    for(let y=0;y<h;y+=128)for(let x=0;x<w;x+=128){star(g,x+32+(y/128%2)*64,y+64,9,'rgba(240,170,110,.55)');g.fillStyle='rgba(255,255,255,.65)';g.beginPath();g.arc(x+96,y+32,4,0,7);g.fill()}
    const gr=g.createLinearGradient(0,0,0,h);gr.addColorStop(0,'rgba(255,255,255,.0)');gr.addColorStop(1,'rgba(200,120,60,.07)');g.fillStyle=gr;g.fillRect(0,0,w,h)},[4,2.4]);
  wall.material.needsUpdate=true;

  /* ---- wainscot + rail ---- */
  const panel=tex(256,256,(g,w,h)=>{g.fillStyle='#bfe5d3';g.fillRect(0,0,w,h);for(let x=0;x<w;x+=64){g.fillStyle='rgba(255,255,255,.18)';g.fillRect(x+4,0,26,h);g.fillStyle='rgba(60,120,100,.22)';g.fillRect(x,0,3,h)}
    g.fillStyle='rgba(60,120,100,.12)';g.fillRect(0,h-6,w,6)},[14,1.4]);
  add(new THREE.PlaneGeometry(14,1.4),mat(0xffffff,{map:panel,roughness:.8}),[0,1.05,WALLZ+.025]);
  add(new THREE.BoxGeometry(14,.1,.1),mat(0xfff3dc,{roughness:.6}),[0,1.78,WALLZ+.06]);
  skirt.material.color.set(0xfff3dc);
  // little hooks with a hat + bag above the rail, left of the window curtain? (kept off the bed)

  /* ---- planked floor ---- */
  floor.material.map=tex(512,512,(g,w,h)=>{
    const cols=['#e2aa69','#d9a05f','#e8b377','#d4985a'];
    for(let i=0;i<8;i++){const y=i*64;g.fillStyle=cols[i%4];g.fillRect(0,y,w,64);
      for(let k=0;k<5;k++){g.strokeStyle='rgba(120,70,30,.18)';g.lineWidth=1.2;g.beginPath();const yy=y+8+k*11;g.moveTo(0,yy);g.bezierCurveTo(w*.3,yy+rnd(-3,3),w*.6,yy+rnd(-3,3),w,yy);g.stroke()}
      g.fillStyle='rgba(90,50,20,.32)';g.fillRect(0,y,w,3);const off=(i*173)%512;g.fillRect(off,y,3,64);g.fillRect((off+256)%512,y,3,64);
      g.fillStyle='rgba(255,240,210,.18)';g.fillRect(0,y+3,w,4)}},[2,3]);
  floor.material.roughness=.55;floor.material.needsUpdate=true;

  /* ---- window dressing: rod, curtains with tie-backs, sill, potted plant ---- */
  const WX=-1.15,WY=4.1;
  add(new THREE.CylinderGeometry(.04,.04,2.9,12),mat(0x8a5530),[WX,5.08,WALLZ+.2],[0,0,Math.PI/2]);
  for(const s of[-1,1])add(new THREE.SphereGeometry(.09,14,12),mat(0x8a5530),[WX+s*1.45,5.08,WALLZ+.2]);
  const curtain=(cx)=>{const geo=new THREE.PlaneGeometry(.85,2.75,28,1),P=geo.attributes.position;
    for(let i=0;i<P.count;i++){const x=P.getX(i),y=P.getY(i);P.setZ(i,Math.sin(x*14)*.05+(y<0?Math.sin(x*14)*.03:0))}geo.computeVertexNormals();
    const m=mat(0xf08a7a,{side:THREE.DoubleSide,roughness:.9,map:tex(64,64,(g,w,h)=>{g.fillStyle='#f4948a';g.fillRect(0,0,w,h);g.fillStyle='rgba(255,255,255,.5)';for(let y=8;y<h;y+=16)for(let x=(y/16%2)*8+4;x<w;x+=16){g.beginPath();g.arc(x,y,2.4,0,7);g.fill()}},[1.5,5])});
    return add(geo,m,[cx,3.72,WALLZ+.17])};
  curtain(WX-1.0);curtain(WX+1.0);
  add(new THREE.BoxGeometry(1.75,.07,.3),mat(0xfff3dc),[WX,3.17,WALLZ+.15]);
  {const potMat=mat(0xc9693f,{roughness:.8}),leaf=mat(0x5fb04a,{roughness:.6}),leaf2=mat(0x7cc65b,{roughness:.6}),px=WX-.5;
    add(new THREE.CylinderGeometry(.17,.12,.22,18),potMat,[px,3.32,WALLZ+.16]);
    for(let i=0;i<9;i++){const a=i/9*Math.PI*2,tilt=.5+.35*(i%2);const l=add(new THREE.SphereGeometry(1,12,10),i%2?leaf:leaf2,[px+Math.sin(a)*.1,3.62,WALLZ+.16+Math.cos(a)*.1],[Math.cos(a)*tilt,0,-Math.sin(a)*tilt],[.07,.28,.04]);l.position.y=3.55+.12*(i%3)}}

  /* ---- floating shelf (right wall) with books, a cactus and a little clock ---- */
  {const sx=1.62,sy=3.1,wood=mat(0x9a6034,{roughness:.6});
    add(new THREE.BoxGeometry(1.5,.07,.3),wood,[sx,sy,WALLZ+.17]);
    for(const s of[-1,1])add(new THREE.BoxGeometry(.05,.18,.22),mat(0x7d4a24),[sx+s*.6,sy-.12,WALLZ+.1]);
    const books=[[0xe2574c,.12,.5],[0x4a8fd4,.1,.44],[0xf5c518,.13,.54],[0x6cc070,.09,.4]];let bx=sx-.7;
    for(const[c,w,h]of books){add(new THREE.BoxGeometry(w,h,.2),mat(c,{roughness:.6}),[bx+w/2,sy+.035+h/2,WALLZ+.17]);bx+=w+.005}
    add(new THREE.BoxGeometry(.28,.07,.2),mat(0xffd0e0),[bx+.15,sy+.07,WALLZ+.17],[0,0,-.18]);
    add(new THREE.CylinderGeometry(.09,.07,.14,16),mat(0xfff3dc),[sx+.25,sy+.1,WALLZ+.17]);
    add(new THREE.CapsuleGeometry(.06,.16,6,12),mat(0x4aa04a,{roughness:.6}),[sx+.25,sy+.27,WALLZ+.17]);
    for(const s of[-1,1])add(new THREE.CapsuleGeometry(.035,.08,6,10),mat(0x4aa04a,{roughness:.6}),[sx+.25+s*.075,sy+.25,WALLZ+.17],[0,0,s*-.7]);
    const clock=add(new THREE.CylinderGeometry(.16,.16,.08,28),mat(0xffffff),[sx+.58,sy+.2,WALLZ+.2],[Math.PI/2,0,0]);
    add(new THREE.CylinderGeometry(.13,.13,.01,28),mat(0xfff8e8),[sx+.58,sy+.2,WALLZ+.245],[Math.PI/2,0,0]);
    add(new THREE.BoxGeometry(.012,.09,.01),mat(0x3a2210),[sx+.58,sy+.23,WALLZ+.255]);add(new THREE.BoxGeometry(.07,.012,.01),mat(0x3a2210),[sx+.61,sy+.2,WALLZ+.255]);void clock}

  /* ---- fairy lights along the top of the wall ---- */
  const bulbs=[],glowTex=tex(64,64,(g,w,h)=>{const r=g.createRadialGradient(32,32,0,32,32,32);r.addColorStop(0,'rgba(255,255,255,1)');r.addColorStop(.35,'rgba(255,255,255,.35)');r.addColorStop(1,'rgba(255,255,255,0)');g.fillStyle=r;g.fillRect(0,0,w,h)});
  {const pts=[];for(let i=0;i<=40;i++){const t=i/40;pts.push(new THREE.Vector3(.3+2.1*t,5.12-Math.sin(t*Math.PI)*.2,WALLZ+.1))}
    const curve=new THREE.CatmullRomCurve3(pts);add(new THREE.TubeGeometry(curve,60,.012,6,false),mat(0x6b4a2a),[0,0,0]);
    const cols=[0xffd45a,0xff8fb8,0x7fd0ff,0xffb066,0x9be37a];
    for(let i=0;i<8;i++){const p=curve.getPoint((i+.5)/8),c=cols[i%cols.length];
      const m=mat(c,{emissive:c,emissiveIntensity:.7,roughness:.3});const b=add(new THREE.SphereGeometry(.055,12,10),m,[p.x,p.y-.06,p.z]);
      const glow=new THREE.Sprite(new THREE.SpriteMaterial({map:glowTex,color:c,transparent:true,opacity:.18,depthWrite:false,blending:THREE.AdditiveBlending}));glow.position.set(p.x,p.y-.06,p.z+.03);glow.scale.setScalar(.5);group.add(glow);
      bulbs.push({m,glow,ph:Math.random()*6})}}

  /* ---- toy basket + floor plant (front corners, clear of the pet) ---- */
  {const wicker=tex(128,128,(g,w,h)=>{g.fillStyle='#d9a45f';g.fillRect(0,0,w,h);for(let y=0;y<h;y+=16){g.fillStyle=(y/16)%2?'#c48a45':'#e6b873';for(let x=((y/16)%2)*16;x<w;x+=32)g.fillRect(x,y+1,28,13)}},[3,1.2]);
    const bx=-1.62,bz=-.45;
    add(new THREE.CylinderGeometry(.34,.27,.34,28,1,true),mat(0xffffff,{map:wicker,side:THREE.DoubleSide}),[bx,.17,bz]);
    add(new THREE.CylinderGeometry(.27,.27,.02,28),mat(0xc48a45),[bx,.02,bz]);
    add(new THREE.TorusGeometry(.34,.02,8,28),mat(0xb67a38),[bx,.34,bz],[Math.PI/2,0,0]);
    add(new THREE.SphereGeometry(.13,18,14),mat(0xe8413a,{roughness:.4}),[bx-.08,.42,bz+.04]);
    add(new THREE.BoxGeometry(.2,.2,.2),mat(0x4aa3df,{roughness:.5}),[bx+.1,.42,bz-.02],[.3,.5,.1]);
    const st=new THREE.Shape();for(let i=0;i<10;i++){const r=i%2?.07:.17,a=i/10*Math.PI*2+Math.PI/2;i?st.lineTo(Math.cos(a)*r,Math.sin(a)*r):st.moveTo(Math.cos(a)*r,Math.sin(a)*r)}
    add(new THREE.ExtrudeGeometry(st,{depth:.05,bevelEnabled:true,bevelThickness:.02,bevelSize:.02,bevelSegments:2}),mat(0xffd54a,{roughness:.5}),[bx,.55,bz+.05],[0,.2,.2]);
    // floor plant
    const px=1.78,pz=-.35,pot=mat(0xf2d9b8,{roughness:.8}),g1=mat(0x4f9e48,{roughness:.6}),g2=mat(0x6cbb58,{roughness:.6});
    add(new THREE.CylinderGeometry(.24,.17,.36,22),pot,[px,.18,pz]);add(new THREE.TorusGeometry(.24,.025,8,22),pot,[px,.36,pz],[Math.PI/2,0,0]);
    for(let i=0;i<12;i++){const a=i/12*Math.PI*2+i*.4,tilt=.35+.45*((i*7)%5)/5,h=.55+.25*((i*3)%4)/4;
      const l=add(new THREE.SphereGeometry(1,12,10),i%2?g1:g2,[px+Math.sin(a)*.1,.36+h*.5,pz+Math.cos(a)*.1],[Math.cos(a)*tilt,0,-Math.sin(a)*tilt],[.09,h*.5,.03]);void l}}

  /* ---- a soft pool of window light on the wall (daytime only) ---- */
  const shaft=add(new THREE.PlaneGeometry(1.7,2.0),new THREE.MeshBasicMaterial({map:tex(64,128,(g,w,h)=>{const gr=g.createLinearGradient(0,0,0,h);gr.addColorStop(0,'rgba(255,245,200,.0)');gr.addColorStop(.3,'rgba(255,240,190,.35)');gr.addColorStop(1,'rgba(255,240,190,0)');g.fillStyle=gr;g.fillRect(0,0,w,h)}),transparent:true,depthWrite:false,blending:THREE.AdditiveBlending,opacity:.55}),[WX,2.15,WALLZ+.04]);

  function setNight(n,t=0){
    for(const b of bulbs){const tw=.85+.15*Math.sin(t*2+b.ph);b.m.emissiveIntensity=(.7+1.9*n)*tw;b.glow.material.opacity=(.16+.6*n)*tw}
    shaft.material.opacity=.55*(1-n);
  }
  return{group,setNight};
}
