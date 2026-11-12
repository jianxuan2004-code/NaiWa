import * as THREE from 'three';
import {buildFrog} from './model.js';
import {buildEgg} from './egg.js';
function init(){

/* ================= helpers ================= */
const $=s=>document.querySelector(s);
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v)),lerp=(a,b,t)=>a+(b-a)*t;
const ss=(a,b,x)=>{const t=clamp((x-a)/(b-a),0,1);return t*t*(3-2*t)};
const rnd=(a,b)=>a+Math.random()*(b-a),pick=a=>a[Math.floor(Math.random()*a.length)];
const now=()=>performance.now();

/* ================= renderer / scene ================= */
const stage=$('#stage');
const renderer=new THREE.WebGLRenderer({antialias:true});
renderer.setPixelRatio(Math.min(devicePixelRatio||1,2));
renderer.outputColorSpace=THREE.SRGBColorSpace;
renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.15;
stage.prepend(renderer.domElement);
const scene=new THREE.Scene();scene.background=new THREE.Color(0xffd9a0);
const camera=new THREE.PerspectiveCamera(34,9/16,0.1,60);
camera.position.set(0,2.5,11);const LOOK=new THREE.Vector3(0,1.45,0);camera.lookAt(LOOK);
let cw=540,ch=960;
function fit(){
  const s=Math.min(innerWidth/540,innerHeight/960);cw=Math.floor(540*s);ch=Math.floor(960*s);
  stage.style.width=cw+'px';stage.style.height=ch+'px';renderer.setSize(cw,ch);
  camera.aspect=cw/ch;camera.updateProjectionMatrix();
  document.documentElement.style.setProperty('--u',s+'px');
}
addEventListener('resize',fit);fit();

const hemi=new THREE.HemisphereLight(0xfff1d6,0xc89a5a,1.0);scene.add(hemi);
const key=new THREE.DirectionalLight(0xffffff,2.3);key.position.set(3,6,7);scene.add(key);
const fill=new THREE.DirectionalLight(0xffe0b0,.7);fill.position.set(-5,2,5);scene.add(fill);
const rim=new THREE.DirectionalLight(0xfff0c0,1.1);rim.position.set(0,4,-6);scene.add(rim);

/* ---- room ---- */
function canvasTex(w,h,draw){const c=document.createElement('canvas');c.width=w;c.height=h;draw(c.getContext('2d'),w,h);const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;t.anisotropy=4;return t}
const WALLZ=-2.6;
const wallTex=canvasTex(512,512,(g,w,h)=>{g.fillStyle='#ffe0a8';g.fillRect(0,0,w,h);g.fillStyle='rgba(255,255,255,.4)';for(let y=0;y<h;y+=64)for(let x=(y/64%2)*32;x<w;x+=64){g.beginPath();g.arc(x+16,y+16,6,0,7);g.fill()}});
wallTex.wrapS=wallTex.wrapT=THREE.RepeatWrapping;wallTex.repeat.set(2,1.4);
const wall=new THREE.Mesh(new THREE.PlaneGeometry(14,9),new THREE.MeshStandardMaterial({map:wallTex,roughness:1}));wall.position.set(0,4.2,WALLZ);scene.add(wall);
const floorTex=canvasTex(512,512,(g,w,h)=>{g.fillStyle='#dca15f';g.fillRect(0,0,w,h);for(let i=0;i<8;i++){g.fillStyle=i%2?'#d3964f':'#e2aa69';g.fillRect(0,i*64,w,64);g.fillStyle='rgba(90,50,20,.35)';g.fillRect(0,i*64,w,3);for(let k=0;k<3;k++)g.fillRect(((i*173+k*211)%512),i*64,3,64)}});
floorTex.wrapS=floorTex.wrapT=THREE.RepeatWrapping;floorTex.repeat.set(2,3);
const floor=new THREE.Mesh(new THREE.PlaneGeometry(14,16),new THREE.MeshStandardMaterial({map:floorTex,roughness:.8}));floor.rotation.x=-Math.PI/2;floor.position.set(0,0,WALLZ+8);scene.add(floor);
const skirt=new THREE.Mesh(new THREE.BoxGeometry(14,.35,.12),new THREE.MeshStandardMaterial({color:0xb9773e,roughness:.8}));skirt.position.set(0,.17,WALLZ+.06);scene.add(skirt);
const rugTex=canvasTex(256,256,(g,w,h)=>{g.fillStyle='#f08a8a';g.beginPath();g.arc(128,128,126,0,7);g.fill();g.fillStyle='#ffd0c8';g.beginPath();g.arc(128,128,100,0,7);g.fill();g.strokeStyle='#f08a8a';g.lineWidth=8;g.beginPath();g.arc(128,128,70,0,7);g.stroke()});
const rug=new THREE.Mesh(new THREE.CircleGeometry(2.1,48),new THREE.MeshStandardMaterial({map:rugTex,roughness:1}));rug.rotation.x=-Math.PI/2;rug.position.set(0,.012,.1);rug.scale.set(1,1,1);scene.add(rug);
// window
function skyTex(night){return canvasTex(256,300,(g,w,h)=>{const gr=g.createLinearGradient(0,0,0,h);if(night){gr.addColorStop(0,'#12163a');gr.addColorStop(1,'#2d3470')}else{gr.addColorStop(0,'#7fd0ff');gr.addColorStop(1,'#d4f0ff')}g.fillStyle=gr;g.fillRect(0,0,w,h);
  if(night){g.fillStyle='#fff7c2';g.beginPath();g.arc(170,80,34,0,7);g.fill();g.fillStyle='#2a2f66';g.beginPath();g.arc(184,70,32,0,7);g.fill();g.fillStyle='#fff';for(let i=0;i<14;i++)g.fillRect((i*83)%250,(i*47)%200+10,3,3)}
  else{g.fillStyle='#ffe45c';g.beginPath();g.arc(180,70,32,0,7);g.fill();g.fillStyle='#fff';for(const[x,y,r] of [[60,90,26],[90,80,32],[120,92,22]]){g.beginPath();g.arc(x,y,r,0,7);g.fill()}g.fillStyle='#7cc35a';g.beginPath();g.ellipse(60,300,170,90,0,0,7);g.fill()}
  g.fillStyle='#fff6e0';g.fillRect(w/2-5,0,10,h);g.fillRect(0,h/2-5,w,10)})}
