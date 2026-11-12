// Converts the supplied NaiShu GLB (230k-vertex static sculpt) into a light game asset: vertex-clustering decimation of
// every part, packed like the other pets (assets/pets/mouse.json) plus the surface tables the game needs (front depth,
// head top, half-widths, torso profile). Run: node tools/mkmouse.mjs <path to naishu.glb>
import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';
const OUT=path.join(path.dirname(fileURLToPath(import.meta.url)),'..','assets','pets');
const buf=fs.readFileSync(process.argv[2]);
const jl=buf.readUInt32LE(12),J=JSON.parse(buf.slice(20,20+jl).toString()),binStart=20+jl+8,bin=buf.slice(binStart);
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v)),len=Math.hypot;

function acc(i){const a=J.accessors[i],bv=J.bufferViews[a.bufferView],off=(bv.byteOffset||0)+(a.byteOffset||0),n=a.count,comp={5126:4,5123:2,5125:4}[a.componentType],nc={SCALAR:1,VEC2:2,VEC3:3}[a.type];
  const stride=bv.byteStride||comp*nc,out=a.componentType===5126?new Float32Array(n*nc):new Uint32Array(n*nc);
  for(let k=0;k<n;k++)for(let c=0;c<nc;c++){const o=off+k*stride+c*comp;out[k*nc+c]=a.componentType===5126?bin.readFloatLE(o):a.componentType===5123?bin.readUInt16LE(o):bin.readUInt32LE(o)}
  return out}
function prim(meshName,pi){const m=J.meshes.find(x=>x.name===meshName),p=m.primitives[pi];return{P:acc(p.attributes.POSITION),N:acc(p.attributes.NORMAL),U:p.attributes.TEXCOORD_0!=null?acc(p.attributes.TEXCOORD_0):null,I:acc(p.indices),mat:J.materials[p.material].name}}

/* vertex clustering: one vertex per grid cell (averaged position / normal / uv), degenerate and duplicate triangles dropped */
function cluster({P,N,U,I},cell){
  const n=P.length/3,id=new Int32Array(n),map=new Map(),cp=[],cn=[],cu=[],cc=[];
  for(let v=0;v<n;v++){const k=Math.round(P[v*3]/cell)+','+Math.round(P[v*3+1]/cell)+','+Math.round(P[v*3+2]/cell);let c=map.get(k);
    if(c===undefined){c=cc.length;map.set(k,c);cp.push(0,0,0);cn.push(0,0,0);cu.push(0,0);cc.push(0)}
    id[v]=c;cc[c]++;for(let a=0;a<3;a++){cp[c*3+a]+=P[v*3+a];cn[c*3+a]+=N[v*3+a]}if(U){cu[c*2]+=U[v*2];cu[c*2+1]+=U[v*2+1]}}
  const m=cc.length,pos=new Float32Array(m*3),nor=new Float32Array(m*3),uv=new Float32Array(m*2);
  for(let c=0;c<m;c++){const k=cc[c],l=len(cn[c*3],cn[c*3+1],cn[c*3+2])||1;for(let a=0;a<3;a++){pos[c*3+a]=cp[c*3+a]/k;nor[c*3+a]=cn[c*3+a]/l}uv[c*2]=cu[c*2]/k;uv[c*2+1]=cu[c*2+1]/k}
  const seen=new Set(),idx=[];
  for(let t=0;t<I.length;t+=3){const a=id[I[t]],b=id[I[t+1]],c=id[I[t+2]];if(a===b||b===c||a===c)continue;
    const key=[a,b,c].sort((x,y)=>x-y).join(',');if(seen.has(key))continue;seen.add(key);idx.push(a,b,c)}
  return{P:pos,N:nor,U:U?uv:null,I:idx};
}
const b64=a=>Buffer.from(a.buffer,a.byteOffset,a.byteLength).toString('base64');
function pack(name,g,o={}){
  const n=g.P.length/3,min=[1e9,1e9,1e9],max=[-1e9,-1e9,-1e9];
  for(let v=0;v<n;v++)for(let a=0;a<3;a++){min[a]=Math.min(min[a],g.P[v*3+a]);max[a]=Math.max(max[a],g.P[v*3+a])}
  const sz=[0,1,2].map(a=>Math.max(1e-6,max[a]-min[a])),q=new Int16Array(n*3),nn=new Int16Array(n*3),uv=new Uint16Array(n*2);
  for(let v=0;v<n;v++){for(let a=0;a<3;a++){q[v*3+a]=Math.round((g.P[v*3+a]-min[a])/sz[a]*65535-32768);nn[v*3+a]=Math.round(g.N[v*3+a]*32767)}
    if(g.U&&o.rawUV){uv[v*2]=Math.round(clamp(g.U[v*2],0,1)*65535);uv[v*2+1]=Math.round(clamp(g.U[v*2+1],0,1)*65535)}
    else{uv[v*2]=Math.round(clamp((g.P[v*3]-min[0])/sz[0],0,1)*65535);uv[v*2+1]=Math.round(clamp((g.P[v*3+1]-min[1])/sz[1],0,1)*65535)}}
  const idx=n<65536?new Uint16Array(g.I):new Uint32Array(g.I);
  console.log('  ',name.padEnd(10),'verts',n,'tris',g.I.length/3);
  const r={n:name,kind:o.kind||'extra',tex:o.tex||'yellow',color:o.color||null,pivot:o.pivot||null,min,size:sz,P:b64(q),N:b64(nn),U:b64(uv),I:b64(idx),idx32:n>=65536};
  if(o.skin){r.SI=b64(o.skin.SI);r.SW=b64(o.skin.SW)}
  return r;
}

