import * as THREE from 'three';

/* 奶鱼 / 奶猫 / 奶鼠 / 奶屎: smooth vinyl-toy characters built from baked ellipsoids, sharing one face painter.
   They expose the same interface as the 奶蛙 / 奶蛋 models (group, uniforms, colliders, regionOf, pose, paint, anchors, wearFrame, fit). */

const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
let Q=1; // geometry quality; the low-poly pass used for surface queries sets it < 1

/* ---------- little geometry helpers (everything is baked into group coordinates) ---------- */
function ell(sx,sy,sz,px,py,pz,rot=[0,0,0]){const seg=Math.max(10,Math.round(48*Q)),g=new THREE.SphereGeometry(1,seg,Math.round(seg*.75));g.scale(sx,sy,sz);if(rot[0])g.rotateX(rot[0]);if(rot[1])g.rotateY(rot[1]);if(rot[2])g.rotateZ(rot[2]);g.translate(px,py,pz);return g}
function lathe(points){const c=new THREE.SplineCurve(points.map(p=>new THREE.Vector2(p[0],p[1])));return new THREE.LatheGeometry(c.getPoints(Math.max(16,Math.round(60*Q))),Math.max(16,Math.round(64*Q)))}
const solid=(color,o={})=>new THREE.MeshPhysicalMaterial({color,roughness:.5,clearcoat:.25,clearcoatRoughness:.45,...o});