const winFrame=new THREE.Mesh(new THREE.BoxGeometry(1.5,1.75,.1),new THREE.MeshStandardMaterial({color:0xfff6e0}));winFrame.position.set(-1.15,4.1,WALLZ+.05);scene.add(winFrame);
const winDay=new THREE.Mesh(new THREE.PlaneGeometry(1.3,1.55),new THREE.MeshBasicMaterial({map:skyTex(false),transparent:true}));winDay.position.set(-1.15,4.1,WALLZ+.11);scene.add(winDay);
const winNight=new THREE.Mesh(new THREE.PlaneGeometry(1.3,1.55),new THREE.MeshBasicMaterial({map:skyTex(true),transparent:true,opacity:0}));winNight.position.set(-1.15,4.1,WALLZ+.12);scene.add(winNight);
// picture frame (logo)
const frameG=new THREE.Group();frameG.position.set(1.1,4.2,WALLZ+.08);scene.add(frameG);
frameG.add(new THREE.Mesh(new THREE.BoxGeometry(1.3,1.3,.1),new THREE.MeshStandardMaterial({color:0x8a5530,roughness:.7})));
new THREE.TextureLoader().load(window.ASSETS.logo,t=>{t.colorSpace=THREE.SRGBColorSpace;const m=new THREE.Mesh(new THREE.PlaneGeometry(1.12,1.12),new THREE.MeshBasicMaterial({map:t}));m.position.z=.06;frameG.add(m)});
// lamp
const lamp=new THREE.Group();lamp.position.set(1.55,0,-1.3);scene.add(lamp);
const lampMats=[];
{const wood=new THREE.MeshStandardMaterial({color:0x8a5530,roughness:.7});
 const base=new THREE.Mesh(new THREE.CylinderGeometry(.28,.32,.1,20),wood);base.position.y=.05;lamp.add(base);
 const pole=new THREE.Mesh(new THREE.CylinderGeometry(.05,.05,1.7,10),wood);pole.position.y=.9;lamp.add(pole);
 const shadeM=new THREE.MeshStandardMaterial({color:0xffe37a,emissive:0xffcc55,emissiveIntensity:.9,roughness:.8,side:THREE.DoubleSide});lampMats.push(shadeM);
 const shade=new THREE.Mesh(new THREE.CylinderGeometry(.28,.5,.62,24,1,true),shadeM);shade.position.y=1.95;lamp.add(shade);
 lamp.traverse(o=>{if(o.isMesh)o.userData.region='lamp'})}
const lampLight=new THREE.PointLight(0xffd98a,6,9,1.6);lampLight.position.set(1.55,1.9,-1.1);scene.add(lampLight);
// blob shadow
const shTex=canvasTex(128,128,(g,w,h)=>{const r=g.createRadialGradient(64,64,0,64,64,64);r.addColorStop(0,'rgba(60,30,5,.55)');r.addColorStop(1,'rgba(60,30,5,0)');g.fillStyle=r;g.fillRect(0,0,w,h)});
const shadow=new THREE.Mesh(new THREE.PlaneGeometry(1,1),new THREE.MeshBasicMaterial({map:shTex,transparent:true,depthWrite:false}));shadow.rotation.x=-Math.PI/2;shadow.position.y=.02;scene.add(shadow);

/* ================= the 奶蛙 model (seamless skinned mesh, see frog.js) ================= */
const FRG=buildFrog();scene.add(FRG.group);
FRG.anchors={head:[FRG.face,[0,3.0,.4]],mouth:[FRG.face,[0,2.73,.5]],belly:[FRG.body,[0,1.4,.9]],feet:[FRG.group,[0,.1,.4]],top:[FRG.face,[0,3.35,.1]]};
const EGG=buildEgg();scene.add(EGG.group);EGG.group.visible=false;
// the character currently shown (everything below talks to FR / frog / UN, which setChar() re-points)
let CUR='frog',FR=FRG,frog=FRG.group,UN=FRG.uniforms,hitMeshes=FRG.colliders;

/* ================= animation params ================= */
// arms: [shoulderX (neg=forward), shoulderZ (+out), elbowX (neg=bend forward), elbowZ (neg=inward)], relative to the natural hanging pose
const ARM_REST=[-.1,.55,-.15,.05]; // hands resting in front of the belly
const X=(o)=>Object.assign({u:.08,l:0,sl:0,ew:1,mo:0,sm:.55,tg:0,te:0,bl:0,nod:0,lean:0,tilt:0,sit:0,puff:0,hip:0,shake:0,fing:.35,arc:0,ha:0,lx:0,ly:0,
   ar:ARM_REST,al:ARM_REST,pup:1,eyeY:0},o);
