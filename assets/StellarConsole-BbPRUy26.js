import{s as et,r as H,u as At,j as S}from"./index-BJXwNiW9.js";import{G as yt,D as _t,O as Ft,A as Dt,S as mt,M as Lt,a as le,b as He,c as he,d as Be,e as $t,C as _e,f as Fe,R as It,W as Pe,g as vt,L as Ve,H as Nt,h as bt,i as zt,P as tt,j as Wt,k as St,V as U,l as jt,m as kt,n as Gt,o as Ot,Q as Ht,E as Bt,p as ze,B as Vt,q as We,r as Yt,s as Ut,t as je,u as Xt}from"./three.module-BTbOs72h.js";const qt=["天枢","天璇","天玑","天权","玉衡","开阳","摇光"],Oe=[{main:"#FFD700",glow:"#FF8C00"},{main:"#8C8C8C",glow:"#4A4A4A"},{main:"#DAA520",glow:"#FFD966"},{main:"#1E90FF",glow:"#0A3D62"},{main:"#CD5C5C",glow:"#8B0000"},{main:"#D2691E",glow:"#A0522D"},{main:"#F0E68C",glow:"#FFF8DC"}],ke=qt.map((n,r)=>({name:n,shortName:et[r].shortName,serviceName:et[r].name,slug:et[r].slug}));function Mt(n){const r=parseInt(n.slice(1),16);return[r>>16&255,r>>8&255,r&255]}function B(n,r,a){return Math.round(n+(r-n)*a)}function Qt(n,r){const o=document.createElement("canvas");o.width=512,o.height=256;const t=o.getContext("2d"),[l,x,m]=Mt(n),D=t.createLinearGradient(0,0,0,256);D.addColorStop(0,`rgb(${B(l,255,.28)},${B(x,255,.28)},${B(m,255,.28)})`),D.addColorStop(.42,`rgb(${l},${x},${m})`),D.addColorStop(1,`rgb(${B(l,0,.62)},${B(x,0,.62)},${B(m,0,.62)})`),t.fillStyle=D,t.fillRect(0,0,512,256);let V=r*9301+49297;const f=()=>(V=(V*233280+9301)%2147483647,V%1e4/1e4),w=6+Math.floor(f()*6);for(let p=0;p<w;p++){const M=(p+.5)*(256/w)+(f()-.5)*12,b=4+f()*14,A=f()>.5,C=.1+f()*.2,z=A?`rgba(${B(l,0,C)},${B(x,0,C)},${B(m,0,C)},${.28+f()*.3})`:`rgba(${B(l,255,C)},${B(x,255,C)},${B(m,255,C)},${.22+f()*.28})`;t.fillStyle=z,t.beginPath(),t.moveTo(0,M);for(let d=0;d<=512;d+=16)t.lineTo(d,M+Math.sin(d*.02+p*2.4+r)*b*.4+(f()-.5)*3);for(let d=512;d>=0;d-=16)t.lineTo(d,M+b+Math.sin(d*.017+p*1.9)*b*.4);t.closePath(),t.fill()}const R=900;for(let p=0;p<R;p++){const M=f()*512,b=f()*256,A=.4+f()*1.8,C=f()>.5;t.fillStyle=C?`rgba(0,0,0,${.05+f()*.14})`:`rgba(255,255,255,${.04+f()*.12})`,t.beginPath(),t.arc(M,b,A,0,Math.PI*2),t.fill()}const N=5+Math.floor(f()*5);for(let p=0;p<N;p++){const M=f()*512,b=256*.15+f()*256*.7,A=6+f()*22,C=t.createRadialGradient(M,b,0,M,b,A);C.addColorStop(0,`rgba(${B(l,0,.3)},${B(x,0,.3)},${B(m,0,.3)},0.28)`),C.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=C,t.beginPath(),t.arc(M,b,A,0,Math.PI*2),t.fill()}const g=new _e(o);return g.colorSpace=Fe,g.wrapS=It,g}function Zt(n){const a=document.createElement("canvas");a.width=a.height=256;const i=a.getContext("2d"),[o,t,l]=Mt(n),x=i.createRadialGradient(128,128,0,128,128,128);x.addColorStop(0,`rgba(${o},${t},${l},0.75)`),x.addColorStop(.35,`rgba(${o},${t},${l},0.28)`),x.addColorStop(.7,`rgba(${o},${t},${l},0.08)`),x.addColorStop(1,`rgba(${o},${t},${l},0)`),i.fillStyle=x,i.fillRect(0,0,256,256);const m=new _e(a);return m.colorSpace=Fe,m}function Jt(){const r=document.createElement("canvas");r.width=r.height=128;const a=r.getContext("2d"),i=64,o=64,t=46;a.beginPath(),a.moveTo(i,o-t),a.quadraticCurveTo(i+t*.16,o-t*.16,i+t,o),a.quadraticCurveTo(i+t*.16,o+t*.16,i,o+t),a.quadraticCurveTo(i-t*.16,o+t*.16,i-t,o),a.quadraticCurveTo(i-t*.16,o-t*.16,i,o-t),a.closePath();const l=a.createRadialGradient(i,o,0,i,o,t);l.addColorStop(0,"#fff6d8"),l.addColorStop(.5,"#ffd166"),l.addColorStop(1,"#b8860b"),a.fillStyle=l,a.shadowColor="rgba(255,209,102,0.9)",a.shadowBlur=18,a.fill();const x=new _e(r);return x.colorSpace=Fe,x}const ht=[{x:.83,y:.325},{x:.81,y:.6875},{x:.59,y:.75},{x:.56,y:.4125},{x:.41,y:.4625},{x:.26,y:.55},{x:.08,y:.375}],Kt=152,xt=121,Te=-18,gt=-30,eo=[5.1,4.3,4.8,4.1,4.6,4.2,4.9],to=[.3,-.22,.36,-.28,.24,-.34,.28];function oo(n,r){const a=new yt;n.add(a);const i=[],o=new _t(16777215,2.5);o.position.set(-70,40,90);const t=new Ft;t.position.set(0,0,Te),n.add(t),o.target=t,n.add(o);const l=new Dt(8952251,.38);n.add(l);const x=ht.map((N,g)=>r+.3+g*.38),m=[],D=[];ht.forEach((N,g)=>{const p=Oe[g],M=eo[g],b=(N.x-.5)*Kt,A=(.5-N.y)*xt+gt,C=new mt(M,56,40),z=Qt(p.main,g+1),d=new Lt({map:z,roughness:.62,metalness:.12}),P=new le(C,d);P.position.set(b,A,Te),P.rotation.z=to[g],P.scale.setScalar(.001),P.userData={index:g,baseY:A,r:M},a.add(P);const te=Zt(p.glow),_=new He({map:te,transparent:!0,opacity:0,depthWrite:!1,blending:he}),v=new Be(_);v.position.set(b,A,Te-.4),v.scale.setScalar(M*4.2),a.add(v);const X=new mt(M*1.6,12,8),$=new $t({visible:!1}),F=new le(X,$);F.position.set(b,A,Te),F.userData={index:g},a.add(F),D.push({index:g,mesh:P,proxy:F,glowMat:_,glow:v,phase:g*1.13}),i.push(C,d,z,_,te,X,$)});const V=Jt(),f=new He({map:V,transparent:!0,opacity:0,depthWrite:!1,blending:he}),w=new Be(f);return w.position.set(0,(.5-.15)*xt+gt,Te+.5),w.scale.setScalar(6),a.add(w),i.push(f,V),{planets:D,lineMats:m,appearAt:x,sparkMat:f,spark:w,dispose:()=>{i.forEach(N=>N.dispose()),n.remove(a),n.remove(o),n.remove(l),n.remove(t)}}}const no=`
precision highp float;
attribute vec3 position;
uniform vec2 boundarySpace;
varying vec2 uv;
void main(){
  vec3 pos = position;
  vec2 scale = 1.0 - boundarySpace * 2.0;
  pos.xy = pos.xy * scale;
  uv = vec2(0.5) + pos.xy * 0.5;
  gl_Position = vec4(pos, 1.0);
}
`,ao=`
precision highp float;
uniform sampler2D velocity;
uniform float dt;
uniform float dissipation;
uniform vec2 fboSize;
varying vec2 uv;
void main(){
  vec2 ratio = max(fboSize.x, fboSize.y) / fboSize;
  vec2 spot_new = uv;
  vec2 vel_old = texture2D(velocity, uv).xy;
  vec2 spot_old = spot_new - vel_old * dt * ratio;
  vec2 vel_new1 = texture2D(velocity, spot_old).xy;
  vec2 spot_new2 = spot_old + vel_new1 * dt * ratio;
  vec2 error = spot_new2 - spot_new;
  vec2 spot_new3 = spot_new - error / 2.0;
  vec2 vel_2 = texture2D(velocity, spot_new3).xy;
  vec2 spot_old2 = spot_new3 - vel_2 * dt * ratio;
  vec2 newVel2 = texture2D(velocity, spot_old2).xy;
  gl_FragColor = vec4(newVel2 * dissipation, 0.0, 0.0);
}
`,so=`
precision highp float;
uniform vec2 force;
uniform vec2 center;
uniform vec2 scale;
uniform vec2 px;
varying vec2 vUv;
void main(){
  vec2 circle = (vUv - 0.5) * 2.0;
  float d = 1.0 - min(length(circle), 1.0);
  d *= d;
  gl_FragColor = vec4(force * d, 0.0, 1.0);
}
`,ro=`
precision highp float;
attribute vec3 position;
attribute vec2 uv;
uniform vec2 center;
uniform vec2 scale;
uniform vec2 px;
varying vec2 vUv;
void main(){
  vec2 pos = position.xy * scale * 2.0 * px + center;
  vUv = uv;
  gl_Position = vec4(pos, 0.0, 1.0);
}
`,io=`
precision highp float;
uniform sampler2D velocity;
uniform float dt;
uniform vec2 px;
varying vec2 uv;
void main(){
  float x0 = texture2D(velocity, uv - vec2(px.x, 0.0)).x;
  float x1 = texture2D(velocity, uv + vec2(px.x, 0.0)).x;
  float y0 = texture2D(velocity, uv - vec2(0.0, px.y)).y;
  float y1 = texture2D(velocity, uv + vec2(0.0, px.y)).y;
  float divergence = (x1 - x0 + y1 - y0) / 2.0;
  gl_FragColor = vec4(divergence / dt);
}
`,co=`
precision highp float;
uniform sampler2D pressure;
uniform sampler2D divergence;
uniform vec2 px;
varying vec2 uv;
void main(){
  float p0 = texture2D(pressure, uv + vec2(px.x * 2.0, 0.0)).r;
  float p1 = texture2D(pressure, uv - vec2(px.x * 2.0, 0.0)).r;
  float p2 = texture2D(pressure, uv + vec2(0.0, px.y * 2.0)).r;
  float p3 = texture2D(pressure, uv - vec2(0.0, px.y * 2.0)).r;
  float div = texture2D(divergence, uv).r;
  float newP = (p0 + p1 + p2 + p3) / 4.0 - div;
  gl_FragColor = vec4(newP);
}
`,lo=(n,r)=>`
precision highp float;
uniform sampler2D pressure;
uniform sampler2D velocity;
uniform vec2 px;
uniform float dt;
const float MAX_VEL = ${n.toFixed(4)};
const float DAMPING = ${r.toFixed(5)};
varying vec2 uv;
void main(){
  float p0 = texture2D(pressure, uv + vec2(px.x, 0.0)).r;
  float p1 = texture2D(pressure, uv - vec2(px.x, 0.0)).r;
  float p2 = texture2D(pressure, uv + vec2(0.0, px.y)).r;
  float p3 = texture2D(pressure, uv - vec2(0.0, px.y)).r;
  vec2 v = texture2D(velocity, uv).xy;
  vec2 gradP = vec2(p0 - p1, p2 - p3) * 0.5;
  v = (v - gradP * dt) * DAMPING;
  // 限制速度上限：避免快速挥动时平流一步跨越大半个屏幕导致流体瞬间摊平
  float m = length(v);
  if (m > MAX_VEL) v *= MAX_VEL / m;
  gl_FragColor = vec4(v, 0.0, 1.0);
}
`,po=`
precision highp float;
uniform sampler2D velocity;
uniform sampler2D palette;
uniform float uIntensity;
uniform float uBrightness;
uniform float uAlphaPow;
varying vec2 uv;
void main(){
  vec2 vel = texture2D(velocity, uv).xy;
  float lenv = clamp(length(vel) * uIntensity, 0.0, 1.0);
  vec3 c = texture2D(palette, vec2(lenv, 0.5)).rgb;
  float a = pow(lenv, uAlphaPow);
  gl_FragColor = vec4(c * a * uBrightness, a);
}
`;function wt(n){const r=Math.max(n.length,2),a=new Uint8Array(r*4),i=n.length===1?[n[0],n[0]]:n;for(let t=0;t<r;t++){const l=new St(i[t%i.length]);a[t*4+0]=Math.round(l.r*255),a[t*4+1]=Math.round(l.g*255),a[t*4+2]=Math.round(l.b*255),a[t*4+3]=255}const o=new jt(a,r,1,kt);return o.magFilter=Ve,o.minFilter=Ve,o.needsUpdate=!0,o}const uo={SIM_RES:.5,MOUSE_FORCE:18,CURSOR_SIZE:35,DT:.016,TRAIL_HALFLIFE:.3,POISSON_ITER:20,DIFF_CAP:.055,MAX_VEL:.6,VEL_DAMPING:.9985,INTENSITY:2.2,BRIGHTNESS:.9,ALPHA_POW:1.15};function fo(n,r,a,i={}){const o={...uo,...i},{SIM_RES:t,MOUSE_FORCE:l,CURSOR_SIZE:x,DT:m,TRAIL_HALFLIFE:D,POISSON_ITER:V,DIFF_CAP:f}=o;let w=Math.max(2,Math.round(r.clientWidth*t)),R=Math.max(2,Math.round(r.clientHeight*t));const N={type:Nt,depthBuffer:!1,stencilBuffer:!1,minFilter:Ve,magFilter:Ve,wrapS:vt,wrapT:vt},g=new Pe(w,R,N),p=new Pe(w,R,N),M=new Pe(w,R,N),b=new Pe(w,R,N),A=new Pe(w,R,N),C=[g,p,M,b,A],z=new U(1/w,1/R),d=new U(w,R),P=new bt,te=new zt,_=new tt(2,2),v=(u,L,h=no)=>new Wt({vertexShader:h,fragmentShader:u,uniforms:L,depthWrite:!1,depthTest:!1}),X=v(ao,{boundarySpace:{value:new U},velocity:{value:g.texture},fboSize:{value:d},dt:{value:m},dissipation:{value:.98}}),$=new le(_,X),F=v(so,{px:{value:z},force:{value:new U},center:{value:new U},scale:{value:new U(x,x)}},ro);F.blending=he;const j=new le(new tt(1,1),F),Se=v(io,{boundarySpace:{value:new U},velocity:{value:p.texture},px:{value:z},dt:{value:m}}),Me=new le(_,Se),q=v(co,{boundarySpace:{value:new U},pressure:{value:b.texture},divergence:{value:M.texture},px:{value:z}}),De=new le(_,q),de=v(lo(o.MAX_VEL,o.VEL_DAMPING),{boundarySpace:{value:new U},pressure:{value:b.texture},velocity:{value:p.texture},px:{value:z},dt:{value:m}}),xe=new le(_,de),ae=wt(a),J=v(po,{boundarySpace:{value:new U},velocity:{value:g.texture},palette:{value:ae},uIntensity:{value:o.INTENSITY},uBrightness:{value:o.BRIGHTNESS},uAlphaPow:{value:o.ALPHA_POW}});J.transparent=!0,J.blending=he,J.depthWrite=!1;const ge=new tt(2,2),pe=new le(ge,J);pe.frustumCulled=!1,pe.renderOrder=999;const ue=(u,L,h=!0)=>{P.clear(),P.add(u);const k=n.autoClear;n.autoClear=h,n.setRenderTarget(L),n.render(P,te),n.autoClear=k,n.setRenderTarget(null)};{const u=new St;n.getClearColor(u);const L=n.getClearAlpha();n.setClearColor(0,0),C.forEach(h=>{n.setRenderTarget(h),n.clear(!0,!1,!1)}),n.setRenderTarget(null),n.setClearColor(u,L)}const oe=new U(10,10),K=new U(10,10),ne=new U;let Ce=!1,Z=!0;const se=(u,L)=>{const h=r.getBoundingClientRect();if(h.width===0||h.height===0)return;if(!(u>=h.left&&u<=h.right&&L>=h.top&&L<=h.bottom)){oe.set(10,10),Z=!0;return}const G=(u-h.left)/h.width,ee=(L-h.top)/h.height;oe.set(G*2-1,-(ee*2-1)),Z&&(K.copy(oe),Z=!1),Ce=!0},Le=u=>se(u.clientX,u.clientY),we=u=>{u.touches.length===1&&se(u.touches[0].clientX,u.touches[0].clientY)};window.addEventListener("mousemove",Le,{passive:!0}),window.addEventListener("touchmove",we,{passive:!0});let re=0;return{update:()=>{if(!Ce)return;const u=performance.now(),L=re===0?m:Math.min((u-re)/1e3,.05);re=u,X.uniforms.dt.value=L,X.uniforms.dissipation.value=Math.pow(.5,L/D),ne.subVectors(oe,K),K.copy(oe);const h=ne.length();h>f&&ne.multiplyScalar(f/h),X.uniforms.velocity.value=g.texture,ue($,p),oe.x<5&&(F.uniforms.force.value.set(ne.x/2*l,ne.y/2*l),F.uniforms.center.value.copy(oe),ue(j,p,!1)),ne.multiplyScalar(.85),Se.uniforms.velocity.value=p.texture,ue(Me,M);for(let G=0;G<V;G++){const ee=G%2===0?b:A,ie=G%2===0?A:b;q.uniforms.pressure.value=ee.texture,q.uniforms.divergence.value=M.texture,ue(De,ie)}const k=V%2===0?b:A;de.uniforms.pressure.value=k.texture,de.uniforms.velocity.value=p.texture,ue(xe,g),J.uniforms.velocity.value=g.texture},mesh:pe,resize:(u,L)=>{w=Math.max(2,Math.round(u*t)),R=Math.max(2,Math.round(L*t)),z.set(1/w,1/R),d.set(w,R),C.forEach(h=>h.setSize(w,R))},setPalette:u=>{const L=wt(u);J.uniforms.palette.value=L,ae.dispose()},dispose:()=>{window.removeEventListener("mousemove",Le),window.removeEventListener("touchmove",we),C.forEach(u=>u.dispose()),_.dispose(),ge.dispose(),j.geometry.dispose(),[X,F,Se,q,de,J].forEach(u=>u.dispose()),ae.dispose()}}}const mo=[.312,-.234,.39,-.286,.338,-.39,.26],be=[{name:"幻紫",bg:"radial-gradient(ellipse 100% 80% at 50% 18%, #0d0438 0%, #030014 58%, #01000a 100%)",nebula:["#7c3aed","#2563eb","#ec4899"],starPalette:["#ffffff","#cfe0ff","#b8a6ff","#9fd8ff","#ffd9f2"],accent:"#8b5cf6"},{name:"极光",bg:"radial-gradient(ellipse 100% 80% at 50% 18%, #04332c 0%, #01141e 58%, #00090f 100%)",nebula:["#10b981","#06b6d4","#3b82f6"],starPalette:["#ffffff","#d2fff4","#a8ecff","#8ef0d2","#c9d8ff"],accent:"#22d3ee"},{name:"落日",bg:"radial-gradient(ellipse 100% 80% at 50% 18%, #3a130a 0%, #160310 58%, #0a0108 100%)",nebula:["#f97316","#e11d48","#f43f5e"],starPalette:["#fff6e8","#ffd9a8","#ffb08a","#ffc4d6","#ffffff"],accent:"#fb923c"},{name:"月白",bg:"radial-gradient(ellipse 100% 80% at 50% 18%, #16223f 0%, #070d1d 58%, #04060f 100%)",nebula:["#94a3b8","#7dd3fc","#c4b5fd"],starPalette:["#ffffff","#e8f1ff","#d7e4ff","#c2d4f5","#f2f7ff"],accent:"#9fd8ff"}],vo=`
attribute float aSize;
attribute vec3 aColor;
attribute vec2 aTw;
uniform float uTime;
uniform float uWarp;
uniform float uPixelRatio;
varying vec3 vColor;
varying float vTwinkle;
varying float vAngle;

void main() {
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  vec4 proj = projectionMatrix * mv;
  gl_Position = proj;

  vec2 ndc = proj.xy / max(proj.w, 0.0001);
  vAngle = length(ndc) > 0.02 ? atan(ndc.y, ndc.x) : 0.0;

  float tw = 0.55 + 0.45 * sin(uTime * aTw.x + aTw.y);
  float nearFade = smoothstep(6.0, 26.0 + uWarp * 38.0, -mv.z);
  vTwinkle = tw * nearFade;
  vColor = aColor;

  float size = aSize * (1.0 + uWarp * 1.1) * (380.0 / max(-mv.z, 1.0));
  gl_PointSize = min(size * uPixelRatio * (0.65 + 0.7 * tw), mix(96.0, 130.0, uWarp));
}
`,ho=`
uniform float uWarp;
varying vec3 vColor;
varying float vTwinkle;
varying float vAngle;

void main() {
  vec2 uv = gl_PointCoord - 0.5;
  float c = cos(vAngle);
  float s = sin(vAngle);
  vec2 r = vec2(uv.x * c - uv.y * s, uv.x * s + uv.y * c);

  // 曲速：沿屏幕径向拉伸（纵向慢衰减拉出长条，横向快衰减保持纤细）
  float st = mix(1.0, 14.0, uWarp);
  float aLong = exp(-(r.x * r.x) * mix(22.0, 5.0 / st, uWarp));
  float aPerp = exp(-(r.y * r.y) * mix(22.0, 110.0, uWarp));
  float d2 = r.x * r.x + r.y * r.y;
  float halo = exp(-d2 * 6.0) * 0.38 * (1.0 - uWarp);
  float a = clamp(aLong * aPerp * 1.25 + halo, 0.0, 1.0) * vTwinkle;
  if (a < 0.004) discard;
  gl_FragColor = vec4(vColor * a, a);
}
`;function Ct(n){const r=parseInt(n.slice(1),16);return[r>>16&255,r>>8&255,r&255]}function xo(n){const a=document.createElement("canvas");a.width=a.height=256;const i=a.getContext("2d"),[o,t,l]=Ct(n),x=[[.5,.5,.48,.5],[.36,.42,.26,.32],[.62,.58,.3,.28],[.5,.34,.2,.22],[.42,.64,.22,.2]];for(const[D,V,f,w]of x){const R=i.createRadialGradient(256*D,256*V,0,256*D,256*V,256*f);R.addColorStop(0,`rgba(${o},${t},${l},${w})`),R.addColorStop(.55,`rgba(${o},${t},${l},${w*.36})`),R.addColorStop(1,`rgba(${o},${t},${l},0)`),i.fillStyle=R,i.fillRect(0,0,256,256)}const m=new _e(a);return m.colorSpace=Fe,m}function go(){const a=document.createElement("canvas");a.width=256,a.height=16;const i=a.getContext("2d"),o=i.createLinearGradient(0,0,256,0);o.addColorStop(0,"rgba(255,255,255,0)"),o.addColorStop(.75,"rgba(190,215,255,0.55)"),o.addColorStop(1,"rgba(255,255,255,0.95)"),i.fillStyle=o,i.fillRect(0,0,256,16);const t=new _e(a);return t.colorSpace=Fe,t}const Ae=700,wo=.05,Ge=68*Math.PI/180;function So({showPlanets:n=!1}){const r=H.useRef(null),a=H.useRef(null),i=H.useRef(null),[o,t]=H.useState(0),[l,x]=H.useState(!1),[m,D]=H.useState(null),[V,f]=H.useState(!1),[w,R]=H.useState(!1),N=H.useRef(0),g=H.useRef(!1),p=H.useRef(null),M=H.useRef(null),b=H.useRef(null),A=At(),C=H.useRef(A);C.current=A,N.current=o,g.current=l,p.current=m,H.useEffect(()=>{const d=r.current;if(!d)return;const P=window.matchMedia("(prefers-reduced-motion: reduce)").matches,te=window.matchMedia("(pointer: coarse)").matches||window.innerWidth<768,_=te?6500:12e3,v=new Gt({antialias:!1,alpha:!0,powerPreference:"high-performance"});v.setPixelRatio(Math.min(window.devicePixelRatio,2)),v.setSize(d.clientWidth,d.clientHeight),v.domElement.style.position="absolute",v.domElement.style.inset="0",v.domElement.style.touchAction="none",d.appendChild(v.domElement);const X=new bt,$=new Ot(60,d.clientWidth/d.clientHeight,.1,1200);$.position.set(0,0,140);const F=new yt;X.add(F);const j=n?oo(F,1):null,Se=j?j.planets.map(e=>e.proxy):[];let Me=null;const q=new ze,De=new ze,de=(e,s)=>{if(!j)return null;const c=v.domElement.getBoundingClientRect(),E=new U((e-c.left)/c.width*2-1,-((s-c.top)/c.height*2-1)),Q=new Xt;Q.setFromCamera(E,$);const me=Q.intersectObjects(Se,!1);return me.length>0?me[0].object.userData.index:null},xe=new Float32Array(_*3),ae=new Float32Array(_*3),J=new Float32Array(_),ge=new Float32Array(_*2),pe=new Float32Array(_),ue=new Bt(.42,0,-.32),oe=new Ht().setFromEuler(ue),K=new ze,ne=()=>(Math.random()+Math.random()+Math.random()-1.5)/1.5;for(let e=0;e<_;e++){if(pe[e]=Math.random(),e<_*.45){const s=Math.random()*Math.PI*2,c=190+ne()*105;K.set(Math.cos(s)*c,ne()*20,Math.sin(s)*c*.82),K.applyQuaternion(oe)}else{const s=70+Math.random()*260,c=Math.random()*Math.PI*2,E=Math.acos(2*Math.random()-1);K.set(s*Math.sin(E)*Math.cos(c),s*Math.sin(E)*Math.sin(c),s*Math.cos(E))}xe[e*3]=K.x,xe[e*3+1]=K.y,xe[e*3+2]=K.z,J[e]=1.5+Math.pow(Math.random(),2.5)*5.2,ge[e*2]=.6+Math.random()*2.2,ge[e*2+1]=Math.random()*Math.PI*2}const Ce=e=>{const s=be[e].starPalette;for(let c=0;c<_;c++){const E=s[Math.floor(pe[c]*s.length)],[Q,me,y]=Ct(E),T=.72+pe[(c+7)%_]*.28;ae[c*3]=Q/255*T,ae[c*3+1]=me/255*T,ae[c*3+2]=y/255*T}Z.attributes.aColor.needsUpdate=!0},Z=new Vt;Z.setAttribute("position",new We(xe,3)),Z.setAttribute("aColor",new We(ae,3)),Z.setAttribute("aSize",new We(J,1)),Z.setAttribute("aTw",new We(ge,2));const se=new Yt({vertexShader:vo,fragmentShader:ho,uniforms:{uTime:{value:0},uWarp:{value:0},uPixelRatio:{value:v.getPixelRatio()}},transparent:!0,depthWrite:!1,blending:he}),Le=new Ut(Z,se);F.add(Le),Ce(0);const we=be.map(e=>e.nebula.map(xo)),re=[],ot=te?8:14;for(let e=0;e<ot;e++){const s=e%3,c=new He({map:we[0][s],transparent:!0,opacity:.32+Math.random()*.22,depthWrite:!1,blending:he}),E=new Be(c),Q=130+Math.random()*210;E.scale.set(Q,Q*(.7+Math.random()*.5),1),E.position.set((Math.random()-.5)*480,(Math.random()-.5)*300,-80-Math.random()*240),E.material.rotation=Math.random()*Math.PI*2,F.add(E),re.push({sprite:E,colorIdx:s,drift:.008+Math.random()*.02})}const nt=e=>{Ce(e);for(const s of re)s.sprite.material.map=we[e][s.colorIdx],s.sprite.material.needsUpdate=!0;h?.setPalette(be[e].nebula)};M.current={setTheme:nt};const Ye=go(),fe=[];let u=2500;const L=e=>{if(te||P||fe.length>=2)return;const s=new He({map:Ye,transparent:!0,opacity:0,depthWrite:!1,blending:he}),c=new Be(s);c.position.set(80+Math.random()*180,40+Math.random()*120,-140-Math.random()*120);const E=new ze(-(120+Math.random()*80),-(40+Math.random()*40),0),Q=38+Math.random()*22;c.scale.set(Q,2.4,1),F.add(c),fe.push({sprite:c,velocity:E,life:0,maxLife:1.3+Math.random()*.5}),u=e+4200+Math.random()*5200},h=te?null:fo(v,d,be[N.current].nebula);h&&X.add(h.mesh);let k=0,G=0,ee=0,ie=0,W=0,$e=0,Ee=!1,Ue=0,Xe=0,at=0,st=0,rt=0;const Y=v.domElement,it=e=>{Ee=!0,Ue=at=e.clientX,Xe=st=e.clientY,rt=performance.now(),Y.setPointerCapture(e.pointerId),D(null)},ct=e=>{if(Ee){const s=e.clientX-Ue,c=e.clientY-Xe;Ue=e.clientX,Xe=e.clientY,ie=s*.0032,ee=c*.0032,G+=ie,k=je.clamp(k+ee,-Ge,Ge);return}if(j){const s=de(e.clientX,e.clientY);s!==Me?(Me=s,s===null?(D(null),Y.style.cursor="grab"):D({i:s,x:e.clientX,y:e.clientY,above:!1})):s!==null&&p.current&&p.current.i===s&&D({i:s,x:e.clientX,y:e.clientY,above:p.current.above}),s!==null&&(Y.style.cursor="pointer")}},Ie=e=>{if(!Ee)return;Ee=!1;const s=Math.hypot(e.clientX-at,e.clientY-st),c=performance.now()-rt;if(s<7&&c<800){const E=j?de(e.clientX,e.clientY):null;E!=null&&C.current(`/capabilities/${ke[E].slug}`)}try{Y.releasePointerCapture(e.pointerId)}catch{}},lt=e=>{const s=e.deltaY*.32,c=je.clamp(W+s,0,Ae);Math.abs(c-W)>.001&&(e.deltaY>0?W<Ae:W>0)&&(e.preventDefault(),W=c)};let qe=!1;b.current=()=>{qe=!0,ee=0,ie=0},Y.addEventListener("pointerdown",it),Y.addEventListener("pointermove",ct),Y.addEventListener("pointerup",Ie),Y.addEventListener("pointercancel",Ie),Y.addEventListener("wheel",lt,{passive:!1});const dt=()=>{const e=d.clientWidth,s=d.clientHeight;$.aspect=e/s,$.updateProjectionMatrix(),v.setSize(e,s),se.uniforms.uPixelRatio.value=v.getPixelRatio(),h?.resize(e,s)};window.addEventListener("resize",dt);let pt=!0;const ut=new IntersectionObserver(([e])=>{pt=e.isIntersecting});ut.observe(d);let Qe=0,Ze=performance.now();const Et=Ze,ft=e=>{Qe=requestAnimationFrame(ft);const s=Math.min((e-Ze)/1e3,.05);if(Ze=e,!pt||document.visibilityState==="hidden")return;const c=e-Et,E=g.current&&!P?1:0;$e+=(E-$e)*Math.min(s*3.2,1),g.current&&(W=Math.min(W+110*s,Ae),W>=Ae-.5&&x(!1)),$.fov=60+$e*42,$.updateProjectionMatrix(),$.position.z=140-W*.2,se.uniforms.uWarp.value=$e,se.uniforms.uTime.value=P?0:c/1e3,qe?(ee=0,ie=0,G+=(0-G)*Math.min(s*3.4,1),k+=(0-k)*Math.min(s*3.4,1),W+=(0-W)*Math.min(s*3.4,1),Math.abs(G)<.002&&Math.abs(k)<.002&&W<.5&&(G=0,k=0,W=0,qe=!1)):Ee||(ee*=.94,ie*=.94,G+=ie+(P?0:16e-5),k=je.clamp(k+ee,-Ge,Ge)),F.rotation.y=G,F.rotation.x=k;const Q=Math.abs(G)>.35||Math.abs(k)>.25||W>40;f(y=>y===Q?y:Q);const me=W>=Ae-60;if(R(y=>y===me?y:me),j){const y=c/1e3;$.getWorldPosition(De);const T=.4;y>T&&(j.sparkMat.opacity=Math.min((y-T)*1.2,.95),j.spark.scale.setScalar(6*(.92+.08*Math.sin(y*2.2))));for(const O of j.planets){const ye=j.appearAt[O.index];if(y<=ye)continue;const ce=Math.min((y-ye)/.8,1),Je=1-Math.pow(1-ce,3),Ne=Me===O.index,I=O.mesh,Re=Je*(Ne?2:1),ve=I.scale.x;I.scale.setScalar(ve+(Re-ve)*.18),P||(I.rotation.y+=mo[O.index]*.016,I.position.y=I.userData.baseY+Math.sin(y*.7+O.phase)*.55,O.proxy.position.y=I.position.y);const Rt=I.getWorldPosition(q).distanceTo(De),Ke=je.clamp((Rt-6)/12,0,1);I.material.opacity=Ke,I.material.transparent=Ke<1;const Pt=.78+.42*Math.sin(y*1.6+O.phase);O.glowMat.opacity=Math.min(Je*Pt*(Ne?1.6:1),1)*Ke;const Tt=I.userData.r*4.2*(1+.12*Math.sin(y*1.6+O.phase));O.glow.scale.setScalar(Tt*I.scale.x),O.glow.position.set(I.position.x,I.position.y,I.position.z-.4)}if(p.current&&i.current){const O=p.current.i;j.planets[O].mesh.getWorldPosition(q).project($);const ce=v.domElement.getBoundingClientRect();if(q.z<1&&Math.abs(q.x)<1.15&&Math.abs(q.y)<1.15){const Ne=(q.x*.5+.5)*ce.width,I=(-q.y*.5+.5)*ce.height,Re=I>ce.height*.62,ve=i.current;ve.style.opacity="1",ve.style.transform=`translate(-50%, ${Re?"-118%":"22%"})`,ve.style.left=`${Ne.toFixed(1)}px`,ve.style.top=`${I.toFixed(1)}px`,p.current.above!==Re&&D({...p.current,above:Re})}else i.current.style.opacity="0"}}for(const y of re)y.sprite.material.rotation+=y.drift*s;c>u&&L(c);for(let y=fe.length-1;y>=0;y--){const T=fe[y];T.life+=s,T.sprite.position.addScaledVector(T.velocity,s);const O=Math.sin(Math.min(T.life/T.maxLife,1)*Math.PI);T.sprite.material.opacity=O*.9;const ye=T.sprite.position.clone().project($),ce=T.sprite.position.clone().add(T.velocity).project($);T.sprite.material.rotation=Math.atan2(ce.y-ye.y,ce.x-ye.x),T.life>=T.maxLife&&(F.remove(T.sprite),T.sprite.material.dispose(),fe.splice(y,1))}h?.update(),a.current&&(a.current.textContent=(W*wo).toFixed(1)),v.render(X,$)};return Qe=requestAnimationFrame(ft),()=>{cancelAnimationFrame(Qe),ut.disconnect(),window.removeEventListener("resize",dt),Y.removeEventListener("pointerdown",it),Y.removeEventListener("pointermove",ct),Y.removeEventListener("pointerup",Ie),Y.removeEventListener("pointercancel",Ie),Y.removeEventListener("wheel",lt),Z.dispose(),se.dispose(),j?.dispose(),we.flat().forEach(e=>e.dispose()),re.forEach(e=>e.sprite.material.dispose()),fe.forEach(e=>e.sprite.material.dispose()),Ye.dispose(),h?.dispose(),v.dispose(),d.removeChild(v.domElement)}},[]);const z=be[o];return S.jsxs("div",{"code-path":"src/components/StellarConsole.tsx:689:5",className:"absolute inset-0",style:{background:z.bg,transition:"background 0.8s ease"},children:[S.jsx("div",{"code-path":"src/components/StellarConsole.tsx:690:7",ref:r,className:"absolute inset-0 cursor-grab active:cursor-grabbing","aria-hidden":"true"}),S.jsx("div",{"code-path":"src/components/StellarConsole.tsx:693:7",className:"pointer-events-none absolute inset-x-0 bottom-0 z-20 flex justify-center pb-5",children:S.jsxs("div",{"code-path":"src/components/StellarConsole.tsx:694:9",className:"pointer-events-auto flex flex-wrap items-center justify-center gap-x-5 gap-y-2 rounded-2xl border border-white/10 bg-deep-950/55 px-5 py-2.5 backdrop-blur-xl max-sm:mx-4",children:[S.jsx("span",{"code-path":"src/components/StellarConsole.tsx:695:11",className:"font-display hidden text-[10px] tracking-[0.3em] text-white/40 md:inline",children:"STELLAR CONSOLE"}),S.jsxs("span",{"code-path":"src/components/StellarConsole.tsx:700:11",className:"flex items-baseline gap-1.5 font-display text-xs text-white/70",children:[S.jsx("span",{"code-path":"src/components/StellarConsole.tsx:701:13",className:"text-white/40",children:"穿越深度"}),S.jsx("span",{"code-path":"src/components/StellarConsole.tsx:702:13",ref:a,className:"w-9 text-right text-sm font-semibold tabular-nums",style:{color:z.accent},children:"0.0"}),S.jsx("span",{"code-path":"src/components/StellarConsole.tsx:705:13",className:"text-white/40",children:"ly"})]}),S.jsx("span",{"code-path":"src/components/StellarConsole.tsx:709:11",className:"flex items-center gap-1.5",children:be.map((d,P)=>S.jsx("button",{"code-path":"src/components/StellarConsole.tsx:711:15",onClick:()=>{t(P),M.current?.setTheme(P)},className:`rounded-full border px-2.5 py-1 text-[11px] transition-all duration-300 ${P===o?"border-white/50 text-white shadow-[0_0_12px_rgba(255,255,255,0.25)]":"border-white/15 text-white/50 hover:border-white/35 hover:text-white/80"}`,style:P===o?{background:`${d.accent}33`,borderColor:`${d.accent}88`}:void 0,children:d.name},d.name))}),S.jsx("button",{"code-path":"src/components/StellarConsole.tsx:730:11",onClick:()=>x(d=>!d),className:`rounded-full px-3.5 py-1 text-[11px] font-semibold transition-all duration-300 ${l?"text-deep-950":"text-white/85 hover:text-white"}`,style:l?{background:z.accent,boxShadow:`0 0 22px ${z.accent}aa`}:{border:`1px solid ${z.accent}66`},children:l?"◉ 曲速中…":"✦ 曲速穿越"}),V&&S.jsx("button",{"code-path":"src/components/StellarConsole.tsx:746:13",onClick:()=>b.current?.(),className:"rounded-full border border-white/25 px-3 py-1 text-[11px] text-white/70 transition-all duration-300 hover:border-white/50 hover:text-white",children:"⟲ 复位视角"})]})}),w&&S.jsx("div",{"code-path":"src/components/StellarConsole.tsx:758:9",className:"pointer-events-none absolute inset-x-0 bottom-20 z-20 flex justify-center",children:S.jsx("span",{"code-path":"src/components/StellarConsole.tsx:759:11",className:"rounded-full border border-white/15 bg-deep-950/70 px-4 py-1.5 text-[11px] tracking-widest text-white/60 backdrop-blur-md",children:"已抵达本次穿越边界 · 向上滚动返回页面"})}),m&&S.jsxs("div",{"code-path":"src/components/StellarConsole.tsx:767:9",ref:i,className:"pointer-events-none absolute z-30 w-52 rounded-xl border p-3 backdrop-blur-xl transition-opacity duration-150",style:{borderColor:`${Oe[m.i].glow}77`,background:"rgba(6,10,26,0.92)",boxShadow:`0 0 30px ${Oe[m.i].glow}55`},children:[S.jsxs("div",{"code-path":"src/components/StellarConsole.tsx:776:11",className:"flex items-center gap-1.5 text-[10px] tracking-widest",style:{color:Oe[m.i].main},children:[S.jsx("span",{"code-path":"src/components/StellarConsole.tsx:777:13",children:"✦"}),S.jsx("span",{"code-path":"src/components/StellarConsole.tsx:778:13",children:ke[m.i].name})]}),S.jsx("div",{"code-path":"src/components/StellarConsole.tsx:780:11",className:"mt-1 text-sm font-semibold text-white",children:ke[m.i].shortName}),S.jsx("div",{"code-path":"src/components/StellarConsole.tsx:781:11",className:"mt-0.5 text-[11px] leading-snug text-white/60",children:ke[m.i].serviceName})]}),S.jsx("div",{"code-path":"src/components/StellarConsole.tsx:786:7",className:"pointer-events-none absolute right-5 top-24 z-20 hidden flex-col items-end gap-1 text-right md:flex",children:S.jsx("span",{"code-path":"src/components/StellarConsole.tsx:787:9",className:"text-[10px] tracking-[0.25em] text-white/30",children:"拖拽旋转 · 滚轮穿越 · 移动搅动以太"})})]})}export{So as default};