/* ---------- face decal: a thin grid hugging whatever surface is in front, painted from a canvas ---------- */
function makeFace(parent,surf,cfg,patch){
  const {x0,x1,y0,y1,sc}=cfg.region,CW=Math.round((x1-x0)*sc),CH=Math.round((y1-y0)*sc);
  const cvs=document.createElement('canvas');cvs.width=CW;cvs.height=CH;const cx=cvs.getContext('2d');
  const tex=new THREE.CanvasTexture(cvs);tex.colorSpace=THREE.SRGBColorSpace;tex.anisotropy=4;
  const NX=44,NY=36,pos=[],nor=[],uv=[],idx=[],ok=[],zs=[],W=NX+1;
  for(let j=0;j<=NY;j++)for(let i=0;i<=NX;i++)zs.push(surf(x0+(x1-x0)*i/NX,y0+(y1-y0)*j/NY));
  const zAt=(i,j,z0)=>{const v=zs[clamp(j,0,NY)*W+clamp(i,0,NX)];return v==null?z0:v};
  const dx=(x1-x0)/NX,dy=(y1-y0)/NY;
  for(let j=0;j<=NY;j++)for(let i=0;i<=NX;i++){const x=x0+dx*i,y=y0+dy*j,z=zs[j*W+i];
    if(z==null){pos.push(x,y,0);nor.push(0,0,1);uv.push(i/NX,j/NY);ok.push(0);continue}
    const dzx=(zAt(i+1,j,z)-zAt(i-1,j,z))/(2*dx),dzy=(zAt(i,j+1,z)-zAt(i,j-1,z))/(2*dy),l=Math.hypot(dzx,dzy,1),nx=-dzx/l,ny=-dzy/l,nz=1/l;
    pos.push(x+nx*.016,y+ny*.016,z+nz*.016);nor.push(nx,ny,nz);uv.push(i/NX,j/NY);ok.push(1)}
  for(let j=0;j<NY;j++)for(let i=0;i<NX;i++){const a=j*(NX+1)+i,b=a+1,c=a+NX+1,d=c+1;if(ok[a]&&ok[b]&&ok[c]&&ok[d])idx.push(a,b,d,a,d,c)}
  const dg=new THREE.BufferGeometry();dg.setAttribute('position',new THREE.Float32BufferAttribute(pos,3));dg.setAttribute('normal',new THREE.Float32BufferAttribute(nor,3));dg.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));dg.setIndex(idx);
  const dm=new THREE.MeshPhysicalMaterial({map:tex,transparent:true,depthWrite:false,polygonOffset:true,polygonOffsetFactor:-2,polygonOffsetUnits:-2,roughness:.5,clearcoat:.25,clearcoatRoughness:.45});dm.onBeforeCompile=patch;
  const decal=new THREE.Mesh(dg,dm);decal.frustumCulled=false;decal.renderOrder=2;parent.add(decal);

  const px=x=>(x-x0)*sc,py=y=>(y1-y)*sc,SKIN=cfg.skin,E=cfg.eye,M=cfg.mouth,k=E.r/.145;
  let lastKey='';
  function paint(P){
    const key=[P.u,P.l,P.sl,P.arc,P.mo,P.sm,P.bl,P.lx,P.ly,P.pup||1].map(v=>Math.round(v*60)).join(',');if(key===lastKey)return;lastKey=key;
    cx.clearRect(0,0,CW,CH);
    if(P.bl>.03)for(const s of[-1,1]){const x=px(s*E.x*1.55),y=py(M.y+.07),r=.13*sc,gr=cx.createRadialGradient(x,y,0,x,y,r);gr.addColorStop(0,'rgba(255,120,110,'+(.45*Math.min(1,P.bl))+')');gr.addColorStop(1,'rgba(255,120,110,0)');cx.fillStyle=gr;cx.fillRect(x-r,y-r,2*r,2*r)}
    for(const s of[-1,1]){const cxp=px(s*E.x),cyp=py(E.y),r=E.r*sc;
      const gr=cx.createRadialGradient(cxp,cyp,r*.2,cxp,cyp,r);gr.addColorStop(0,cfg.iris[0]);gr.addColorStop(.6,cfg.iris[1]);gr.addColorStop(.9,cfg.iris[2]);gr.addColorStop(1,cfg.iris[3]);
      cx.fillStyle=gr;cx.beginPath();cx.arc(cxp,cyp,r,0,Math.PI*2);cx.fill();
      const an=clamp(P.sl/.4,0,1);cx.strokeStyle='rgba(70,90,40,'+(.5+.35*an)+')';cx.lineWidth=1.8+2*an;cx.stroke();
      cx.fillStyle='#070707';cx.beginPath();cx.arc(cxp+P.lx*.04*sc*k,cyp-P.ly*.035*sc*k,r*.52*(P.pup||1),0,Math.PI*2);cx.fill();
      const ang=(s<0?1:-1)*P.sl*.7,U=clamp((P.u-.1)/.9,0,1);
      const lid=(from,to)=>{cx.save();cx.translate(cxp,cyp);cx.rotate(ang);cx.beginPath();cx.rect(-r*1.7,from,r*3.4,to-from);cx.clip();
        cx.fillStyle=SKIN;if('filter' in cx)cx.filter='blur(1.5px)';cx.beginPath();cx.arc(0,0,r*1.14,0,Math.PI*2);cx.fill();cx.restore()};
      if(U>.02){const yE=-r+2*r*U;lid(-r*1.7,yE);
        if(U>.1||P.sl>.1){cx.save();cx.translate(cxp,cyp);cx.rotate(ang);cx.strokeStyle='rgba(120,80,20,'+Math.max(.45*Math.min(1,U/.25),.9*an)+')';cx.lineWidth=2+2*an;cx.beginPath();const hw=Math.sqrt(Math.max(0,(r*1.12)**2-yE*yE));cx.moveTo(-hw,yE);cx.lineTo(hw,yE);cx.stroke();cx.restore()}}
      if(P.l>.03)lid(r-2*r*P.l,r*1.7);
      if(Math.abs(P.arc)>.35&&P.u>.92){cx.save();cx.strokeStyle='#4a3208';cx.lineWidth=.024*sc*k;cx.lineCap='round';cx.beginPath();
        if(P.arc>0)cx.arc(cxp,cyp+.045*sc*k,.1*sc*k,Math.PI*1.12,Math.PI*1.88);else cx.arc(cxp,cyp-.05*sc*k,.1*sc*k,Math.PI*.12,Math.PI*.88);cx.stroke();cx.restore()}}
    // mouth
    const mo=clamp(P.mo,0,1),y0=M.y,hw0=M.hw;
    if(mo>.05){const hw=(hw0*.9+hw0*.9*mo)*(1+.15*Math.max(0,P.sm)),cr=.035*P.sm,dep=.05+.2*mo;
      cx.fillStyle='#3c1510';cx.beginPath();cx.moveTo(px(-hw),py(y0+cr));cx.quadraticCurveTo(px(0),py(y0-dep*2),px(hw),py(y0+cr));cx.quadraticCurveTo(px(0),py(y0+.014),px(-hw),py(y0+cr));cx.closePath();cx.fill();
      if(mo>.5){cx.save();cx.clip();cx.fillStyle='#d8656c';cx.beginPath();cx.ellipse(px(0),py(y0-dep*1.05),hw*.55*sc,.05*sc,0,0,Math.PI*2);cx.fill();cx.restore()}
      cx.strokeStyle='rgba(110,70,25,.8)';cx.lineWidth=2;cx.lineCap='round';cx.beginPath();cx.moveTo(px(-hw),py(y0+cr));cx.quadraticCurveTo(px(0),py(y0+.014),px(hw),py(y0+cr));cx.stroke()}
    else{const sm=P.sm,fr=Math.max(0,-sm);cx.strokeStyle='#6b4515';cx.lineWidth=2.6+.6*fr;cx.lineCap='round';cx.beginPath();
      for(let i=0;i<=20;i++){const x=-hw0+2*hw0*i/20,t=(x/hw0)**2;const y=sm>=0?y0-sm*.03*(1-t)+.004:y0+fr*.04*(1-t);i?cx.lineTo(px(x),py(y)):cx.moveTo(px(x),py(y))}cx.stroke()}
    tex.needsUpdate=true;
  }
  paint({u:.08,l:0,sl:0,arc:0,mo:0,sm:.5,bl:0,lx:0,ly:0});
  return paint;
}