const CLUTCH=[-.8,-.25,-.4,-.5]; // hands clutching the belly
const EX={
  idle:X({}),
  happy:X({u:.15,l:.35,sm:1,mo:.35,te:.4,bl:.45,ar:[-.1,1.3,-.2,0],al:[-.1,1.3,-.2,0],fing:0,nod:-.12}),
  // 捧腹大笑: eyes squeezed into ^ ^, huge open mouth with teeth+tongue, head thrown back, hands on belly, body bouncing (ha)
  laugh:X({u:1,l:.45,arc:1,sm:1,mo:1,te:1,tg:.7,bl:.3,lean:-.1,nod:-.3,tilt:.04,ha:1,ar:CLUTCH,al:CLUTCH,fing:.7}),
  love:X({u:1,l:.4,arc:1,sm:1,mo:.4,tg:1,bl:.85,tilt:.3,nod:.05,ar:[-.9,-.3,-.5,-.6],al:[-.9,-.3,-.5,-.6],fing:.5}),
  angry:X({u:.55,sl:.35,sm:-.7,mo:0,bl:.3,puff:.05,lx:.7,ar:[.12,.18,-.1,0],al:[.12,.18,-.1,0],fing:1,nod:.1,lean:.06,shake:.35}),
  surprise:X({u:-.05,ew:1.18,pup:.7,sm:0,mo:.5,nod:-.2,lean:-.1,ar:[-.1,.9,-.3,0],al:[-.1,.9,-.3,0],fing:0}),
  confused:X({u:.2,sl:-.5,sm:-.4,mo:.1,tilt:.25,nod:-.05,lx:.8,ar:[-.9,-.1,-1.8,-.3],al:ARM_REST,fing:.2}),
  sad:X({u:.3,sl:-.6,sm:-.9,mo:.1,nod:.25,lean:.12,sit:1,ly:-.3,ar:CLUTCH,al:CLUTCH,pup:1.1,fing:.5}),
  sleep:X({u:1,l:.3,arc:-1,sm:.7,nod:.4,lean:.15,sit:1,ar:CLUTCH,al:CLUTCH}),
  eat:X({u:.15,sm:.8,mo:.1,bl:.35,lean:.1,ar:CLUTCH,al:CLUTCH}),
  yum:X({u:1,l:.5,arc:1,sm:1,mo:.4,tg:1,bl:.6,ar:[-.3,.1,-1.2,-.5],al:[-.3,.1,-1.2,-.5]}),
  talk:X({u:.1,sm:.7,bl:.2,ar:[-.2,.5,-.8,0],al:[-.2,.5,-.8,0]}),
  listen:X({ew:1.12,sm:.3,tilt:.2,nod:-.05,ar:ARM_REST}),
  play:X({u:.4,l:.3,sm:1,mo:.7,te:.5,bl:.5,ar:[-.1,1.4,-.1,0],al:[-.1,1.4,-.1,0],fing:0}),
};
const A={},KEYS=Object.keys(EX.idle).filter(k=>k!=='ar'&&k!=='al');
for(const k of KEYS)A[k]=EX.idle[k];A.ar=[...ARM_REST];A.al=[...ARM_REST];A.lx=0;A.ly=0;
const FAST={mo:24,tg:14,te:14,u:16,l:16,sl:14,ew:14,shake:8,arc:14,ha:6};
let exprName='idle',exprUntil=0,ov={mo:null};
function setExpr(n,ms=0){exprName=n;exprUntil=ms?now()+ms:0}
let S=null; // state (below)
function baseExpr(){if(!S)return'idle';if(S.sleeping)return'sleep';if(S.hunger<25)return'sad';if(S.joy<25)return'angry';return'idle'}
function curExpr(){return(exprUntil&&now()<exprUntil)?exprName:baseExpr()}

/* physics-ish springs */
const SP={sq:{v:0,d:0},nod:{v:0,d:0},yaw:{v:0,d:0},lean:{v:0,d:0},roll:{v:0,d:0},dent:{v:0,d:0}};
function springStep(s,target,k,c,dt){s.d+=((target-s.v)*k-s.d*c)*dt;s.v+=s.d*dt}
const J={y:0,vy:0};
function jump(v=7.5){if(J.y>.02)return;J.vy=v;SP.sq.v=-.45;SP.sq.d=0;sfx('jump')}
function kick(name,imp){SP[name].d+=imp}

/* dent (touch indentation) */
const dentPos=new THREE.Vector3(0,1.5,.8),_v=new THREE.Vector3();
let dentTarget=0;

/* look-at */
const look={x:0,y:0,wx:0,wy:0,wT:0};
let blinkT=rnd(2,4),blink=0;

/* ================= game state ================= */
const SAVE='naiwa3d-save-v1';
S={hunger:70,joy:70,energy:80,coins:20,xp:0,sleeping:false,last:Date.now()};
try{const t=JSON.parse(localStorage.getItem(SAVE));if(t){Object.assign(S,t);const m=Math.min((Date.now()-S.last)/60000,600);
  S.hunger=clamp(S.hunger-m*.12,15,100);S.joy=clamp(S.joy-m*.08,15,100);S.energy=clamp(S.energy+(S.sleeping?m*.5:-m*.05),10,100)}}catch(e){}
const save=()=>{S.last=Date.now();try{localStorage.setItem(SAVE,JSON.stringify(S))}catch(e){}};
setInterval(save,5000);addEventListener('pagehide',save);
const lv=()=>1+Math.floor(S.xp/60);
function gainXP(n){const a=lv();S.xp+=n;if(lv()>a){S.coins+=10;say('升级啦 Lv.'+lv()+'！奖励 10 金币',2600);fx('⭐',26,'head');sfx('level')}}

/* ================= audio ================= */
let AC=null,muted=false,master=null;
function audioInit(){if(AC){if(AC.state==='suspended')AC.resume();return}try{AC=new(window.AudioContext||window.webkitAudioContext)();master=AC.createGain();master.gain.value=.5;master.connect(AC.destination);loadClips()}catch(e){}}
function tone(f,d,type='sine',v=.3,slide=0,delay=0){if(!AC||muted)return;const t=AC.currentTime+delay,o=AC.createOscillator(),g=AC.createGain();o.type=type;o.frequency.setValueAtTime(f,t);if(slide)o.frequency.exponentialRampToValueAtTime(Math.max(30,f+slide),t+d);g.gain.setValueAtTime(v,t);g.gain.exponentialRampToValueAtTime(.001,t+d);o.connect(g);g.connect(master);o.start(t);o.stop(t+d+.02)}
function noise(d,v=.3){if(!AC||muted)return;const n=AC.sampleRate*d,b=AC.createBuffer(1,n,AC.sampleRate),a=b.getChannelData(0);for(let i=0;i<n;i++)a[i]=(Math.random()*2-1)*(1-i/n);const s=AC.createBufferSource(),g=AC.createGain(),f=AC.createBiquadFilter();f.type='lowpass';f.frequency.value=1800;s.buffer=b;g.gain.value=v;s.connect(f);f.connect(g);g.connect(master);s.start()}
function sfx(n){switch(n){
  case'tap':tone(520,.08,'triangle',.25,300);break;
  case'poke':tone(700,.1,'square',.12,-300);tone(300,.15,'sine',.25,300,.02);break;
  case'giggle':for(let i=0;i<5;i++)tone(520+i%2*160+i*20,.09,'triangle',.28,60,i*.09);break;
  case'love':tone(660,.15,'sine',.25,200);tone(880,.2,'sine',.25,200,.12);break;
  case'chomp':noise(.09,.5);tone(180,.08,'square',.12,-60);break;
  case'yum':tone(500,.12,'triangle',.3,300);tone(750,.12,'triangle',.3,300,.12);tone(1000,.2,'triangle',.3,200,.24);break;
  case'angry':tone(180,.25,'sawtooth',.25,-70);tone(150,.25,'sawtooth',.25,-60,.2);break;
  case'no':tone(220,.15,'square',.18,-60);tone(190,.2,'square',.18,-60,.16);break;
  case'coin':tone(988,.07,'square',.12);tone(1319,.25,'square',.12,0,.07);break;
  case'level':[523,659,784,1047].forEach((f,i)=>tone(f,.2,'triangle',.3,0,i*.1));break;
  case'yawn':tone(420,.7,'sine',.2,-250);break;
  case'jump':tone(300,.25,'triangle',.25,500);break;
  case'gulp':tone(200,.12,'sine',.35,-80);break;}}
