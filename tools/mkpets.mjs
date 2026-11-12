// Builds smooth clay-like bodies for 奶鱼 / 奶猫 / 奶鼠 / 奶屎 from signed-distance fields (blended primitives),
// meshes them with naive surface nets, projects the vertices back onto the exact surface and writes assets/pets/<name>.json.
// Run: node tools/mkpets.mjs [name]
import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';
const OUT=path.join(path.dirname(fileURLToPath(import.meta.url)),'..','assets','pets');
fs.mkdirSync(OUT,{recursive:true});

/* ---------------- SDF primitives (all in world coordinates, y up, +z toward the camera) ---------------- */
const len=Math.hypot,clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
const rotM=([rx,ry,rz])=>{const cx=Math.cos(rx),sx=Math.sin(rx),cy=Math.cos(ry),sy=Math.sin(ry),cz=Math.cos(rz),sz=Math.sin(rz);
  // R = Rz*Ry*Rx
  return [cz*cy,cz*sy*sx-sz*cx,cz*sy*cx+sz*sx, sz*cy,sz*sy*sx+cz*cx,sz*sy*cx-cz*sx, -sy,cy*sx,cy*cx]};
const toLocal=(m,x,y,z)=>[m[0]*x+m[3]*y+m[6]*z,m[1]*x+m[4]*y+m[7]*z,m[2]*x+m[5]*y+m[8]*z]; // R^T p
const ell=(c,r,rot)=>{const m=rot?rotM(rot):null;return(x,y,z)=>{let px=x-c[0],py=y-c[1],pz=z-c[2];if(m)[px,py,pz]=toLocal(m,px,py,pz);
  const k0=len(px/r[0],py/r[1],pz/r[2]),k1=len(px/(r[0]*r[0]),py/(r[1]*r[1]),pz/(r[2]*r[2]));return k1<1e-9?-Math.min(...r):k0*(k0-1)/k1}};
const capsule=(a,b,r)=>(x,y,z)=>{const pax=x-a[0],pay=y-a[1],paz=z-a[2],bax=b[0]-a[0],bay=b[1]-a[1],baz=b[2]-a[2];
  const h=clamp((pax*bax+pay*bay+paz*baz)/(bax*bax+bay*bay+baz*baz),0,1);return len(pax-bax*h,pay-bay*h,paz-baz*h)-r};
// rounded disc: axis z, radius R, half thickness t, edge rounding rr
const disc=(c,R,t,rr,rot)=>{const m=rot?rotM(rot):null;return(x,y,z)=>{let px=x-c[0],py=y-c[1],pz=z-c[2];if(m)[px,py,pz]=toLocal(m,px,py,pz);
  const dx=len(px,py)-R+rr,dy=Math.abs(pz)-t+rr;return Math.min(Math.max(dx,dy),0)+len(Math.max(dx,0),Math.max(dy,0))-rr}};
// rounded triangle slab (ear): triangle in local xy, extruded along z
const tri=(p0,p1,p2)=>(x,y)=>{const e0=[p1[0]-p0[0],p1[1]-p0[1]],e1=[p2[0]-p1[0],p2[1]-p1[1]],e2=[p0[0]-p2[0],p0[1]-p2[1]],v0=[x-p0[0],y-p0[1]],v1=[x-p1[0],y-p1[1]],v2=[x-p2[0],y-p2[1]];
  const f=(v,e)=>{const t=clamp((v[0]*e[0]+v[1]*e[1])/(e[0]*e[0]+e[1]*e[1]),0,1),qx=v[0]-e[0]*t,qy=v[1]-e[1]*t;return qx*qx+qy*qy};
  const s=Math.sign(e0[0]*e2[1]-e0[1]*e2[0]);
  const d0x=f(v0,e0),d0y=s*(v0[0]*e0[1]-v0[1]*e0[0]),d1x=f(v1,e1),d1y=s*(v1[0]*e1[1]-v1[1]*e1[0]),d2x=f(v2,e2),d2y=s*(v2[0]*e2[1]-v2[1]*e2[0]);
  const dx=Math.min(d0x,d1x,d2x),dy=Math.min(d0y,d1y,d2y);return -Math.sqrt(dx)*Math.sign(dy)};