/* ---------- generic pet assembly ---------- */
const IRIS=['#eef3cc','#d6e4a8','#b4cc85','#7d9a58'];
function assemble(def){
  const uniforms={uDent:{value:new THREE.Vector4(0,1,1,0)},uInfl:{value:0},uBelly:{value:0}};
  const patch=sh=>{Object.assign(sh.uniforms,uniforms);
    sh.vertexShader=sh.vertexShader.replace('#include <common>','#include <common>\nuniform vec4 uDent;uniform float uInfl;uniform float uBelly;')
      .replace('#include <skinning_vertex>',`#include <skinning_vertex>
        vec3 dd=transformed-uDent.xyz;
        transformed-=objectNormal*(uDent.w*.3*exp(-dot(dd,dd)/.5));
        float by=transformed.y-${def.bellyY.toFixed(2)};
        transformed+=objectNormal*(uInfl+uBelly*exp(-by*by/.6)*smoothstep(-.2,.5,objectNormal.z));`)};
  const group=new THREE.Group(),pivot=new THREE.Group(),inner=new THREE.Group();
  pivot.position.y=def.cy;inner.position.y=-def.cy;group.add(pivot);pivot.add(inner);
  const skinMat=solid(def.color);skinMat.onBeforeCompile=patch;
  const parts={},skins=[],helpers={
    skin:(geo,name)=>{const m=new THREE.Mesh(geo,skinMat);m.frustumCulled=false;m.userData.skin=true;inner.add(m);skins.push(m);if(name)parts[name]=m;return m},
    skinAs:(geo,color,name)=>{const mat=solid(color);mat.onBeforeCompile=patch;const m=new THREE.Mesh(geo,mat);m.frustumCulled=false;m.userData.skin=true;inner.add(m);skins.push(m);if(name)parts[name]=m;return m},
    extra:(geo,color,name,pivotAt)=>{const m=new THREE.Mesh(geo,solid(color));m.frustumCulled=false;let o=m;if(pivotAt){o=new THREE.Group();o.position.set(...pivotAt);m.position.set(-pivotAt[0],-pivotAt[1],-pivotAt[2]);o.add(m)}inner.add(o);if(name)parts[name]=o;return o},
  };
  def.build(helpers);
  inner.updateMatrixWorld(true);group.updateMatrixWorld(true);
  // static proxies of the body meshes (never posed), so surface queries always use the rest pose even while the pet is animated
  Q=def.proxyQ||.3;const proxyGeos=[];def.build({skin:g=>{proxyGeos.push(g);return {}},skinAs:g=>{proxyGeos.push(g);return {}},extra:()=>({})});Q=1;
  const proxies=proxyGeos.map(g=>new THREE.Mesh(g,new THREE.MeshBasicMaterial()));
  const rc=new THREE.Raycaster(),o=new THREE.Vector3(),d=new THREE.Vector3(0,0,-1);
  const surf=(x,y)=>{o.set(x,y,12);rc.set(o,d);const h=rc.intersectObjects(proxies,false)[0];return h?h.point.z:null};
  const surfN=(x,y)=>surf(x,y)??0;
  // head top / widths for hats and scarves
  const down=new THREE.Raycaster(new THREE.Vector3(0,12,def.hatZ||0),new THREE.Vector3(0,-1,0)),topHit=down.intersectObjects(proxies,false)[0];
  const top=topHit?topHit.point.y:def.top,topZ=topHit?topHit.point.z:0;
  const side=(y)=>{const r=new THREE.Raycaster(new THREE.Vector3(6,y,topZ*0+0),new THREE.Vector3(-1,0,0)),h=r.intersectObjects(proxies,false)[0];return h?h.point.x:.5};
  const hatW=side(top-.22);
  // face decal
  const paint=makeFace(inner,surf,{region:def.region,skin:def.color,eye:def.eye,mouth:def.mouth,iris:def.iris||IRIS},patch);
  // hit colliders = the body meshes themselves
  const hm=new THREE.MeshBasicMaterial({visible:false}),colliders=skins.map(s=>{const m=new THREE.Mesh(s.geometry,hm);m.userData.region='body';inner.add(m);return m});
  const regionOf=l=>l.y>def.headThr?'head':'belly';
  const fit={hatY:top-.03,hatZ:topZ,hatR:clamp(hatW*.78,.24,.42),eyeY:def.eye.y,eyeX:def.eye.x,eyeR:def.eye.r,neckY:def.neckY,z:surfN,
    scarf:{y:def.neckY-.12,rx:side(def.neckY-.12)+.025,rz:(def.scarfRz||side(def.neckY-.12))+.025,cz:def.scarfCz||0,tube:.085},...(def.fit||{})};
  const pose=P=>{
    const t=performance.now()/1000,sit=P.sit||0;
    pivot.rotation.set(P.lean*.9+P.nod*.32+sit*.1,P.yaw*.75,P.roll*.9+Math.sin(t*1.5)*def.rock+(P.hip||0)*.1+(def.tilt||0),'YXZ');
    pivot.position.y=def.cy+(def.float||0)+Math.sin(t*1.6)*(def.bob||0);
    inner.scale.y=1-.05*sit;
    if(def.anim)def.anim(t,P,parts,{pivot,inner});
  };
  const A=def.anchors;
  const anchors={head:[inner,A.head],mouth:[inner,[0,def.mouth.y,A.mouthZ]],belly:[inner,A.belly],feet:[group,[0,.1,.4]],top:[inner,[0,top+.3,.1]]};
  return{group,uniforms,colliders,regionOf,pose,paint,anchors,wearFrame:inner,fit,hipY:def.cy,parts};
}