/* ---- skeleton (rest pose = the model's pose; bones have no rest rotation, so local rotations are plain world-axis rotations) ---- */
const BONES=[
  ['root',-1,[0,0,0]],['hips',0,[0,.8,0]],['spine',1,[0,1.35,0]],['chest',2,[0,2.0,0]],['neck',3,[0,2.2,0]],['head',4,[0,2.45,0]],
  ['shoulder-1',3,[-.70,1.88,0]],['elbow-1',6,[-1.10,1.68,0]],['wrist-1',7,[-1.38,1.52,0]],
  ['shoulder1',3,[.70,1.88,0]],['elbow1',9,[1.10,1.68,0]],['wrist1',10,[1.38,1.52,0]],
  ['thigh-1',1,[-.5,.78,0]],['foot-1',12,[-.58,.4,.05]],['thigh1',1,[.5,.78,0]],['foot1',14,[.58,.4,.05]],
  ['tail0',1,[.85,.58,-.3]],['tail1',16,[1.4,.5,-.3]],['tail2',17,[1.89,.84,-.25]],['tail3',18,[2.27,.83,-.15]],
  ['earA-1',5,[-.8,3.0,-.05]],['earB-1',20,[-1.0,3.45,-.1]],['earA1',5,[.8,3.0,-.05]],['earB1',22,[1.0,3.45,-.1]],
];
const BI_={};BONES.forEach((b,i)=>BI_[b[0]]=i);
const ss=(a,b,x)=>{const t=clamp((x-a)/(b-a),0,1);return t*t*(3-2*t)};
const sub=(a,b)=>[a[0]-b[0],a[1]-b[1],a[2]-b[2]],dot=(a,b)=>a[0]*b[0]+a[1]*b[1]+a[2]*b[2];
/* nearest point on a polyline: returns distance and arc length from its start */
function onLine(pts,p){let best={d:1e9,u:0},acc=0;
  for(let i=0;i<pts.length-1;i++){const a=pts[i],b=pts[i+1],ab=sub(b,a),L=len(...ab),t=clamp(dot(sub(p,a),ab)/(L*L),0,1),q=[a[0]+ab[0]*t,a[1]+ab[1]*t,a[2]+ab[2]*t],d=len(...sub(p,q));
    if(d<best.d)best={d,u:acc+t*L};acc+=L}return best}