/* ---- real voice clips: the frog's laugh (from the supplied videos) ---- */
const CL={buf:{},cur:null,flip:false,n:0};
function b64buf(u){const t=atob(u.split(',')[1]),a=new Uint8Array(t.length);for(let i=0;i<t.length;i++)a[i]=t.charCodeAt(i);return a.buffer}
function loadClips(){if(CL.loading||!AC)return;CL.loading=true;const S0=window.ASSETS.sfx||{};for(const k in S0)AC.decodeAudioData(b64buf(S0[k])).then(b=>{CL.buf[k]=b}).catch(()=>{})}
function stopClip(){if(CL.cur){const c=CL.cur;CL.cur=null;c.s.onended=null;try{c.s.stop()}catch(e){}}}
function playClip(k,rate=1,gain=1.5,chain=null){if(!AC||muted||!CL.buf[k])return 0;stopClip();
  const s=AC.createBufferSource(),g=AC.createGain(),an=AC.createAnalyser();an.fftSize=512;s.buffer=CL.buf[k];s.playbackRate.value=rate;g.gain.value=gain;s.connect(an);an.connect(g);g.connect(master);
  const c=CL.cur={k,s,an,lv:0,chain};s.onended=()=>{if(CL.cur===c){CL.cur=null;if(c.chain==='sig')signature()}};s.start();return CL.buf[k].duration/rate}
function giggle(){ // the real laugh; falls back to the synth giggle while the clips are still decoding
  if(CL.cur)return; // don't cut off a laugh or the catchphrase that is already playing
  CL.n++;CL.flip=!CL.flip;const d=playClip(CL.flip?'laugh1':'laugh2',rnd(.97,1.04),1.5,CL.n%3===0?'sig':null);
  if(!d){sfx('giggle');return}setExpr('laugh',d*1000+120)}
function catchphrase(extra='',keep=false){const d=playClip('catch',1,1.6);if(!d){say('嘎嘎提拉虾！'+extra,2200);return}
  if(!keep)setExpr('talk',d*1000+250);say('嘎嘎提拉虾！'+extra,d*1000+900);kick('nod',-4);kick('sq',4);jump(6);fx('✨',6,'head')}
let lastAndy=0;
// 奶蛋's only line: "安~迪！" (voice clip from the supplied video)
function andy(keep=false){lastAndy=now();const d=playClip('andy',1,1.6);
  bubble={t:'安~迪！',until:now()+(d?d*1000+900:1600)};bubbleEl.textContent='安~迪！';
  if(!d)return;if(!keep)setExpr('happy',d*1000+250);kick('sq',3);kick('roll',now()%2?4:-4);fx('✨',5,'head')}
function signature(extra='',keep=false){if(CUR==='egg')andy(keep);else catchphrase(extra,keep)}
$('#mute').onclick=()=>{audioInit();muted=!muted;if(muted)stopClip();$('#mute').textContent=muted?'🔇':'🔊'};

/* ================= DOM fx ================= */
const bubbleEl=$('#bubble'),toastEl=$('#toast'),trayEl=$('#tray');
let bubble=null,toastUntil=0;
function say(t,ms=2200){
  if(CUR==='egg'){const laugh=/哈哈|嘻嘻|咯咯|好痒/.test(t);t=laugh?'哈哈哈！':'安~迪！';if(!laugh&&!CL.cur&&now()-lastAndy>1400)andy(true)}
  bubble={t,until:now()+ms};bubbleEl.textContent=t}
function showToast(t,ms=2200){toastEl.textContent=t;toastEl.style.display='block';toastUntil=now()+ms}
const proj=new THREE.Vector3();
function toScreen(v){proj.copy(v).project(camera);return{x:(proj.x*.5+.5)*cw,y:(-proj.y*.5+.5)*ch}}
function anchor(name){
  const tb=FR.anchors[name]||[frog,[0,1.5,.5]];
  _v.set(...tb[1]);tb[0].localToWorld(_v);return toScreen(_v);
}
function fx(emoji,n,anc='head',spread=1){
  const a=typeof anc==='string'?anchor(anc):anc;
  for(let i=0;i<n;i++){const el=document.createElement('div');el.className='fx';el.textContent=emoji;stage.appendChild(el);
    const u=cw/540,dx=rnd(-120,120)*u*spread,dy=-rnd(80,230)*u*spread,s=rnd(.7,1.3);
    el.style.left=a.x+rnd(-20,20)*u+'px';el.style.top=a.y+'px';
    const an=el.animate([{transform:`translate(-50%,-50%) scale(${s*.4})`,opacity:0},{transform:`translate(calc(-50% + ${dx*.5}px),calc(-50% + ${dy*.6}px)) scale(${s})`,opacity:1,offset:.25},{transform:`translate(calc(-50% + ${dx}px),calc(-50% + ${dy}px)) scale(${s*.9})`,opacity:0}],{duration:rnd(900,1500),easing:'ease-out',delay:i*40});
    an.onfinish=()=>el.remove()}
}