/* ============================ the four characters ============================ */

/* 奶鱼: a plump seal-like swimmer, floating a little tilted, with a cream belly, flippers and a tail fin */
function fish(){
  return assemble({color:'#f8d84e',cy:1.55,rock:.025,tilt:.3,float:.22,bob:.07,headThr:2.3,bellyY:1.6,top:3.2,neckY:2.2,
    eye:{x:.3,y:2.82,r:.14},mouth:{y:2.54,hw:.13},region:{x0:-.8,x1:.8,y0:2.15,y1:3.15,sc:380},
    anchors:{head:[0,2.9,.6],belly:[0,1.4,1],mouthZ:.9},
    build(h){
      h.skin(lathe([[0,0],[.45,.03],[.85,.3],[1.05,.8],[1.1,1.3],[1.0,1.8],[.82,2.15],[.7,2.4],[.76,2.65],[.78,2.85],[.62,3.05],[.3,3.2],[0,3.24]]),'body');
      h.skinAs(ell(.62,.95,.4,0,1.35,.78),'#fbe9b8','belly');
      h.extra(ell(.2,.62,.34,-1.12,1.4,.12,[0,0,.6]),'#f3cf3f','flipL',[-1.0,1.85,.12]);
      h.extra(ell(.2,.62,.34,1.12,1.4,.12,[0,0,-.6]),'#f3cf3f','flipR',[1.0,1.85,.12]);
      h.extra(ell(.5,.1,.3,-.34,.2,-.8,[0,.3,0]),'#f3cf3f','tailL');
      h.extra(ell(.5,.1,.3,.34,.2,-.8,[0,-.3,0]),'#f3cf3f','tailR');
    },
    anim(t,P,p){const f=Math.sin(t*2.2)*.14+(P.ha||0)*.2;if(p.flipL)p.flipL.rotation.z=f;if(p.flipR)p.flipR.rotation.z=-f}});
}