const ARM={'-1':[[-.70,1.88,0],[-1.10,1.68,0],[-1.38,1.52,0],[-1.52,1.44,0]],'1':[[.70,1.88,0],[1.10,1.68,0],[1.38,1.52,0],[1.52,1.44,0]]};
const armLen=pts=>pts.slice(1).map((p,i)=>len(...sub(p,pts[i])));
const CHAIN=[['hips',.8],['spine',1.35],['chest',2.0],['neck',2.2],['head',2.45]];
/* radius of the torso (without arms) by height, from the supplied lathe profile */
const TPROF=[[.31,.18],[.36,.59],[.47,.80],[.67,.97],[.95,1.095],[1.25,1.145],[1.53,1.14],[1.80,1.06],[2.08,.92],[2.35,.78],[2.61,.71],[2.88,.675],[3.10,.66],[3.29,.64],[3.43,.565],[3.51,.4]];
function torsoR(y){if(y<=TPROF[0][0])return TPROF[0][1];for(let i=0;i<TPROF.length-1;i++){const[a,ra]=TPROF[i],[b,rb]=TPROF[i+1];if(y<=b)return ra+(rb-ra)*(y-a)/(b-a)}return .3}
function skinBody(P){
  const n=P.length/3,SI=new Uint8Array(n*4),SW=new Uint8Array(n*4);
  for(let v=0;v<n;v++){
    const p=[P[v*3],P[v*3+1],P[v*3+2]],w=new Map(),add=(b,x)=>{if(x>1e-4)w.set(b,(w.get(b)||0)+x)};
    // 1. torso chain: linear blend between neighbouring joints
    const y=p[1],cw=new Map();
    if(y<=CHAIN[0][1])cw.set('hips',1);else if(y>=CHAIN[4][1])cw.set('head',1);
    else for(let i=0;i<4;i++){const y0=CHAIN[i][1],y1=CHAIN[i+1][1];if(y>=y0&&y<y1){const t=ss(0,1,(y-y0)/(y1-y0));cw.set(CHAIN[i][0],1-t);cw.set(CHAIN[i+1][0],t)}}
    let keep=1;
    // 2. arms: the further along the arm, the more of the vertex follows the arm bones
    for(const sd of[-1,1]){
      if(p[0]*sd<.5)continue;const pts=ARM[sd],L=armLen(pts),L1=L[0],L2=L1+L[1],o=onLine(pts,p),u=o.u,rad=.34-.13*clamp(u/(L2+L[2]),0,1);
      if(o.d>rad+.2)continue;
      // Only the part of the arm that sticks out of the torso follows it: the flank under / above the arm is torso skin and must not be
      // dragged along (that was the pile of skin). 'e' = how far this vertex is outside the torso's own radius at its height.
      const e=Math.abs(p[0])-torsoR(p[1]);
      const a=ss(.0,.2,e)*ss(.05,.5,u)*(1-ss(rad+.05,rad+.2,o.d));if(a<=0)continue;
      const wU=1-ss(L1-.12,L1+.12,u),wH=ss(L2-.1,L2+.1,u),wF=1-wU-wH;
      add('shoulder'+sd,a*wU);add('elbow'+sd,a*wF);add('wrist'+sd,a*wH);keep-=a;
    }
    // 3. legs / feet
    for(const sd of[-1,1]){
      const side=ss(.05,.32,p[0]*sd),lw=side*(1-ss(.62,.95,y));if(lw<=0)continue;
      const wf=1-ss(.3,.62,y);add('foot'+sd,lw*wf*keep);add('thigh'+sd,lw*(1-wf)*keep);keep-=lw*keep;
    }
    for(const[b,x]of cw)add(b,x*Math.max(0,keep));
    const e=[...w.entries()].sort((a,b)=>b[1]-a[1]).slice(0,4),tot=e.reduce((s,a)=>s+a[1],0)||1;let sum=0;
    e.forEach(([b,x],k)=>{const q=Math.round(x/tot*255);SI[v*4+k]=BI_[b];SW[v*4+k]=q;sum+=q});SW[v*4]+=255-sum;
  }
  return{SI,SW};
}
function skinEar(P,sd){
  const n=P.length/3,SI=new Uint8Array(n*4),SW=new Uint8Array(n*4),base=[sd*.8,3.0,-.05],ax=[sd*.2,.45,-.05],al=len(...ax),dir=ax.map(x=>x/al);
  for(let v=0;v<n;v++){const p=[P[v*3],P[v*3+1],P[v*3+2]],t=ss(.1,.95,dot(sub(p,base),dir)),b=Math.round(t*255);
    SI[v*4]=BI_['earA'+sd];SI[v*4+1]=BI_['earB'+sd];SW[v*4]=255-b;SW[v*4+1]=b}
  return{SI,SW};
}
const TAIL=[[.85,.58,-.3],[1.4,.5,-.3],[1.89,.84,-.25],[2.27,.83,-.15]];
function skinTail(P){
  const n=P.length/3,SI=new Uint8Array(n*4),SW=new Uint8Array(n*4),L=armLen(TAIL),cum=[0,L[0],L[0]+L[1],L[0]+L[1]+L[2]];
  for(let v=0;v<n;v++){const u=onLine(TAIL,[P[v*3],P[v*3+1],P[v*3+2]]).u;let i=0;while(i<2&&u>cum[i+1])i++;
    const t=clamp((u-cum[i])/(cum[i+1]-cum[i]),0,1),b=Math.round(t*255);SI[v*4]=BI_['tail'+i];SI[v*4+1]=BI_['tail'+(i+1)];SW[v*4]=255-b;SW[v*4+1]=b}
  return{SI,SW};
}

