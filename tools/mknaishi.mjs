// Converts the supplied rigged 奶屎 (NaiShi) GLB into a light game asset: assets/pets/naishi.json.
//   - the 85k-vertex body is decimated by vertex clustering (skin weights are averaged per cluster, top 4 joints kept)
//   - the eyes / pupils / smile meshes are kept as they are; skeleton = node hierarchy + inverse bind matrices from the file
// Run: node tools/mknaishi.mjs <path to naishi-rigged.glb> [cell]
import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';
const OUT=path.join(path.dirname(fileURLToPath(import.meta.url)),'..','assets','pets');
const buf=fs.readFileSync(process.argv[2]),CELL=+process.argv[3]||.032;
const jl=buf.readUInt32LE(12),J=JSON.parse(buf.slice(20,20+jl).toString()),bin=buf.slice(20+jl+8);
const CT={5120:[1,'readInt8'],5121:[1,'readUInt8'],5122:[2,'readInt16LE'],5123:[2,'readUInt16LE'],5125:[4,'readUInt32LE'],5126:[4,'readFloatLE']};
const NC={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT4:16};
function acc(i){const a=J.accessors[i],bv=J.bufferViews[a.bufferView],off=(bv.byteOffset||0)+(a.byteOffset||0),nc=NC[a.type],[sz,fn]=CT[a.componentType],stride=bv.byteStride||sz*nc,out=new Float64Array(a.count*nc);
  const nrm=a.normalized?{5121:255,5123:65535,5120:127,5122:32767}[a.componentType]:1;
  for(let k=0;k<a.count;k++)for(let c=0;c<nc;c++)out[k*nc+c]=bin[fn](off+k*stride+c*sz)/nrm;return out}
const skin=J.skins[0],JN=skin.joints;                       // JN[j] = node index of joint j
const ibm=acc(skin.inverseBindMatrices);
const bones=JN.map(n=>{const nd=J.nodes[n];const par=J.nodes.findIndex(x=>(x.children||[]).includes(n));
  return{n:nd.name,p:JN.indexOf(par),t:nd.translation||[0,0,0],q:nd.rotation||[0,0,0,1],s:nd.scale||[1,1,1]}});
const meshOf=name=>J.nodes.find(x=>x.name===name);
const primOf=nodeName=>{const nd=J.nodes.find(x=>x.name===nodeName),p=J.meshes[nd.mesh].primitives[0],
  g={P:acc(p.attributes.POSITION),N:acc(p.attributes.NORMAL),U:p.attributes.TEXCOORD_0!=null?acc(p.attributes.TEXCOORD_0):null,SI:acc(p.attributes.JOINTS_0),SW:acc(p.attributes.WEIGHTS_0),I:acc(p.indices),mat:J.materials[p.material]};return g};

function cluster(g,cell){
  const n=g.P.length/3,id=new Int32Array(n),map=new Map(),cp=[],cn=[],cw=[],cc=[];
  for(let v=0;v<n;v++){const k=Math.round(g.P[v*3]/cell)+','+Math.round(g.P[v*3+1]/cell)+','+Math.round(g.P[v*3+2]/cell);let c=map.get(k);
    if(c===undefined){c=cc.length;map.set(k,c);cp.push(0,0,0);cn.push(0,0,0);cw.push(new Map());cc.push(0)}
    id[v]=c;cc[c]++;for(let a=0;a<3;a++){cp[c*3+a]+=g.P[v*3+a];cn[c*3+a]+=g.N[v*3+a]}
    for(let k4=0;k4<4;k4++){const w=g.SW[v*4+k4];if(w>0){const j=g.SI[v*4+k4];cw[c].set(j,(cw[c].get(j)||0)+w)}}}
  const m=cc.length,P=new Float32Array(m*3),N=new Float32Array(m*3),SI=new Uint8Array(m*4),SW=new Uint8Array(m*4);
  for(let c=0;c<m;c++){const k=cc[c],l=Math.hypot(cn[c*3],cn[c*3+1],cn[c*3+2])||1;for(let a=0;a<3;a++){P[c*3+a]=cp[c*3+a]/k;N[c*3+a]=cn[c*3+a]/l}
    const top=[...cw[c].entries()].sort((a,b)=>b[1]-a[1]).slice(0,4),sum=top.reduce((s,x)=>s+x[1],0)||1;
    top.forEach(([j,w],i)=>{SI[c*4+i]=j;SW[c*4+i]=Math.round(w/sum*255)});
    const t=SW[c*4]+SW[c*4+1]+SW[c*4+2]+SW[c*4+3];SW[c*4]+=255-t}
  const seen=new Set(),idx=[];
  for(let t=0;t<g.I.length;t+=3){const a=id[g.I[t]],b=id[g.I[t+1]],c=id[g.I[t+2]];if(a===b||b===c||a===c)continue;
    const key=[a,b,c].sort((x,y)=>x-y).join(',');if(seen.has(key))continue;seen.add(key);idx.push(a,b,c)}
  return{P,N,SI,SW,I:Uint32Array.from(idx),mat:g.mat};
}
const b64=a=>Buffer.from(a.buffer,a.byteOffset,a.byteLength).toString('base64');
function pack(name,g,kind){
  const n=g.P.length/3,min=[1e9,1e9,1e9],max=[-1e9,-1e9,-1e9];
  for(let v=0;v<n;v++)for(let a=0;a<3;a++){min[a]=Math.min(min[a],g.P[v*3+a]);max[a]=Math.max(max[a],g.P[v*3+a])}
  const sz=[0,1,2].map(a=>Math.max(1e-6,max[a]-min[a])),q=new Int16Array(n*3),nn=new Int16Array(n*3);
  for(let v=0;v<n;v++)for(let a=0;a<3;a++){q[v*3+a]=Math.round((g.P[v*3+a]-min[a])/sz[a]*65535-32768);nn[v*3+a]=Math.round(g.N[v*3+a]*32767)}
  const SI=g.SI instanceof Uint8Array?g.SI:Uint8Array.from(g.SI),SW=g.SW instanceof Uint8Array?g.SW:Uint8Array.from(g.SW,w=>Math.round(w*255));
  const idx=n<65536?new Uint16Array(g.I):new Uint32Array(g.I);
  const mat=g.mat,pb=mat.pbrMetallicRoughness;
  console.log('  ',name.padEnd(8),'verts',n,'tris',g.I.length/3);
  return{n:name,kind,min,size:sz,P:b64(q),N:b64(nn),SI:b64(SI),SW:b64(SW),I:b64(idx),idx32:n>=65536,color:pb.baseColorFactor.slice(0,3),rough:pb.roughnessFactor,spec:(mat.extensions?.KHR_materials_specular?.specularFactor)??.5,
    bb:{min,max}};
}
const body=cluster(primOf('01 | continuous volumetric coil body'),CELL);
const parts=[pack('body',body,'body'),
  pack('eyeL',primOf('02 | green eye L'),'eye'),pack('eyeR',primOf('02 | green eye R'),'eye'),
  pack('pupilL',primOf('03 | pupil L'),'pupil'),pack('pupilR',primOf('03 | pupil R'),'pupil'),
  pack('mouth',primOf('04 | subtle smile · weighted mouth corners'),'mouth')];
fs.writeFileSync(path.join(OUT,'naishi.json'),JSON.stringify({bones,ibm:Array.from(ibm,v=>+v.toFixed(6)),parts}));
console.log('wrote naishi.json',(fs.statSync(path.join(OUT,'naishi.json')).size/1e6).toFixed(2),'MB');
void meshOf;