/* 奶猫: a chubby loaf of a cat with pointy ears and little toes */
function cat(){
  return assemble({color:'#f8d96a',cy:1.1,rock:.025,headThr:1.4,bellyY:.9,top:2.4,neckY:1.3,
    eye:{x:.37,y:1.8,r:.17},mouth:{y:1.52,hw:.15},region:{x0:-.85,x1:.85,y0:1.2,y1:2.2,sc:380},
    anchors:{head:[0,1.9,.8],belly:[0,.9,1.2],mouthZ:1.1},
    build(h){
      h.skin(lathe([[0,0],[.7,.02],[1.15,.2],[1.27,.6],[1.2,1.05],[1.08,1.45],[1.03,1.75],[.95,2.05],[.72,2.28],[.4,2.38],[0,2.4]]),'body');
      h.extra(new THREE.ConeGeometry(.34,.7,4).rotateY(Math.PI/4).translate(-.66,2.45,0),'#f6d24a','earL',[-.66,2.1,0]);
      h.extra(new THREE.ConeGeometry(.34,.7,4).rotateY(Math.PI/4).translate(.66,2.45,0),'#f6d24a','earR',[.66,2.1,0]);
      for(const s of[-1,1]){
        h.extra(ell(.34,.2,.36,s*.56,.17,1.06),'#f8d96a','paw'+s);
        for(const dx of[-.14,0,.14])h.extra(ell(.095,.08,.1,s*.56+dx,.15,1.38),'#f6cf3a');
      }
      h.extra(new THREE.TubeGeometry(new THREE.CatmullRomCurve3([new THREE.Vector3(.7,.4,-.95),new THREE.Vector3(1.2,.5,-1.0),new THREE.Vector3(1.45,1.0,-.8),new THREE.Vector3(1.38,1.5,-.6)]),30,.12,10),'#f8d96a','tail');
    },
    anim(t,P,p){if(p.tail)p.tail.rotation.y=Math.sin(t*1.8)*.18;const tw=Math.max(0,Math.sin(t*.9))>.97?.25:0;if(p.earL)p.earL.rotation.z=.25+tw;if(p.earR)p.earR.rotation.z=-.25-tw}});
}

/* 奶鼠: plump golden pear (head and body one piece), big round ears with orange insides, tiny arms, stubby feet and a thin curly tail.
   Behaviour taken from the reference videos: curious look-around, ear twitches, tail swish, and an occasional wave / peek. */