/* The sculpt has its left arm raised. To get a clean hanging arm on both sides, keep the right half of the body (hanging arm,
   foot) and mirror it across x = 0; the wave is then done by the skeleton lifting that arm. */
function mirrorHalf(g,snap=.045){
  const P=g.P,N=g.N,n=P.length/3,xs=v=>Math.abs(P[v*3])<snap?0:P[v*3],keepV=[],map=new Int32Array(n).fill(-1);
  for(let v=0;v<n;v++)if(xs(v)>=0){map[v]=keepV.length;keepV.push(v)}
  const m=keepV.length,pos=[],nor=[],mir=new Int32Array(m).fill(-1);
  keepV.forEach((v,i)=>{const x=xs(v);pos.push(x,P[v*3+1],P[v*3+2]);let nx=N[v*3],ny=N[v*3+1],nz=N[v*3+2];if(x===0)nx=0;const l=len(nx,ny,nz)||1;nor.push(nx/l,ny/l,nz/l)});
  let cnt=m;keepV.forEach((v,i)=>{if(pos[i*3]!==0){mir[i]=cnt++}});
  const P2=new Float32Array(cnt*3),N2=new Float32Array(cnt*3);
  for(let i=0;i<m;i++){for(let a=0;a<3;a++){P2[i*3+a]=pos[i*3+a];N2[i*3+a]=nor[i*3+a]}
    if(mir[i]>=0){const j=mir[i];P2[j*3]=-pos[i*3];P2[j*3+1]=pos[i*3+1];P2[j*3+2]=pos[i*3+2];N2[j*3]=-nor[i*3];N2[j*3+1]=nor[i*3+1];N2[j*3+2]=nor[i*3+2]}}
  const I=[];
  for(let t=0;t<g.I.length;t+=3){const a=map[g.I[t]],b=map[g.I[t+1]],c=map[g.I[t+2]];if(a<0||b<0||c<0)continue;if(a===b||b===c||a===c)continue;
    I.push(a,b,c);const ma=mir[a]>=0?mir[a]:a,mb=mir[b]>=0?mir[b]:b,mc=mir[c]>=0?mir[c]:c;if(ma!==mb&&mb!==mc&&ma!==mc)I.push(ma,mc,mb)}
  return{P:P2,N:N2,U:null,I};
}