const slab=(t2,c,half,rr,rot)=>{const m=rot?rotM(rot):null;return(x,y,z)=>{let px=x-c[0],py=y-c[1],pz=z-c[2];if(m)[px,py,pz]=toLocal(m,px,py,pz);
  const d=t2(px,py)+rr,dz=Math.abs(pz)-half+rr;return Math.min(Math.max(d,dz),0)+len(Math.max(d,0),Math.max(dz,0))-rr}};
const smin=(a,b,k)=>{const h=Math.max(k-Math.abs(a-b),0)/k;return Math.min(a,b)-h*h*k*.25};
const union=(k,...f)=>(x,y,z)=>{let d=f[0](x,y,z);for(let i=1;i<f.length;i++)d=smin(d,f[i](x,y,z),k);return d};
const hard=(...f)=>(x,y,z)=>{let d=f[0](x,y,z);for(let i=1;i<f.length;i++)d=Math.min(d,f[i](x,y,z));return d};
const flatBottom=(f,y0)=>(x,y,z)=>Math.max(f(x,y,z),y0-y);

/* ---------------- naive surface nets ---------------- */
function mesher(sdf,bb,h){
  const nx=Math.ceil((bb[1][0]-bb[0][0])/h)+2,ny=Math.ceil((bb[1][1]-bb[0][1])/h)+2,nz=Math.ceil((bb[1][2]-bb[0][2])/h)+2;
  const ox=bb[0][0],oy=bb[0][1],oz=bb[0][2],F=new Float32Array(nx*ny*nz),G=(i,j,k)=>(k*ny+j)*nx+i;
  for(let k=0;k<nz;k++)for(let j=0;j<ny;j++)for(let i=0;i<nx;i++)F[G(i,j,k)]=sdf(ox+i*h,oy+j*h,oz+k*h);
  const vid=new Int32Array(nx*ny*nz).fill(-1),P=[];
  const C=[[0,0,0],[1,0,0],[0,1,0],[1,1,0],[0,0,1],[1,0,1],[0,1,1],[1,1,1]];
  const E=[[0,1],[2,3],[4,5],[6,7],[0,2],[1,3],[4,6],[5,7],[0,4],[1,5],[2,6],[3,7]];
  for(let k=0;k<nz-1;k++)for(let j=0;j<ny-1;j++)for(let i=0;i<nx-1;i++){
    const v=C.map(c=>F[G(i+c[0],j+c[1],k+c[2])]);let m=0;for(let q=0;q<8;q++)if(v[q]<0)m++;if(m===0||m===8)continue;
    let ax=0,ay=0,az=0,n=0;
    for(const[a,b]of E){if((v[a]<0)!==(v[b]<0)){const t=v[a]/(v[a]-v[b]);ax+=C[a][0]+(C[b][0]-C[a][0])*t;ay+=C[a][1]+(C[b][1]-C[a][1])*t;az+=C[a][2]+(C[b][2]-C[a][2])*t;n++}}
    vid[G(i,j,k)]=P.length/3;P.push(ox+(i+ax/n)*h,oy+(j+ay/n)*h,oz+(k+az/n)*h)}
  const I=[],quad=(a,b,c,d,flip)=>{if(a<0||b<0||c<0||d<0)return;flip?I.push(a,c,b,a,d,c):I.push(a,b,c,a,c,d)};
  for(let k=1;k<nz-1;k++)for(let j=1;j<ny-1;j++)for(let i=1;i<nx-1;i++){
    const f0=F[G(i,j,k)]<0;
    // edges along +x, +y, +z from this grid point
    if(f0!==(F[G(i+1,j,k)]<0))quad(vid[G(i,j-1,k-1)],vid[G(i,j,k-1)],vid[G(i,j,k)],vid[G(i,j-1,k)],!f0);
    if(f0!==(F[G(i,j+1,k)]<0))quad(vid[G(i-1,j,k-1)],vid[G(i-1,j,k)],vid[G(i,j,k)],vid[G(i,j,k-1)],!f0);
    if(f0!==(F[G(i,j,k+1)]<0))quad(vid[G(i-1,j-1,k)],vid[G(i,j-1,k)],vid[G(i,j,k)],vid[G(i-1,j,k)],!f0)}
  // project vertices onto the exact surface, gradient normals
  const e=h*.2,N=new Float32Array(P.length),grad=(x,y,z)=>{const gx=sdf(x+e,y,z)-sdf(x-e,y,z),gy=sdf(x,y+e,z)-sdf(x,y-e,z),gz=sdf(x,y,z+e)-sdf(x,y,z-e);const l=len(gx,gy,gz)||1;return[gx/l,gy/l,gz/l]};
  for(let v=0;v<P.length;v+=3){let x=P[v],y=P[v+1],z=P[v+2];
    for(let it=0;it<3;it++){const d=sdf(x,y,z),g=grad(x,y,z);x-=d*g[0];y-=d*g[1];z-=d*g[2]}
    P[v]=x;P[v+1]=y;P[v+2]=z;const g=grad(x,y,z);N[v]=g[0];N[v+1]=g[1];N[v+2]=g[2]}
  // make triangle winding agree with the outward normal
  for(let t=0;t<I.length;t+=3){const a=I[t]*3,b=I[t+1]*3,c=I[t+2]*3;
    const ux=P[b]-P[a],uy=P[b+1]-P[a+1],uz=P[b+2]-P[a+2],vx=P[c]-P[a],vy=P[c+1]-P[a+1],vz=P[c+2]-P[a+2];
    const nx2=uy*vz-uz*vy,ny2=uz*vx-ux*vz,nz2=ux*vy-uy*vx;if(nx2*(N[a]+N[b]+N[c])+ny2*(N[a+1]+N[b+1]+N[c+1])+nz2*(N[a+2]+N[b+2]+N[c+2])<0){const q=I[t+1];I[t+1]=I[t+2];I[t+2]=q}}
  return{P,N,I};
}