function mouse(){
  const ss=(a,b,x)=>{const t=clamp((x-a)/(b-a),0,1);return t*t*(3-2*t)};
  return assemble({color:'#f3cd44',cy:1.45,rock:.03,headThr:2.0,bellyY:1.3,top:3.0,neckY:1.95,
    eye:{x:.33,y:2.38,r:.165},mouth:{y:2.08,hw:.12},region:{x0:-.8,x1:.8,y0:1.8,y1:2.8,sc:380},
    anchors:{head:[0,2.5,.7],belly:[0,1.3,1.1],mouthZ:.9},
    build(h){
      h.skin(lathe([[0,0],[.78,.02],[1.1,.3],[1.2,.8],[1.17,1.3],[1.05,1.75],[.88,2.05],[.78,2.28],[.78,2.52],[.7,2.76],[.52,2.93],[.26,3.01],[0,3.04]]),'body');
      for(const s of[-1,1]){
        h.extra(new THREE.CylinderGeometry(.7,.7,.1,44).rotateX(Math.PI/2).translate(s*.92,2.78,-.1),'#f3cd44','ear'+s,[s*.92,2.78,-.1]);
        h.extra(new THREE.CylinderGeometry(.54,.54,.07,44).rotateX(Math.PI/2).translate(s*.92,2.78,-.04),'#f4a45a','earIn'+s,[s*.92,2.78,-.1]);
      }
      // little arms (hanging; the left one can wave) and stubby feet
      h.extra(ell(.17,.46,.2,1.1,1.45,.4,[0,0,-.22]),'#f3cd44','armR',[1.04,1.85,.4]);
      h.extra(ell(.17,.46,.2,-1.1,1.45,.4,[0,0,.22]),'#f3cd44','armL',[-1.04,1.85,.4]);
      for(const s of[-1,1])h.extra(ell(.36,.2,.46,s*.46,.17,.45),'#f3cd44');
      h.extra(new THREE.TubeGeometry(new THREE.CatmullRomCurve3([new THREE.Vector3(.35,.4,-.95),new THREE.Vector3(.9,.2,-1.25),new THREE.Vector3(1.5,.3,-1.0),new THREE.Vector3(1.75,.8,-.7),new THREE.Vector3(1.55,1.2,-.5)]),40,.045,8),'#f3cd44','tail',[.35,.4,-.95]);
    },
    anim(t,P,p,o){
      // look around now and then (curious head turns), small bob
      const look=Math.sin(t*.55)*Math.max(0,Math.sin(t*.19+1))*.5;o.pivot.rotation.y+=look;o.pivot.rotation.z+=look*.05;
      // wave every ~8 s
      const c=t%8,w=ss(0,.35,c)*(1-ss(2.2,2.6,c));
      if(p.armL)p.armL.rotation.z=w*(-2.25+Math.sin(t*9)*.3)+(1-w)*(Math.sin(t*1.3)*.03);
      if(p.armR)p.armR.rotation.z=Math.sin(t*1.3+1)*.03+(P.ha||0)*.2;
      if(p.tail){p.tail.rotation.y=Math.sin(t*1.7)*.22;p.tail.rotation.z=Math.sin(t*1.1)*.06}
      for(const s of[-1,1]){const tw=Math.max(0,Math.sin(t*.8+s*1.7))>.96?.28:0,r=s*(.35+Math.sin(t*1.1+s)*.04+tw),e=p['ear'+s],i=p['earIn'+s];if(e)e.rotation.y=r;if(i)i.rotation.y=r}}});
}

/* 奶屎: a soft-serve swirl — one smooth body with three fat layers and grooves between them, a curled tip, and the face on the top layer */
function poop(){
  return assemble({proxyQ:.6,color:'#f3b43c',cy:1.3,rock:.035,headThr:1.7,bellyY:.9,top:2.9,neckY:1.5,
    eye:{x:.26,y:2.08,r:.12},mouth:{y:1.86,hw:.11},region:{x0:-.62,x1:.62,y0:1.74,y1:2.32,sc:520},
    anchors:{head:[0,2.05,.7],belly:[0,.8,1.2],mouthZ:.8},fit:{hatX:-.28,hatY:2.94,hatR:.3,hatZ:0},
    build(h){
      h.skin(lathe([[0,0],[.9,0],[1.28,.18],[1.4,.5],[1.26,.82],[.95,.96],[.98,1.08],[1.06,1.3],[1.0,1.56],[.74,1.7],[.76,1.84],[.82,2.04],[.76,2.28],[.55,2.44],[.34,2.5],[0,2.58]]),'body');
      // curled tip: a chain of shrinking, overlapping ellipsoids bending to one side
      for(let i=0;i<=9;i++){const t=i/9,r=.34-.27*t,x=-.02-.36*t*t-.02*t,y=2.58+.62*t;h.skin(ell(r,r*1.05,r*.95,x,y,0,[0,0,.35*t]),'tip'+i)}
    },
    anim(t,P,p,o){const w=1+(P.ha||0)*3;o.inner.scale.x=1+Math.sin(t*2.6)*.014*w;o.inner.scale.z=1+Math.sin(t*2.6+.8)*.014*w}});
}

export function buildPet(kind){return({fish,cat,mouse,poop})[kind]()}
