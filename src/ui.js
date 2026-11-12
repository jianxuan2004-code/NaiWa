/* Interface behaviour (after Apple's "Designing Fluid Interfaces"):
   - controls answer on pointer-down with a spring, and spring back (slightly under-damped) on release
   - bottom sheets are springs driven by one progress value: they enter and leave along the same path (bottom edge), can be grabbed
     and reversed at any moment (animation always starts from the live value + velocity), follow the finger 1:1 when dragged,
     rubber-band past their resting place, and settle using the projected landing point of the release velocity
   - everything is reachable and operable with the keyboard; reduced motion swaps slides/bounces for short cross-fades.
   The game logic (main.js) is untouched: it still toggles `.show` on the panels and listens for pointerdown on controls. */

const $=s=>document.querySelector(s),all=s=>[...document.querySelectorAll(s)];
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
const reduced=()=>matchMedia('(prefers-reduced-motion: reduce)').matches;
const unit=()=>parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--u'))||1;

/* ---------------- spring (response in seconds, damping ratio; 1 = no overshoot) ---------------- */
const live=new Set();let last=0,raf=0;
function frame(ts){
  const dt=Math.min(.25,(ts-last)/1000||.016);last=ts;
  for(const s of [...live]){
    const w=2*Math.PI/s.response,k=w*w,c=2*s.damping*w,n=Math.max(1,Math.ceil(dt*240)),h=dt/n;
    for(let i=0;i<n;i++){const a=-k*(s.x-s.target)-c*s.v;s.v+=a*h;s.x+=s.v*h}
    if(Math.abs(s.x-s.target)<s.eps&&Math.abs(s.v)<s.eps*12){s.x=s.target;s.v=0;live.delete(s);s.update(s.x);s.rest&&s.rest();continue}
    s.update(s.x);
  }
  raf=live.size?requestAnimationFrame(frame):0;
}
class Spring{
  constructor(x,update,rest,eps=.002){this.x=x;this.v=0;this.target=x;this.response=.4;this.damping=1;this.update=update;this.rest=rest;this.eps=eps}
  to(target,{response=.4,damping=1,velocity}={}){
    if(reduced()){damping=1;response=Math.max(.18,response*.6)} // gentler, no overshoot
    this.target=target;this.response=response;this.damping=damping;if(velocity!=null)this.v=velocity;
    live.add(this);if(!raf){last=performance.now();raf=requestAnimationFrame(frame)}
  }
  jump(x){this.x=x;this.v=0;this.target=x;live.delete(this);this.update(x)}
}

/* ---------------- press feedback ---------------- */
const PRESS='.btn,#mute,.ch,.chc,.food,.wit,.dest,.wtab,#home,.go2,#go,.cbtn';
const presses=new WeakMap();let held=null;
function pressSpring(el){
  let s=presses.get(el);
  if(!s){s=new Spring(1,v=>{if(reduced()){el.style.scale='';return}el.style.scale=v.toFixed(4)},null,.0005);presses.set(el,s)}
  return s;
}
function pressDown(el){
  held=el;el.classList.add('pressed');
  if(reduced())return;
  pressSpring(el).to(.93,{response:.1,damping:1}); // immediate: no waiting for release
}
function pressUp(el){
  if(!el)return;el.classList.remove('pressed');
  if(reduced())return;
  pressSpring(el).to(1,{response:.34,damping:.62}); // a touch of bounce: the press had momentum
}
document.addEventListener('pointerdown',e=>{const el=e.target.closest&&e.target.closest(PRESS);if(el)pressDown(el)},true);
const release=()=>{if(held){pressUp(held);held=null}};
addEventListener('pointerup',release,true);addEventListener('pointercancel',release,true);addEventListener('blur',release);

