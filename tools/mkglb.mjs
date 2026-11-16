// Packs a rigged GLB (skinned meshes + skeleton) into assets/pets/<name>.json for the game.
//   - meshes that share a material are merged into one part (fewer draw calls); eyes / pupils / smile stay separate (the face code drives them)
//   - big meshes can be decimated by vertex clustering (skin weights averaged, top 4 joints kept)
// Run: node tools/mkglb.mjs <glb> <name> [cell]      e.g. node tools/mkglb.mjs naixia-rigged.glb naixia
import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';
const OUT=path.join(path.dirname(fileURLToPath(import.meta.url)),'..','assets','pets');
const NAME=process.argv[3],CELL=+process.argv[4]||0;
const buf=fs.readFileSync(process.argv[2]);
const jl=buf.readUInt32LE(12),J=JSON.parse(buf.slice(20,20+jl).toString()),bin=buf.slice(20+jl+8);
const CT={5120:[1,'readInt8'],5121:[1,'readUInt8'],5122:[2,'readInt16LE'],5123:[2,'readUInt16LE'],5125:[4,'readUInt32LE'],5126:[4,'readFloatLE']};
const NC={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT4:16};
function acc(i){const a=J.accessors[i],bv=J.bufferViews[a.bufferView],off=(bv.byteOffset||0)+(a.byteOffset||0),nc=NC[a.type],[sz,fn]=CT[a.componentType],stride=bv.byteStride||sz*nc,out=new Float64Array(a.count*nc);
  const nrm=a.normalized?{5121:255,5123:65535,5120:127,5122:32767}[a.componentType]:1;
  for(let k=0;k<a.count;k++)for(let c=0;c<nc;c++)out[k*nc+c]=bin[fn](off+k*stride+c*sz)/nrm;return out}
const skin=J.skins[0],JN=skin.joints,ibm=acc(skin.inverseBindMatrices);
const bones=JN.map(n=>{const nd=J.nodes[n],par=J.nodes.findIndex(x=>(x.children||[]).includes(n));return{n:nd.name,p:JN.indexOf(par),t:nd.translation||[0,0,0],q:nd.rotation||[0,0,0,1],s:nd.scale||[1,1,1]}});

