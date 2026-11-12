(()=>{var of=0,fc=1,af=2;var jh=1,lf=2,ti=3,Ei=0,_n=1,qt=2;var vi=0,Es=1,dc=2,pc=3,mc=4,cf=5,Hi=100,hf=101,uf=102,gc=103,_c=104,ff=200,df=201,pf=202,mf=203,Xa=204,qa=205,gf=206,_f=207,xf=208,yf=209,vf=210,Mf=211,bf=212,Sf=213,Ef=214,wf=0,Tf=1,Af=2,oo=3,Rf=4,Cf=5,Pf=6,If=7,Qh=0,Lf=1,Uf=2,Mi=0,Df=1,Nf=2,Of=3,Nl=4,Ff=5,Bf=6,xc="attached",zf="detached",eu=300,As=301,Rs=302,Ya=303,Za=304,zo=306,Cs=1e3,Fn=1001,Ja=1002,en=1003,yc=1004;var aa=1005;var Tn=1006,Hf=1007;var ir=1008;var bi=1009,kf=1010,Gf=1011,Ol=1012,tu=1013,yi=1014,ii=1015,sr=1016,nu=1017,iu=1018,Gi=1020,Vf=1021,An=1023,Wf=1024,Xf=1025,Vi=1026,Ps=1027,qf=1028,su=1029,Yf=1030,ru=1031,ou=1033,la=33776,ca=33777,ha=33778,ua=33779,vc=35840,Mc=35841,bc=35842,Sc=35843,au=36196,Ec=37492,wc=37496,Tc=37808,Ac=37809,Rc=37810,Cc=37811,Pc=37812,Ic=37813,Lc=37814,Uc=37815,Dc=37816,Nc=37817,Oc=37818,Fc=37819,Bc=37820,zc=37821,fa=36492,Hc=36494,kc=36495,Zf=36283,Gc=36284,Vc=36285,Wc=36286;var ao=2300,lo=2301,da=2302,Xc=2400,qc=2401,Yc=2402;var lu=3e3,Wi=3001,Jf=3200,$f=3201,cu=0,Kf=1,Rn="",Et="srgb",ri="srgb-linear",Fl="display-p3",Ho="display-p3-linear",co="linear",Ft="srgb",ho="rec709",uo="p3";var ss=7680;var Zc=519,jf=512,Qf=513,ed=514,hu=515,td=516,nd=517,id=518,sd=519,Jc=35044;var $c="300 es",$a=1035,si=2e3,fo=2001,wi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var pa=Math.PI/180,Ka=180/Math.PI;function Ji(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]+"-"+sn[e&255]+sn[e>>8&255]+"-"+sn[e>>16&15|64]+sn[e>>24&255]+"-"+sn[t&63|128]+sn[t>>8&255]+"-"+sn[t>>16&255]+sn[t>>24&255]+sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]).toLowerCase()}function Qt(i,e,t){return Math.max(e,Math.min(t,i))}function rd(i,e){return(i%e+e)%e}function ma(i,e,t){return(1-t)*i+t*e}function Kc(i){return(i&i-1)===0&&i!==0}function ja(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ys(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function gn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Te=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Qt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ft=class i{constructor(e,t,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],p=n[5],g=n[8],_=s[0],m=s[3],d=s[6],S=s[1],x=s[4],y=s[7],U=s[2],R=s[5],C=s[8];return r[0]=o*_+a*S+l*U,r[3]=o*m+a*x+l*R,r[6]=o*d+a*y+l*C,r[1]=c*_+h*S+f*U,r[4]=c*m+h*x+f*R,r[7]=c*d+h*y+f*C,r[2]=u*_+p*S+g*U,r[5]=u*m+p*x+g*R,r[8]=u*d+p*y+g*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=h*o-a*c,u=a*l-h*r,p=c*r-o*l,g=t*f+n*u+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=f*_,e[1]=(s*c-h*n)*_,e[2]=(a*n-s*o)*_,e[3]=u*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=p*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ga.makeScale(e,t)),this}rotate(e){return this.premultiply(ga.makeRotation(-e)),this}translate(e,t){return this.premultiply(ga.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ga=new ft;function uu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function rr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function od(){let i=rr("canvas");return i.style.display="block",i}var jc={};function Qs(i){i in jc||(jc[i]=!0,console.warn(i))}var Qc=new ft().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),eh=new ft().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ir={[ri]:{transfer:co,primaries:ho,toReference:i=>i,fromReference:i=>i},[Et]:{transfer:Ft,primaries:ho,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Ho]:{transfer:co,primaries:uo,toReference:i=>i.applyMatrix3(eh),fromReference:i=>i.applyMatrix3(Qc)},[Fl]:{transfer:Ft,primaries:uo,toReference:i=>i.convertSRGBToLinear().applyMatrix3(eh),fromReference:i=>i.applyMatrix3(Qc).convertLinearToSRGB()}},ad=new Set([ri,Ho]),Ct={enabled:!0,_workingColorSpace:ri,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!ad.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=Ir[e].toReference,s=Ir[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Ir[i].primaries},getTransfer:function(i){return i===Rn?co:Ir[i].transfer}};function ws(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function _a(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var rs,po=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{rs===void 0&&(rs=rr("canvas")),rs.width=e.width,rs.height=e.height;let n=rs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=rs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=rr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ws(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ws(t[n]/255)*255):t[n]=ws(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},ld=0,mo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ld++}),this.uuid=Ji(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(xa(s[o].image)):r.push(xa(s[o]))}else r=xa(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function xa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?po.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var cd=0,xn=class i extends wi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Fn,s=Fn,r=Tn,o=ir,a=An,l=bi,c=i.DEFAULT_ANISOTROPY,h=Rn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cd++}),this.uuid=Ji(),this.name="",this.source=new mo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Te(0,0),this.repeat=new Te(1,1),this.center=new Te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Qs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Wi?Et:Rn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==eu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Cs:e.x=e.x-Math.floor(e.x);break;case Fn:e.x=e.x<0?0:1;break;case Ja:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Cs:e.y=e.y-Math.floor(e.y);break;case Fn:e.y=e.y<0?0:1;break;case Ja:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Qs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Et?Wi:lu}set encoding(e){Qs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Wi?Et:Rn}};xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=eu;xn.DEFAULT_ANISOTROPY=1;var yt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],f=l[8],u=l[1],p=l[5],g=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(c+1)/2,y=(p+1)/2,U=(d+1)/2,R=(h+u)/4,C=(f+_)/4,K=(g+m)/4;return x>y&&x>U?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=R/n,r=C/n):y>U?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=R/s,r=K/s):U<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(U),n=C/r,s=K/r),this.set(n,s,r,t),this}let S=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(f-_)/S,this.z=(u-h)/S,this.w=Math.acos((c+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Qa=class extends wi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t);let s={width:e,height:t,depth:1};n.encoding!==void 0&&(Qs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Wi?Et:Rn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new xn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new mo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},oi=class extends Qa{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},go=class extends xn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var el=class extends xn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var hn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],u=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f;return}if(a===1){e[t+0]=u,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==u||c!==p||h!==g){let m=1-a,d=l*u+c*p+h*g+f*_,S=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){let U=Math.sqrt(x),R=Math.atan2(U,d*S);m=Math.sin(m*R)/U,a=Math.sin(a*R)/U}let y=a*S;if(l=l*m+u*y,c=c*m+p*y,h=h*m+g*y,f=f*m+_*y,m===1-a){let U=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=U,c*=U,h*=U,f*=U}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[o],u=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+h*f+l*p-c*u,e[t+1]=l*g+h*u+c*f-a*p,e[t+2]=c*g+h*p+a*u-l*f,e[t+3]=h*g-a*f-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),f=a(r/2),u=l(n/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=u*h*f+c*p*g,this._y=c*p*f-u*h*g,this._z=c*h*g+u*p*f,this._w=c*h*f-u*p*g;break;case"YXZ":this._x=u*h*f+c*p*g,this._y=c*p*f-u*h*g,this._z=c*h*g-u*p*f,this._w=c*h*f+u*p*g;break;case"ZXY":this._x=u*h*f-c*p*g,this._y=c*p*f+u*h*g,this._z=c*h*g+u*p*f,this._w=c*h*f-u*p*g;break;case"ZYX":this._x=u*h*f-c*p*g,this._y=c*p*f+u*h*g,this._z=c*h*g-u*p*f,this._w=c*h*f+u*p*g;break;case"YZX":this._x=u*h*f+c*p*g,this._y=c*p*f+u*h*g,this._z=c*h*g-u*p*f,this._w=c*h*f-u*p*g;break;case"XZY":this._x=u*h*f-c*p*g,this._y=c*p*f-u*h*g,this._z=c*h*g+u*p*f,this._w=c*h*f+u*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],f=t[10],u=n+a+f;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>f){let p=2*Math.sqrt(1+n-a-f);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>f){let p=2*Math.sqrt(1+a-n-f);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+f-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),f=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=o*f+this._w*u,this._x=n*f+this._x*u,this._y=s*f+this._y*u,this._z=r*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(th.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(th.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),f=2*(r*n-o*t);return this.x=t+l*c+o*f-a*h,this.y=n+l*h+a*c-r*f,this.z=s+l*f+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ya.copy(this).projectOnVector(e),this.sub(ya)}reflect(e){return this.sub(ya.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Qt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ya=new P,th=new hn,Ti=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Dn):Dn.fromBufferAttribute(r,o),Dn.applyMatrix4(e.matrixWorld),this.expandByPoint(Dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Lr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Lr.copy(n.boundingBox)),Lr.applyMatrix4(e.matrixWorld),this.union(Lr)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Dn),Dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zs),Ur.subVectors(this.max,Zs),os.subVectors(e.a,Zs),as.subVectors(e.b,Zs),ls.subVectors(e.c,Zs),pi.subVectors(as,os),mi.subVectors(ls,as),Ni.subVectors(os,ls);let t=[0,-pi.z,pi.y,0,-mi.z,mi.y,0,-Ni.z,Ni.y,pi.z,0,-pi.x,mi.z,0,-mi.x,Ni.z,0,-Ni.x,-pi.y,pi.x,0,-mi.y,mi.x,0,-Ni.y,Ni.x,0];return!va(t,os,as,ls,Ur)||(t=[1,0,0,0,1,0,0,0,1],!va(t,os,as,ls,Ur))?!1:(Dr.crossVectors(pi,mi),t=[Dr.x,Dr.y,Dr.z],va(t,os,as,ls,Ur))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($n),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},$n=[new P,new P,new P,new P,new P,new P,new P,new P],Dn=new P,Lr=new Ti,os=new P,as=new P,ls=new P,pi=new P,mi=new P,Ni=new P,Zs=new P,Ur=new P,Dr=new P,Oi=new P;function va(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Oi.fromArray(i,r);let a=s.x*Math.abs(Oi.x)+s.y*Math.abs(Oi.y)+s.z*Math.abs(Oi.z),l=e.dot(Oi),c=t.dot(Oi),h=n.dot(Oi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var hd=new Ti,Js=new P,Ma=new P,Ai=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):hd.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Js.subVectors(e,this.center);let t=Js.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Js,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ma.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Js.copy(e.center).add(Ma)),this.expandByPoint(Js.copy(e.center).sub(Ma))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Kn=new P,ba=new P,Nr=new P,gi=new P,Sa=new P,Or=new P,Ea=new P,Is=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Kn.copy(this.origin).addScaledVector(this.direction,t),Kn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ba.copy(e).add(t).multiplyScalar(.5),Nr.copy(t).sub(e).normalize(),gi.copy(this.origin).sub(ba);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Nr),a=gi.dot(this.direction),l=-gi.dot(Nr),c=gi.lengthSq(),h=Math.abs(1-o*o),f,u,p,g;if(h>0)if(f=o*l-a,u=o*a-l,g=r*h,f>=0)if(u>=-g)if(u<=g){let _=1/h;f*=_,u*=_,p=f*(f+o*u+2*a)+u*(o*f+u+2*l)+c}else u=r,f=Math.max(0,-(o*u+a)),p=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(o*u+a)),p=-f*f+u*(u+2*l)+c;else u<=-g?(f=Math.max(0,-(-o*r+a)),u=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+u*(u+2*l)+c):u<=g?(f=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(f=Math.max(0,-(o*r+a)),u=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+u*(u+2*l)+c);else u=o>0?-r:r,f=Math.max(0,-(o*u+a)),p=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(ba).addScaledVector(Nr,u),p}intersectSphere(e,t){Kn.subVectors(e.center,this.origin);let n=Kn.dot(this.direction),s=Kn.dot(Kn)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(a=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Kn)!==null}intersectTriangle(e,t,n,s,r){Sa.subVectors(t,e),Or.subVectors(n,e),Ea.crossVectors(Sa,Or);let o=this.direction.dot(Ea),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;gi.subVectors(this.origin,e);let l=a*this.direction.dot(Or.crossVectors(gi,Or));if(l<0)return null;let c=a*this.direction.dot(Sa.cross(gi));if(c<0||l+c>o)return null;let h=-a*gi.dot(Ea);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},vt=class i{constructor(e,t,n,s,r,o,a,l,c,h,f,u,p,g,_,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,f,u,p,g,_,m)}set(e,t,n,s,r,o,a,l,c,h,f,u,p,g,_,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=h,d[10]=f,d[14]=u,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/cs.setFromMatrixColumn(e,0).length(),r=1/cs.setFromMatrixColumn(e,1).length(),o=1/cs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let u=o*h,p=o*f,g=a*h,_=a*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=p+g*c,t[5]=u-_*c,t[9]=-a*l,t[2]=_-u*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){let u=l*h,p=l*f,g=c*h,_=c*f;t[0]=u+_*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=_+u*a,t[10]=o*l}else if(e.order==="ZXY"){let u=l*h,p=l*f,g=c*h,_=c*f;t[0]=u-_*a,t[4]=-o*f,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=_-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let u=o*h,p=o*f,g=a*h,_=a*f;t[0]=l*h,t[4]=g*c-p,t[8]=u*c+_,t[1]=l*f,t[5]=_*c+u,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let u=o*l,p=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=_-u*f,t[8]=g*f+p,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=p*f+g,t[10]=u-_*f}else if(e.order==="XZY"){let u=o*l,p=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=u*f+_,t[5]=o*h,t[9]=p*f-g,t[2]=g*f-p,t[6]=a*h,t[10]=_*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ud,e,fd)}lookAt(e,t,n){let s=this.elements;return bn.subVectors(e,t),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),_i.crossVectors(n,bn),_i.lengthSq()===0&&(Math.abs(n.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),_i.crossVectors(n,bn)),_i.normalize(),Fr.crossVectors(bn,_i),s[0]=_i.x,s[4]=Fr.x,s[8]=bn.x,s[1]=_i.y,s[5]=Fr.y,s[9]=bn.y,s[2]=_i.z,s[6]=Fr.z,s[10]=bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],p=n[13],g=n[2],_=n[6],m=n[10],d=n[14],S=n[3],x=n[7],y=n[11],U=n[15],R=s[0],C=s[4],K=s[8],w=s[12],A=s[1],q=s[5],re=s[9],X=s[13],L=s[2],O=s[6],k=s[10],Y=s[14],Q=s[3],J=s[7],ne=s[11],V=s[15];return r[0]=o*R+a*A+l*L+c*Q,r[4]=o*C+a*q+l*O+c*J,r[8]=o*K+a*re+l*k+c*ne,r[12]=o*w+a*X+l*Y+c*V,r[1]=h*R+f*A+u*L+p*Q,r[5]=h*C+f*q+u*O+p*J,r[9]=h*K+f*re+u*k+p*ne,r[13]=h*w+f*X+u*Y+p*V,r[2]=g*R+_*A+m*L+d*Q,r[6]=g*C+_*q+m*O+d*J,r[10]=g*K+_*re+m*k+d*ne,r[14]=g*w+_*X+m*Y+d*V,r[3]=S*R+x*A+y*L+U*Q,r[7]=S*C+x*q+y*O+U*J,r[11]=S*K+x*re+y*k+U*ne,r[15]=S*w+x*X+y*Y+U*V,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],f=e[6],u=e[10],p=e[14],g=e[3],_=e[7],m=e[11],d=e[15];return g*(+r*l*f-s*c*f-r*a*u+n*c*u+s*a*p-n*l*p)+_*(+t*l*p-t*c*u+r*o*u-s*o*p+s*c*h-r*l*h)+m*(+t*c*f-t*a*p-r*o*f+n*o*p+r*a*h-n*c*h)+d*(-s*a*h-t*l*f+t*a*u+s*o*f-n*o*u+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=e[9],u=e[10],p=e[11],g=e[12],_=e[13],m=e[14],d=e[15],S=f*m*c-_*u*c+_*l*p-a*m*p-f*l*d+a*u*d,x=g*u*c-h*m*c-g*l*p+o*m*p+h*l*d-o*u*d,y=h*_*c-g*f*c+g*a*p-o*_*p-h*a*d+o*f*d,U=g*f*l-h*_*l-g*a*u+o*_*u+h*a*m-o*f*m,R=t*S+n*x+s*y+r*U;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/R;return e[0]=S*C,e[1]=(_*u*r-f*m*r-_*s*p+n*m*p+f*s*d-n*u*d)*C,e[2]=(a*m*r-_*l*r+_*s*c-n*m*c-a*s*d+n*l*d)*C,e[3]=(f*l*r-a*u*r-f*s*c+n*u*c+a*s*p-n*l*p)*C,e[4]=x*C,e[5]=(h*m*r-g*u*r+g*s*p-t*m*p-h*s*d+t*u*d)*C,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*d-t*l*d)*C,e[7]=(o*u*r-h*l*r+h*s*c-t*u*c-o*s*p+t*l*p)*C,e[8]=y*C,e[9]=(g*f*r-h*_*r-g*n*p+t*_*p+h*n*d-t*f*d)*C,e[10]=(o*_*r-g*a*r+g*n*c-t*_*c-o*n*d+t*a*d)*C,e[11]=(h*a*r-o*f*r-h*n*c+t*f*c+o*n*p-t*a*p)*C,e[12]=U*C,e[13]=(h*_*s-g*f*s+g*n*u-t*_*u-h*n*m+t*f*m)*C,e[14]=(g*a*s-o*_*s-g*n*l+t*_*l+o*n*m-t*a*m)*C,e[15]=(o*f*s-h*a*s+h*n*l-t*f*l-o*n*u+t*a*u)*C,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,f=a+a,u=r*c,p=r*h,g=r*f,_=o*h,m=o*f,d=a*f,S=l*c,x=l*h,y=l*f,U=n.x,R=n.y,C=n.z;return s[0]=(1-(_+d))*U,s[1]=(p+y)*U,s[2]=(g-x)*U,s[3]=0,s[4]=(p-y)*R,s[5]=(1-(u+d))*R,s[6]=(m+S)*R,s[7]=0,s[8]=(g+x)*C,s[9]=(m-S)*C,s[10]=(1-(u+_))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=cs.set(s[0],s[1],s[2]).length(),o=cs.set(s[4],s[5],s[6]).length(),a=cs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Nn.copy(this);let c=1/r,h=1/o,f=1/a;return Nn.elements[0]*=c,Nn.elements[1]*=c,Nn.elements[2]*=c,Nn.elements[4]*=h,Nn.elements[5]*=h,Nn.elements[6]*=h,Nn.elements[8]*=f,Nn.elements[9]*=f,Nn.elements[10]*=f,t.setFromRotationMatrix(Nn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=si){let l=this.elements,c=2*r/(t-e),h=2*r/(n-s),f=(t+e)/(t-e),u=(n+s)/(n-s),p,g;if(a===si)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===fo)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=si){let l=this.elements,c=1/(t-e),h=1/(n-s),f=1/(o-r),u=(t+e)*c,p=(n+s)*h,g,_;if(a===si)g=(o+r)*f,_=-2*f;else if(a===fo)g=r*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},cs=new P,Nn=new vt,ud=new P(0,0,0),fd=new P(1,1,1),_i=new P,Fr=new P,bn=new P,nh=new vt,ih=new hn,_o=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Qt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return nh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(nh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ih.setFromEuler(this),this.setFromQuaternion(ih,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};_o.DEFAULT_ORDER="XYZ";var or=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},dd=0,sh=new P,hs=new hn,jn=new vt,Br=new P,$s=new P,pd=new P,md=new hn,rh=new P(1,0,0),oh=new P(0,1,0),ah=new P(0,0,1),gd={type:"added"},_d={type:"removed"},Yt=class i extends wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dd++}),this.uuid=Ji(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new P,t=new _o,n=new hn,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new vt},normalMatrix:{value:new ft}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new or,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hs.setFromAxisAngle(e,t),this.quaternion.multiply(hs),this}rotateOnWorldAxis(e,t){return hs.setFromAxisAngle(e,t),this.quaternion.premultiply(hs),this}rotateX(e){return this.rotateOnAxis(rh,e)}rotateY(e){return this.rotateOnAxis(oh,e)}rotateZ(e){return this.rotateOnAxis(ah,e)}translateOnAxis(e,t){return sh.copy(e).applyQuaternion(this.quaternion),this.position.add(sh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(rh,e)}translateY(e){return this.translateOnAxis(oh,e)}translateZ(e){return this.translateOnAxis(ah,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Br.copy(e):Br.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),$s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt($s,Br,this.up):jn.lookAt(Br,$s,this.up),this.quaternion.setFromRotationMatrix(jn),s&&(jn.extractRotation(s.matrixWorld),hs.setFromRotationMatrix(jn),this.quaternion.premultiply(hs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(gd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_d)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(jn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,e,pd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,md,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),f=o(e.shapes),u=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Yt.DEFAULT_UP=new P(0,1,0);Yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var On=new P,Qn=new P,wa=new P,ei=new P,us=new P,fs=new P,lh=new P,Ta=new P,Aa=new P,Ra=new P,zr=!1,vs=class i{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),On.subVectors(e,t),s.cross(On);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){On.subVectors(s,t),Qn.subVectors(n,t),wa.subVectors(e,t);let o=On.dot(On),a=On.dot(Qn),l=On.dot(wa),c=Qn.dot(Qn),h=Qn.dot(wa),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;let u=1/f,p=(c*l-a*h)*u,g=(o*h-a*l)*u;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ei)===null?!1:ei.x>=0&&ei.y>=0&&ei.x+ei.y<=1}static getUV(e,t,n,s,r,o,a,l){return zr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),zr=!0),this.getInterpolation(e,t,n,s,r,o,a,l)}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ei.x),l.addScaledVector(o,ei.y),l.addScaledVector(a,ei.z),l)}static isFrontFacing(e,t,n,s){return On.subVectors(n,t),Qn.subVectors(e,t),On.cross(Qn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return On.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),On.cross(Qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return zr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),zr=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;us.subVectors(s,n),fs.subVectors(r,n),Ta.subVectors(e,n);let l=us.dot(Ta),c=fs.dot(Ta);if(l<=0&&c<=0)return t.copy(n);Aa.subVectors(e,s);let h=us.dot(Aa),f=fs.dot(Aa);if(h>=0&&f<=h)return t.copy(s);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(us,o);Ra.subVectors(e,r);let p=us.dot(Ra),g=fs.dot(Ra);if(g>=0&&p<=g)return t.copy(r);let _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(fs,a);let m=h*g-p*f;if(m<=0&&f-h>=0&&p-g>=0)return lh.subVectors(r,s),a=(f-h)/(f-h+(p-g)),t.copy(s).addScaledVector(lh,a);let d=1/(m+_+u);return o=_*d,a=u*d,t.copy(n).addScaledVector(us,o).addScaledVector(fs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},fu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xi={h:0,s:0,l:0},Hr={h:0,s:0,l:0};function Ca(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var ct=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Et){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Ct.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ct.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Ct.workingColorSpace){if(e=rd(e,1),t=Qt(t,0,1),n=Qt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Ca(o,r,e+1/3),this.g=Ca(o,r,e),this.b=Ca(o,r,e-1/3)}return Ct.toWorkingColorSpace(this,s),this}setStyle(e,t=Et){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Et){let n=fu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ws(e.r),this.g=ws(e.g),this.b=ws(e.b),this}copyLinearToSRGB(e){return this.r=_a(e.r),this.g=_a(e.g),this.b=_a(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Et){return Ct.fromWorkingColorSpace(rn.copy(this),e),Math.round(Qt(rn.r*255,0,255))*65536+Math.round(Qt(rn.g*255,0,255))*256+Math.round(Qt(rn.b*255,0,255))}getHexString(e=Et){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ct.workingColorSpace){Ct.fromWorkingColorSpace(rn.copy(this),t);let n=rn.r,s=rn.g,r=rn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ct.workingColorSpace){return Ct.fromWorkingColorSpace(rn.copy(this),t),e.r=rn.r,e.g=rn.g,e.b=rn.b,e}getStyle(e=Et){Ct.fromWorkingColorSpace(rn.copy(this),e);let t=rn.r,n=rn.g,s=rn.b;return e!==Et?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(xi),this.setHSL(xi.h+e,xi.s+t,xi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(xi),e.getHSL(Hr);let n=ma(xi.h,Hr.h,t),s=ma(xi.s,Hr.s,t),r=ma(xi.l,Hr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},rn=new ct;ct.NAMES=fu;var xd=0,Ri=class extends wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xd++}),this.uuid=Ji(),this.name="",this.type="Material",this.blending=Es,this.side=Ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xa,this.blendDst=qa,this.blendEquation=Hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ct(0,0,0),this.blendAlpha=0,this.depthFunc=oo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ss,this.stencilZFail=ss,this.stencilZPass=ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Es&&(n.blending=this.blending),this.side!==Ei&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Xa&&(n.blendSrc=this.blendSrc),this.blendDst!==qa&&(n.blendDst=this.blendDst),this.blendEquation!==Hi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==oo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ss&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ss&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ss&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Zt=class extends Ri{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Qh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Xt=new P,kr=new Te,bt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Jc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)kr.fromBufferAttribute(this,t),kr.applyMatrix3(e),this.setXY(t,kr.x,kr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix3(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ys(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=gn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ys(t,this.array)),t}setX(e,t){return this.normalized&&(t=gn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ys(t,this.array)),t}setY(e,t){return this.normalized&&(t=gn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ys(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ys(t,this.array)),t}setW(e,t){return this.normalized&&(t=gn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=gn(t,this.array),n=gn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=gn(t,this.array),n=gn(n,this.array),s=gn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=gn(t,this.array),n=gn(n,this.array),s=gn(s,this.array),r=gn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Jc&&(e.usage=this.usage),e}};var xo=class extends bt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var yo=class extends bt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ht=class extends bt{constructor(e,t,n){super(new Float32Array(e),t,n)}};var yd=0,wn=new vt,Pa=new Yt,ds=new P,Sn=new Ti,Ks=new Ti,jt=new P,Dt=class i extends wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yd++}),this.uuid=Ji(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(uu(e)?yo:xo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ft().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return wn.makeRotationFromQuaternion(e),this.applyMatrix4(wn),this}rotateX(e){return wn.makeRotationX(e),this.applyMatrix4(wn),this}rotateY(e){return wn.makeRotationY(e),this.applyMatrix4(wn),this}rotateZ(e){return wn.makeRotationZ(e),this.applyMatrix4(wn),this}translate(e,t,n){return wn.makeTranslation(e,t,n),this.applyMatrix4(wn),this}scale(e,t,n){return wn.makeScale(e,t,n),this.applyMatrix4(wn),this}lookAt(e){return Pa.lookAt(e),Pa.updateMatrix(),this.applyMatrix4(Pa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ds).negate(),this.translate(ds.x,ds.y,ds.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ht(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ti);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Sn.setFromBufferAttribute(r),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ai);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(e){let n=this.boundingSphere.center;if(Sn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Ks.setFromBufferAttribute(a),this.morphTargetsRelative?(jt.addVectors(Sn.min,Ks.min),Sn.expandByPoint(jt),jt.addVectors(Sn.max,Ks.max),Sn.expandByPoint(jt)):(Sn.expandByPoint(Ks.min),Sn.expandByPoint(Ks.max))}Sn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)jt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(jt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)jt.fromBufferAttribute(a,c),l&&(ds.fromBufferAttribute(e,c),jt.add(ds)),s=Math.max(s,n.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bt(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let A=0;A<a;A++)c[A]=new P,h[A]=new P;let f=new P,u=new P,p=new P,g=new Te,_=new Te,m=new Te,d=new P,S=new P;function x(A,q,re){f.fromArray(s,A*3),u.fromArray(s,q*3),p.fromArray(s,re*3),g.fromArray(o,A*2),_.fromArray(o,q*2),m.fromArray(o,re*2),u.sub(f),p.sub(f),_.sub(g),m.sub(g);let X=1/(_.x*m.y-m.x*_.y);isFinite(X)&&(d.copy(u).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(X),S.copy(p).multiplyScalar(_.x).addScaledVector(u,-m.x).multiplyScalar(X),c[A].add(d),c[q].add(d),c[re].add(d),h[A].add(S),h[q].add(S),h[re].add(S))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let A=0,q=y.length;A<q;++A){let re=y[A],X=re.start,L=re.count;for(let O=X,k=X+L;O<k;O+=3)x(n[O+0],n[O+1],n[O+2])}let U=new P,R=new P,C=new P,K=new P;function w(A){C.fromArray(r,A*3),K.copy(C);let q=c[A];U.copy(q),U.sub(C.multiplyScalar(C.dot(q))).normalize(),R.crossVectors(K,q);let X=R.dot(h[A])<0?-1:1;l[A*4]=U.x,l[A*4+1]=U.y,l[A*4+2]=U.z,l[A*4+3]=X}for(let A=0,q=y.length;A<q;++A){let re=y[A],X=re.start,L=re.count;for(let O=X,k=X+L;O<k;O+=3)w(n[O+0]),w(n[O+1]),w(n[O+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new bt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);let s=new P,r=new P,o=new P,a=new P,l=new P,c=new P,h=new P,f=new P;if(e)for(let u=0,p=e.count;u<p;u+=3){let g=e.getX(u+0),_=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=t.count;u<p;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)jt.fromBufferAttribute(e,t),jt.normalize(),e.setXYZ(t,jt.x,jt.y,jt.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,f=a.normalized,u=new c.constructor(l.length*h),p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*h;for(let d=0;d<h;d++)u[g++]=c[p++]}return new bt(u,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,f=c.length;h<f;h++){let u=c[h],p=e(u,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let p=c[f];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],f=r[c];for(let u=0,p=f.length;u<p;u++)h.push(f[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ch=new vt,Fi=new Is,Gr=new Ai,hh=new P,ps=new P,ms=new P,gs=new P,Ia=new P,Vr=new P,Wr=new Te,Xr=new Te,qr=new Te,uh=new P,fh=new P,dh=new P,Yr=new P,Zr=new P,ot=class extends Yt{constructor(e=new Dt,t=new Zt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Vr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],f=r[l];h!==0&&(Ia.fromBufferAttribute(f,e),o?Vr.addScaledVector(Ia,h):Vr.addScaledVector(Ia.sub(t),h))}t.add(Vr)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Gr.copy(n.boundingSphere),Gr.applyMatrix4(r),Fi.copy(e.ray).recast(e.near),!(Gr.containsPoint(Fi.origin)===!1&&(Fi.intersectSphere(Gr,hh)===null||Fi.origin.distanceToSquared(hh)>(e.far-e.near)**2))&&(ch.copy(r).invert(),Fi.copy(e.ray).applyMatrix4(ch),!(n.boundingBox!==null&&Fi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Fi)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){let m=u[g],d=o[m.materialIndex],S=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=S,U=x;y<U;y+=3){let R=a.getX(y),C=a.getX(y+1),K=a.getX(y+2);s=Jr(this,d,e,n,c,h,f,R,C,K),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){let S=a.getX(m),x=a.getX(m+1),y=a.getX(m+2);s=Jr(this,o,e,n,c,h,f,S,x,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){let m=u[g],d=o[m.materialIndex],S=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=S,U=x;y<U;y+=3){let R=y,C=y+1,K=y+2;s=Jr(this,d,e,n,c,h,f,R,C,K),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){let S=m,x=m+1,y=m+2;s=Jr(this,o,e,n,c,h,f,S,x,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function vd(i,e,t,n,s,r,o,a){let l;if(e.side===_n?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Ei,a),l===null)return null;Zr.copy(a),Zr.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Zr);return c<t.near||c>t.far?null:{distance:c,point:Zr.clone(),object:i}}function Jr(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,ps),i.getVertexPosition(l,ms),i.getVertexPosition(c,gs);let h=vd(i,e,t,n,ps,ms,gs,Yr);if(h){s&&(Wr.fromBufferAttribute(s,a),Xr.fromBufferAttribute(s,l),qr.fromBufferAttribute(s,c),h.uv=vs.getInterpolation(Yr,ps,ms,gs,Wr,Xr,qr,new Te)),r&&(Wr.fromBufferAttribute(r,a),Xr.fromBufferAttribute(r,l),qr.fromBufferAttribute(r,c),h.uv1=vs.getInterpolation(Yr,ps,ms,gs,Wr,Xr,qr,new Te),h.uv2=h.uv1),o&&(uh.fromBufferAttribute(o,a),fh.fromBufferAttribute(o,l),dh.fromBufferAttribute(o,c),h.normal=vs.getInterpolation(Yr,ps,ms,gs,uh,fh,dh,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new P,materialIndex:0};vs.getNormal(ps,ms,gs,f.normal),h.face=f}return h}var yn=class i extends Dt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],f=[],u=0,p=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ht(c,3)),this.setAttribute("normal",new ht(h,3)),this.setAttribute("uv",new ht(f,2));function g(_,m,d,S,x,y,U,R,C,K,w){let A=y/C,q=U/K,re=y/2,X=U/2,L=R/2,O=C+1,k=K+1,Y=0,Q=0,J=new P;for(let ne=0;ne<k;ne++){let V=ne*q-X;for(let le=0;le<O;le++){let W=le*A-re;J[_]=W*S,J[m]=V*x,J[d]=L,c.push(J.x,J.y,J.z),J[_]=0,J[m]=0,J[d]=R>0?1:-1,h.push(J.x,J.y,J.z),f.push(le/C),f.push(1-ne/K),Y+=1}}for(let ne=0;ne<K;ne++)for(let V=0;V<C;V++){let le=u+V+O*ne,W=u+V+O*(ne+1),j=u+(V+1)+O*(ne+1),me=u+(V+1)+O*ne;l.push(le,W,me),l.push(W,j,me),Q+=6}a.addGroup(p,Q,w),p+=Q,u+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ls(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function cn(i){let e={};for(let t=0;t<i.length;t++){let n=Ls(i[t]);for(let s in n)e[s]=n[s]}return e}function Md(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function du(i){return i.getRenderTarget()===null?i.outputColorSpace:Ct.workingColorSpace}var bd={clone:Ls,merge:cn},Sd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ed=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ai=class extends Ri{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sd,this.fragmentShader=Ed,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ls(e.uniforms),this.uniformsGroups=Md(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},vo=class extends Yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=si}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},on=class extends vo{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ka*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(pa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ka*2*Math.atan(Math.tan(pa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(pa*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},_s=-90,xs=1,tl=class extends Yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new on(_s,xs,e,t);s.layers=this.layers,this.add(s);let r=new on(_s,xs,e,t);r.layers=this.layers,this.add(r);let o=new on(_s,xs,e,t);o.layers=this.layers,this.add(o);let a=new on(_s,xs,e,t);a.layers=this.layers,this.add(a);let l=new on(_s,xs,e,t);l.layers=this.layers,this.add(l);let c=new on(_s,xs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===si)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===fo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(f,u,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Mo=class extends xn{constructor(e,t,n,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:As,super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},nl=class extends oi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(Qs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Wi?Et:Rn),this.texture=new Mo(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Tn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new yn(5,5,5),r=new ai({name:"CubemapFromEquirect",uniforms:Ls(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:_n,blending:vi});r.uniforms.tEquirect.value=t;let o=new ot(s,r),a=t.minFilter;return t.minFilter===ir&&(t.minFilter=Tn),new tl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},La=new P,wd=new P,Td=new ft,ni=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=La.subVectors(n,t).cross(wd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(La),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Td.getNormalMatrix(e),s=this.coplanarPoint(La).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Bi=new Ai,$r=new P,ar=class{constructor(e=new ni,t=new ni,n=new ni,s=new ni,r=new ni,o=new ni){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=si){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],f=s[6],u=s[7],p=s[8],g=s[9],_=s[10],m=s[11],d=s[12],S=s[13],x=s[14],y=s[15];if(n[0].setComponents(l-r,u-c,m-p,y-d).normalize(),n[1].setComponents(l+r,u+c,m+p,y+d).normalize(),n[2].setComponents(l+o,u+h,m+g,y+S).normalize(),n[3].setComponents(l-o,u-h,m-g,y-S).normalize(),n[4].setComponents(l-a,u-f,m-_,y-x).normalize(),t===si)n[5].setComponents(l+a,u+f,m+_,y+x).normalize();else if(t===fo)n[5].setComponents(a,f,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Bi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Bi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Bi)}intersectsSprite(e){return Bi.center.set(0,0,0),Bi.radius=.7071067811865476,Bi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Bi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if($r.x=s.normal.x>0?e.max.x:e.min.x,$r.y=s.normal.y>0?e.max.y:e.min.y,$r.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint($r)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function pu(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Ad(i,e){let t=e.isWebGL2,n=new WeakMap;function s(c,h){let f=c.array,u=c.usage,p=f.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,f,u),c.onUploadCallback();let _;if(f instanceof Float32Array)_=i.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=i.SHORT;else if(f instanceof Uint32Array)_=i.UNSIGNED_INT;else if(f instanceof Int32Array)_=i.INT;else if(f instanceof Int8Array)_=i.BYTE;else if(f instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:p}}function r(c,h,f){let u=h.array,p=h._updateRange,g=h.updateRanges;if(i.bindBuffer(f,c),p.count===-1&&g.length===0&&i.bufferSubData(f,0,u),g.length!==0){for(let _=0,m=g.length;_<m;_++){let d=g[_];t?i.bufferSubData(f,d.start*u.BYTES_PER_ELEMENT,u,d.start,d.count):i.bufferSubData(f,d.start*u.BYTES_PER_ELEMENT,u.subarray(d.start,d.start+d.count))}h.clearUpdateRanges()}p.count!==-1&&(t?i.bufferSubData(f,p.offset*u.BYTES_PER_ELEMENT,u,p.offset,p.count):i.bufferSubData(f,p.offset*u.BYTES_PER_ELEMENT,u.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let u=n.get(c);(!u||u.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let f=n.get(c);if(f===void 0)n.set(c,s(c,h));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(f.buffer,c,h),f.version=c.version}}return{get:o,remove:a,update:l}}var En=class i extends Dt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,f=e/a,u=t/l,p=[],g=[],_=[],m=[];for(let d=0;d<h;d++){let S=d*u-o;for(let x=0;x<c;x++){let y=x*f-r;g.push(y,-S,0),_.push(0,0,1),m.push(x/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let S=0;S<a;S++){let x=S+c*d,y=S+c*(d+1),U=S+1+c*(d+1),R=S+1+c*d;p.push(x,y,R),p.push(y,U,R)}this.setIndex(p),this.setAttribute("position",new ht(g,3)),this.setAttribute("normal",new ht(_,3)),this.setAttribute("uv",new ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Rd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Pd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Id=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ld=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Ud=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Dd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Nd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Od=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Fd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Bd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,kd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Gd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Vd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Wd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Zd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Jd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,$d=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Kd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,jd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Qd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ep=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,np=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ip=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sp="gl_FragColor = linearToOutputTexel( gl_FragColor );",rp=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,op=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ap=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,lp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,cp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,up=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,gp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,_p=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Mp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,bp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ep=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ap=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Rp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Cp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Pp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ip=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Up=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Dp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Np=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Op=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Bp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Vp=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Wp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Xp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,qp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Yp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$p=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Kp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,em=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,im=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,om=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,am=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,hm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,um=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,fm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,dm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,mm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,_m=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ym=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,bm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Sm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Em=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Tm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Am=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Rm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Um=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Dm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Nm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Om=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Fm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Hm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,km=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Gm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,qm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ym=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Zm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Jm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$m=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Km=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,jm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,e0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,n0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,i0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,s0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,r0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,o0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,lt={alphahash_fragment:Rd,alphahash_pars_fragment:Cd,alphamap_fragment:Pd,alphamap_pars_fragment:Id,alphatest_fragment:Ld,alphatest_pars_fragment:Ud,aomap_fragment:Dd,aomap_pars_fragment:Nd,batching_pars_vertex:Od,batching_vertex:Fd,begin_vertex:Bd,beginnormal_vertex:zd,bsdfs:Hd,iridescence_fragment:kd,bumpmap_pars_fragment:Gd,clipping_planes_fragment:Vd,clipping_planes_pars_fragment:Wd,clipping_planes_pars_vertex:Xd,clipping_planes_vertex:qd,color_fragment:Yd,color_pars_fragment:Zd,color_pars_vertex:Jd,color_vertex:$d,common:Kd,cube_uv_reflection_fragment:jd,defaultnormal_vertex:Qd,displacementmap_pars_vertex:ep,displacementmap_vertex:tp,emissivemap_fragment:np,emissivemap_pars_fragment:ip,colorspace_fragment:sp,colorspace_pars_fragment:rp,envmap_fragment:op,envmap_common_pars_fragment:ap,envmap_pars_fragment:lp,envmap_pars_vertex:cp,envmap_physical_pars_fragment:Mp,envmap_vertex:hp,fog_vertex:up,fog_pars_vertex:fp,fog_fragment:dp,fog_pars_fragment:pp,gradientmap_pars_fragment:mp,lightmap_fragment:gp,lightmap_pars_fragment:_p,lights_lambert_fragment:xp,lights_lambert_pars_fragment:yp,lights_pars_begin:vp,lights_toon_fragment:bp,lights_toon_pars_fragment:Sp,lights_phong_fragment:Ep,lights_phong_pars_fragment:wp,lights_physical_fragment:Tp,lights_physical_pars_fragment:Ap,lights_fragment_begin:Rp,lights_fragment_maps:Cp,lights_fragment_end:Pp,logdepthbuf_fragment:Ip,logdepthbuf_pars_fragment:Lp,logdepthbuf_pars_vertex:Up,logdepthbuf_vertex:Dp,map_fragment:Np,map_pars_fragment:Op,map_particle_fragment:Fp,map_particle_pars_fragment:Bp,metalnessmap_fragment:zp,metalnessmap_pars_fragment:Hp,morphcolor_vertex:kp,morphnormal_vertex:Gp,morphtarget_pars_vertex:Vp,morphtarget_vertex:Wp,normal_fragment_begin:Xp,normal_fragment_maps:qp,normal_pars_fragment:Yp,normal_pars_vertex:Zp,normal_vertex:Jp,normalmap_pars_fragment:$p,clearcoat_normal_fragment_begin:Kp,clearcoat_normal_fragment_maps:jp,clearcoat_pars_fragment:Qp,iridescence_pars_fragment:em,opaque_fragment:tm,packing:nm,premultiplied_alpha_fragment:im,project_vertex:sm,dithering_fragment:rm,dithering_pars_fragment:om,roughnessmap_fragment:am,roughnessmap_pars_fragment:lm,shadowmap_pars_fragment:cm,shadowmap_pars_vertex:hm,shadowmap_vertex:um,shadowmask_pars_fragment:fm,skinbase_vertex:dm,skinning_pars_vertex:pm,skinning_vertex:mm,skinnormal_vertex:gm,specularmap_fragment:_m,specularmap_pars_fragment:xm,tonemapping_fragment:ym,tonemapping_pars_fragment:vm,transmission_fragment:Mm,transmission_pars_fragment:bm,uv_pars_fragment:Sm,uv_pars_vertex:Em,uv_vertex:wm,worldpos_vertex:Tm,background_vert:Am,background_frag:Rm,backgroundCube_vert:Cm,backgroundCube_frag:Pm,cube_vert:Im,cube_frag:Lm,depth_vert:Um,depth_frag:Dm,distanceRGBA_vert:Nm,distanceRGBA_frag:Om,equirect_vert:Fm,equirect_frag:Bm,linedashed_vert:zm,linedashed_frag:Hm,meshbasic_vert:km,meshbasic_frag:Gm,meshlambert_vert:Vm,meshlambert_frag:Wm,meshmatcap_vert:Xm,meshmatcap_frag:qm,meshnormal_vert:Ym,meshnormal_frag:Zm,meshphong_vert:Jm,meshphong_frag:$m,meshphysical_vert:Km,meshphysical_frag:jm,meshtoon_vert:Qm,meshtoon_frag:e0,points_vert:t0,points_frag:n0,shadow_vert:i0,shadow_frag:s0,sprite_vert:r0,sprite_frag:o0},Oe={common:{diffuse:{value:new ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new Te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new ct(16777215)},opacity:{value:1},center:{value:new Te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},qn={basic:{uniforms:cn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:cn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new ct(0)}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:cn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new ct(0)},specular:{value:new ct(1118481)},shininess:{value:30}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:cn([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:cn([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new ct(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:cn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:cn([Oe.points,Oe.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:cn([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:cn([Oe.common,Oe.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:cn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:cn([Oe.sprite,Oe.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distanceRGBA:{uniforms:cn([Oe.common,Oe.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distanceRGBA_vert,fragmentShader:lt.distanceRGBA_frag},shadow:{uniforms:cn([Oe.lights,Oe.fog,{color:{value:new ct(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};qn.physical={uniforms:cn([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new Te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new Te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new ct(0)},specularColor:{value:new ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new Te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};var Kr={r:0,b:0,g:0};function a0(i,e,t,n,s,r,o){let a=new ct(0),l=r===!0?0:1,c,h,f=null,u=0,p=null;function g(m,d){let S=!1,x=d.isScene===!0?d.background:null;x&&x.isTexture&&(x=(d.backgroundBlurriness>0?t:e).get(x)),x===null?_(a,l):x&&x.isColor&&(_(x,1),S=!0);let y=i.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||S)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===zo)?(h===void 0&&(h=new ot(new yn(1,1,1),new ai({name:"BackgroundCubeMaterial",uniforms:Ls(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(U,R,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=Ct.getTransfer(x.colorSpace)!==Ft,(f!==x||u!==x.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,f=x,u=x.version,p=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new ot(new En(2,2),new ai({name:"BackgroundMaterial",uniforms:Ls(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:Ei,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=Ct.getTransfer(x.colorSpace)!==Ft,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||u!==x.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,f=x,u=x.version,p=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,d){m.getRGB(Kr,du(i)),n.buffers.color.setClear(Kr.r,Kr.g,Kr.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(m,d=1){a.set(m),l=d,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(a,l)},render:g}}function l0(i,e,t,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=m(null),c=l,h=!1;function f(L,O,k,Y,Q){let J=!1;if(o){let ne=_(Y,k,O);c!==ne&&(c=ne,p(c.object)),J=d(L,Y,k,Q),J&&S(L,Y,k,Q)}else{let ne=O.wireframe===!0;(c.geometry!==Y.id||c.program!==k.id||c.wireframe!==ne)&&(c.geometry=Y.id,c.program=k.id,c.wireframe=ne,J=!0)}Q!==null&&t.update(Q,i.ELEMENT_ARRAY_BUFFER),(J||h)&&(h=!1,K(L,O,k,Y),Q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Q).buffer))}function u(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function p(L){return n.isWebGL2?i.bindVertexArray(L):r.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?i.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function _(L,O,k){let Y=k.wireframe===!0,Q=a[L.id];Q===void 0&&(Q={},a[L.id]=Q);let J=Q[O.id];J===void 0&&(J={},Q[O.id]=J);let ne=J[Y];return ne===void 0&&(ne=m(u()),J[Y]=ne),ne}function m(L){let O=[],k=[],Y=[];for(let Q=0;Q<s;Q++)O[Q]=0,k[Q]=0,Y[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:k,attributeDivisors:Y,object:L,attributes:{},index:null}}function d(L,O,k,Y){let Q=c.attributes,J=O.attributes,ne=0,V=k.getAttributes();for(let le in V)if(V[le].location>=0){let j=Q[le],me=J[le];if(me===void 0&&(le==="instanceMatrix"&&L.instanceMatrix&&(me=L.instanceMatrix),le==="instanceColor"&&L.instanceColor&&(me=L.instanceColor)),j===void 0||j.attribute!==me||me&&j.data!==me.data)return!0;ne++}return c.attributesNum!==ne||c.index!==Y}function S(L,O,k,Y){let Q={},J=O.attributes,ne=0,V=k.getAttributes();for(let le in V)if(V[le].location>=0){let j=J[le];j===void 0&&(le==="instanceMatrix"&&L.instanceMatrix&&(j=L.instanceMatrix),le==="instanceColor"&&L.instanceColor&&(j=L.instanceColor));let me={};me.attribute=j,j&&j.data&&(me.data=j.data),Q[le]=me,ne++}c.attributes=Q,c.attributesNum=ne,c.index=Y}function x(){let L=c.newAttributes;for(let O=0,k=L.length;O<k;O++)L[O]=0}function y(L){U(L,0)}function U(L,O){let k=c.newAttributes,Y=c.enabledAttributes,Q=c.attributeDivisors;k[L]=1,Y[L]===0&&(i.enableVertexAttribArray(L),Y[L]=1),Q[L]!==O&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,O),Q[L]=O)}function R(){let L=c.newAttributes,O=c.enabledAttributes;for(let k=0,Y=O.length;k<Y;k++)O[k]!==L[k]&&(i.disableVertexAttribArray(k),O[k]=0)}function C(L,O,k,Y,Q,J,ne){ne===!0?i.vertexAttribIPointer(L,O,k,Q,J):i.vertexAttribPointer(L,O,k,Y,Q,J)}function K(L,O,k,Y){if(n.isWebGL2===!1&&(L.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();let Q=Y.attributes,J=k.getAttributes(),ne=O.defaultAttributeValues;for(let V in J){let le=J[V];if(le.location>=0){let W=Q[V];if(W===void 0&&(V==="instanceMatrix"&&L.instanceMatrix&&(W=L.instanceMatrix),V==="instanceColor"&&L.instanceColor&&(W=L.instanceColor)),W!==void 0){let j=W.normalized,me=W.itemSize,ve=t.get(W);if(ve===void 0)continue;let oe=ve.buffer,Ae=ve.type,xe=ve.bytesPerElement,Ce=n.isWebGL2===!0&&(Ae===i.INT||Ae===i.UNSIGNED_INT||W.gpuType===tu);if(W.isInterleavedBufferAttribute){let De=W.data,D=De.stride,be=W.offset;if(De.isInstancedInterleavedBuffer){for(let ae=0;ae<le.locationSize;ae++)U(le.location+ae,De.meshPerAttribute);L.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=De.meshPerAttribute*De.count)}else for(let ae=0;ae<le.locationSize;ae++)y(le.location+ae);i.bindBuffer(i.ARRAY_BUFFER,oe);for(let ae=0;ae<le.locationSize;ae++)C(le.location+ae,me/le.locationSize,Ae,j,D*xe,(be+me/le.locationSize*ae)*xe,Ce)}else{if(W.isInstancedBufferAttribute){for(let De=0;De<le.locationSize;De++)U(le.location+De,W.meshPerAttribute);L.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let De=0;De<le.locationSize;De++)y(le.location+De);i.bindBuffer(i.ARRAY_BUFFER,oe);for(let De=0;De<le.locationSize;De++)C(le.location+De,me/le.locationSize,Ae,j,me*xe,me/le.locationSize*De*xe,Ce)}}else if(ne!==void 0){let j=ne[V];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv(le.location,j);break;case 3:i.vertexAttrib3fv(le.location,j);break;case 4:i.vertexAttrib4fv(le.location,j);break;default:i.vertexAttrib1fv(le.location,j)}}}}R()}function w(){re();for(let L in a){let O=a[L];for(let k in O){let Y=O[k];for(let Q in Y)g(Y[Q].object),delete Y[Q];delete O[k]}delete a[L]}}function A(L){if(a[L.id]===void 0)return;let O=a[L.id];for(let k in O){let Y=O[k];for(let Q in Y)g(Y[Q].object),delete Y[Q];delete O[k]}delete a[L.id]}function q(L){for(let O in a){let k=a[O];if(k[L.id]===void 0)continue;let Y=k[L.id];for(let Q in Y)g(Y[Q].object),delete Y[Q];delete k[L.id]}}function re(){X(),h=!0,c!==l&&(c=l,p(c.object))}function X(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:re,resetDefaultState:X,dispose:w,releaseStatesOfGeometry:A,releaseStatesOfProgram:q,initAttributes:x,enableAttribute:y,disableUnusedAttributes:R}}function c0(i,e,t,n){let s=n.isWebGL2,r;function o(h){r=h}function a(h,f){i.drawArrays(r,h,f),t.update(f,r,1)}function l(h,f,u){if(u===0)return;let p,g;if(s)p=i,g="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](r,h,f,u),t.update(f,r,u)}function c(h,f,u){if(u===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<u;g++)this.render(h[g],f[g]);else{p.multiDrawArraysWEBGL(r,h,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=f[_];t.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function h0(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),u=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),d=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=u>0,y=o||e.has("OES_texture_float"),U=x&&y,R=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:u,maxTextureSize:p,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:S,vertexTextures:x,floatFragmentTextures:y,floatVertexTextures:U,maxSamples:R}}function u0(i){let e=this,t=null,n=0,s=!1,r=!1,o=new ni,a=new ft,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let p=f.length!==0||u||n!==0||s;return s=u,n=f.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,p){let g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,d=i.get(f);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let S=r?0:n,x=S*4,y=d.clippingState||null;l.value=y,y=h(g,u,x,p);for(let U=0;U!==x;++U)y[U]=t[U];d.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,u,p,g){let _=f!==null?f.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let d=p+_*4,S=u.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<d)&&(m=new Float32Array(d));for(let x=0,y=p;x!==_;++x,y+=4)o.copy(f[x]).applyMatrix4(S,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function f0(i){let e=new WeakMap;function t(o,a){return a===Ya?o.mapping=As:a===Za&&(o.mapping=Rs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ya||a===Za)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new nl(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var bo=class extends vo{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ms=4,ph=[.125,.215,.35,.446,.526,.582],ki=20,Ua=new bo,mh=new ct,Da=null,Na=0,Oa=0,zi=(1+Math.sqrt(5))/2,ys=1/zi,gh=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,zi,ys),new P(0,zi,-ys),new P(ys,0,zi),new P(-ys,0,zi),new P(zi,ys,0),new P(-zi,ys,0)],So=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Da=this._renderer.getRenderTarget(),Na=this._renderer.getActiveCubeFace(),Oa=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Da,Na,Oa),e.scissorTest=!1,jr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===As||e.mapping===Rs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Da=this._renderer.getRenderTarget(),Na=this._renderer.getActiveCubeFace(),Oa=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Tn,minFilter:Tn,generateMipmaps:!1,type:sr,format:An,colorSpace:ri,depthBuffer:!1},s=_h(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_h(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=d0(r)),this._blurMaterial=p0(r,e,t)}return s}_compileMaterial(e){let t=new ot(this._lodPlanes[0],e);this._renderer.compile(t,Ua)}_sceneToCubeUV(e,t,n,s){let a=new on(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,u=h.toneMapping;h.getClearColor(mh),h.toneMapping=Mi,h.autoClear=!1;let p=new Zt({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1}),g=new ot(new yn,p),_=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(mh),_=!0);for(let d=0;d<6;d++){let S=d%3;S===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):S===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));let x=this._cubeSize;jr(s,S*x,d>2?x:0,x,x),h.setRenderTarget(s),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=f,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===As||e.mapping===Rs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=yh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xh());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new ot(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;jr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Ua)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=gh[(s-1)%gh.length];this._blur(e,s-1,s,r,o)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new ot(this._lodPlanes[s],c),u=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ki-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):ki;m>ki&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ki}`);let d=[],S=0;for(let C=0;C<ki;++C){let K=C/_,w=Math.exp(-K*K/2);d.push(w),C===0?S+=w:C<m&&(S+=2*w)}for(let C=0;C<d.length;C++)d[C]=d[C]/S;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=d,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:x}=this;u.dTheta.value=g,u.mipInt.value=x-n;let y=this._sizeLods[s],U=3*y*(s>x-Ms?s-x+Ms:0),R=4*(this._cubeSize-y);jr(t,U,R,3*y,2*y),l.setRenderTarget(t),l.render(f,Ua)}};function d0(i){let e=[],t=[],n=[],s=i,r=i-Ms+1+ph.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>i-Ms?l=ph[o-i+Ms-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,f=1+c,u=[h,h,f,h,f,f,h,h,f,f,h,f],p=6,g=6,_=3,m=2,d=1,S=new Float32Array(_*g*p),x=new Float32Array(m*g*p),y=new Float32Array(d*g*p);for(let R=0;R<p;R++){let C=R%3*2/3-1,K=R>2?0:-1,w=[C,K,0,C+2/3,K,0,C+2/3,K+1,0,C,K,0,C+2/3,K+1,0,C,K+1,0];S.set(w,_*g*R),x.set(u,m*g*R);let A=[R,R,R,R,R,R];y.set(A,d*g*R)}let U=new Dt;U.setAttribute("position",new bt(S,_)),U.setAttribute("uv",new bt(x,m)),U.setAttribute("faceIndex",new bt(y,d)),e.push(U),s>Ms&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function _h(i,e,t){let n=new oi(i,e,t);return n.texture.mapping=zo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function jr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function p0(i,e,t){let n=new Float32Array(ki),s=new P(0,1,0);return new ai({name:"SphericalGaussianBlur",defines:{n:ki,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function xh(){return new ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function yh(){return new ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Bl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function m0(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Ya||l===Za,h=l===As||l===Rs;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new So(i)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{let f=a.image;if(c&&f&&f.height>0||h&&f&&s(f)){t===null&&(t=new So(i));let u=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,u),a.addEventListener("dispose",r),u.texture}else return null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function g0(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function _0(i,e,t,n){let s={},r=new WeakMap;function o(f){let u=f.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);for(let g in u.morphAttributes){let _=u.morphAttributes[g];for(let m=0,d=_.length;m<d;m++)e.remove(_[m])}u.removeEventListener("dispose",o),delete s[u.id];let p=r.get(u);p&&(e.remove(p),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(f,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,t.memory.geometries++),u}function l(f){let u=f.attributes;for(let g in u)e.update(u[g],i.ARRAY_BUFFER);let p=f.morphAttributes;for(let g in p){let _=p[g];for(let m=0,d=_.length;m<d;m++)e.update(_[m],i.ARRAY_BUFFER)}}function c(f){let u=[],p=f.index,g=f.attributes.position,_=0;if(p!==null){let S=p.array;_=p.version;for(let x=0,y=S.length;x<y;x+=3){let U=S[x+0],R=S[x+1],C=S[x+2];u.push(U,R,R,C,C,U)}}else if(g!==void 0){let S=g.array;_=g.version;for(let x=0,y=S.length/3-1;x<y;x+=3){let U=x+0,R=x+1,C=x+2;u.push(U,R,R,C,C,U)}}else return;let m=new(uu(u)?yo:xo)(u,1);m.version=_;let d=r.get(f);d&&e.remove(d),r.set(f,m)}function h(f){let u=r.get(f);if(u){let p=f.index;p!==null&&u.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function x0(i,e,t,n){let s=n.isWebGL2,r;function o(p){r=p}let a,l;function c(p){a=p.type,l=p.bytesPerElement}function h(p,g){i.drawElements(r,g,a,p*l),t.update(g,r,1)}function f(p,g,_){if(_===0)return;let m,d;if(s)m=i,d="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](r,g,a,p*l,_),t.update(g,r,_)}function u(p,g,_){if(_===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<_;d++)this.render(p[d]/l,g[d]);else{m.multiDrawElementsWEBGL(r,g,0,a,p,0,_);let d=0;for(let S=0;S<_;S++)d+=g[S];t.update(d,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=f,this.renderMultiDraw=u}function y0(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function v0(i,e){return i[0]-e[0]}function M0(i,e){return Math.abs(e[1])-Math.abs(i[1])}function b0(i,e,t){let n={},s=new Float32Array(8),r=new WeakMap,o=new yt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,f){let u=c.morphTargetInfluences;if(e.isWebGL2===!0){let p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=p!==void 0?p.length:0,_=r.get(h);if(_===void 0||_.count!==g){let L=function(){re.dispose(),r.delete(h),h.removeEventListener("dispose",L)};_!==void 0&&_.texture.dispose();let S=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,U=h.morphAttributes.position||[],R=h.morphAttributes.normal||[],C=h.morphAttributes.color||[],K=0;S===!0&&(K=1),x===!0&&(K=2),y===!0&&(K=3);let w=h.attributes.position.count*K,A=1;w>e.maxTextureSize&&(A=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);let q=new Float32Array(w*A*4*g),re=new go(q,w,A,g);re.type=ii,re.needsUpdate=!0;let X=K*4;for(let O=0;O<g;O++){let k=U[O],Y=R[O],Q=C[O],J=w*A*4*O;for(let ne=0;ne<k.count;ne++){let V=ne*X;S===!0&&(o.fromBufferAttribute(k,ne),q[J+V+0]=o.x,q[J+V+1]=o.y,q[J+V+2]=o.z,q[J+V+3]=0),x===!0&&(o.fromBufferAttribute(Y,ne),q[J+V+4]=o.x,q[J+V+5]=o.y,q[J+V+6]=o.z,q[J+V+7]=0),y===!0&&(o.fromBufferAttribute(Q,ne),q[J+V+8]=o.x,q[J+V+9]=o.y,q[J+V+10]=o.z,q[J+V+11]=Q.itemSize===4?o.w:1)}}_={count:g,texture:re,size:new Te(w,A)},r.set(h,_),h.addEventListener("dispose",L)}let m=0;for(let S=0;S<u.length;S++)m+=u[S];let d=h.morphTargetsRelative?1:1-m;f.getUniforms().setValue(i,"morphTargetBaseInfluence",d),f.getUniforms().setValue(i,"morphTargetInfluences",u),f.getUniforms().setValue(i,"morphTargetsTexture",_.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}else{let p=u===void 0?0:u.length,g=n[h.id];if(g===void 0||g.length!==p){g=[];for(let x=0;x<p;x++)g[x]=[x,0];n[h.id]=g}for(let x=0;x<p;x++){let y=g[x];y[0]=x,y[1]=u[x]}g.sort(M0);for(let x=0;x<8;x++)x<p&&g[x][1]?(a[x][0]=g[x][0],a[x][1]=g[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(v0);let _=h.morphAttributes.position,m=h.morphAttributes.normal,d=0;for(let x=0;x<8;x++){let y=a[x],U=y[0],R=y[1];U!==Number.MAX_SAFE_INTEGER&&R?(_&&h.getAttribute("morphTarget"+x)!==_[U]&&h.setAttribute("morphTarget"+x,_[U]),m&&h.getAttribute("morphNormal"+x)!==m[U]&&h.setAttribute("morphNormal"+x,m[U]),s[x]=R,d+=R):(_&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),m&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),s[x]=0)}let S=h.morphTargetsRelative?1:1-d;f.getUniforms().setValue(i,"morphTargetBaseInfluence",S),f.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function S0(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,f=e.get(l,h);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return f}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var Eo=class extends xn{constructor(e,t,n,s,r,o,a,l,c,h){if(h=h!==void 0?h:Vi,h!==Vi&&h!==Ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Vi&&(n=yi),n===void 0&&h===Ps&&(n=Gi),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:en,this.minFilter=l!==void 0?l:en,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},mu=new xn,gu=new Eo(1,1);gu.compareFunction=hu;var _u=new go,xu=new el,yu=new Mo,vh=[],Mh=[],bh=new Float32Array(16),Sh=new Float32Array(9),Eh=new Float32Array(4);function zs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=vh[s];if(r===void 0&&(r=new Float32Array(s),vh[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Jt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function $t(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ko(i,e){let t=Mh[e];t===void 0&&(t=new Int32Array(e),Mh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function E0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function w0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;i.uniform2fv(this.addr,e),$t(t,e)}}function T0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Jt(t,e))return;i.uniform3fv(this.addr,e),$t(t,e)}}function A0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;i.uniform4fv(this.addr,e),$t(t,e)}}function R0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Jt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),$t(t,e)}else{if(Jt(t,n))return;Eh.set(n),i.uniformMatrix2fv(this.addr,!1,Eh),$t(t,n)}}function C0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Jt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),$t(t,e)}else{if(Jt(t,n))return;Sh.set(n),i.uniformMatrix3fv(this.addr,!1,Sh),$t(t,n)}}function P0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Jt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),$t(t,e)}else{if(Jt(t,n))return;bh.set(n),i.uniformMatrix4fv(this.addr,!1,bh),$t(t,n)}}function I0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function L0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;i.uniform2iv(this.addr,e),$t(t,e)}}function U0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;i.uniform3iv(this.addr,e),$t(t,e)}}function D0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;i.uniform4iv(this.addr,e),$t(t,e)}}function N0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function O0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;i.uniform2uiv(this.addr,e),$t(t,e)}}function F0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;i.uniform3uiv(this.addr,e),$t(t,e)}}function B0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;i.uniform4uiv(this.addr,e),$t(t,e)}}function z0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?gu:mu;t.setTexture2D(e||r,s)}function H0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||xu,s)}function k0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||yu,s)}function G0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||_u,s)}function V0(i){switch(i){case 5126:return E0;case 35664:return w0;case 35665:return T0;case 35666:return A0;case 35674:return R0;case 35675:return C0;case 35676:return P0;case 5124:case 35670:return I0;case 35667:case 35671:return L0;case 35668:case 35672:return U0;case 35669:case 35673:return D0;case 5125:return N0;case 36294:return O0;case 36295:return F0;case 36296:return B0;case 35678:case 36198:case 36298:case 36306:case 35682:return z0;case 35679:case 36299:case 36307:return H0;case 35680:case 36300:case 36308:case 36293:return k0;case 36289:case 36303:case 36311:case 36292:return G0}}function W0(i,e){i.uniform1fv(this.addr,e)}function X0(i,e){let t=zs(e,this.size,2);i.uniform2fv(this.addr,t)}function q0(i,e){let t=zs(e,this.size,3);i.uniform3fv(this.addr,t)}function Y0(i,e){let t=zs(e,this.size,4);i.uniform4fv(this.addr,t)}function Z0(i,e){let t=zs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function J0(i,e){let t=zs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function $0(i,e){let t=zs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function K0(i,e){i.uniform1iv(this.addr,e)}function j0(i,e){i.uniform2iv(this.addr,e)}function Q0(i,e){i.uniform3iv(this.addr,e)}function eg(i,e){i.uniform4iv(this.addr,e)}function tg(i,e){i.uniform1uiv(this.addr,e)}function ng(i,e){i.uniform2uiv(this.addr,e)}function ig(i,e){i.uniform3uiv(this.addr,e)}function sg(i,e){i.uniform4uiv(this.addr,e)}function rg(i,e,t){let n=this.cache,s=e.length,r=ko(t,s);Jt(n,r)||(i.uniform1iv(this.addr,r),$t(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||mu,r[o])}function og(i,e,t){let n=this.cache,s=e.length,r=ko(t,s);Jt(n,r)||(i.uniform1iv(this.addr,r),$t(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||xu,r[o])}function ag(i,e,t){let n=this.cache,s=e.length,r=ko(t,s);Jt(n,r)||(i.uniform1iv(this.addr,r),$t(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||yu,r[o])}function lg(i,e,t){let n=this.cache,s=e.length,r=ko(t,s);Jt(n,r)||(i.uniform1iv(this.addr,r),$t(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||_u,r[o])}function cg(i){switch(i){case 5126:return W0;case 35664:return X0;case 35665:return q0;case 35666:return Y0;case 35674:return Z0;case 35675:return J0;case 35676:return $0;case 5124:case 35670:return K0;case 35667:case 35671:return j0;case 35668:case 35672:return Q0;case 35669:case 35673:return eg;case 5125:return tg;case 36294:return ng;case 36295:return ig;case 36296:return sg;case 35678:case 36198:case 36298:case 36306:case 35682:return rg;case 35679:case 36299:case 36307:return og;case 35680:case 36300:case 36308:case 36293:return ag;case 36289:case 36303:case 36311:case 36292:return lg}}var il=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=V0(t.type)}},sl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=cg(t.type)}},rl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Fa=/(\w+)(\])?(\[|\.)?/g;function wh(i,e){i.seq.push(e),i.map[e.id]=e}function hg(i,e,t){let n=i.name,s=n.length;for(Fa.lastIndex=0;;){let r=Fa.exec(n),o=Fa.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){wh(t,c===void 0?new il(a,i,e):new sl(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new rl(a),wh(t,f)),t=f}}}var Ts=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);hg(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Th(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var ug=37297,fg=0;function dg(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function pg(i){let e=Ct.getPrimaries(Ct.workingColorSpace),t=Ct.getPrimaries(i),n;switch(e===t?n="":e===uo&&t===ho?n="LinearDisplayP3ToLinearSRGB":e===ho&&t===uo&&(n="LinearSRGBToLinearDisplayP3"),i){case ri:case Ho:return[n,"LinearTransferOETF"];case Et:case Fl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Ah(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+dg(i.getShaderSource(e),o)}else return s}function mg(i,e){let t=pg(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function gg(i,e){let t;switch(e){case Df:t="Linear";break;case Nf:t="Reinhard";break;case Of:t="OptimizedCineon";break;case Nl:t="ACESFilmic";break;case Bf:t="AgX";break;case Ff:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function _g(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(bs).join(`
`)}function xg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(bs).join(`
`)}function yg(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function vg(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function bs(i){return i!==""}function Rh(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ch(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Mg=/^[ \t]*#include +<([\w\d./]+)>/gm;function ol(i){return i.replace(Mg,Sg)}var bg=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Sg(i,e){let t=lt[e];if(t===void 0){let n=bg.get(e);if(n!==void 0)t=lt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ol(t)}var Eg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ph(i){return i.replace(Eg,wg)}function wg(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ih(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Tg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===jh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===lf?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ti&&(e="SHADOWMAP_TYPE_VSM"),e}function Ag(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case As:case Rs:e="ENVMAP_TYPE_CUBE";break;case zo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Rg(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Rs&&(e="ENVMAP_MODE_REFRACTION"),e}function Cg(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Qh:e="ENVMAP_BLENDING_MULTIPLY";break;case Lf:e="ENVMAP_BLENDING_MIX";break;case Uf:e="ENVMAP_BLENDING_ADD";break}return e}function Pg(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Ig(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Tg(t),c=Ag(t),h=Rg(t),f=Cg(t),u=Pg(t),p=t.isWebGL2?"":_g(t),g=xg(t),_=yg(r),m=s.createProgram(),d,S,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(bs).join(`
`),d.length>0&&(d+=`
`),S=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(bs).join(`
`),S.length>0&&(S+=`
`)):(d=[Ih(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bs).join(`
`),S=[p,Ih(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Mi?"#define TONE_MAPPING":"",t.toneMapping!==Mi?lt.tonemapping_pars_fragment:"",t.toneMapping!==Mi?gg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,mg("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(bs).join(`
`)),o=ol(o),o=Rh(o,t),o=Ch(o,t),a=ol(a),a=Rh(a,t),a=Ch(a,t),o=Ph(o),a=Ph(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,d=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,S=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===$c?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===$c?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);let y=x+d+o,U=x+S+a,R=Th(s,s.VERTEX_SHADER,y),C=Th(s,s.FRAGMENT_SHADER,U);s.attachShader(m,R),s.attachShader(m,C),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function K(re){if(i.debug.checkShaderErrors){let X=s.getProgramInfoLog(m).trim(),L=s.getShaderInfoLog(R).trim(),O=s.getShaderInfoLog(C).trim(),k=!0,Y=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,R,C);else{let Q=Ah(s,R,"vertex"),J=Ah(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+X+`
`+Q+`
`+J)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(L===""||O==="")&&(Y=!1);Y&&(re.diagnostics={runnable:k,programLog:X,vertexShader:{log:L,prefix:d},fragmentShader:{log:O,prefix:S}})}s.deleteShader(R),s.deleteShader(C),w=new Ts(s,m),A=vg(s,m)}let w;this.getUniforms=function(){return w===void 0&&K(this),w};let A;this.getAttributes=function(){return A===void 0&&K(this),A};let q=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return q===!1&&(q=s.getProgramParameter(m,ug)),q},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=fg++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=R,this.fragmentShader=C,this}var Lg=0,al=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ll(e),t.set(e,n)),n}},ll=class{constructor(e){this.id=Lg++,this.code=e,this.usedTimes=0}};function Ug(i,e,t,n,s,r,o){let a=new or,l=new al,c=[],h=s.isWebGL2,f=s.logarithmicDepthBuffer,u=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return w===0?"uv":`uv${w}`}function m(w,A,q,re,X){let L=re.fog,O=X.geometry,k=w.isMeshStandardMaterial?re.environment:null,Y=(w.isMeshStandardMaterial?t:e).get(w.envMap||k),Q=Y&&Y.mapping===zo?Y.image.height:null,J=g[w.type];w.precision!==null&&(p=s.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));let ne=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,V=ne!==void 0?ne.length:0,le=0;O.morphAttributes.position!==void 0&&(le=1),O.morphAttributes.normal!==void 0&&(le=2),O.morphAttributes.color!==void 0&&(le=3);let W,j,me,ve;if(J){let Je=qn[J];W=Je.vertexShader,j=Je.fragmentShader}else W=w.vertexShader,j=w.fragmentShader,l.update(w),me=l.getVertexShaderID(w),ve=l.getFragmentShaderID(w);let oe=i.getRenderTarget(),Ae=X.isInstancedMesh===!0,xe=X.isBatchedMesh===!0,Ce=!!w.map,De=!!w.matcap,D=!!Y,be=!!w.aoMap,ae=!!w.lightMap,de=!!w.bumpMap,se=!!w.normalMap,qe=!!w.displacementMap,he=!!w.emissiveMap,T=!!w.metalnessMap,b=!!w.roughnessMap,Z=w.anisotropy>0,ye=w.clearcoat>0,ue=w.iridescence>0,ie=w.sheen>0,G=w.transmission>0,Ie=Z&&!!w.anisotropyMap,Be=ye&&!!w.clearcoatMap,Fe=ye&&!!w.clearcoatNormalMap,et=ye&&!!w.clearcoatRoughnessMap,fe=ue&&!!w.iridescenceMap,tt=ue&&!!w.iridescenceThicknessMap,Ze=ie&&!!w.sheenColorMap,We=ie&&!!w.sheenRoughnessMap,Qe=!!w.specularMap,ke=!!w.specularColorMap,Ge=!!w.specularIntensityMap,dt=G&&!!w.transmissionMap,Mt=G&&!!w.thicknessMap,rt=!!w.gradientMap,Re=!!w.alphaMap,z=w.alphaTest>0,Ue=!!w.alphaHash,_e=!!w.extensions,$e=!!O.attributes.uv1,Ye=!!O.attributes.uv2,at=!!O.attributes.uv3,ee=Mi;return w.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(ee=i.toneMapping),{isWebGL2:h,shaderID:J,shaderType:w.type,shaderName:w.name,vertexShader:W,fragmentShader:j,defines:w.defines,customVertexShaderID:me,customFragmentShaderID:ve,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:xe,instancing:Ae,instancingColor:Ae&&X.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:oe===null?i.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:ri,map:Ce,matcap:De,envMap:D,envMapMode:D&&Y.mapping,envMapCubeUVHeight:Q,aoMap:be,lightMap:ae,bumpMap:de,normalMap:se,displacementMap:u&&qe,emissiveMap:he,normalMapObjectSpace:se&&w.normalMapType===Kf,normalMapTangentSpace:se&&w.normalMapType===cu,metalnessMap:T,roughnessMap:b,anisotropy:Z,anisotropyMap:Ie,clearcoat:ye,clearcoatMap:Be,clearcoatNormalMap:Fe,clearcoatRoughnessMap:et,iridescence:ue,iridescenceMap:fe,iridescenceThicknessMap:tt,sheen:ie,sheenColorMap:Ze,sheenRoughnessMap:We,specularMap:Qe,specularColorMap:ke,specularIntensityMap:Ge,transmission:G,transmissionMap:dt,thicknessMap:Mt,gradientMap:rt,opaque:w.transparent===!1&&w.blending===Es,alphaMap:Re,alphaTest:z,alphaHash:Ue,combine:w.combine,mapUv:Ce&&_(w.map.channel),aoMapUv:be&&_(w.aoMap.channel),lightMapUv:ae&&_(w.lightMap.channel),bumpMapUv:de&&_(w.bumpMap.channel),normalMapUv:se&&_(w.normalMap.channel),displacementMapUv:qe&&_(w.displacementMap.channel),emissiveMapUv:he&&_(w.emissiveMap.channel),metalnessMapUv:T&&_(w.metalnessMap.channel),roughnessMapUv:b&&_(w.roughnessMap.channel),anisotropyMapUv:Ie&&_(w.anisotropyMap.channel),clearcoatMapUv:Be&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:Fe&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ze&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:We&&_(w.sheenRoughnessMap.channel),specularMapUv:Qe&&_(w.specularMap.channel),specularColorMapUv:ke&&_(w.specularColorMap.channel),specularIntensityMapUv:Ge&&_(w.specularIntensityMap.channel),transmissionMapUv:dt&&_(w.transmissionMap.channel),thicknessMapUv:Mt&&_(w.thicknessMap.channel),alphaMapUv:Re&&_(w.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(se||Z),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:$e,vertexUv2s:Ye,vertexUv3s:at,pointsUvs:X.isPoints===!0&&!!O.attributes.uv&&(Ce||Re),fog:!!L,useFog:w.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:X.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:le,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&q.length>0,shadowMapType:i.shadowMap.type,toneMapping:ee,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Ce&&w.map.isVideoTexture===!0&&Ct.getTransfer(w.map.colorSpace)===Ft,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===qt,flipSided:w.side===_n,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionDerivatives:_e&&w.extensions.derivatives===!0,extensionFragDepth:_e&&w.extensions.fragDepth===!0,extensionDrawBuffers:_e&&w.extensions.drawBuffers===!0,extensionShaderTextureLOD:_e&&w.extensions.shaderTextureLOD===!0,extensionClipCullDistance:_e&&w.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()}}function d(w){let A=[];if(w.shaderID?A.push(w.shaderID):(A.push(w.customVertexShaderID),A.push(w.customFragmentShaderID)),w.defines!==void 0)for(let q in w.defines)A.push(q),A.push(w.defines[q]);return w.isRawShaderMaterial===!1&&(S(A,w),x(A,w),A.push(i.outputColorSpace)),A.push(w.customProgramCacheKey),A.join()}function S(w,A){w.push(A.precision),w.push(A.outputColorSpace),w.push(A.envMapMode),w.push(A.envMapCubeUVHeight),w.push(A.mapUv),w.push(A.alphaMapUv),w.push(A.lightMapUv),w.push(A.aoMapUv),w.push(A.bumpMapUv),w.push(A.normalMapUv),w.push(A.displacementMapUv),w.push(A.emissiveMapUv),w.push(A.metalnessMapUv),w.push(A.roughnessMapUv),w.push(A.anisotropyMapUv),w.push(A.clearcoatMapUv),w.push(A.clearcoatNormalMapUv),w.push(A.clearcoatRoughnessMapUv),w.push(A.iridescenceMapUv),w.push(A.iridescenceThicknessMapUv),w.push(A.sheenColorMapUv),w.push(A.sheenRoughnessMapUv),w.push(A.specularMapUv),w.push(A.specularColorMapUv),w.push(A.specularIntensityMapUv),w.push(A.transmissionMapUv),w.push(A.thicknessMapUv),w.push(A.combine),w.push(A.fogExp2),w.push(A.sizeAttenuation),w.push(A.morphTargetsCount),w.push(A.morphAttributeCount),w.push(A.numDirLights),w.push(A.numPointLights),w.push(A.numSpotLights),w.push(A.numSpotLightMaps),w.push(A.numHemiLights),w.push(A.numRectAreaLights),w.push(A.numDirLightShadows),w.push(A.numPointLightShadows),w.push(A.numSpotLightShadows),w.push(A.numSpotLightShadowsWithMaps),w.push(A.numLightProbes),w.push(A.shadowMapType),w.push(A.toneMapping),w.push(A.numClippingPlanes),w.push(A.numClipIntersection),w.push(A.depthPacking)}function x(w,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),A.alphaHash&&a.enable(18),A.batching&&a.enable(19),w.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),w.push(a.mask)}function y(w){let A=g[w.type],q;if(A){let re=qn[A];q=bd.clone(re.uniforms)}else q=w.uniforms;return q}function U(w,A){let q;for(let re=0,X=c.length;re<X;re++){let L=c[re];if(L.cacheKey===A){q=L,++q.usedTimes;break}}return q===void 0&&(q=new Ig(i,A,w,r),c.push(q)),q}function R(w){if(--w.usedTimes===0){let A=c.indexOf(w);c[A]=c[c.length-1],c.pop(),w.destroy()}}function C(w){l.remove(w)}function K(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:y,acquireProgram:U,releaseProgram:R,releaseShaderCache:C,programs:c,dispose:K}}function Dg(){let i=new WeakMap;function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function t(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function Ng(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Lh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Uh(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(f,u,p,g,_,m){let d=i[e];return d===void 0?(d={id:f.id,object:f,geometry:u,material:p,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},i[e]=d):(d.id=f.id,d.object=f,d.geometry=u,d.material=p,d.groupOrder=g,d.renderOrder=f.renderOrder,d.z=_,d.group=m),e++,d}function a(f,u,p,g,_,m){let d=o(f,u,p,g,_,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):t.push(d)}function l(f,u,p,g,_,m){let d=o(f,u,p,g,_,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):t.unshift(d)}function c(f,u){t.length>1&&t.sort(f||Ng),n.length>1&&n.sort(u||Lh),s.length>1&&s.sort(u||Lh)}function h(){for(let f=e,u=i.length;f<u;f++){let p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Og(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Uh,i.set(n,[o])):s>=r.length?(o=new Uh,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Fg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new ct};break;case"SpotLight":t={position:new P,direction:new P,color:new ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new ct,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new ct,groundColor:new ct};break;case"RectAreaLight":t={color:new ct,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function Bg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var zg=0;function Hg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function kg(i,e){let t=new Fg,n=Bg(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new P);let r=new P,o=new vt,a=new vt;function l(h,f){let u=0,p=0,g=0;for(let re=0;re<9;re++)s.probe[re].set(0,0,0);let _=0,m=0,d=0,S=0,x=0,y=0,U=0,R=0,C=0,K=0,w=0;h.sort(Hg);let A=f===!0?Math.PI:1;for(let re=0,X=h.length;re<X;re++){let L=h[re],O=L.color,k=L.intensity,Y=L.distance,Q=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=O.r*k*A,p+=O.g*k*A,g+=O.b*k*A;else if(L.isLightProbe){for(let J=0;J<9;J++)s.probe[J].addScaledVector(L.sh.coefficients[J],k);w++}else if(L.isDirectionalLight){let J=t.get(L);if(J.color.copy(L.color).multiplyScalar(L.intensity*A),L.castShadow){let ne=L.shadow,V=n.get(L);V.shadowBias=ne.bias,V.shadowNormalBias=ne.normalBias,V.shadowRadius=ne.radius,V.shadowMapSize=ne.mapSize,s.directionalShadow[_]=V,s.directionalShadowMap[_]=Q,s.directionalShadowMatrix[_]=L.shadow.matrix,y++}s.directional[_]=J,_++}else if(L.isSpotLight){let J=t.get(L);J.position.setFromMatrixPosition(L.matrixWorld),J.color.copy(O).multiplyScalar(k*A),J.distance=Y,J.coneCos=Math.cos(L.angle),J.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),J.decay=L.decay,s.spot[d]=J;let ne=L.shadow;if(L.map&&(s.spotLightMap[C]=L.map,C++,ne.updateMatrices(L),L.castShadow&&K++),s.spotLightMatrix[d]=ne.matrix,L.castShadow){let V=n.get(L);V.shadowBias=ne.bias,V.shadowNormalBias=ne.normalBias,V.shadowRadius=ne.radius,V.shadowMapSize=ne.mapSize,s.spotShadow[d]=V,s.spotShadowMap[d]=Q,R++}d++}else if(L.isRectAreaLight){let J=t.get(L);J.color.copy(O).multiplyScalar(k),J.halfWidth.set(L.width*.5,0,0),J.halfHeight.set(0,L.height*.5,0),s.rectArea[S]=J,S++}else if(L.isPointLight){let J=t.get(L);if(J.color.copy(L.color).multiplyScalar(L.intensity*A),J.distance=L.distance,J.decay=L.decay,L.castShadow){let ne=L.shadow,V=n.get(L);V.shadowBias=ne.bias,V.shadowNormalBias=ne.normalBias,V.shadowRadius=ne.radius,V.shadowMapSize=ne.mapSize,V.shadowCameraNear=ne.camera.near,V.shadowCameraFar=ne.camera.far,s.pointShadow[m]=V,s.pointShadowMap[m]=Q,s.pointShadowMatrix[m]=L.shadow.matrix,U++}s.point[m]=J,m++}else if(L.isHemisphereLight){let J=t.get(L);J.skyColor.copy(L.color).multiplyScalar(k*A),J.groundColor.copy(L.groundColor).multiplyScalar(k*A),s.hemi[x]=J,x++}}S>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Oe.LTC_FLOAT_1,s.rectAreaLTC2=Oe.LTC_FLOAT_2):(s.rectAreaLTC1=Oe.LTC_HALF_1,s.rectAreaLTC2=Oe.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Oe.LTC_FLOAT_1,s.rectAreaLTC2=Oe.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Oe.LTC_HALF_1,s.rectAreaLTC2=Oe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=u,s.ambient[1]=p,s.ambient[2]=g;let q=s.hash;(q.directionalLength!==_||q.pointLength!==m||q.spotLength!==d||q.rectAreaLength!==S||q.hemiLength!==x||q.numDirectionalShadows!==y||q.numPointShadows!==U||q.numSpotShadows!==R||q.numSpotMaps!==C||q.numLightProbes!==w)&&(s.directional.length=_,s.spot.length=d,s.rectArea.length=S,s.point.length=m,s.hemi.length=x,s.directionalShadow.length=y,s.directionalShadowMap.length=y,s.pointShadow.length=U,s.pointShadowMap.length=U,s.spotShadow.length=R,s.spotShadowMap.length=R,s.directionalShadowMatrix.length=y,s.pointShadowMatrix.length=U,s.spotLightMatrix.length=R+C-K,s.spotLightMap.length=C,s.numSpotLightShadowsWithMaps=K,s.numLightProbes=w,q.directionalLength=_,q.pointLength=m,q.spotLength=d,q.rectAreaLength=S,q.hemiLength=x,q.numDirectionalShadows=y,q.numPointShadows=U,q.numSpotShadows=R,q.numSpotMaps=C,q.numLightProbes=w,s.version=zg++)}function c(h,f){let u=0,p=0,g=0,_=0,m=0,d=f.matrixWorldInverse;for(let S=0,x=h.length;S<x;S++){let y=h[S];if(y.isDirectionalLight){let U=s.directional[u];U.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),U.direction.sub(r),U.direction.transformDirection(d),u++}else if(y.isSpotLight){let U=s.spot[g];U.position.setFromMatrixPosition(y.matrixWorld),U.position.applyMatrix4(d),U.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),U.direction.sub(r),U.direction.transformDirection(d),g++}else if(y.isRectAreaLight){let U=s.rectArea[_];U.position.setFromMatrixPosition(y.matrixWorld),U.position.applyMatrix4(d),a.identity(),o.copy(y.matrixWorld),o.premultiply(d),a.extractRotation(o),U.halfWidth.set(y.width*.5,0,0),U.halfHeight.set(0,y.height*.5,0),U.halfWidth.applyMatrix4(a),U.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){let U=s.point[p];U.position.setFromMatrixPosition(y.matrixWorld),U.position.applyMatrix4(d),p++}else if(y.isHemisphereLight){let U=s.hemi[m];U.direction.setFromMatrixPosition(y.matrixWorld),U.direction.transformDirection(d),m++}}}return{setup:l,setupView:c,state:s}}function Dh(i,e){let t=new kg(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function o(f){n.push(f)}function a(f){s.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Gg(i,e){let t=new WeakMap;function n(r,o=0){let a=t.get(r),l;return a===void 0?(l=new Dh(i,e),t.set(r,[l])):o>=a.length?(l=new Dh(i,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:n,dispose:s}}var cl=class extends Ri{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},hl=class extends Ri{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Vg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Wg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Xg(i,e,t){let n=new ar,s=new Te,r=new Te,o=new yt,a=new cl({depthPacking:$f}),l=new hl,c={},h=t.maxTextureSize,f={[Ei]:_n,[_n]:Ei,[qt]:qt},u=new ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Te},radius:{value:4}},vertexShader:Vg,fragmentShader:Wg}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let g=new Dt;g.setAttribute("position",new bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new ot(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jh;let d=this.type;this.render=function(R,C,K){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;let w=i.getRenderTarget(),A=i.getActiveCubeFace(),q=i.getActiveMipmapLevel(),re=i.state;re.setBlending(vi),re.buffers.color.setClear(1,1,1,1),re.buffers.depth.setTest(!0),re.setScissorTest(!1);let X=d!==ti&&this.type===ti,L=d===ti&&this.type!==ti;for(let O=0,k=R.length;O<k;O++){let Y=R[O],Q=Y.shadow;if(Q===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;s.copy(Q.mapSize);let J=Q.getFrameExtents();if(s.multiply(J),r.copy(Q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/J.x),s.x=r.x*J.x,Q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/J.y),s.y=r.y*J.y,Q.mapSize.y=r.y)),Q.map===null||X===!0||L===!0){let V=this.type!==ti?{minFilter:en,magFilter:en}:{};Q.map!==null&&Q.map.dispose(),Q.map=new oi(s.x,s.y,V),Q.map.texture.name=Y.name+".shadowMap",Q.camera.updateProjectionMatrix()}i.setRenderTarget(Q.map),i.clear();let ne=Q.getViewportCount();for(let V=0;V<ne;V++){let le=Q.getViewport(V);o.set(r.x*le.x,r.y*le.y,r.x*le.z,r.y*le.w),re.viewport(o),Q.updateMatrices(Y,V),n=Q.getFrustum(),y(C,K,Q.camera,Y,this.type)}Q.isPointLightShadow!==!0&&this.type===ti&&S(Q,K),Q.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(w,A,q)};function S(R,C){let K=e.update(_);u.defines.VSM_SAMPLES!==R.blurSamples&&(u.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new oi(s.x,s.y)),u.uniforms.shadow_pass.value=R.map.texture,u.uniforms.resolution.value=R.mapSize,u.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(C,null,K,u,_,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(C,null,K,p,_,null)}function x(R,C,K,w){let A=null,q=K.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(q!==void 0)A=q;else if(A=K.isPointLight===!0?l:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let re=A.uuid,X=C.uuid,L=c[re];L===void 0&&(L={},c[re]=L);let O=L[X];O===void 0&&(O=A.clone(),L[X]=O,C.addEventListener("dispose",U)),A=O}if(A.visible=C.visible,A.wireframe=C.wireframe,w===ti?A.side=C.shadowSide!==null?C.shadowSide:C.side:A.side=C.shadowSide!==null?C.shadowSide:f[C.side],A.alphaMap=C.alphaMap,A.alphaTest=C.alphaTest,A.map=C.map,A.clipShadows=C.clipShadows,A.clippingPlanes=C.clippingPlanes,A.clipIntersection=C.clipIntersection,A.displacementMap=C.displacementMap,A.displacementScale=C.displacementScale,A.displacementBias=C.displacementBias,A.wireframeLinewidth=C.wireframeLinewidth,A.linewidth=C.linewidth,K.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let re=i.properties.get(A);re.light=K}return A}function y(R,C,K,w,A){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&A===ti)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,R.matrixWorld);let X=e.update(R),L=R.material;if(Array.isArray(L)){let O=X.groups;for(let k=0,Y=O.length;k<Y;k++){let Q=O[k],J=L[Q.materialIndex];if(J&&J.visible){let ne=x(R,J,w,A);R.onBeforeShadow(i,R,C,K,X,ne,Q),i.renderBufferDirect(K,null,X,ne,R,Q),R.onAfterShadow(i,R,C,K,X,ne,Q)}}}else if(L.visible){let O=x(R,L,w,A);R.onBeforeShadow(i,R,C,K,X,O,null),i.renderBufferDirect(K,null,X,O,R,null),R.onAfterShadow(i,R,C,K,X,O,null)}}let re=R.children;for(let X=0,L=re.length;X<L;X++)y(re[X],C,K,w,A)}function U(R){R.target.removeEventListener("dispose",U);for(let K in c){let w=c[K],A=R.target.uuid;A in w&&(w[A].dispose(),delete w[A])}}}function qg(i,e,t){let n=t.isWebGL2;function s(){let z=!1,Ue=new yt,_e=null,$e=new yt(0,0,0,0);return{setMask:function(Ye){_e!==Ye&&!z&&(i.colorMask(Ye,Ye,Ye,Ye),_e=Ye)},setLocked:function(Ye){z=Ye},setClear:function(Ye,at,ee,It,Je){Je===!0&&(Ye*=It,at*=It,ee*=It),Ue.set(Ye,at,ee,It),$e.equals(Ue)===!1&&(i.clearColor(Ye,at,ee,It),$e.copy(Ue))},reset:function(){z=!1,_e=null,$e.set(-1,0,0,0)}}}function r(){let z=!1,Ue=null,_e=null,$e=null;return{setTest:function(Ye){Ye?xe(i.DEPTH_TEST):Ce(i.DEPTH_TEST)},setMask:function(Ye){Ue!==Ye&&!z&&(i.depthMask(Ye),Ue=Ye)},setFunc:function(Ye){if(_e!==Ye){switch(Ye){case wf:i.depthFunc(i.NEVER);break;case Tf:i.depthFunc(i.ALWAYS);break;case Af:i.depthFunc(i.LESS);break;case oo:i.depthFunc(i.LEQUAL);break;case Rf:i.depthFunc(i.EQUAL);break;case Cf:i.depthFunc(i.GEQUAL);break;case Pf:i.depthFunc(i.GREATER);break;case If:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}_e=Ye}},setLocked:function(Ye){z=Ye},setClear:function(Ye){$e!==Ye&&(i.clearDepth(Ye),$e=Ye)},reset:function(){z=!1,Ue=null,_e=null,$e=null}}}function o(){let z=!1,Ue=null,_e=null,$e=null,Ye=null,at=null,ee=null,It=null,Je=null;return{setTest:function(ze){z||(ze?xe(i.STENCIL_TEST):Ce(i.STENCIL_TEST))},setMask:function(ze){Ue!==ze&&!z&&(i.stencilMask(ze),Ue=ze)},setFunc:function(ze,kt,tn){(_e!==ze||$e!==kt||Ye!==tn)&&(i.stencilFunc(ze,kt,tn),_e=ze,$e=kt,Ye=tn)},setOp:function(ze,kt,tn){(at!==ze||ee!==kt||It!==tn)&&(i.stencilOp(ze,kt,tn),at=ze,ee=kt,It=tn)},setLocked:function(ze){z=ze},setClear:function(ze){Je!==ze&&(i.clearStencil(ze),Je=ze)},reset:function(){z=!1,Ue=null,_e=null,$e=null,Ye=null,at=null,ee=null,It=null,Je=null}}}let a=new s,l=new r,c=new o,h=new WeakMap,f=new WeakMap,u={},p={},g=new WeakMap,_=[],m=null,d=!1,S=null,x=null,y=null,U=null,R=null,C=null,K=null,w=new ct(0,0,0),A=0,q=!1,re=null,X=null,L=null,O=null,k=null,Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Q=!1,J=0,ne=i.getParameter(i.VERSION);ne.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(ne)[1]),Q=J>=1):ne.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),Q=J>=2);let V=null,le={},W=i.getParameter(i.SCISSOR_BOX),j=i.getParameter(i.VIEWPORT),me=new yt().fromArray(W),ve=new yt().fromArray(j);function oe(z,Ue,_e,$e){let Ye=new Uint8Array(4),at=i.createTexture();i.bindTexture(z,at),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ee=0;ee<_e;ee++)n&&(z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY)?i.texImage3D(Ue,0,i.RGBA,1,1,$e,0,i.RGBA,i.UNSIGNED_BYTE,Ye):i.texImage2D(Ue+ee,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ye);return at}let Ae={};Ae[i.TEXTURE_2D]=oe(i.TEXTURE_2D,i.TEXTURE_2D,1),Ae[i.TEXTURE_CUBE_MAP]=oe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ae[i.TEXTURE_2D_ARRAY]=oe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ae[i.TEXTURE_3D]=oe(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),xe(i.DEPTH_TEST),l.setFunc(oo),he(!1),T(fc),xe(i.CULL_FACE),se(vi);function xe(z){u[z]!==!0&&(i.enable(z),u[z]=!0)}function Ce(z){u[z]!==!1&&(i.disable(z),u[z]=!1)}function De(z,Ue){return p[z]!==Ue?(i.bindFramebuffer(z,Ue),p[z]=Ue,n&&(z===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=Ue),z===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=Ue)),!0):!1}function D(z,Ue){let _e=_,$e=!1;if(z)if(_e=g.get(Ue),_e===void 0&&(_e=[],g.set(Ue,_e)),z.isWebGLMultipleRenderTargets){let Ye=z.texture;if(_e.length!==Ye.length||_e[0]!==i.COLOR_ATTACHMENT0){for(let at=0,ee=Ye.length;at<ee;at++)_e[at]=i.COLOR_ATTACHMENT0+at;_e.length=Ye.length,$e=!0}}else _e[0]!==i.COLOR_ATTACHMENT0&&(_e[0]=i.COLOR_ATTACHMENT0,$e=!0);else _e[0]!==i.BACK&&(_e[0]=i.BACK,$e=!0);$e&&(t.isWebGL2?i.drawBuffers(_e):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(_e))}function be(z){return m!==z?(i.useProgram(z),m=z,!0):!1}let ae={[Hi]:i.FUNC_ADD,[hf]:i.FUNC_SUBTRACT,[uf]:i.FUNC_REVERSE_SUBTRACT};if(n)ae[gc]=i.MIN,ae[_c]=i.MAX;else{let z=e.get("EXT_blend_minmax");z!==null&&(ae[gc]=z.MIN_EXT,ae[_c]=z.MAX_EXT)}let de={[ff]:i.ZERO,[df]:i.ONE,[pf]:i.SRC_COLOR,[Xa]:i.SRC_ALPHA,[vf]:i.SRC_ALPHA_SATURATE,[xf]:i.DST_COLOR,[gf]:i.DST_ALPHA,[mf]:i.ONE_MINUS_SRC_COLOR,[qa]:i.ONE_MINUS_SRC_ALPHA,[yf]:i.ONE_MINUS_DST_COLOR,[_f]:i.ONE_MINUS_DST_ALPHA,[Mf]:i.CONSTANT_COLOR,[bf]:i.ONE_MINUS_CONSTANT_COLOR,[Sf]:i.CONSTANT_ALPHA,[Ef]:i.ONE_MINUS_CONSTANT_ALPHA};function se(z,Ue,_e,$e,Ye,at,ee,It,Je,ze){if(z===vi){d===!0&&(Ce(i.BLEND),d=!1);return}if(d===!1&&(xe(i.BLEND),d=!0),z!==cf){if(z!==S||ze!==q){if((x!==Hi||R!==Hi)&&(i.blendEquation(i.FUNC_ADD),x=Hi,R=Hi),ze)switch(z){case Es:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case dc:i.blendFunc(i.ONE,i.ONE);break;case pc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case mc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Es:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case dc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case pc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case mc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}y=null,U=null,C=null,K=null,w.set(0,0,0),A=0,S=z,q=ze}return}Ye=Ye||Ue,at=at||_e,ee=ee||$e,(Ue!==x||Ye!==R)&&(i.blendEquationSeparate(ae[Ue],ae[Ye]),x=Ue,R=Ye),(_e!==y||$e!==U||at!==C||ee!==K)&&(i.blendFuncSeparate(de[_e],de[$e],de[at],de[ee]),y=_e,U=$e,C=at,K=ee),(It.equals(w)===!1||Je!==A)&&(i.blendColor(It.r,It.g,It.b,Je),w.copy(It),A=Je),S=z,q=!1}function qe(z,Ue){z.side===qt?Ce(i.CULL_FACE):xe(i.CULL_FACE);let _e=z.side===_n;Ue&&(_e=!_e),he(_e),z.blending===Es&&z.transparent===!1?se(vi):se(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),l.setFunc(z.depthFunc),l.setTest(z.depthTest),l.setMask(z.depthWrite),a.setMask(z.colorWrite);let $e=z.stencilWrite;c.setTest($e),$e&&(c.setMask(z.stencilWriteMask),c.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),c.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Z(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?xe(i.SAMPLE_ALPHA_TO_COVERAGE):Ce(i.SAMPLE_ALPHA_TO_COVERAGE)}function he(z){re!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),re=z)}function T(z){z!==of?(xe(i.CULL_FACE),z!==X&&(z===fc?i.cullFace(i.BACK):z===af?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ce(i.CULL_FACE),X=z}function b(z){z!==L&&(Q&&i.lineWidth(z),L=z)}function Z(z,Ue,_e){z?(xe(i.POLYGON_OFFSET_FILL),(O!==Ue||k!==_e)&&(i.polygonOffset(Ue,_e),O=Ue,k=_e)):Ce(i.POLYGON_OFFSET_FILL)}function ye(z){z?xe(i.SCISSOR_TEST):Ce(i.SCISSOR_TEST)}function ue(z){z===void 0&&(z=i.TEXTURE0+Y-1),V!==z&&(i.activeTexture(z),V=z)}function ie(z,Ue,_e){_e===void 0&&(V===null?_e=i.TEXTURE0+Y-1:_e=V);let $e=le[_e];$e===void 0&&($e={type:void 0,texture:void 0},le[_e]=$e),($e.type!==z||$e.texture!==Ue)&&(V!==_e&&(i.activeTexture(_e),V=_e),i.bindTexture(z,Ue||Ae[z]),$e.type=z,$e.texture=Ue)}function G(){let z=le[V];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function Ie(){try{i.compressedTexImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Be(){try{i.compressedTexImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Fe(){try{i.texSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function et(){try{i.texSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function fe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function tt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ze(){try{i.texStorage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function We(){try{i.texStorage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Qe(){try{i.texImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ke(){try{i.texImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ge(z){me.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),me.copy(z))}function dt(z){ve.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),ve.copy(z))}function Mt(z,Ue){let _e=f.get(Ue);_e===void 0&&(_e=new WeakMap,f.set(Ue,_e));let $e=_e.get(z);$e===void 0&&($e=i.getUniformBlockIndex(Ue,z.name),_e.set(z,$e))}function rt(z,Ue){let $e=f.get(Ue).get(z);h.get(Ue)!==$e&&(i.uniformBlockBinding(Ue,$e,z.__bindingPointIndex),h.set(Ue,$e))}function Re(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},V=null,le={},p={},g=new WeakMap,_=[],m=null,d=!1,S=null,x=null,y=null,U=null,R=null,C=null,K=null,w=new ct(0,0,0),A=0,q=!1,re=null,X=null,L=null,O=null,k=null,me.set(0,0,i.canvas.width,i.canvas.height),ve.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:xe,disable:Ce,bindFramebuffer:De,drawBuffers:D,useProgram:be,setBlending:se,setMaterial:qe,setFlipSided:he,setCullFace:T,setLineWidth:b,setPolygonOffset:Z,setScissorTest:ye,activeTexture:ue,bindTexture:ie,unbindTexture:G,compressedTexImage2D:Ie,compressedTexImage3D:Be,texImage2D:Qe,texImage3D:ke,updateUBOMapping:Mt,uniformBlockBinding:rt,texStorage2D:Ze,texStorage3D:We,texSubImage2D:Fe,texSubImage3D:et,compressedTexSubImage2D:fe,compressedTexSubImage3D:tt,scissor:Ge,viewport:dt,reset:Re}}function Yg(i,e,t,n,s,r,o){let a=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,f,u=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,b){return p?new OffscreenCanvas(T,b):rr("canvas")}function _(T,b,Z,ye){let ue=1;if((T.width>ye||T.height>ye)&&(ue=ye/Math.max(T.width,T.height)),ue<1||b===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){let ie=b?ja:Math.floor,G=ie(ue*T.width),Ie=ie(ue*T.height);f===void 0&&(f=g(G,Ie));let Be=Z?g(G,Ie):f;return Be.width=G,Be.height=Ie,Be.getContext("2d").drawImage(T,0,0,G,Ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+G+"x"+Ie+")."),Be}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function m(T){return Kc(T.width)&&Kc(T.height)}function d(T){return a?!1:T.wrapS!==Fn||T.wrapT!==Fn||T.minFilter!==en&&T.minFilter!==Tn}function S(T,b){return T.generateMipmaps&&b&&T.minFilter!==en&&T.minFilter!==Tn}function x(T){i.generateMipmap(T)}function y(T,b,Z,ye,ue=!1){if(a===!1)return b;if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ie=b;if(b===i.RED&&(Z===i.FLOAT&&(ie=i.R32F),Z===i.HALF_FLOAT&&(ie=i.R16F),Z===i.UNSIGNED_BYTE&&(ie=i.R8)),b===i.RED_INTEGER&&(Z===i.UNSIGNED_BYTE&&(ie=i.R8UI),Z===i.UNSIGNED_SHORT&&(ie=i.R16UI),Z===i.UNSIGNED_INT&&(ie=i.R32UI),Z===i.BYTE&&(ie=i.R8I),Z===i.SHORT&&(ie=i.R16I),Z===i.INT&&(ie=i.R32I)),b===i.RG&&(Z===i.FLOAT&&(ie=i.RG32F),Z===i.HALF_FLOAT&&(ie=i.RG16F),Z===i.UNSIGNED_BYTE&&(ie=i.RG8)),b===i.RGBA){let G=ue?co:Ct.getTransfer(ye);Z===i.FLOAT&&(ie=i.RGBA32F),Z===i.HALF_FLOAT&&(ie=i.RGBA16F),Z===i.UNSIGNED_BYTE&&(ie=G===Ft?i.SRGB8_ALPHA8:i.RGBA8),Z===i.UNSIGNED_SHORT_4_4_4_4&&(ie=i.RGBA4),Z===i.UNSIGNED_SHORT_5_5_5_1&&(ie=i.RGB5_A1)}return(ie===i.R16F||ie===i.R32F||ie===i.RG16F||ie===i.RG32F||ie===i.RGBA16F||ie===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function U(T,b,Z){return S(T,Z)===!0||T.isFramebufferTexture&&T.minFilter!==en&&T.minFilter!==Tn?Math.log2(Math.max(b.width,b.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?b.mipmaps.length:1}function R(T){return T===en||T===yc||T===aa?i.NEAREST:i.LINEAR}function C(T){let b=T.target;b.removeEventListener("dispose",C),w(b),b.isVideoTexture&&h.delete(b)}function K(T){let b=T.target;b.removeEventListener("dispose",K),q(b)}function w(T){let b=n.get(T);if(b.__webglInit===void 0)return;let Z=T.source,ye=u.get(Z);if(ye){let ue=ye[b.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&A(T),Object.keys(ye).length===0&&u.delete(Z)}n.remove(T)}function A(T){let b=n.get(T);i.deleteTexture(b.__webglTexture);let Z=T.source,ye=u.get(Z);delete ye[b.__cacheKey],o.memory.textures--}function q(T){let b=T.texture,Z=n.get(T),ye=n.get(b);if(ye.__webglTexture!==void 0&&(i.deleteTexture(ye.__webglTexture),o.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let ue=0;ue<6;ue++){if(Array.isArray(Z.__webglFramebuffer[ue]))for(let ie=0;ie<Z.__webglFramebuffer[ue].length;ie++)i.deleteFramebuffer(Z.__webglFramebuffer[ue][ie]);else i.deleteFramebuffer(Z.__webglFramebuffer[ue]);Z.__webglDepthbuffer&&i.deleteRenderbuffer(Z.__webglDepthbuffer[ue])}else{if(Array.isArray(Z.__webglFramebuffer))for(let ue=0;ue<Z.__webglFramebuffer.length;ue++)i.deleteFramebuffer(Z.__webglFramebuffer[ue]);else i.deleteFramebuffer(Z.__webglFramebuffer);if(Z.__webglDepthbuffer&&i.deleteRenderbuffer(Z.__webglDepthbuffer),Z.__webglMultisampledFramebuffer&&i.deleteFramebuffer(Z.__webglMultisampledFramebuffer),Z.__webglColorRenderbuffer)for(let ue=0;ue<Z.__webglColorRenderbuffer.length;ue++)Z.__webglColorRenderbuffer[ue]&&i.deleteRenderbuffer(Z.__webglColorRenderbuffer[ue]);Z.__webglDepthRenderbuffer&&i.deleteRenderbuffer(Z.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let ue=0,ie=b.length;ue<ie;ue++){let G=n.get(b[ue]);G.__webglTexture&&(i.deleteTexture(G.__webglTexture),o.memory.textures--),n.remove(b[ue])}n.remove(b),n.remove(T)}let re=0;function X(){re=0}function L(){let T=re;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),re+=1,T}function O(T){let b=[];return b.push(T.wrapS),b.push(T.wrapT),b.push(T.wrapR||0),b.push(T.magFilter),b.push(T.minFilter),b.push(T.anisotropy),b.push(T.internalFormat),b.push(T.format),b.push(T.type),b.push(T.generateMipmaps),b.push(T.premultiplyAlpha),b.push(T.flipY),b.push(T.unpackAlignment),b.push(T.colorSpace),b.join()}function k(T,b){let Z=n.get(T);if(T.isVideoTexture&&qe(T),T.isRenderTargetTexture===!1&&T.version>0&&Z.__version!==T.version){let ye=T.image;if(ye===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ye.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{me(Z,T,b);return}}t.bindTexture(i.TEXTURE_2D,Z.__webglTexture,i.TEXTURE0+b)}function Y(T,b){let Z=n.get(T);if(T.version>0&&Z.__version!==T.version){me(Z,T,b);return}t.bindTexture(i.TEXTURE_2D_ARRAY,Z.__webglTexture,i.TEXTURE0+b)}function Q(T,b){let Z=n.get(T);if(T.version>0&&Z.__version!==T.version){me(Z,T,b);return}t.bindTexture(i.TEXTURE_3D,Z.__webglTexture,i.TEXTURE0+b)}function J(T,b){let Z=n.get(T);if(T.version>0&&Z.__version!==T.version){ve(Z,T,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture,i.TEXTURE0+b)}let ne={[Cs]:i.REPEAT,[Fn]:i.CLAMP_TO_EDGE,[Ja]:i.MIRRORED_REPEAT},V={[en]:i.NEAREST,[yc]:i.NEAREST_MIPMAP_NEAREST,[aa]:i.NEAREST_MIPMAP_LINEAR,[Tn]:i.LINEAR,[Hf]:i.LINEAR_MIPMAP_NEAREST,[ir]:i.LINEAR_MIPMAP_LINEAR},le={[jf]:i.NEVER,[sd]:i.ALWAYS,[Qf]:i.LESS,[hu]:i.LEQUAL,[ed]:i.EQUAL,[id]:i.GEQUAL,[td]:i.GREATER,[nd]:i.NOTEQUAL};function W(T,b,Z){if(Z?(i.texParameteri(T,i.TEXTURE_WRAP_S,ne[b.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,ne[b.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,ne[b.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,V[b.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,V[b.minFilter])):(i.texParameteri(T,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(T,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(b.wrapS!==Fn||b.wrapT!==Fn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(T,i.TEXTURE_MAG_FILTER,R(b.magFilter)),i.texParameteri(T,i.TEXTURE_MIN_FILTER,R(b.minFilter)),b.minFilter!==en&&b.minFilter!==Tn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,le[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let ye=e.get("EXT_texture_filter_anisotropic");if(b.magFilter===en||b.minFilter!==aa&&b.minFilter!==ir||b.type===ii&&e.has("OES_texture_float_linear")===!1||a===!1&&b.type===sr&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||n.get(b).__currentAnisotropy)&&(i.texParameterf(T,ye.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy)}}function j(T,b){let Z=!1;T.__webglInit===void 0&&(T.__webglInit=!0,b.addEventListener("dispose",C));let ye=b.source,ue=u.get(ye);ue===void 0&&(ue={},u.set(ye,ue));let ie=O(b);if(ie!==T.__cacheKey){ue[ie]===void 0&&(ue[ie]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),ue[ie].usedTimes++;let G=ue[T.__cacheKey];G!==void 0&&(ue[T.__cacheKey].usedTimes--,G.usedTimes===0&&A(b)),T.__cacheKey=ie,T.__webglTexture=ue[ie].texture}return Z}function me(T,b,Z){let ye=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ye=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ye=i.TEXTURE_3D);let ue=j(T,b),ie=b.source;t.bindTexture(ye,T.__webglTexture,i.TEXTURE0+Z);let G=n.get(ie);if(ie.version!==G.__version||ue===!0){t.activeTexture(i.TEXTURE0+Z);let Ie=Ct.getPrimaries(Ct.workingColorSpace),Be=b.colorSpace===Rn?null:Ct.getPrimaries(b.colorSpace),Fe=b.colorSpace===Rn||Ie===Be?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);let et=d(b)&&m(b.image)===!1,fe=_(b.image,et,!1,s.maxTextureSize);fe=he(b,fe);let tt=m(fe)||a,Ze=r.convert(b.format,b.colorSpace),We=r.convert(b.type),Qe=y(b.internalFormat,Ze,We,b.colorSpace,b.isVideoTexture);W(ye,b,tt);let ke,Ge=b.mipmaps,dt=a&&b.isVideoTexture!==!0&&Qe!==au,Mt=G.__version===void 0||ue===!0,rt=U(b,fe,tt);if(b.isDepthTexture)Qe=i.DEPTH_COMPONENT,a?b.type===ii?Qe=i.DEPTH_COMPONENT32F:b.type===yi?Qe=i.DEPTH_COMPONENT24:b.type===Gi?Qe=i.DEPTH24_STENCIL8:Qe=i.DEPTH_COMPONENT16:b.type===ii&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===Vi&&Qe===i.DEPTH_COMPONENT&&b.type!==Ol&&b.type!==yi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=yi,We=r.convert(b.type)),b.format===Ps&&Qe===i.DEPTH_COMPONENT&&(Qe=i.DEPTH_STENCIL,b.type!==Gi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=Gi,We=r.convert(b.type))),Mt&&(dt?t.texStorage2D(i.TEXTURE_2D,1,Qe,fe.width,fe.height):t.texImage2D(i.TEXTURE_2D,0,Qe,fe.width,fe.height,0,Ze,We,null));else if(b.isDataTexture)if(Ge.length>0&&tt){dt&&Mt&&t.texStorage2D(i.TEXTURE_2D,rt,Qe,Ge[0].width,Ge[0].height);for(let Re=0,z=Ge.length;Re<z;Re++)ke=Ge[Re],dt?t.texSubImage2D(i.TEXTURE_2D,Re,0,0,ke.width,ke.height,Ze,We,ke.data):t.texImage2D(i.TEXTURE_2D,Re,Qe,ke.width,ke.height,0,Ze,We,ke.data);b.generateMipmaps=!1}else dt?(Mt&&t.texStorage2D(i.TEXTURE_2D,rt,Qe,fe.width,fe.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,fe.width,fe.height,Ze,We,fe.data)):t.texImage2D(i.TEXTURE_2D,0,Qe,fe.width,fe.height,0,Ze,We,fe.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){dt&&Mt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,rt,Qe,Ge[0].width,Ge[0].height,fe.depth);for(let Re=0,z=Ge.length;Re<z;Re++)ke=Ge[Re],b.format!==An?Ze!==null?dt?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Re,0,0,0,ke.width,ke.height,fe.depth,Ze,ke.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Re,Qe,ke.width,ke.height,fe.depth,0,ke.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):dt?t.texSubImage3D(i.TEXTURE_2D_ARRAY,Re,0,0,0,ke.width,ke.height,fe.depth,Ze,We,ke.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Re,Qe,ke.width,ke.height,fe.depth,0,Ze,We,ke.data)}else{dt&&Mt&&t.texStorage2D(i.TEXTURE_2D,rt,Qe,Ge[0].width,Ge[0].height);for(let Re=0,z=Ge.length;Re<z;Re++)ke=Ge[Re],b.format!==An?Ze!==null?dt?t.compressedTexSubImage2D(i.TEXTURE_2D,Re,0,0,ke.width,ke.height,Ze,ke.data):t.compressedTexImage2D(i.TEXTURE_2D,Re,Qe,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):dt?t.texSubImage2D(i.TEXTURE_2D,Re,0,0,ke.width,ke.height,Ze,We,ke.data):t.texImage2D(i.TEXTURE_2D,Re,Qe,ke.width,ke.height,0,Ze,We,ke.data)}else if(b.isDataArrayTexture)dt?(Mt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,rt,Qe,fe.width,fe.height,fe.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,Ze,We,fe.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Qe,fe.width,fe.height,fe.depth,0,Ze,We,fe.data);else if(b.isData3DTexture)dt?(Mt&&t.texStorage3D(i.TEXTURE_3D,rt,Qe,fe.width,fe.height,fe.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,Ze,We,fe.data)):t.texImage3D(i.TEXTURE_3D,0,Qe,fe.width,fe.height,fe.depth,0,Ze,We,fe.data);else if(b.isFramebufferTexture){if(Mt)if(dt)t.texStorage2D(i.TEXTURE_2D,rt,Qe,fe.width,fe.height);else{let Re=fe.width,z=fe.height;for(let Ue=0;Ue<rt;Ue++)t.texImage2D(i.TEXTURE_2D,Ue,Qe,Re,z,0,Ze,We,null),Re>>=1,z>>=1}}else if(Ge.length>0&&tt){dt&&Mt&&t.texStorage2D(i.TEXTURE_2D,rt,Qe,Ge[0].width,Ge[0].height);for(let Re=0,z=Ge.length;Re<z;Re++)ke=Ge[Re],dt?t.texSubImage2D(i.TEXTURE_2D,Re,0,0,Ze,We,ke):t.texImage2D(i.TEXTURE_2D,Re,Qe,Ze,We,ke);b.generateMipmaps=!1}else dt?(Mt&&t.texStorage2D(i.TEXTURE_2D,rt,Qe,fe.width,fe.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ze,We,fe)):t.texImage2D(i.TEXTURE_2D,0,Qe,Ze,We,fe);S(b,tt)&&x(ye),G.__version=ie.version,b.onUpdate&&b.onUpdate(b)}T.__version=b.version}function ve(T,b,Z){if(b.image.length!==6)return;let ye=j(T,b),ue=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+Z);let ie=n.get(ue);if(ue.version!==ie.__version||ye===!0){t.activeTexture(i.TEXTURE0+Z);let G=Ct.getPrimaries(Ct.workingColorSpace),Ie=b.colorSpace===Rn?null:Ct.getPrimaries(b.colorSpace),Be=b.colorSpace===Rn||G===Ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);let Fe=b.isCompressedTexture||b.image[0].isCompressedTexture,et=b.image[0]&&b.image[0].isDataTexture,fe=[];for(let Re=0;Re<6;Re++)!Fe&&!et?fe[Re]=_(b.image[Re],!1,!0,s.maxCubemapSize):fe[Re]=et?b.image[Re].image:b.image[Re],fe[Re]=he(b,fe[Re]);let tt=fe[0],Ze=m(tt)||a,We=r.convert(b.format,b.colorSpace),Qe=r.convert(b.type),ke=y(b.internalFormat,We,Qe,b.colorSpace),Ge=a&&b.isVideoTexture!==!0,dt=ie.__version===void 0||ye===!0,Mt=U(b,tt,Ze);W(i.TEXTURE_CUBE_MAP,b,Ze);let rt;if(Fe){Ge&&dt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Mt,ke,tt.width,tt.height);for(let Re=0;Re<6;Re++){rt=fe[Re].mipmaps;for(let z=0;z<rt.length;z++){let Ue=rt[z];b.format!==An?We!==null?Ge?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,z,0,0,Ue.width,Ue.height,We,Ue.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,z,ke,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,z,0,0,Ue.width,Ue.height,We,Qe,Ue.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,z,ke,Ue.width,Ue.height,0,We,Qe,Ue.data)}}}else{rt=b.mipmaps,Ge&&dt&&(rt.length>0&&Mt++,t.texStorage2D(i.TEXTURE_CUBE_MAP,Mt,ke,fe[0].width,fe[0].height));for(let Re=0;Re<6;Re++)if(et){Ge?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,0,0,fe[Re].width,fe[Re].height,We,Qe,fe[Re].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,ke,fe[Re].width,fe[Re].height,0,We,Qe,fe[Re].data);for(let z=0;z<rt.length;z++){let _e=rt[z].image[Re].image;Ge?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,z+1,0,0,_e.width,_e.height,We,Qe,_e.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,z+1,ke,_e.width,_e.height,0,We,Qe,_e.data)}}else{Ge?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,0,0,We,Qe,fe[Re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,ke,We,Qe,fe[Re]);for(let z=0;z<rt.length;z++){let Ue=rt[z];Ge?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,z+1,0,0,We,Qe,Ue.image[Re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,z+1,ke,We,Qe,Ue.image[Re])}}}S(b,Ze)&&x(i.TEXTURE_CUBE_MAP),ie.__version=ue.version,b.onUpdate&&b.onUpdate(b)}T.__version=b.version}function oe(T,b,Z,ye,ue,ie){let G=r.convert(Z.format,Z.colorSpace),Ie=r.convert(Z.type),Be=y(Z.internalFormat,G,Ie,Z.colorSpace);if(!n.get(b).__hasExternalTextures){let et=Math.max(1,b.width>>ie),fe=Math.max(1,b.height>>ie);ue===i.TEXTURE_3D||ue===i.TEXTURE_2D_ARRAY?t.texImage3D(ue,ie,Be,et,fe,b.depth,0,G,Ie,null):t.texImage2D(ue,ie,Be,et,fe,0,G,Ie,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),se(b)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ye,ue,n.get(Z).__webglTexture,0,de(b)):(ue===i.TEXTURE_2D||ue>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ye,ue,n.get(Z).__webglTexture,ie),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ae(T,b,Z){if(i.bindRenderbuffer(i.RENDERBUFFER,T),b.depthBuffer&&!b.stencilBuffer){let ye=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(Z||se(b)){let ue=b.depthTexture;ue&&ue.isDepthTexture&&(ue.type===ii?ye=i.DEPTH_COMPONENT32F:ue.type===yi&&(ye=i.DEPTH_COMPONENT24));let ie=de(b);se(b)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie,ye,b.width,b.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ie,ye,b.width,b.height)}else i.renderbufferStorage(i.RENDERBUFFER,ye,b.width,b.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,T)}else if(b.depthBuffer&&b.stencilBuffer){let ye=de(b);Z&&se(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ye,i.DEPTH24_STENCIL8,b.width,b.height):se(b)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ye,i.DEPTH24_STENCIL8,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,T)}else{let ye=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let ue=0;ue<ye.length;ue++){let ie=ye[ue],G=r.convert(ie.format,ie.colorSpace),Ie=r.convert(ie.type),Be=y(ie.internalFormat,G,Ie,ie.colorSpace),Fe=de(b);Z&&se(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Fe,Be,b.width,b.height):se(b)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Fe,Be,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Be,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function xe(T,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),k(b.depthTexture,0);let ye=n.get(b.depthTexture).__webglTexture,ue=de(b);if(b.depthTexture.format===Vi)se(b)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ye,0,ue):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ye,0);else if(b.depthTexture.format===Ps)se(b)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ye,0,ue):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ye,0);else throw new Error("Unknown depthTexture format")}function Ce(T){let b=n.get(T),Z=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!b.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");xe(b.__webglFramebuffer,T)}else if(Z){b.__webglDepthbuffer=[];for(let ye=0;ye<6;ye++)t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[ye]),b.__webglDepthbuffer[ye]=i.createRenderbuffer(),Ae(b.__webglDepthbuffer[ye],T,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=i.createRenderbuffer(),Ae(b.__webglDepthbuffer,T,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function De(T,b,Z){let ye=n.get(T);b!==void 0&&oe(ye.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Z!==void 0&&Ce(T)}function D(T){let b=T.texture,Z=n.get(T),ye=n.get(b);T.addEventListener("dispose",K),T.isWebGLMultipleRenderTargets!==!0&&(ye.__webglTexture===void 0&&(ye.__webglTexture=i.createTexture()),ye.__version=b.version,o.memory.textures++);let ue=T.isWebGLCubeRenderTarget===!0,ie=T.isWebGLMultipleRenderTargets===!0,G=m(T)||a;if(ue){Z.__webglFramebuffer=[];for(let Ie=0;Ie<6;Ie++)if(a&&b.mipmaps&&b.mipmaps.length>0){Z.__webglFramebuffer[Ie]=[];for(let Be=0;Be<b.mipmaps.length;Be++)Z.__webglFramebuffer[Ie][Be]=i.createFramebuffer()}else Z.__webglFramebuffer[Ie]=i.createFramebuffer()}else{if(a&&b.mipmaps&&b.mipmaps.length>0){Z.__webglFramebuffer=[];for(let Ie=0;Ie<b.mipmaps.length;Ie++)Z.__webglFramebuffer[Ie]=i.createFramebuffer()}else Z.__webglFramebuffer=i.createFramebuffer();if(ie)if(s.drawBuffers){let Ie=T.texture;for(let Be=0,Fe=Ie.length;Be<Fe;Be++){let et=n.get(Ie[Be]);et.__webglTexture===void 0&&(et.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&T.samples>0&&se(T)===!1){let Ie=ie?b:[b];Z.__webglMultisampledFramebuffer=i.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let Be=0;Be<Ie.length;Be++){let Fe=Ie[Be];Z.__webglColorRenderbuffer[Be]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Z.__webglColorRenderbuffer[Be]);let et=r.convert(Fe.format,Fe.colorSpace),fe=r.convert(Fe.type),tt=y(Fe.internalFormat,et,fe,Fe.colorSpace,T.isXRRenderTarget===!0),Ze=de(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ze,tt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Be,i.RENDERBUFFER,Z.__webglColorRenderbuffer[Be])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(Z.__webglDepthRenderbuffer=i.createRenderbuffer(),Ae(Z.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ue){t.bindTexture(i.TEXTURE_CUBE_MAP,ye.__webglTexture),W(i.TEXTURE_CUBE_MAP,b,G);for(let Ie=0;Ie<6;Ie++)if(a&&b.mipmaps&&b.mipmaps.length>0)for(let Be=0;Be<b.mipmaps.length;Be++)oe(Z.__webglFramebuffer[Ie][Be],T,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,Be);else oe(Z.__webglFramebuffer[Ie],T,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0);S(b,G)&&x(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ie){let Ie=T.texture;for(let Be=0,Fe=Ie.length;Be<Fe;Be++){let et=Ie[Be],fe=n.get(et);t.bindTexture(i.TEXTURE_2D,fe.__webglTexture),W(i.TEXTURE_2D,et,G),oe(Z.__webglFramebuffer,T,et,i.COLOR_ATTACHMENT0+Be,i.TEXTURE_2D,0),S(et,G)&&x(i.TEXTURE_2D)}t.unbindTexture()}else{let Ie=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(a?Ie=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Ie,ye.__webglTexture),W(Ie,b,G),a&&b.mipmaps&&b.mipmaps.length>0)for(let Be=0;Be<b.mipmaps.length;Be++)oe(Z.__webglFramebuffer[Be],T,b,i.COLOR_ATTACHMENT0,Ie,Be);else oe(Z.__webglFramebuffer,T,b,i.COLOR_ATTACHMENT0,Ie,0);S(b,G)&&x(Ie),t.unbindTexture()}T.depthBuffer&&Ce(T)}function be(T){let b=m(T)||a,Z=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ye=0,ue=Z.length;ye<ue;ye++){let ie=Z[ye];if(S(ie,b)){let G=T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Ie=n.get(ie).__webglTexture;t.bindTexture(G,Ie),x(G),t.unbindTexture()}}}function ae(T){if(a&&T.samples>0&&se(T)===!1){let b=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],Z=T.width,ye=T.height,ue=i.COLOR_BUFFER_BIT,ie=[],G=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ie=n.get(T),Be=T.isWebGLMultipleRenderTargets===!0;if(Be)for(let Fe=0;Fe<b.length;Fe++)t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Fe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Fe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let Fe=0;Fe<b.length;Fe++){ie.push(i.COLOR_ATTACHMENT0+Fe),T.depthBuffer&&ie.push(G);let et=Ie.__ignoreDepthValues!==void 0?Ie.__ignoreDepthValues:!1;if(et===!1&&(T.depthBuffer&&(ue|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&(ue|=i.STENCIL_BUFFER_BIT)),Be&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ie.__webglColorRenderbuffer[Fe]),et===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[G]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[G])),Be){let fe=n.get(b[Fe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,fe,0)}i.blitFramebuffer(0,0,Z,ye,0,0,Z,ye,ue,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ie)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Be)for(let Fe=0;Fe<b.length;Fe++){t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Fe,i.RENDERBUFFER,Ie.__webglColorRenderbuffer[Fe]);let et=n.get(b[Fe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Fe,i.TEXTURE_2D,et,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}}function de(T){return Math.min(s.maxSamples,T.samples)}function se(T){let b=n.get(T);return a&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function qe(T){let b=o.render.frame;h.get(T)!==b&&(h.set(T,b),T.update())}function he(T,b){let Z=T.colorSpace,ye=T.format,ue=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===$a||Z!==ri&&Z!==Rn&&(Ct.getTransfer(Z)===Ft?a===!1?e.has("EXT_sRGB")===!0&&ye===An?(T.format=$a,T.minFilter=Tn,T.generateMipmaps=!1):b=po.sRGBToLinear(b):(ye!==An||ue!==bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),b}this.allocateTextureUnit=L,this.resetTextureUnits=X,this.setTexture2D=k,this.setTexture2DArray=Y,this.setTexture3D=Q,this.setTextureCube=J,this.rebindTextures=De,this.setupRenderTarget=D,this.updateRenderTargetMipmap=be,this.updateMultisampleRenderTarget=ae,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=se}function Zg(i,e,t){let n=t.isWebGL2;function s(r,o=Rn){let a,l=Ct.getTransfer(o);if(r===bi)return i.UNSIGNED_BYTE;if(r===nu)return i.UNSIGNED_SHORT_4_4_4_4;if(r===iu)return i.UNSIGNED_SHORT_5_5_5_1;if(r===kf)return i.BYTE;if(r===Gf)return i.SHORT;if(r===Ol)return i.UNSIGNED_SHORT;if(r===tu)return i.INT;if(r===yi)return i.UNSIGNED_INT;if(r===ii)return i.FLOAT;if(r===sr)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Vf)return i.ALPHA;if(r===An)return i.RGBA;if(r===Wf)return i.LUMINANCE;if(r===Xf)return i.LUMINANCE_ALPHA;if(r===Vi)return i.DEPTH_COMPONENT;if(r===Ps)return i.DEPTH_STENCIL;if(r===$a)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===qf)return i.RED;if(r===su)return i.RED_INTEGER;if(r===Yf)return i.RG;if(r===ru)return i.RG_INTEGER;if(r===ou)return i.RGBA_INTEGER;if(r===la||r===ca||r===ha||r===ua)if(l===Ft)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===la)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ca)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ha)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ua)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===la)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ca)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ha)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ua)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===vc||r===Mc||r===bc||r===Sc)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===vc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Mc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===bc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Sc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===au)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Ec||r===wc)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Ec)return l===Ft?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===wc)return l===Ft?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Tc||r===Ac||r===Rc||r===Cc||r===Pc||r===Ic||r===Lc||r===Uc||r===Dc||r===Nc||r===Oc||r===Fc||r===Bc||r===zc)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Tc)return l===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ac)return l===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Rc)return l===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Cc)return l===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Pc)return l===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ic)return l===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Lc)return l===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Uc)return l===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Dc)return l===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Nc)return l===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Oc)return l===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Fc)return l===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Bc)return l===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===zc)return l===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===fa||r===Hc||r===kc)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===fa)return l===Ft?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Hc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===kc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Zf||r===Gc||r===Vc||r===Wc)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===fa)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Gc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Vc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Wc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Gi?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var ul=class extends on{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},gt=class extends Yt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Jg={type:"move"},er=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),d=this._getHandJoint(c,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Jg)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new gt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},fl=class extends wi{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,u=null,p=null,g=null,_=t.getContextAttributes(),m=null,d=null,S=[],x=[],y=new Te,U=null,R=new on;R.layers.enable(1),R.viewport=new yt;let C=new on;C.layers.enable(2),C.viewport=new yt;let K=[R,C],w=new ul;w.layers.enable(1),w.layers.enable(2);let A=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let j=S[W];return j===void 0&&(j=new er,S[W]=j),j.getTargetRaySpace()},this.getControllerGrip=function(W){let j=S[W];return j===void 0&&(j=new er,S[W]=j),j.getGripSpace()},this.getHand=function(W){let j=S[W];return j===void 0&&(j=new er,S[W]=j),j.getHandSpace()};function re(W){let j=x.indexOf(W.inputSource);if(j===-1)return;let me=S[j];me!==void 0&&(me.update(W.inputSource,W.frame,c||o),me.dispatchEvent({type:W.type,data:W.inputSource}))}function X(){s.removeEventListener("select",re),s.removeEventListener("selectstart",re),s.removeEventListener("selectend",re),s.removeEventListener("squeeze",re),s.removeEventListener("squeezestart",re),s.removeEventListener("squeezeend",re),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",L);for(let W=0;W<S.length;W++){let j=x[W];j!==null&&(x[W]=null,S[W].disconnect(j))}A=null,q=null,e.setRenderTarget(m),p=null,u=null,f=null,s=null,d=null,le.stop(),n.isPresenting=!1,e.setPixelRatio(U),e.setSize(y.width,y.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",re),s.addEventListener("selectstart",re),s.addEventListener("selectend",re),s.addEventListener("squeeze",re),s.addEventListener("squeezestart",re),s.addEventListener("squeezeend",re),s.addEventListener("end",X),s.addEventListener("inputsourceschange",L),_.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(y),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let j={antialias:s.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,j),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),d=new oi(p.framebufferWidth,p.framebufferHeight,{format:An,type:bi,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let j=null,me=null,ve=null;_.depth&&(ve=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,j=_.stencil?Ps:Vi,me=_.stencil?Gi:yi);let oe={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:r};f=new XRWebGLBinding(s,t),u=f.createProjectionLayer(oe),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),d=new oi(u.textureWidth,u.textureHeight,{format:An,type:bi,depthTexture:new Eo(u.textureWidth,u.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});let Ae=e.properties.get(d);Ae.__ignoreDepthValues=u.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),le.setContext(s),le.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function L(W){for(let j=0;j<W.removed.length;j++){let me=W.removed[j],ve=x.indexOf(me);ve>=0&&(x[ve]=null,S[ve].disconnect(me))}for(let j=0;j<W.added.length;j++){let me=W.added[j],ve=x.indexOf(me);if(ve===-1){for(let Ae=0;Ae<S.length;Ae++)if(Ae>=x.length){x.push(me),ve=Ae;break}else if(x[Ae]===null){x[Ae]=me,ve=Ae;break}if(ve===-1)break}let oe=S[ve];oe&&oe.connect(me)}}let O=new P,k=new P;function Y(W,j,me){O.setFromMatrixPosition(j.matrixWorld),k.setFromMatrixPosition(me.matrixWorld);let ve=O.distanceTo(k),oe=j.projectionMatrix.elements,Ae=me.projectionMatrix.elements,xe=oe[14]/(oe[10]-1),Ce=oe[14]/(oe[10]+1),De=(oe[9]+1)/oe[5],D=(oe[9]-1)/oe[5],be=(oe[8]-1)/oe[0],ae=(Ae[8]+1)/Ae[0],de=xe*be,se=xe*ae,qe=ve/(-be+ae),he=qe*-be;j.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(he),W.translateZ(qe),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();let T=xe+qe,b=Ce+qe,Z=de-he,ye=se+(ve-he),ue=De*Ce/b*T,ie=D*Ce/b*T;W.projectionMatrix.makePerspective(Z,ye,ue,ie,T,b),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function Q(W,j){j===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(j.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;w.near=C.near=R.near=W.near,w.far=C.far=R.far=W.far,(A!==w.near||q!==w.far)&&(s.updateRenderState({depthNear:w.near,depthFar:w.far}),A=w.near,q=w.far);let j=W.parent,me=w.cameras;Q(w,j);for(let ve=0;ve<me.length;ve++)Q(me[ve],j);me.length===2?Y(w,R,C):w.projectionMatrix.copy(R.projectionMatrix),J(W,w,j)};function J(W,j,me){me===null?W.matrix.copy(j.matrixWorld):(W.matrix.copy(me.matrixWorld),W.matrix.invert(),W.matrix.multiply(j.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(j.projectionMatrix),W.projectionMatrixInverse.copy(j.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Ka*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(W){l=W,u!==null&&(u.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)};let ne=null;function V(W,j){if(h=j.getViewerPose(c||o),g=j,h!==null){let me=h.views;p!==null&&(e.setRenderTargetFramebuffer(d,p.framebuffer),e.setRenderTarget(d));let ve=!1;me.length!==w.cameras.length&&(w.cameras.length=0,ve=!0);for(let oe=0;oe<me.length;oe++){let Ae=me[oe],xe=null;if(p!==null)xe=p.getViewport(Ae);else{let De=f.getViewSubImage(u,Ae);xe=De.viewport,oe===0&&(e.setRenderTargetTextures(d,De.colorTexture,u.ignoreDepthValues?void 0:De.depthStencilTexture),e.setRenderTarget(d))}let Ce=K[oe];Ce===void 0&&(Ce=new on,Ce.layers.enable(oe),Ce.viewport=new yt,K[oe]=Ce),Ce.matrix.fromArray(Ae.transform.matrix),Ce.matrix.decompose(Ce.position,Ce.quaternion,Ce.scale),Ce.projectionMatrix.fromArray(Ae.projectionMatrix),Ce.projectionMatrixInverse.copy(Ce.projectionMatrix).invert(),Ce.viewport.set(xe.x,xe.y,xe.width,xe.height),oe===0&&(w.matrix.copy(Ce.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),ve===!0&&w.cameras.push(Ce)}}for(let me=0;me<S.length;me++){let ve=x[me],oe=S[me];ve!==null&&oe!==void 0&&oe.update(ve,j,c||o)}ne&&ne(W,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),g=null}let le=new pu;le.setAnimationLoop(V),this.setAnimationLoop=function(W){ne=W},this.dispose=function(){}}};function $g(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,du(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,S,x,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),f(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),u(m,d),d.isMeshPhysicalMaterial&&p(m,d,y)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),_(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,S,x):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===_n&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===_n&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let S=e.get(d).envMap;if(S&&(m.envMap.value=S,m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;let x=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*x,t(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,S,x){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*S,m.scale.value=x*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function u(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,S){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===_n&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){let S=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Kg(i,e,t,n){let s={},r={},o=[],a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(S,x){let y=x.program;n.uniformBlockBinding(S,y)}function c(S,x){let y=s[S.id];y===void 0&&(g(S),y=h(S),s[S.id]=y,S.addEventListener("dispose",m));let U=x.program;n.updateUBOMapping(S,U);let R=e.render.frame;r[S.id]!==R&&(u(S),r[S.id]=R)}function h(S){let x=f();S.__bindingPointIndex=x;let y=i.createBuffer(),U=S.__size,R=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,U,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,y),y}function f(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(S){let x=s[S.id],y=S.uniforms,U=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let R=0,C=y.length;R<C;R++){let K=Array.isArray(y[R])?y[R]:[y[R]];for(let w=0,A=K.length;w<A;w++){let q=K[w];if(p(q,R,w,U)===!0){let re=q.__offset,X=Array.isArray(q.value)?q.value:[q.value],L=0;for(let O=0;O<X.length;O++){let k=X[O],Y=_(k);typeof k=="number"||typeof k=="boolean"?(q.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,re+L,q.__data)):k.isMatrix3?(q.__data[0]=k.elements[0],q.__data[1]=k.elements[1],q.__data[2]=k.elements[2],q.__data[3]=0,q.__data[4]=k.elements[3],q.__data[5]=k.elements[4],q.__data[6]=k.elements[5],q.__data[7]=0,q.__data[8]=k.elements[6],q.__data[9]=k.elements[7],q.__data[10]=k.elements[8],q.__data[11]=0):(k.toArray(q.__data,L),L+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,re,q.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(S,x,y,U){let R=S.value,C=x+"_"+y;if(U[C]===void 0)return typeof R=="number"||typeof R=="boolean"?U[C]=R:U[C]=R.clone(),!0;{let K=U[C];if(typeof R=="number"||typeof R=="boolean"){if(K!==R)return U[C]=R,!0}else if(K.equals(R)===!1)return K.copy(R),!0}return!1}function g(S){let x=S.uniforms,y=0,U=16;for(let C=0,K=x.length;C<K;C++){let w=Array.isArray(x[C])?x[C]:[x[C]];for(let A=0,q=w.length;A<q;A++){let re=w[A],X=Array.isArray(re.value)?re.value:[re.value];for(let L=0,O=X.length;L<O;L++){let k=X[L],Y=_(k),Q=y%U;Q!==0&&U-Q<Y.boundary&&(y+=U-Q),re.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),re.__offset=y,y+=Y.storage}}}let R=y%U;return R>0&&(y+=U-R),S.__size=y,S.__cache={},this}function _(S){let x={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(x.boundary=4,x.storage=4):S.isVector2?(x.boundary=8,x.storage=8):S.isVector3||S.isColor?(x.boundary=16,x.storage=12):S.isVector4?(x.boundary=16,x.storage=16):S.isMatrix3?(x.boundary=48,x.storage=48):S.isMatrix4?(x.boundary=64,x.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),x}function m(S){let x=S.target;x.removeEventListener("dispose",m);let y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function d(){for(let S in s)i.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}var lr=class{constructor(e={}){let{canvas:t=od(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let u;n!==null?u=n.getContextAttributes().alpha:u=o;let p=new Uint32Array(4),g=new Int32Array(4),_=null,m=null,d=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Et,this._useLegacyLights=!1,this.toneMapping=Mi,this.toneMappingExposure=1;let x=this,y=!1,U=0,R=0,C=null,K=-1,w=null,A=new yt,q=new yt,re=null,X=new ct(0),L=0,O=t.width,k=t.height,Y=1,Q=null,J=null,ne=new yt(0,0,O,k),V=new yt(0,0,O,k),le=!1,W=new ar,j=!1,me=!1,ve=null,oe=new vt,Ae=new Te,xe=new P,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function De(){return C===null?Y:1}let D=n;function be(v,I){for(let N=0;N<v.length;N++){let F=v[N],B=t.getContext(F,I);if(B!==null)return B}return null}try{let v={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",Re,!1),t.addEventListener("webglcontextrestored",z,!1),t.addEventListener("webglcontextcreationerror",Ue,!1),D===null){let I=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&I.shift(),D=be(I,v),D===null)throw be(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&D instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),D.getShaderPrecisionFormat===void 0&&(D.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let ae,de,se,qe,he,T,b,Z,ye,ue,ie,G,Ie,Be,Fe,et,fe,tt,Ze,We,Qe,ke,Ge,dt;function Mt(){ae=new g0(D),de=new h0(D,ae,e),ae.init(de),ke=new Zg(D,ae,de),se=new qg(D,ae,de),qe=new y0(D),he=new Dg,T=new Yg(D,ae,se,he,de,ke,qe),b=new f0(x),Z=new m0(x),ye=new Ad(D,de),Ge=new l0(D,ae,ye,de),ue=new _0(D,ye,qe,Ge),ie=new S0(D,ue,ye,qe),Ze=new b0(D,de,T),et=new u0(he),G=new Ug(x,b,Z,ae,de,Ge,et),Ie=new $g(x,he),Be=new Og,Fe=new Gg(ae,de),tt=new a0(x,b,Z,se,ie,u,l),fe=new Xg(x,ie,de),dt=new Kg(D,qe,de,se),We=new c0(D,ae,qe,de),Qe=new x0(D,ae,qe,de),qe.programs=G.programs,x.capabilities=de,x.extensions=ae,x.properties=he,x.renderLists=Be,x.shadowMap=fe,x.state=se,x.info=qe}Mt();let rt=new fl(x,D);this.xr=rt,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let v=ae.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=ae.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(v){v!==void 0&&(Y=v,this.setSize(O,k,!1))},this.getSize=function(v){return v.set(O,k)},this.setSize=function(v,I,N=!0){if(rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=v,k=I,t.width=Math.floor(v*Y),t.height=Math.floor(I*Y),N===!0&&(t.style.width=v+"px",t.style.height=I+"px"),this.setViewport(0,0,v,I)},this.getDrawingBufferSize=function(v){return v.set(O*Y,k*Y).floor()},this.setDrawingBufferSize=function(v,I,N){O=v,k=I,Y=N,t.width=Math.floor(v*N),t.height=Math.floor(I*N),this.setViewport(0,0,v,I)},this.getCurrentViewport=function(v){return v.copy(A)},this.getViewport=function(v){return v.copy(ne)},this.setViewport=function(v,I,N,F){v.isVector4?ne.set(v.x,v.y,v.z,v.w):ne.set(v,I,N,F),se.viewport(A.copy(ne).multiplyScalar(Y).floor())},this.getScissor=function(v){return v.copy(V)},this.setScissor=function(v,I,N,F){v.isVector4?V.set(v.x,v.y,v.z,v.w):V.set(v,I,N,F),se.scissor(q.copy(V).multiplyScalar(Y).floor())},this.getScissorTest=function(){return le},this.setScissorTest=function(v){se.setScissorTest(le=v)},this.setOpaqueSort=function(v){Q=v},this.setTransparentSort=function(v){J=v},this.getClearColor=function(v){return v.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor.apply(tt,arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha.apply(tt,arguments)},this.clear=function(v=!0,I=!0,N=!0){let F=0;if(v){let B=!1;if(C!==null){let $=C.texture.format;B=$===ou||$===ru||$===su}if(B){let $=C.texture.type,Se=$===bi||$===yi||$===Ol||$===Gi||$===nu||$===iu,Ee=tt.getClearColor(),Me=tt.getClearAlpha(),ce=Ee.r,pe=Ee.g,Le=Ee.b;Se?(p[0]=ce,p[1]=pe,p[2]=Le,p[3]=Me,D.clearBufferuiv(D.COLOR,0,p)):(g[0]=ce,g[1]=pe,g[2]=Le,g[3]=Me,D.clearBufferiv(D.COLOR,0,g))}else F|=D.COLOR_BUFFER_BIT}I&&(F|=D.DEPTH_BUFFER_BIT),N&&(F|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Re,!1),t.removeEventListener("webglcontextrestored",z,!1),t.removeEventListener("webglcontextcreationerror",Ue,!1),Be.dispose(),Fe.dispose(),he.dispose(),b.dispose(),Z.dispose(),ie.dispose(),Ge.dispose(),dt.dispose(),G.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",Je),rt.removeEventListener("sessionend",ze),ve&&(ve.dispose(),ve=null),kt.stop()};function Re(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function z(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;let v=qe.autoReset,I=fe.enabled,N=fe.autoUpdate,F=fe.needsUpdate,B=fe.type;Mt(),qe.autoReset=v,fe.enabled=I,fe.autoUpdate=N,fe.needsUpdate=F,fe.type=B}function Ue(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function _e(v){let I=v.target;I.removeEventListener("dispose",_e),$e(I)}function $e(v){Ye(v),he.remove(v)}function Ye(v){let I=he.get(v).programs;I!==void 0&&(I.forEach(function(N){G.releaseProgram(N)}),v.isShaderMaterial&&G.releaseShaderCache(v))}this.renderBufferDirect=function(v,I,N,F,B,$){I===null&&(I=Ce);let Se=B.isMesh&&B.matrixWorld.determinant()<0,Ee=Pe(v,I,N,F,B);se.setMaterial(F,Se);let Me=N.index,ce=1;if(F.wireframe===!0){if(Me=ue.getWireframeAttribute(N),Me===void 0)return;ce=2}let pe=N.drawRange,Le=N.attributes.position,nt=pe.start*ce,Rt=(pe.start+pe.count)*ce;$!==null&&(nt=Math.max(nt,$.start*ce),Rt=Math.min(Rt,($.start+$.count)*ce)),Me!==null?(nt=Math.max(nt,0),Rt=Math.min(Rt,Me.count)):Le!=null&&(nt=Math.max(nt,0),Rt=Math.min(Rt,Le.count));let xt=Rt-nt;if(xt<0||xt===1/0)return;Ge.setup(B,F,Ee,N,Me);let _t,ut=We;if(Me!==null&&(_t=ye.get(Me),ut=Qe,ut.setIndex(_t)),B.isMesh)F.wireframe===!0?(se.setLineWidth(F.wireframeLinewidth*De()),ut.setMode(D.LINES)):ut.setMode(D.TRIANGLES);else if(B.isLine){let it=F.linewidth;it===void 0&&(it=1),se.setLineWidth(it*De()),B.isLineSegments?ut.setMode(D.LINES):B.isLineLoop?ut.setMode(D.LINE_LOOP):ut.setMode(D.LINE_STRIP)}else B.isPoints?ut.setMode(D.POINTS):B.isSprite&&ut.setMode(D.TRIANGLES);if(B.isBatchedMesh)ut.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else if(B.isInstancedMesh)ut.renderInstances(nt,xt,B.count);else if(N.isInstancedBufferGeometry){let it=N._maxInstanceCount!==void 0?N._maxInstanceCount:1/0,vn=Math.min(N.instanceCount,it);ut.renderInstances(nt,xt,vn)}else ut.render(nt,xt)};function at(v,I,N){v.transparent===!0&&v.side===qt&&v.forceSinglePass===!1?(v.side=_n,v.needsUpdate=!0,Un(v,I,N),v.side=Ei,v.needsUpdate=!0,Un(v,I,N),v.side=qt):Un(v,I,N)}this.compile=function(v,I,N=null){N===null&&(N=v),m=Fe.get(N),m.init(),S.push(m),N.traverseVisible(function(B){B.isLight&&B.layers.test(I.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),v!==N&&v.traverseVisible(function(B){B.isLight&&B.layers.test(I.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),m.setupLights(x._useLegacyLights);let F=new Set;return v.traverse(function(B){let $=B.material;if($)if(Array.isArray($))for(let Se=0;Se<$.length;Se++){let Ee=$[Se];at(Ee,N,B),F.add(Ee)}else at($,N,B),F.add($)}),S.pop(),m=null,F},this.compileAsync=function(v,I,N=null){let F=this.compile(v,I,N);return new Promise(B=>{function $(){if(F.forEach(function(Se){he.get(Se).currentProgram.isReady()&&F.delete(Se)}),F.size===0){B(v);return}setTimeout($,10)}ae.get("KHR_parallel_shader_compile")!==null?$():setTimeout($,10)})};let ee=null;function It(v){ee&&ee(v)}function Je(){kt.stop()}function ze(){kt.start()}let kt=new pu;kt.setAnimationLoop(It),typeof self<"u"&&kt.setContext(self),this.setAnimationLoop=function(v){ee=v,rt.setAnimationLoop(v),v===null?kt.stop():kt.start()},rt.addEventListener("sessionstart",Je),rt.addEventListener("sessionend",ze),this.render=function(v,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(I),I=rt.getCamera()),v.isScene===!0&&v.onBeforeRender(x,v,I,C),m=Fe.get(v,S.length),m.init(),S.push(m),oe.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),W.setFromProjectionMatrix(oe),me=this.localClippingEnabled,j=et.init(this.clippingPlanes,me),_=Be.get(v,d.length),_.init(),d.push(_),tn(v,I,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(Q,J),this.info.render.frame++,j===!0&&et.beginShadows();let N=m.state.shadowsArray;if(fe.render(N,v,I),j===!0&&et.endShadows(),this.info.autoReset===!0&&this.info.reset(),tt.render(_,v),m.setupLights(x._useLegacyLights),I.isArrayCamera){let F=I.cameras;for(let B=0,$=F.length;B<$;B++){let Se=F[B];kn(_,v,Se,Se.viewport)}}else kn(_,v,I);C!==null&&(T.updateMultisampleRenderTarget(C),T.updateRenderTargetMipmap(C)),v.isScene===!0&&v.onAfterRender(x,v,I),Ge.resetDefaultState(),K=-1,w=null,S.pop(),S.length>0?m=S[S.length-1]:m=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function tn(v,I,N,F){if(v.visible===!1)return;if(v.layers.test(I.layers)){if(v.isGroup)N=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(I);else if(v.isLight)m.pushLight(v),v.castShadow&&m.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||W.intersectsSprite(v)){F&&xe.setFromMatrixPosition(v.matrixWorld).applyMatrix4(oe);let Se=ie.update(v),Ee=v.material;Ee.visible&&_.push(v,Se,Ee,N,xe.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||W.intersectsObject(v))){let Se=ie.update(v),Ee=v.material;if(F&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),xe.copy(v.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),xe.copy(Se.boundingSphere.center)),xe.applyMatrix4(v.matrixWorld).applyMatrix4(oe)),Array.isArray(Ee)){let Me=Se.groups;for(let ce=0,pe=Me.length;ce<pe;ce++){let Le=Me[ce],nt=Ee[Le.materialIndex];nt&&nt.visible&&_.push(v,Se,nt,N,xe.z,Le)}}else Ee.visible&&_.push(v,Se,Ee,N,xe.z,null)}}let $=v.children;for(let Se=0,Ee=$.length;Se<Ee;Se++)tn($[Se],I,N,F)}function kn(v,I,N,F){let B=v.opaque,$=v.transmissive,Se=v.transparent;m.setupLightsView(N),j===!0&&et.setGlobalState(x.clippingPlanes,N),$.length>0&&Lt(B,$,I,N),F&&se.viewport(A.copy(F)),B.length>0&&St(B,I,N),$.length>0&&St($,I,N),Se.length>0&&St(Se,I,N),se.buffers.depth.setTest(!0),se.buffers.depth.setMask(!0),se.buffers.color.setMask(!0),se.setPolygonOffset(!1)}function Lt(v,I,N,F){if((N.isScene===!0?N.overrideMaterial:null)!==null)return;let $=de.isWebGL2;ve===null&&(ve=new oi(1,1,{generateMipmaps:!0,type:ae.has("EXT_color_buffer_half_float")?sr:bi,minFilter:ir,samples:$?4:0})),x.getDrawingBufferSize(Ae),$?ve.setSize(Ae.x,Ae.y):ve.setSize(ja(Ae.x),ja(Ae.y));let Se=x.getRenderTarget();x.setRenderTarget(ve),x.getClearColor(X),L=x.getClearAlpha(),L<1&&x.setClearColor(16777215,.5),x.clear();let Ee=x.toneMapping;x.toneMapping=Mi,St(v,N,F),T.updateMultisampleRenderTarget(ve),T.updateRenderTargetMipmap(ve);let Me=!1;for(let ce=0,pe=I.length;ce<pe;ce++){let Le=I[ce],nt=Le.object,Rt=Le.geometry,xt=Le.material,_t=Le.group;if(xt.side===qt&&nt.layers.test(F.layers)){let ut=xt.side;xt.side=_n,xt.needsUpdate=!0,Zn(nt,N,F,Rt,xt,_t),xt.side=ut,xt.needsUpdate=!0,Me=!0}}Me===!0&&(T.updateMultisampleRenderTarget(ve),T.updateRenderTargetMipmap(ve)),x.setRenderTarget(Se),x.setClearColor(X,L),x.toneMapping=Ee}function St(v,I,N){let F=I.isScene===!0?I.overrideMaterial:null;for(let B=0,$=v.length;B<$;B++){let Se=v[B],Ee=Se.object,Me=Se.geometry,ce=F===null?Se.material:F,pe=Se.group;Ee.layers.test(N.layers)&&Zn(Ee,I,N,Me,ce,pe)}}function Zn(v,I,N,F,B,$){v.onBeforeRender(x,I,N,F,B,$),v.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),B.onBeforeRender(x,I,N,F,v,$),B.transparent===!0&&B.side===qt&&B.forceSinglePass===!1?(B.side=_n,B.needsUpdate=!0,x.renderBufferDirect(N,I,F,B,v,$),B.side=Ei,B.needsUpdate=!0,x.renderBufferDirect(N,I,F,B,v,$),B.side=qt):x.renderBufferDirect(N,I,F,B,v,$),v.onAfterRender(x,I,N,F,B,$)}function Un(v,I,N){I.isScene!==!0&&(I=Ce);let F=he.get(v),B=m.state.lights,$=m.state.shadowsArray,Se=B.state.version,Ee=G.getParameters(v,B.state,$,I,N),Me=G.getProgramCacheKey(Ee),ce=F.programs;F.environment=v.isMeshStandardMaterial?I.environment:null,F.fog=I.fog,F.envMap=(v.isMeshStandardMaterial?Z:b).get(v.envMap||F.environment),ce===void 0&&(v.addEventListener("dispose",_e),ce=new Map,F.programs=ce);let pe=ce.get(Me);if(pe!==void 0){if(F.currentProgram===pe&&F.lightsStateVersion===Se)return we(v,Ee),pe}else Ee.uniforms=G.getUniforms(v),v.onBuild(N,Ee,x),v.onBeforeCompile(Ee,x),pe=G.acquireProgram(Ee,Me),ce.set(Me,pe),F.uniforms=Ee.uniforms;let Le=F.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Le.clippingPlanes=et.uniform),we(v,Ee),F.needsLights=He(v),F.lightsStateVersion=Se,F.needsLights&&(Le.ambientLightColor.value=B.state.ambient,Le.lightProbe.value=B.state.probe,Le.directionalLights.value=B.state.directional,Le.directionalLightShadows.value=B.state.directionalShadow,Le.spotLights.value=B.state.spot,Le.spotLightShadows.value=B.state.spotShadow,Le.rectAreaLights.value=B.state.rectArea,Le.ltc_1.value=B.state.rectAreaLTC1,Le.ltc_2.value=B.state.rectAreaLTC2,Le.pointLights.value=B.state.point,Le.pointLightShadows.value=B.state.pointShadow,Le.hemisphereLights.value=B.state.hemi,Le.directionalShadowMap.value=B.state.directionalShadowMap,Le.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Le.spotShadowMap.value=B.state.spotShadowMap,Le.spotLightMatrix.value=B.state.spotLightMatrix,Le.spotLightMap.value=B.state.spotLightMap,Le.pointShadowMap.value=B.state.pointShadowMap,Le.pointShadowMatrix.value=B.state.pointShadowMatrix),F.currentProgram=pe,F.uniformsList=null,pe}function H(v){if(v.uniformsList===null){let I=v.currentProgram.getUniforms();v.uniformsList=Ts.seqWithValue(I.seq,v.uniforms)}return v.uniformsList}function we(v,I){let N=he.get(v);N.outputColorSpace=I.outputColorSpace,N.batching=I.batching,N.instancing=I.instancing,N.instancingColor=I.instancingColor,N.skinning=I.skinning,N.morphTargets=I.morphTargets,N.morphNormals=I.morphNormals,N.morphColors=I.morphColors,N.morphTargetsCount=I.morphTargetsCount,N.numClippingPlanes=I.numClippingPlanes,N.numIntersection=I.numClipIntersection,N.vertexAlphas=I.vertexAlphas,N.vertexTangents=I.vertexTangents,N.toneMapping=I.toneMapping}function Pe(v,I,N,F,B){I.isScene!==!0&&(I=Ce),T.resetTextureUnits();let $=I.fog,Se=F.isMeshStandardMaterial?I.environment:null,Ee=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:ri,Me=(F.isMeshStandardMaterial?Z:b).get(F.envMap||Se),ce=F.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pe=!!N.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),Le=!!N.morphAttributes.position,nt=!!N.morphAttributes.normal,Rt=!!N.morphAttributes.color,xt=Mi;F.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(xt=x.toneMapping);let _t=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,ut=_t!==void 0?_t.length:0,it=he.get(F),vn=m.state.lights;if(j===!0&&(me===!0||v!==w)){let un=v===w&&F.id===K;et.setState(F,v,un)}let wt=!1;F.version===it.__version?(it.needsLights&&it.lightsStateVersion!==vn.state.version||it.outputColorSpace!==Ee||B.isBatchedMesh&&it.batching===!1||!B.isBatchedMesh&&it.batching===!0||B.isInstancedMesh&&it.instancing===!1||!B.isInstancedMesh&&it.instancing===!0||B.isSkinnedMesh&&it.skinning===!1||!B.isSkinnedMesh&&it.skinning===!0||B.isInstancedMesh&&it.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&it.instancingColor===!1&&B.instanceColor!==null||it.envMap!==Me||F.fog===!0&&it.fog!==$||it.numClippingPlanes!==void 0&&(it.numClippingPlanes!==et.numPlanes||it.numIntersection!==et.numIntersection)||it.vertexAlphas!==ce||it.vertexTangents!==pe||it.morphTargets!==Le||it.morphNormals!==nt||it.morphColors!==Rt||it.toneMapping!==xt||de.isWebGL2===!0&&it.morphTargetsCount!==ut)&&(wt=!0):(wt=!0,it.__version=F.version);let an=it.currentProgram;wt===!0&&(an=Un(F,I,B));let ln=!1,Gn=!1,Vn=!1,Wt=an.getUniforms(),nn=it.uniforms;if(se.useProgram(an.program)&&(ln=!0,Gn=!0,Vn=!0),F.id!==K&&(K=F.id,Gn=!0),ln||w!==v){Wt.setValue(D,"projectionMatrix",v.projectionMatrix),Wt.setValue(D,"viewMatrix",v.matrixWorldInverse);let un=Wt.map.cameraPosition;un!==void 0&&un.setValue(D,xe.setFromMatrixPosition(v.matrixWorld)),de.logarithmicDepthBuffer&&Wt.setValue(D,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&Wt.setValue(D,"isOrthographic",v.isOrthographicCamera===!0),w!==v&&(w=v,Gn=!0,Vn=!0)}if(B.isSkinnedMesh){Wt.setOptional(D,B,"bindMatrix"),Wt.setOptional(D,B,"bindMatrixInverse");let un=B.skeleton;un&&(de.floatVertexTextures?(un.boneTexture===null&&un.computeBoneTexture(),Wt.setValue(D,"boneTexture",un.boneTexture,T)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}B.isBatchedMesh&&(Wt.setOptional(D,B,"batchingTexture"),Wt.setValue(D,"batchingTexture",B._matricesTexture,T));let ji=N.morphAttributes;if((ji.position!==void 0||ji.normal!==void 0||ji.color!==void 0&&de.isWebGL2===!0)&&Ze.update(B,N,an),(Gn||it.receiveShadow!==B.receiveShadow)&&(it.receiveShadow=B.receiveShadow,Wt.setValue(D,"receiveShadow",B.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(nn.envMap.value=Me,nn.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),Gn&&(Wt.setValue(D,"toneMappingExposure",x.toneMappingExposure),it.needsLights&&Ke(nn,Vn),$&&F.fog===!0&&Ie.refreshFogUniforms(nn,$),Ie.refreshMaterialUniforms(nn,F,Y,k,ve),Ts.upload(D,H(it),nn,T)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Ts.upload(D,H(it),nn,T),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&Wt.setValue(D,"center",B.center),Wt.setValue(D,"modelViewMatrix",B.modelViewMatrix),Wt.setValue(D,"normalMatrix",B.normalMatrix),Wt.setValue(D,"modelMatrix",B.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){let un=F.uniformsGroups;for(let Ws=0,Qi=un.length;Ws<Qi;Ws++)if(de.isWebGL2){let fn=un[Ws];dt.update(fn,an),dt.bind(fn,an)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return an}function Ke(v,I){v.ambientLightColor.needsUpdate=I,v.lightProbe.needsUpdate=I,v.directionalLights.needsUpdate=I,v.directionalLightShadows.needsUpdate=I,v.pointLights.needsUpdate=I,v.pointLightShadows.needsUpdate=I,v.spotLights.needsUpdate=I,v.spotLightShadows.needsUpdate=I,v.rectAreaLights.needsUpdate=I,v.hemisphereLights.needsUpdate=I}function He(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(v,I,N){he.get(v.texture).__webglTexture=I,he.get(v.depthTexture).__webglTexture=N;let F=he.get(v);F.__hasExternalTextures=!0,F.__hasExternalTextures&&(F.__autoAllocateDepthBuffer=N===void 0,F.__autoAllocateDepthBuffer||ae.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(v,I){let N=he.get(v);N.__webglFramebuffer=I,N.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(v,I=0,N=0){C=v,U=I,R=N;let F=!0,B=null,$=!1,Se=!1;if(v){let Me=he.get(v);Me.__useDefaultFramebuffer!==void 0?(se.bindFramebuffer(D.FRAMEBUFFER,null),F=!1):Me.__webglFramebuffer===void 0?T.setupRenderTarget(v):Me.__hasExternalTextures&&T.rebindTextures(v,he.get(v.texture).__webglTexture,he.get(v.depthTexture).__webglTexture);let ce=v.texture;(ce.isData3DTexture||ce.isDataArrayTexture||ce.isCompressedArrayTexture)&&(Se=!0);let pe=he.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(pe[I])?B=pe[I][N]:B=pe[I],$=!0):de.isWebGL2&&v.samples>0&&T.useMultisampledRTT(v)===!1?B=he.get(v).__webglMultisampledFramebuffer:Array.isArray(pe)?B=pe[N]:B=pe,A.copy(v.viewport),q.copy(v.scissor),re=v.scissorTest}else A.copy(ne).multiplyScalar(Y).floor(),q.copy(V).multiplyScalar(Y).floor(),re=le;if(se.bindFramebuffer(D.FRAMEBUFFER,B)&&de.drawBuffers&&F&&se.drawBuffers(v,B),se.viewport(A),se.scissor(q),se.setScissorTest(re),$){let Me=he.get(v.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+I,Me.__webglTexture,N)}else if(Se){let Me=he.get(v.texture),ce=I||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Me.__webglTexture,N||0,ce)}K=-1},this.readRenderTargetPixels=function(v,I,N,F,B,$,Se){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=he.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Se!==void 0&&(Ee=Ee[Se]),Ee){se.bindFramebuffer(D.FRAMEBUFFER,Ee);try{let Me=v.texture,ce=Me.format,pe=Me.type;if(ce!==An&&ke.convert(ce)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Le=pe===sr&&(ae.has("EXT_color_buffer_half_float")||de.isWebGL2&&ae.has("EXT_color_buffer_float"));if(pe!==bi&&ke.convert(pe)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_TYPE)&&!(pe===ii&&(de.isWebGL2||ae.has("OES_texture_float")||ae.has("WEBGL_color_buffer_float")))&&!Le){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=v.width-F&&N>=0&&N<=v.height-B&&D.readPixels(I,N,F,B,ke.convert(ce),ke.convert(pe),$)}finally{let Me=C!==null?he.get(C).__webglFramebuffer:null;se.bindFramebuffer(D.FRAMEBUFFER,Me)}}},this.copyFramebufferToTexture=function(v,I,N=0){let F=Math.pow(2,-N),B=Math.floor(I.image.width*F),$=Math.floor(I.image.height*F);T.setTexture2D(I,0),D.copyTexSubImage2D(D.TEXTURE_2D,N,0,0,v.x,v.y,B,$),se.unbindTexture()},this.copyTextureToTexture=function(v,I,N,F=0){let B=I.image.width,$=I.image.height,Se=ke.convert(N.format),Ee=ke.convert(N.type);T.setTexture2D(N,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment),I.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,F,v.x,v.y,B,$,Se,Ee,I.image.data):I.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,F,v.x,v.y,I.mipmaps[0].width,I.mipmaps[0].height,Se,I.mipmaps[0].data):D.texSubImage2D(D.TEXTURE_2D,F,v.x,v.y,Se,Ee,I.image),F===0&&N.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),se.unbindTexture()},this.copyTextureToTexture3D=function(v,I,N,F,B=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let $=v.max.x-v.min.x+1,Se=v.max.y-v.min.y+1,Ee=v.max.z-v.min.z+1,Me=ke.convert(F.format),ce=ke.convert(F.type),pe;if(F.isData3DTexture)T.setTexture3D(F,0),pe=D.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)T.setTexture2DArray(F,0),pe=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);let Le=D.getParameter(D.UNPACK_ROW_LENGTH),nt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Rt=D.getParameter(D.UNPACK_SKIP_PIXELS),xt=D.getParameter(D.UNPACK_SKIP_ROWS),_t=D.getParameter(D.UNPACK_SKIP_IMAGES),ut=N.isCompressedTexture?N.mipmaps[B]:N.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,ut.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ut.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,v.min.x),D.pixelStorei(D.UNPACK_SKIP_ROWS,v.min.y),D.pixelStorei(D.UNPACK_SKIP_IMAGES,v.min.z),N.isDataTexture||N.isData3DTexture?D.texSubImage3D(pe,B,I.x,I.y,I.z,$,Se,Ee,Me,ce,ut.data):N.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),D.compressedTexSubImage3D(pe,B,I.x,I.y,I.z,$,Se,Ee,Me,ut.data)):D.texSubImage3D(pe,B,I.x,I.y,I.z,$,Se,Ee,Me,ce,ut),D.pixelStorei(D.UNPACK_ROW_LENGTH,Le),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,nt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Rt),D.pixelStorei(D.UNPACK_SKIP_ROWS,xt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,_t),B===0&&F.generateMipmaps&&D.generateMipmap(pe),se.unbindTexture()},this.initTexture=function(v){v.isCubeTexture?T.setTextureCube(v,0):v.isData3DTexture?T.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?T.setTexture2DArray(v,0):T.setTexture2D(v,0),se.unbindTexture()},this.resetState=function(){U=0,R=0,C=null,se.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Fl?"display-p3":"srgb",t.unpackColorSpace=Ct.workingColorSpace===Ho?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Et?Wi:lu}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Wi?Et:ri}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},dl=class extends lr{};dl.prototype.isWebGL1Renderer=!0;var wo=class extends Yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};var Nh=new P,Oh=new yt,Fh=new yt,jg=new P,Bh=new vt,Qr=new P,Ba=new Ai,zh=new vt,za=new Is,cr=class extends ot{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=xc,this.bindMatrix=new vt,this.bindMatrixInverse=new vt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ti),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Qr),this.boundingBox.expandByPoint(Qr)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ai),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Qr),this.boundingSphere.expandByPoint(Qr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ba.copy(this.boundingSphere),Ba.applyMatrix4(s),e.ray.intersectsSphere(Ba)!==!1&&(zh.copy(s).invert(),za.copy(e.ray).applyMatrix4(zh),!(this.boundingBox!==null&&za.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,za)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new yt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===xc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===zf?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Oh.fromBufferAttribute(s.attributes.skinIndex,e),Fh.fromBufferAttribute(s.attributes.skinWeight,e),Nh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=Fh.getComponent(r);if(o!==0){let a=Oh.getComponent(r);Bh.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(jg.copy(Nh).applyMatrix4(Bh),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},hr=class extends Yt{constructor(){super(),this.isBone=!0,this.type="Bone"}},pl=class extends xn{constructor(e=null,t=1,n=1,s,r,o,a,l,c=en,h=en,f,u){super(null,o,a,l,c,h,s,r,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Hh=new vt,Qg=new vt,To=class i{constructor(e=[],t=[]){this.uuid=Ji(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new vt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new vt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:Qg;Hh.multiplyMatrices(a,t[r]),Hh.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new pl(t,e,e,An,ii);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new hr),this.bones.push(o),this.boneInverses.push(new vt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}};var ur=class extends Ri{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},kh=new vt,ml=new Is,eo=new Ai,to=new P,Ao=class extends Yt{constructor(e=new Dt,t=new ur){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),eo.copy(n.boundingSphere),eo.applyMatrix4(s),eo.radius+=r,e.ray.intersectsSphere(eo)===!1)return;kh.copy(s).invert(),ml.copy(e.ray).applyMatrix4(kh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){let u=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=u,_=p;g<_;g++){let m=c.getX(g);to.fromBufferAttribute(f,m),Gh(to,m,l,s,e,t,this)}}else{let u=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let g=u,_=p;g<_;g++)to.fromBufferAttribute(f,g),Gh(to,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Gh(i,e,t,n,s,r,o){let a=ml.distanceSqToPoint(i);if(a<t){let l=new P;ml.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}var Cn=class extends xn{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Pn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],u=n[s+1]-h,p=(o-h)/u;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new Te:new P);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new P,s=[],r=[],o=[],a=new P,l=new vt;for(let p=0;p<=e;p++){let g=p/e;s[p]=this.getTangentAt(g,new P)}r[0]=new P,o[0]=new P;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Qt(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(Qt(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},fr=class extends Pn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){let n=t||new Te,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,p=c-this.aY;l=u*h-p*f+this.aX,c=u*f+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},gl=class extends fr{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function zl(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,f){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+f)+(l-a)/f;u*=h,p*=h,s(o,a,u,p)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var no=new P,Ha=new zl,ka=new zl,Ga=new zl,Us=class extends Pn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new P){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(no.subVectors(s[0],s[1]).add(s[0]),c=no);let f=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(no.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=no),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(f),p),_=Math.pow(f.distanceToSquared(u),p),m=Math.pow(u.distanceToSquared(h),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Ha.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,g,_,m),ka.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,g,_,m),Ga.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Ha.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),ka.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),Ga.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return n.set(Ha.calc(l),ka.calc(l),Ga.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Vh(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function e_(i,e){let t=1-i;return t*t*e}function t_(i,e){return 2*(1-i)*i*e}function n_(i,e){return i*i*e}function tr(i,e,t,n){return e_(i,e)+t_(i,t)+n_(i,n)}function i_(i,e){let t=1-i;return t*t*t*e}function s_(i,e){let t=1-i;return 3*t*t*i*e}function r_(i,e){return 3*(1-i)*i*i*e}function o_(i,e){return i*i*i*e}function nr(i,e,t,n,s){return i_(i,e)+s_(i,t)+r_(i,n)+o_(i,s)}var Ro=class extends Pn{constructor(e=new Te,t=new Te,n=new Te,s=new Te){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Te){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(nr(e,s.x,r.x,o.x,a.x),nr(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},_l=class extends Pn{constructor(e=new P,t=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new P){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(nr(e,s.x,r.x,o.x,a.x),nr(e,s.y,r.y,o.y,a.y),nr(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Co=class extends Pn{constructor(e=new Te,t=new Te){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Te){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Te){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},xl=class extends Pn{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Po=class extends Pn{constructor(e=new Te,t=new Te,n=new Te){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Te){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(tr(e,s.x,r.x,o.x),tr(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Io=class extends Pn{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(tr(e,s.x,r.x,o.x),tr(e,s.y,r.y,o.y),tr(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ds=class extends Pn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Te){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return n.set(Vh(a,l.x,c.x,h.x,f.x),Vh(a,l.y,c.y,h.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Te().fromArray(s))}return this}},Lo=Object.freeze({__proto__:null,ArcCurve:gl,CatmullRomCurve3:Us,CubicBezierCurve:Ro,CubicBezierCurve3:_l,EllipseCurve:fr,LineCurve:Co,LineCurve3:xl,QuadraticBezierCurve:Po,QuadraticBezierCurve3:Io,SplineCurve:Ds}),yl=class extends Pn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Lo[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Lo[s.type]().fromJSON(s))}return this}},dr=class extends yl{constructor(e){super(),this.type="Path",this.currentPoint=new Te,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Co(this.currentPoint.clone(),new Te(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Po(this.currentPoint.clone(),new Te(e,t),new Te(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new Ro(this.currentPoint.clone(),new Te(e,t),new Te(n,s),new Te(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Ds(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new fr(e,t,n,s,r,o,a,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},pr=class i extends Dt{constructor(e=[new Te(0,-.5),new Te(.5,0),new Te(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Qt(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,f=new P,u=new Te,p=new P,g=new P,_=new P,m=0,d=0;for(let S=0;S<=e.length-1;S++)switch(S){case 0:m=e[S+1].x-e[S].x,d=e[S+1].y-e[S].y,p.x=d*1,p.y=-m,p.z=d*0,_.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:m=e[S+1].x-e[S].x,d=e[S+1].y-e[S].y,p.x=d*1,p.y=-m,p.z=d*0,g.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),l.push(p.x,p.y,p.z),_.copy(g)}for(let S=0;S<=t;S++){let x=n+S*h*s,y=Math.sin(x),U=Math.cos(x);for(let R=0;R<=e.length-1;R++){f.x=e[R].x*y,f.y=e[R].y,f.z=e[R].x*U,o.push(f.x,f.y,f.z),u.x=S/t,u.y=R/(e.length-1),a.push(u.x,u.y);let C=l[3*R+0]*y,K=l[3*R+1],w=l[3*R+0]*U;c.push(C,K,w)}}for(let S=0;S<t;S++)for(let x=0;x<e.length-1;x++){let y=x+S*e.length,U=y,R=y+e.length,C=y+e.length+1,K=y+1;r.push(U,R,K),r.push(C,K,R)}this.setIndex(r),this.setAttribute("position",new ht(o,3)),this.setAttribute("uv",new ht(a,2)),this.setAttribute("normal",new ht(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},Uo=class i extends pr{constructor(e=1,t=1,n=4,s=8){let r=new dr;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:s}}static fromJSON(e){return new i(e.radius,e.length,e.capSegments,e.radialSegments)}},In=class i extends Dt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new P,h=new Te;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=t;f++,u+=3){let p=n+f/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/e+1)/2,h.y=(o[u+1]/e+1)/2,l.push(h.x,h.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new ht(o,3)),this.setAttribute("normal",new ht(a,3)),this.setAttribute("uv",new ht(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Tt=class i extends Dt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],u=[],p=[],g=0,_=[],m=n/2,d=0;S(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new ht(f,3)),this.setAttribute("normal",new ht(u,3)),this.setAttribute("uv",new ht(p,2));function S(){let y=new P,U=new P,R=0,C=(t-e)/n;for(let K=0;K<=r;K++){let w=[],A=K/r,q=A*(t-e)+e;for(let re=0;re<=s;re++){let X=re/s,L=X*l+a,O=Math.sin(L),k=Math.cos(L);U.x=q*O,U.y=-A*n+m,U.z=q*k,f.push(U.x,U.y,U.z),y.set(O,C,k).normalize(),u.push(y.x,y.y,y.z),p.push(X,1-A),w.push(g++)}_.push(w)}for(let K=0;K<s;K++)for(let w=0;w<r;w++){let A=_[w][K],q=_[w+1][K],re=_[w+1][K+1],X=_[w][K+1];h.push(A,q,X),h.push(q,re,X),R+=6}c.addGroup(d,R,0),d+=R}function x(y){let U=g,R=new Te,C=new P,K=0,w=y===!0?e:t,A=y===!0?1:-1;for(let re=1;re<=s;re++)f.push(0,m*A,0),u.push(0,A,0),p.push(.5,.5),g++;let q=g;for(let re=0;re<=s;re++){let L=re/s*l+a,O=Math.cos(L),k=Math.sin(L);C.x=w*k,C.y=m*A,C.z=w*O,f.push(C.x,C.y,C.z),u.push(0,A,0),R.x=O*.5+.5,R.y=k*.5*A+.5,p.push(R.x,R.y),g++}for(let re=0;re<s;re++){let X=U+re,L=q+re;y===!0?h.push(L,L+1,X):h.push(L+1,L,X),K+=3}c.addGroup(d,K,y===!0?1:2),d+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Vt=class i extends Tt{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Ns=class extends dr{constructor(e){super(e),this.uuid=Ji(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new dr().fromJSON(s))}return this}},a_={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=vu(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,f,u,p;if(n&&(r=f_(i,e,r,t)),i.length>80*t){a=c=i[0],l=h=i[1];for(let g=t;g<s;g+=t)f=i[g],u=i[g+1],f<a&&(a=f),u<l&&(l=u),f>c&&(c=f),u>h&&(h=u);p=Math.max(c-a,h-l),p=p!==0?32767/p:0}return mr(r,o,t,a,l,p,0),o}};function vu(i,e,t,n,s){let r,o;if(s===S_(i,e,t,n)>0)for(r=e;r<t;r+=n)o=Wh(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=Wh(r,i[r],i[r+1],o);return o&&Go(o,o.next)&&(_r(o),o=o.next),o}function Xi(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Go(t,t.next)||Ht(t.prev,t,t.next)===0)){if(_r(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function mr(i,e,t,n,s,r,o){if(!i)return;!o&&r&&__(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?c_(i,n,s,r):l_(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),_r(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=h_(Xi(i),e,t),mr(i,e,t,n,s,r,2)):o===2&&u_(i,e,t,n,s,r):mr(Xi(i),e,t,n,s,r,1);break}}}function l_(i){let e=i.prev,t=i,n=i.next;if(Ht(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=s<r?s<o?s:o:r<o?r:o,f=a<l?a<c?a:c:l<c?l:c,u=s>r?s>o?s:o:r>o?r:o,p=a>l?a>c?a:c:l>c?l:c,g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=u&&g.y>=f&&g.y<=p&&Ss(s,a,r,l,o,c,g.x,g.y)&&Ht(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function c_(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Ht(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,f=r.y,u=o.y,p=a<l?a<c?a:c:l<c?l:c,g=h<f?h<u?h:u:f<u?f:u,_=a>l?a>c?a:c:l>c?l:c,m=h>f?h>u?h:u:f>u?f:u,d=vl(p,g,e,t,n),S=vl(_,m,e,t,n),x=i.prevZ,y=i.nextZ;for(;x&&x.z>=d&&y&&y.z<=S;){if(x.x>=p&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Ss(a,h,l,f,c,u,x.x,x.y)&&Ht(x.prev,x,x.next)>=0||(x=x.prevZ,y.x>=p&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&Ss(a,h,l,f,c,u,y.x,y.y)&&Ht(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;x&&x.z>=d;){if(x.x>=p&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Ss(a,h,l,f,c,u,x.x,x.y)&&Ht(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;y&&y.z<=S;){if(y.x>=p&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&Ss(a,h,l,f,c,u,y.x,y.y)&&Ht(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function h_(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!Go(s,r)&&Mu(s,n,n.next,r)&&gr(s,r)&&gr(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),_r(n),_r(n.next),n=i=r),n=n.next}while(n!==i);return Xi(n)}function u_(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&v_(o,a)){let l=bu(o,a);o=Xi(o,o.next),l=Xi(l,l.next),mr(o,e,t,n,s,r,0),mr(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function f_(i,e,t,n){let s=[],r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=vu(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(y_(c));for(s.sort(d_),r=0;r<s.length;r++)t=p_(s[r],t);return t}function d_(i,e){return i.x-e.x}function p_(i,e){let t=m_(i,e);if(!t)return e;let n=bu(t,i);return Xi(n,n.next),Xi(t,t.next)}function m_(i,e){let t=e,n=-1/0,s,r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let u=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=r&&u>n&&(n=u,s=t.x<t.next.x?t:t.next,u===r))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,f;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&Ss(o<c?r:n,o,l,c,o<c?n:r,o,t.x,t.y)&&(f=Math.abs(o-t.y)/(r-t.x),gr(t,i)&&(f<h||f===h&&(t.x>s.x||t.x===s.x&&g_(s,t)))&&(s=t,h=f)),t=t.next;while(t!==a);return s}function g_(i,e){return Ht(i.prev,i,e.prev)<0&&Ht(e.next,i,i.next)<0}function __(i,e,t,n){let s=i;do s.z===0&&(s.z=vl(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,x_(s)}function x_(i){let e,t,n,s,r,o,a,l,c=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(o>1);return i}function vl(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function y_(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Ss(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function v_(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!M_(i,e)&&(gr(i,e)&&gr(e,i)&&b_(i,e)&&(Ht(i.prev,i,e.prev)||Ht(i,e.prev,e))||Go(i,e)&&Ht(i.prev,i,i.next)>0&&Ht(e.prev,e,e.next)>0)}function Ht(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Go(i,e){return i.x===e.x&&i.y===e.y}function Mu(i,e,t,n){let s=so(Ht(i,e,t)),r=so(Ht(i,e,n)),o=so(Ht(t,n,i)),a=so(Ht(t,n,e));return!!(s!==r&&o!==a||s===0&&io(i,t,e)||r===0&&io(i,n,e)||o===0&&io(t,i,n)||a===0&&io(t,e,n))}function io(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function so(i){return i>0?1:i<0?-1:0}function M_(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Mu(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function gr(i,e){return Ht(i.prev,i,i.next)<0?Ht(i,e,i.next)>=0&&Ht(i,i.prev,e)>=0:Ht(i,e,i.prev)<0||Ht(i,i.next,e)<0}function b_(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function bu(i,e){let t=new Ml(i.i,i.x,i.y),n=new Ml(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Wh(i,e,t,n){let s=new Ml(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function _r(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ml(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function S_(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Si=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Xh(e),qh(n,e);let o=e.length;t.forEach(Xh);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,qh(n,t[l]);let a=a_.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Xh(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function qh(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Do=class i extends Dt{constructor(e=new Ns([new Te(.5,.5),new Te(-.5,.5),new Te(-.5,-.5),new Te(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new ht(s,3)),this.setAttribute("uv",new ht(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,d=t.extrudePath,S=t.UVGenerator!==void 0?t.UVGenerator:E_,x,y=!1,U,R,C,K;d&&(x=d.getSpacedPoints(h),y=!0,u=!1,U=d.computeFrenetFrames(h,!1),R=new P,C=new P,K=new P),u||(m=0,p=0,g=0,_=0);let w=a.extractPoints(c),A=w.shape,q=w.holes;if(!Si.isClockWise(A)){A=A.reverse();for(let D=0,be=q.length;D<be;D++){let ae=q[D];Si.isClockWise(ae)&&(q[D]=ae.reverse())}}let X=Si.triangulateShape(A,q),L=A;for(let D=0,be=q.length;D<be;D++){let ae=q[D];A=A.concat(ae)}function O(D,be,ae){return be||console.error("THREE.ExtrudeGeometry: vec does not exist"),D.clone().addScaledVector(be,ae)}let k=A.length,Y=X.length;function Q(D,be,ae){let de,se,qe,he=D.x-be.x,T=D.y-be.y,b=ae.x-D.x,Z=ae.y-D.y,ye=he*he+T*T,ue=he*Z-T*b;if(Math.abs(ue)>Number.EPSILON){let ie=Math.sqrt(ye),G=Math.sqrt(b*b+Z*Z),Ie=be.x-T/ie,Be=be.y+he/ie,Fe=ae.x-Z/G,et=ae.y+b/G,fe=((Fe-Ie)*Z-(et-Be)*b)/(he*Z-T*b);de=Ie+he*fe-D.x,se=Be+T*fe-D.y;let tt=de*de+se*se;if(tt<=2)return new Te(de,se);qe=Math.sqrt(tt/2)}else{let ie=!1;he>Number.EPSILON?b>Number.EPSILON&&(ie=!0):he<-Number.EPSILON?b<-Number.EPSILON&&(ie=!0):Math.sign(T)===Math.sign(Z)&&(ie=!0),ie?(de=-T,se=he,qe=Math.sqrt(ye)):(de=he,se=T,qe=Math.sqrt(ye/2))}return new Te(de/qe,se/qe)}let J=[];for(let D=0,be=L.length,ae=be-1,de=D+1;D<be;D++,ae++,de++)ae===be&&(ae=0),de===be&&(de=0),J[D]=Q(L[D],L[ae],L[de]);let ne=[],V,le=J.concat();for(let D=0,be=q.length;D<be;D++){let ae=q[D];V=[];for(let de=0,se=ae.length,qe=se-1,he=de+1;de<se;de++,qe++,he++)qe===se&&(qe=0),he===se&&(he=0),V[de]=Q(ae[de],ae[qe],ae[he]);ne.push(V),le=le.concat(V)}for(let D=0;D<m;D++){let be=D/m,ae=p*Math.cos(be*Math.PI/2),de=g*Math.sin(be*Math.PI/2)+_;for(let se=0,qe=L.length;se<qe;se++){let he=O(L[se],J[se],de);oe(he.x,he.y,-ae)}for(let se=0,qe=q.length;se<qe;se++){let he=q[se];V=ne[se];for(let T=0,b=he.length;T<b;T++){let Z=O(he[T],V[T],de);oe(Z.x,Z.y,-ae)}}}let W=g+_;for(let D=0;D<k;D++){let be=u?O(A[D],le[D],W):A[D];y?(C.copy(U.normals[0]).multiplyScalar(be.x),R.copy(U.binormals[0]).multiplyScalar(be.y),K.copy(x[0]).add(C).add(R),oe(K.x,K.y,K.z)):oe(be.x,be.y,0)}for(let D=1;D<=h;D++)for(let be=0;be<k;be++){let ae=u?O(A[be],le[be],W):A[be];y?(C.copy(U.normals[D]).multiplyScalar(ae.x),R.copy(U.binormals[D]).multiplyScalar(ae.y),K.copy(x[D]).add(C).add(R),oe(K.x,K.y,K.z)):oe(ae.x,ae.y,f/h*D)}for(let D=m-1;D>=0;D--){let be=D/m,ae=p*Math.cos(be*Math.PI/2),de=g*Math.sin(be*Math.PI/2)+_;for(let se=0,qe=L.length;se<qe;se++){let he=O(L[se],J[se],de);oe(he.x,he.y,f+ae)}for(let se=0,qe=q.length;se<qe;se++){let he=q[se];V=ne[se];for(let T=0,b=he.length;T<b;T++){let Z=O(he[T],V[T],de);y?oe(Z.x,Z.y+x[h-1].y,x[h-1].x+ae):oe(Z.x,Z.y,f+ae)}}}j(),me();function j(){let D=s.length/3;if(u){let be=0,ae=k*be;for(let de=0;de<Y;de++){let se=X[de];Ae(se[2]+ae,se[1]+ae,se[0]+ae)}be=h+m*2,ae=k*be;for(let de=0;de<Y;de++){let se=X[de];Ae(se[0]+ae,se[1]+ae,se[2]+ae)}}else{for(let be=0;be<Y;be++){let ae=X[be];Ae(ae[2],ae[1],ae[0])}for(let be=0;be<Y;be++){let ae=X[be];Ae(ae[0]+k*h,ae[1]+k*h,ae[2]+k*h)}}n.addGroup(D,s.length/3-D,0)}function me(){let D=s.length/3,be=0;ve(L,be),be+=L.length;for(let ae=0,de=q.length;ae<de;ae++){let se=q[ae];ve(se,be),be+=se.length}n.addGroup(D,s.length/3-D,1)}function ve(D,be){let ae=D.length;for(;--ae>=0;){let de=ae,se=ae-1;se<0&&(se=D.length-1);for(let qe=0,he=h+m*2;qe<he;qe++){let T=k*qe,b=k*(qe+1),Z=be+de+T,ye=be+se+T,ue=be+se+b,ie=be+de+b;xe(Z,ye,ue,ie)}}}function oe(D,be,ae){l.push(D),l.push(be),l.push(ae)}function Ae(D,be,ae){Ce(D),Ce(be),Ce(ae);let de=s.length/3,se=S.generateTopUV(n,s,de-3,de-2,de-1);De(se[0]),De(se[1]),De(se[2])}function xe(D,be,ae,de){Ce(D),Ce(be),Ce(de),Ce(be),Ce(ae),Ce(de);let se=s.length/3,qe=S.generateSideWallUV(n,s,se-6,se-3,se-2,se-1);De(qe[0]),De(qe[1]),De(qe[3]),De(qe[1]),De(qe[2]),De(qe[3])}function Ce(D){s.push(l[D*3+0]),s.push(l[D*3+1]),s.push(l[D*3+2])}function De(D){r.push(D.x),r.push(D.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return w_(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Lo[s.type]().fromJSON(s)),new i(n,e.options)}},E_={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new Te(r,o),new Te(a,l),new Te(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],f=e[n*3+2],u=e[s*3],p=e[s*3+1],g=e[s*3+2],_=e[r*3],m=e[r*3+1],d=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new Te(o,1-l),new Te(c,1-f),new Te(u,1-g),new Te(_,1-d)]:[new Te(a,1-l),new Te(h,1-f),new Te(p,1-g),new Te(m,1-d)]}};function w_(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var No=class i extends Dt{constructor(e=new Ns([new Te(0,.5),new Te(-.5,-.5),new Te(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new ht(s,3)),this.setAttribute("normal",new ht(r,3)),this.setAttribute("uv",new ht(o,2));function c(h){let f=s.length/3,u=h.extractPoints(t),p=u.shape,g=u.holes;Si.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,d=g.length;m<d;m++){let S=g[m];Si.isClockWise(S)===!0&&(g[m]=S.reverse())}let _=Si.triangulateShape(p,g);for(let m=0,d=g.length;m<d;m++){let S=g[m];p=p.concat(S)}for(let m=0,d=p.length;m<d;m++){let S=p[m];s.push(S.x,S.y,0),r.push(0,0,1),o.push(S.x,S.y)}for(let m=0,d=_.length;m<d;m++){let S=_[m],x=S[0]+f,y=S[1]+f,U=S[2]+f;n.push(x,y,U),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return T_(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}return new i(n,e.curveSegments)}};function T_(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var Pt=class i extends Dt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],f=new P,u=new P,p=[],g=[],_=[],m=[];for(let d=0;d<=n;d++){let S=[],x=d/n,y=0;d===0&&o===0?y=.5/t:d===n&&l===Math.PI&&(y=-.5/t);for(let U=0;U<=t;U++){let R=U/t;f.x=-e*Math.cos(s+R*r)*Math.sin(o+x*a),f.y=e*Math.cos(o+x*a),f.z=e*Math.sin(s+R*r)*Math.sin(o+x*a),g.push(f.x,f.y,f.z),u.copy(f).normalize(),_.push(u.x,u.y,u.z),m.push(R+y,1-x),S.push(c++)}h.push(S)}for(let d=0;d<n;d++)for(let S=0;S<t;S++){let x=h[d][S+1],y=h[d][S],U=h[d+1][S],R=h[d+1][S+1];(d!==0||o>0)&&p.push(x,y,R),(d!==n-1||l<Math.PI)&&p.push(y,U,R)}this.setIndex(p),this.setAttribute("position",new ht(g,3)),this.setAttribute("normal",new ht(_,3)),this.setAttribute("uv",new ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var qi=class i extends Dt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new P,f=new P,u=new P;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){let _=g/s*r,m=p/n*Math.PI*2;f.x=(e+t*Math.cos(m))*Math.cos(_),f.y=(e+t*Math.cos(m))*Math.sin(_),f.z=t*Math.sin(m),a.push(f.x,f.y,f.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),u.subVectors(f,h).normalize(),l.push(u.x,u.y,u.z),c.push(g/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){let _=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,d=(s+1)*(p-1)+g,S=(s+1)*p+g;o.push(_,m,S),o.push(m,d,S)}this.setIndex(o),this.setAttribute("position",new ht(a,3)),this.setAttribute("normal",new ht(l,3)),this.setAttribute("uv",new ht(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var xr=class i extends Dt{constructor(e=new Io(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new P,l=new P,c=new Te,h=new P,f=[],u=[],p=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new ht(f,3)),this.setAttribute("normal",new ht(u,3)),this.setAttribute("uv",new ht(p,2));function _(){for(let x=0;x<t;x++)m(x);m(r===!1?t:0),S(),d()}function m(x){h=e.getPointAt(x/t,h);let y=o.normals[x],U=o.binormals[x];for(let R=0;R<=s;R++){let C=R/s*Math.PI*2,K=Math.sin(C),w=-Math.cos(C);l.x=w*y.x+K*U.x,l.y=w*y.y+K*U.y,l.z=w*y.z+K*U.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,f.push(a.x,a.y,a.z)}}function d(){for(let x=1;x<=t;x++)for(let y=1;y<=s;y++){let U=(s+1)*(x-1)+(y-1),R=(s+1)*x+(y-1),C=(s+1)*x+y,K=(s+1)*(x-1)+y;g.push(U,R,K),g.push(R,C,K)}}function S(){for(let x=0;x<=t;x++)for(let y=0;y<=s;y++)c.x=x/t,c.y=y/s,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Lo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var Kt=class extends Ri{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cu,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ci=class extends Kt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Te(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Qt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ct(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ct(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ct(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function ro(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function A_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Os=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},bl=class extends Os{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Xc,endingEnd:Xc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case qc:r=e,a=2*t-n;break;case Yc:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case qc:o=e,l=2*n-t;break;case Yc:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,p=this._weightNext,g=(n-t)/(s-t),_=g*g,m=_*g,d=-u*m+2*u*_-u*g,S=(1+u)*m+(-1.5-2*u)*_+(-.5+u)*g+1,x=(-1-p)*m+(1.5+p)*_+.5*g,y=p*m-p*_;for(let U=0;U!==a;++U)r[U]=d*o[h+U]+S*o[c+U]+x*o[l+U]+y*o[f+U];return r}},Sl=class extends Os{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),f=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*f+o[l+u]*h;return r}},El=class extends Os{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Bn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ro(t,this.TimeBufferType),this.values=ro(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ro(e.times,Array),values:ro(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new El(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Sl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new bl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ao:t=this.InterpolantFactoryMethodDiscrete;break;case lo:t=this.InterpolantFactoryMethodLinear;break;case da:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ao;case this.InterpolantFactoryMethodLinear:return lo;case this.InterpolantFactoryMethodSmooth:return da}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&A_(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===da,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let f=a*n,u=f-n,p=f+n;for(let g=0;g!==n;++g){let _=t[f+g];if(_!==t[u+g]||_!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let f=a*n,u=o*n;for(let p=0;p!==n;++p)t[u+p]=t[f+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Bn.prototype.TimeBufferType=Float32Array;Bn.prototype.ValueBufferType=Float32Array;Bn.prototype.DefaultInterpolation=lo;var Yi=class extends Bn{};Yi.prototype.ValueTypeName="bool";Yi.prototype.ValueBufferType=Array;Yi.prototype.DefaultInterpolation=ao;Yi.prototype.InterpolantFactoryMethodLinear=void 0;Yi.prototype.InterpolantFactoryMethodSmooth=void 0;var wl=class extends Bn{};wl.prototype.ValueTypeName="color";var Tl=class extends Bn{};Tl.prototype.ValueTypeName="number";var Al=class extends Os{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)hn.slerpFlat(r,0,o,c-a,o,c,l);return r}},yr=class extends Bn{InterpolantFactoryMethodLinear(e){return new Al(this.times,this.values,this.getValueSize(),e)}};yr.prototype.ValueTypeName="quaternion";yr.prototype.DefaultInterpolation=lo;yr.prototype.InterpolantFactoryMethodSmooth=void 0;var Zi=class extends Bn{};Zi.prototype.ValueTypeName="string";Zi.prototype.ValueBufferType=Array;Zi.prototype.DefaultInterpolation=ao;Zi.prototype.InterpolantFactoryMethodLinear=void 0;Zi.prototype.InterpolantFactoryMethodSmooth=void 0;var Rl=class extends Bn{};Rl.prototype.ValueTypeName="vector";var Yh={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Cl=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let p=c[f],g=c[f+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},R_=new Cl,vr=class{constructor(e){this.manager=e!==void 0?e:R_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};vr.DEFAULT_MATERIAL_NAME="__DEFAULT";var Pl=class extends vr{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Yh.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=rr("img");function l(){h(),Yh.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(f){h(),s&&s(f),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var Fs=class extends vr{constructor(e){super(e)}load(e,t,n,s){let r=new xn,o=new Pl(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Mr=class extends Yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ct(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Oo=class extends Mr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ct(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Va=new vt,Zh=new P,Jh=new P,Fo=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Te(512,512),this.map=null,this.mapPass=null,this.matrix=new vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ar,this._frameExtents=new Te(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Zh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Zh),Jh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Jh),t.updateMatrixWorld(),Va.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Va),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Va)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var $h=new vt,js=new P,Wa=new P,Il=class extends Fo{constructor(){super(new on(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Te(4,2),this._viewportCount=6,this._viewports=[new yt(2,1,1,1),new yt(0,1,1,1),new yt(3,1,1,1),new yt(1,1,1,1),new yt(3,0,1,1),new yt(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),js.setFromMatrixPosition(e.matrixWorld),n.position.copy(js),Wa.copy(n.position),Wa.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Wa),n.updateMatrixWorld(),s.makeTranslation(-js.x,-js.y,-js.z),$h.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix($h)}},Bo=class extends Mr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Il}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Ll=class extends Fo{constructor(){super(new bo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Bs=class extends Mr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.target=new Yt,this.shadow=new Ll}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Hl="\\[\\]\\.:\\/",C_=new RegExp("["+Hl+"]","g"),kl="[^"+Hl+"]",P_="[^"+Hl.replace("\\.","")+"]",I_=/((?:WC+[\/:])*)/.source.replace("WC",kl),L_=/(WCOD+)?/.source.replace("WCOD",P_),U_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",kl),D_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",kl),N_=new RegExp("^"+I_+L_+U_+D_+"$"),O_=["material","materials","bones","map"],Ul=class{constructor(e,t,n){let s=n||zt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},zt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(C_,"")}static parseTrackName(e){let t=N_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);O_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};zt.Composite=Ul;zt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};zt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};zt.prototype.GetterByBindingType=[zt.prototype._getValue_direct,zt.prototype._getValue_array,zt.prototype._getValue_arrayElement,zt.prototype._getValue_toArray];zt.prototype.SetterByBindingTypeAndVersioning=[[zt.prototype._setValue_direct,zt.prototype._setValue_direct_setNeedsUpdate,zt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[zt.prototype._setValue_array,zt.prototype._setValue_array_setNeedsUpdate,zt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[zt.prototype._setValue_arrayElement,zt.prototype._setValue_arrayElement_setNeedsUpdate,zt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[zt.prototype._setValue_fromArray,zt.prototype._setValue_fromArray_setNeedsUpdate,zt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var $_=new Float32Array(1);var Yn=class{constructor(e,t,n=0,s=1/0){this.ray=new Is(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new or,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Dl(e,this,n,t),n.sort(Kh),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Dl(e[s],this,n,t);return n.sort(Kh),n}};function Kh(i,e){return i.distance-e.distance}function Dl(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){let s=i.children;for(let r=0,o=s.length;r<o;r++)Dl(s[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var ks=(i,e,t)=>Math.max(e,Math.min(t,i)),br=(i,e,t)=>i+(e-i)*t,F_=new P(1,0,0),Eu=new P(0,1,0),B_=new P(0,0,1),Gl=(i,e)=>new hn().setFromAxisAngle(i,e),zn=i=>Gl(F_,i),Su=i=>Gl(Eu,i),li=i=>Gl(B_,i),ci=(...i)=>i.reduce((e,t)=>e.multiply(t)),Gs=(i,e)=>{let t=atob(i),n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return new e(n.buffer)};function wu(){let i=performance.now(),e=JSON.parse(window.ASSETS.model),t=new Dt;t.setAttribute("position",new bt(Gs(e.pos,Float32Array),3)),t.setAttribute("normal",new bt(Gs(e.nor,Float32Array),3)),t.setAttribute("uv",new bt(Gs(e.uv,Float32Array),2)),t.setAttribute("skinIndex",new bt(Gs(e.si,Uint16Array),4)),t.setAttribute("skinWeight",new bt(Gs(e.sw,Float32Array),4)),t.setIndex(new bt(Gs(e.idx,Uint32Array),1));{let H=t.attributes.position,we=t.attributes.skinIndex.array,Pe=t.attributes.skinWeight.array,Ke=e.bones.map(F=>F.n),He=F=>/(Left|Right)(Arm|Shoulder)$/.test(Ke[F]),v=F=>/^(Spine|Spine1|Spine2|Hips)$/.test(Ke[F]),I=Ke.indexOf("Spine1"),N=(F,B,$)=>{let Se=Math.min(1,Math.max(0,($-F)/(B-F)));return Se*Se*(3-2*Se)};for(let F=0;F<H.count;F++){let B=Math.abs(H.getX(F)),$=H.getY(F),Se=Math.min(1,1.8*N(1.08,.8,B)*N(1.6,1.85,$)*N(2.25,1.98,$));if(!(Se<=0))for(let Ee=0;Ee<4;Ee++){let Me=F*4+Ee;if(Pe[Me]>0&&He(we[Me])){let ce=-1;for(let pe=0;pe<4;pe++)Pe[F*4+pe]>0&&v(we[F*4+pe])&&(ce=F*4+pe);if(ce>=0){let pe=Pe[Me]*Se;Pe[Me]-=pe,Pe[ce]+=pe}else Se>.5&&(we[Me]=I)}}}t.attributes.skinIndex.needsUpdate=t.attributes.skinWeight.needsUpdate=!0}{let H=t.attributes.position,we=t.attributes.normal,Pe=t.index.array,Ke=H.count,He=new Map,v=new Int32Array(Ke),I=0;for(let ce=0;ce<Ke;ce++){let pe=Math.round(H.getX(ce)*2e3)+","+Math.round(H.getY(ce)*2e3)+","+Math.round(H.getZ(ce)*2e3),Le=He.get(pe);Le===void 0&&(Le=I++,He.set(pe,Le)),v[ce]=Le}let N=new Float64Array(I*3),F=new Float32Array(I),B=Array.from({length:I},()=>new Set);for(let ce=0;ce<Ke;ce++){let pe=v[ce];N[pe*3]=H.getX(ce),N[pe*3+1]=H.getY(ce),N[pe*3+2]=H.getZ(ce)}let $=(ce,pe,Le)=>{let nt=Math.min(1,Math.max(0,(Le-ce)/(pe-ce)));return nt*nt*(3-2*nt)};for(let ce=0;ce<I;ce++){let pe=Math.abs(N[ce*3]),Le=N[ce*3+1],nt=N[ce*3+2],Rt=$(.62,.4,pe),xt=$(2.36,2.5,Le)*$(3.14,2.96,Le);F[ce]=nt>0?Rt*xt:0}for(let ce=0;ce<Pe.length;ce+=3)for(let pe=0;pe<3;pe++){let Le=v[Pe[ce+pe]],nt=v[Pe[ce+(pe+1)%3]];Le!==nt&&(B[Le].add(nt),B[nt].add(Le))}let Se=B.map(ce=>[...ce]),Ee=N;for(let ce=0;ce<14;ce++){let pe=Float64Array.from(Ee);for(let Le=0;Le<I;Le++){let nt=F[Le];if(nt<=0||!Se[Le].length)continue;let Rt=0,xt=0,_t=0;for(let vn of Se[Le])Rt+=Ee[vn*3],xt+=Ee[vn*3+1],_t+=Ee[vn*3+2];let ut=Se[Le].length,it=.6*nt;pe[Le*3]+=(Rt/ut-Ee[Le*3])*it,pe[Le*3+1]+=(xt/ut-Ee[Le*3+1])*it,pe[Le*3+2]+=(_t/ut-Ee[Le*3+2])*it}Ee=pe}for(let ce=0;ce<Ke;ce++){let pe=v[ce];H.setXYZ(ce,Ee[pe*3],Ee[pe*3+1],Ee[pe*3+2])}let Me=new Float64Array(I*3);for(let ce=0;ce<Pe.length;ce+=3){let pe=Pe[ce],Le=Pe[ce+1],nt=Pe[ce+2],Rt=H.getX(Le)-H.getX(pe),xt=H.getY(Le)-H.getY(pe),_t=H.getZ(Le)-H.getZ(pe),ut=H.getX(nt)-H.getX(pe),it=H.getY(nt)-H.getY(pe),vn=H.getZ(nt)-H.getZ(pe),wt=xt*vn-_t*it,an=_t*ut-Rt*vn,ln=Rt*it-xt*ut;for(let Gn of[pe,Le,nt]){let Vn=v[Gn];Me[Vn*3]+=wt,Me[Vn*3+1]+=an,Me[Vn*3+2]+=ln}}for(let ce=0;ce<Ke;ce++){let pe=v[ce],Le=Math.min(1,F[pe]*1.5);if(Le<=0)continue;let nt=Math.hypot(Me[pe*3],Me[pe*3+1],Me[pe*3+2])||1,Rt=we.getX(ce)*(1-Le)+Me[pe*3]/nt*Le,xt=we.getY(ce)*(1-Le)+Me[pe*3+1]/nt*Le,_t=we.getZ(ce)*(1-Le)+Me[pe*3+2]/nt*Le,ut=Math.hypot(Rt,xt,_t)||1;we.setXYZ(ce,Rt/ut,xt/ut,_t/ut)}H.needsUpdate=we.needsUpdate=!0}let n=new Fs,s=n.load(window.ASSETS.albedo);s.colorSpace=Et,s.anisotropy=4;let r=n.load(window.ASSETS.normal),o=n.load(window.ASSETS.rough),a={uDent:{value:new yt(0,1,1,0)},uInfl:{value:0},uBelly:{value:0}},l=new Kt({map:s,normalMap:r,normalScale:new Te(1,1),roughnessMap:o,roughness:1,metalness:0}),c=H=>{Object.assign(H.uniforms,a),H.vertexShader=H.vertexShader.replace("#include <common>",`#include <common>
uniform vec4 uDent;uniform float uInfl;uniform float uBelly;varying vec3 vRP;`).replace("#include <skinning_vertex>",`#include <skinning_vertex>
        vec3 dd=transformed-uDent.xyz;
        transformed-=objectNormal*(uDent.w*.28*exp(-dot(dd,dd)/.45)*(1.0-smoothstep(1.9,2.2,transformed.y)));
        float by=transformed.y-1.35;
        transformed+=objectNormal*(uInfl+uBelly*exp(-by*by/.5)*smoothstep(-.2,.5,objectNormal.z));`),H.fragmentShader=H.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vRP;`).replace("#include <normal_fragment_maps>",lt.normal_fragment_maps.replace("mapN.xy *= normalScale;","vec2 q1=(vRP.xy-vec2(0.,2.7))/vec2(.55,.34);vec2 q2=vec2(abs(vRP.x)-.2,vRP.y-2.85)/.26;float fm=min(smoothstep(.55,1.,length(q1)),smoothstep(.5,1.,length(q2)));fm=mix(1.,fm,step(.05,vRP.z));mapN.xy *= normalScale*fm;"))};l.onBeforeCompile=c;let h=new gt,f=new cr(t,l);f.frustumCulled=!1,h.add(f);let u=e.bones.map(H=>{let we=new hr;return we.name=H.n,we.position.fromArray(H.pos),we.quaternion.fromArray(H.q),we}),p={};e.bones.forEach((H,we)=>p[H.n]=we),e.bones.forEach((H,we)=>{H.p>=0?u[H.p].add(u[we]):f.add(u[we])}),h.updateMatrixWorld(!0);let g=u.map(H=>H.matrixWorld.clone()),_=u.map(H=>H.quaternion.clone()),m=u.map(H=>H.position.clone()),d=new To(u);f.bind(d,new vt);let S={};u.forEach(H=>S[H.name]=H);let x=[];{let H=new Set,we=Pe=>{if(H.has(Pe))return;let Ke=e.bones[Pe].p;Ke>=0&&we(Ke),H.add(Pe),x.push(Pe)};for(let Pe=0;Pe<u.length;Pe++)we(Pe)}let y=H=>{let we=new Yt;return g[p[H]].clone().invert().decompose(we.position,we.quaternion,we.scale),S[H].add(we),we},U=y("Head"),R=y("Spine1"),C=new ot(t,new Zt({side:qt})),K=new Yn,w=(H,we,Pe=0)=>{K.set(new P(H+Pe*1,we,2),new P(-Pe*.35,0,-1).normalize());let Ke=K.intersectObject(C,!1)[0];if(!Ke)return null;let He=Ke.face.normal.clone();return{x:Ke.point.x,y:Ke.point.y,z:Ke.point.z,n:[He.x,He.y,He.z]}},A=-.7,q=.7,re=1.85,X=3.05,L=43,O=37,k=new Float32Array(L*O);for(let H=0;H<O;H++)for(let we=0;we<L;we++){let Pe=w(br(A,q,we/(L-1)),br(re,X,H/(O-1)));k[H*L+we]=Pe?Pe.z:.3}let Y=(H,we)=>{let Pe=ks((H-A)/(q-A),0,1)*(L-1),Ke=ks((we-re)/(X-re),0,1)*(O-1),He=Math.min(L-2,Math.floor(Pe)),v=Math.min(O-2,Math.floor(Ke)),I=Pe-He,N=Ke-v;return br(br(k[v*L+He],k[v*L+He+1],I),br(k[(v+1)*L+He],k[(v+1)*L+He+1],I),N)},Q=new Zt({visible:!1}),J=[],ne=new Pt(1,16,12),V=(H,we,Pe,Ke)=>{let He=y(H),v=new ot(ne,Q);v.position.set(...Pe),v.scale.set(...Ke),v.userData.region=we,He.add(v),J.push(v)},le=(H,we,Pe,Ke,He)=>{let v=y(H),I=new P(...Pe),N=new P(...Ke),F=I.distanceTo(N),B=new ot(new Uo(He,Math.max(.01,F-2*He),4,8),Q);B.position.copy(I).add(N).multiplyScalar(.5),B.quaternion.setFromUnitVectors(Eu,N.clone().sub(I).normalize()),B.userData.region=we,v.add(B),J.push(B)};V("Head","head",[0,2.75,.05],[.62,.58,.55]),V("Spine1","belly",[0,1.45,0],[.98,.95,.82]);let W=H=>new P().setFromMatrixPosition(g[p[H]]);for(let H of["Left","Right"]){let we=W(H+"Arm"),Pe=W(H+"ForeArm"),Ke=W(H+"Hand"),He=W(H+"Hand_end");le(H+"Arm","arm",we.toArray(),Pe.toArray(),.2),le(H+"ForeArm","arm",Pe.toArray(),He.toArray(),.2);let v=W(H+"UpLeg"),I=W(H+"Leg"),N=W(H+"Foot");le(H+"UpLeg","foot",v.toArray(),I.toArray(),.3),le(H+"Leg","foot",I.toArray(),N.toArray(),.25)}let j=H=>{let we=W(H+"Arm"),Pe=W(H+"Hand_end");return Math.atan2(we.y-Pe.y,Math.abs(Pe.x-we.x))},me={Left:j("Left"),Right:j("Right")},ve=u.map(()=>new hn),oe=u.map(()=>null),Ae=new hn,xe=new hn,Ce=new P,De=(H,we)=>{let Pe=p[H];oe[Pe]=oe[Pe]?oe[Pe].multiply(we):we},D=.8,be=new P(0,1.45,-.06).applyMatrix4(g[p.Spine1].clone().invert()),ae=new P,de=new P,se=new P,qe=new P,he=H=>["Arm","ForeArm","Hand","Hand_end"].map(we=>p[H+we]);function T(H,we,Pe,Ke,He){let v=we*-(Math.PI/2-me[H]),I=[ci(zn(Pe[0]),li(v+we*Pe[1])),ci(zn(Pe[2]),li(we*Pe[3])),zn(-Ke*.45),null];for(let N=0;N<4;N++){let F=He[N],B=ve[e.bones[F].p];xe.copy(B).invert();let $=I[N]?xe.clone().multiply(I[N]).multiply(B).multiply(_[F]):_[F];u[F].quaternion.copy($),ve[F].copy(B).multiply($)}u[He[0]].updateMatrixWorld(!0)}function b(H,we){let Pe=0,Ke=(He,v)=>{let I=He.distanceTo(ae),N=we+v;I<N&&(Pe+=(N-I)*(N-I))};return de.setFromMatrixPosition(u[H[0]].matrixWorld),se.setFromMatrixPosition(u[H[1]].matrixWorld),qe.setFromMatrixPosition(u[H[2]].matrixWorld),Ke(qe,.07),de.setFromMatrixPosition(u[H[3]].matrixWorld),Ke(de,.05),Ke(qe.clone().lerp(de,.5),.06),Pe}function Z(H,we,Pe,Ke,He){let v=he(H),I=[...Pe],N=[1,1.3,.7,.7];T(H,we,I,Ke,v);let F=b(v,He);for(let B=0;B<8&&F>1e-5;B++){let $=[0,0,0,0];for(let Me=0;Me<4;Me++){let ce=I[Me];I[Me]=ce+.05,T(H,we,I,Ke,v),$[Me]=(b(v,He)-F)/.05*N[Me],I[Me]=ce}let Se=$[0]*$[0]+$[1]*$[1]+$[2]*$[2]+$[3]*$[3];if(Se<1e-10)break;let Ee=F/Se*1.1;for(let Me=0;Me<4;Me++)I[Me]=ks(I[Me]-ks($[Me]*Ee,-.2,.2),Pe[Me]-.7,Pe[Me]+.7);T(H,we,I,Ke,v),F=b(v,He)}return I}function ye(H){oe.fill(null);let we=H.lean,Pe=H.tilt;De("Hips",ci(zn(we*.25),li(Pe*.1))),De("Spine",ci(zn(we*.25),li(Pe*.2))),De("Spine1",ci(zn(we*.3),li(Pe*.2))),De("Spine2",ci(zn(we*.2),li(Pe*.2))),De("Neck",ci(zn(H.nod*.35),Su(H.yaw*.4),li(H.roll*.4))),De("Head",ci(zn(H.nod*.65),Su(H.yaw*.6),li(H.roll*.6)));for(let[I,N]of[["Left",1],["Right",-1]])De(I+"UpLeg",ci(zn(H.hip),li(N*H.sit*.12)));if(H.sit>0)for(let I of["Left","Right"])De(I+"UpLeg",zn(-1.35*H.sit));for(let I of x){let N=e.bones[I].p,F=N>=0?ve[N]:Ae;xe.copy(F).invert();let B=oe[I]?xe.clone().multiply(oe[I]).multiply(F).multiply(_[I]):_[I];u[I].quaternion.copy(B),u[I].position.copy(m[I]),ve[I].copy(F).multiply(B)}let Ke=p.Hips,He=e.bones[Ke].p>=0?ve[e.bones[Ke].p]:Ae;Ce.set(0,H.dy,0).applyQuaternion(xe.copy(He).invert()),u[Ke].position.add(Ce),h.updateMatrixWorld(!0),ae.copy(be).applyMatrix4(u[p.Spine1].matrixWorld);let v=D+(H.inflate||0);for(let[I,N,F]of[["Left",1,H.ar],["Right",-1,H.al]]){let B=Z(I,N,F,H.fing,v);T(I,N,B,H.fing,he(I))}}let ue=t.attributes.normal,ie=t.attributes.skinIndex,G=t.attributes.skinWeight,Ie=t.attributes.position,Be=t.index.array,Fe=t.attributes.uv,et=-.55,fe=.55,tt=2.2,Ze=3.2,We=640,Qe=Math.round((fe-et)*We),ke=Math.round((Ze-tt)*We),Ge=H=>{let we=Ie.getX(H),Pe=Ie.getY(H);return we>et&&we<fe&&Pe>tt&&Pe<Ze&&Ie.getZ(H)>.1&&ue.getZ(H)>-.1},dt=new Map,Mt=[],rt=[],Re=[],z=[],Ue=[],_e=[],$e=H=>{let we=dt.get(H);if(we===void 0){we=Mt.length/3,dt.set(H,we);let Pe=Ie.getX(H),Ke=Ie.getY(H),He=Ie.getZ(H),v=ue.getX(H),I=ue.getY(H),N=ue.getZ(H);Mt.push(Pe+v*.004,Ke+I*.004,He+N*.004),rt.push(v,I,N),Re.push((Pe-et)/(fe-et),(Ke-tt)/(Ze-tt));for(let F=0;F<4;F++)z.push(ie.array[H*4+F]),Ue.push(G.array[H*4+F])}return we};for(let H=0;H<Be.length;H+=3){let we=Be[H],Pe=Be[H+1],Ke=Be[H+2];Ge(we)&&Ge(Pe)&&Ge(Ke)&&_e.push($e(we),$e(Pe),$e(Ke))}let Ye=new Dt;Ye.setAttribute("position",new bt(new Float32Array(Mt),3)),Ye.setAttribute("normal",new bt(new Float32Array(rt),3)),Ye.setAttribute("uv",new bt(new Float32Array(Re),2)),Ye.setAttribute("skinIndex",new bt(new Uint16Array(z),4)),Ye.setAttribute("skinWeight",new bt(new Float32Array(Ue),4)),Ye.setIndex(_e);let at=document.createElement("canvas");at.width=Qe,at.height=ke;let ee=at.getContext("2d"),It=new Cn(at);It.colorSpace=Et,It.anisotropy=4;let Je=new Kt({map:It,transparent:!0,roughness:.6,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});Je.onBeforeCompile=c;let ze=new cr(Ye,Je);ze.frustumCulled=!1,ze.renderOrder=2,h.add(ze),ze.bind(d,new vt);let kt=[244,201,60],tn="",kn=kt;{let H=new Image;H.onload=()=>{let we=document.createElement("canvas");we.width=H.width,we.height=H.height;let Pe=we.getContext("2d",{willReadFrequently:!0});Pe.drawImage(H,0,0);let Ke=()=>({r:0,g:0,b:0,n:0}),He=Ke(),v=Ke();for(let B of dt.keys()){let $=Ie.getX(B),Se=Ie.getY(B),Ee=Math.min(Math.hypot($-.2,Se-2.85),Math.hypot($+.2,Se-2.85)),Me=Math.hypot($/.17,(Se-2.68)/.075),ce=Ee>.14&&Ee<.19?He:Me>1.25&&Me<1.9&&Se<2.78?v:null;if(!ce)continue;let pe=Fe.getX(B),Le=Fe.getY(B),nt=Pe.getImageData(Math.floor(pe*(we.width-1)),Math.floor((1-Le)*(we.height-1)),1,1).data;ce.r+=nt[0],ce.g+=nt[1],ce.b+=nt[2],ce.n++}let I=B=>B.n>8?[Math.round(B.r/B.n),Math.round(B.g/B.n),Math.round(B.b/B.n)]:null,N=I(He),F=I(v)||N;N&&(kt=N,kn=F,tn="")},H.src=window.ASSETS.albedo}let Lt=H=>(H-et)*We,St=H=>(Ze-H)*We,Zn={x:.2,y:2.85,r:.115};function Un(H){let we=[H.u,H.l,H.sl,H.arc,H.mo,H.sm,H.te,H.tg,H.bl,H.lx,H.ly,H.pup||1].map(He=>Math.round(He*60)).join(",");if(we===tn)return;tn=we,ee.clearRect(0,0,Qe,ke);let Pe=(He,v)=>"rgba("+He[0]+","+He[1]+","+He[2]+","+v+")",Ke=(He,v,I,N,F)=>{ee.save(),ee.translate(Lt(He),St(v)),ee.scale(1,N/I);let B=I*We,$=ee.createRadialGradient(0,0,B*.9,0,0,B*1.55);$.addColorStop(0,Pe(F,1)),$.addColorStop(1,Pe(F,0)),ee.fillStyle=$,ee.beginPath(),ee.arc(0,0,B*1.55,0,Math.PI*2),ee.fill(),ee.restore()};for(let He of[-1,1])Ke(He*.2,2.85,.128,.128,kt);if(Ke(0,2.68,.17,.075,kn),H.bl>.03)for(let He of[-1,1]){let v=ee.createRadialGradient(Lt(He*.31),St(2.6),0,Lt(He*.31),St(2.6),.12*We);v.addColorStop(0,"rgba(255,100,100,"+.5*Math.min(1,H.bl)+")"),v.addColorStop(1,"rgba(255,100,100,0)"),ee.fillStyle=v,ee.fillRect(Lt(He*.31)-.12*We,St(2.6)-.12*We,.24*We,.24*We)}for(let He of[-1,1]){let v=He*.2+H.lx*.016,I=2.85+H.ly*.013,N=1.06,F=.088;ee.save(),ee.translate(Lt(He*.2),St(2.85)),ee.scale(1,N);{let B=ee.createRadialGradient(0,0,.045*We,0,0,F*We);B.addColorStop(0,"#8fd14a"),B.addColorStop(.8,"#74c23c"),B.addColorStop(1,"#4f9a2c"),ee.fillStyle=B}ee.beginPath(),ee.arc(0,0,F*We,0,Math.PI*2),ee.fill();{let B=ks(H.sl/.4,0,1);B>.02&&(ee.strokeStyle="rgba(55,75,20,"+.6*B+")",ee.lineWidth=1.5+2*B,ee.stroke())}ee.restore(),ee.save(),ee.translate(Lt(v),St(I)),ee.scale(1,N),ee.fillStyle="#0a0a0a",ee.beginPath(),ee.arc(0,0,.05*(H.pup||1)*We,0,Math.PI*2),ee.fill(),ee.restore()}if(H.mo<=.04){let He=H.sm,v=Math.max(0,-He),I=.1+.018*v;ee.strokeStyle="#5a3a12",ee.lineWidth=3+.3*v,ee.lineCap="round",ee.beginPath();for(let N=0;N<=20;N++){let F=-I+2*I*N/20,B=He>=0?2.7+He*.012*(F*F)/.01-He*.008:2.688+v*.042*(1-(F/I)**2);N?ee.lineTo(Lt(F),St(B)):ee.moveTo(Lt(F),St(B))}ee.stroke()}if(H.mo>.04){let He=H.mo,v=.11+.13*He,I=2.73,N=H.sm,F=Ee=>I+N*.06*(Ee*Ee)/(v*v)-N*.025,B=Ee=>F(Ee)-He*.3*Math.pow(Math.max(0,1-Ee*Ee/(v*v)),.55),$=28,Se=()=>{ee.beginPath(),ee.moveTo(Lt(-v),St(F(-v)));for(let Ee=0;Ee<=$;Ee++){let Me=-v+2*v*Ee/$;ee.lineTo(Lt(Me),St(F(Me)))}for(let Ee=$;Ee>=0;Ee--){let Me=-v+2*v*Ee/$;ee.lineTo(Lt(Me),St(B(Me)))}ee.closePath()};if(ee.save(),Se(),ee.fillStyle="#4b1414",ee.fill(),ee.clip(),ee.fillStyle="#e8737f",ee.beginPath(),ee.ellipse(Lt(0),St(B(0)+.01),v*.62*We,Math.max(2,(F(0)-B(0))*.5*We*Math.min(1,H.tg+.25)),0,0,Math.PI*2),ee.fill(),H.te>.1){let Ee=.045*Math.min(1,He*2)*Math.min(1,H.te);ee.fillStyle="#fff",ee.beginPath(),ee.moveTo(Lt(-v*.9),St(F(-v*.9)));for(let Me=0;Me<=$;Me++){let ce=-v*.9+1.8*v*Me/$;ee.lineTo(Lt(ce),St(F(ce)))}for(let Me=$;Me>=0;Me--){let ce=-v*.9+1.8*v*Me/$;ee.lineTo(Lt(ce),St(F(ce)-Ee))}ee.closePath(),ee.fill()}ee.restore(),Se(),ee.strokeStyle="rgba(120,60,10,.75)",ee.lineWidth=3,ee.lineJoin="round",ee.stroke()}for(let He of[-1,1]){let v=He*Zn.x,I=Zn.y,N=Zn.r*We,F=(He<0?1:-1)*H.sl*.7,B=($,Se)=>{ee.save(),ee.translate(Lt(v),St(I)),ee.rotate(F),ee.beginPath(),ee.rect(-N*1.6,$,N*3.2,Se-$),ee.clip(),ee.fillStyle=Pe(kt,1),"filter"in ee&&(ee.filter="blur(2.5px)"),ee.beginPath(),ee.arc(0,0,N*1.08,0,Math.PI*2),ee.fill(),ee.restore()};if(H.u>.03){let $=-N+2*N*H.u;B(-N*1.6,$),ee.save(),ee.translate(Lt(v),St(I)),ee.rotate(F);{let Ee=ks(H.sl/.4,0,1);ee.strokeStyle="rgba(95,50,8,"+Math.max(.4*Math.min(1,Math.max(0,(H.u-.12)/.25)),.9*Ee)+")",ee.lineWidth=1.5+2.5*Ee}ee.beginPath();let Se=Math.sqrt(Math.max(0,(N*1.08)**2-$*$));ee.moveTo(-Se,$),ee.lineTo(Se,$),ee.stroke(),ee.restore()}H.l>.03&&B(N-2*N*H.l,N*1.6),Math.abs(H.arc)>.35&&H.u>.92&&(ee.save(),ee.translate(Lt(v),St(I)),ee.strokeStyle="#3a1c08",ee.lineWidth=.02*We,ee.lineCap="round",ee.beginPath(),H.arc>0?ee.arc(0,N*.35,N*.8,Math.PI*1.15,Math.PI*1.85):ee.arc(0,-N*.35,N*.8,Math.PI*.15,Math.PI*.85),ee.stroke(),ee.restore())}It.needsUpdate=!0}return console.log("model built",t.attributes.position.count,"verts",(performance.now()-i|0)+"ms","armPhi",me.Left.toFixed(2)),{group:h,mesh:f,bones:S,uniforms:a,surf:w,faceZ:Y,colliders:J,face:U,body:R,hipY:W("Hips").y,pose:ye,paint:Un,HEAD:{x:0,y:0,z:0}}}function Tu(i,e=1e-4){e=Math.max(e,Number.EPSILON);let t={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count,o=0,a=Object.keys(i.attributes),l={},c={},h=[],f=["getX","getY","getZ","getW"],u=["setX","setY","setZ","setW"];for(let S=0,x=a.length;S<x;S++){let y=a[S],U=i.attributes[y];l[y]=new bt(new U.array.constructor(U.count*U.itemSize),U.itemSize,U.normalized);let R=i.morphAttributes[y];R&&(c[y]=new bt(new R.array.constructor(R.count*R.itemSize),R.itemSize,R.normalized))}let p=e*.5,g=Math.log10(1/e),_=Math.pow(10,g),m=p*_;for(let S=0;S<r;S++){let x=n?n.getX(S):S,y="";for(let U=0,R=a.length;U<R;U++){let C=a[U],K=i.getAttribute(C),w=K.itemSize;for(let A=0;A<w;A++)y+=`${~~(K[f[A]](x)*_+m)},`}if(y in t)h.push(t[y]);else{for(let U=0,R=a.length;U<R;U++){let C=a[U],K=i.getAttribute(C),w=i.morphAttributes[C],A=K.itemSize,q=l[C],re=c[C];for(let X=0;X<A;X++){let L=f[X],O=u[X];if(q[O](o,K[L](x)),w)for(let k=0,Y=w.length;k<Y;k++)re[k][O](o,w[k][L](x))}}t[y]=o,h.push(o),o++}}let d=i.clone();for(let S in i.attributes){let x=l[S];if(d.setAttribute(S,new bt(x.array.slice(0,o*x.itemSize),x.itemSize,x.normalized)),S in c)for(let y=0;y<c[S].length;y++){let U=c[S][y];d.morphAttributes[S][y]=new bt(U.array.slice(0,o*U.itemSize),U.itemSize,U.normalized)}}return d.setIndex(h),d}var Au=(i,e,t)=>Math.max(e,Math.min(t,i)),Cu=2.7,Pu=Cu/2,Iu=1.17,Lu=.17,Vl=1.25,Ru="#ffe583";var z_=i=>{let e=i/Pu-1;return Iu*Math.sqrt(Math.max(0,1-e*e))*(1-Lu*e)},Vs=(i,e)=>Math.sqrt(Math.max(0,z_(e)**2-i*i)),Uu=Vs;function Du(){let i=new Pt(1,80,60);{let X=i.attributes.position;for(let L=0;L<X.count;L++){let O=X.getX(L),k=X.getY(L),Y=X.getZ(L),Q=Iu*(1-Lu*k);X.setXYZ(L,O*Q,Pu*(1+k),Y*Q)}}i.deleteAttribute("uv"),i.deleteAttribute("normal"),i=Tu(i,1e-4),i.computeVertexNormals();let e={uDent:{value:new yt(0,1,1,0)},uInfl:{value:0},uBelly:{value:0}},t=X=>{Object.assign(X.uniforms,e),X.vertexShader=X.vertexShader.replace("#include <common>",`#include <common>
uniform vec4 uDent;uniform float uInfl;uniform float uBelly;`).replace("#include <skinning_vertex>",`#include <skinning_vertex>
        vec3 dd=transformed-uDent.xyz;
        transformed-=objectNormal*(uDent.w*.3*exp(-dot(dd,dd)/.5));
        float by=transformed.y-1.0;
        transformed+=objectNormal*(uInfl+uBelly*exp(-by*by/.6)*smoothstep(-.2,.5,objectNormal.z));`)},n={roughness:.5,clearcoat:.28,clearcoatRoughness:.45},s=new Ci({color:Ru,...n});s.onBeforeCompile=t;let r=new ot(i,s);r.frustumCulled=!1;let o=new gt,a=new gt,l=new gt;a.position.y=Vl,l.position.y=-Vl,o.add(a),a.add(l),l.add(r);let c=new Zt({visible:!1}),h=new ot(i,c);h.userData.region="egg",l.add(h);let f=X=>X.y>1.75?"head":"belly",u=-.8,p=.8,g=1.4,_=2.5,m=400,d=Math.round((p-u)*m),S=Math.round((_-g)*m),x=document.createElement("canvas");x.width=d,x.height=S;let y=x.getContext("2d"),U=new Cn(x);U.colorSpace=Et,U.anisotropy=4;{let O=[],k=[],Y=[],Q=[];for(let le=0;le<=36;le++)for(let W=0;W<=48;W++){let j=u+(p-u)*W/48,me=g+(_-g)*le/36,ve=Vs(j,me),oe=.002,Ae=(Vs(j+oe,me)-Vs(j-oe,me))/(2*oe),xe=(Vs(j,me+oe)-Vs(j,me-oe))/(2*oe),Ce=Math.hypot(Ae,xe,1),De=-Ae/Ce,D=-xe/Ce,be=1/Ce;O.push(j+De*.004,me+D*.004,ve+be*.004),k.push(De,D,be),Y.push(W/48,le/36)}for(let le=0;le<36;le++)for(let W=0;W<48;W++){let j=le*49+W,me=j+1,ve=j+48+1,oe=ve+1;Q.push(j,me,oe,j,oe,ve)}let J=new Dt;J.setAttribute("position",new ht(O,3)),J.setAttribute("normal",new ht(k,3)),J.setAttribute("uv",new ht(Y,2)),J.setIndex(Q);let ne=new Ci({map:U,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2,...n});ne.onBeforeCompile=t;let V=new ot(J,ne);V.frustumCulled=!1,V.renderOrder=2,l.add(V)}let R=X=>(X-u)*m,C=X=>(_-X)*m,K={x:.38,y:2.12,r:.175},w="";function A(X){let L=[X.u,X.l,X.sl,X.arc,X.mo,X.sm,X.bl,X.lx,X.ly].map(Y=>Math.round(Y*60)).join(",");if(L===w)return;if(w=L,y.clearRect(0,0,d,S),X.bl>.03)for(let Y of[-1,1]){let Q=R(Y*.62),J=C(1.9),ne=.13*m,V=y.createRadialGradient(Q,J,0,Q,J,ne);V.addColorStop(0,"rgba(255,120,110,"+.45*Math.min(1,X.bl)+")"),V.addColorStop(1,"rgba(255,120,110,0)"),y.fillStyle=V,y.fillRect(Q-ne,J-ne,2*ne,2*ne)}for(let Y of[-1,1]){let Q=Y*K.x,J=K.y,ne=K.r*m,V=R(Q),le=C(J),W=y.createRadialGradient(V,le,ne*.15,V,le,ne);W.addColorStop(0,"#a9de80"),W.addColorStop(.6,"#82c859"),W.addColorStop(.9,"#5da644"),W.addColorStop(1,"#3d8132"),y.fillStyle=W,y.beginPath(),y.arc(V,le,ne,0,Math.PI*2),y.fill(),y.strokeStyle="rgba(40,85,35,.55)",y.lineWidth=2,y.stroke(),y.fillStyle="#070707",y.beginPath(),y.arc(V+X.lx*.04*m,le-X.ly*.035*m,ne*.5,0,Math.PI*2),y.fill();let j=(Y<0?1:-1)*X.sl*.7,me=Au((X.u-.1)/.9,0,1),ve=(oe,Ae)=>{y.save(),y.translate(V,le),y.rotate(j),y.beginPath(),y.rect(-ne*1.7,oe,ne*3.4,Ae-oe),y.clip(),y.fillStyle=Ru,"filter"in y&&(y.filter="blur(1.5px)"),y.beginPath(),y.arc(0,0,ne*1.12,0,Math.PI*2),y.fill(),y.restore()};if(me>.02){let oe=-ne+2*ne*me;if(ve(-ne*1.7,oe),me>.1){y.save(),y.translate(V,le),y.rotate(j),y.strokeStyle="rgba(120,80,20,"+.45*Math.min(1,me/.25)+")",y.lineWidth=2,y.beginPath();let Ae=Math.sqrt(Math.max(0,(ne*1.1)**2-oe*oe));y.moveTo(-Ae,oe),y.lineTo(Ae,oe),y.stroke(),y.restore()}}X.l>.03&&ve(ne-2*ne*X.l,ne*1.7),Math.abs(X.arc)>.35&&X.u>.92&&(y.save(),y.strokeStyle="#4a3208",y.lineWidth=.024*m,y.lineCap="round",y.beginPath(),X.arc>0?y.arc(V,le+.045*m,.1*m,Math.PI*1.12,Math.PI*1.88):y.arc(V,le-.05*m,.1*m,Math.PI*.12,Math.PI*.88),y.stroke(),y.restore())}let O=Au(X.mo,0,1),k=1.822;if(O>.05){let Y=(.12+.12*O)*(1+.15*Math.max(0,X.sm)),Q=.035*X.sm,J=.05+.19*O;y.fillStyle="#3c1510",y.beginPath(),y.moveTo(R(-Y),C(k+Q)),y.quadraticCurveTo(R(0),C(k-J*2),R(Y),C(k+Q)),y.quadraticCurveTo(R(0),C(k+.012),R(-Y),C(k+Q)),y.closePath(),y.fill(),O>.5&&(y.save(),y.clip(),y.fillStyle="#d8656c",y.beginPath(),y.ellipse(R(0),C(k-J*1.05),Y*.55*m,.05*m,0,0,Math.PI*2),y.fill(),y.restore())}{let Y=1.838+O*.03,Q=.215,J=Y+.006+X.sm*.012,ne=Y-.034+X.sm*.004,V=y.createLinearGradient(0,C(Y+.03),0,C(ne));V.addColorStop(0,"#f6d472"),V.addColorStop(1,"#d9a64e"),y.fillStyle=V,y.beginPath(),y.moveTo(R(-Q),C(J)),y.quadraticCurveTo(R(0),C(Y+.075),R(Q),C(J)),y.quadraticCurveTo(R(0),C(ne-.02),R(-Q),C(J)),y.closePath(),y.fill(),y.strokeStyle="rgba(125,75,15,.85)",y.lineWidth=3,y.lineCap="round",y.beginPath(),y.moveTo(R(-Q),C(J)),y.quadraticCurveTo(R(0),C(ne-.02),R(Q),C(J)),y.stroke()}U.needsUpdate=!0}A({u:.08,l:0,sl:0,arc:0,mo:0,sm:.5,bl:0,lx:0,ly:0});function q(X){let L=performance.now()/1e3,O=Math.sin(L*1.5)*.02,k=X.sit||0;a.rotation.set(X.lean*.9+X.nod*.32+k*.1,X.yaw*.75,X.roll*.9+O+(X.hip||0)*.1,"YXZ"),l.scale.y=1-.05*k}let re={head:[l,[0,2.3,.6]],mouth:[l,[0,1.82,1.1]],belly:[l,[0,1,1.2]],feet:[o,[0,.1,.4]],top:[l,[0,Cu+.3,.1]]};return{group:o,uniforms:e,colliders:[h],regionOf:f,pose:q,paint:A,anchors:re,hipY:Vl}}var Xl=[{id:"hat",name:"\u5E3D\u5B50"},{id:"face",name:"\u773C\u955C"},{id:"neck",name:"\u9886\u9970"}],Vo=[{id:"bow",slot:"hat",name:"\u8774\u8776\u7ED3",icon:"\u{1F380}",price:10},{id:"sprout",slot:"hat",name:"\u5C0F\u5AE9\u82BD",icon:"\u{1F331}",price:8},{id:"cap",slot:"hat",name:"\u9E2D\u820C\u5E3D",icon:"\u{1F9E2}",price:12},{id:"party",slot:"hat",name:"\u6D3E\u5BF9\u5E3D",icon:"\u{1F389}",price:14},{id:"chef",slot:"hat",name:"\u53A8\u5E08\u5E3D",icon:"\u{1F468}\u200D\u{1F373}",price:20},{id:"tophat",slot:"hat",name:"\u7EC5\u58EB\u5E3D",icon:"\u{1F3A9}",price:26},{id:"crown",slot:"hat",name:"\u5C0F\u7687\u51A0",icon:"\u{1F451}",price:40},{id:"round",slot:"face",name:"\u5706\u773C\u955C",icon:"\u{1F453}",price:8},{id:"sun",slot:"face",name:"\u58A8\u955C",icon:"\u{1F576}\uFE0F",price:14},{id:"heart",slot:"face",name:"\u7231\u5FC3\u955C",icon:"\u{1F497}",price:18},{id:"bowtie",slot:"neck",name:"\u9886\u7ED3",icon:"\u{1F454}",price:6},{id:"bell",slot:"neck",name:"\u5C0F\u94C3\u94DB",icon:"\u{1F514}",price:10},{id:"scarf",slot:"neck",name:"\u7EA2\u56F4\u5DFE",icon:"\u{1F9E3}",price:16}],ql=Object.fromEntries(Vo.map(i=>[i.id,i])),Sr={frog:{hatY:3,hatZ:.03,hatR:.31,eyeY:2.85,eyeX:.2,eyeZ:.405,eyeR:.115,neckY:2.24,neckZ:.43,scarf:{y:2.3,rx:.62,rz:.5,tube:.085}},egg:{hatY:2.6,hatZ:0,hatR:.34,eyeY:2.12,eyeX:.38,eyeZ:.8,eyeR:.15,neckY:1.72,neckZ:1.07,scarf:{y:1.5,rx:1.17,rz:1.16,tube:.1}}},Nt=(i,e={})=>new Kt({color:i,roughness:.55,metalness:0,...e}),mt=(i,e,t,n=[0,0,0],s=[0,0,0],r=[1,1,1])=>{let o=new ot(e,t);return o.position.set(...n),o.rotation.set(...s),o.scale.set(...r),o.castShadow=!1,i.add(o),o},H_=new P(0,0,1);function Wl(i,e,t,n){let s=i.z,r=.02,o=s(e,t),a=(s(e+r,t)-s(e-r,t))/(2*r),l=(s(e,t+r)-s(e,t-r))/(2*r),c=new P(-a,-l,1).normalize();return{p:new P(e,t,o).addScaledVector(c,n),q:new hn().setFromUnitVectors(H_,c)}}var k_=()=>{let i=new Ns;return i.moveTo(0,-.5),i.bezierCurveTo(-.15,-.35,-.55,-.1,-.55,.2),i.bezierCurveTo(-.55,.5,-.15,.55,0,.3),i.bezierCurveTo(.15,.55,.55,.5,.55,.2),i.bezierCurveTo(.55,-.1,.15,-.35,0,-.5),i};function Nu(i,e){let t=Sr[e],n=new gt,s=t.hatR;switch(n.userData.item=i,i){case"tophat":{n.position.set(t.hatX||0,t.hatY-.02,t.hatZ);let r=Nt(2829107,{roughness:.35});mt(n,new Tt(s*1.45,s*1.45,s*.12,32),r,[0,s*.06,0]),mt(n,new Tt(s*.88,s*.95,s*1.5,32),r,[0,s*.8,0]),mt(n,new Tt(s*.96,s*.96,s*.3,32),Nt(12860219),[0,s*.28,0]);break}case"crown":{n.position.set(t.hatX||0,t.hatY-.03,t.hatZ);let r=Nt(16106776,{metalness:.5,roughness:.3});mt(n,new Tt(s*.95,s*.85,s*.5,24,1,!0),r,[0,s*.25,0]).material.side=qt;for(let o=0;o<5;o++){let a=o/5*Math.PI*2;mt(n,new Vt(s*.2,s*.55,8),r,[Math.sin(a)*s*.82,s*.7,Math.cos(a)*s*.82]),mt(n,new Pt(s*.07,10,8),Nt(14826331),[Math.sin(a)*s*.82,s*1,Math.cos(a)*s*.82])}mt(n,new Pt(s*.11,12,10),Nt(3902434),[0,s*.28,s*.93]);break}case"cap":{n.position.set(t.hatX||0,t.hatY-.04,t.hatZ);let r=Nt(14172207);mt(n,new Pt(s*1.02,28,16,0,Math.PI*2,0,Math.PI/2),r,[0,0,0],[0,0,0],[1,.95,1.05]),mt(n,new Tt(s*.62,s*.62,s*.07,24),r,[0,s*.03,s*.78],[0,0,0],[1.25,1,.85]),mt(n,new Pt(s*.1,10,8),Nt(16773840),[0,s*.98,0]);break}case"party":{n.position.set(t.hatX||0,t.hatY-.03,t.hatZ),n.rotation.z=-.12;let r=Nt(16743096);mt(n,new Vt(s*.72,s*1.7,24),r,[0,s*.85,0]);for(let o of[.4,.8,1.2])mt(n,new qi(s*.72*(1-o/1.7)+.01,s*.035,6,24),Nt(16769370),[0,s*o,0],[Math.PI/2,0,0]);mt(n,new Pt(s*.16,12,10),Nt(16777215),[0,s*1.75,0]);break}case"chef":{n.position.set(t.hatX||0,t.hatY-.03,t.hatZ);let r=Nt(16448250,{roughness:.8});mt(n,new Tt(s*.85,s*.8,s*.55,28),r,[0,s*.27,0]);for(let o=0;o<6;o++){let a=o/6*Math.PI*2;mt(n,new Pt(s*.45,14,12),r,[Math.sin(a)*s*.5,s*.78,Math.cos(a)*s*.5])}mt(n,new Pt(s*.5,14,12),r,[0,s*.95,0]);break}case"sprout":{n.position.set(t.hatX||0,t.hatY-.03,t.hatZ);let r=Nt(6274890);mt(n,new Tt(s*.04,s*.05,s*.5,8),r,[0,s*.25,0]),mt(n,new Pt(s*.3,14,10),r,[s*.3,s*.55,0],[0,0,-.5],[1.5,.5,.8]),mt(n,new Pt(s*.3,14,10),Nt(8313175),[-s*.3,s*.62,0],[0,0,.5],[1.5,.5,.8]);break}case"bow":{let r=Wl(t,s*.62,t.hatY-.06,.04);n.position.copy(r.p),n.quaternion.copy(r.q),n.rotateZ(-.35);let o=Nt(16736158);mt(n,new Vt(s*.34,s*.55,16),o,[s*.3,0,0],[0,0,Math.PI/2]),mt(n,new Vt(s*.34,s*.55,16),o,[-s*.3,0,0],[0,0,-Math.PI/2]),mt(n,new Pt(s*.14,12,10),Nt(16727430),[0,0,0]);break}case"round":case"sun":case"heart":{let r=t.eyeR*1.35,o=Nt(i==="heart"?16732050:i==="sun"?1381658:2302763,{roughness:.3,metalness:.2}),a=[];for(let g of[-1,1]){let _=new gt,m=Wl(t,g*t.eyeX,t.eyeY,.03);if(_.position.copy(m.p),_.quaternion.copy(m.q),n.add(_),i==="heart"){let d=k_(),S=new Do(d,{depth:.02,bevelEnabled:!0,bevelThickness:.012,bevelSize:.012,bevelSegments:2});mt(_,S,o,[0,.01,0],[0,0,0],[r*2.2,r*2.2,1]),mt(_,new No(d),Nt(16761564,{transparent:!0,opacity:.35}),[0,.01,.034],[0,0,0],[r*1.95,r*1.95,1])}else mt(_,new qi(r,r*.13,10,32),o),mt(_,new In(r*.98,28),i==="sun"?Nt(657936,{roughness:.1,metalness:.3}):Nt(12576511,{transparent:!0,opacity:.22,roughness:.1}),[0,0,.003]);mt(_,new Tt(r*.07,r*.07,.34,8),o,[g*r,0,-.17],[Math.PI/2,0,0]),a.push(new P(-g*r*.92,0,.01).applyQuaternion(m.q).add(m.p))}let[l,c]=a,h=l.clone().add(c).multiplyScalar(.5),f=l.distanceTo(c),u=t.z(0,h.y)+.016;h.z<u&&(h.z=u),mt(n,new Tt(r*.09,r*.09,f+.02,8),o,[h.x,h.y,h.z]).quaternion.setFromUnitVectors(new P(0,1,0),c.clone().sub(l).normalize());break}case"bowtie":{let r=Wl(t,0,t.neckY,.035);n.position.copy(r.p),n.quaternion.copy(r.q);let o=Nt(14100029);mt(n,new Vt(.12,.24,16),o,[.12,0,0],[0,0,Math.PI/2]),mt(n,new Vt(.12,.24,16),o,[-.12,0,0],[0,0,-Math.PI/2]),mt(n,new Pt(.06,12,10),Nt(11017005));break}case"bell":{let r=t.scarf;n.position.set(0,r.y,r.cz||0);let o=mt(n,new qi(1,r.tube*.45,10,40),Nt(12860219),[0,0,0],[Math.PI/2,0,0],[r.rx,r.rz,1]);mt(n,new Pt(.1,16,12),Nt(16106776,{metalness:.6,roughness:.25}),[0,-.06,r.rz+.04]),mt(n,new Tt(.115,.115,.012,16),Nt(12093706),[0,-.06,r.rz+.04],[Math.PI/2,0,0]);break}case"scarf":{let r=t.scarf;n.position.set(0,r.y,r.cz||0);let o=Nt(14697786,{roughness:.85});mt(n,new qi(1,r.tube,12,48),o,[0,0,0],[Math.PI/2,0,0],[r.rx,r.rz,1]),mt(n,new yn(.16,.5,.07),o,[r.rx*.35,-.25,r.rz+.02],[0,0,.12]),mt(n,new yn(.16,.4,.07),Nt(13185576,{roughness:.85}),[r.rx*.15,-.2,r.rz+.06],[0,0,-.1]);break}}return n}var Bt=(i,e={})=>new Kt({color:i,roughness:.9,...e}),Er=(i,e={})=>new Zt({color:i,...e}),At=(i,e,t=[0,0,0],n=[0,0,0],s=[1,1,1])=>{let r=new ot(i,e);return r.position.set(...t),r.rotation.set(...n),r.scale.set(...s),r},Yl=7,Ln=(i=0,e=1)=>(Yl=Yl*16807%2147483647,i+Yl/2147483647*(e-i)),Zl=(i,e=18)=>At(new In(e,56),Bt(i),[0,0,-1],[-Math.PI/2,0,0]),$i=(i,e,t,n)=>At(new Pt(i,18,14),Bt(e),t,[0,0,0],n);function Jl(i,e,t,n){let s=new gt,r=Er(16777215,{transparent:!0,opacity:.95});for(let[o,a,l]of[[0,0,.8],[.9,-.1,.65],[-.9,-.12,.6],[.35,.35,.6]])s.add(At(new Pt(l,14,10),r,[o,a,0],[0,0,0],[1.2,.8,.7]));return s.position.set(i,e,t),s.scale.setScalar(n),s}function Wo(i,e,t,n=3115605,s=!1){let r=new gt;r.position.set(i,0,e),r.scale.setScalar(t),r.add(At(new Tt(.12,.16,.6,8),Bt(8016432),[0,.3,0]));for(let o=0;o<3;o++){let a=.95-o*.25,l=.75+o*.55;r.add(At(new Vt(a,.9,12),Bt(n),[0,l,0])),s&&r.add(At(new Vt(a*.78,.45,12),Bt(16777215,{roughness:1}),[0,l+.25,0]))}return r}function Xo(i,e,t,n=5814348){let s=new gt;s.position.set(i,0,e),s.scale.setScalar(t),s.add(At(new Tt(.14,.2,1.3,8),Bt(9067056),[0,.65,0]));for(let[r,o,a,l]of[[0,1.7,0,.85],[.5,1.4,.1,.6],[-.5,1.45,-.1,.6],[0,2.2,0,.55]])s.add($i(l,n,[r,o,a]));return s}function Ou(){let i=new gt,e={},t={};{let n=new gt;n.visible=!1,n.userData.bg=12576511,n.add(Zl(8834920)),n.add(At(new In(2.6,40),Bt(10214520),[0,.004,.4],[-Math.PI/2,0,0]));for(let[l,c,h,f]of[[-9,-13,6,7323482],[7,-14,7,8178530],[0,-16,8,6928725]])n.add($i(1,f,[l,-h*.55,c],[h*1.6,h,h]));n.add(Xo(-2.5,-1.8,1.15)),n.add(Xo(2.9,-2.6,1.3,6471759)),n.add(Xo(-5,-5,1.5,5221962)),n.add(Xo(5.5,-6,1.5));let s=[16740241,16765286,16777215,13073919,16752453];for(let l=0;l<46;l++){let c=Ln(-7,7),h=Ln(-8,3);if(Math.abs(c)<2&&h>-1.2)continue;let f=new gt;f.position.set(c,0,h),f.add(At(new Tt(.015,.015,.3,5),Bt(5220426),[0,.15,0])),f.add(At(new Pt(.08,8,6),Bt(s[l%s.length]),[0,.32,0])),f.add(At(new Pt(.035,6,5),Bt(16769658),[0,.37,0])),n.add(f)}let r=At(new In(.9,32),Er(16774048),[3.6,6.4,-14]);n.add(r);let o=[Jl(-3,6,-12,1.3),Jl(2,7.2,-14,1.6),Jl(6,5.6,-13,1)];o.forEach(l=>n.add(l));let a=[];for(let l=0;l<3;l++){let c=new gt,h=[16744118,16765503,8246268][l];for(let f of[-1,1]){let u=At(new In(.14,10),Er(h,{side:qt}),[f*.1,0,0],[0,0,0],[1,1.2,1]);u.userData.s=f,c.add(u)}c.userData={cx:Ln(-2.4,2.4),cy:Ln(1.4,3.2),cz:Ln(-1,1),ph:Ln(0,6)},n.add(c),a.push(c)}t.park=(l,c)=>{o.forEach((h,f)=>{h.position.x+=c*(.18+f*.05),h.position.x>9&&(h.position.x=-9)}),a.forEach((h,f)=>{let u=h.userData,p=l*.7+u.ph;h.position.set(u.cx+Math.sin(p)*1.4,u.cy+Math.sin(p*1.7)*.35,u.cz+Math.cos(p*.8)*1.2),h.rotation.y=Math.cos(p)*.6,h.children.forEach(g=>{g.rotation.y=g.userData.s*(.2+Math.abs(Math.sin(l*14+f))*1.1)})})},e.park=n,i.add(n)}{let n=new gt;n.visible=!1,n.userData.bg=10477823,n.add(Zl(16047266));let s=At(new En(60,26),Bt(3520744,{roughness:.25,metalness:.1}),[0,.01,-18],[-Math.PI/2,0,0]);n.add(s);let r=[];for(let o=0;o<3;o++){let a=At(new En(40,.35),Er(16777215,{transparent:!0,opacity:.8}),[0,.03,-5.6-o*.1],[-Math.PI/2,0,0]);n.add(a),r.push(a)}n.add(At(new In(1,32),Er(16774048),[-3.4,6,-20],[0,0,0],[1.1,1.1,1]));{let o=new gt;o.position.set(-2.6,0,-2.2);for(let a=0;a<5;a++)o.add(At(new Tt(.13-a*.01,.15-a*.01,.7,8),Bt(10119996),[a*.1,.35+a*.66,0],[0,0,-.08]));for(let a=0;a<6;a++){let l=a/6*Math.PI*2,c=At(new Vt(.2,1.5,6),Bt(4170573),[.45+Math.cos(l)*.65,3.45,Math.sin(l)*.65],[Math.sin(l)*1.1,0,-Math.cos(l)*1.1-0]);o.add(c)}o.add($i(.16,8014368,[.45,3.3,.1])),n.add(o)}{let o=new gt;o.position.set(2.7,0,-2.8),o.add(At(new Tt(.04,.04,2.4,8),Bt(16777215),[0,1.2,0])),o.add(At(new Vt(1.2,.6,16,1,!0),Bt(16735581,{side:qt}),[0,2.5,0])),o.add(At(new Vt(1.2,.6,16,1,!0,0,Math.PI/2),Bt(16777215,{side:qt}),[0,2.505,0])),o.add(At(new yn(1.5,.08,.7),Bt(7259903),[-.2,.05,1.4])),n.add(o)}{let o=document.createElement("canvas");o.width=128,o.height=64;let a=o.getContext("2d");["#ff5d5d","#ffffff","#ffd23f","#ffffff","#4da3ff","#ffffff"].forEach((h,f)=>{a.fillStyle=h,a.fillRect(f*128/6,0,128/6+1,64)});let c=new Cn(o);c.colorSpace=Et,n.add(At(new Pt(.34,20,14),Bt(16777215,{map:c,roughness:.5}),[1.9,.34,1.7]))}for(let o=0;o<26;o++){let a=Ln(-7,7),l=Ln(-4.5,3);Math.abs(a)<1.8&&l>-1||n.add(At(new Pt(.09,8,6),Bt(o%2?16762070:16777215),[a,.05,l],[0,Ln(0,3),0],[1.3,.6,1]))}t.beach=o=>{r.forEach((a,l)=>{a.position.z=-5.6-l*.1+Math.sin(o*.9+l*1.3)*.45,a.material.opacity=.5+.3*Math.sin(o*.9+l*1.3)}),s.position.y=.01+Math.sin(o*1.2)*.01},e.beach=n,i.add(n)}{let n=new gt;n.visible=!1,n.userData.bg=14477814;{let l=Zl(16777215);l.material.emissive=new ct(7370108),n.add(l)}for(let[l,c,h]of[[-7,-16,5],[3,-18,7],[11,-15,5],[-1,-20,6]])n.add(At(new Vt(h,h*1.6,6),Bt(12375018),[l,h*.8-.3,c])),n.add(At(new Vt(h*.42,h*.7,6),Bt(16777215),[l,h*1.25-.3,c]));n.add(Wo(-2.5,-1.8,1.2,3115605,!0)),n.add(Wo(3,-2.8,1.4,2784590,!0)),n.add(Wo(-5,-5,1.6,3115605,!0)),n.add(Wo(5.8,-6,1.6,2784590,!0));{let l=new gt;l.position.set(2.1,0,-1.2);let c=Bt(16777215,{roughness:1});l.add($i(.55,16777215,[0,.55,0])),l.add($i(.4,16777215,[0,1.3,0])),l.add($i(.3,16777215,[0,1.8,0])),l.add(At(new Vt(.05,.25,8),Bt(16747050),[0,1.8,.32],[Math.PI/2,0,0]));for(let h of[-.1,.1])l.add($i(.035,1118481,[h,1.88,.27]));l.add(At(new Tt(.2,.2,.04,12),Bt(2236962),[0,2.08,0])),l.add(At(new Tt(.14,.14,.26,12),Bt(2236962),[0,2.2,0])),n.add(l)}let s=260,r=new Float32Array(s*3);for(let l=0;l<s;l++)r[l*3]=Ln(-6,6),r[l*3+1]=Ln(0,8),r[l*3+2]=Ln(-7,5);let o=new Dt;o.setAttribute("position",new bt(r,3));let a=new Ao(o,new ur({color:16777215,size:.11,sizeAttenuation:!0,transparent:!0,opacity:.95}));a.frustumCulled=!1,n.add(a),t.snow=(l,c)=>{let h=o.attributes.position;for(let f=0;f<s;f++){let u=h.getY(f)-c*(.7+f%5*.12);u<0&&(u=8),h.setY(f,u),h.setX(f,h.getX(f)+Math.sin(l+f)*c*.15)}h.needsUpdate=!0},e.snow=n,i.add(n)}return{root:i,scenes:e,update(n,s,r){let o=t[n];o&&o(s,r)}}}var Ki=(i,e,t)=>Math.max(e,Math.min(t,i)),wr=1;function Hn(i,e,t,n,s,r,o=[0,0,0]){let a=Math.max(10,Math.round(48*wr)),l=new Pt(1,a,Math.round(a*.75));return l.scale(i,e,t),o[0]&&l.rotateX(o[0]),o[1]&&l.rotateY(o[1]),o[2]&&l.rotateZ(o[2]),l.translate(n,s,r),l}function qo(i){let e=new Ds(i.map(t=>new Te(t[0],t[1])));return new pr(e.getPoints(Math.max(16,Math.round(60*wr))),Math.max(16,Math.round(64*wr)))}var $l=(i,e={})=>new Ci({color:i,roughness:.5,clearcoat:.25,clearcoatRoughness:.45,...e});function G_(i,e,t,n){let{x0:s,x1:r,y0:o,y1:a,sc:l}=t.region,c=Math.round((r-s)*l),h=Math.round((a-o)*l),f=document.createElement("canvas");f.width=c,f.height=h;let u=f.getContext("2d"),p=new Cn(f);p.colorSpace=Et,p.anisotropy=4;let g=44,_=36,m=[],d=[],S=[],x=[],y=[],U=[],R=g+1;for(let V=0;V<=_;V++)for(let le=0;le<=g;le++)U.push(e(s+(r-s)*le/g,o+(a-o)*V/_));let C=(V,le,W)=>{let j=U[Ki(le,0,_)*R+Ki(V,0,g)];return j??W},K=(r-s)/g,w=(a-o)/_;for(let V=0;V<=_;V++)for(let le=0;le<=g;le++){let W=s+K*le,j=o+w*V,me=U[V*R+le];if(me==null){m.push(W,j,0),d.push(0,0,1),S.push(le/g,V/_),y.push(0);continue}let ve=(C(le+1,V,me)-C(le-1,V,me))/(2*K),oe=(C(le,V+1,me)-C(le,V-1,me))/(2*w),Ae=Math.hypot(ve,oe,1),xe=-ve/Ae,Ce=-oe/Ae,De=1/Ae;m.push(W+xe*.016,j+Ce*.016,me+De*.016),d.push(xe,Ce,De),S.push(le/g,V/_),y.push(1)}for(let V=0;V<_;V++)for(let le=0;le<g;le++){let W=V*(g+1)+le,j=W+1,me=W+g+1,ve=me+1;y[W]&&y[j]&&y[me]&&y[ve]&&x.push(W,j,ve,W,ve,me)}let A=new Dt;A.setAttribute("position",new ht(m,3)),A.setAttribute("normal",new ht(d,3)),A.setAttribute("uv",new ht(S,2)),A.setIndex(x);let q=new Ci({map:p,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2,roughness:.5,clearcoat:.25,clearcoatRoughness:.45});q.onBeforeCompile=n;let re=new ot(A,q);re.frustumCulled=!1,re.renderOrder=2,i.add(re);let X=V=>(V-s)*l,L=V=>(a-V)*l,O=t.skin,k=t.eye,Y=t.mouth,Q=k.r/.145,J="";function ne(V){let le=[V.u,V.l,V.sl,V.arc,V.mo,V.sm,V.bl,V.lx,V.ly,V.pup||1].map(ve=>Math.round(ve*60)).join(",");if(le===J)return;if(J=le,u.clearRect(0,0,c,h),V.bl>.03)for(let ve of[-1,1]){let oe=X(ve*k.x*1.55),Ae=L(Y.y+.07),xe=.13*l,Ce=u.createRadialGradient(oe,Ae,0,oe,Ae,xe);Ce.addColorStop(0,"rgba(255,120,110,"+.45*Math.min(1,V.bl)+")"),Ce.addColorStop(1,"rgba(255,120,110,0)"),u.fillStyle=Ce,u.fillRect(oe-xe,Ae-xe,2*xe,2*xe)}for(let ve of[-1,1]){let oe=X(ve*k.x),Ae=L(k.y),xe=k.r*l,Ce=u.createRadialGradient(oe,Ae,xe*.2,oe,Ae,xe);Ce.addColorStop(0,t.iris[0]),Ce.addColorStop(.6,t.iris[1]),Ce.addColorStop(.9,t.iris[2]),Ce.addColorStop(1,t.iris[3]),u.fillStyle=Ce,u.beginPath(),u.arc(oe,Ae,xe,0,Math.PI*2),u.fill();let De=Ki(V.sl/.4,0,1);u.strokeStyle="rgba(70,90,40,"+(.5+.35*De)+")",u.lineWidth=1.8+2*De,u.stroke(),u.fillStyle="#070707",u.beginPath(),u.arc(oe+V.lx*.04*l*Q,Ae-V.ly*.035*l*Q,xe*.52*(V.pup||1),0,Math.PI*2),u.fill();let D=(ve<0?1:-1)*V.sl*.7,be=Ki((V.u-.1)/.9,0,1),ae=(de,se)=>{u.save(),u.translate(oe,Ae),u.rotate(D),u.beginPath(),u.rect(-xe*1.7,de,xe*3.4,se-de),u.clip(),u.fillStyle=O,"filter"in u&&(u.filter="blur(1.5px)"),u.beginPath(),u.arc(0,0,xe*1.14,0,Math.PI*2),u.fill(),u.restore()};if(be>.02){let de=-xe+2*xe*be;if(ae(-xe*1.7,de),be>.1||V.sl>.1){u.save(),u.translate(oe,Ae),u.rotate(D),u.strokeStyle="rgba(120,80,20,"+Math.max(.45*Math.min(1,be/.25),.9*De)+")",u.lineWidth=2+2*De,u.beginPath();let se=Math.sqrt(Math.max(0,(xe*1.12)**2-de*de));u.moveTo(-se,de),u.lineTo(se,de),u.stroke(),u.restore()}}V.l>.03&&ae(xe-2*xe*V.l,xe*1.7),Math.abs(V.arc)>.35&&V.u>.92&&(u.save(),u.strokeStyle="#4a3208",u.lineWidth=.024*l*Q,u.lineCap="round",u.beginPath(),V.arc>0?u.arc(oe,Ae+.045*l*Q,.1*l*Q,Math.PI*1.12,Math.PI*1.88):u.arc(oe,Ae-.05*l*Q,.1*l*Q,Math.PI*.12,Math.PI*.88),u.stroke(),u.restore())}let W=Ki(V.mo,0,1),j=Y.y,me=Y.hw;if(W>.05){let ve=(me*.9+me*.9*W)*(1+.15*Math.max(0,V.sm)),oe=.035*V.sm,Ae=.05+.2*W;u.fillStyle="#3c1510",u.beginPath(),u.moveTo(X(-ve),L(j+oe)),u.quadraticCurveTo(X(0),L(j-Ae*2),X(ve),L(j+oe)),u.quadraticCurveTo(X(0),L(j+.014),X(-ve),L(j+oe)),u.closePath(),u.fill(),W>.5&&(u.save(),u.clip(),u.fillStyle="#d8656c",u.beginPath(),u.ellipse(X(0),L(j-Ae*1.05),ve*.55*l,.05*l,0,0,Math.PI*2),u.fill(),u.restore()),u.strokeStyle="rgba(110,70,25,.8)",u.lineWidth=2,u.lineCap="round",u.beginPath(),u.moveTo(X(-ve),L(j+oe)),u.quadraticCurveTo(X(0),L(j+.014),X(ve),L(j+oe)),u.stroke()}else{let ve=V.sm,oe=Math.max(0,-ve);u.strokeStyle="#6b4515",u.lineWidth=2.6+.6*oe,u.lineCap="round",u.beginPath();for(let Ae=0;Ae<=20;Ae++){let xe=-me+2*me*Ae/20,Ce=(xe/me)**2,De=ve>=0?j-ve*.03*(1-Ce)+.004:j+oe*.04*(1-Ce);Ae?u.lineTo(X(xe),L(De)):u.moveTo(X(xe),L(De))}u.stroke()}p.needsUpdate=!0}return ne({u:.08,l:0,sl:0,arc:0,mo:0,sm:.5,bl:0,lx:0,ly:0}),ne}var V_=["#eef3cc","#d6e4a8","#b4cc85","#7d9a58"];function Yo(i){let e={uDent:{value:new yt(0,1,1,0)},uInfl:{value:0},uBelly:{value:0}},t=O=>{Object.assign(O.uniforms,e),O.vertexShader=O.vertexShader.replace("#include <common>",`#include <common>
uniform vec4 uDent;uniform float uInfl;uniform float uBelly;`).replace("#include <skinning_vertex>",`#include <skinning_vertex>
        vec3 dd=transformed-uDent.xyz;
        transformed-=objectNormal*(uDent.w*.3*exp(-dot(dd,dd)/.5));
        float by=transformed.y-${i.bellyY.toFixed(2)};
        transformed+=objectNormal*(uInfl+uBelly*exp(-by*by/.6)*smoothstep(-.2,.5,objectNormal.z));`)},n=new gt,s=new gt,r=new gt;s.position.y=i.cy,r.position.y=-i.cy,n.add(s),s.add(r);let o=$l(i.color);o.onBeforeCompile=t;let a={},l=[],c={skin:(O,k)=>{let Y=new ot(O,o);return Y.frustumCulled=!1,Y.userData.skin=!0,r.add(Y),l.push(Y),k&&(a[k]=Y),Y},skinAs:(O,k,Y)=>{let Q=$l(k);Q.onBeforeCompile=t;let J=new ot(O,Q);return J.frustumCulled=!1,J.userData.skin=!0,r.add(J),l.push(J),Y&&(a[Y]=J),J},extra:(O,k,Y,Q)=>{let J=new ot(O,$l(k));J.frustumCulled=!1;let ne=J;return Q&&(ne=new gt,ne.position.set(...Q),J.position.set(-Q[0],-Q[1],-Q[2]),ne.add(J)),r.add(ne),Y&&(a[Y]=ne),ne}};i.build(c),r.updateMatrixWorld(!0),n.updateMatrixWorld(!0),wr=i.proxyQ||.3;let h=[];i.build({skin:O=>(h.push(O),{}),skinAs:O=>(h.push(O),{}),extra:()=>({})}),wr=1;let f=h.map(O=>new ot(O,new Zt)),u=new Yn,p=new P,g=new P(0,0,-1),_=(O,k)=>{p.set(O,k,12),u.set(p,g);let Y=u.intersectObjects(f,!1)[0];return Y?Y.point.z:null},m=(O,k)=>_(O,k)??0,d=new Yn(new P(0,12,i.hatZ||0),new P(0,-1,0)),S=d.intersectObjects(f,!1)[0],x=S?S.point.y:i.top,y=S?S.point.z:0,U=O=>{let k=new Yn(new P(6,O,y*0+0),new P(-1,0,0)),Y=k.intersectObjects(f,!1)[0];return Y?Y.point.x:.5},R=U(x-.22),C=G_(r,_,{region:i.region,skin:i.color,eye:i.eye,mouth:i.mouth,iris:i.iris||V_},t),K=new Zt({visible:!1}),w=l.map(O=>{let k=new ot(O.geometry,K);return k.userData.region="body",r.add(k),k}),A=O=>O.y>i.headThr?"head":"belly",q={hatY:x-.03,hatZ:y,hatR:Ki(R*.78,.24,.42),eyeY:i.eye.y,eyeX:i.eye.x,eyeR:i.eye.r,neckY:i.neckY,z:m,scarf:{y:i.neckY-.12,rx:U(i.neckY-.12)+.025,rz:(i.scarfRz||U(i.neckY-.12))+.025,cz:i.scarfCz||0,tube:.085},...i.fit||{}},re=O=>{let k=performance.now()/1e3,Y=O.sit||0;s.rotation.set(O.lean*.9+O.nod*.32+Y*.1,O.yaw*.75,O.roll*.9+Math.sin(k*1.5)*i.rock+(O.hip||0)*.1+(i.tilt||0),"YXZ"),s.position.y=i.cy+(i.float||0)+Math.sin(k*1.6)*(i.bob||0),r.scale.y=1-.05*Y,i.anim&&i.anim(k,O,a,{pivot:s,inner:r})},X=i.anchors,L={head:[r,X.head],mouth:[r,[0,i.mouth.y,X.mouthZ]],belly:[r,X.belly],feet:[n,[0,.1,.4]],top:[r,[0,x+.3,.1]]};return{group:n,uniforms:e,colliders:w,regionOf:A,pose:re,paint:C,anchors:L,wearFrame:r,fit:q,hipY:i.cy,parts:a}}function W_(){return Yo({color:"#f8d84e",cy:1.55,rock:.025,tilt:.3,float:.22,bob:.07,headThr:2.3,bellyY:1.6,top:3.2,neckY:2.2,eye:{x:.3,y:2.82,r:.14},mouth:{y:2.54,hw:.13},region:{x0:-.8,x1:.8,y0:2.15,y1:3.15,sc:380},anchors:{head:[0,2.9,.6],belly:[0,1.4,1],mouthZ:.9},build(i){i.skin(qo([[0,0],[.45,.03],[.85,.3],[1.05,.8],[1.1,1.3],[1,1.8],[.82,2.15],[.7,2.4],[.76,2.65],[.78,2.85],[.62,3.05],[.3,3.2],[0,3.24]]),"body"),i.skinAs(Hn(.62,.95,.4,0,1.35,.78),"#fbe9b8","belly"),i.extra(Hn(.2,.62,.34,-1.12,1.4,.12,[0,0,.6]),"#f3cf3f","flipL",[-1,1.85,.12]),i.extra(Hn(.2,.62,.34,1.12,1.4,.12,[0,0,-.6]),"#f3cf3f","flipR",[1,1.85,.12]),i.extra(Hn(.5,.1,.3,-.34,.2,-.8,[0,.3,0]),"#f3cf3f","tailL"),i.extra(Hn(.5,.1,.3,.34,.2,-.8,[0,-.3,0]),"#f3cf3f","tailR")},anim(i,e,t){let n=Math.sin(i*2.2)*.14+(e.ha||0)*.2;t.flipL&&(t.flipL.rotation.z=n),t.flipR&&(t.flipR.rotation.z=-n)}})}function X_(){return Yo({color:"#f8d96a",cy:1.1,rock:.025,headThr:1.4,bellyY:.9,top:2.4,neckY:1.3,eye:{x:.37,y:1.8,r:.17},mouth:{y:1.52,hw:.15},region:{x0:-.85,x1:.85,y0:1.2,y1:2.2,sc:380},anchors:{head:[0,1.9,.8],belly:[0,.9,1.2],mouthZ:1.1},build(i){i.skin(qo([[0,0],[.7,.02],[1.15,.2],[1.27,.6],[1.2,1.05],[1.08,1.45],[1.03,1.75],[.95,2.05],[.72,2.28],[.4,2.38],[0,2.4]]),"body"),i.extra(new Vt(.34,.7,4).rotateY(Math.PI/4).translate(-.66,2.45,0),"#f6d24a","earL",[-.66,2.1,0]),i.extra(new Vt(.34,.7,4).rotateY(Math.PI/4).translate(.66,2.45,0),"#f6d24a","earR",[.66,2.1,0]);for(let e of[-1,1]){i.extra(Hn(.34,.2,.36,e*.56,.17,1.06),"#f8d96a","paw"+e);for(let t of[-.14,0,.14])i.extra(Hn(.095,.08,.1,e*.56+t,.15,1.38),"#f6cf3a")}i.extra(new xr(new Us([new P(.7,.4,-.95),new P(1.2,.5,-1),new P(1.45,1,-.8),new P(1.38,1.5,-.6)]),30,.12,10),"#f8d96a","tail")},anim(i,e,t){t.tail&&(t.tail.rotation.y=Math.sin(i*1.8)*.18);let n=Math.max(0,Math.sin(i*.9))>.97?.25:0;t.earL&&(t.earL.rotation.z=.25+n),t.earR&&(t.earR.rotation.z=-.25-n)}})}function q_(){let i=(e,t,n)=>{let s=Ki((n-e)/(t-e),0,1);return s*s*(3-2*s)};return Yo({color:"#f3cd44",cy:1.45,rock:.03,headThr:2,bellyY:1.3,top:3,neckY:1.95,eye:{x:.33,y:2.38,r:.165},mouth:{y:2.08,hw:.12},region:{x0:-.8,x1:.8,y0:1.8,y1:2.8,sc:380},anchors:{head:[0,2.5,.7],belly:[0,1.3,1.1],mouthZ:.9},build(e){e.skin(qo([[0,0],[.78,.02],[1.1,.3],[1.2,.8],[1.17,1.3],[1.05,1.75],[.88,2.05],[.78,2.28],[.78,2.52],[.7,2.76],[.52,2.93],[.26,3.01],[0,3.04]]),"body");for(let t of[-1,1])e.extra(new Tt(.7,.7,.1,44).rotateX(Math.PI/2).translate(t*.92,2.78,-.1),"#f3cd44","ear"+t,[t*.92,2.78,-.1]),e.extra(new Tt(.54,.54,.07,44).rotateX(Math.PI/2).translate(t*.92,2.78,-.04),"#f4a45a","earIn"+t,[t*.92,2.78,-.1]);e.extra(Hn(.17,.46,.2,1.1,1.45,.4,[0,0,-.22]),"#f3cd44","armR",[1.04,1.85,.4]),e.extra(Hn(.17,.46,.2,-1.1,1.45,.4,[0,0,.22]),"#f3cd44","armL",[-1.04,1.85,.4]);for(let t of[-1,1])e.extra(Hn(.36,.2,.46,t*.46,.17,.45),"#f3cd44");e.extra(new xr(new Us([new P(.35,.4,-.95),new P(.9,.2,-1.25),new P(1.5,.3,-1),new P(1.75,.8,-.7),new P(1.55,1.2,-.5)]),40,.045,8),"#f3cd44","tail",[.35,.4,-.95])},anim(e,t,n,s){let r=Math.sin(e*.55)*Math.max(0,Math.sin(e*.19+1))*.5;s.pivot.rotation.y+=r,s.pivot.rotation.z+=r*.05;let o=e%8,a=i(0,.35,o)*(1-i(2.2,2.6,o));n.armL&&(n.armL.rotation.z=a*(-2.25+Math.sin(e*9)*.3)+(1-a)*(Math.sin(e*1.3)*.03)),n.armR&&(n.armR.rotation.z=Math.sin(e*1.3+1)*.03+(t.ha||0)*.2),n.tail&&(n.tail.rotation.y=Math.sin(e*1.7)*.22,n.tail.rotation.z=Math.sin(e*1.1)*.06);for(let l of[-1,1]){let c=Math.max(0,Math.sin(e*.8+l*1.7))>.96?.28:0,h=l*(.35+Math.sin(e*1.1+l)*.04+c),f=n["ear"+l],u=n["earIn"+l];f&&(f.rotation.y=h),u&&(u.rotation.y=h)}}})}function Y_(){return Yo({proxyQ:.6,color:"#f3b43c",cy:1.3,rock:.035,headThr:1.7,bellyY:.9,top:2.9,neckY:1.5,eye:{x:.26,y:2.08,r:.12},mouth:{y:1.86,hw:.11},region:{x0:-.62,x1:.62,y0:1.74,y1:2.32,sc:520},anchors:{head:[0,2.05,.7],belly:[0,.8,1.2],mouthZ:.8},fit:{hatX:-.28,hatY:2.94,hatR:.3,hatZ:0},build(i){i.skin(qo([[0,0],[.9,0],[1.28,.18],[1.4,.5],[1.26,.82],[.95,.96],[.98,1.08],[1.06,1.3],[1,1.56],[.74,1.7],[.76,1.84],[.82,2.04],[.76,2.28],[.55,2.44],[.34,2.5],[0,2.58]]),"body");for(let e=0;e<=9;e++){let t=e/9,n=.34-.27*t,s=-.02-.36*t*t-.02*t,r=2.58+.62*t;i.skin(Hn(n,n*1.05,n*.95,s,r,0,[0,0,.35*t]),"tip"+e)}},anim(i,e,t,n){let s=1+(e.ha||0)*3;n.inner.scale.x=1+Math.sin(i*2.6)*.014*s,n.inner.scale.z=1+Math.sin(i*2.6+.8)*.014*s}})}function Fu(i){return{fish:W_,cat:X_,mouse:q_,poop:Y_}[i]()}function Z_(){let i=M=>document.querySelector(M),e=(M,E,te)=>Math.max(E,Math.min(te,M)),t=(M,E,te)=>M+(E-M)*te,n=(M,E,te)=>{let ge=e((te-M)/(E-M),0,1);return ge*ge*(3-2*ge)},s=(M,E)=>M+Math.random()*(E-M),r=M=>M[Math.floor(Math.random()*M.length)],o=()=>performance.now(),a=i("#stage"),l=new lr({antialias:!0});l.setPixelRatio(Math.min(devicePixelRatio||1,2)),l.outputColorSpace=Et,l.toneMapping=Nl,l.toneMappingExposure=1.15,a.prepend(l.domElement);let c=new wo;c.background=new ct(16767392);let h=new on(34,9/16,.1,60);h.position.set(0,2.5,11);let f=new P(0,1.45,0);h.lookAt(f);let u=540,p=960;function g(){let M=Math.min(innerWidth/540,innerHeight/960);u=Math.floor(540*M),p=Math.floor(960*M),a.style.width=u+"px",a.style.height=p+"px",l.setSize(u,p),h.aspect=u/p,h.updateProjectionMatrix(),document.documentElement.style.setProperty("--u",M+"px")}addEventListener("resize",g),g();let _=new Oo(16773590,13146714,1);c.add(_);let m=new Bs(16777215,2.3);m.position.set(3,6,7),c.add(m);let d=new Bs(16769200,.7);d.position.set(-5,2,5),c.add(d);let S=new Bs(16773312,1.1);S.position.set(0,4,-6),c.add(S);function x(M,E,te){let ge=document.createElement("canvas");ge.width=M,ge.height=E,te(ge.getContext("2d"),M,E);let Ne=new Cn(ge);return Ne.colorSpace=Et,Ne.anisotropy=4,Ne}let y=-2.6,U=x(512,512,(M,E,te)=>{M.fillStyle="#ffe0a8",M.fillRect(0,0,E,te),M.fillStyle="rgba(255,255,255,.4)";for(let ge=0;ge<te;ge+=64)for(let Ne=ge/64%2*32;Ne<E;Ne+=64)M.beginPath(),M.arc(Ne+16,ge+16,6,0,7),M.fill()});U.wrapS=U.wrapT=Cs,U.repeat.set(2,1.4);let R=new ot(new En(14,9),new Kt({map:U,roughness:1}));R.position.set(0,4.2,y),c.add(R);let C=x(512,512,(M,E,te)=>{M.fillStyle="#dca15f",M.fillRect(0,0,E,te);for(let ge=0;ge<8;ge++){M.fillStyle=ge%2?"#d3964f":"#e2aa69",M.fillRect(0,ge*64,E,64),M.fillStyle="rgba(90,50,20,.35)",M.fillRect(0,ge*64,E,3);for(let Ne=0;Ne<3;Ne++)M.fillRect((ge*173+Ne*211)%512,ge*64,3,64)}});C.wrapS=C.wrapT=Cs,C.repeat.set(2,3);let K=new ot(new En(14,16),new Kt({map:C,roughness:.8}));K.rotation.x=-Math.PI/2,K.position.set(0,0,y+8),c.add(K);let w=new ot(new yn(14,.35,.12),new Kt({color:12154686,roughness:.8}));w.position.set(0,.17,y+.06),c.add(w);let A=x(256,256,(M,E,te)=>{M.fillStyle="#f08a8a",M.beginPath(),M.arc(128,128,126,0,7),M.fill(),M.fillStyle="#ffd0c8",M.beginPath(),M.arc(128,128,100,0,7),M.fill(),M.strokeStyle="#f08a8a",M.lineWidth=8,M.beginPath(),M.arc(128,128,70,0,7),M.stroke()}),q=new ot(new In(2.1,48),new Kt({map:A,roughness:1}));q.rotation.x=-Math.PI/2,q.position.set(0,.012,.1),q.scale.set(1,1,1),c.add(q);function re(M){return x(256,300,(E,te,ge)=>{let Ne=E.createLinearGradient(0,0,0,ge);if(M?(Ne.addColorStop(0,"#12163a"),Ne.addColorStop(1,"#2d3470")):(Ne.addColorStop(0,"#7fd0ff"),Ne.addColorStop(1,"#d4f0ff")),E.fillStyle=Ne,E.fillRect(0,0,te,ge),M){E.fillStyle="#fff7c2",E.beginPath(),E.arc(170,80,34,0,7),E.fill(),E.fillStyle="#2a2f66",E.beginPath(),E.arc(184,70,32,0,7),E.fill(),E.fillStyle="#fff";for(let Xe=0;Xe<14;Xe++)E.fillRect(Xe*83%250,Xe*47%200+10,3,3)}else{E.fillStyle="#ffe45c",E.beginPath(),E.arc(180,70,32,0,7),E.fill(),E.fillStyle="#fff";for(let[Xe,je,pt]of[[60,90,26],[90,80,32],[120,92,22]])E.beginPath(),E.arc(Xe,je,pt,0,7),E.fill();E.fillStyle="#7cc35a",E.beginPath(),E.ellipse(60,300,170,90,0,0,7),E.fill()}E.fillStyle="#fff6e0",E.fillRect(te/2-5,0,10,ge),E.fillRect(0,ge/2-5,te,10)})}let X=new ot(new yn(1.5,1.75,.1),new Kt({color:16774880}));X.position.set(-1.15,4.1,y+.05),c.add(X);let L=new ot(new En(1.3,1.55),new Zt({map:re(!1),transparent:!0}));L.position.set(-1.15,4.1,y+.11),c.add(L);let O=new ot(new En(1.3,1.55),new Zt({map:re(!0),transparent:!0,opacity:0}));O.position.set(-1.15,4.1,y+.12),c.add(O);let k=new gt;k.position.set(1.1,4.2,y+.08),c.add(k),k.add(new ot(new yn(1.3,1.3,.1),new Kt({color:9065776,roughness:.7}))),new Fs().load(window.ASSETS.logo,M=>{M.colorSpace=Et;let E=new ot(new En(1.12,1.12),new Zt({map:M}));E.position.z=.06,k.add(E)});let Y=new gt;Y.position.set(1.55,0,-1.3),c.add(Y);let Q=[];{let M=new Kt({color:9065776,roughness:.7}),E=new ot(new Tt(.28,.32,.1,20),M);E.position.y=.05,Y.add(E);let te=new ot(new Tt(.05,.05,1.7,10),M);te.position.y=.9,Y.add(te);let ge=new Kt({color:16769914,emissive:16763989,emissiveIntensity:.9,roughness:.8,side:qt});Q.push(ge);let Ne=new ot(new Tt(.28,.5,.62,24,1,!0),ge);Ne.position.y=1.95,Y.add(Ne),Y.traverse(Xe=>{Xe.isMesh&&(Xe.userData.region="lamp")})}let J=new Bo(16767370,6,9,1.6);J.position.set(1.55,1.9,-1.1),c.add(J);let ne=x(128,128,(M,E,te)=>{let ge=M.createRadialGradient(64,64,0,64,64,64);ge.addColorStop(0,"rgba(60,30,5,.55)"),ge.addColorStop(1,"rgba(60,30,5,0)"),M.fillStyle=ge,M.fillRect(0,0,E,te)}),V=new ot(new En(1,1),new Zt({map:ne,transparent:!0,depthWrite:!1}));V.rotation.x=-Math.PI/2,V.position.y=.02,c.add(V);let le=[R,K,w,q,X,L,O,k,Y,J],W=Ou();c.add(W.root);let j=wu();c.add(j.group),j.anchors={head:[j.face,[0,3,.4]],mouth:[j.face,[0,2.73,.5]],belly:[j.body,[0,1.4,.9]],feet:[j.group,[0,.1,.4]],top:[j.face,[0,3.35,.1]]};let me=Du();c.add(me.group),me.group.visible=!1,j.wearFrame=j.face,me.wearFrame=me.anchors.head[0],Sr.frog.z=j.faceZ,Sr.egg.z=Uu;let ve={};for(let M of["fish","cat","mouse","poop"]){let E=Fu(M);E.group.visible=!1,c.add(E.group),ve[M]=E,Sr[M]=E.fit}let oe={frog:j,egg:me,...ve},Ae={frog:{icon:"\u{1F438}",name:"\u5976\u86D9"},egg:{icon:"\u{1F95A}",name:"\u5976\u86CB"},fish:{icon:"\u{1F41F}",name:"\u5976\u9C7C",line:"\u5495\u565C\u565C\uFF5E",voice:"blub",pitch:1},cat:{icon:"\u{1F431}",name:"\u5976\u732B",line:"\u55B5\uFF5E",voice:"meow",pitch:1.18},mouse:{icon:"\u{1F42D}",name:"\u5976\u9F20",line:"\u5976\u9F20\u5976\u9F20\uFF01",voice:"squeak",clip:"mouse",pitch:1},poop:{icon:"\u{1F4A9}",name:"\u5976\u5C4E",line:"\u5657\u5657\uFF5E",voice:"poot",pitch:.85}},xe="frog",Ce=j,De=j.group,D=j.uniforms,be=j.colliders,ae=[-.1,.55,-.15,.05],de=M=>Object.assign({u:.08,l:0,sl:0,ew:1,mo:0,sm:.55,tg:0,te:0,bl:0,nod:0,lean:0,tilt:0,sit:0,puff:0,hip:0,shake:0,fing:.35,arc:0,ha:0,lx:0,ly:0,ar:ae,al:ae,pup:1,eyeY:0},M),se=[-.8,-.25,-.4,-.5],qe={idle:de({}),happy:de({u:.15,l:.35,sm:1,mo:.35,te:.4,bl:.45,ar:[-.1,1.3,-.2,0],al:[-.1,1.3,-.2,0],fing:0,nod:-.12}),laugh:de({u:1,l:.45,arc:1,sm:1,mo:1,te:1,tg:.7,bl:.3,lean:-.1,nod:-.3,tilt:.04,ha:1,ar:se,al:se,fing:.7}),love:de({u:1,l:.4,arc:1,sm:1,mo:.4,tg:1,bl:.85,tilt:.3,nod:.05,ar:[-.9,-.3,-.5,-.6],al:[-.9,-.3,-.5,-.6],fing:.5}),angry:de({u:.28,sl:.58,sm:-1,mo:0,bl:.12,puff:.04,pup:1.1,lx:0,ly:-.1,ar:[.12,.18,-.1,0],al:[.12,.18,-.1,0],fing:1,nod:.14,lean:.05,shake:.18}),surprise:de({u:-.05,ew:1.18,pup:.7,sm:0,mo:.5,nod:-.2,lean:-.1,ar:[-.1,.9,-.3,0],al:[-.1,.9,-.3,0],fing:0}),confused:de({u:.2,sl:-.5,sm:-.4,mo:.1,tilt:.25,nod:-.05,lx:.8,ar:[-.9,-.1,-1.8,-.3],al:ae,fing:.2}),sad:de({u:.3,sl:-.6,sm:-.9,mo:.1,nod:.25,lean:.12,sit:1,ly:-.3,ar:se,al:se,pup:1.1,fing:.5}),sleep:de({u:1,l:.3,arc:-1,sm:.7,nod:.4,lean:.15,sit:1,ar:se,al:se}),eat:de({u:.15,sm:.8,mo:.1,bl:.35,lean:.1,ar:se,al:se}),yum:de({u:1,l:.5,arc:1,sm:1,mo:.4,tg:1,bl:.6,ar:[-.3,.1,-1.2,-.5],al:[-.3,.1,-1.2,-.5]}),talk:de({u:.1,sm:.7,bl:.2,ar:[-.2,.5,-.8,0],al:[-.2,.5,-.8,0]}),listen:de({ew:1.12,sm:.3,tilt:.2,nod:-.05,ar:ae}),play:de({u:.4,l:.3,sm:1,mo:.7,te:.5,bl:.5,ar:[-.1,1.4,-.1,0],al:[-.1,1.4,-.1,0],fing:0})},he={},T=Object.keys(qe.idle).filter(M=>M!=="ar"&&M!=="al");for(let M of T)he[M]=qe.idle[M];he.ar=[...ae],he.al=[...ae],he.lx=0,he.ly=0;let b={mo:24,tg:14,te:14,u:16,l:16,sl:14,ew:14,shake:8,arc:14,ha:6},Z="idle",ye=0,ue={mo:null};function ie(M,E=0){Z=M,ye=E?o()+E:0}let G=null;function Ie(){return G?G.sleeping?"sleep":G.hunger<25?"sad":G.joy<25?"angry":"idle":"idle"}function Be(){return ye&&o()<ye?Z:Ie()}let Fe={sq:{v:0,d:0},nod:{v:0,d:0},yaw:{v:0,d:0},lean:{v:0,d:0},roll:{v:0,d:0},dent:{v:0,d:0}};function et(M,E,te,ge,Ne){M.d+=((E-M.v)*te-M.d*ge)*Ne,M.v+=M.d*Ne}let fe={y:0,vy:0};function tt(M=7.5){fe.y>.02||(fe.vy=M,Fe.sq.v=-.45,Fe.sq.d=0,Je("jump"))}function Ze(M,E){Fe[M].d+=E}let We=new P(0,1.5,.8),Qe=new P,ke=0,Ge={x:0,y:0,wx:0,wy:0,wT:0},dt=s(2,4),Mt=0,rt="naiwa3d-save-v1";G={hunger:70,joy:70,energy:80,coins:20,xp:0,sleeping:!1,last:Date.now()};try{let M=JSON.parse(localStorage.getItem(rt));if(M){Object.assign(G,M);let E=Math.min((Date.now()-G.last)/6e4,600);G.hunger=e(G.hunger-E*.12,15,100),G.joy=e(G.joy-E*.08,15,100),G.energy=e(G.energy+(G.sleeping?E*.5:-E*.05),10,100)}}catch{}G.own=Array.isArray(G.own)?G.own:[],G.wear=G.wear||{};for(let M in oe)G.wear[M]=G.wear[M]||{};G.best=G.best||0;let Re=()=>{G.last=Date.now();try{localStorage.setItem(rt,JSON.stringify(G))}catch{}};setInterval(Re,5e3),addEventListener("pagehide",Re);let z=()=>1+Math.floor(G.xp/60);function Ue(M){let E=z();G.xp+=M,z()>E&&(G.coins+=10,$("\u5347\u7EA7\u5566 Lv."+z()+"\uFF01\u5956\u52B1 10 \u91D1\u5E01",2600),pe("\u2B50",26,"head"),Je("level"),setTimeout(Pe,600))}let _e=null,$e=!1,Ye=null;function at(){if(_e){_e.state==="suspended"&&_e.resume();return}try{_e=new(window.AudioContext||window.webkitAudioContext),Ye=_e.createGain(),Ye.gain.value=.5,Ye.connect(_e.destination),tn()}catch{}}function ee(M,E,te="sine",ge=.3,Ne=0,Xe=0){if(!_e||$e)return;let je=_e.currentTime+Xe,pt=_e.createOscillator(),Ot=_e.createGain();pt.type=te,pt.frequency.setValueAtTime(M,je),Ne&&pt.frequency.exponentialRampToValueAtTime(Math.max(30,M+Ne),je+E),Ot.gain.setValueAtTime(ge,je),Ot.gain.exponentialRampToValueAtTime(.001,je+E),pt.connect(Ot),Ot.connect(Ye),pt.start(je),pt.stop(je+E+.02)}function It(M,E=.3){if(!_e||$e)return;let te=_e.sampleRate*M,ge=_e.createBuffer(1,te,_e.sampleRate),Ne=ge.getChannelData(0);for(let Ot=0;Ot<te;Ot++)Ne[Ot]=(Math.random()*2-1)*(1-Ot/te);let Xe=_e.createBufferSource(),je=_e.createGain(),pt=_e.createBiquadFilter();pt.type="lowpass",pt.frequency.value=1800,Xe.buffer=ge,je.gain.value=E,Xe.connect(pt),pt.connect(je),je.connect(Ye),Xe.start()}function Je(M){switch(M){case"tap":ee(520,.08,"triangle",.25,300);break;case"poke":ee(700,.1,"square",.12,-300),ee(300,.15,"sine",.25,300,.02);break;case"giggle":for(let E=0;E<5;E++)ee(520+E%2*160+E*20,.09,"triangle",.28,60,E*.09);break;case"love":ee(660,.15,"sine",.25,200),ee(880,.2,"sine",.25,200,.12);break;case"chomp":It(.09,.5),ee(180,.08,"square",.12,-60);break;case"yum":ee(500,.12,"triangle",.3,300),ee(750,.12,"triangle",.3,300,.12),ee(1e3,.2,"triangle",.3,200,.24);break;case"angry":ee(180,.25,"sawtooth",.25,-70),ee(150,.25,"sawtooth",.25,-60,.2);break;case"no":ee(220,.15,"square",.18,-60),ee(190,.2,"square",.18,-60,.16);break;case"coin":ee(988,.07,"square",.12),ee(1319,.25,"square",.12,0,.07);break;case"level":[523,659,784,1047].forEach((E,te)=>ee(E,.2,"triangle",.3,0,te*.1));break;case"yawn":ee(420,.7,"sine",.2,-250);break;case"jump":ee(300,.25,"triangle",.25,500);break;case"gulp":ee(200,.12,"sine",.35,-80);break;case"meow":ee(820,.12,"triangle",.3,250),ee(1050,.32,"triangle",.28,-520,.1);break;case"squeak":ee(1900,.07,"square",.1,700),ee(2200,.07,"square",.1,500,.09);break;case"blub":for(let E=0;E<3;E++)ee(260+E*70,.1,"sine",.32,260,E*.11);break;case"poot":ee(160,.22,"sawtooth",.22,-70),It(.12,.25);break}}let ze={buf:{},cur:null,flip:!1,n:0};function kt(M){let E=atob(M.split(",")[1]),te=new Uint8Array(E.length);for(let ge=0;ge<E.length;ge++)te[ge]=E.charCodeAt(ge);return te.buffer}function tn(){if(ze.loading||!_e)return;ze.loading=!0;let M=window.ASSETS.sfx||{};for(let E in M)_e.decodeAudioData(kt(M[E])).then(te=>{ze.buf[E]=te}).catch(()=>{})}function kn(){if(ze.cur){let M=ze.cur;ze.cur=null,M.s.onended=null;try{M.s.stop()}catch{}}}function Lt(M,E=1,te=1.5,ge=null){if(!_e||$e||!ze.buf[M])return 0;kn();let Ne=_e.createBufferSource(),Xe=_e.createGain(),je=_e.createAnalyser();je.fftSize=512,Ne.buffer=ze.buf[M],Ne.playbackRate.value=E,Xe.gain.value=te,Ne.connect(je),je.connect(Xe),Xe.connect(Ye);let pt=ze.cur={k:M,s:Ne,an:je,lv:0,chain:ge};return Ne.onended=()=>{ze.cur===pt&&(ze.cur=null,pt.chain==="sig"&&Ke())},Ne.start(),ze.buf[M].duration/E}function St(){if(ze.cur)return;ze.n++,ze.flip=!ze.flip;let M=Lt(ze.flip?"laugh1":"laugh2",s(.97,1.04)*(Ae[xe].pitch||1),1.5,ze.n%3===0?"sig":null);if(!M){Je("giggle");return}ie("laugh",M*1e3+120)}function Zn(M="",E=!1){let te=Lt("catch",1,1.6);if(!te){$("\u560E\u560E\u63D0\u62C9\u867E\uFF01"+M,2200);return}E||ie("talk",te*1e3+250),$("\u560E\u560E\u63D0\u62C9\u867E\uFF01"+M,te*1e3+900),Ze("nod",-4),Ze("sq",4),tt(6),pe("\u2728",6,"head")}let Un=0;function H(M=!1){Un=o();let E=Lt("andy",1,1.6);F={t:"\u5B89~\u8FEA\uFF01",until:o()+(E?E*1e3+900:1600)},v.textContent="\u5B89~\u8FEA\uFF01",E&&(M||ie("happy",E*1e3+250),Ze("sq",3),Ze("roll",o()%2?4:-4),pe("\u2728",5,"head"))}function we(M=!1){Un=o();let E=Ae[xe];E.clip&&ze.buf[E.clip]?Lt(E.clip,1,1.6):Je(E.voice),F={t:E.line,until:o()+1700},v.textContent=E.line,M||ie("happy",900),Ze("sq",3),Ze("roll",o()%2?4:-4),pe("\u2728",4,"head")}function Pe(){return ze.cur||!ze.buf.ola?!1:(Lt("ola",(Ae[xe].pitch||1)*s(.97,1.03),1.5),!0)}function Ke(M="",E=!1){xe==="frog"?Zn(M,E):xe==="egg"?H(E):we(E)}function He(){return xe==="frog"?!!ze.buf.catch:xe==="egg"?!!ze.buf.andy:!0}i("#mute").onclick=()=>{at(),$e=!$e,$e&&kn(),i("#mute").textContent=$e?"\u{1F507}":"\u{1F50A}"};let v=i("#bubble"),I=i("#toast"),N=i("#tray"),F=null,B=0;function $(M,E=2200){if(xe!=="frog"){let te=/哈哈|嘻嘻|咯咯|好痒/.test(M);xe==="egg"?(M=te?"\u54C8\u54C8\u54C8\uFF01":"\u5B89~\u8FEA\uFF01",!te&&!ze.cur&&o()-Un>1400&&H(!0)):(M=te?"\u54C8\u54C8\u54C8\uFF01":Ae[xe].line,!te&&!ze.cur&&o()-Un>1400&&we(!0))}F={t:M,until:o()+E},v.textContent=M}function Se(M,E=2200){I.textContent=M,I.style.display="block",B=o()+E}let Ee=new P;function Me(M){return Ee.copy(M).project(h),{x:(Ee.x*.5+.5)*u,y:(-Ee.y*.5+.5)*p}}function ce(M){let E=Ce.anchors[M]||[De,[0,1.5,.5]];return Qe.set(...E[1]),E[0].localToWorld(Qe),Me(Qe)}function pe(M,E,te="head",ge=1){let Ne=typeof te=="string"?ce(te):te;for(let Xe=0;Xe<E;Xe++){let je=document.createElement("div");je.className="fx",je.textContent=M,a.appendChild(je);let pt=u/540,Ot=s(-120,120)*pt*ge,is=-s(80,230)*pt*ge,fi=s(.7,1.3);je.style.left=Ne.x+s(-20,20)*pt+"px",je.style.top=Ne.y+"px";let di=je.animate([{transform:`translate(-50%,-50%) scale(${fi*.4})`,opacity:0},{transform:`translate(calc(-50% + ${Ot*.5}px),calc(-50% + ${is*.6}px)) scale(${fi})`,opacity:1,offset:.25},{transform:`translate(calc(-50% + ${Ot}px),calc(-50% + ${is}px)) scale(${fi*.9})`,opacity:0}],{duration:s(900,1500),easing:"ease-out",delay:Xe*40});di.onfinish=()=>je.remove()}}let Le=new Yn,nt=new Te;function Rt(M){let E=l.domElement.getBoundingClientRect();return nt.set((M.clientX-E.left)/E.width*2-1,-((M.clientY-E.top)/E.height)*2+1),{px:M.clientX-E.left,py:M.clientY-E.top}}function xt(){Le.setFromCamera(nt,h);let M=Le.intersectObjects(Ut?[...be]:[...be,...Y.children],!1)[0];if(!M)return null;let E=M.object.userData.region,te=De.worldToLocal(M.point.clone());return Ce.regionOf?E=Ce.regionOf(te):E==="belly"&&te.y>1.95&&(E="body"),{region:E,local:te,point:M.point}}let _t=null,ut=0,it=0,vn=0,wt=0,an=!1,ln=l.domElement;ln.addEventListener("pointerdown",M=>{if(M.preventDefault(),at(),Ve)if(Ve.end)Cr();else return;ln.setPointerCapture(M.pointerId),Rt(M);let E=xt();if(E){if(E.region==="lamp"){Je("tap"),ji();return}_t={region:E.region,moved:0,t:o(),x:M.clientX,y:M.clientY},!G.sleeping&&E.region==="belly"&&Vn(E.local,.55)}}),ln.addEventListener("pointermove",M=>{if(Rt(M),Ge.wx=nt.x,Ge.wy=nt.y,Ge.wT=o()+3e3,!_t)return;let E=Math.hypot(M.clientX-_t.x,M.clientY-_t.y);_t.moved+=E,_t.x=M.clientX,_t.y=M.clientY;let te=xt();te&&te.region==="belly"&&Vn(te.local,.5),_t.moved>12&&!G.sleeping&&(ut+=E,ut>110*(u/540)&&(ut=0,Ws(te?te.region:_t.region)))});function Gn(){_t&&(ke=0,_t.moved<12&&o()-_t.t<600&&un(_t.region),_t=null,ut=0)}ln.addEventListener("pointerup",Gn),ln.addEventListener("pointercancel",Gn);function Vn(M,E){We.copy(M),ke=E}function Wt(M){Math.random()<M*.25&&(G.coins++,Je("coin"),pe("\u{1FA99}",1,"head",.5))}function nn(){G.sleeping&&(G.sleeping=!1,Je("yawn"),$("\u54C8\u554A\uFF5E\u7761\u9971\u5566\uFF01",2e3),ie("happy",1500),tt(6))}function ji(){if(G.sleeping){nn();return}G.sleeping=!0,fn(),Je("yawn"),$("\u665A\u5B89\u2026zZz",2e3)}function un(M){if(G.sleeping){nn();return}let E=o();if(it=E-vn<2500?it+1:1,vn=E,Fe.dent.d+=-2.5,it>=6){it=0,G.joy=e(G.joy-6,0,100),ie("angry",2400),Ze("roll",9),Je("angry"),$(r(["\u522B\u6233\u5566\uFF01\uFF01","\u518D\u6233\u6211\u5C31\u751F\u6C14\u4E86\uFF01","\u54FC\uFF01\u4E0D\u7406\u4F60\u4E86\uFF01"]),2200),pe("\u{1F4A2}",3,"head",.4);return}M==="head"?(ie("surprise",900),Ze("nod",-5),Ze("sq",4),Je("poke"),$(r(["\u55EF\uFF1F","\u5E72\u561B\u6233\u6211\uFF5E","\u5495\uFF1F","\uFF1F"]),1200)):M==="belly"?(ie("laugh",1400),Ze("sq",5),St(),$(r(["\u54C8\u54C8\u54C8\u597D\u75D2\uFF01","\u563B\u563B\u563B\uFF5E","\u809A\u809A\uFF01"]),1400),G.joy=e(G.joy+3,0,100),pe("\u2764\uFE0F",2,"belly"),Wt(.25)):M==="arm"?(ie("happy",1e3),Ze("roll",-6),$("\u563F\u563F\uFF5E",900)):(tt(7),ie("happy",900),$("\u54CE\u5440\uFF01",900))}function Ws(M){if(G.sleeping)return;G.joy=e(G.joy+2.5,0,100),Wt(.5),Ue(.5);let E=o();M==="belly"?(ze.cur||ie("laugh",900),St(),E-wt>1500&&($(r(["\u54C8\u54C8\u54C8\u54C8\uFF01","\u597D\u75D2\u597D\u75D2\uFF5E","\u54AF\u54AF\u54AF\uFF01"]),1200),wt=E)):(ie("love",1e3),Je("love"),E-wt>1500&&($(r(["\u8212\u670D\uFF5E","\u6700\u559C\u6B22\u4F60\u4E86\uFF01","\u518D\u6478\u6478\uFF5E","\u5495\u5471\uFF5E"]),1200),wt=E)),pe("\u2764\uFE0F",2,M==="belly"?"belly":"head")}let Qi=[{e:"\u{1F34E}",n:"\u82F9\u679C",c:0,v:12},{e:"\u{1F955}",n:"\u80E1\u841D\u535C",c:2,v:16},{e:"\u{1F354}",n:"\u6C49\u5821",c:4,v:28},{e:"\u{1F370}",n:"\u86CB\u7CD5",c:6,v:36},{e:"\u{1F357}",n:"\u9E21\u817F",c:8,v:48}];N.innerHTML=Qi.map((M,E)=>`<div class="food" data-i="${E}"><b>${M.e}</b>${M.n}<small>${M.c?"\u{1FA99}"+M.c:"\u514D\u8D39"}</small></div>`).join("");function fn(){N.classList.remove("show"),Ii.classList.remove("show"),Ui.classList.remove("show"),ts.classList.remove("show")}document.querySelectorAll(".btn").forEach(M=>M.addEventListener("pointerdown",E=>{E.preventDefault(),at(),Je("tap");let te=M.dataset.b;if(!(Ve&&!Ve.end&&te!=="game")){if(Ve&&Ve.end&&te!=="game"&&Cr(),Ut&&(te==="game"||te==="sleep")){Je("no"),Se(te==="sleep"?"\u5916\u9762\u4E0D\u80FD\u7761\u89C9\uFF0C\u5148\u56DE\u5BB6\u5427":"\u5148\u56DE\u5BB6\u518D\u73A9\u63A5\u63A5\u4E50\u5427",2e3);return}if(te==="out"){if(Ut){Se('\u5DF2\u7ECF\u5728\u5916\u9762\u73A9\u5566\uFF0C\u70B9\u4E0A\u9762\u7684"\u56DE\u5BB6"',2e3);return}G.sleeping&&nn();let ge=Ui.classList.contains("show");fn(),ge||(Zu(),Ui.classList.add("show"));return}if(te==="feed"){G.sleeping&&nn(),Ii.classList.remove("show"),Ui.classList.remove("show"),N.classList.toggle("show");return}if(te==="dress"){G.sleeping&&nn();let ge=Ii.classList.contains("show");fn(),ge||(qs(),Ii.classList.add("show"));return}fn(),te==="sleep"?ji():te==="play"?Bu():te==="talk"?zu():te==="game"&&Jo()}}));let Pi=0;function Bu(){if(G.sleeping&&nn(),G.energy<15){Je("no"),$("\u597D\u7D2F\u2026\u60F3\u7761\u89C9",1800);return}Pi=3.4,ie("play",3400),G.energy=e(G.energy-10,0,100),G.joy=e(G.joy+18,0,100),Ue(4),pe("\u2B50",16,"head"),tt(8.5),He()?Ke("\u4E00\u8D77\u73A9\uFF01",!0):($("\u4E00\u8D77\u73A9\uFF01\u8036\uFF01",2400),Je("level"))}let Xs=i("#ghost"),Mn=null,es=null;N.addEventListener("pointerdown",M=>{let E=M.target.closest(".food");if(!E)return;M.preventDefault(),at();let te=Qi[+E.dataset.i];if(G.coins<te.c){Je("no"),Se("\u91D1\u5E01\u4E0D\u591F\u5566\uFF5E\u591A\u6478\u6478\u5976\u86D9\u53EF\u4EE5\u8D5A\u91D1\u5E01");return}Mn={f:te,sx:M.clientX,sy:M.clientY,x:M.clientX,y:M.clientY},Xs.textContent=te.e,Xs.style.display="block",Kl()}),addEventListener("pointermove",M=>{if(!Mn)return;Mn.x=M.clientX,Mn.y=M.clientY,Kl();let E=ln.getBoundingClientRect();Ge.wx=(M.clientX-E.left)/E.width*2-1,Ge.wy=-((M.clientY-E.top)/E.height)*2+1,Ge.wT=o()+2e3});function Kl(){Xs.style.left=Mn.x+"px",Xs.style.top=Mn.y+"px"}addEventListener("pointerup",M=>{if(!Mn)return;let E=Mn;Mn=null,Xs.style.display="none",ue.mo=null;let te=ln.getBoundingClientRect(),ge=E.x-te.left,Ne=E.y-te.top,Xe=ce("mouth"),je=Math.hypot(ge-Xe.x,Ne-Xe.y)<170*(u/540),pt=Math.hypot(E.x-E.sx,E.y-E.sy)<14;Rt({clientX:E.x,clientY:E.y});let Ot=xt();(je||pt||Ot&&Ot.region!=="lamp")&&jl(E.f,{x:te.left+(pt?Xe.x:ge),y:te.top+(pt?Xe.y:Ne)})});function jl(M,E){if(!(es||G.sleeping)){if(G.hunger>=96){Je("no"),$("\u5403\u4E0D\u4E0B\u5566\uFF5E",1500),Ze("roll",8);return}G.coins-=M.c,es={f:M,t:0,n:0,from:E,flew:!1},$("\u554A\uFF5E\u545C\uFF01",900),fn()}}let Tr={},Gt={state:"idle"};async function zu(){if(Gt.state!=="idle")return;if(G.sleeping&&nn(),xe!=="frog"){Ke();return}try{Tr.stream=Tr.stream||await navigator.mediaDevices.getUserMedia({audio:!0})}catch{Se("\u9700\u8981\u9EA6\u514B\u98CE\u6743\u9650\u624D\u80FD\u590D\u8BFB\u54E6",2600);return}if(at(),!_e)return;let M=_e.createMediaStreamSource(Tr.stream),E=_e.createAnalyser();E.fftSize=1024,M.connect(E);let te=[],ge=new MediaRecorder(Tr.stream);ge.ondataavailable=Ne=>te.push(Ne.data),Gt={state:"listen",an:E,mr:ge,t0:o(),lastVoice:0,heard:!1},ge.onstop=async()=>{if(M.disconnect(),!Gt.heard){Gt={state:"idle"},ie("confused",1200),$("\u54A6\uFF1F\u6CA1\u542C\u5230\uFF5E",1500);return}try{let Ne=await _e.decodeAudioData(await new Blob(te).arrayBuffer()),Xe=_e.createBufferSource(),je=_e.createGain(),pt=_e.createAnalyser();pt.fftSize=512,Xe.buffer=Ne,Xe.playbackRate.value=1.7,je.gain.value=$e?0:1.6,Xe.connect(pt),pt.connect(je),je.connect(_e.destination),Gt={state:"speak",an:pt},ie("talk",Ne.duration/1.7*1e3+400),Xe.onended=()=>{Gt={state:"idle"},ue.mo=null,ie("laugh",1e3),St(),G.joy=e(G.joy+8,0,100),Ue(3),Wt(1)},Xe.start()}catch{Gt={state:"idle"},Se("\u8FD9\u4E2A\u6D4F\u89C8\u5668\u65E0\u6CD5\u64AD\u653E\u5F55\u97F3",2200)}},ge.start(),ie("listen",7e3),$("\u{1F442} \u8BF4\u70B9\u4EC0\u4E48\u5427\uFF0C\u6211\u6765\u5B66\u2026",4e3)}function Zo(M){let E=new Uint8Array(M.fftSize);M.getByteTimeDomainData(E);let te=0;for(let ge of E)te=Math.max(te,Math.abs(ge-128));return te}function Hu(){if(Gt.state==="listen"){let M=Zo(Gt.an),E=o();M>14&&(Gt.heard=!0,Gt.lastVoice=E);let te=E-Gt.t0;(Gt.heard&&E-Gt.lastVoice>900||te>6e3||!Gt.heard&&te>4500)&&(Gt.state="stop",ye=0,Gt.mr.stop())}else Gt.state==="speak"&&(ue.mo=e(Zo(Gt.an)/45,0,1));if(ze.cur){let M=o(),E=Math.min(.1,(M-(ze.t||M))/1e3);ze.t=M;let te=ze.cur,ge=e(Zo(te.an)/80,0,1),Ne=te.k==="catch"||te.k==="andy"||te.k==="mouse"||te.k==="ola";te.lv+=(ge-te.lv)*(1-Math.exp(-(ge>te.lv?Ne?22:5:Ne?12:2.2)*E)),ue.mo=e(Ne?.08+te.lv*1.15:.25+te.lv*.95,0,1)}else ze.t=0}let Ii=i("#wardrobe"),ku=i("#wtabs"),Gu=i("#witems"),hi="hat",Ar={};for(let M in oe)Ar[M]={};function Rr(){for(let M in oe){let E=oe[M].wearFrame;for(let te of Xl){let ge=G.wear[M][te.id]||null,Ne=Ar[M][te.id];if(!(Ne&&Ne.userData.item===ge)&&(Ne&&(E.remove(Ne),Ne.traverse(Xe=>{Xe.geometry&&Xe.geometry.dispose()})),Ar[M][te.id]=null,ge&&ql[ge])){let Xe=Nu(ge,M);E.add(Xe),Ar[M][te.id]=Xe}}}}function qs(){ku.innerHTML=Xl.map(E=>'<div class="wtab'+(E.id===hi?" on":"")+'" data-s="'+E.id+'">'+E.name+"</div>").join("");let M=G.wear[xe][hi];Gu.innerHTML=Vo.filter(E=>E.slot===hi).map(E=>{let te=G.own.includes(E.id);return'<div class="wit'+(M===E.id?" on":"")+(!te&&G.coins<E.price?" lock":"")+'" data-i="'+E.id+'"><b>'+E.icon+"</b>"+E.name+"<small>"+(M===E.id?"\u7A7F\u6234\u4E2D":te?"\u5DF2\u62E5\u6709":"\u{1FA99}"+E.price)+"</small></div>"}).join("")+'<div class="wit'+(M?"":" on")+'" data-i=""><b>\u{1F6AB}</b>\u4E0D\u6234<small>&nbsp;</small></div>'}Ii.addEventListener("pointerdown",M=>{let E=M.target.closest(".wtab");if(E){M.preventDefault(),hi=E.dataset.s,Je("tap"),qs();return}let te=M.target.closest(".wit");if(!te)return;at();let ge=te.dataset.i,Ne=G.wear[xe][hi];if(!ge){G.wear[xe][hi]=null,Je("tap"),Rr(),qs();return}let Xe=ql[ge];if(!G.own.includes(ge)){if(G.coins<Xe.price){Je("no"),Se("\u91D1\u5E01\u4E0D\u591F\u5566\uFF5E\u591A\u6478\u6478\u3001\u591A\u73A9\u63A5\u63A5\u4E50\u53EF\u4EE5\u8D5A\u91D1\u5E01",2400);return}G.coins-=Xe.price,G.own.push(ge),Je("coin"),Se("\u4E70\u5230\u5566\uFF01"+Xe.icon+" "+Xe.name,1600)}Ne===ge?(G.wear[xe][hi]=null,Je("tap")):(G.wear[xe][hi]=ge,Je("level"),Math.random()<.5&&setTimeout(Pe,350),ie("happy",1400),tt(6.5),Ze("sq",3),pe("\u2728",8,"head"),G.sleeping||$(r(["\u597D\u770B\u5417\uFF1F","\u65B0\u8863\u670D\uFF01","\u563F\u563F\uFF5E","\u6211\u662F\u6F6E\u86D9\uFF01"]),1600)),Rr(),qs(),Re()}),Rr();let Ve=null,Li=i("#ghud"),ui=i("#gend"),Vu=[["\u{1F34E}",1],["\u{1F34E}",1],["\u{1F34E}",1],["\u{1F354}",2],["\u{1F370}",2],["\u{1F357}",3],["\u2B50",5]],Wu=[["\u{1F336}\uFE0F",-3],["\u{1F4A3}",-4]];function Jo(){if(G.sleeping&&nn(),G.energy<10){Je("no"),$("\u597D\u7D2F\u2026\u60F3\u7761\u89C9",1800);return}ui.style.display="none",fn(),kn(),Ve={t:30,score:0,items:[],spawnT:.4,tx:0,mo:0,caught:0,end:!1},G.energy=e(G.energy-8,0,100),ie("happy",800),$("\u63A5\u4F4F\u597D\u5403\u7684\uFF01\u8EB2\u5F00\u8FA3\u6912\u548C\u70B8\u5F39\uFF01",2200),Je("level"),Li.style.display="block"}function Xu(){let M=Math.random()<.22,[E,te]=r(M?Wu:Vu),ge=u/540,Ne=document.createElement("div");Ne.className="fx",Ne.textContent=E,Ne.style.fontSize="calc(var(--u)*46)",Ne.style.zIndex=2,a.appendChild(Ne);let Xe={e:E,v:te,el:Ne,x:s(.1,.9)*u,y:-30*ge,vy:s(230,330)*(1+.5*(1-Ve.t/30)),rot:s(-1,1)};Ve.items.push(Xe)}function qu(M){let E=u/540;Ve.end||(Ve.t-=M,Ve.spawnT-=M,Ve.spawnT<=0&&(Xu(),Ve.spawnT=s(.4,.85)*(1-.35*(1-Ve.t/30))),Ve.t<=0&&(Ve.t=0,Yu()));let te=Ve.end?0:e(Ve.tx*1.9,-1.3,1.3);De.position.x+=(te-De.position.x)*(1-Math.exp(-9*M)),Ve.lean=Jn(Ve.lean||0,e((te-De.position.x)*-.35,-.3,.3),10,M);let ge=ce("mouth"),Ne=0;for(let Xe=Ve.items.length-1;Xe>=0;Xe--){let je=Ve.items[Xe];je.y+=je.vy*M*E,je.el.style.left=je.x+"px",je.el.style.top=je.y+"px",je.el.style.transform="translate(-50%,-50%) rotate("+je.rot*je.y*.01+"rad)";let pt=Math.abs(je.x-ge.x),Ot=ge.y-je.y;if(!Ve.end&&Ot<200*E&&Ot>-20*E&&pt<130*E&&je.v>0&&(Ne=Math.max(Ne,e(1-Ot/200/E,.2,1))),!Ve.end&&pt<(xe==="egg"?100:82)*E&&Math.abs(Ot)<44*E){Ve.score=Math.max(0,Ve.score+je.v),je.v>0?(Ve.caught++,Je("chomp"),Fe.sq.v=.1,pe("+"+je.v,1,{x:je.x,y:je.y},.3),Ve.caught%4===0&&$(r(["\u597D\u5403\uFF01","\u518D\u6765\uFF01","\u55EF\u55EF\uFF5E"]),700),je.e==="\u2B50"&&(Je("coin"),pe("\u2728",5,"mouth",.5))):(Je("no"),ie("angry",700),Ze("roll",7),pe("\u{1F4A2}",2,"mouth",.4),$(r(["\u5478\u5478\u5478\uFF01","\u597D\u8FA3\uFF01","\u54CE\u5440\uFF01"]),800)),je.el.remove(),Ve.items.splice(Xe,1);continue}je.y>p+40*E&&(je.el.remove(),Ve.items.splice(Xe,1))}Ve.mo=Jn(Ve.mo,Ne,14,M),Li.textContent="\u23F1 "+Math.ceil(Ve.t)+"s   \u2B50 "+Ve.score,Ve.end&&!Ve.items.length&&Math.abs(De.position.x)<.02&&(De.position.x=0,Ve.end=2)}function Yu(){Ve.end=!0;for(let te of Ve.items)te.el.remove();Ve.items=[],Li.style.display="none";let M=Math.floor(Ve.score/2),E=Ve.score>G.best;E&&(G.best=Ve.score),G.coins+=M,G.joy=e(G.joy+10,0,100),Ue(Math.min(6,2+Math.floor(Ve.score/10))),Je(M>0?"level":"no"),ie(Ve.score>=10?"laugh":"happy",1500),tt(7),M>0&&ze.buf.laugh1&&St(),ui.innerHTML="<h2>"+(E&&Ve.score>0?"\u{1F389} \u65B0\u7EAA\u5F55\uFF01":"\u65F6\u95F4\u5230\uFF01")+"</h2><p>\u63A5\u5230 "+Ve.score+" \u5206</p><p>\u{1FA99} +"+M+"\u3000\u6700\u9AD8 "+G.best+'</p><div class="go2" data-a="again">\u518D\u73A9\u4E00\u6B21</div>',ui.style.display="block",Re()}ui.addEventListener("pointerdown",M=>{let E=M.target.closest(".go2");E&&E.dataset.a==="ok"?(M.preventDefault(),ui.style.display="none"):E&&(M.preventDefault(),at(),Ve=null,Jo())}),document.addEventListener("keydown",M=>{M.key==="Escape"&&Ve&&Cr()});function Cr(){if(Ve){for(let M of Ve.items)M.el.remove();Ve=null,De.position.x=0,Li.style.display="none",ui.style.display="none"}}function Ql(M){if(!Ve||Ve.end)return;let E=ln.getBoundingClientRect();Ve.tx=e((M.clientX-E.left)/E.width*2-1,-1,1)}addEventListener("pointermove",Ql),addEventListener("pointerdown",Ql);let Ui=i("#trip"),$o=i("#home"),ec=i("#fade"),tc={park:{name:"\u516C\u56ED",icon:"\u{1F333}",items:["\u{1F338}","\u{1F33C}","\u{1F344}","\u{1F337}","\u{1F98B}","\u{1F340}"],lines:["\u82B1\u5F00\u5566\uFF01","\u597D\u591A\u8774\u8776\uFF5E","\u7A7A\u6C14\u771F\u597D\uFF01","\u627E\u5230\u5566\uFF01"]},beach:{name:"\u6D77\u8FB9",icon:"\u{1F3D6}\uFE0F",items:["\u{1F41A}","\u2B50","\u{1F980}","\u{1F420}","\u{1F419}","\u{1FAB8}"],lines:["\u6D77\u6D6A\u597D\u51C9\uFF5E","\u8D1D\u58F3\uFF01","\u54C7\uFF0C\u5927\u6D77\uFF01","\u6293\u5230\u5566\uFF01"]},snow:{name:"\u96EA\u5730",icon:"\u26C4",items:["\u2744\uFE0F","\u26C4","\u{1F9E4}","\u{1F3BF}","\u{1F9CA}","\u{1F384}"],lines:["\u96EA\u597D\u8F6F\uFF01","\u597D\u51B7\u597D\u597D\u73A9\uFF5E","\u5806\u96EA\u4EBA\uFF01","\u627E\u5230\u5566\uFF01"]}},Ko=45,Ut=null;function Zu(){Ui.innerHTML=Object.entries(tc).map(([M,E])=>'<div class="dest" data-d="'+M+'"><b>'+E.icon+"</b>"+E.name+"<small>\u26A1 -10 \xB7 "+Ko+" \u79D2</small></div>").join("")}Ui.addEventListener("pointerdown",M=>{let E=M.target.closest(".dest");E&&(M.preventDefault(),at(),ic(E.dataset.d))});function nc(M){ec.style.opacity=1,setTimeout(()=>{M(),ec.style.opacity=0},380)}function ic(M){if(!(Ut||Ve)){if(G.energy<15){Je("no"),$("\u597D\u7D2F\u2026\u5148\u7761\u4E00\u4F1A\u513F\u5427",1800),fn();return}if(G.hunger<20){Je("no"),$("\u809A\u809A\u997F\u4E86\u2026\u5148\u5403\u70B9\u4E1C\u897F\u5427",2e3),fn();return}fn(),Je("level"),G.energy=e(G.energy-10,0,100),nc(()=>{Ut={k:M,d:tc[M],t:Ko,found:0,coins:0,gift:!1,giftAt:s(10,32),spawnT:.6,els:[],trip:{}},G.trips=(G.trips||0)+1,le.forEach(E=>E.visible=!1),W.scenes[M].visible=!0,$o.style.display="block",Li.style.display="block",ie("happy",1500),tt(8),pe("\u2728",8,"head"),$(xe==="egg"?"\u5B89~\u8FEA\uFF01":"\u51FA\u95E8\u73A9\u54AF\uFF01",2e3)})}}function jo(M){if(!Ut)return;let E=Ut;Ut=null;for(let te of E.els)te.el.remove();nc(()=>{W.scenes[E.k].visible=!1,le.forEach(te=>te.visible=!0),$o.style.display="none",Li.style.display="none",G.joy=e(G.joy+8+E.found,0,100),Ue(2+Math.min(6,Math.floor(E.found/3))),G.coins+=E.coins,Re(),ie(E.found>=8?"laugh":"happy",1400),tt(7),E.found>=8&&ze.buf.laugh1&&St(),ui.innerHTML="<h2>"+(M?"\u73A9\u591F\u5566\uFF0C\u56DE\u5BB6\uFF01":"\u56DE\u5BB6\u5566\uFF01")+"</h2><p>"+E.d.icon+" "+E.d.name+"\u3000\u6536\u96C6\u4E86 "+E.found+" \u4EF6</p><p>\u{1FA99} +"+E.coins+"\u3000\u5F00\u5FC3 +"+(8+E.found)+'</p><div class="go2" data-a="ok">\u597D\u7684</div>',ui.style.display="block"})}$o.addEventListener("pointerdown",M=>{M.preventDefault(),jo(!1)});function sc(M){let E=Math.random()<.2,te=E?s(.3,.7):Math.random()<.5?s(.1,.25):s(.75,.9),ge=E?s(.74,.8):s(.3,.76),Ne=M?"\u{1F381}":r(Ut.d.items),Xe=document.createElement("div");Xe.className="col"+(M?" gift":""),Xe.innerHTML="<i>"+Ne+"</i>",Xe.style.left=te*u+"px",Xe.style.top=ge*p+"px",M&&(Xe.style.fontSize="calc(var(--u)*60)"),a.appendChild(Xe);let je={el:Xe,emoji:Ne,gift:M,x:te*u,y:ge*p,life:M?11:s(5,8)};Xe.addEventListener("pointerdown",pt=>{pt.preventDefault(),pt.stopPropagation(),Ju(je)}),Ut.els.push(je)}function Ju(M){if(!Ut)return;let E=Ut.els.indexOf(M);if(!(E<0))if(Ut.els.splice(E,1),M.el.style.transform="translate(-50%,-50%) scale(1.6)",M.el.style.opacity=0,setTimeout(()=>M.el.remove(),300),Ut.found++,Ge.wx=M.x/u*2-1,Ge.wy=-(M.y/p)*2+1,Ge.wT=o()+900,M.gift){let te=Vo.filter(ge=>!G.own.includes(ge.id));if(te.length){let ge=r(te);G.own.push(ge.id),Se("\u{1F381} \u83B7\u5F97\u65B0\u9970\u54C1\uFF1A"+ge.icon+" "+ge.name+"\uFF01\u53BB\u6362\u88C5\u91CC\u770B\u770B",3200)}else Ut.coins+=15,Se("\u{1F381} \u793C\u7269\u91CC\u6709 15 \u679A\u91D1\u5E01\uFF01",2400);Je("level"),setTimeout(Pe,300),pe("\u{1F389}",8,{x:M.x,y:M.y},1.2),ie("happy",1400),tt(8)}else Ut.coins+=1,Je("coin"),pe("+1\u{1FA99}",1,{x:M.x,y:M.y},.3),Ut.found%3===0&&(ie("happy",900),tt(5.5)),Ut.found%4===1&&!G.sleeping&&$(r(Ut.d.lines),1200)}function $u(M){let E=Ut;E.t-=M,W.update(E.k,dn,M),E.spawnT-=M,E.spawnT<=0&&E.els.length<5&&(sc(!1),E.spawnT=s(1.1,2.2)),!E.gift&&Ko-E.t>=E.giftAt&&E.t>8&&(E.gift=!0,sc(!0));for(let te=E.els.length-1;te>=0;te--){let ge=E.els[te];ge.life-=M,ge.life<1.2&&(ge.el.style.opacity=Math.max(0,ge.life/1.2)),ge.life<=0&&(ge.el.remove(),E.els.splice(te,1))}Li.textContent=E.d.icon+" "+E.d.name+"   \u23F1 "+Math.ceil(Math.max(0,E.t))+"s   \u{1F392} "+E.found,E.t<=0&&jo(!0)}let rc="naiwa3d-char",oc=i("#charbtn"),ts=i("#charpick");function Qo(M,E){if(M===xe&&!E)return;let te=oe[M]||j;for(let ge in oe){let Ne=oe[ge].group;Ne.visible=oe[ge]===te,Ne.position.set(0,0,0),Ne.rotation.set(0,0,0),Ne.scale.set(1,1,1)}xe=M,Ce=te,De=te.group,D=te.uniforms,be=te.colliders;try{localStorage.setItem(rc,M)}catch{}oc.textContent=Ae[M].icon,ts.querySelectorAll(".chc").forEach(ge=>ge.classList.toggle("on",ge.dataset.c===M)),kn(),_t=null,ke=0,Ve&&Cr(),!E&&Ii.classList.contains("show")&&qs(),E||(ie("happy",1200),tt(7.5),pe("\u2728",8,"head"),$(M==="frog"?"\u6211\u662F\u5976\u86D9\uFF01":"\u4F60\u597D\u5440\uFF01",2e3),M==="egg"||M==="mouse"||setTimeout(()=>{xe===M&&Pe()},650))}ts.innerHTML=Object.entries(Ae).map(([M,E])=>'<div class="chc" data-c="'+M+'"><b>'+E.icon+"</b>"+E.name+"</div>").join(""),oc.addEventListener("pointerdown",M=>{M.preventDefault(),at(),Je("tap");let E=ts.classList.contains("show");fn(),E||ts.classList.add("show")}),ts.addEventListener("pointerdown",M=>{let E=M.target.closest(".chc");E&&(M.preventDefault(),at(),Je("tap"),fn(),Qo(E.dataset.c))});try{let M=localStorage.getItem(rc);M&&oe[M]&&M!=="frog"&&Qo(M,!0)}catch{}i("#start").addEventListener("pointerdown",M=>{M.preventDefault(),at(),i("#start").style.display="none",an=!0,Je("level"),$(xe==="egg"?"\u5B89~\u8FEA\uFF01":"\u54C7\uFF5E\u4F60\u6765\u5566\uFF01\u6211\u662F\u5976\u86D9\uFF01",2600),ie("happy",1600),tt(8)});let dn=0,ea=s(5,9),ta=0,pn=G.sleeping?1:0,J_=0,Jn=(M,E,te,ge)=>M+(E-M)*(1-Math.exp(-te*ge));function Ku(M){if(dn+=M,an){let st=G.sleeping?.25:1;G.hunger=e(G.hunger-M*.05*st,0,100),G.joy=e(G.joy-M*.035*st,0,100),G.energy=e(G.energy+(G.sleeping?M*2.2:-M*.03),0,100),G.sleeping&&G.energy>=100&&(G.sleeping=!1,Je("yawn"),$("\u7761\u9971\u5566\uFF01\u7CBE\u795E\u767E\u500D\uFF01",2200),ie("happy",1500),tt(7))}if(an&&!G.sleeping&&!es&&Gt.state==="idle"&&Pi<=0&&!_t&&!Mn&&!Ve&&(ea-=M,ea<=0)){ea=s(5,10);let st=Ie();if(st==="sad")$(r(["\u809A\u809A\u997F\u4E86\u2026\u{1F356}","\u5495\u565C\u565C\uFF5E\u60F3\u5403\u4E1C\u897F","\u7ED9\u6211\u70B9\u5403\u7684\u561B"]),2400);else if(st==="angry")$(r(["\u54FC\uFF01\u6CA1\u4EBA\u966A\u6211\u73A9","\u4E0D\u5F00\u5FC3\uFF01\u6478\u6478\u6211","\u54FC\uFF5E"]),2400);else{let mn=Math.random();mn<.3?(tt(8),He()&&Math.random()<.5?Ke():(ie("happy",900),Math.random()<.5?Pe():$(r(["\u8036\uFF01","\u5976\uFF5E","\u6211\u662F\u5976\u86D9\uFF01"]),1500))):mn<.55?$(r(["\u6478\u6478\u6211\u561B\uFF5E","\u4ECA\u5929\u4E5F\u8981\u5F00\u5FC3\uFF01","\u5495\u5471\uFF5E","\u6233\u6233\u6211\u7684\u809A\u5B50\u8BD5\u8BD5\uFF1F"]),2400):mn<.8?(Ze("roll",5),ie("confused",1400),$("\u55EF\uFF1F",1e3)):(ie("yum",1200),$("\u{1F60B}",1e3))}}Pi>0&&(Pi-=M,fe.y<=.02&&Math.random()<.04&&tt(s(7,9.5))),Hu(),Ve&&qu(M),Ut&&$u(M);let E=qe[Be()];for(let st of T)he[st]=Jn(he[st],E[st],b[st]||9,M);for(let st=0;st<4;st++)he.ar[st]=Jn(he.ar[st],E.ar[st],8,M),he.al[st]=Jn(he.al[st],E.al[st],8,M);if(ue.mo!=null&&(he.mo=ue.mo),es){let st=es;if(st.t+=M,st.t<.5&&(he.mo=Jn(he.mo,.95,20,M),ue.mo=.95,Ge.wx=0,Ge.wy=.1,Ge.wT=o()+500),st.t>.15&&!st.flew){st.flew=!0;let mn=ce("mouth"),Di=ln.getBoundingClientRect(),Xn=document.createElement("div");Xn.className="fx",Xn.textContent=st.f.e,Xn.style.fontSize="calc(var(--u)*70)",Xn.style.left=st.from.x-Di.left+"px",Xn.style.top=st.from.y-Di.top+"px",a.appendChild(Xn);let rf=Xn.animate([{left:Xn.style.left,top:Xn.style.top,transform:"translate(-50%,-50%) scale(1)",opacity:1},{left:mn.x+"px",top:mn.y+"px",transform:"translate(-50%,-50%) scale(.2)",opacity:.6}],{duration:330,easing:"ease-in",fill:"forwards"});rf.onfinish=()=>Xn.remove()}if(st.t>=.5&&st.t<1.7){ie("eat",300),ue.mo=.08+.2*Math.abs(Math.sin(st.t*13));let mn=Math.floor((st.t-.5)/.26);mn>st.n&&(st.n=mn,Fe.sq.v=.14,Je("chomp"),pe("\u{1F7E1}",2,"mouth",.3))}st.t>=1.7&&st.t<1.85&&(ue.mo=0,st.n<99&&(st.n=99,Je("gulp"),Fe.sq.d-=3,Ze("nod",-3))),st.t>=1.85&&(ue.mo=null,G.hunger=e(G.hunger+st.f.v,0,100),G.joy=e(G.joy+st.f.v/6,0,100),Ue(3),Je("yum"),ie("yum",1800),$("\u597D\u597D\u5403\uFF01"+st.f.e,1800),pe("\u2764\uFE0F",5,"head"),tt(6.5),es=null)}else if(Mn){let st=ln.getBoundingClientRect(),mn=ce("mouth"),Di=Math.hypot(Mn.x-st.left-mn.x,Mn.y-st.top-mn.y);ue.mo=Di<260*(u/540)?e(1.1-Di/(260*(u/540)),.15,.9):null}else Ve&&!Ve.end&&Ve.mo>.05&&!ze.cur?ue.mo=e(.15+Ve.mo*.8,0,1):Gt.state!=="speak"&&ue.mo!=null&&!ze.cur&&(ue.mo=null);let te=o()<Ge.wT,ge=te?Ge.wx:Math.sin(dn*.4)*.35,Ne=te?Ge.wy:.1+Math.sin(dn*.31)*.2,Xe=G.sleeping?0:1;Ge.x=Jn(Ge.x,ge*Xe,6,M),Ge.y=Jn(Ge.y,Ne*Xe,6,M),dt-=M,dt<=0&&(Mt=.14,dt=s(2,5)),Mt>0&&(Mt-=M);let je=Mt>0?Math.sin((1-Mt/.14)*Math.PI):0;et(Fe.sq,0,200,11,M),et(Fe.nod,0,170,10,M),et(Fe.yaw,0,170,10,M),et(Fe.lean,0,170,10,M),et(Fe.roll,0,150,8,M),et(Fe.dent,ke,260,9,M),(fe.y>0||fe.vy>0)&&(fe.vy-=22*M,fe.y+=fe.vy*M,fe.y<=0&&(fe.y=0,fe.vy<-3&&(Fe.sq.v=.34,Fe.sq.d=0,pe("\u{1F4A8}",3,"feet",.3)),fe.vy=0));let pt=e(fe.vy*.025,-.12,.18),Ot=Math.sin(dn*(G.sleeping?1.1:2.1)),is=Math.sin(dn*30)*he.shake*.05,fi=dn*14,di=ze.cur&&ze.cur.k.startsWith("laugh")?e(ze.cur.lv*1.6,0,1):.5+.5*Math.sin(fi),Wn=he.ha,na=he.sit,Pr=Fe.sq.v-pt+Wn*.07*(di-.5),nf=Ge.x*.35*(1-.8*na*(G.sleeping?1:0))+Fe.yaw.v,sf=he.nod-Ge.y*.3+Fe.nod.v+(G.sleeping?Math.sin(dn*.9)*.1:0)-Wn*.1*di,ia=he.lean+Fe.lean.v+Ot*.008+Wn*.06*(di-.5),hc=he.tilt+is*.6+Math.sin(dn*.7)*.01;De.scale.set(1+Pr*.45+he.puff*.3,1-Pr*.5,1+Pr*.45+he.puff*.3),De.position.y=fe.y+Wn*.08*di,De.rotation.z=(Ve&&Ve.lean||0)+Fe.roll.v*.08+is+Wn*.035*Math.sin(fi*.5)+(Pi>0?Math.sin(dn*8)*.08:0),De.rotation.y=(Pi>0?Math.sin(dn*3)*.5:0)+Ge.x*.12;let uc=Math.sin(dn*1.6)*.03,sa=[...he.ar],ra=[...he.al];sa[0]+=-ia*.25+uc+Wn*.05*Math.sin(fi),ra[0]+=-ia*.25-uc+Wn*.05*Math.sin(fi),sa[2]+=Ot*.02,ra[2]+=Ot*.02,Ce.pose({inflate:he.puff+Wn*.1,dy:-.62*na,lean:ia,tilt:hc*.4,nod:sf,yaw:nf,roll:hc*.8+is,ar:sa,al:ra,fing:he.fing,hip:he.hip+(Pi>0?Math.sin(dn*10)*.5:0),sit:na}),D.uInfl.value=he.puff,D.uBelly.value=.025*Ot+(G.hunger<25?.03*Math.sin(dn*5):0)+Wn*(.05+.07*di),D.uDent.value.set(We.x,We.y,We.z,Fe.dent.v);{let st=e(Math.max(he.u,je),0,1),mn=e(Math.max(he.l,je*.6),0,1),Di=Math.max(0,he.mo*(1-.28*Wn*di));Ce.paint({lx:e(Ge.x*.9+he.lx,-1,1),ly:e(Ge.y*.8+he.ly,-1,1),u:st,l:mn,sl:he.sl,arc:he.arc,mo:Di,sm:he.sm,te:he.te,tg:he.tg,bl:he.bl,pup:he.pup})}let oa=e(1-fe.y*.18,.4,1);if(V.position.x=De.position.x,V.scale.set(2.8*oa*(1+Pr*.3),2*oa,1),V.material.opacity=.9*oa,pn=Jn(pn,G.sleeping?1:0,3,M),_.intensity=t(1,.55,pn),m.intensity=t(2.3,.7,pn),d.intensity=t(.7,.2,pn),S.intensity=t(1.1,.5,pn),m.color.setRGB(1,t(1,.8,pn),t(1,1.2,pn)),Ut?c.background.setHex(W.scenes[Ut.k].userData.bg):c.background.setRGB(t(1,.1,pn),t(.85,.1,pn)*t(1,1,0),t(.63,.3,pn)),J.intensity=Ut?0:t(6,0,pn),Q[0].emissiveIntensity=t(.9,0,pn),O.material.opacity=pn,G.sleeping&&(ta-=M,ta<=0&&(ta=1.3,pe("\u{1F4A4}",1,ce("head"),.5))),F&&o()<F.until){let st=ce("top");v.style.display="block",v.style.left=e(st.x,u*.2,u*.8)+"px",v.style.top=Math.max(st.y-10*(u/540),u*.22)+"px"}else v.style.display="none";I.style.display==="block"&&o()>B&&(I.style.display="none"),tf()}let ac=[i("#b1"),i("#b2"),i("#b3")],ju=i("#lv"),Qu=i("#xp"),ef=i("#coins"),ns=[...document.querySelectorAll(".btn")];function tf(){[G.hunger,G.joy,G.energy].forEach((M,E)=>{ac[E].style.width=Math.max(6,M)+"%",ac[E].style.filter=M<25?"hue-rotate(-30deg) saturate(2)":""}),ju.textContent="Lv."+z(),Qu.style.width=G.xp%60/60*100+"%",ef.textContent="\u{1FA99} "+Math.floor(G.coins),ns[0].classList.toggle("on",N.classList.contains("show")),ns[1].classList.toggle("on",Gt.state!=="idle"),ns[3].classList.toggle("on",Ii.classList.contains("show")),ns[4].classList.toggle("on",!!Ve),ns[5].classList.toggle("on",!!Ut||Ui.classList.contains("show")),ns[6].classList.toggle("on",G.sleeping),N.querySelectorAll(".food").forEach((M,E)=>M.classList.toggle("no",G.coins<Qi[E].c))}let lc=performance.now();function cc(M){let E=Math.min(.05,(M-lc)/1e3);lc=M,Ku(E),l.render(c,h),requestAnimationFrame(cc)}requestAnimationFrame(cc),window.__naiwa={CH:oe,goOut:ic,goHome:jo,get OUT(){return Ut},applyWear:Rr,startGame:Jo,get G(){return Ve},CL:ze,giggle:St,catchphrase:Zn,andy:H,setChar:Qo,get CUR(){return xe},EGG:me,FRG:j,snap(M){let E=qe[M];for(let te of T)he[te]=E[te];he.ar=[...E.ar],he.al=[...E.al],ie(M,6e5)},S:G,A:he,FR:Ce,EX:qe,setExpr:ie,jump:tt,kick:Ze,SP:Fe,camera:h,frog:De,say:$,feed:jl,FOODS:Qi,get started(){return an},set started(M){an=M}},i("#go").textContent="\u70B9\u51FB\u9886\u517B"}setTimeout(Z_,60);})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