/* ---------------- pack ---------------- */
const b64=a=>Buffer.from(a.buffer,a.byteOffset,a.byteLength).toString('base64');
function pack(part){
  const {P,N,I}=mesher(part.sdf,part.bb,part.h||.045),n=P.length/3;
  const min=[1e9,1e9,1e9],max=[-1e9,-1e9,-1e9];for(let v=0;v<n;v++)for(let a=0;a<3;a++){min[a]=Math.min(min[a],P[v*3+a]);max[a]=Math.max(max[a],P[v*3+a])}
  const q=new Int16Array(n*3),nn=new Int16Array(n*3),uv=new Uint16Array(n*2),sz=[0,1,2].map(a=>Math.max(1e-6,max[a]-min[a]));
  for(let v=0;v<n;v++){for(let a=0;a<3;a++){q[v*3+a]=Math.round((P[v*3+a]-min[a])/sz[a]*65535-32768);nn[v*3+a]=Math.round(N[v*3+a]*32767)}
    uv[v*2]=Math.round(clamp((P[v*3]-min[0])/sz[0],0,1)*65535);uv[v*2+1]=Math.round(clamp((P[v*3+1]-min[1])/sz[1],0,1)*65535)}
  const idx=n<65536?new Uint16Array(I):new Uint32Array(I);
  console.log('  ',part.name.padEnd(10),'verts',n,'tris',I.length/3);
  return{n:part.name,kind:part.kind||'extra',tex:part.tex||'yellow',color:part.color||null,pivot:part.pivot||null,min,size:sz,P:b64(q),N:b64(nn),U:b64(uv),I:b64(idx),idx32:n>=65536};
}

/* ================= the four characters (shapes taken from the reference pictures) ================= */
const S=[-1,1];
const box=(c,r)=>[[c[0]-r[0],c[1]-r[1],c[2]-r[2]],[c[0]+r[0],c[1]+r[1],c[2]+r[2]]];
const bbOf=(lo,hi)=>[lo,hi];