/* ---------------- bottom sheets ---------------- */
const sheets=[];
function makeSheet(el){
  let H=200,openedBy=null,kbd=false;
  const hiddenDist=()=>el.offsetHeight+120*unit()+24; // far enough to leave the stage
  const apply=p=>{
    if(reduced()){el.style.transform='none';el.style.opacity=clamp(p,0,1).toFixed(3)}
    else{const d=hiddenDist();el.style.transform=`translate3d(0,${((1-p)*d).toFixed(2)}px,0)`;el.style.opacity=clamp(p*1.6,0,1).toFixed(3)}
  };
  const sp=new Spring(0,apply,()=>{if(sp.target===0){el.style.visibility='hidden'}},.003);
  apply(0);
  const sheet={el,sp,dragging:false,pendingV:0,
    show(){el.style.visibility='visible';el.style.pointerEvents='';sp.to(1,{response:.38,damping:1,velocity:sp.v});
      if(kbd){const f=el.querySelector('[tabindex="0"]');f&&setTimeout(()=>f.focus({preventScroll:true}),30)}},
    hide(v){el.style.pointerEvents='none';sp.to(0,{response:.3,damping:1,velocity:v==null?sp.v:v});
      if(el.contains(document.activeElement)){const o=openedBy;setTimeout(()=>o&&o.focus&&o.focus({preventScroll:true}),30)}},
    noteOpener(k){kbd=k;openedBy=document.activeElement&&document.activeElement!==document.body?document.activeElement:null}};
  // watch the game toggling `.show`
  let shown=false;
  new MutationObserver(()=>{const now=el.classList.contains('show');if(now===shown||sheet.dragging)return;shown=now;if(now){sheet.noteOpener(lastKeyboard);sheet.show()}else{sheet.hide(sheet.pendingV);sheet.pendingV=0}})
    .observe(el,{attributes:true,attributeFilter:['class']});
  sheet.sync=()=>{shown=el.classList.contains('show')};
  // grab handle
  const ensureGrab=()=>{if(!el.querySelector(':scope > .grab')){const g=document.createElement('div');g.className='grab';g.setAttribute('aria-hidden','true');el.prepend(g);bindGrab(g)}};
  new MutationObserver(ensureGrab).observe(el,{childList:true});ensureGrab();
  function bindGrab(g){
    let hist=[],startY=0,startP=1;
    g.addEventListener('pointerdown',e=>{
      e.preventDefault();e.stopPropagation();g.setPointerCapture(e.pointerId);
      sheet.dragging=true;H=hiddenDist();live.delete(sp);startY=e.clientY;startP=sp.x;hist=[{y:e.clientY,t:e.timeStamp}];el.classList.add('dragging');
    });
    g.addEventListener('pointermove',e=>{
      if(!sheet.dragging)return;hist.push({y:e.clientY,t:e.timeStamp});if(hist.length>6)hist.shift();
      let off=(e.clientY-startY)+(1-startP)*H;                        // distance below the resting place (px), 1:1 with the pointer
      if(off<0){const o=-off,D=el.offsetHeight*.6,c=.55;off=-((o*D*c)/(D+c*o))}   // rubber-band when pulled up past rest
      sp.jump(1-off/H);
    });
    const end=e=>{
      if(!sheet.dragging)return;sheet.dragging=false;el.classList.remove('dragging');
      hist.push({y:e.clientY,t:e.timeStamp});const recent=hist.filter(s=>s.t>=e.timeStamp-100),a=recent[0],b=recent[recent.length-1],
        v=recent.length>1?(b.y-a.y)/Math.max(8,b.t-a.t)*1000:0;   // px/s over the last 100 ms (held still = 0), + = downward
      const off=(1-sp.x)*H,end=off+(v/1000)*.998/(1-.998);              // projected landing point of the flick
      const dismiss=end>el.offsetHeight*.45||v>900;
      const pv=-v/H;                                                      // hand the release velocity to the spring (progress units/s)
      if(dismiss){el.classList.remove('show');shown=false;sheet.hide(pv)}
      else{sp.to(1,{response:.3,damping:.8,velocity:pv})}                 // bounce only because a gesture carried momentum
    };
    g.addEventListener('pointerup',end);g.addEventListener('pointercancel',end);
  }
  sheets.push(sheet);return sheet;
}
['#tray','#wardrobe','#trip','#charpick'].forEach(s=>{const el=$(s);if(el)makeSheet(el)});

/* ---------------- small surfaces that pop in (modal result, toast, "home" chip) ---------------- */
for(const [sel,tsel] of [['#gend'],['#toast'],['#home'],['#ghud'],['#confirm','#cfBox']]){
  const el=$(sel),tg=$(tsel||sel);if(!el||!tg)continue;let was=getComputedStyle(el).display!=='none';
  const sp=new Spring(1,p=>{tg.style.opacity=clamp(p*1.5,0,1).toFixed(3);if(!reduced())tg.style.scale=(.9+.1*p).toFixed(4);else tg.style.scale=''},null,.001);
  new MutationObserver(()=>{const now=el.style.display&&el.style.display!=='none';if(now&&!was){sp.jump(0);sp.to(1,{response:.42,damping:.85})}was=!!now}).observe(el,{attributes:true,attributeFilter:['style']});
}