/* the sculpt's crown is boxy (a flat top with a sharp shoulder): pull the top 0.45 of the head into a rounded dome (super-ellipse) */
function roundTop(g,y0=3.08,y1=3.545){
  const P=g.P,N=g.N,n=P.length/3,S=2.2;
  for(let v=0;v<n;v++){const y=P[v*3+1];if(y<=y0)continue;const t=clamp((y-y0)/(y1-y0),0,1),dome=Math.pow(Math.max(0,1-Math.pow(t,S)),1/S);
    // original profile radius (relative) at this height, from the supplied lathe profile
    const pr=[[3.10,.66],[3.29,.64],[3.43,.565],[3.51,.40],[3.545,.14]];let k=0;while(k<3&&y>pr[k+1][0])k++;
    const f=clamp((y-pr[k][0])/(pr[k+1][0]-pr[k][0]),0,1),orig=(pr[k][1]*(1-f)+pr[k+1][1]*f)/.66;
    const g2=clamp(dome/Math.max(.12,orig),0,1.05),blend=ss(0,.25,t)*0+1,w=ss(0,.18,t);  // fade the warp in from the neck of the dome
    const s=1+(g2-1)*w;P[v*3]*=s;P[v*3+2]*=s}
  // normals of the warped area: area-weighted from the faces, blended with the old ones
  const acc=new Float32Array(n*3);
  for(let t=0;t<g.I.length;t+=3){const a=g.I[t]*3,b=g.I[t+1]*3,c=g.I[t+2]*3,ux=P[b]-P[a],uy=P[b+1]-P[a+1],uz=P[b+2]-P[a+2],vx=P[c]-P[a],vy=P[c+1]-P[a+1],vz=P[c+2]-P[a+2];
    const nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx;for(const q of[a,b,c]){acc[q]+=nx;acc[q+1]+=ny;acc[q+2]+=nz}}
  for(let v=0;v<n;v++){const y=P[v*3+1];if(y<y0-.1)continue;const w=ss(y0-.1,y0+.1,y),l=len(acc[v*3],acc[v*3+1],acc[v*3+2])||1;
    let nx=N[v*3]*(1-w)+acc[v*3]/l*w,ny=N[v*3+1]*(1-w)+acc[v*3+1]/l*w,nz=N[v*3+2]*(1-w)+acc[v*3+2]/l*w;const m=len(nx,ny,nz)||1;N[v*3]=nx/m;N[v*3+1]=ny/m;N[v*3+2]=nz/m}
  return g;
}

/* ---- decimate every part, then skin it ---- */
const body=roundTop(mirrorHalf(cluster(prim('01 Body + waving mittens + feet',0),.04)));
const parts=[pack('body',body,{kind:'skin',skin:skinBody(body.P)})];
for(const s of[1,-1]){
  const nm=`02 Ear ${s>0?'+1':'-1'} | recessed bowl`,m=J.meshes.find(x=>x.name===nm);
  m.primitives.forEach((p,i)=>{const pr=prim(nm,i),isBowl=pr.mat.startsWith('Golden'),g=cluster(pr,.028);
    parts.push(pack((isBowl?'ear':'earRim')+s,g,{tex:isBowl?'ear':'yellow',rawUV:isBowl,skin:skinEar(g.P,s)}))});
}
const tailG=cluster(prim('06 Curled tail',0),.022);parts.push(pack('tail',tailG,{skin:skinTail(tailG.P)}));