const defs={
  /* 奶鼠: a pear — small head melting into a big belly, huge round ears, one arm waving, stubby cylinder legs, thin tail */
  mouse(){
    const parts=[];
    const body=union(.65,ell([0,2.45,.05],[.68,.72,.64]),ell([0,1.3,0],[1.1,1.3,.96]));
    const legs=S.map(s=>union(.12,capsule([s*.5,.5,.1],[s*.5,.22,.15],.34),ell([s*.5,.17,.3],[.36,.18,.46])));
    parts.push({name:'body',kind:'skin',sdf:union(.14,body,...legs),bb:[[-1.3,0,-1.1],[1.3,3.3,1.1]],h:.05});
    for(const s of S){
      const a=[s*1.0,1.85,.08];
      parts.push({name:'arm'+s,kind:'extra',pivot:a,sdf:union(.25,ell([s*1.07,1.6,.12],[.2,.42,.22],[0,0,s*.3]),ell([s*1.3,1.15,.2],[.2,.3,.22],[0,0,s*.35])),bb:[[s*.8-.5,.7,-.3],[s*.8+1.0,2.1,.5]].map((p,i)=>i?p:p),h:.035});
      parts.push({name:'ear'+s,kind:'extra',pivot:[s*.75,2.75,-.1],sdf:disc([s*1.0,2.95,-.12],.66,.075,.06),bb:[[s*1.0-.75,2.2,-.3],[s*1.0+.75,3.75,.1]],h:.035});
      parts.push({name:'earIn'+s,kind:'extra',tex:'flat',color:'#f6b28c',pivot:[s*.75,2.75,-.1],sdf:disc([s*1.0,2.95,-.06],.53,.05,.04),bb:[[s*1.0-.6,2.3,-.2],[s*1.0+.6,3.6,.1]],h:.035});
    }
    return parts;
  },
  /* 奶猫: a loaf — big head fused to a low wide body, triangular ears, fat front paws with three toes */
  cat(){
    const parts=[];
    const head=ell([0,1.82,.48],[1.0,.9,.84]),bodyE=ell([0,.98,-.1],[1.25,.98,1.12]);
    const hauns=S.map(s=>ell([s*.9,.78,-.55],[.62,.68,.72]));
    const chest=ell([0,.78,.55],[.95,.75,.72]);
    const paws=S.flatMap(s=>[ell([s*.52,.52,.95],[.34,.55,.36]),ell([s*.54,.17,1.08],[.36,.18,.44])]);
    parts.push({name:'body',kind:'skin',sdf:union(.3,head,bodyE,...hauns,chest,...paws),bb:[[-1.7,0,-1.3],[1.7,2.9,1.7]],h:.05});
    const T=tri([-.36,0],[.36,0],[.1,.86]),Ti=tri([-.25,0],[.25,0],[.08,.66]);
    for(const s of S){
      parts.push({name:'ear'+s,kind:'extra',pivot:[s*.62,2.45,.3],sdf:slab(T,[s*.62,2.4,.3],.11,.08,[0,0,-s*.42]),bb:[[s*.62-.7,2.2,0],[s*.62+.7,3.4,.6]],h:.035});
      parts.push({name:'earIn'+s,kind:'extra',tex:'flat',color:'#eaa634',pivot:[s*.62,2.45,.3],sdf:slab(Ti,[s*.62+s*.012,2.45,.37],.05,.04,[0,0,-s*.42]),bb:[[s*.62-.6,2.2,0],[s*.62+.6,3.3,.7]],h:.035});
      for(const dx of[-.19,0,.19])parts.push({name:'toe'+s+dx,kind:'extra',tex:'flat',color:'#f7d24a',sdf:ell([s*.54+dx,.14,1.43],[.1,.09,.13]),bb:[[s*.54+dx-.2,0,1.2],[s*.54+dx+.2,.4,1.7]],h:.03});
    }
    return parts;
  },
  /* 奶鱼: a seal — small tapered head, plump body, cream belly, paddle flippers, flat two-lobed tail */
  fish(){
    const parts=[];
    const head=union(.25,ell([0,2.98,.3],[.62,.6,.72]),ell([0,2.86,.95],[.24,.17,.24]));
    const body=union(.6,head,ell([0,1.95,0],[.9,1.2,.82]),ell([0,.98,-.25],[.62,.85,.56]),capsule([0,.75,-.3],[0,.5,-1.0],.2));
    parts.push({name:'body',kind:'skin',sdf:body,bb:[[-1.3,.1,-1.3],[1.3,3.8,1.4]],h:.05});
    parts.push({name:'belly',kind:'skin',tex:'cream',sdf:ell([0,1.6,.38],[.62,1.0,.52]),bb:[[-.9,.5,-.3],[.9,2.8,1.2]],h:.05});
    for(const s of S){
      parts.push({name:'flip'+s,kind:'extra',pivot:[s*.95,2.1,.1],sdf:ell([s*1.15,1.65,.1],[.2,.62,.34],[0,0,s*.65]),bb:[[s*1.15-.6,.9,-.4],[s*1.15+.6,2.5,.6]],h:.035});
      parts.push({name:'tail'+s,kind:'extra',pivot:[0,.55,-1.0],sdf:ell([s*.42,.5,-1.22],[.55,.07,.3],[0,s*.5,0]),bb:[[s*.42-.8,.2,-1.8],[s*.42+.8,.85,-.6]],h:.035});
    }
    return parts;
  },
  /* 奶屎: soft-serve — three fat coils with creases between them and a curled tip */
  poop(){
    const parts=[];
    const coils=[ell([0,.58,0],[1.4,.58,1.36]),ell([.04,1.34,-.02],[1.08,.5,1.04]),ell([-.03,1.98,0],[.78,.46,.76])];
    const tip=[ell([-.08,2.46,0],[.46,.4,.43]),ell([-.2,2.82,0],[.31,.32,.3]),ell([-.42,3.08,0],[.17,.2,.17])];
    parts.push({name:'body',kind:'skin',sdf:flatBottom(union(.07,...coils,...tip),.04),bb:[[-1.6,0,-1.6],[1.6,3.4,1.6]],h:.05});
    return parts;
  }
};