/* ================= interaction ================= */
const ray=new THREE.Raycaster(),ndc=new THREE.Vector2();
function pointerNDC(e){const r=renderer.domElement.getBoundingClientRect();ndc.set((e.clientX-r.left)/r.width*2-1,-((e.clientY-r.top)/r.height)*2+1);return{px:e.clientX-r.left,py:e.clientY-r.top}}
function pick3(){
  ray.setFromCamera(ndc,camera);
  const hit=ray.intersectObjects([...hitMeshes,...lamp.children],false)[0];
  if(!hit)return null;
  let region=hit.object.userData.region;
  const local=frog.worldToLocal(hit.point.clone());
  if(FR.regionOf)region=FR.regionOf(local);else if(region==='belly'&&local.y>1.95)region='body';
  return{region,local,point:hit.point};
}
let touch=null,rubAcc=0,pokeCount=0,pokeT=0,lastSay=0,started=false;
const cv=renderer.domElement;
cv.addEventListener('pointerdown',e=>{
  e.preventDefault();audioInit();cv.setPointerCapture(e.pointerId);pointerNDC(e);
  const h=pick3();if(!h)return;
  if(h.region==='lamp'){sfx('tap');toggleSleep();return}
  touch={region:h.region,moved:0,t:now(),x:e.clientX,y:e.clientY};
  if(!S.sleeping&&h.region==='belly')pressDent(h.local,.55);
});
cv.addEventListener('pointermove',e=>{
  pointerNDC(e);look.wx=ndc.x;look.wy=ndc.y;look.wT=now()+3000;
  if(!touch)return;
  const d=Math.hypot(e.clientX-touch.x,e.clientY-touch.y);touch.moved+=d;touch.x=e.clientX;touch.y=e.clientY;
  const h=pick3();if(h&&h.region==='belly')pressDent(h.local,.5);
  if(touch.moved>12&&!S.sleeping){rubAcc+=d;if(rubAcc>110*(cw/540)){rubAcc=0;onRub(h?h.region:touch.region)}}
});
function endTouch(){
  if(!touch)return;dentTarget=0;
  if(touch.moved<12&&now()-touch.t<600)onTap(touch.region);
  touch=null;rubAcc=0;
}
cv.addEventListener('pointerup',endTouch);cv.addEventListener('pointercancel',endTouch);
function pressDent(local,a){dentPos.copy(local);dentTarget=a}

function reward(p){if(Math.random()<p*.25){S.coins++;sfx('coin');fx('🪙',1,'head',.5)}}
function wake(){if(!S.sleeping)return;S.sleeping=false;sfx('yawn');say('哈啊～睡饱啦！',2000);setExpr('happy',1500);jump(6)}
function toggleSleep(){if(S.sleeping){wake();return}S.sleeping=true;closeTray();sfx('yawn');say('晚安…zZz',2000)}
function onTap(region){
  if(S.sleeping){wake();return}
  const t=now();pokeCount=(t-pokeT<2500)?pokeCount+1:1;pokeT=t;
  SP.dent.d+=-2.5; // jelly wobble
  if(pokeCount>=6){pokeCount=0;S.joy=clamp(S.joy-6,0,100);setExpr('angry',2400);kick('roll',9);sfx('angry');say(pick(['别戳啦！！','再戳我就生气了！','哼！不理你了！']),2200);fx('💢',3,'head',.4);return}
  if(region==='head'){setExpr('surprise',900);kick('nod',-5);kick('sq',4);sfx('poke');say(pick(['嗯？','干嘛戳我～','咕？','？']),1200)}
  else if(region==='belly'){setExpr('laugh',1400);kick('sq',5);giggle();say(pick(['哈哈哈好痒！','嘻嘻嘻～','肚肚！']),1400);S.joy=clamp(S.joy+3,0,100);fx('❤️',2,'belly');reward(.25)}
  else if(region==='arm'){setExpr('happy',1000);kick('roll',-6);say('嘿嘿～',900)}
  else{jump(7);setExpr('happy',900);say('哎呀！',900)}
}
function onRub(region){
  if(S.sleeping)return;S.joy=clamp(S.joy+2.5,0,100);reward(.5);gainXP(.5);
  const t=now();
  if(region==='belly'){if(!CL.cur)setExpr('laugh',900);giggle();if(t-lastSay>1500){say(pick(['哈哈哈哈！','好痒好痒～','咯咯咯！']),1200);lastSay=t}}
  else{setExpr('love',1000);sfx('love');if(t-lastSay>1500){say(pick(['舒服～','最喜欢你了！','再摸摸～','咕呱～']),1200);lastSay=t}}
  fx('❤️',2,region==='belly'?'belly':'head');
}

/* ---- buttons / tray ---- */
const FOODS=[{e:'🍎',n:'苹果',c:0,v:12},{e:'🥕',n:'胡萝卜',c:2,v:16},{e:'🍔',n:'汉堡',c:4,v:28},{e:'🍰',n:'蛋糕',c:6,v:36},{e:'🍗',n:'鸡腿',c:8,v:48}];
trayEl.innerHTML=FOODS.map((f,i)=>`<div class="food" data-i="${i}"><b>${f.e}</b>${f.n}<small>${f.c?'🪙'+f.c:'免费'}</small></div>`).join('');
function closeTray(){trayEl.classList.remove('show')}
document.querySelectorAll('.btn').forEach(b=>b.addEventListener('pointerdown',e=>{e.preventDefault();audioInit();sfx('tap');
  const id=b.dataset.b;
  if(id==='feed'){if(S.sleeping)wake();trayEl.classList.toggle('show');return}
  closeTray();if(id==='sleep')toggleSleep();else if(id==='play')play();else if(id==='talk')startTalk();
}));
let playT=0;
function play(){
  if(S.sleeping)wake();if(S.energy<15){sfx('no');say('好累…想睡觉',1800);return}
  playT=3.4;setExpr('play',3400);S.energy=clamp(S.energy-10,0,100);S.joy=clamp(S.joy+18,0,100);gainXP(4);fx('⭐',16,'head');jump(8.5);if(CL.buf[CUR==='egg'?'andy':'catch'])signature('一起玩！',true);else{say('一起玩！耶！',2400);sfx('level')}
}
/* food dragging */
const ghost=$('#ghost');let drag=null,eatSeq=null;
trayEl.addEventListener('pointerdown',e=>{
  const el=e.target.closest('.food');if(!el)return;e.preventDefault();audioInit();
  const f=FOODS[+el.dataset.i];if(S.coins<f.c){sfx('no');showToast('金币不够啦～多摸摸奶蛙可以赚金币');return}
  drag={f,sx:e.clientX,sy:e.clientY,x:e.clientX,y:e.clientY};ghost.textContent=f.e;ghost.style.display='block';moveGhost();
});
addEventListener('pointermove',e=>{if(!drag)return;drag.x=e.clientX;drag.y=e.clientY;moveGhost();
  const r=cv.getBoundingClientRect();look.wx=(e.clientX-r.left)/r.width*2-1;look.wy=-((e.clientY-r.top)/r.height)*2+1;look.wT=now()+2000});