/* ---------------- keyboard access ---------------- */
let lastKeyboard=false;
addEventListener('keydown',()=>{lastKeyboard=true},true);addEventListener('pointerdown',()=>{lastKeyboard=false},true);
const KEYS=PRESS+',#start';
function label(el){
  if(el.dataset.b){return el.textContent.trim()}
  if(el.id==='mute')return '声音开关';if(el.id==='charbtn'||el.classList.contains('ch'))return '换角色';if(el.id==='home')return '回家';if(el.id==='go')return '开始';
  return (el.textContent||'').replace(/\s+/g,' ').trim();
}
function decorate(root=document){
  (root.querySelectorAll?root.querySelectorAll(KEYS):[]).forEach(el=>{
    if(el.id==='start')return;
    if(!el.hasAttribute('role'))el.setAttribute('role','button');
    if(!el.hasAttribute('tabindex'))el.setAttribute('tabindex','0');
    const l=label(el);if(l)el.setAttribute('aria-label',l);
    if(el.classList.contains('on')||el.classList.contains('wit')||el.classList.contains('chc'))el.setAttribute('aria-pressed',el.classList.contains('on')?'true':'false');
  });
  if(root.matches&&root.matches(KEYS)&&root.id!=='start'&&!root.hasAttribute('tabindex')){root.setAttribute('role','button');root.setAttribute('tabindex','0')}
}
decorate();
new MutationObserver(ms=>{for(const m of ms){m.addedNodes.forEach(n=>{if(n.nodeType===1)decorate(n)});
  if(m.type==='attributes'&&m.target.hasAttribute&&m.target.hasAttribute('role')&&/\b(on)\b/.test(m.target.className||''))m.target.setAttribute('aria-pressed','true');
  else if(m.type==='attributes'&&m.target.hasAttribute&&m.target.getAttribute('aria-pressed')!==null)m.target.setAttribute('aria-pressed',m.target.classList.contains('on')?'true':'false')}})
  .observe($('#stage'),{childList:true,subtree:true,attributes:true,attributeFilter:['class']});
$('#hud')&&$('#hud').setAttribute('role','status');

function activate(el){
  const r=el.getBoundingClientRect(),x=r.left+r.width/2,y=r.top+r.height/2;
  pressDown(el);setTimeout(()=>pressUp(el),110);held=null;
  if(el.classList.contains('cbtn')){el.click();return}
  el.dispatchEvent(new PointerEvent('pointerdown',{bubbles:true,cancelable:true,clientX:x,clientY:y,pointerId:1,isPrimary:true}));
  if(el.classList.contains('wit'))el.dispatchEvent(new PointerEvent('pointerup',{bubbles:true,clientX:x,clientY:y,pointerId:1,isPrimary:true})); // a tap on an item
  if(el.classList.contains('food'))dispatchEvent(new PointerEvent('pointerup',{bubbles:true,clientX:x,clientY:y,pointerId:1,isPrimary:true})); // a tap on a food feeds the pet
}
addEventListener('keydown',e=>{
  const t=e.target;
  if(e.key==='Escape'){
    const cf=$('#confirm');if(cf&&cf.style.display==='flex')return;   // the dialog handles its own Escape
    const open=sheets.filter(s=>s.el.classList.contains('show'));
    if(open.length){e.preventDefault();open.forEach(s=>s.el.classList.remove('show'))}return;
  }
  if(!t||!t.closest)return;
  if(e.key==='Enter'||e.key===' '){
    if(t.id==='start'||(t.closest('#start')&&t.id!=='go'))return;
    const el=t.closest(KEYS);if(el&&el===t){e.preventDefault();if(!e.repeat)activate(el)}
    else if(t.closest('#start')){e.preventDefault();if(!e.repeat)activate(t.closest('#start'))}
  }
  if(e.key==='ArrowLeft'||e.key==='ArrowRight'){
    const el=t.closest&&t.closest(PRESS);if(!el)return;
    const sibs=[...el.parentElement.children].filter(c=>c.getAttribute('tabindex')==='0');
    const i=sibs.indexOf(el);if(i<0||sibs.length<2)return;e.preventDefault();
    const n=sibs[(i+(e.key==='ArrowRight'?1:sibs.length-1))%sibs.length];n.focus();n.scrollIntoView&&n.scrollIntoView({block:'nearest',inline:'nearest'});
  }
});
// pressing Enter on the start screen from anywhere
addEventListener('keydown',e=>{const s=$('#start');if(s&&getComputedStyle(s).display!=='none'&&(e.key==='Enter'||e.key===' ')&&document.activeElement===document.body){e.preventDefault();s.dispatchEvent(new PointerEvent('pointerdown',{bubbles:true,cancelable:true}))}});