/* surface lookup tables (front depth z(x,y), head-top height, half-width by height) so the game needs no raycasting */
const HATZ={mouse:.05,cat:.48,fish:.3,poop:0};
function info(name,parts){
  const f=hard(...parts.filter(p=>p.kind==='skin').map(p=>p.sdf));
  const X0=-1.9,X1=1.9,Y0=0,Y1=3.8,NX=96,NY=96,Z=new Float32Array(NX*NY);
  const hitZ=(x,y)=>{let z=4;for(let i=0;i<120;i++){const d=f(x,y,z);if(d<.0015)return z;z-=Math.max(.004,d*.85);if(z<-4)return -99}return -99};
  for(let j=0;j<NY;j++)for(let i=0;i<NX;i++)Z[j*NX+i]=hitZ(X0+(X1-X0)*i/(NX-1),Y0+(Y1-Y0)*j/(NY-1));
  const hz=HATZ[name];let top=6;for(let i=0;i<200&&top>0;i++){const d=f(0,top,hz);if(d<.0015)break;top-=Math.max(.004,d*.85)}
  const HN=190,hw=new Float32Array(HN);
  for(let j=0;j<HN;j++){const y=j*.02;let x=4;for(let i=0;i<200;i++){const d=f(x,y,hz);if(d<.0015)break;x-=Math.max(.004,d*.85);if(x<0){x=0;break}}hw[j]=x}
  // torso profile for clothes: per height, half-width and front/back depth through the centre plane
  const PN=96,PD=.04,prof=new Float32Array(PN*3);
  const march=(ox,oy,oz,dx,dy,dz,max)=>{let t=0;for(let i=0;i<160&&t<max;i++){const d=f(ox+dx*t,oy+dy*t,oz+dz*t);if(d<.0015)return t;t+=Math.max(.004,d*.85)}return -1};
  for(let j=0;j<PN;j++){const y=j*PD;
    let xm=0;for(let k=-6;k<=6;k++){const z=k*.2+hz*0,t=march(4,y,z,-1,0,0,8);if(t>=0)xm=Math.max(xm,4-t)}
    const tf=march(0,y,4,0,0,-1,8),tb=march(0,y,-4,0,0,1,8);
    prof[j*3]=xm;prof[j*3+1]=tf>=0?4-tf:0;prof[j*3+2]=tb>=0?-4+tb:0}
  console.log('  top',top.toFixed(2),'hatZ',hz);
  return{zt:{x0:X0,x1:X1,y0:Y0,y1:Y1,nx:NX,ny:NY,d:b64(Z)},top,hatZ:hz,hw:b64(hw),hwDy:.02,prof:{dy:PD,n:PN,d:b64(prof)}};
}

const want=process.argv[2];
for(const name of Object.keys(defs)){
  if(want&&want!==name)continue;
  if(name==='mouse'&&!want)continue;   // 奶鼠 now comes from the supplied model: tools/mkmouse.mjs
  console.log(name);const raw=defs[name](),inf=info(name,raw),parts=raw.map(pack);
  fs.writeFileSync(path.join(OUT,name+'.json'),JSON.stringify({parts,info:inf}));
}