function merge(list){
  let nv=0,ni=0;for(const g of list){nv+=g.P.length/3;ni+=g.I.length}
  const P=new Float64Array(nv*3),N=new Float64Array(nv*3),SI=new Float64Array(nv*4),SW=new Float64Array(nv*4),I=new Uint32Array(ni);let vo=0,io=0;
  for(const g of list){P.set(g.P,vo*3);N.set(g.N,vo*3);SI.set(g.SI,vo*4);SW.set(g.SW,vo*4);for(let k=0;k<g.I.length;k++)I[io+k]=g.I[k]+vo;vo+=g.P.length/3;io+=g.I.length}
  return{P,N,SI,SW,I};
}
function cluster(g,cell){
  const n=g.P.length/3,id=new Int32Array(n),map=new Map(),cp=[],cn=[],cw=[],cc=[];
  for(let v=0;v<n;v++){const k=Math.round(g.P[v*3]/cell)+','+Math.round(g.P[v*3+1]/cell)+','+Math.round(g.P[v*3+2]/cell);let c=map.get(k);
    if(c===undefined){c=cc.length;map.set(k,c);cp.push(0,0,0);cn.push(0,0,0);cw.push(new Map());cc.push(0)}
    id[v]=c;cc[c]++;for(let a=0;a<3;a++){cp[c*3+a]+=g.P[v*3+a];cn[c*3+a]+=g.N[v*3+a]}
    for(let k4=0;k4<4;k4++){const w=g.SW[v*4+k4];if(w>0){const j=g.SI[v*4+k4];cw[c].set(j,(cw[c].get(j)||0)+w)}}}
  const m=cc.length,P=new Float32Array(m*3),N=new Float32Array(m*3),SI=new Uint8Array(m*4),SW=new Uint8Array(m*4);
  for(let c=0;c<m;c++){const k=cc[c],l=Math.hypot(cn[c*3],cn[c*3+1],cn[c*3+2])||1;for(let a=0;a<3;a++){P[c*3+a]=cp[c*3+a]/k;N[c*3+a]=cn[c*3+a]/l}
    const top=[...cw[c].entries()].sort((a,b)=>b[1]-a[1]).slice(0,4),sum=top.reduce((s,x)=>s+x[1],0)||1;
    top.forEach(([j,w],i)=>{SI[c*4+i]=j;SW[c*4+i]=Math.round(w/sum*255)});SW[c*4]+=255-(SW[c*4]+SW[c*4+1]+SW[c*4+2]+SW[c*4+3])}
  const seen=new Set(),idx=[];
  for(let t=0;t<g.I.length;t+=3){const a=id[g.I[t]],b=id[g.I[t+1]],c=id[g.I[t+2]];if(a===b||b===c||a===c)continue;
    const key=[a,b,c].sort((x,y)=>x-y).join(',');if(seen.has(key))continue;seen.add(key);idx.push(a,b,c)}
  return{P,N,SI,SW,I:Uint32Array.from(idx)};
}
const b64=a=>Buffer.from(a.buffer,a.byteOffset,a.byteLength).toString('base64');
function pack(name,kind,g,mat){
  const n=g.P.length/3,min=[1e9,1e9,1e9],max=[-1e9,-1e9,-1e9];
  for(let v=0;v<n;v++)for(let a=0;a<3;a++){min[a]=Math.min(min[a],g.P[v*3+a]);max[a]=Math.max(max[a],g.P[v*3+a])}
  const sz=[0,1,2].map(a=>Math.max(1e-6,max[a]-min[a])),q=new Int16Array(n*3),nn=new Int16Array(n*3);
  for(let v=0;v<n;v++)for(let a=0;a<3;a++){q[v*3+a]=Math.round((g.P[v*3+a]-min[a])/sz[a]*65535-32768);nn[v*3+a]=Math.round(g.N[v*3+a]*32767)}
  const SI=Uint8Array.from(g.SI),SW=g.SW instanceof Uint8Array?g.SW:Uint8Array.from(g.SW,w=>Math.round(w*255));
  const idx=n<65536?new Uint16Array(g.I):new Uint32Array(g.I),pb=mat.pbrMetallicRoughness;
  console.log('  ',name.padEnd(10),kind.padEnd(6),'verts',n,'tris',g.I.length/3);
  return{n:name,kind,min,size:sz,P:b64(q),N:b64(nn),SI:b64(SI),SW:b64(SW),I:b64(idx),idx32:n>=65536,color:(pb.baseColorFactor||[1,1,1]).slice(0,3),rough:pb.roughnessFactor??.6,bb:{min,max}};
}

const groups=new Map();   // key -> {name,kind,mat,list}
for(const nd of J.nodes){if(nd.mesh==null)continue;
  if(nd.translation||nd.rotation||nd.scale)console.warn('mesh node has a transform:',nd.name);
  const side=(nd.name.match(/ ([LR])$/)||[])[1]||'';
  J.meshes[nd.mesh].primitives.forEach(p=>{
    const mat=J.materials[p.material];
    const g={P:acc(p.attributes.POSITION),N:acc(p.attributes.NORMAL),SI:acc(p.attributes.JOINTS_0),SW:acc(p.attributes.WEIGHTS_0),I:acc(p.indices)};
    let key,name,kind;
    if(/pupil/i.test(nd.name)){name='pupil'+side;kind='pupil';key=name}
    else if(/eye/i.test(nd.name)){name='eye'+side;kind='eye';key=name}
    else if(/smile|mouth/i.test(nd.name)){name='mouth';kind='mouth';key=name}
    else{name='m'+p.material;kind=/milk|gold|yellow/i.test(mat.name)&&/NaiWa milk yellow/i.test(mat.name)?'skin':'flat';key=name}
    if(!groups.has(key))groups.set(key,{name,kind,mat,list:[]});groups.get(key).list.push(g);
  })}
const parts=[];
for(const {name,kind,mat,list} of groups.values()){let g=list.length>1?merge(list):list[0];if(CELL&&g.P.length/3>20000&&kind==='skin')g=cluster(g,CELL);parts.push(pack(name,kind,g,mat))}
fs.writeFileSync(path.join(OUT,NAME+'.json'),JSON.stringify({bones,ibm:Array.from(ibm,v=>+v.toFixed(6)),parts}));
console.log('wrote',NAME+'.json',(fs.statSync(path.join(OUT,NAME+'.json')).size/1e6).toFixed(2),'MB');