/* ---- surface tables from the decimated body ---- */
const BP=body.P,BI=body.I,nv=BP.length/3;
const X0=-1.9,X1=1.9,Y0=0,Y1=3.8,NX=96,NY=96,Z=new Float32Array(NX*NY).fill(-99);
for(let t=0;t<BI.length;t+=3){const a=BI[t]*3,b=BI[t+1]*3,c=BI[t+2]*3;
  const ax=BP[a],ay=BP[a+1],az=BP[a+2],bx=BP[b],by=BP[b+1],bz=BP[b+2],cx=BP[c],cy=BP[c+1],cz=BP[c+2];
  const minx=Math.min(ax,bx,cx),maxx=Math.max(ax,bx,cx),miny=Math.min(ay,by,cy),maxy=Math.max(ay,by,cy);
  const i0=Math.max(0,Math.floor((minx-X0)/(X1-X0)*(NX-1))),i1=Math.min(NX-1,Math.ceil((maxx-X0)/(X1-X0)*(NX-1))),j0=Math.max(0,Math.floor((miny-Y0)/(Y1-Y0)*(NY-1))),j1=Math.min(NY-1,Math.ceil((maxy-Y0)/(Y1-Y0)*(NY-1)));
  const den=(by-cy)*(ax-cx)+(cx-bx)*(ay-cy);if(Math.abs(den)<1e-12)continue;
  for(let j=j0;j<=j1;j++)for(let i=i0;i<=i1;i++){const x=X0+(X1-X0)*i/(NX-1),y=Y0+(Y1-Y0)*j/(NY-1);
    const l1=((by-cy)*(x-cx)+(cx-bx)*(y-cy))/den,l2=((cy-ay)*(x-cx)+(ax-cx)*(y-cy))/den,l3=1-l1-l2;
    if(l1<-1e-4||l2<-1e-4||l3<-1e-4)continue;const z=l1*az+l2*bz+l3*cz;if(z>Z[j*NX+i])Z[j*NX+i]=z}}
// fill 1-cell holes
for(let j=1;j<NY-1;j++)for(let i=1;i<NX-1;i++)if(Z[j*NX+i]<-50){const nb=[Z[j*NX+i-1],Z[j*NX+i+1],Z[(j-1)*NX+i],Z[(j+1)*NX+i]].filter(v=>v>-50);if(nb.length>=3)Z[j*NX+i]=nb.reduce((a,b)=>a+b)/nb.length}
let top=0;for(let v=0;v<nv;v++)if(Math.abs(BP[v*3])<.15&&Math.abs(BP[v*3+2])<.2)top=Math.max(top,BP[v*3+1]);
const HN=190,hw=new Float32Array(HN);for(let v=0;v<nv;v++){const x=Math.abs(BP[v*3]);if(x>1.2)continue;const j=Math.round(BP[v*3+1]/.02);if(j>=0&&j<HN)hw[j]=Math.max(hw[j],x)}
for(let it=0;it<5;it++)for(let j=1;j<HN-1;j++)if(!hw[j])hw[j]=(hw[j-1]+hw[j+1])/2;
const PN=96,PD=.04,prof=new Float32Array(PN*3).fill(0),zfm=new Float32Array(PN).fill(-9),zbm=new Float32Array(PN).fill(9);
for(let v=0;v<nv;v++){const x=Math.abs(BP[v*3]),j=Math.round(BP[v*3+1]/PD);if(j<0||j>=PN)continue;if(x<=1.2)prof[j*3]=Math.max(prof[j*3],x);if(x<.25){zfm[j]=Math.max(zfm[j],BP[v*3+2]);zbm[j]=Math.min(zbm[j],BP[v*3+2])}}
for(let j=0;j<PN;j++){prof[j*3+1]=zfm[j]>-8?zfm[j]:0;prof[j*3+2]=zbm[j]<8?zbm[j]:0}
console.log('  top',top.toFixed(2));
const info={zt:{x0:X0,x1:X1,y0:Y0,y1:Y1,nx:NX,ny:NY,d:b64(Z)},top,hatZ:0,hw:b64(hw),hwDy:.02,prof:{dy:PD,n:PN,d:b64(prof)}};
fs.writeFileSync(path.join(OUT,'mouse.json'),JSON.stringify({parts,info,rig:{bones:BONES.map(([n,p,pos])=>({n,p,pos}))}}));
// the supplied ear gradient texture (7 KB), embedded by tools/mkassets.cjs
const tex=path.join(path.dirname(process.argv[2]),'textures','naishu-ear.png');if(fs.existsSync(tex))fs.copyFileSync(tex,path.join(OUT,'naishu-ear.png'));
console.log('written');