function moveGhost(){ghost.style.left=drag.x+'px';ghost.style.top=drag.y+'px'}
addEventListener('pointerup',e=>{
  if(!drag)return;const d=drag;drag=null;ghost.style.display='none';ov.mo=null;
  const r=cv.getBoundingClientRect(),px=d.x-r.left,py=d.y-r.top,m=anchor('mouth'),near=Math.hypot(px-m.x,py-m.y)<170*(cw/540),tap=Math.hypot(d.x-d.sx,d.y-d.sy)<14;
  pointerNDC({clientX:d.x,clientY:d.y});const h=pick3();
  if(near||tap||(h&&h.region!=='lamp'))feed(d.f,{x:r.left+(tap?m.x:px),y:r.top+(tap?m.y:py)});
});
function feed(f,from){
  if(eatSeq||S.sleeping)return;
  if(S.hunger>=96){sfx('no');say('吃不下啦～',1500);kick('roll',8);return}
  S.coins-=f.c;eatSeq={f,t:0,n:0,from,flew:false};say('啊～呜！',900);closeTray();
}

/* ---- talk (record + repeat) ---- */
let mic={},talk={state:'idle'};
async function startTalk(){
  if(talk.state!=='idle')return;if(S.sleeping)wake();
  if(CUR==='egg'){andy();return}
  try{mic.stream=mic.stream||await navigator.mediaDevices.getUserMedia({audio:true})}catch(e){showToast('需要麦克风权限才能复读哦',2600);return}
  audioInit();if(!AC)return;
  const src=AC.createMediaStreamSource(mic.stream),an=AC.createAnalyser();an.fftSize=1024;src.connect(an);
  const chunks=[],mr=new MediaRecorder(mic.stream);mr.ondataavailable=ev=>chunks.push(ev.data);
  talk={state:'listen',an,mr,t0:now(),lastVoice:0,heard:false};
  mr.onstop=async()=>{src.disconnect();
    if(!talk.heard){talk={state:'idle'};setExpr('confused',1200);say('咦？没听到～',1500);return}
    try{const buf=await AC.decodeAudioData(await new Blob(chunks).arrayBuffer());
      const s=AC.createBufferSource(),g=AC.createGain(),an2=AC.createAnalyser();an2.fftSize=512;s.buffer=buf;s.playbackRate.value=1.7;g.gain.value=muted?0:1.6;s.connect(an2);an2.connect(g);g.connect(AC.destination);
      talk={state:'speak',an:an2};setExpr('talk',buf.duration/1.7*1000+400);
      s.onended=()=>{talk={state:'idle'};ov.mo=null;setExpr('laugh',1000);giggle();S.joy=clamp(S.joy+8,0,100);gainXP(3);reward(1)};s.start()
    }catch(e){talk={state:'idle'};showToast('这个浏览器无法播放录音',2200)}};
  mr.start();setExpr('listen',7000);say('👂 说点什么吧，我来学…',4000);
}
function level(an){const d=new Uint8Array(an.fftSize);an.getByteTimeDomainData(d);let m=0;for(const v of d)m=Math.max(m,Math.abs(v-128));return m}
function talkUpdate(){
  if(talk.state==='listen'){const m=level(talk.an),t=now();if(m>14){talk.heard=true;talk.lastVoice=t}
    const el=t-talk.t0;if((talk.heard&&t-talk.lastVoice>900)||el>6000||(!talk.heard&&el>4500)){talk.state='stop';exprUntil=0;talk.mr.stop()}}
  else if(talk.state==='speak'){ov.mo=clamp(level(talk.an)/45,0,1)}
  if(CL.cur){const t=now(),dt=Math.min(.1,(t-(CL.t||t))/1000);CL.t=t;const c=CL.cur,l=clamp(level(c.an)/80,0,1);const sp=c.k==='catch'||c.k==='andy';c.lv+=(l-c.lv)*(1-Math.exp(-(l>c.lv?(sp?22:5):(sp?12:2.2))*dt)); // laugh: slow envelope so the mouth doesn't flutter; speech: faster so syllables read
    ov.mo=sp?clamp(.08+c.lv*1.15,0,1):clamp(.25+c.lv*.95,0,1)}else CL.t=0
}

/* ================= character switch (奶蛙 / 奶蛋) ================= */
const SAVE_CH='naiwa3d-char';
function setChar(name,quiet){
  if(name===CUR&&!quiet)return;
  const next=name==='egg'?EGG:FRG;
  FRG.group.visible=next===FRG;EGG.group.visible=next===EGG;
  for(const g of[FRG.group,EGG.group]){g.position.set(0,0,0);g.rotation.set(0,0,0);g.scale.set(1,1,1)}
  CUR=name;FR=next;frog=next.group;UN=next.uniforms;hitMeshes=next.colliders;
  try{localStorage.setItem(SAVE_CH,name)}catch(e){}
  document.querySelectorAll('#chars .ch').forEach(b=>b.classList.toggle('on',b.dataset.c===name));
  stopClip();touch=null;dentTarget=0;
  if(!quiet){setExpr('happy',1200);jump(7.5);fx('✨',8,'head');
    if(name==='egg'){say('安~迪！',2000)}else{say('我是奶蛙！',2000)}}
}
document.querySelectorAll('#chars .ch').forEach(b=>b.addEventListener('pointerdown',e=>{e.preventDefault();audioInit();sfx('tap');setChar(b.dataset.c)}));
try{const c=localStorage.getItem(SAVE_CH);if(c==='egg')setChar('egg',true)}catch(e){}

