import fs from 'fs';
import * as THREE from 'three';
import {FBXLoader} from 'three/examples/jsm/loaders/FBXLoader.js';
import {mergeVertices} from 'three/examples/jsm/utils/BufferGeometryUtils.js';
globalThis.window={URL:{createObjectURL:()=>'x'}};globalThis.Blob=class{};
globalThis.document={createElementNS:()=>({style:{}}),createElement:()=>({getContext:()=>null,style:{}})};
THREE.TextureLoader.prototype.load=function(){return new THREE.Texture()};THREE.ImageLoader.prototype.load=function(){return {}};
const buf=fs.readFileSync(process.argv[2]);const ab=buf.buffer.slice(buf.byteOffset,buf.byteOffset+buf.byteLength);
const obj=new FBXLoader().parse(ab,'');
let mesh;obj.traverse(o=>{if(o.isSkinnedMesh)mesh=o});
mesh.skeleton.pose();obj.updateMatrixWorld(true);
const bones=mesh.skeleton.bones;
// bake to upright world, scale to 3.1 tall, feet at y=0, hips centred on x/z
const g=mesh.geometry.clone();g.applyMatrix4(mesh.bindMatrix);
g.computeBoundingBox();const bb=g.boundingBox,H=3.1,s=H/(bb.max.y-bb.min.y);
const WI=bones.map((b,i)=>mesh.skeleton.boneInverses[i].clone().invert());const hipsW=new THREE.Vector3().setFromMatrixPosition(WI[bones.findIndex(b=>b.name==='Hips')]);
const T=new THREE.Matrix4().makeScale(s,s,s).premultiply(new THREE.Matrix4().makeTranslation(-hipsW.x*s,-bb.min.y*s,-hipsW.z*s));
g.applyMatrix4(T);
g.deleteAttribute('color');
const mg=mergeVertices(g,1e-4);
mg.computeBoundingBox();console.log('baked bbox',mg.boundingBox.min.toArray().map(v=>+v.toFixed(2)),mg.boundingBox.max.toArray().map(v=>+v.toFixed(2)),'verts',mg.attributes.position.count,'tris',mg.index.count/3);
const names=bones.map(b=>b.name);
const out={bones:[],H};
const Wi=WI.map(m=>{const w=m.clone().premultiply(T),p=new THREE.Vector3(),q=new THREE.Quaternion(),sc=new THREE.Vector3();w.decompose(p,q,sc);return new THREE.Matrix4().compose(p,q,new THREE.Vector3(1,1,1))});
bones.forEach((b,i)=>{const p=b.parent&&b.parent.isBone?bones.indexOf(b.parent):-1;
  const L=p>=0?Wi[p].clone().invert().multiply(Wi[i]):Wi[i].clone();
  const pos=new THREE.Vector3(),q=new THREE.Quaternion(),sc=new THREE.Vector3();L.decompose(pos,q,sc);
  out.bones.push({n:b.name,p,pos:pos.toArray(),q:q.toArray()});});
const b64=(ta)=>Buffer.from(ta.buffer,ta.byteOffset,ta.byteLength).toString('base64');
const A=mg.attributes;
out.pos=b64(new Float32Array(A.position.array));out.nor=b64(new Float32Array(A.normal.array));out.uv=b64(new Float32Array(A.uv.array));
out.si=b64(new Uint16Array(A.skinIndex.array));out.sw=b64(new Float32Array(A.skinWeight.array));out.idx=b64(new Uint32Array(mg.index.array));
fs.writeFileSync(process.argv[3],JSON.stringify(out));
// print bind-pose bone world positions
for(const n of ['Hips','Spine','Spine1','Spine2','Neck','Head','Head_end','LeftShoulder','LeftArm','LeftForeArm','LeftHand','LeftHand_end','RightArm','RightHand','LeftUpLeg','LeftLeg','LeftFoot','LeftToeBase','LeftToeBase_end']){const i=names.indexOf(n);const v=new THREE.Vector3().setFromMatrixPosition(Wi[i]);console.log(n.padEnd(16),v.toArray().map(x=>+x.toFixed(2)).join(', '))}
// eye detection via dark texels
const raw=fs.readFileSync('../albedo2000.raw'),N=4096;
const pos=A.position.array,uv=A.uv.array,ix=mg.index.array;
const hits=[];
for(let t=0;t<ix.length;t+=3){let u=0,v=0,x=0,y=0,z=0;for(let k=0;k<3;k++){const j=ix[t+k];u+=uv[j*2]/3;v+=uv[j*2+1]/3;x+=pos[j*3]/3;y+=pos[j*3+1]/3;z+=pos[j*3+2]/3}
 const px=Math.min(N-1,Math.max(0,Math.floor(u*N))),py=Math.min(N-1,Math.max(0,Math.floor((1-v)*N)));const o=(py*N+px)*3,r=raw[o],gg=raw[o+1],b=raw[o+2];
 if(y>2.4&&Math.max(r,gg,b)<50)hits.push([x,y,z,'pupil']);else if(y>2.4&&gg>r+12&&b>r-10&&gg>150)hits.push([x,y,z,'ring'])}
for(const kind of ['pupil','ring'])for(const sgn of[-1,1]){const h=hits.filter(a=>a[3]===kind&&Math.sign(a[0])===sgn);if(!h.length){console.log(kind,sgn,'none');continue}
 const m=[0,1,2].map(i=>h.reduce((s,a)=>s+a[i],0)/h.length);console.log(kind,sgn,'n',h.length,'center',m.map(v=>+v.toFixed(3)))}
