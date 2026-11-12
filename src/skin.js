import * as THREE from 'three';

/* The supplied PBR set (albedo / normal / roughness) belongs to the 奶蛙 mesh's UV layout. Characters that have no UVs of
   their own (the egg, and the extra parts of the frog-derived pets) borrow a smooth, plain-yellow patch of that atlas, so
   every character is shaded by the very same textures and ends up the same colour as 奶蛙. */

export const SKIN_UV={u0:.10,u1:.22,v0:.085,v1:.165};
export const CREAM_UV={u0:.60,u1:.74,v0:.66,v1:.78}; // the pale belly disc of the atlas

let T=null;
export function skinTextures(){
  if(!T){
    const tl=new THREE.TextureLoader();
    const albedo=tl.load(window.ASSETS.albedo);albedo.colorSpace=THREE.SRGBColorSpace;albedo.anisotropy=4;
    T={albedo,normal:tl.load(window.ASSETS.normal),rough:tl.load(window.ASSETS.rough)};
  }
  return T;
}

/* map a geometry's UVs into the plain-yellow patch: from existing uv (0..1) when `planar` is not given,
   otherwise from a planar projection of the positions (x,y normalised by `planar`=[cx,cy,w,h]) */
export function patchUV(geo,planar,rect=SKIN_UV){
  const {u0,u1,v0,v1}=rect,P=geo.attributes.position,n=P.count,uv=new Float32Array(n*2),old=geo.attributes.uv;
  for(let i=0;i<n;i++){
    let a,b;
    if(planar){a=(P.getX(i)-planar[0])/planar[2]+.5;b=(P.getY(i)-planar[1])/planar[3]+.5}
    else if(old){a=old.getX(i);b=old.getY(i)}else{a=.5;b=.5}
    uv[i*2]=u0+Math.min(1,Math.max(0,a))*(u1-u0);uv[i*2+1]=v0+Math.min(1,Math.max(0,b))*(v1-v0);
  }
  geo.setAttribute('uv',new THREE.BufferAttribute(uv,2));
  return geo;
}

/* the textured skin material (tint multiplies the albedo; physical params are optional) */
export function skinMaterial(tint=0xffffff,physical=false,extra={}){
  const t=skinTextures();
  const o={map:t.albedo,normalMap:t.normal,normalScale:new THREE.Vector2(1,1),roughnessMap:t.rough,roughness:1,metalness:0,color:tint,...extra};
  return physical?new THREE.MeshPhysicalMaterial(o):new THREE.MeshStandardMaterial(o);
}

/* average sRGB colour (0..255) of the yellow patch, delivered once the image has decoded */
let avg=null;const waiting=[];
export function onSkinColor(cb){
  if(avg){cb(avg);return}
  waiting.push(cb);if(waiting.length>1)return;
  const im=new Image();
  im.onload=()=>{
    const c=document.createElement('canvas'),w=im.width,h=im.height,{u0,u1,v0,v1}=SKIN_UV;
    const sx=Math.floor(u0*w),sy=Math.floor((1-v1)*h),sw=Math.max(1,Math.floor((u1-u0)*w)),sh=Math.max(1,Math.floor((v1-v0)*h));
    c.width=sw;c.height=sh;const g=c.getContext('2d',{willReadFrequently:true});g.drawImage(im,sx,sy,sw,sh,0,0,sw,sh);
    const d=g.getImageData(0,0,sw,sh).data;let r=0,gg=0,b=0,k=0;for(let i=0;i<d.length;i+=4){r+=d[i];gg+=d[i+1];b+=d[i+2];k++}
    avg=[Math.round(r/k),Math.round(gg/k),Math.round(b/k)];waiting.splice(0).forEach(f=>f(avg));
  };
  im.src=window.ASSETS.albedo;
}