/* ================= start overlay ================= */
$('#start').addEventListener('pointerdown',e=>{e.preventDefault();audioInit();$('#start').style.display='none';started=true;sfx('level');say(CUR==='egg'?'安~迪！':'哇～你来啦！我是奶蛙！',2600);setExpr('happy',1600);jump(8)});

/* ================= main update ================= */
let T=0,idleT=rnd(5,9),zT=0,night=S.sleeping?1:0,eyeClose=0;
const sm=(cur,tgt,sp,dt)=>cur+(tgt-cur)*(1-Math.exp(-sp*dt));

function update(dt){
  T+=dt;
  // stats
  if(started){const k=S.sleeping?.25:1;S.hunger=clamp(S.hunger-dt*.05*k,0,100);S.joy=clamp(S.joy-dt*.035*k,0,100);S.energy=clamp(S.energy+(S.sleeping?dt*2.2:-dt*.03),0,100);
    if(S.sleeping&&S.energy>=100){S.sleeping=false;sfx('yawn');say('睡饱啦！精神百倍！',2200);setExpr('happy',1500);jump(7)}}
  // idle behaviours
  if(started&&!S.sleeping&&!eatSeq&&talk.state==='idle'&&playT<=0&&!touch&&!drag){
    idleT-=dt;if(idleT<=0){idleT=rnd(5,10);const m=baseExpr();
      if(m==='sad')say(pick(['肚肚饿了…🍖','咕噜噜～想吃东西','给我点吃的嘛']),2400);
      else if(m==='angry')say(pick(['哼！没人陪我玩','不开心！摸摸我','哼～']),2400);
      else{const r=Math.random();
        if(r<.3){jump(8);if(CL.buf[CUR==='egg'?'andy':'catch']&&Math.random()<.5)signature();else{setExpr('happy',900);say(pick(['耶！','奶～','我是奶蛙！']),1500)}}
        else if(r<.55)say(pick(['摸摸我嘛～','今天也要开心！','咕呱～','戳戳我的肚子试试？']),2400);
        else if(r<.8){kick('roll',5);setExpr('confused',1400);say('嗯？',1000)}
        else{setExpr('yum',1200);say('😋',1000)}}}}
  if(playT>0){playT-=dt;if(J.y<=.02&&Math.random()<.04)jump(rnd(7,9.5))}
  talkUpdate();

  // expression targets
  const E=EX[curExpr()];
  for(const k of KEYS)A[k]=sm(A[k],E[k],FAST[k]||9,dt);
  for(let i=0;i<4;i++){A.ar[i]=sm(A.ar[i],E.ar[i],8,dt);A.al[i]=sm(A.al[i],E.al[i],8,dt)}
  if(ov.mo!=null)A.mo=ov.mo;

  // eat sequence
  if(eatSeq){const q=eatSeq;q.t+=dt;
    if(q.t<.5){A.mo=sm(A.mo,.95,20,dt);ov.mo=.95;look.wx=0;look.wy=.1;look.wT=now()+500}
    if(q.t>.15&&!q.flew){q.flew=true;const m=anchor('mouth'),r=cv.getBoundingClientRect(),el=document.createElement('div');el.className='fx';el.textContent=q.f.e;el.style.fontSize='calc(var(--u)*70)';
      el.style.left=(q.from.x-r.left)+'px';el.style.top=(q.from.y-r.top)+'px';stage.appendChild(el);
      const an=el.animate([{left:el.style.left,top:el.style.top,transform:'translate(-50%,-50%) scale(1)',opacity:1},{left:m.x+'px',top:m.y+'px',transform:'translate(-50%,-50%) scale(.2)',opacity:.6}],{duration:330,easing:'ease-in',fill:'forwards'});an.onfinish=()=>el.remove()}
    if(q.t>=.5&&q.t<1.7){setExpr('eat',300);ov.mo=.08+.2*Math.abs(Math.sin(q.t*13));const n=Math.floor((q.t-.5)/.26);if(n>q.n){q.n=n;SP.sq.v=.14;sfx('chomp');fx('🟡',2,'mouth',.3)}}
    if(q.t>=1.7&&q.t<1.85){ov.mo=0;if(q.n<99){q.n=99;sfx('gulp');SP.sq.d-=3;kick('nod',-3)}}
    if(q.t>=1.85){ov.mo=null;S.hunger=clamp(S.hunger+q.f.v,0,100);S.joy=clamp(S.joy+q.f.v/6,0,100);gainXP(3);sfx('yum');setExpr('yum',1800);say('好好吃！'+q.f.e,1800);fx('❤️',5,'head');jump(6.5);eatSeq=null}}
  else if(drag){const r=cv.getBoundingClientRect(),m=anchor('mouth'),dd=Math.hypot(drag.x-r.left-m.x,drag.y-r.top-m.y);ov.mo=dd<260*(cw/540)?clamp(1.1-dd/(260*(cw/540)),.15,.9):null}
  else if(talk.state!=='speak'&&ov.mo!=null)ov.mo=null;

  // look at pointer / wander
  const lt=now()<look.wT;const tx=lt?look.wx:Math.sin(T*.4)*.35,ty=lt?look.wy:.1+Math.sin(T*.31)*.2;
  const sl=S.sleeping?0:1;
  look.x=sm(look.x,tx*sl,6,dt);look.y=sm(look.y,ty*sl,6,dt);

  // blink
  blinkT-=dt;if(blinkT<=0){blink=.14;blinkT=rnd(2,5)}
  if(blink>0)blink-=dt;const bl=blink>0?Math.sin((1-blink/.14)*Math.PI):0;

  // springs
  springStep(SP.sq,0,200,11,dt);springStep(SP.nod,0,170,10,dt);springStep(SP.yaw,0,170,10,dt);springStep(SP.lean,0,170,10,dt);springStep(SP.roll,0,150,8,dt);
  springStep(SP.dent,dentTarget,260,9,dt);
  // jump
  if(J.y>0||J.vy>0){J.vy-=22*dt;J.y+=J.vy*dt;if(J.y<=0){J.y=0;if(J.vy<-3){SP.sq.v=.34;SP.sq.d=0;fx('💨',3,'feet',.3)}J.vy=0}}
  const stretchJ=clamp(J.vy*.025,-.12,.18);

  // compose pose
  const breath=Math.sin(T*(S.sleeping?1.1:2.1)),shake=Math.sin(T*30)*A.shake*.05;
  const ph=T*14,pulse=(CL.cur&&CL.cur.k.startsWith('laugh'))?clamp(CL.cur.lv*1.6,0,1):.5+.5*Math.sin(ph),ha=A.ha; // laughing beat
  const sit=A.sit,sq=SP.sq.v-stretchJ+ha*.07*(pulse-.5);
  const yaw=look.x*.35*(1-.8*sit*(S.sleeping?1:0))+SP.yaw.v;
  const nod=A.nod-look.y*.3+SP.nod.v+(S.sleeping?Math.sin(T*.9)*.1:0)-ha*.1*pulse;
  const lean=A.lean+SP.lean.v+breath*.008+ha*.06*(pulse-.5);
  const tilt=A.tilt+shake*.6+Math.sin(T*.7)*.01;
  frog.scale.set(1+sq*.45+A.puff*.3,1-sq*.5,1+sq*.45+A.puff*.3);
  frog.position.y=J.y+ha*.08*pulse;
  frog.rotation.z=SP.roll.v*.08+shake+ha*.035*Math.sin(ph*.5)+(playT>0?Math.sin(T*8)*.08:0);
  frog.rotation.y=(playT>0?Math.sin(T*3)*.5:0)+look.x*.12;
  // skeleton (supplied rigged model, driven with world-axis deltas)
  const sway=Math.sin(T*1.6)*.03;
  const aR=[...A.ar],aL=[...A.al];
  aR[0]+=-lean*.25+sway+ha*.05*Math.sin(ph);aL[0]+=-lean*.25-sway+ha*.05*Math.sin(ph);aR[2]+=breath*.02;aL[2]+=breath*.02;
  FR.pose({inflate:A.puff+ha*.1,dy:-.62*sit,lean:lean,tilt:tilt*.4,nod:nod,yaw:yaw,roll:tilt*.8+shake,ar:aR,al:aL,fing:A.fing,hip:A.hip+(playT>0?Math.sin(T*10)*.5:0),sit:sit});
  UN.uInfl.value=A.puff;UN.uBelly.value=.025*breath+(S.hunger<25?.03*Math.sin(T*5):0)+ha*(.05+.07*pulse);
  UN.uDent.value.set(dentPos.x,dentPos.y,dentPos.z,SP.dent.v);
  // face (eyelids, happy-eye arcs, open mouth, blush) is painted onto a skinned decal that hugs the head surface
  {const u=clamp(Math.max(A.u,bl),0,1),l=clamp(Math.max(A.l,bl*.6),0,1),mo=Math.max(0,A.mo*(1-.28*ha*pulse));
   FR.paint({lx:clamp(look.x*.9+A.lx,-1,1),ly:clamp(look.y*.8+A.ly,-1,1),u,l,sl:A.sl,arc:A.arc,mo,sm:A.sm,te:A.te,tg:A.tg,bl:A.bl});}
  // shadow
  const gs=clamp(1-J.y*.18,.4,1);shadow.position.x=frog.position.x;shadow.scale.set(2.8*gs*(1+sq*.3),2.0*gs,1);shadow.material.opacity=.9*gs;
  // night
  night=sm(night,S.sleeping?1:0,3,dt);
  hemi.intensity=lerp(1.0,.55,night);key.intensity=lerp(2.3,.7,night);fill.intensity=lerp(.7,.2,night);rim.intensity=lerp(1.1,.5,night);
  key.color.setRGB(1,lerp(1,.8,night),lerp(1,1.2,night));
  scene.background.setRGB(lerp(1,.1,night),lerp(.85,.1,night)*lerp(1,1,0),lerp(.63,.3,night));
  lampLight.intensity=lerp(6,0,night);lampMats[0].emissiveIntensity=lerp(.9,0,night);
  winNight.material.opacity=night;
  // zzz / bubble / toast / hud
  if(S.sleeping){zT-=dt;if(zT<=0){zT=1.3;fx('💤',1,anchor('head'),.5)}}
  if(bubble&&now()<bubble.until){const a=anchor('top');bubbleEl.style.display='block';bubbleEl.style.left=clamp(a.x,cw*.2,cw*.8)+'px';bubbleEl.style.top=Math.max(a.y-10*(cw/540),cw*.22)+'px'}else bubbleEl.style.display='none';
  if(toastEl.style.display==='block'&&now()>toastUntil)toastEl.style.display='none';
  hud();
}
const hb=[$('#b1'),$('#b2'),$('#b3')],lvEl=$('#lv'),xpEl=$('#xp'),coinEl=$('#coins'),btnEls=[...document.querySelectorAll('.btn')];
function hud(){
  [S.hunger,S.joy,S.energy].forEach((v,i)=>{hb[i].style.width=Math.max(6,v)+'%';hb[i].style.filter=v<25?'hue-rotate(-30deg) saturate(2)':''});
  lvEl.textContent='Lv.'+lv();xpEl.style.width=(S.xp%60)/60*100+'%';coinEl.textContent='🪙 '+Math.floor(S.coins);
  btnEls[0].classList.toggle('on',trayEl.classList.contains('show'));btnEls[1].classList.toggle('on',talk.state!=='idle');btnEls[3].classList.toggle('on',S.sleeping);
  trayEl.querySelectorAll('.food').forEach((el,i)=>el.classList.toggle('no',S.coins<FOODS[i].c));
}

let last=performance.now();
function frame(t){const dt=Math.min(.05,(t-last)/1000);last=t;update(dt);renderer.render(scene,camera);requestAnimationFrame(frame)}
requestAnimationFrame(frame);

window.__naiwa={CL,giggle,catchphrase,andy,setChar,get CUR(){return CUR},EGG,FRG,snap(n){const E=EX[n];for(const k of KEYS)A[k]=E[k];A.ar=[...E.ar];A.al=[...E.al];setExpr(n,600000)},S,A,FR,EX,setExpr,jump,kick,SP,camera,frog,say,feed,FOODS,get started(){return started},set started(v){started=v}};
$('#go').textContent='点击领养';
}
setTimeout(init,60);
