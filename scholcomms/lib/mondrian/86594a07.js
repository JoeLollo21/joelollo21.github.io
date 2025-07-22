"use strict";(self.webpackChunk_articulate_mondrian_bundles=self.webpackChunk_articulate_mondrian_bundles||[]).push([[148],{4148:(e,t,i)=>{i.r(t),i.d(t,{default:()=>Fa,searchItemsByLesson:()=>Da}),i(1999),i(921);var a=i(6936),n=i(8350);const r="ItemRenderingContext";function o(){const e=(0,n.getContext)(r);if(!e)throw new Error("This component must be provided with an ItemRenderingContext");return e}var s=a.vs('<link rel="prefetch" as="image">');const l="isLearn",c=()=>(0,n.getContext)(l)??!1;function d(e){return`assets/${e}`}var p=i(7417),h=i(4982);const u=e=>{if(e<=0||isNaN(e))return;const t=Math.min(Math.floor(e/3600),0),i=Math.floor(e/60)-60*t;return{hours:t,minutes:i,seconds:e-60*i-3600*t}},g=e=>e.map((e=>e.toString().padStart(2,"0"))),m=(e,t=!0)=>{const i=u(e);if(!i)return(t?"":"0")+"0:00";const{hours:a,minutes:n,seconds:r}=i,o=a>0?[a,n,r]:[n,r],[s,...l]=o;return(t?[s,...g(l)]:g(o)).join(":")},v=e=>{const t=u(e);if(!t)return"0 seconds";const{hours:i,minutes:a,seconds:n}=t;let r="";return i>0&&(r+=`${new Intl.NumberFormat(void 0,{style:"unit",unit:"hour",unitDisplay:"long"}).format(i)} `),a>0&&(r+=`${new Intl.NumberFormat(void 0,{style:"unit",unit:"minute",unitDisplay:"long"}).format(a)} `),r+=new Intl.NumberFormat(void 0,{style:"unit",unit:"second",unitDisplay:"long"}).format(Math.round(n)),r};function b(e,t,i,a){return t.addEventListener(e,i,a),()=>{t.removeEventListener(e,i,a)}}function f(e=window.document){const t=e.activeElement;return t?t.shadowRoot?f(t.shadowRoot):t:null}let z=[];function y(e){const t=z.findIndex((t=>t.element===e));t>=0&&z.splice(t,1),e.hidePopover()}const x=(()=>{const e=document.createElement("div");e.style.visibility="hidden",e.style.overflowX="hidden",e.style.overflowY="scroll",document.body.appendChild(e);const t=e.offsetWidth-e.scrollWidth;return e.remove(),t})();function w(e,t,i){return t<e?e:t>i?i:t}function C({fromPoint:e,fromValue:t,toPoint:i,toValue:a},n){const r=n.x-e.x,o=n.y-e.y,s=i.x-e.x,l=i.y-e.y,c=(r*s+o*l)/(s*s+l*l);return(1-c)*t+c*a}function k({fromPoint:e,fromValue:t,toPoint:i,toValue:a},n){const r=(n-t)/(a-t),o=1-r;return{x:e.x*o+i.x*r,y:e.y*o+i.y*r}}function L({fromPoint:e,i:t,j:i},a){const n=k({fromPoint:e,...t},a.x),r=k({fromPoint:e,...i},a.y);return{x:n.x+r.x-e.x,y:n.y+r.y-e.y}}document.body.style.setProperty("--ua-scrollbar-width",`${x}px`);const{sqrt:S,min:I,atan2:M,tan:T,PI:B,abs:J}=Math;function A(e,t,i){const a=I(.5*e.l,.5*t.l,i);if(a<.1)return null;let n=1,r=M(e.y0-e.y3,e.x0-e.x3)-M(t.y3-t.y0,t.x3-t.x0);r<0&&(r=-r,n^=1),r>B&&(r=2*B-r,n^=1);const o=T(.5*r)*a;if(o<.1||o>1e6)return null;const s=1-a/e.l,l=a/t.l,c=e.x0*(1-s)+e.x3*s,d=e.y0*(1-s)+e.y3*s,p=t.x0*(1-l)+t.x3*l,h=t.y0*(1-l)+t.y3*l;return e.x2=c,e.y2=d,t.x1=p,t.y1=h,`a ${o} ${o} 0 0 ${n} ${p-c},${h-d}`}function Z(e,t,i,a,n){if(t.length<2)throw new Error("emitPathRounded must have at least two path components!");const r=[],{p:{x:o,y:s}}=e;let l=o,c=s;function d(e,t){const i=e.x,r=e.y,o=`${(i-l)*a},${(r-c)*n}`;return t&&(l=i,c=r),o}function p(e,t){const i=e.x,r=e.y,o=`${i*a},${r*n}`;return t&&(l+=i,c+=r),o}function h(e,t,i){let o=e,s=t;i&&(o+=l,s+=c);const d=l*a,p=c*n,h=o*a,u=s*n,g=d-h,m=p-u,v=S(g*g+m*m);r.push({x0:d,y0:p,x1:d,y1:p,x2:h,y2:u,x3:h,y3:u,l:v}),l=o,c=s}for(const e of t)switch(e.cmd){case"T":r.push(`t ${d(e.p,!0)}`);break;case"t":r.push(`t ${p(e.p,!0)}`);break;case"Q":r.push(`q ${d(e.c,!1)} ${d(e.p,!0)}`);break;case"q":r.push(`q ${p(e.c,!1)} ${p(e.p,!0)}`);break;case"S":r.push(`s ${d(e.c,!1)} ${d(e.p,!0)}`);break;case"s":r.push(`s ${p(e.c,!1)} ${p(e.p,!0)}`);break;case"C":r.push(`c ${d(e.c1,!1)} ${d(e.c2,!1)} ${d(e.p,!0)}`);break;case"c":r.push(`c ${p(e.c1,!1)} ${p(e.c2,!1)} ${p(e.p,!0)}`);break;case"A":r.push(`a ${e.radius.x*a} ${e.radius.y*n} ${e.angle} ${+e.large} ${+e.sweep} ${d(e.p,!0)}`);break;case"a":r.push(`a ${e.radius.x*a} ${e.radius.y*n} ${e.angle} ${+e.large} ${+e.sweep} ${p(e.p,!0)}`);break;case"H":h(e.v,c,!1);break;case"h":h(e.v,0,!0);break;case"V":h(l,e.v,!1);break;case"v":h(0,e.v,!0);break;case"L":h(e.p.x,e.p.y,!1);break;case"l":h(e.p.x,e.p.y,!0)}return(J(l-o)>.01||J(c-s)>.01)&&h(o,s,!1),function(e,t,i,a){const n=[];for(let e=0;e<i.length;e+=1){const t=i[e],r=i[e+1]??i[0];if(n.push(t),"string"!=typeof t&&"string"!=typeof r){const e=A(t,r,a);e&&n.push(e)}}const r=n[0],o=["string"==typeof r?`m ${e},${t}`:`m ${r.x1},${r.y1}`];for(const e of n)o.push("string"==typeof e?e:`l ${e.x2-e.x1},${e.y2-e.y1}`);return o.push("z"),o.join(" ")}(o,s,r,i)}function R({width:e,height:t}){return{fromPoint:{x:0,y:0},i:{fromValue:1,toPoint:{x:e,y:0},toValue:0},j:{fromValue:.5,toPoint:{x:0,y:t},toValue:-.5}}}const H={discriminator:"arrow",clipPath({cornerRounding:e,thickness:t,headLength:i},{width:a,height:n}){const r=1-i;return Z({cmd:"M",p:{x:0,y:.5-t}},[{cmd:"H",v:r},{cmd:"V",v:0},{cmd:"L",p:{x:1,y:.5}},{cmd:"L",p:{x:r,y:1}},{cmd:"V",v:.5+t},{cmd:"H",v:0}],e,a,n)},textExtents({thickness:e,headLength:t}){const i=.5-e;return{left:0,top:i,width:2*i*t+(1-t),height:.5+e-i}},getControlPoints:({thickness:e,headLength:t},i,a,n,r)=>[{position:L(R(i),{x:t,y:e}),style:"normal"}],dragControlPoint(e,t,i,a,n,r){const o=function({fromPoint:e,i:t,j:i},a){return{x:C({fromPoint:e,...t},a),y:C({fromPoint:e,...i},a)}}(R(t),a);return{...e,thickness:w(.1,o.y,.5),headLength:w(.1,o.x,.9)}}},_={discriminator:"bookmark",textExtents:({cutoutInset:e})=>({left:0,top:0,width:1,height:1-e}),clipPath:({cornerRounding:e,cutoutInset:t},{width:i,height:a})=>Z({cmd:"M",p:{x:0,y:0}},[{cmd:"L",p:{x:0,y:1}},{cmd:"L",p:{x:.5,y:1-t}},{cmd:"L",p:{x:1,y:1}},{cmd:"L",p:{x:1,y:0}},{cmd:"L",p:{x:0,y:0}}],e,i,a),getControlPoints:({cutoutInset:e},t)=>[{position:k(V(t)[0],e),style:"normal"}],dragControlPoint:(e,t,i,a)=>({...e,cutoutInset:w(0,C(V(t)[i],a),.8)})};function V({width:e,height:t}){const i=.5*e;return[{fromPoint:{x:i,y:.2*t},fromValue:.8,toPoint:{x:i,y:t},toValue:0}]}function $({width:e,height:t}){return[{fromPoint:{x:.3*e,y:.5*t},fromValue:.3,toPoint:{x:0,y:.5*t},toValue:0},{fromPoint:{x:.7*e,y:.5*t},fromValue:.7,toPoint:{x:1*e,y:.5*t},toValue:1}]}const F={discriminator:"chevron",clipPath:({cornerRounding:e,insideCenterXCoord:t,outsideCornerXCoords:i},{width:a,height:n})=>Z({cmd:"M",p:{x:0,y:0}},[{cmd:"L",p:{x:i,y:0}},{cmd:"L",p:{x:1,y:.5}},{cmd:"L",p:{x:i,y:1}},{cmd:"L",p:{x:0,y:1}},{cmd:"L",p:{x:t,y:.5}},{cmd:"L",p:{x:0,y:0}}],e,a,n),textExtents:({insideCenterXCoord:e,outsideCornerXCoords:t})=>({left:e,top:0,width:t-e,height:1}),getControlPoints({insideCenterXCoord:e,outsideCornerXCoords:t},i){const a=$(i);return[e,t].map(((e,t)=>({position:k(a[t],e),style:"normal"})))},dragControlPoint(e,t,i,a){const n=C($(t)[i],a),r={...e};switch(i){case 0:r.insideCenterXCoord=w(0,n,.3);break;case 1:r.outsideCornerXCoords=w(.7,n,1)}return r}},P=[{cmd:"M",p:{x:217.234,y:57.006}},{cmd:"C",c1:{x:217.785,y:54.084},c2:{x:218.073,y:51.069},p:{x:218.073,y:47.986}},{cmd:"C",c1:{x:218.073,y:21.4841},c2:{x:196.796,y:0},p:{x:170.549,y:0}},{cmd:"C",c1:{x:154.49,y:0},c2:{x:140.291,y:8.043},p:{x:131.689,y:20.3575}},{cmd:"C",c1:{x:123.43,y:13.3566},c2:{x:112.778,y:9.1402},p:{x:101.151,y:9.1402}},{cmd:"C",c1:{x:75.1559,y:9.1402},c2:{x:54.036,y:30.2136},p:{x:53.6331,y:56.364}},{cmd:"C",c1:{x:24.4644,y:56.364},c2:{x:.82373,y:80.235},p:{x:.82373,y:109.682}},{cmd:"C",c1:{x:.82373,y:139.129},c2:{x:24.4644,y:163},p:{x:53.6272,y:163}},{cmd:"L",p:{x:209.021,y:163}},{cmd:"C",c1:{x:238.183,y:163},c2:{x:261.824,y:139.129},p:{x:261.824,y:109.682}},{cmd:"C",c1:{x:261.824,y:83.056},c2:{x:242.496,y:60.99},p:{x:217.234,y:57.006}},{cmd:"Z"}],j={left:20/262,top:50/163,width:222/262,height:113/163},E={discriminator:"cloud",clipPath:(e,{width:t,height:i})=>function(e,t=1,i=1){const a=[];let n=0,r=0;function o(e,a){const o=e.x,s=e.y,l=`${(o-n)*t},${(s-r)*i}`;return a&&(n=o,r=s),l}function s(e,a){const o=e.x,s=e.y,l=`${o*t},${s*i}`;return a&&(n+=o,r+=s),l}for(const l of e)switch(a.push(l.cmd.toLowerCase()),l.cmd){case"M":case"L":case"T":a.push(o(l.p,!0));break;case"m":case"l":case"t":a.push(s(l.p,!0));break;case"H":a.push(o({x:l.v,y:r},!0));break;case"V":a.push(o({x:n,y:l.v},!0));break;case"h":a.push(s({x:l.v,y:0},!0));break;case"v":a.push(s({x:0,y:l.v},!0));break;case"C":a.push(o(l.c1,!1),o(l.c2,!1),o(l.p,!0));break;case"c":a.push(s(l.c1,!1),s(l.c2,!1),s(l.p,!0));break;case"S":case"Q":a.push(o(l.c,!1),o(l.p,!0));break;case"s":case"q":a.push(s(l.c,!1),s(l.p,!0));break;case"A":a.push(l.radius.x*t,l.radius.y*i,l.angle,+l.large,+l.sweep,o(l.p,!0));break;case"a":a.push(l.radius.x,l.radius.y,l.angle,+l.large,+l.sweep,s(l.p,!0))}return a.join(" ")}(P,t/262,i/163),textExtents:e=>j},D={left:(1-Math.SQRT1_2)/2,top:(1-Math.SQRT1_2)/2,width:Math.SQRT1_2,height:Math.SQRT1_2},O={discriminator:"ellipse",clipPath(e,{width:t,height:i}){let a="m 0 0";return a+=` m ${t} ${i/2}`,a+=` a ${t/2} ${i/2} 0 0 1 ${-t},0`,a+=` a ${t/2} ${i/2} 0 0 1 ${t},0`,a+=" z",a},textExtents:e=>D},N={left:(1-Math.SQRT1_2)/2,top:(1-Math.SQRT1_2)/2,width:Math.SQRT1_2,height:Math.SQRT1_2},q={discriminator:"octagon",clipPath({cornerRounding:e},{width:t,height:i}){const a=Math.min(t,i)/(1+Math.SQRT2)/Math.SQRT2;return Z({cmd:"M",p:{x:a,y:0}},[{cmd:"L",p:{x:t-a,y:0}},{cmd:"L",p:{x:t,y:a}},{cmd:"L",p:{x:t,y:i-a}},{cmd:"L",p:{x:t-a,y:i}},{cmd:"L",p:{x:a,y:i}},{cmd:"L",p:{x:0,y:i-a}},{cmd:"L",p:{x:0,y:a}},{cmd:"L",p:{x:a,y:0}}],e,1,1)},textExtents:e=>N},U={discriminator:"parallelogram",textExtents:({shear:e})=>e>.45?{left:.45,top:0,width:0,height:1}:{left:e,top:0,width:1-2*e,height:1},clipPath:({cornerRounding:e,shear:t},{width:i,height:a})=>Z({cmd:"M",p:{x:1,y:0}},[{cmd:"L",p:{x:t,y:0}},{cmd:"L",p:{x:0,y:1}},{cmd:"L",p:{x:1-t,y:1}},{cmd:"L",p:{x:1,y:0}}],e,i,a),getControlPoints:({shear:e},t)=>[{position:k(G(t)[0],e),style:"normal"}],dragControlPoint:(e,t,i,a)=>({...e,shear:w(0,C(G(t)[i],a),.99)})};function G({width:e}){return[{fromPoint:{x:0,y:0},fromValue:0,toPoint:{x:e,y:0},toValue:1}]}const Y={discriminator:"plus",textExtents:({stroke:e})=>({left:0,top:(1-e)/2,width:1,height:e}),clipPath({cornerRounding:e,stroke:t},{width:i,height:a}){const n=(1-t)/2;return Z({cmd:"M",p:{x:n,y:0}},[{cmd:"L",p:{x:n,y:n}},{cmd:"L",p:{x:0,y:n}},{cmd:"L",p:{x:0,y:1-n}},{cmd:"L",p:{x:n,y:1-n}},{cmd:"L",p:{x:n,y:1}},{cmd:"L",p:{x:1-n,y:1}},{cmd:"L",p:{x:1-n,y:1-n}},{cmd:"L",p:{x:1,y:1-n}},{cmd:"L",p:{x:1,y:n}},{cmd:"L",p:{x:1-n,y:n}},{cmd:"L",p:{x:1-n,y:0}},{cmd:"L",p:{x:n,y:0}}],e,i,a)},getControlPoints:({stroke:e},t)=>[{position:k(X(t)[0],e),style:"normal"}],dragControlPoint:(e,t,i,a)=>({...e,stroke:w(.01,C(X(t)[i],a),1)})};function X({width:e,height:t}){return[{fromPoint:{x:0,y:0},fromValue:1,toPoint:{x:e/2,y:t/2},toValue:0}]}const W=`url(${function(e,t){const i=[...(new TextEncoder).encode('\n<svg xmlns="http://www.w3.org/2000/svg" width="28" height="40" viewBox="0 0 28 40" fill="none">\n  <g filter="url(#filter0_d_10962_163787)">\n    <path fill-rule="evenodd" clip-rule="evenodd" d="M4 18.5V2.5L15.6 14.1081H8.55353L8.40242 14.232L4 18.5Z" fill="white"/>\n    <path fill-rule="evenodd" clip-rule="evenodd" d="M5 4.7998V15.9998L7.969 13.1307L8.129 12.9916L13.165 12.9998L5 4.7998Z" fill="black"/>\n    <path d="M8.5 27.5C9.06115 27.5 9.48005 27.0493 9.51635 26.5351C9.74356 23.3161 12.3161 20.7436 15.5351 20.5163C16.0493 20.4801 16.5 20.0611 16.5 19.5C16.5 18.956 16.0524 18.4804 15.4691 18.5163C11.1973 18.7798 7.7798 22.1973 7.51632 26.4691C7.48035 27.0524 7.95597 27.5 8.5 27.5Z" fill="black" stroke="white" stroke-linejoin="round"/>\n  </g>\n  <defs>\n    <filter id="filter0_d_10962_163787" x="2.2" y="1.7" width="16.6" height="29.1" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n      <feFlood flood-opacity="0" result="BackgroundImageFix"/>\n      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n      <feOffset dy="1"/>\n      <feGaussianBlur stdDeviation="0.9"/>\n      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.65 0"/>\n      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_10962_163787"/>\n      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_10962_163787" result="shape"/>\n    </filter>\n  </defs>\n</svg>\n')].map((e=>String.fromCharCode(e))).join("");return"data:image/svg+xml;base64,"+btoa(i)}()}) 5 5, move`,K=["ne","nw","nw","ne"],{min:Q}=Math,ee={left:0,top:0,width:1,height:1},te={topLeft:0,topRight:0,bottomRight:0,bottomLeft:0};function ie(e,t,i){return e+i<=t?e:e*t/(e+i)}function ae(e,t,i,a,n){return Q(ie(i,t,e),ie(i,a,n))}function ne({topLeft:e,topRight:t,bottomRight:i,bottomLeft:a},{width:n,height:r}){return{topLeft:ae(a,r,e,n,t),topRight:ae(e,n,t,r,i),bottomRight:ae(t,r,i,n,a),bottomLeft:ae(i,n,a,r,e)}}function re(e){if(!e)return!0;const{topLeft:t,topRight:i,bottomRight:a,bottomLeft:n}=e;return t===i&&t===a&&t===n}function oe({width:e,height:t}){return[{fromPoint:{x:0,y:0},fromValue:0,toPoint:{x:10,y:10},toValue:10},{fromPoint:{x:e,y:0},fromValue:0,toPoint:{x:e-10,y:10},toValue:10},{fromPoint:{x:e,y:t},fromValue:0,toPoint:{x:e-10,y:t-10},toValue:10},{fromPoint:{x:0,y:t},fromValue:0,toPoint:{x:10,y:t-10},toValue:10}]}const se={discriminator:"rectangle",clipPath({borderRadius:e},t){const{width:i,height:a}=t;let n="m 0 0";if(e){const{topLeft:r,topRight:o,bottomRight:s,bottomLeft:l}=ne(e,t);n+=` m ${r} 0`,n+=` l ${i-r-o} 0 a ${o} ${o} 0 0 1 ${o},${o}`,n+=` l 0 ${a-o-s} a ${s} ${s} 0 0 1 ${-s},${s}`,n+=` l ${s+l-i} 0 a ${l} ${l} 0 0 1 ${-l},${-l}`,n+=` l 0 ${l+r-a} a ${r} ${r} 0 0 1 ${r},${-r}`}else n+=` l ${i} 0`,n+=` l 0 ${a}`,n+=` l ${-i} 0`,n+=" l 0 "+-a;return n+=" z",n},textExtents:e=>ee,getControlPoints({borderRadius:e},t,i,a,n){const{topLeft:r,topRight:o,bottomRight:s,bottomLeft:l}=ne(e??te,t),c=oe(t),d=re(n?ne(n.borderRadius??te,t):e)!==a?"normal":"alternate";return[r,o,s,l].map(((e,t)=>({position:k(c[t],e),style:d,tooltip:{text:`Radius ${e.toFixed(0)}`,position:K[t]},cursor:W})))},dragControlPoint({borderRadius:e},t,i,a,n,r){const o=oe(t)[i],{width:s,height:l}=t,c=C(o,a);let d;if(re(e)!==r){const e=w(0,c,Q(l/2,s/2));d={topLeft:e,topRight:e,bottomRight:e,bottomLeft:e}}else switch(d={...e??te},i){case 0:d.topLeft=w(0,c,Q(l-d.bottomLeft,s-d.topRight));break;case 1:d.topRight=w(0,c,Q(s-d.topLeft,l-d.bottomRight));break;case 2:d.bottomRight=w(0,c,Q(l-d.topRight,s-d.bottomLeft));break;case 3:d.bottomLeft=w(0,c,Q(s-d.bottomRight,l-d.topLeft))}return{type:"rectangle",borderRadius:d}}},le={left:0,top:0,width:1,height:1},ce={discriminator:"shield",clipPath({cornerRounding:e},{width:t,height:i}){const a=Math.min(.5*t,.5*i);return Z({cmd:"M",p:{x:0,y:0}},[{cmd:"H",v:t},{cmd:"V",v:i-a},{cmd:"A",radius:{x:.5*t,y:a},angle:0,large:!1,sweep:!0,p:{x:0,y:i-a}},{cmd:"V",v:0}],e,1,1)},textExtents:e=>le},de={cmd:"M",p:{x:0,y:0}},pe=[{cmd:"H",v:210},{cmd:"V",v:175},{cmd:"H",v:129},{cmd:"L",p:{x:40,y:217}},{cmd:"V",v:175},{cmd:"H",v:0},{cmd:"V",v:0}],he={left:0,top:0,width:1,height:175/217},ue={discriminator:"speechBubble",clipPath:({cornerRounding:e},{width:t,height:i})=>Z(de,pe,e,t/210,i/217),textExtents:e=>he},{PI:ge,cos:me,sin:ve}=Math,be=-.5*ge,fe=2*ge;function ze(e,t){return be+fe*(e/t)}function ye(e,t){return be+fe*((2*e+1)/(2*t))}const xe={left:(1-Math.SQRT1_2)/2,top:(1-Math.SQRT1_2)/2,width:Math.SQRT1_2,height:Math.SQRT1_2};function we({sidePairs:e},{width:t,height:i}){const a=ye(e-1,e);return{fromPoint:{x:.5*t,y:.5*i},fromValue:0,toPoint:{x:(.5*me(a)+.5)*t,y:(.5*ve(a)+.5)*i},toValue:1}}const Ce={discriminator:"star",clipPath({cornerRounding:e,sidePairs:t,innerRadius:i},{width:a,height:n}){let r;const o=[];let s=!0;function l(e,t){const i={x:me(e)*t*.5+.5,y:ve(e)*t*.5+.5};s?(r={cmd:"M",p:i},s=!1):o.push({cmd:"L",p:i})}for(let e=0;e<t;e+=1)l(ze(e,t),1),l(ye(e,t),i);return Z(r,o,e,a,n)},textExtents:e=>xe,getControlPoints:(e,t)=>[{position:k(we(e,t),e.innerRadius),style:"normal"}],dragControlPoint(e,t,i,a){const n=C(we(e,t),a);return{...e,innerRadius:w(.1,n,1)}}},ke={discriminator:"triangle",clipPath:({cornerRounding:e,topVertex:t},{width:i,height:a})=>Z({cmd:"M",p:{x:t??.5,y:0}},[{cmd:"L",p:{x:0,y:1}},{cmd:"L",p:{x:1,y:1}}],e,i,a),textExtents:({topVertex:e})=>({width:.5,height:.5,left:(e??.5)/2,top:.5}),getControlPoints:({topVertex:e},t)=>[{position:k(Le(t)[0],e??.5),style:"normal"}],dragControlPoint:(e,t,i,a)=>({...e,topVertex:w(0,C(Le(t)[i],a),1)})};function Le({width:e}){return[{fromPoint:{x:0,y:0},fromValue:0,toPoint:{x:e,y:0},toValue:1}]}const Se=new Map;function Ie(e){Se.set(e.discriminator,e)}Ie(se),Ie(O),Ie(Ce),Ie(E),Ie(Y),Ie(ke),Ie(_),Ie(q),Ie(F),Ie(U),Ie(ue),Ie(ce),Ie(H);var Me=i(4015),Te=i.n(Me);function Be(e,t,i=Object.keys(e.states.default)){const a=e.states.default,n=structuredClone(e.states[t]);return i.reduce(((e,t)=>(Te()(e[t])&&(e[t]=structuredClone(a[t])),e)),n)}var Je=i(4198),Ae=i(9679),Ze=i(3092),Re=i.n(Ze);const He=(0,Je._w)(p.Al),_e=Ae.ZF.fromSchema(He),Ve=(e,t)=>{if(t.content)return{...t,content:t.content.flatMap((t=>Ve(e,t)),0)};if("text"===t.type&&t.text){const i=new RegExp(Re()(e),"gi"),a=t.text.match(i);return a&&a.length>0?((e,t)=>{const i=new RegExp(`(${Re()(e)})`,"gi");return t.text.split(i).filter(Boolean).map((i=>{const a=i.toLowerCase()===e.toLowerCase(),n=t.marks.find((e=>"textStyle"===e.type));let r=!1;const o=a?t.marks.map((e=>"highlight"===e.type?(r=!0,{...e,attrs:{...e.attrs,color:"#FFFF00"}}):e)):t.marks;return!r&&a&&o.push({type:"highlight",attrs:{textSize:n?.attrs.textSize??"inherit",color:"#FFFF00"}}),{text:i,type:"text",marks:o}}))})(e,t):t}return t},$e=(e,t)=>{function i({doc:t,searchTerm:i}){e.textContent="";const a=""===i||null==i?t:Ve(i,t),n=Ae.bP.fromJSON(He,a);_e.serializeFragment(n.content,void 0,e)}return i(t),{update:i}};var Fe=i(3134),Pe=i.n(Fe);function je(e){return new Map(Object.entries(Pe()(e,(e=>e.sourceId??"none"))))}var Ee=i(5608),De=i(2835);function Oe(e,t){return[...e.querySelectorAll(t)]}function Ne(e,t,i,a){return t.addEventListener(e,i,a),()=>{t.removeEventListener(e,i,a)}}var qe,Ue,Ge=i(9701);class Ye extends De.WF{get $form(){return(0,Ee.gn)(this,Ue,"f")?.form??null}get $slotted(){return this.$$$("*")}$(e){return function(e,t){return e.querySelector(t)}(this.shadowRoot,e)}$$(e){return Oe(this.shadowRoot,e)}$$$(e,t){const i=t?`slot[name="${t}"]`:"slot:not([name])",a=this.$(i);return a?a.assignedElements({flatten:!0}).map((t=>t.matches(e)?[t]:Oe(t,e))).flat():(console.warn(`Could not query ${i} within ${this.tagName.toLowerCase()} because it does not exist.`),[])}constructor(){super(),qe.set(this,[]),Ue.set(this,void 0),this.hasSlotted=e=>this.$slotted.some((t=>t.contains(e))),this.hasWithin=e=>this.contains(e)||this.hasSlotted(e),this.unbindEvents=()=>{(0,Ee.gn)(this,qe,"f").forEach((e=>e()))},this.collectOff=e=>{(0,Ee.gn)(this,qe,"f").push(e)},this.on=(e,t,i)=>{const a=Ne(e,this,t,i);return this.collectOff(a),a},this.dispatch=(e,t={})=>function(e,t,i={},a={}){e.dispatchEvent(new CustomEvent(t,{bubbles:!0,composed:!0,...a,detail:i}))}(this,e,t),this.constructor.formAssociated&&(0,Ee.GG)(this,Ue,this.attachInternals(),"f")}connectedCallback(){super.connectedCallback(),this.bindEvents()}disconnectedCallback(){super.disconnectedCallback(),this.unbindEvents()}bindEvents(){}}qe=new WeakMap,Ue=new WeakMap,Ye.formAssociated=!1,Ye.shadowRootOptions={...De.WF.shadowRootOptions,delegatesFocus:!0};const Xe=De.qy`
  <svg
    width="11"
    height="13"
    viewBox="0 0 11 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.75 1.28125C0.75 0.925781 1.02344 0.625 1.40625 0.625H2.71875H3.15625H6.54688C8.40625 0.625 9.9375 2.15625 9.9375 4.01562C9.9375 4.97266 9.52734 5.84766 8.89844 6.44922C10.0195 6.99609 10.8125 8.17188 10.8125 9.48438C10.8125 11.3711 9.28125 12.875 7.42188 12.875H3.15625H2.71875H1.40625C1.02344 12.875 0.75 12.6016 0.75 12.2188C0.75 11.8633 1.02344 11.5625 1.40625 11.5625H2.0625V6.75V1.9375H1.40625C1.02344 1.9375 0.75 1.66406 0.75 1.28125ZM6.54688 6.09375C7.69531 6.09375 8.625 5.16406 8.625 4.01562C8.625 2.86719 7.69531 1.9375 6.54688 1.9375H3.375V6.09375H6.54688ZM3.375 7.40625V11.5625H7.42188C8.57031 11.5625 9.5 10.6328 9.5 9.48438C9.5 8.33594 8.57031 7.40625 7.42188 7.40625H6.54688H3.375Z"
      fill="black"
    />
  </svg>
`,We=De.qy`
  <svg
    width="15"
    height="12"
    viewBox="0 0 15 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.3125 1.28125V5.875C1.3125 6.47656 1.77734 6.96875 2.40625 6.96875H11.7578L9.37891 4.58984C9.10547 4.34375 9.10547 3.93359 9.37891 3.66016C9.625 3.41406 10.0352 3.41406 10.3086 3.66016L13.8086 7.1875C14.0547 7.43359 14.0547 7.84375 13.8086 8.08984L10.3086 11.5898C10.0352 11.8633 9.625 11.8633 9.37891 11.5898C9.10547 11.3438 9.10547 10.9336 9.37891 10.6602L11.7578 8.28125H2.40625C1.06641 8.28125 0 7.21484 0 5.875V1.28125C0 0.925781 0.273438 0.625 0.65625 0.625C1.01172 0.625 1.3125 0.925781 1.3125 1.28125Z"
      fill="black"
    />
  </svg>
`,Ke=De.qy`
  <svg
    width="14"
    height="9"
    viewBox="0 0 14 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.9336 0.566406C13.1797 0.839844 13.1797 1.25 12.9336 1.49609L5.71484 8.71484C5.44141 8.98828 5.03125 8.98828 4.78516 8.71484L1.06641 4.99609C0.792969 4.75 0.792969 4.33984 1.06641 4.09375C1.3125 3.82031 1.72266 3.82031 1.96875 4.09375L5.22266 7.34766L12.0039 0.566406C12.25 0.320312 12.6602 0.320312 12.9062 0.566406H12.9336Z"
      fill="black"
    />
  </svg>
`,Qe=(De.qy`
  <svg
    width="10"
    height="10"
    viewBox="0 0 10 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.18359 1.49609L5.90234 4.77734L9.15625 8.03125C9.42969 8.27734 9.42969 8.6875 9.15625 8.93359C8.91016 9.20703 8.5 9.20703 8.25391 8.93359L4.97266 5.67969L1.71875 8.93359C1.47266 9.20703 1.0625 9.20703 0.816406 8.93359C0.542969 8.6875 0.542969 8.27734 0.816406 8.00391L4.07031 4.75L0.816406 1.49609C0.542969 1.25 0.542969 0.839844 0.816406 0.566406C1.0625 0.320312 1.47266 0.320312 1.74609 0.566406L5 3.84766L8.25391 0.59375C8.5 0.320312 8.91016 0.320312 9.18359 0.59375C9.42969 0.839844 9.42969 1.25 9.18359 1.49609Z"
      fill="black"
    />
  </svg>
`,De.qy`
  <svg
    width="14"
    height="15"
    viewBox="0 0 14 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.375 9.9375C11.5938 9.9375 11.8125 9.74609 11.8125 9.5V3.92188L9.95312 2.0625H6.125C5.87891 2.0625 5.6875 2.28125 5.6875 2.5V9.5C5.6875 9.74609 5.87891 9.9375 6.125 9.9375H11.375ZM6.125 11.25C5.14062 11.25 4.375 10.4844 4.375 9.5V2.5C4.375 1.54297 5.14062 0.75 6.125 0.75H9.95312C10.2812 0.75 10.6367 0.914062 10.8828 1.16016L12.7148 2.99219C12.9609 3.23828 13.125 3.59375 13.125 3.92188V9.5C13.125 10.4844 12.332 11.25 11.375 11.25H6.125ZM2.625 4.25H3.5V5.5625H2.625C2.37891 5.5625 2.1875 5.78125 2.1875 6V13C2.1875 13.2461 2.37891 13.4375 2.625 13.4375H7.875C8.09375 13.4375 8.3125 13.2461 8.3125 13V12.125H9.625V13C9.625 13.9844 8.83203 14.75 7.875 14.75H2.625C1.64062 14.75 0.875 13.9844 0.875 13V6C0.875 5.04297 1.64062 4.25 2.625 4.25Z"
      fill="black"
    />
  </svg>
`),et=De.qy`
  <svg
    width="16"
    height="16"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.8125 4.6875C5.32031 4.6875 4.91016 4.44141 4.66406 4.03125C4.41797 3.64844 4.41797 3.12891 4.66406 2.71875C4.91016 2.33594 5.32031 2.0625 5.8125 2.0625C6.27734 2.0625 6.6875 2.33594 6.93359 2.71875C7.17969 3.12891 7.17969 3.64844 6.93359 4.03125C6.6875 4.44141 6.27734 4.6875 5.8125 4.6875ZM5.8125 9.0625C5.32031 9.0625 4.91016 8.81641 4.66406 8.40625C4.41797 8.02344 4.41797 7.50391 4.66406 7.09375C4.91016 6.71094 5.32031 6.4375 5.8125 6.4375C6.27734 6.4375 6.6875 6.71094 6.93359 7.09375C7.17969 7.50391 7.17969 8.02344 6.93359 8.40625C6.6875 8.81641 6.27734 9.0625 5.8125 9.0625ZM7.125 12.125C7.125 12.6172 6.85156 13.0273 6.46875 13.2734C6.05859 13.5195 5.53906 13.5195 5.15625 13.2734C4.74609 13.0273 4.5 12.6172 4.5 12.125C4.5 11.6602 4.74609 11.25 5.15625 11.0039C5.53906 10.7578 6.05859 10.7578 6.46875 11.0039C6.85156 11.25 7.125 11.6602 7.125 12.125ZM10.1875 4.6875C9.69531 4.6875 9.28516 4.44141 9.03906 4.03125C8.79297 3.64844 8.79297 3.12891 9.03906 2.71875C9.28516 2.33594 9.69531 2.0625 10.1875 2.0625C10.6523 2.0625 11.0625 2.33594 11.3086 2.71875C11.5547 3.12891 11.5547 3.64844 11.3086 4.03125C11.0625 4.44141 10.6523 4.6875 10.1875 4.6875ZM11.5 7.75C11.5 8.24219 11.2266 8.65234 10.8438 8.89844C10.4336 9.14453 9.91406 9.14453 9.53125 8.89844C9.12109 8.65234 8.875 8.24219 8.875 7.75C8.875 7.28516 9.12109 6.875 9.53125 6.62891C9.91406 6.38281 10.4336 6.38281 10.8438 6.62891C11.2266 6.875 11.5 7.28516 11.5 7.75ZM10.1875 13.4375C9.69531 13.4375 9.28516 13.1914 9.03906 12.7812C8.79297 12.3984 8.79297 11.8789 9.03906 11.4688C9.28516 11.0859 9.69531 10.8125 10.1875 10.8125C10.6523 10.8125 11.0625 11.0859 11.3086 11.4688C11.5547 11.8789 11.5547 12.3984 11.3086 12.7812C11.0625 13.1914 10.6523 13.4375 10.1875 13.4375Z"
      fill="#636363"
    />
  </svg>
`,tt=De.qy`
  <svg
    width="12"
    height="15"
    viewBox="0 0 12 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.5 13.4375H9.5C9.71875 13.4375 9.9375 13.2461 9.9375 13V5.125H7.75C7.25781 5.125 6.875 4.74219 6.875 4.25V2.0625H2.5C2.25391 2.0625 2.0625 2.28125 2.0625 2.5V13C2.0625 13.2461 2.25391 13.4375 2.5 13.4375ZM2.5 0.75H7.01172C7.47656 0.75 7.91406 0.941406 8.24219 1.26953L10.7305 3.75781C11.0586 4.08594 11.25 4.52344 11.25 4.98828V13C11.25 13.9844 10.457 14.75 9.5 14.75H2.5C1.51562 14.75 0.75 13.9844 0.75 13V2.5C0.75 1.54297 1.51562 0.75 2.5 0.75ZM8.65234 8.07812L5.72656 11.0039C5.58984 11.1133 5.42578 11.1953 5.26172 11.1953C5.09766 11.1953 4.90625 11.1133 4.79688 11.0039L3.34766 9.52734C3.07422 9.28125 3.07422 8.87109 3.34766 8.59766C3.59375 8.35156 4.00391 8.35156 4.27734 8.59766L5.26172 9.60938L7.72266 7.14844C7.96875 6.90234 8.37891 6.90234 8.65234 7.14844C8.89844 7.39453 8.89844 7.83203 8.65234 8.07812Z"
      fill="black"
    />
  </svg>
`,it=De.qy`
  <svg
    width="8"
    height="13"
    viewBox="0 0 8 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.03516 6.28516L6.28516 1.0625C6.53125 0.789062 6.94141 0.789062 7.21484 1.0625C7.46094 1.30859 7.46094 1.71875 7.21484 1.96484L2.40234 6.75L7.1875 11.5625C7.46094 11.8086 7.46094 12.2188 7.1875 12.4648C6.94141 12.7383 6.53125 12.7383 6.28516 12.4648L1.03516 7.21484C0.761719 6.96875 0.761719 6.55859 1.03516 6.28516Z"
      fill="#707070"
    />
  </svg>
`,at=De.qy`
  <svg
    width="12"
    height="2"
    viewBox="0 0 12 2"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.6875 0.75C11.6875 1.13281 11.3867 1.40625 11.0312 1.40625H0.96875C0.585938 1.40625 0.3125 1.13281 0.3125 0.75C0.3125 0.394531 0.585938 0.09375 0.96875 0.09375H11.0312C11.3867 0.09375 11.6875 0.394531 11.6875 0.75Z"
      fill="black"
    />
  </svg>
`,nt=De.qy`
  <svg
    width="16"
    height="15"
    viewBox="0 0 16 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.480469 12.7539L1.10938 10.6211C1.21875 10.2383 1.4375 9.88281 1.71094 9.60938L10.0234 1.29688C10.707 0.613281 11.8281 0.613281 12.5117 1.29688L13.5781 2.36328C13.6602 2.44531 13.7422 2.55469 13.7969 2.63672C14.2617 3.32031 14.1797 4.25 13.5781 4.85156L5.26562 13.1641C5.23828 13.1914 5.18359 13.2188 5.15625 13.2734C4.88281 13.4922 4.58203 13.6562 4.25391 13.7656L2.12109 14.3945L0.945312 14.7227C0.726562 14.8047 0.480469 14.75 0.316406 14.5586C0.125 14.3945 0.0703125 14.1484 0.152344 13.9297L0.480469 12.7539ZM2.17578 11.6328L1.73828 13.1367L3.24219 12.6992L3.87109 12.5078C4.0625 12.4531 4.19922 12.3711 4.33594 12.2344L10.5977 5.97266L8.90234 4.27734L2.64062 10.5391C2.61328 10.5391 2.61328 10.5664 2.58594 10.5938C2.47656 10.7031 2.42188 10.8398 2.36719 11.0039L2.17578 11.6328ZM6.90625 13.4375H15.2188C15.5742 13.4375 15.875 13.7383 15.875 14.0938C15.875 14.4766 15.5742 14.75 15.2188 14.75H6.90625C6.52344 14.75 6.25 14.4766 6.25 14.0938C6.25 13.7383 6.52344 13.4375 6.90625 13.4375Z"
      fill="black"
    />
  </svg>
`,rt=De.qy`
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.65625 0.71875V5.09375H11.0312C11.3867 5.09375 11.6875 5.39453 11.6875 5.75C11.6875 6.13281 11.3867 6.40625 11.0312 6.40625H6.65625V10.7812C6.65625 11.1641 6.35547 11.4375 6 11.4375C5.61719 11.4375 5.34375 11.1641 5.34375 10.7812V6.40625H0.96875C0.585938 6.40625 0.3125 6.13281 0.3125 5.75C0.3125 5.39453 0.585938 5.09375 0.96875 5.09375H5.34375V0.71875C5.34375 0.363281 5.61719 0.0625 6 0.0625C6.35547 0.0625 6.65625 0.363281 6.65625 0.71875Z"
      fill="black"
    />
  </svg>
`,ot=De.qy`
  <svg
    width="14"
    height="13"
    viewBox="0 0 14 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.9062 5.875H8.96875C8.58594 5.875 8.3125 5.60156 8.3125 5.21875C8.3125 4.86328 8.58594 4.5625 8.96875 4.5625H11.4297L10.6914 3.6875C9.78906 2.62109 8.47656 1.9375 7 1.9375C4.32031 1.9375 2.1875 4.09766 2.1875 6.75C2.1875 9.42969 4.32031 11.5625 7 11.5625C8.06641 11.5625 9.07812 11.207 9.87109 10.6055C10.1719 10.3867 10.582 10.4414 10.8008 10.7422C11.0195 11.043 10.9648 11.4531 10.6641 11.6719C9.65234 12.4375 8.36719 12.875 7 12.875C3.60938 12.875 0.875 10.1406 0.875 6.75C0.875 3.38672 3.60938 0.625 7 0.625C8.88672 0.625 10.582 1.5 11.7031 2.83984L12.25 3.49609V1.28125C12.25 0.925781 12.5234 0.625 12.9062 0.625C13.2617 0.625 13.5625 0.925781 13.5625 1.28125V5.21875C13.5625 5.60156 13.2617 5.875 12.9062 5.875Z"
      fill="black"
    />
  </svg>
`,st=De.qy`
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.48438 9.5625L12.1094 5.1875C12.2734 4.91406 12.5469 4.75 12.875 4.75C13.1758 4.75 13.4492 4.91406 13.6133 5.1875L16.2383 9.5625C16.4023 9.83594 16.4023 10.1641 16.2383 10.4375C16.1016 10.7109 15.8008 10.875 15.5 10.875H10.25C9.92188 10.875 9.62109 10.7109 9.48438 10.4375C9.32031 10.1641 9.32031 9.83594 9.48438 9.5625ZM12.875 6.5L11.0156 9.5625H14.707L12.875 6.5ZM17.6875 13.5H14.1875V17H17.6875V13.5ZM13.9688 12.1875H17.9062C18.5078 12.1875 19 12.6797 19 13.2812V17.2188C19 17.8477 18.5078 18.3125 17.9062 18.3125H13.9688C13.3398 18.3125 12.875 17.8477 12.875 17.2188V13.2812C12.875 12.6797 13.3398 12.1875 13.9688 12.1875ZM10.6875 15.25C10.6875 14.4844 10.25 13.7734 9.59375 13.3633C8.91016 12.9805 8.0625 12.9805 7.40625 13.3633C6.72266 13.7734 6.3125 14.4844 6.3125 15.25C6.3125 16.043 6.72266 16.7539 7.40625 17.1641C8.0625 17.5469 8.91016 17.5469 9.59375 17.1641C10.25 16.7539 10.6875 16.043 10.6875 15.25ZM5 15.25C5 14.0195 5.65625 12.8711 6.75 12.2422C7.81641 11.6133 9.15625 11.6133 10.25 12.2422C11.3164 12.8711 12 14.0195 12 15.25C12 16.5078 11.3164 17.6562 10.25 18.2852C9.15625 18.9141 7.81641 18.9141 6.75 18.2852C5.65625 17.6562 5 16.5078 5 15.25Z"
      fill="black"
    />
  </svg>
`,lt=De.qy`
  <svg
    width="20"
    height="20"
    viewBox="2 2 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.33984 5.51562L18.4258 10.7656C19.3008 11.1484 19.3008 12.3789 18.4258 12.7617L6.33984 18.0117C5.41016 18.4219 4.45312 17.3828 4.94531 16.4805L6.85938 12.9531C6.96875 12.7344 7.1875 12.5703 7.46094 12.543L12.2734 11.9414C12.3555 11.9414 12.4375 11.8594 12.4375 11.75C12.4375 11.668 12.3555 11.5859 12.2734 11.5859L7.46094 10.9844C7.1875 10.9297 6.96875 10.793 6.85938 10.5742L4.94531 7.04688C4.45312 6.14453 5.41016 5.10547 6.33984 5.51562Z"
      fill="var(--arc-color-neutral-400)"
    />
  </svg>
`,ct=De.qy`
  <svg
    width="20"
    height="20"
    viewBox="2 2 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.33984 5.51562L18.4258 10.7656C19.3008 11.1484 19.3008 12.3789 18.4258 12.7617L6.33984 18.0117C5.41016 18.4219 4.45312 17.3828 4.94531 16.4805L6.85938 12.9531C6.96875 12.7344 7.1875 12.5703 7.46094 12.543L12.2734 11.9414C12.3555 11.9414 12.4375 11.8594 12.4375 11.75C12.4375 11.668 12.3555 11.5859 12.2734 11.5859L7.46094 10.9844C7.1875 10.9297 6.96875 10.793 6.85938 10.5742L4.94531 7.04688C4.45312 6.14453 5.41016 5.10547 6.33984 5.51562Z"
      fill="url(#paint0_linear_7580_30219)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_7580_30219"
        x1="0.292683"
        y1="24"
        x2="23.8389"
        y2="23.1127"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#9C15FF" />
        <stop
          offset="1"
          stop-color="#1EB4FB"
        />
      </linearGradient>
    </defs>
  </svg>
`,dt=De.qy`
  <svg
    width="14"
    height="16"
    viewBox="0 0 14 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.6875 7.75C12.6875 5.72656 11.5938 3.86719 9.84375 2.82812C8.06641 1.81641 5.90625 1.81641 4.15625 2.82812C2.37891 3.86719 1.3125 5.72656 1.3125 7.75C1.3125 9.80078 2.37891 11.6602 4.15625 12.6992C5.90625 13.7109 8.06641 13.7109 9.84375 12.6992C11.5938 11.6602 12.6875 9.80078 12.6875 7.75ZM0 7.75C0 5.26172 1.3125 2.96484 3.5 1.70703C5.66016 0.449219 8.3125 0.449219 10.5 1.70703C12.6602 2.96484 14 5.26172 14 7.75C14 10.2656 12.6602 12.5625 10.5 13.8203C8.3125 15.0781 5.66016 15.0781 3.5 13.8203C1.3125 12.5625 0 10.2656 0 7.75ZM4.83984 9.47266C5.25 9.91016 5.96094 10.375 7 10.375C8.01172 10.375 8.72266 9.91016 9.13281 9.47266C9.37891 9.19922 9.78906 9.17188 10.0625 9.41797C10.3359 9.66406 10.3359 10.0742 10.0898 10.3477C9.48828 11.0039 8.44922 11.6875 7 11.6875C5.52344 11.6875 4.48438 11.0039 3.88281 10.3477C3.63672 10.0742 3.66406 9.66406 3.91016 9.41797C4.18359 9.17188 4.59375 9.19922 4.83984 9.47266ZM3.9375 6.4375C3.9375 5.97266 4.32031 5.5625 4.8125 5.5625C5.30469 5.5625 5.6875 5.97266 5.6875 6.4375C5.6875 6.92969 5.30469 7.3125 4.8125 7.3125C4.32031 7.3125 3.9375 6.92969 3.9375 6.4375ZM9.1875 5.5625C9.67969 5.5625 10.0625 5.97266 10.0625 6.4375C10.0625 6.92969 9.67969 7.3125 9.1875 7.3125C8.69531 7.3125 8.3125 6.92969 8.3125 6.4375C8.3125 5.97266 8.69531 5.5625 9.1875 5.5625Z"
      fill="black"
    />
  </svg>
`,pt=De.qy`
  <svg
    width="16"
    height="15"
    viewBox="0 0 16 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 13.4375H7.97266C11.1172 13.4375 13.6602 10.8945 13.6602 7.75C13.6602 7.3125 13.6328 6.875 13.5234 6.46484L13.4141 7.09375C13.3047 7.72266 12.7578 8.1875 12.1289 8.1875H9.96875C9.33984 8.1875 8.79297 7.72266 8.68359 7.09375L8.49219 6H7.48047L7.28906 7.09375C7.17969 7.72266 6.63281 8.1875 6.00391 8.1875H3.84375C3.21484 8.1875 2.66797 7.72266 2.55859 7.09375L2.44922 6.46484C2.33984 6.875 2.3125 7.3125 2.3125 7.75C2.3125 10.8945 4.85547 13.4375 8 13.4375ZM7.20703 4.6875H8.76562C9.01172 4.44141 9.36719 4.25 9.75 4.25H12.3477C12.375 4.25 12.4297 4.25 12.4844 4.27734C11.4453 2.9375 9.80469 2.0625 8 2.0625C6.16797 2.0625 4.52734 2.9375 3.48828 4.27734C3.54297 4.27734 3.59766 4.25 3.625 4.25H6.22266C6.60547 4.25 6.96094 4.44141 7.20703 4.6875ZM8 14.75C5.48438 14.75 3.1875 13.4375 1.92969 11.25C0.671875 9.08984 0.671875 6.4375 1.92969 4.25C3.1875 2.08984 5.48438 0.75 8 0.75C10.4883 0.75 12.7852 2.08984 14.043 4.25C15.3008 6.4375 15.3008 9.08984 14.043 11.25C12.7852 13.4375 10.4883 14.75 8 14.75ZM4.91016 9.85547C5.18359 9.60938 5.59375 9.63672 5.83984 9.91016C6.25 10.3477 6.96094 10.8125 8 10.8125C9.01172 10.8125 9.72266 10.3477 10.1328 9.91016C10.3789 9.63672 10.7891 9.60938 11.0625 9.85547C11.3086 10.1016 11.3359 10.5117 11.0898 10.7852C10.4883 11.4414 9.44922 12.125 7.97266 12.125C6.52344 12.125 5.48438 11.4414 4.88281 10.7852C4.63672 10.5117 4.66406 10.1016 4.91016 9.85547Z"
      fill="black"
    />
  </svg>
`,ht=De.qy`
  <svg
    width="14"
    height="15"
    viewBox="0 0 14 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.94141 3.10156L10.5 2.5L11.0742 0.96875C11.1016 0.832031 11.2383 0.75 11.375 0.75C11.4844 0.75 11.6211 0.832031 11.6484 0.96875L12.25 2.5L13.7812 3.10156C13.918 3.12891 14 3.26562 14 3.375C14 3.51172 13.918 3.64844 13.7812 3.67578L12.25 4.25L11.6484 5.80859C11.6211 5.91797 11.4844 6 11.375 6C11.2383 6 11.1016 5.91797 11.0742 5.80859L10.5 4.25L8.94141 3.67578C8.83203 3.64844 8.75 3.51172 8.75 3.375C8.75 3.26562 8.83203 3.12891 8.94141 3.10156ZM0.246094 7.3125L0.710938 7.12109L0.929688 7.01172H0.957031L3.36328 5.89062L4.48438 3.45703L4.59375 3.23828L4.8125 2.77344C4.86719 2.60938 5.03125 2.5 5.19531 2.5C5.35938 2.5 5.52344 2.60938 5.60547 2.77344L5.82422 3.23828L5.90625 3.45703L5.93359 3.48438L7.02734 5.89062L9.46094 7.01172L9.67969 7.12109L10.1445 7.33984C10.3086 7.39453 10.418 7.55859 10.418 7.72266C10.418 7.88672 10.3086 8.05078 10.1445 8.13281L9.67969 8.32422L9.46094 8.43359L7.02734 9.55469L5.90625 11.9609V11.9883L5.79688 12.207L5.60547 12.6719C5.52344 12.8359 5.35938 12.9453 5.19531 12.9453C5.03125 12.9453 4.86719 12.8359 4.8125 12.6719L4.59375 12.207L4.48438 11.9883V11.9609L3.36328 9.55469L0.957031 8.43359H0.929688L0.710938 8.32422L0.246094 8.13281C0.0820312 8.05078 0 7.88672 0 7.72266C0 7.55859 0.0820312 7.39453 0.246094 7.3125ZM2.51562 7.72266L3.91016 8.37891C4.18359 8.48828 4.42969 8.73438 4.56641 9.00781L5.19531 10.4023L5.85156 9.00781C5.98828 8.73438 6.20703 8.48828 6.48047 8.37891L7.875 7.72266L6.48047 7.06641C6.20703 6.95703 5.98828 6.71094 5.85156 6.4375L5.19531 5.04297L4.56641 6.4375C4.42969 6.71094 4.18359 6.95703 3.91016 7.06641L2.51562 7.72266ZM10.5 11.25L11.0742 9.71875C11.1016 9.58203 11.2383 9.5 11.375 9.5C11.4844 9.5 11.6211 9.58203 11.6484 9.71875L12.25 11.25L13.7812 11.8516C13.918 11.8789 14 12.0156 14 12.125C14 12.2617 13.918 12.3984 13.7812 12.4258L12.25 13L11.6484 14.5586C11.6211 14.668 11.4844 14.75 11.375 14.75C11.2383 14.75 11.1016 14.668 11.0742 14.5586L10.5 13L8.94141 12.4258C8.83203 12.3984 8.75 12.2617 8.75 12.125C8.75 12.0156 8.83203 11.8789 8.94141 11.8516L10.5 11.25Z"
      fill="black"
    />
  </svg>
`,ut=De.qy`
  <svg
    width="14"
    height="15"
    viewBox="0 0 14 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.52344 2.17188L5.00391 2.9375H8.96875L8.44922 2.17188C8.42188 2.11719 8.33984 2.0625 8.25781 2.0625H5.71484C5.63281 2.0625 5.55078 2.11719 5.52344 2.17188ZM9.54297 1.43359L10.5547 2.9375H10.9375H12.25H12.4688C12.8242 2.9375 13.125 3.23828 13.125 3.59375C13.125 3.97656 12.8242 4.25 12.4688 4.25H12.25V12.5625C12.25 13.793 11.2656 14.75 10.0625 14.75H3.9375C2.70703 14.75 1.75 13.793 1.75 12.5625V4.25H1.53125C1.14844 4.25 0.875 3.97656 0.875 3.59375C0.875 3.23828 1.14844 2.9375 1.53125 2.9375H1.75H3.0625H3.41797L4.42969 1.43359C4.70312 1.02344 5.19531 0.75 5.71484 0.75H8.25781C8.77734 0.75 9.26953 1.02344 9.54297 1.43359ZM3.0625 4.25V12.5625C3.0625 13.0547 3.44531 13.4375 3.9375 13.4375H10.0625C10.5273 13.4375 10.9375 13.0547 10.9375 12.5625V4.25H3.0625ZM5.25 6V11.6875C5.25 11.9336 5.03125 12.125 4.8125 12.125C4.56641 12.125 4.375 11.9336 4.375 11.6875V6C4.375 5.78125 4.56641 5.5625 4.8125 5.5625C5.03125 5.5625 5.25 5.78125 5.25 6ZM7.4375 6V11.6875C7.4375 11.9336 7.21875 12.125 7 12.125C6.75391 12.125 6.5625 11.9336 6.5625 11.6875V6C6.5625 5.78125 6.75391 5.5625 7 5.5625C7.21875 5.5625 7.4375 5.78125 7.4375 6ZM9.625 6V11.6875C9.625 11.9336 9.40625 12.125 9.1875 12.125C8.94141 12.125 8.75 11.9336 8.75 11.6875V6C8.75 5.78125 8.94141 5.5625 9.1875 5.5625C9.40625 5.5625 9.625 5.78125 9.625 6Z"
      fill="black"
    />
  </svg>
`,gt=De.qy`
  <svg
    width="14"
    height="15"
    viewBox="0 0 14 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.1875 4.25C9.1875 3.48438 8.75 2.77344 8.09375 2.36328C7.41016 1.98047 6.5625 1.98047 5.90625 2.36328C5.22266 2.77344 4.8125 3.48438 4.8125 4.25C4.8125 5.04297 5.22266 5.75391 5.90625 6.16406C6.5625 6.54688 7.41016 6.54688 8.09375 6.16406C8.75 5.75391 9.1875 5.04297 9.1875 4.25ZM3.5 4.25C3.5 3.01953 4.15625 1.87109 5.25 1.24219C6.31641 0.613281 7.65625 0.613281 8.75 1.24219C9.81641 1.87109 10.5 3.01953 10.5 4.25C10.5 5.50781 9.81641 6.65625 8.75 7.28516C7.65625 7.91406 6.31641 7.91406 5.25 7.28516C4.15625 6.65625 3.5 5.50781 3.5 4.25ZM2.21484 13.4375H11.7578C11.5117 11.7148 10.0352 10.375 8.23047 10.375H5.74219C3.9375 10.375 2.46094 11.7148 2.21484 13.4375ZM0.875 13.957C0.875 11.25 3.03516 9.0625 5.74219 9.0625H8.23047C10.9375 9.0625 13.125 11.25 13.125 13.957C13.125 14.3945 12.7422 14.75 12.3047 14.75H1.66797C1.23047 14.75 0.875 14.3945 0.875 13.957Z"
      fill="black"
    />
  </svg>
`,mt=De.qy`
  <svg
    width="16"
    height="15"
    viewBox="0 0 16 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.52344 1.92578L6.90625 0.886719C6.93359 0.804688 7.01562 0.75 7.125 0.75C7.20703 0.75 7.28906 0.804688 7.31641 0.886719L7.69922 1.92578L8.73828 2.30859C8.82031 2.33594 8.875 2.41797 8.875 2.5C8.875 2.60938 8.82031 2.69141 8.73828 2.71875L7.69922 3.10156L7.31641 4.11328C7.28906 4.19531 7.20703 4.25 7.125 4.25C7.01562 4.25 6.93359 4.19531 6.90625 4.11328L6.52344 3.10156L5.51172 2.71875C5.42969 2.69141 5.375 2.60938 5.375 2.5C5.375 2.41797 5.42969 2.33594 5.51172 2.30859L6.52344 1.92578ZM12.7305 2.0625L9.72266 5.07031L10.6797 6.02734L13.6875 3.01953L12.7305 2.0625ZM2.3125 12.5078L3.24219 13.4375L9.75 6.95703L8.79297 6L2.3125 12.5078ZM11.8008 1.16016C12.3203 0.640625 13.1406 0.640625 13.6602 1.16016L14.5898 2.08984C15.1094 2.60938 15.1094 3.42969 14.5898 3.94922L4.17188 14.3672C3.65234 14.8867 2.83203 14.8867 2.3125 14.3672L1.38281 13.4375C0.863281 12.918 0.863281 12.0977 1.38281 11.5781L11.8008 1.16016ZM0.316406 3.97656L1.875 3.375L2.44922 1.84375C2.47656 1.70703 2.61328 1.625 2.75 1.625C2.85938 1.625 2.99609 1.70703 3.02344 1.84375L3.625 3.375L5.15625 3.97656C5.29297 4.00391 5.375 4.14062 5.375 4.25C5.375 4.38672 5.29297 4.52344 5.15625 4.55078L3.625 5.125L3.02344 6.68359C2.99609 6.79297 2.85938 6.875 2.75 6.875C2.61328 6.875 2.47656 6.79297 2.44922 6.68359L1.875 5.125L0.316406 4.55078C0.207031 4.52344 0.125 4.38672 0.125 4.25C0.125 4.14062 0.207031 4.00391 0.316406 3.97656ZM9.94141 10.9766L11.5 10.375L12.0742 8.84375C12.1016 8.70703 12.2383 8.625 12.375 8.625C12.4844 8.625 12.6211 8.70703 12.6484 8.84375L13.25 10.375L14.7812 10.9766C14.918 11.0039 15 11.1406 15 11.25C15 11.3867 14.918 11.5234 14.7812 11.5508L13.25 12.125L12.6484 13.6836C12.6211 13.793 12.4844 13.875 12.375 13.875C12.2383 13.875 12.1016 13.793 12.0742 13.6836L11.5 12.125L9.94141 11.5508C9.83203 11.5234 9.75 11.3867 9.75 11.25C9.75 11.1406 9.83203 11.0039 9.94141 10.9766Z"
      fill="var(--arc-color-text-primary)"
    />
  </svg>
`,vt=(De.qy`
  <svg
    width="16"
    height="16"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.7734 3.85938L15 3L15.8203 0.8125C15.8594 0.617188 16.0547 0.5 16.25 0.5C16.4062 0.5 16.6016 0.617188 16.6406 0.8125L17.5 3L19.6875 3.85938C19.8828 3.89844 20 4.09375 20 4.25C20 4.44531 19.8828 4.64062 19.6875 4.67969L17.5 5.5L16.6406 7.72656C16.6016 7.88281 16.4062 8 16.25 8C16.0547 8 15.8594 7.88281 15.8203 7.72656L15 5.5L12.7734 4.67969C12.6172 4.64062 12.5 4.44531 12.5 4.25C12.5 4.09375 12.6172 3.89844 12.7734 3.85938ZM8.00781 3.39062L10.0391 7.84375L14.4922 9.875C14.7266 9.99219 14.8828 10.2266 14.8828 10.4609C14.8828 10.6953 14.7266 10.9297 14.4922 11.0078L10.0391 13.0781L8.00781 17.5312C7.89062 17.7656 7.65625 17.9219 7.42188 17.9219C7.1875 17.9219 6.95312 17.7656 6.875 17.5312L4.80469 13.0781L0.351562 11.0469C0.117188 10.9297 0 10.6953 0 10.4609C0 10.2266 0.117188 9.99219 0.351562 9.875L4.80469 7.84375L6.875 3.39062C6.95312 3.15625 7.1875 3 7.42188 3C7.65625 3 7.89062 3.15625 8.00781 3.39062ZM15 15.5L15.8203 13.3125C15.8594 13.1172 16.0547 13 16.25 13C16.4062 13 16.6016 13.1172 16.6406 13.3125L17.5 15.5L19.6875 16.3594C19.8828 16.3984 20 16.5938 20 16.75C20 16.9453 19.8828 17.1406 19.6875 17.1797L17.5 18L16.6406 20.2266C16.6016 20.3828 16.4062 20.5 16.25 20.5C16.0547 20.5 15.8594 20.3828 15.8203 20.2266L15 18L12.7734 17.1797C12.6172 17.1406 12.5 16.9453 12.5 16.75C12.5 16.5938 12.6172 16.3984 12.7734 16.3594L15 15.5Z"
      fill="url(#paint0_linear_8045_3935)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_8045_3935"
        x1="-1.70732"
        y1="22"
        x2="21.8389"
        y2="21.1127"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#9C15FF" />
        <stop
          offset="1"
          stop-color="#1EB4FB"
        />
      </linearGradient>
    </defs>
  </svg>
`,De.AH`
  .canned-options {
    background-color: var(
      --ai-writer-background-color,
      var(--arc-color-mono-white)
    );
    margin-top: var(--arc-space-1);
    padding: var(--arc-space-1) 0;
    max-height: min(42rem, 60vh); /** Taken from Rise */
    min-width: 26.5rem; /** Taken from Rise */
    overflow-y: auto;
    width: fit-content;
    box-shadow: var(--arc-shadow-md);
    border-radius: var(--arc-border-radius-md);
    box-sizing: border-box;
    --mon-menu-box-shadow: none;
    --mon-menu-padding: 0;
    --mon-menu-item-border-radius: 0;
    --mon-menu-item-padding: var(--arc-space-1) var(--arc-space-2-5);
    --mon-menu-item-icon-size: 24px;
  }

  .canned-options .menu-heading:first-of-type {
    padding: var(--arc-space-0-5) var(--arc-space-2-5);
  }

  .canned-options .menu-heading {
    padding: var(--arc-space-1-5) var(--arc-space-2-5) var(--arc-space-0-5);
  }

  .menu-heading {
    font-size: var(--arc-font-size-12);
  }

  .mon-visually-hidden {
    display: none;
  }

  .right-chevron svg {
    transform: rotateY(180deg);
  }

  [slot='icon'] {
    display: flex;
  }
`),bt=[{icon:mt,value:"improve",text:"Improve writing"},{icon:tt,value:"proofread",text:"Fix spelling and grammar"},{icon:at,value:"shorten",text:"Make shorter"},{icon:rt,value:"lengthen",text:"Make longer"},{icon:dt,value:"changeTone",text:"Change tone",submenu:[{value:"changeTone_professional",text:"Professional"},{value:"changeTone_casual",text:"Casual"},{value:"changeTone_straightforward",text:"Straightforward"},{value:"changeTone_confident",text:"Confident"},{value:"changeTone_friendly",text:"Friendly"},{value:"changeTone_custom",text:"Custom"}]},{icon:gt,value:"changeAudience",text:"Change audience"},{icon:st,value:"simplify",text:"Simplify Writing"}],ft=[{icon:Xe,value:"boldKeyTerms",text:"Bold key terms"},{icon:pt,value:"addEmojis",text:"Add emojis"}],zt=[{icon:nt,value:"continue",text:"Continue writing"},{icon:ht,value:"explain",text:"Explain this"},{icon:ht,value:"suggestImprovements",text:"Suggest improvements"},{icon:ht,value:"findSynonyms",text:"Find synonyms"},{icon:ht,value:"createAnalogy",text:"Create an analogy"},{icon:ht,value:"createScenario",text:"Create a scenario"},{icon:ht,value:"createKeyTakeaways",text:"Create key takeaways"},{icon:ht,value:"createImagePrompt",text:"Create an AI image prompt"}],yt=[{icon:ht,value:"createHaiku",text:"Write a haiku"}],xt=[{icon:ht,value:"writeAboutTopic",text:"Write about..."},{icon:ht,value:"write1ParagraphAboutTopic",text:"Write 1 paragraph"},{icon:ht,value:"write2ParagraphsAboutTopic",text:"Write 2 paragraphs"},{icon:ht,value:"write3ParagraphsAboutTopic",text:"Write 3 paragraphs"}],wt=[{icon:Ke,value:"replace",text:"Replace selection"},{icon:We,value:"append",text:"Insert below"},{icon:Qe,value:"copy",text:"Copy"},{icon:nt,value:"continue",text:"Continue writing"},{icon:ut,value:"discard",text:"Cancel"}],Ct=[{icon:ot,value:"retry",text:"Try again"},{icon:ut,value:"discard",text:"Cancel"}],kt={improve:{option:"improve"},proofread:{option:"proofread"},lengthen:{option:"lengthen"},shorten:{option:"shorten"},changeTone_professional:{option:"changeTone",params:{tone:"professional"}},changeTone_casual:{option:"changeTone",params:{tone:"casual"}},changeTone_straightforward:{option:"changeTone",params:{tone:"straightforward"}},changeTone_confident:{option:"changeTone",params:{tone:"confident"}},changeTone_friendly:{option:"changeTone",params:{tone:"friendly"}},changeTone_custom:{option:"changeTone"},changeAudience:{option:"changeAudience"},simplify:{option:"simplify"},copy:{option:"copy"},append:{option:"append"},replace:{option:"replace"},continue:{option:"continue"},discard:{option:"discard"},retry:{option:"retry"},boldKeyTerms:{option:"boldKeyTerms"},addEmojis:{option:"addEmojis"},explain:{option:"explain"},suggestImprovements:{option:"suggestImprovements"},findSynonyms:{option:"findSynonyms"},createAnalogy:{option:"createAnalogy"},createScenario:{option:"createScenario"},createKeyTakeaways:{option:"createKeyTakeaways"},createImagePrompt:{option:"createImagePrompt"},createHaiku:{option:"createHaiku"},writeAboutTopic:{option:"writeAboutTopic"},write1ParagraphAboutTopic:{option:"write1ParagraphAboutTopic"},write2ParagraphsAboutTopic:{option:"write2ParagraphsAboutTopic"},write3ParagraphsAboutTopic:{option:"write3ParagraphsAboutTopic"}};let Lt=class extends Ye{constructor(){super(...arguments),this.menu="initial",this.submenuAnchor=this,this.handleMenuSubmit=e=>{const{detail:t}=e,i=kt[t.value];i&&this.dispatchEvent(new CustomEvent("canned-option:submit",{detail:i}))},this.handleSubmenuTriggerClick=(e,t)=>{e.currentTarget instanceof HTMLElement&&(this.selected!==t?(this.selected=t,this.submenuAnchor=e.currentTarget):this.closeSubmenu())},this.openSubmenu=e=>{this.selected!==e.detail.value&&(this.selected=e.detail.value,this.submenuAnchor=e.detail.target)},this.closeSubmenu=()=>{this.selected=void 0,this.submenuAnchor=this},this.onMenuEscape=()=>{this.selected&&(this.selected=void 0,this.submenuAnchor=this)}}render(){return De.qy`
      <div class="canned-options">
        <mon-menu
          class="menu"
          name="ai-writer-menu"
          @mon-menu:open-sub-menu=${this.openSubmenu}
          @mon-menu:close-sub-menu=${this.closeSubmenu}
          @mon-menu:escape=${this.onMenuEscape}
          @mon-menu:submit=${this.handleMenuSubmit}
        >
          ${this.renderInitialMenuOptions()} ${this.renderReplyMenuOptions()}
          ${this.renderScratchMenuOptions()} ${this.renderCanceledMenuOptions()}
        </mon-menu>
      </div>
    `}renderInitialMenuOptions(){return"initial"!==this.menu?De.s6:De.qy`
      ${this.renderEditSelectionsOptions()}
      ${this.renderFormatSelectionOptions()}
      ${this.renderGenerateFromSelectionOptions()} ${this.renderPromptOptions()}
      ${this.renderScratchOptions()}
    `}renderReplyMenuOptions(){return"reply"!==this.menu?De.s6:De.qy`
      ${this.renderMenuItemGroup(wt)}
      ${this.renderEditSelectionsOptions()}
      ${this.renderFormatSelectionOptions()}
    `}renderScratchMenuOptions(){return"scratch"!==this.menu?De.s6:this.renderScratchOptions()}renderCanceledMenuOptions(){return"canceled"!==this.menu?De.s6:De.qy`${this.renderMenuItemGroup(Ct)}`}renderEditSelectionsOptions(){return De.qy`
      <strong class="menu-heading">Edit selection</strong>
      ${this.renderMenuItemGroup(bt)}
    `}renderFormatSelectionOptions(){return De.qy`
      <strong class="menu-heading">Format selection</strong>
      ${this.renderMenuItemGroup(ft)}
    `}renderGenerateFromSelectionOptions(){return De.qy`
      <strong class="menu-heading">Generate from selection</strong>
      ${this.renderMenuItemGroup(zt)}
    `}renderPromptOptions(){return De.qy`
      <strong class="menu-heading">Prompt</strong>
      ${this.renderMenuItemGroup(yt)}
    `}renderScratchOptions(){return De.qy`
      <strong class="menu-heading">Generate from scratch</strong>
      ${this.renderMenuItemGroup(xt)}
    `}renderMenuItemGroup(e){return De.qy`
      ${e.map((e=>e.submenu?.length?De.qy`
            <mon-menu-item
              value=${e.value}
              data-has-icons
              @click=${t=>{this.handleSubmenuTriggerClick(t,e.value)}}
            >
              <span slot="icon">${e.icon}</span>
              <span>${e.text}</span>
              <span
                slot="chevron"
                class="right-chevron"
              >
                ${it}
              </span>
            </mon-menu-item>
            ${this.renderSubmenu(e)}
          `:De.qy`
          <mon-menu-item
            value=${e.value}
            data-has-icons
          >
            <span slot="icon">${e.icon}</span>
            <span>${e.text}</span>
          </mon-menu-item>
        `))}
    `}renderSubmenu({submenu:e,value:t}){return t===this.selected&&e?De.qy`
        <mon-popover
          .anchor=${this.submenuAnchor}
          .autoResizeOptions=${{enabled:!0,padding:{top:8,right:8,bottom:8,left:8}}}
          .semantic=${!0}
          .offset=${4}
          placement="right-start"
        >
          <mon-menu
            aria-label="${t} submenu"
            name="${t} submenu"
            autofocusit
          >
            ${e.map((e=>De.qy`
                <mon-menu-item value=${e.value}>
                  <span slot="icon">${e.icon}</span>
                  <span>${e.text}</span>
                </mon-menu-item>
              `))}
          </mon-menu>
        </mon-popover>
      `:De.qy``}};Lt.styles=vt,(0,Ee.Cg)([(0,Ge.MZ)({type:String})],Lt.prototype,"menu",void 0),(0,Ee.Cg)([(0,Ge.wk)()],Lt.prototype,"submenuAnchor",void 0),(0,Ee.Cg)([(0,Ge.wk)()],Lt.prototype,"selected",void 0),Lt=(0,Ee.Cg)([(0,Ge.EM)("mon-ai-writer-canned-options")],Lt);var St=i(5494),It=i(6394),Mt=i(1959),Tt=i(2602),Bt=i.n(Tt);class Jt{constructor({onCancel:e,onDone:t,onResult:i,onSubmitted:a,fetch:n}){if(this.sessionId=window.crypto.randomUUID(),this.process=async(e,t)=>{const{onDone:i,onResult:a,onSubmitted:n}=this;n();const r=await this.fetch(this.sessionId,e,{signal:t.signal});if(!t.signal.aborted){const i=r.pipeThrough(new At).getReader(),n=()=>{this.onCancel(),i.cancel()};t.signal.addEventListener("abort",n);try{await i.read().then((function t({done:n,value:r}){if(!n)return a({input:e,output:r}),i.read().then(t)}))}finally{t.signal.removeEventListener("abort",n)}}i()},!n)throw new Error("AI Writer must be initialized with a defined AIResponseFetcher function");this.onCancel=e,this.onDone=t,this.onResult=i,this.onSubmitted=a,this.fetch=n}}class At extends TransformStream{static _guardHtml(e){const t=e.lastIndexOf("<");return-1===t||-1!==e.slice(t+1).indexOf(">")}constructor(e){let t=e?.response??"";super({start(i){null!=e&&i.enqueue(t)},transform(e,i){t+=e,At._guardHtml(t)&&i.enqueue(t)}})}}const Zt=e=>{class t extends e{constructor(){super(...arguments),this.initialContent="",this.aiResponseFetcher=void 0,this.formatter=_t,this.courseId="mondrian-test",this.status="prompt",this.userInput="",this.aiResponses=[],this.selectedResponseIndex=0,this.updateLastResponse=Bt()((e=>{const t=[...this.aiResponses],i=t.pop();i&&(this.aiResponses=[...t,{...i,...e}])}),64),this.addNewResponse=()=>{this.aiResponses=[...this.aiResponses,{prompt:this.userInput,response:"",menu:"reply"}],this.selectedResponseIndex=this.aiResponses.length-1},this.incrementResponseIndex=()=>{this.selectedResponseIndex<=this.aiResponses.length-1&&this.selectedResponseIndex++},this.decrementResponseIndex=()=>{this.selectedResponseIndex>0&&this.selectedResponseIndex--},this.handleInput=e=>{this.userInput=e.target.value},this.submitInput=()=>{this.userInput.length&&this.requestResult({content:this.displayedResult||" ",key:"custom",prompt:this.userInput})},this.requestResult=e=>{this.abortController=new AbortController,this.aiStreamInstance.process({...e,courseId:this.courseId,wentBack:this.wentBack},this.abortController).catch((e=>{"AbortError"!==e.name&&(this.status="error")}))},this.fillPrompt=e=>{const t=Rt[e];t&&(this.userInput=`${t} `)},this.handleCannedOption=({option:e,params:t})=>{switch(e){case"changeTone":t&&t.tone?this.requestResult({content:this.displayedResult,key:e,tone:t.tone}):this.fillPrompt(e);break;case"changeAudience":case"createBulletedList":case"createNumberedList":case"createTable":case"writeAboutTopic":case"write1ParagraphAboutTopic":case"write2ParagraphsAboutTopic":case"write3ParagraphsAboutTopic":this.fillPrompt(e);break;case"continue":this.requestResult({content:this.displayedResult,key:e});break;case"append":this.dispatchEvent(new CustomEvent("append",{detail:this.displayedResult}));break;case"replace":this.dispatchEvent(new CustomEvent("replace",{detail:this.displayedResult}));break;case"copy":navigator.clipboard.writeText(this.displayedResult).then((()=>{console.log("copied to clipboard")}));break;case"discard":this.dispatchEvent(new CustomEvent("blur"));break;case"retry":{const{retry:e}=this.currentResponse;e&&this.requestResult(e[0]);break}default:this.requestResult({content:this.displayedResult,key:e,...t??{}})}},this.stopGeneratingAIResponse=()=>{this.abortController&&this.abortController.abort();const e=this.aiResponses[this.aiResponses.length-1];e.response?.length||(this.aiResponses.pop(),this.decrementResponseIndex()),this.status="prompt"}}get currentMenu(){return this.currentResponse.menu??"initial"}get currentResponse(){return 0===this.aiResponses.length?Ht(this.initialContent):this.aiResponses[this.selectedResponseIndex]}get responseCount(){return this.aiResponses.length}get displayedResult(){const{currentResponse:e}=this;return this.formatter(e.response||this.initialContent)}get wentBack(){return Math.max(this.aiResponses.length-this.selectedResponseIndex-1,0)}get aiStreamInstance(){return this.aiStream||(this.aiStream=new Jt({onCancel:()=>{this.currentResponse.menu="canceled"},onDone:()=>{this.status="prompt"},onResult:({input:e,output:t})=>{try{"streaming"!==this.status&&(this.status="streaming"),this.updateLastResponse({response:t,retry:[e]})}catch{this.status="error"}},onSubmitted:()=>{this.status="pending",this.addNewResponse()},fetch:this.aiResponseFetcher})),this.aiStream}connectedCallback(){super.connectedCallback(),this.aiResponses.length||this.aiResponses.push(Ht(this.initialContent))}}return(0,Ee.Cg)([(0,Ge.MZ)({type:String})],t.prototype,"initialContent",void 0),(0,Ee.Cg)([(0,Ge.MZ)({type:Function,attribute:!1})],t.prototype,"aiResponseFetcher",void 0),(0,Ee.Cg)([(0,Ge.MZ)({type:Function,attribute:!1})],t.prototype,"formatter",void 0),(0,Ee.Cg)([(0,Ge.MZ)({type:String})],t.prototype,"courseId",void 0),(0,Ee.Cg)([(0,Ge.wk)()],t.prototype,"status",void 0),(0,Ee.Cg)([(0,Ge.wk)()],t.prototype,"userInput",void 0),(0,Ee.Cg)([(0,Ge.wk)()],t.prototype,"aiResponses",void 0),(0,Ee.Cg)([(0,Ge.wk)()],t.prototype,"selectedResponseIndex",void 0),t},Rt={changeAudience:"Rewrite this for an intended audience of",changeTone:"Change the tone to",createBulletedList:"Write a bulleted list about",createNumberedList:"Write a numbered list about",createTable:"Create a table about",writeAboutTopic:"Write about",write1ParagraphAboutTopic:"Write 1 paragraph about",write2ParagraphsAboutTopic:"Write 2 paragraphs about",write3ParagraphsAboutTopic:"Write 3 paragraphs about"};function Ht(e){const t=document.createElement("div");return t.innerHTML=e,{prompt:"",response:e,menu:t.innerText.trim().length>0?"initial":"scratch"}}function _t(e){const t=document.createElement("div");return t.innerHTML=e,t.textContent||t.innerText||""}const Vt=De.AH`
  :host * {
    box-sizing: border-box;
    font-family: var(--arc-font-family-body), sans-serif;
  }

  :host mon-draggable {
    max-width: 75rem; /** Taken from Rise */
    cursor: grab;
    background: transparent;
    overflow: visible;
  }

  :host mon-draggable:active {
    cursor: grabbing;
  }

  .content {
    width: fit-content;
  }

  .body {
    background-color: var(
      --ai-writer-background-color,
      var(--arc-color-mono-white)
    );
    box-shadow: var(--arc-shadow-md);
    border-radius: var(--arc-border-radius-md);
    width: 68rem; /** Taken from Rise */
    max-width: 90vw; /** Taken from Rise */
  }

  .input-section form {
    display: flex;
    width: 100%;
  }

  .response {
    padding: var(--ai-writer-content-padding, var(--arc-space-2));
    font-size: var(--arc-font-size-16);
  }

  .response {
    height: 16.2rem; /** Taken from Rise */
    overflow: auto;
    line-height: var(--arc-font-size-32);
    word-break: break-word;
  }

  .response p {
    margin-top: 0;
  }

  .response p:last-child {
    margin-bottom: 0;
  }

  .input-section {
    border-top: 1px solid var(--arc-color-border-standard);
    display: flex;
    align-items: center;
    gap: 1.5rem; /** Taken from Rise */
    padding: 0 var(--arc-space-2);
  }

  .input-section > div {
    padding-top: var(--arc-space-1-5);
    padding-bottom: var(--arc-space-1-5);
  }

  .decorative-icons,
  .submit {
    flex: 0 0 auto;
  }

  .decorative-icons {
    display: flex;
    align-items: center;
    gap: 1.5rem; /** Taken from Rise */
  }

  .input {
    flex: 1 1 100%;
    border: none;
  }

  .input:focus,
  .input:active {
    border: none;
    outline: none;
  }

  .submit {
    background: none;
    border: none;
  }

  .submit:not(:disabled) {
    cursor: pointer;
  }

  .input-section .pagination {
    color: var(--arc-color-neutral-500);
    flex: 1 0 fit-content;
    display: flex;
    align-items: center;
    border-left: 1px solid var(--arc-color-border-standard);
    padding-top: 0;
    padding-bottom: 0;
    margin-right: calc(-1 * var(--arc-space-2));
  }

  .page-number {
    margin-bottom: 2px;
  }

  .pagination button {
    border: none;
    background: none;
    opacity: 0.5;
    padding: var(--arc-space-1-5) var(--arc-space-2-5);
  }

  .pagination button svg {
    width: 100%;
    height: var(--arc-font-size-14);
  }

  .pagination button:not(:disabled) {
    opacity: 1;
    cursor: pointer;
  }

  .right-chevron svg {
    transform: rotateY(180deg);
  }

  .stop {
    flex: 1 0 auto;
  }

  .stop button {
    padding: 0;
    background: none;
    border: none;
    outline: none;
    font-size: var(--arc-font-size-12);
    color: var(--arc-color-text-secondary);
    cursor: pointer;
  }

  .stop button:hover {
    text-decoration: underline;
    color: var(--arc-color-text-primary);
  }
`;let $t=class extends(Zt(Ye)){constructor(){super(...arguments),this.offset=12,this.positionConfig={middleware:[(0,St.cY)(this.offset)]},this.stopMouseEventPropagation=!1,this.inputRef=(0,It._)(),this.resultsMutationObserver=new MutationObserver((()=>{const e=this.$(".response");e&&e.scrollTo(0,e.scrollHeight)})),this.handleInputSubmit=e=>{e.preventDefault(),this.submitInput()},this.handleCannedOptionSelect=e=>{this.handleCannedOption(e.detail)},this.maybeStopPropagation=e=>{this.stopMouseEventPropagation&&this.stopPropagation(e)},this.stopPropagation=e=>{e.stopPropagation()},this.handleBlur=e=>{this.dispatchEvent(new CustomEvent("blur"))},this.handlePaginationClick=e=>{const t=e.currentTarget;"decrement"===t.name&&this.decrementResponseIndex(),"increment"===t.name&&this.incrementResponseIndex(),this.status="prompt"}}get isGenerating(){return["pending","streaming"].includes(this.status)}willUpdate(e){const t=e.get("status"),i=this.status,a=this.$(".response");a&&("pending"!==t&&"pending"===i&&this.resultsMutationObserver.observe(a,{subtree:!0,childList:!0}),"pending"===t&&"prompt"===i&&this.resultsMutationObserver.disconnect())}renderSubmitButton(){if(!this.isGenerating){const e=this.userInput.length<=0;return De.qy`
        <button
          class="submit"
          @click=${this.handleInputSubmit}
          ?disabled=${e}
        >
          ${e?lt:ct}
        </button>
      `}}renderResponseContents(){return"error"===this.status?De.qy`<span>An error occurred</span>`:["prompt","streaming"].includes(this.status)?De.qy`<span>${(0,Mt._)(this.displayedResult)}</span>`:De.qy`<span>Loading...</span>`}renderResponse(){return"scratch"===this.currentMenu?De.s6:De.qy`<div class="response">${this.renderResponseContents()}</div>`}renderPopoverContent(){return De.qy`
      <div class="content">
        <div class="body">
          ${this.renderResponse()}
          <div class="input-section">
            <div class="decorative-icons">${et}</div>
            <form @submit=${this.handleInputSubmit}>
              <input
                ${(0,It.K)(this.inputRef)}
                class="input"
                type="text"
                autofocus
                placeholder="Tell me how to edit this text"
                @click=${this.maybeStopPropagation}
                @mousedown=${this.maybeStopPropagation}
                .value=${this.userInput}
                @input=${this.handleInput}
                @keypress=${this.stopPropagation}
              />
              ${this.renderSubmitButton()} ${this.renderMiscActions()}
            </form>
          </div>
        </div>
        ${this.renderCannedOptionMenu()}
      </div>
    `}firstUpdated(e){super.firstUpdated(e),this.inputRef.value&&window.requestAnimationFrame((()=>{this.inputRef.value?.focus()}))}renderCannedOptionMenu(){if(!this.isGenerating)return De.qy`
        <mon-ai-writer-canned-options
          @canned-option:submit=${this.handleCannedOptionSelect}
          .menu=${this.currentMenu}
        ></mon-ai-writer-canned-options>
      `}renderMiscActions(){return this.isGenerating?De.qy`
        <div class="stop">
          <button @click=${this.stopGeneratingAIResponse}>
            Stop generating
          </button>
        </div>
      `:this.renderPagination()}renderPagination(){const{responseCount:e,selectedResponseIndex:t}=this,i=t+1;if(this.responseCount>1)return De.qy`
        <div class="pagination">
          <button
            @click=${this.handlePaginationClick}
            ?disabled=${i<2}
            name="decrement"
          >
            <span class="left-chevron">${it}</span>
          </button>
          <span class="page-number">${i} of ${e}</span>
          <button
            @click=${this.handlePaginationClick}
            ?disabled=${i>=e}
            name="increment"
          >
            <span class="right-chevron">${it}</span>
          </button>
        </div>
      `}render(){return De.qy`
      <mon-draggable
        @click=${this.maybeStopPropagation}
        @mousedown=${this.maybeStopPropagation}
        .anchor=${this}
        .positionConfig=${this.positionConfig}
        .isPopover=${!1}
        @blur=${this.handleBlur}
      >
        ${this.renderPopoverContent()}
      </mon-draggable>
    `}};$t.styles=Vt,(0,Ee.Cg)([(0,Ge.MZ)({type:Number})],$t.prototype,"offset",void 0),(0,Ee.Cg)([(0,Ge.MZ)({type:Object})],$t.prototype,"positionConfig",void 0),(0,Ee.Cg)([(0,Ge.MZ)({type:Boolean})],$t.prototype,"stopMouseEventPropagation",void 0),(0,Ee.Cg)([(0,Ge.wk)()],$t.prototype,"inputRef",void 0),$t=(0,Ee.Cg)([(0,Ge.EM)("mon-ai-writer")],$t);var Ft=i(6678),Pt=i(1514);const jt=De.AH`
  @media (prefers-reduced-motion: no-preference) {
    :host {
      --animation-duration: 1ms;
    }
  }

  @keyframes grow-in {
    from {
      opacity: 0;
      transform: scale(0.9, 0.9);
    }
    to {
      opacity: 1;
      transform: scale(1, 1);
    }
  }

  @keyframes shrink-out {
    from {
      opacity: 1;
      transform: scale(1, 1);
    }
    to {
      opacity: 0;
      transform: scale(0.9, 0.9);
    }
  }

  :host * {
    box-sizing: border-box;
    font-family: var(--arc-font-family-body), sans-serif;
    font-size: 10px;
  }

  dialog {
    background: var(--art-color-primary-white-500, #fff);
    border: none;
    border-radius: var(
      --art-modal-border-radius,
      var(--arc-border-radius-lg, 8px)
    );
    min-height: var(--art-modal-min-height, auto);
    min-width: var(--art-modal-min-width, auto);
    outline: 1px solid transparent;
    padding: 0;
  }

  dialog.open {
    animation: var(--animation-duration) ease-in grow-in;
    animation-iteration-count: 1;
  }

  dialog.closing {
    animation: var(--animation-duration) ease-in shrink-out;
    animation-iteration-count: 1;
    opacity: 0;
  }

  dialog::backdrop,
  dialog.closing::backdrop {
    background: rgb(0 0 0 / 1%);
    transition: var(--animation-duration) ease-in;
  }

  dialog.open::backdrop {
    background: rgb(0 0 0 / 70%);
  }

  dialog.no-backdrop::backdrop {
    background: transparent;
  }

  .dialog-wrap {
    overflow: auto;
  }

  .dialog-header {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0;
    position: sticky;
    top: 0;
    background: white;
    z-index: 100;
  }

  .dialog-header h1 {
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1.2;
    margin: 1.6rem 1rem 1.6rem 2.4rem;
  }

  .close-button {
    background: none;
    border: 1px solid transparent;
    cursor: pointer;
    display: flex;
    height: 2.4rem;
    margin: 1.6rem 2.4rem 1.6rem auto;
    place-content: center;
    width: 2.4rem;
  }

  .close-button svg {
    height: 2rem;
    width: 1.4rem;
  }

  .dialog-content {
    padding: var(--art-modal-content-padding, 0 2.4rem);
  }
`;let Et=class extends Ye{constructor(){super(...arguments),this.closeOnBackgroundClick=!1,this.disableClose=!1,this.animationDuration=250,this.open=!1,this.titleText="",this.noBackdrop=!1,this.dialogStyles={},this.closing=!1}async updated(e){if(super.updated(e),e.has("open")){const t=e.get("open");t||!0!==this.open?t&&!1===this.open&&this.closeModal():this.dialog?.showModal()}}handleBGClick(e){this.closeOnBackgroundClick&&e.target===this.dialog&&this.closeModal()}handleKeyDown(e){"Escape"===e.key&&(e.preventDefault(),e.stopPropagation(),this.closeModal())}closeModal(){this.dialog.open&&!this.closing&&(this.closing=!0,setTimeout((()=>{this.dialog.close(),this.dispatchEvent(new CustomEvent("artDialogClosed",{bubbles:!0,composed:!0})),this.closing=!1}),this.animationDuration))}connectedCallback(){super.connectedCallback(),this.style.setProperty("--animation-duration",`${this.animationDuration}ms`)}render(){const e={"no-backdrop":this.noBackdrop,open:this.open,closing:this.closing};return De.qy`
      <dialog
        .aria-label=${this.getAttribute("aria-label")}
        ?aria-modal=${!0}
        @click="${this.handleBGClick}"
        @keydown="${this.handleKeyDown}"
        style=${(0,Pt.W)(this.dialogStyles)}
        class=${(0,Ft.H)(e)}
      >
        <div class="dialog-wrap">
          <slot name="toast-container"></slot>
          <div class="dialog-header">
            <slot name="title">
              ${this.titleText?De.qy`<h1>${this.titleText}</h1>`:De.s6}
            </slot>
            ${this.disableClose?De.s6:De.qy`
                  <button
                    class="close-button"
                    aria-label="Close modal"
                    @click=${this.closeModal}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                    >
                      <path
                        d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
                      />
                    </svg>
                  </button>
                `}
          </div>
          <div class="dialog-content">
            <slot><p>Modal content failed to load</p></slot>
          </div>
        </div>
      </dialog>
    `}};Et.styles=jt,(0,Ee.Cg)([(0,Ge.P)("dialog")],Et.prototype,"dialog",void 0),(0,Ee.Cg)([(0,Ge.MZ)({type:Boolean})],Et.prototype,"closeOnBackgroundClick",void 0),(0,Ee.Cg)([(0,Ge.MZ)({type:Boolean})],Et.prototype,"disableClose",void 0),(0,Ee.Cg)([(0,Ge.MZ)({type:Number})],Et.prototype,"animationDuration",void 0),(0,Ee.Cg)([(0,Ge.MZ)({type:Boolean})],Et.prototype,"open",void 0),(0,Ee.Cg)([(0,Ge.MZ)({type:String})],Et.prototype,"titleText",void 0),(0,Ee.Cg)([(0,Ge.MZ)({type:Boolean})],Et.prototype,"noBackdrop",void 0),(0,Ee.Cg)([(0,Ge.MZ)({attribute:!1})],Et.prototype,"dialogStyles",void 0),(0,Ee.Cg)([(0,Ge.wk)()],Et.prototype,"closing",void 0),Et=(0,Ee.Cg)([(0,Ge.EM)("art-modal")],Et);const Dt=De.AH`
  * {
    box-sizing: border-box;
    font-size: 10px;
  }

  :host {
    align-items: flex-start;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: var(--arc-space-0-25, 0.2rem);
    outline: none;
  }

  :host(:focus-visible) {
    outline: -webkit-focus-ring-color auto 1px;
    outline-offset: var(--arc-space-0-5, 0.4rem);
  }

  ::slotted(i) {
    font-size: 1.4rem;
  }

  .content {
    display: flex;
    align-items: center;
    font-size: 1.4rem;
    gap-row: var(--arc-space-1, 0.8rem);
  }

  .tab-label {
    font-size: 1.4rem;
  }

  .tab-underline {
    display: none;
  }

  .tab-selected {
    display: flex;
    height: var(--arc-space-0-25, 0.2rem);
    align-self: stretch;
    background: var(--art-grays-black-000000, #000);
  }
`;let Ot=class extends Ye{constructor(){super(...arguments),this.slot="tab",this.label="",this.role="tab",this.value="",this["aria-selected"]="false",this.selected=!1,this.disabled=!1,this.tabIndex=-1,this.bindEvents=()=>{this.on("click",this.onClick)}}onClick(){this.dispatch("art-tab:change")}render(){return De.qy`
      <span class="content">
        <slot name="icon"></slot>
        <div class="tab-label">${this.label}</div>
        <slot></slot>
      </span>
      <span class="tab-underline ${this.selected?"tab-selected":""}"></span>
    `}};Ot.styles=Dt,(0,Ee.Cg)([(0,Ge.MZ)({type:String,reflect:!0})],Ot.prototype,"slot",void 0),(0,Ee.Cg)([(0,Ge.MZ)({type:String})],Ot.prototype,"label",void 0),(0,Ee.Cg)([(0,Ge.MZ)({type:String,reflect:!0})],Ot.prototype,"role",void 0),(0,Ee.Cg)([(0,Ge.MZ)({type:String})],Ot.prototype,"value",void 0),(0,Ee.Cg)([(0,Ge.MZ)({type:String,reflect:!0})],Ot.prototype,"aria-selected",void 0),(0,Ee.Cg)([(0,Ge.MZ)({type:Boolean,reflect:!0})],Ot.prototype,"selected",void 0),(0,Ee.Cg)([(0,Ge.MZ)({type:Boolean,reflect:!0})],Ot.prototype,"disabled",void 0),(0,Ee.Cg)([(0,Ge.MZ)({type:String,reflect:!0})],Ot.prototype,"aria-controls",void 0),(0,Ee.Cg)([(0,Ge.MZ)({type:Number,reflect:!0})],Ot.prototype,"tabIndex",void 0),Ot=(0,Ee.Cg)([(0,Ge.EM)("art-tab")],Ot);const Nt=De.AH`
  * {
    box-sizing: border-box;
  }
`;let qt=class extends Ye{constructor(){super(...arguments),this.value="",this.slot="panel"}render(){return De.qy`
      <div
        role="tabpanel"
        id=${this.id}
      >
        <slot></slot>
      </div>
    `}};qt.styles=Nt,(0,Ee.Cg)([(0,Ge.MZ)({type:String})],qt.prototype,"value",void 0),(0,Ee.Cg)([(0,Ge.MZ)({type:String,reflect:!0})],qt.prototype,"slot",void 0),(0,Ee.Cg)([(0,Ge.MZ)({type:String,reflect:!0})],qt.prototype,"aria-labelledby",void 0),qt=(0,Ee.Cg)([(0,Ge.EM)("art-tab-panel")],qt);const Ut=De.AH`
  * {
    box-sizing: border-box;
  }

  :host {
    display: flex;
    flex-direction: column;
  }

  .tabs {
    align-items: flex-start;
    background: white;
    display: flex;
  }

  .tabs.sticky-header {
    position: sticky;
    top: 0;
    z-index: 999;
    padding-bottom: var(--arc-space-2-5);
  }

  slot[name='tab'] {
    display: flex;
    flex-direction: row;
    gap: var(--arc-space-4);
    padding-top: var(--arc-space-1);
  }
`;let Gt=class extends Ye{constructor(){super(...arguments),this.autofocusit=!0,this.value=null,this.stickyHeaderPosition=-1,this.tabFocus=0,this.bindEvents=()=>{this.on("art-tab:change",this.onChange),this.on("keydown",this.onKeydown)},this.onChange=e=>{e.target instanceof Ot&&(this.value=e.target.value??null,this.syncTabStates(),this.dispatch("art-tabs:change",{value:this.value}))},this.onKeydown=e=>{if(!(e.target instanceof Ot))return;const{key:t}=e;if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(t)){const e=this.$$$("art-tab","tab");"ArrowRight"===t||"ArrowUp"===t?(this.tabFocus++,this.tabFocus>=e.length&&(this.tabFocus=0)):"ArrowLeft"===t||"ArrowDown"===t?(this.tabFocus--,this.tabFocus<0&&(this.tabFocus=e.length-1)):"Home"===t?this.tabFocus=0:"End"===t&&(this.tabFocus=e.length-1),this.value=e[this.tabFocus].value,this.syncTabStates()}},this.focusFirstApplicableItem=()=>{this.value=this.$selected?.value??this.$$$("art-tab","tab")[0]?.value,this.syncTabStates(),this.dispatch("art-tabs:change",{value:this.value})},this.onTabSlotChange=()=>{this.autofocusit&&this.focusFirstApplicableItem(),this.syncAriaLabels()},this.syncAriaLabels=()=>{const e=this.$$$("art-tab-panel","panel");this.$$$("art-tab","tab").forEach(((t,i)=>{const a=`art-tabs-tab-${i}`;t.id=a,e.forEach(((e,i)=>{if(e.value===t.value){const n=`art-tabs-tab-panel-${i}`;e.id=n,e.setAttribute("aria-labelledby",a),t.setAttribute("aria-controls",n)}}))}))},this.syncTabStates=()=>{this.$$$("art-tab","tab").forEach(((e,t)=>{const i=e.value===this.value;e.toggleAttribute("selected",i),e.setAttribute("aria-selected",i.toString()),e.tabIndex=i?0:-1,i&&(this.tabFocus=t,e.focus())})),this.$$$("art-tab-panel","panel").forEach((e=>{e.toggleAttribute("hidden",this.value!==e.value)}))}}get $selected(){return this.$$$("art-tab[selected]")[0]}update(e){super.update(e),e.has("value")&&this.value!==e.get("value")&&this.syncTabStates()}render(){return De.qy`
      <div
        role="tablist"
        class=${(0,Ft.H)({tabs:!0,"sticky-header":this.stickyHeaderPosition>-1})}
        style=${(0,Pt.W)({position:this.stickyHeaderPosition>-1?"sticky":"inherit",top:this.stickyHeaderPosition>-1?`${this.stickyHeaderPosition}px`:"unset"})}
      >
        <slot
          name="tab"
          @slotchange=${this.onTabSlotChange}
        ></slot>
      </div>
      <slot name="panel"></slot>
    `}};Gt.styles=Ut,(0,Ee.Cg)([(0,Ge.MZ)({type:Boolean,reflect:!0})],Gt.prototype,"autofocusit",void 0),(0,Ee.Cg)([(0,Ge.MZ)({type:String,reflect:!0})],Gt.prototype,"value",void 0),(0,Ee.Cg)([(0,Ge.MZ)({type:Number})],Gt.prototype,"stickyHeaderPosition",void 0),Gt=(0,Ee.Cg)([(0,Ge.EM)("art-tabs")],Gt);const Yt=De.AH`
  :host {
    margin: 0;
    border: none;
    padding: 0;
  }
`;let Xt=class extends Ye{constructor(){super(...arguments),this.offsets={x:0,y:0},this.anchor=null,this.positionConfig={},this.strategy="fixed",this.isPopover=!0,this.updatePosition=async()=>{const{anchor:e,style:t}=this;if(e&&t){const{x:i,y:a}=await(0,St.rD)(e,this,{placement:"bottom",strategy:this.strategy,middleware:[(0,St.UU)(),(0,St.BN)(),(0,St.cY)(12)],...this.positionConfig});t.top=`${a}px`,t.left=`${i}px`}},this.checkClickOutside=e=>{const{anchor:t}=this;t&&!e.composedPath().includes(t)&&this.dispatchEvent(new CustomEvent("blur"))},this.handleMove=({pageX:e,pageY:t})=>{this.style.left=e-this.offsets.x+"px",this.style.top=t-this.offsets.y+"px"}}connectedCallback(){super.connectedCallback();const{anchor:e}=this;e&&(this.isPopover?(this.popover||(this.popover="manual",this.showPopover()),this.collectOff((0,St.ll)(e,this,this.updatePosition))):this.style.position="relative",this.onmousedown=({pageX:e,pageY:t})=>(this.offsets.x=e-this.offsetLeft,this.offsets.y=t-this.offsetTop,window.addEventListener("mousemove",this.handleMove,!0),!1),this.onmouseup=()=>(window.removeEventListener("mousemove",this.handleMove,!0),!1)),window.addEventListener("mousedown",this.checkClickOutside,{capture:!0,passive:!0})}disconnectedCallback(){super.disconnectedCallback(),this.isPopover&&this.hidePopover(),this.onmousedown=null,this.onmouseup=null,window.removeEventListener("mousedown",this.checkClickOutside,{capture:!0})}render(){return De.qy`
      <div class="mon-draggable">
        <slot></slot>
      </div>
    `}};Xt.styles=Yt,(0,Ee.Cg)([(0,Ge.MZ)()],Xt.prototype,"anchor",void 0),(0,Ee.Cg)([(0,Ge.MZ)({type:Object})],Xt.prototype,"positionConfig",void 0),(0,Ee.Cg)([(0,Ge.MZ)({type:String})],Xt.prototype,"strategy",void 0),(0,Ee.Cg)([(0,Ge.MZ)({type:Boolean})],Xt.prototype,"isPopover",void 0),Xt=(0,Ee.Cg)([(0,Ge.EM)("mon-draggable")],Xt);const Wt=De.AH`
  * {
    box-sizing: border-box;
  }

  :host {
    cursor: pointer;
    display: flex;
    padding: var(
      --mon-menu-item-padding,
      var(--arc-space-1) var(--arc-space-1-5)
    );
    background-color: var(--arc-color-mono-white);
    align-items: center;
    font-size: var(--art-font-size-sm);
    color: var(--art-color-mono-900);
    border-radius: var(
      --mon-menu-item-border-radius,
      var(--arc-border-radius-md)
    );
    --mon-menu-item-gap: var(--arc-space-1-5);
    height: var(--mon-menu-item-height, auto);
    min-height: var(--mon-menu-item-min-height, auto);
    min-width: var(--mon-menu-item-min-width, auto);
  }

  :host(:hover) {
    background-color: var(--mon-menu-item-hover-background-color);
  }

  :host(:focus) {
    z-index: 1;
  }

  :host([selected]) {
    background-color: var(--mon-menu-item-selected-background-color);
    color: var(--arc-color-text-primary);
  }

  slot[name='icon'],
  slot[name='shortcut'],
  slot[name='chevron'],
  .extras {
    display: flex;
    align-items: center;
  }

  slot[name='icon'],
  slot[name='shortcut'],
  slot[name='chevron'] {
    color: var(--arc-color-icon-primary);
  }

  /* Base icon slot styles */
  slot[name='icon'] {
    --_icon-size: var(--mon-menu-item-icon-size, 1.6rem);
    --mon-icon-size: var(--_icon-size);
    flex: none;
    width: 0;
    height: var(--_icon-size);
    justify-content: center;
    opacity: 0;
  }

  /* When icon slot has content */
  slot[name='icon']:not(:empty) {
    width: var(--_icon-size);
    margin-right: var(--mon-menu-item-gap);
    opacity: 1;
  }

  /* For menus that always have icons (like context menu), force consistent spacing and visibility */
  :host([data-has-icons]) slot[name='icon'] {
    width: var(--_icon-size);
    margin-right: var(--mon-menu-item-gap);
    opacity: 1;
  }

  .content {
    display: flex;
    flex: 1;
    min-width: 0;
    align-items: center;
    justify-content: space-between;
  }

  ::slotted(*:not([slot])) {
    flex: 1;
    min-width: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
  }

  .extras {
    flex: none;
    justify-content: flex-end;
  }
`;let Kt=class extends Ye{constructor(){super(...arguments),this.selected=!1,this.tabIndex=-1,this.role="menuitem",this.delegatesFocus=!1,this.focusableRef=(0,It._)(),this.bindEvents=()=>{this.on("mouseenter",(()=>{this.dispatch("hover",{value:this.value,hovered:!0})})),this.on("click",this.onClick),this.on("focus",(()=>{if(this.delegatesFocus){const e=this.querySelector('a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])');e instanceof HTMLElement&&e.focus()}}))}}onClick(){this.dispatch("mon-menu-item:select")}render(){return De.qy`
      <slot name="icon"></slot>
      <div class="content">
        <slot></slot>
        <div class="extras">
          <slot name="shortcut"></slot>
          <slot name="chevron"></slot>
        </div>
      </div>
    `}};Kt.formAssociated=!0,Kt.styles=Wt,Kt.shadowRootOptions={...De.WF.shadowRootOptions,delegatesFocus:!1},(0,Ee.Cg)([(0,Ge.MZ)({type:String,reflect:!0})],Kt.prototype,"value",void 0),(0,Ee.Cg)([(0,Ge.MZ)({type:Boolean,reflect:!0})],Kt.prototype,"selected",void 0),(0,Ee.Cg)([(0,Ge.MZ)({type:Number,reflect:!0})],Kt.prototype,"tabIndex",void 0),(0,Ee.Cg)([(0,Ge.MZ)({type:String,reflect:!0})],Kt.prototype,"role",void 0),(0,Ee.Cg)([(0,Ge.MZ)()],Kt.prototype,"delegatesFocus",void 0),(0,Ee.Cg)([(0,Ge.wk)()],Kt.prototype,"focusableRef",void 0),Kt=(0,Ee.Cg)([(0,Ge.EM)("mon-menu-item")],Kt);const Qt=De.AH`
  * {
    box-sizing: border-box;
  }

  :host {
    --mon-menu-item-hover-background-color: var(
      --arc-color-background-primary-hover
    );
    --mon-menu-item-selected-background-color: var(
      --arc-color-background-primary-selected
    );
    --mon-menu-font-size: var(--art-font-size-sm);
    --mon-menu-color: var(--art-color-mono-900);
    background: var(--arc-color-mono-white);
    border-radius: var(--mon-menu-border-radius, var(--arc-border-radius-lg));
    box-shadow: var(--mon-menu-box-shadow, var(--arc-shadow-lg));
    padding: var(--mon-menu-padding, var(--arc-space-0-5));
    min-width: var(--mon-menu-min-width, auto);
    font-size: var(--mon-menu-font-size);
    color: var(--mon-menu-color);
    display: flex;
    flex-direction: column;
  }

  :host([floating]) {
    position: var(--mon-menu-position, absolute);
    inset: var(--mon-menu-inset, 100% 0 auto 0);
    z-index: 99999;
    top: var(--mon-menu-top, unset);
    right: var(--mon-menu-right, unset);
  }
`;let ei=class extends Ye{constructor(){super(...arguments),this.floating=!1,this.autofocusit=!1,this.value=null,this.itemFocus=0,this.submit=()=>{this.dispatch("mon-menu:submit",{name:this.name,value:this.value})},this.focusFirstApplicableItem=()=>{this.menuItems[this.itemFocus]?.focus()},this.onSelect=e=>{e.stopPropagation(),this.value=e.target.value??null;for(const e of this.$$$("mon-menu-item"))e.selected=e.value===this.value;this.submit()},this.onKeyDown=e=>{const{key:t,shiftKey:i}=e;e.target.assignedSlot?.parentElement===this||e.composedPath().includes(this)?(["ArrowUp","ArrowDown","ArrowRight","End","Home"].includes(t)&&(e.stopPropagation(),e.preventDefault()),["ArrowUp","ArrowDown","End","Home"].includes(t)?("ArrowDown"===t?(this.itemFocus++,this.itemFocus>=this.menuItems.length&&(this.itemFocus=0)):"ArrowUp"===t?(this.itemFocus--,this.itemFocus<0&&(this.itemFocus=this.menuItems.length-1)):"Home"===t?this.itemFocus=0:"End"===t&&(this.itemFocus=this.menuItems.length-1),this.menuItems[this.itemFocus].focus(),this.value=this.menuItems[this.itemFocus].value??null):"Tab"===t?(i?(this.itemFocus--,this.itemFocus<0?(this.value=null,this.dispatch("mon-menu:escape")):(e.preventDefault(),e.stopPropagation(),this.menuItems[this.itemFocus].focus())):(this.itemFocus++,this.itemFocus>=this.menuItems.length&&(this.value=null,this.dispatch("mon-menu:escape"))),this.value=this.menuItems[this.itemFocus]?.value??null):"Escape"===t?this.dispatch("mon-menu:escape"):"ArrowRight"===t?this.dispatch("mon-menu:open-sub-menu",{name:this.name,value:this.value,target:this.menuItems[this.itemFocus]}):"ArrowLeft"===t&&this.dispatch("mon-menu:close-sub-menu")):("Escape"!==t&&"ArrowLeft"!==t||(this.focusFirstApplicableItem(),e.preventDefault(),e.stopPropagation()),"Tab"===t&&null===e.target.nextElementSibling&&(this.itemFocus++,e.stopPropagation()))},this.onKeyup=e=>{const{key:t}=e;"Enter"!==t&&" "!==t||(this.value=this.menuItems[this.itemFocus]?.value??null,this.submit(),e.stopPropagation())},this.onSlotChange=()=>{for(const e of this.menuItems)e.tabIndex=0,e.selected=e.value===this.value;this.autofocusit&&!wi()&&this.focusFirstApplicableItem()}}get $selected(){return this.$$$("mon-menu-item[selected]")[0]}get menuItems(){return this.$$$("mon-menu-item")}bindEvents(){this.on("mon-menu-item:select",this.onSelect),this.on("keyup",this.onKeyup),this.on("keydown",this.onKeyDown)}render(){return De.qy` <slot @slotchange=${this.onSlotChange}></slot> `}};ei.styles=Qt,(0,Ee.Cg)([(0,Ge.MZ)({type:String,reflect:!0})],ei.prototype,"name",void 0),(0,Ee.Cg)([(0,Ge.MZ)({type:Boolean,reflect:!0})],ei.prototype,"floating",void 0),(0,Ee.Cg)([(0,Ge.MZ)({type:Boolean,reflect:!0})],ei.prototype,"autofocusit",void 0),(0,Ee.Cg)([(0,Ge.MZ)({type:String})],ei.prototype,"value",void 0),ei=(0,Ee.Cg)([(0,Ge.EM)("mon-menu")],ei);const ti=De.AH`
  :host {
    position: fixed;
    z-index: var(--mon-z-index-popover);
    border-radius: var(--mon-popover-border-radius, 0);
    padding: var(--mon-popover-padding, var(--arc-space-2));
    overflow: var(--mon-popover-overflow, auto);
    box-shadow: var(--mon-popover-shadow, var(--arc-shadow-md));
    box-sizing: border-box;
    width: var(--mon-popover-width, auto);
    clip-path: var(--mon-popover-clip-path, none);
  }

  :host([semantic]) {
    border: var(--mon-overlay-border, none);
    border-radius: var(--mon-popover-border-radius, 0);
    margin: var(--mon-popover-margin, 0);
    width: var(--mon-popover-width, fit-content);
  }
`,ii={enabled:!1,padding:0,boundary:"clippingAncestors",prioritizeResize:!1,minResizeHeight:0,minResizeWidth:0,enableShiftCrossAxis:!1,flipPadding:0,shiftPadding:0,maxResizeHeight:1/0,maxResizeWidth:1/0,avoidFlipOverlap:!1,matchAnchorWidth:!1};let ai=class extends Ye{constructor(){super(...arguments),this.autoFlip=!0,this.autoResizeOptions={},this.customMiddleware=[],this.autoShift=!0,this.semantic=!1,this.enableAutoUpdates=!0,this.semanticPriority=0,this.offset=10,this.placement="bottom",this.sizeMiddlewareOptions={...ii,...this.autoResizeOptions},this.middleware=[],this.syncMiddleware=()=>{this.sizeMiddlewareOptions={...ii,...this.autoResizeOptions};const e=this.sizeMiddlewareOptions.avoidFlipOverlap,t=this.sizeMiddlewareOptions.minResizeWidth,i=this.sizeMiddlewareOptions.maxResizeWidth,a=this.sizeMiddlewareOptions.minResizeHeight,n=this.sizeMiddlewareOptions.maxResizeHeight,r=this.sizeMiddlewareOptions.matchAnchorWidth,o="number"==typeof this.sizeMiddlewareOptions.shiftPadding?this.sizeMiddlewareOptions.shiftPadding:this.sizeMiddlewareOptions.shiftPadding.top??0,s=this.sizeMiddlewareOptions.enabled&&(0,St.Ej)({apply({availableWidth:s,availableHeight:l,elements:c,rects:d,y:p,placement:h}){const u=n?`${n}px`:"",g=[l,n,window.innerHeight-o];if(e){const e=c.reference.getBoundingClientRect().top;e>p&&h.includes("top")&&g.push(window.innerHeight-(window.innerHeight-e)-o)}const m=`${Math.max(a,Math.min(...g))}px`;c.floating.style.maxHeight=l>=c.floating.scrollHeight?u:m,c.floating.style.maxWidth=`${Math.max(t,Math.min(i,s))}px`,r&&(c.floating.style.minWidth=`${d.reference.width}px`)},padding:this.sizeMiddlewareOptions.padding,boundary:this.sizeMiddlewareOptions.boundary}),l=this.autoShift&&(0,St.BN)({crossAxis:this.sizeMiddlewareOptions.enableShiftCrossAxis,padding:this.sizeMiddlewareOptions.shiftPadding}),c=(0,St.cY)(this.offset);this.sizeMiddlewareOptions.prioritizeResize?this.middleware=[s,this.autoFlip&&(0,St.UU)({fallbackStrategy:"initialPlacement",flipAlignment:!1,padding:this.sizeMiddlewareOptions.flipPadding}),l,...this.customMiddleware,c].filter((e=>!!e)):this.middleware=[this.autoFlip&&(0,St.UU)({padding:this.sizeMiddlewareOptions.flipPadding}),l,s,...this.customMiddleware,c].filter((e=>!!e))},this.updatePosition=()=>{this.anchor&&(0,St.rD)(this.anchor,this,{placement:this.placement,strategy:"fixed",middleware:this.middleware}).then((({x:e,y:t})=>{this.style.left=`${e}px`,this.style.top=`${t}px`}))}}updated(e){if(super.updated(e),Array.from(e.keys()).some((e=>["autoFlip","autoShift","autoResizeOptions","customMiddleware","offset"].includes(e)))&&this.syncMiddleware(),e.has("semantic")&&(this.semantic?(this.hasAttribute("popover")||(this.setAttribute("popover","manual"),function(e,t){const i=[];let a;{let n=0;for(;n<z.length;n+=1){const e=z[n];if(e.order>t)break;i.push(e)}for(a=n,i.push({element:e,order:t});n<z.length;n+=1){const e=z[n];e.element.hidePopover(),i.push(e)}}for(let e=a;e<i.length;e+=1)i[e].element.showPopover();z=i}(this,this.semanticPriority)),this.collectOff((()=>{this.hasAttribute("popover")&&(y(this),this.removeAttribute("popover"))}))):this.hasAttribute("popover")&&(y(this),this.removeAttribute("popover"))),e.has("anchor")&&this.anchor)if(this.enableAutoUpdates){this.autoUpdateDisposer&&this.autoUpdateDisposer();const e=(0,St.ll)(this.anchor,this,this.updatePosition,{animationFrame:!0});this.collectOff(e),this.autoUpdateDisposer=e}else this.updatePosition()}render(){return De.qy`<slot></slot>`}};ai.styles=ti,(0,Ee.Cg)([(0,Ge.MZ)()],ai.prototype,"anchor",void 0),(0,Ee.Cg)([(0,Ge.MZ)({type:Boolean})],ai.prototype,"autoFlip",void 0),(0,Ee.Cg)([(0,Ge.MZ)({type:Object})],ai.prototype,"autoResizeOptions",void 0),(0,Ee.Cg)([(0,Ge.MZ)({type:Array})],ai.prototype,"customMiddleware",void 0),(0,Ee.Cg)([(0,Ge.MZ)({type:Boolean})],ai.prototype,"autoShift",void 0),(0,Ee.Cg)([(0,Ge.MZ)({type:Boolean,reflect:!0})],ai.prototype,"semantic",void 0),(0,Ee.Cg)([(0,Ge.MZ)({type:Boolean})],ai.prototype,"enableAutoUpdates",void 0),(0,Ee.Cg)([(0,Ge.MZ)({type:Number,reflect:!0})],ai.prototype,"semanticPriority",void 0),(0,Ee.Cg)([(0,Ge.MZ)()],ai.prototype,"offset",void 0),(0,Ee.Cg)([(0,Ge.MZ)({type:String})],ai.prototype,"placement",void 0),ai=(0,Ee.Cg)([(0,Ge.EM)("mon-popover")],ai);const ni=De.AH`
  * {
    box-sizing: border-box;
  }

  :host {
    --icon-color: var(--arc-color-neutral-600);
    display: block;
    position: relative;
    max-width: 100%;
  }

  .hidden {
    display: none;
  }

  .trigger {
    cursor: pointer;
    width: 100%;
    height: 3.2rem;
    display: flex;
    align-items: center;
    gap: var(--arc-space-0-75);
    border: none;
    border-radius: var(--arc-border-radius-md);
    background: var(--mon-color-input);
    padding: 0 var(--arc-space-1-5);
    text-align: left;
    font-family: inherit;
    font-size: var(--arc-font-size-14);
    outline: none;
  }

  .trigger:hover {
    box-shadow: var(--mon-input-hover-box-shadow);
  }

  .trigger:focus-visible {
    box-shadow: var(--mon-input-focus-box-shadow);
  }

  .trigger-content {
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .trigger-icon {
    width: 14px;
    height: 14px;
    fill: var(--arc-color-neutral-700);
  }

  .mon-select-popover {
    --mon-popover-padding: 0;
    --mon-popover-border-radius: var(--arc-border-radius-lg);
  }

  .mon-select-menu {
    overflow-y: auto;
    --mon-menu-border-radius: 0;
  }
`;let ri=class extends Ye{constructor(){super(...arguments),this.value=null,this.popoverPlacement="bottom-end",this.placeholder="Choose an item...",this.open=!1,this.labelText="",this.anchorRef=(0,It._)(),this.scrollBarWidth=x,this.cancel=()=>{this.open&&(this.dispatch("mon-select:cancel"),this.dispatch("mon-select:close")),this.open=!1},this.onMenuEscape=()=>{this.cancel()},this.onSubmit=e=>{this.open=!1,e.stopPropagation(),this.dispatch("mon-select:close"),this.dispatch("mon-select:change",{name:this.name,value:e.detail.value})},this.onClickOutside=()=>{this.cancel()},this.onClickTrigger=()=>{this.open?this.cancel():(this.open=!0,this.dispatch("mon-select:open"))},this.onKeyDown=e=>{"ArrowLeft"===e.key&&e.stopPropagation()},this.onButtonKeyDown=e=>{"Enter"===e.key?e.preventDefault():"ArrowDown"===e.key&&(e.stopPropagation(),this.open=!0,this.dispatch("mon-select:open"))},this.onSlotChange=()=>{this.syncLabelText()},this.syncLabelText=()=>{this.labelText=this.$$$("mon-menu-item")?.filter((e=>e.value===this.value))[0]?.innerText??this.placeholder},this.handleRefChange=e=>{this.anchorRef=e}}get $selected(){return this.$$$("mon-menu-item[selected]")[0]}bindEvents(){this.on("mon-menu:escape",this.onMenuEscape),this.on("keydown",this.onKeyDown),this.collectOff(Ne("mousedown",window,(e=>{const t=e.composedPath();e.target instanceof Node&&!t.includes(this)&&this.onClickOutside()}),{capture:!0,passive:!0}))}updated(e){e.has("value")&&this.syncLabelText(),this.open&&!1===e.get("open")&&window.requestAnimationFrame((()=>{const e=this.$$$("mon-menu-item")?.find((e=>e.value===this.value));e?.scrollIntoView({behavior:"instant",block:"nearest"})}))}renderTrigger(){return De.qy`
      <button
        ${(0,It.K)(this.handleRefChange)}
        @click=${this.onClickTrigger}
        @keydown=${this.onButtonKeyDown}
        type="button"
        class="trigger"
      >
        <span class="trigger-content">
          <slot name="selected">${this.labelText}</slot>
        </span>
        <span class="trigger-icon">
          <!-- TODO: Stop using '<i />'-based icons; use svgs instead. -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
            <path
              d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
            />
          </svg>
        </span>
      </button>
    `}renderMenu(){return this.open?De.qy`
          <mon-popover
            .anchor=${this.anchorRef}
            class="mon-select-popover"
            .offset=${0}
            .autoResizeOptions=${{enabled:!0,padding:{top:0,right:0,bottom:36,left:0},prioritizeResize:!0,minResizeHeight:72,enableShiftCrossAxis:!0,shiftPadding:{top:99,right:0,bottom:0,left:this.scrollBarWidth},maxResizeHeight:400,avoidFlipOverlap:!0,matchAnchorWidth:!0}}
            placement=${this.popoverPlacement}
            semantic=${!0}
            .autoShift=${!0}
          >
            <mon-menu
              class="mon-select-menu"
              name=${this.name}
              autofocusit
              @mon-menu:submit=${this.onSubmit}
              value=${this.value}
            >
              <slot></slot>
            </mon-menu>
          </mon-popover>
        `:De.qy`<slot
          class="hidden"
          @slotchange=${this.onSlotChange}
        ></slot>`}render(){return De.qy`${this.renderTrigger()}${this.renderMenu()}`}};ri.styles=ni,(0,Ee.Cg)([(0,Ge.MZ)({type:String,reflect:!0})],ri.prototype,"name",void 0),(0,Ee.Cg)([(0,Ge.MZ)({type:String})],ri.prototype,"value",void 0),(0,Ee.Cg)([(0,Ge.MZ)({type:String})],ri.prototype,"popoverPlacement",void 0),(0,Ee.Cg)([(0,Ge.MZ)()],ri.prototype,"placeholder",void 0),(0,Ee.Cg)([(0,Ge.wk)()],ri.prototype,"open",void 0),(0,Ee.Cg)([(0,Ge.wk)()],ri.prototype,"labelText",void 0),(0,Ee.Cg)([(0,Ge.wk)()],ri.prototype,"anchorRef",void 0),(0,Ee.Cg)([(0,Ge.wk)()],ri.prototype,"scrollBarWidth",void 0),ri=(0,Ee.Cg)([(0,Ge.EM)("mon-select")],ri);const oi=De.AH`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  :host {
    --border-color: rgb(0 0 0 / 30%);
    --border-color-active: black;
    --border-color-active-hover: rgb(0 0 0 / 60%);
    --border-color-hover: black;
    --border-radius: calc(0.5 * var(--toggle-height));
    --border-width: 1px;
    --control-width: 3.8rem;
    --focus-color: #4d90fe;
    --handle-bg-color: white;
    --handle-box-shadow: 0 2px 6px 0 rgb(0 0 0 / 16%);
    --inset-active-bg-color: black;
    --inset-active-bg-hover-color: rgb(0 0 0 / 60%);
    --inset-bg-color: rgb(0 0 0 / 5%);
    --inset-bg-hover-color: rgb(0 0 0 / 10%);
    --toggle-height: 2.2rem;
    --transition: 0.1s ease-out;
  }

  .toggle .control {
    background-color: var(--inset-bg-color);
    border: var(--border-width) solid var(--border-color);
    border-radius: var(--border-radius);
    cursor: pointer;
    height: var(--toggle-height);
    position: relative;
    transition: var(--transition);
    width: var(--control-width);
  }

  .toggle .handle {
    background-color: var(--handle-bg-color);
    border: var(--border-width) solid var(--border-color);
    border-radius: var(--border-radius);
    box-shadow: var(--handle-box-shadow);
    height: var(--toggle-height);
    left: calc(-1 * var(--border-width));
    position: absolute;
    top: calc(-1 * var(--border-width));
    transition: var(--transition);
    width: var(--toggle-height);
  }

  .toggle.active .control {
    background-color: var(--inset-active-bg-color);
  }

  .toggle.active .handle {
    border-color: var(--border-color-active);
    transform: translateX(calc(var(--control-width) - var(--toggle-height)));
  }

  .toggle.active:hover .control {
    background-color: var(--inset-active-bg-hover-color);
    border-color: var(--border-color-active-hover);
  }

  .toggle.active:hover .handle {
    border-color: var(--border-color-active-hover);
  }

  .toggle:hover .control {
    background-color: var(--inset-bg-hover-color);
    border-color: var(--border-color-hover);
  }

  .toggle:hover .handle {
    border-color: var(--border-color-hover);
  }

  .toggle.in-focus .control {
    outline: 2px solid var(--focus-color);
    outline-offset: 1px;
  }
`;let si=class extends Ye{constructor(){super(...arguments),this.focusedByClick=!1,this.animationDuration=250}toggleSwitch(e){!0===e?this.toggle?.classList.add("active"):!1===e?this.toggle?.classList.remove("active"):this.toggle?.classList.toggle("active")}handleClick(){this.focusedByClick=!0,this.checkboxes[0].checked=!this.checkboxes[0].checked,this.checkboxes[0].dispatchEvent(new Event("change")),setTimeout((()=>{this.focusedByClick=!1}))}handleFocus(){setTimeout((()=>{!1===this.focusedByClick&&this.toggleVisibleFocus(!0)}))}handleBlur(){this.toggleVisibleFocus(!1)}toggleVisibleFocus(e){!0===e?this.toggle.classList.add("in-focus"):this.toggle.classList.remove("in-focus")}handleCheckboxChange(e){const t=e.target;this.toggleSwitch(t.checked)}handleKeydown(e){"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),this.handleClick())}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.checkboxes.forEach((e=>{this.toggleSwitch(e.checked),e.style.left="0",e.style.opacity="0.01",e.style.outline="none !important",e.style.position="absolute",e.style.top="0",e.addEventListener("focus",this.handleFocus.bind(this)),e.addEventListener("blur",this.handleBlur.bind(this)),e.addEventListener("change",this.handleCheckboxChange.bind(this)),e.addEventListener("keydown",this.handleKeydown.bind(this))}))}render(){return De.qy`
      <div class="toggle">
        <div
          @click=${this.handleClick}
          class="control"
        >
          <div class="handle"></div>
        </div>
        <slot></slot>
      </div>
    `}};si.styles=oi,(0,Ee.Cg)([(0,Ge.P)(".toggle")],si.prototype,"toggle",void 0),(0,Ee.Cg)([(0,Ge.P)(".control")],si.prototype,"control",void 0),(0,Ee.Cg)([(0,Ge.KN)({selector:'input[type="checkbox"]'})],si.prototype,"checkboxes",void 0),(0,Ee.Cg)([(0,Ge.wk)()],si.prototype,"focusedByClick",void 0),(0,Ee.Cg)([(0,Ge.MZ)({type:Number})],si.prototype,"animationDuration",void 0),si=(0,Ee.Cg)([(0,Ge.EM)("mon-toggle")],si);const li=(e,t)=>{const i=t.cssText,a=new WeakSet;return t=>{const n=t.getRootNode();if(!a.has(n)){a.add(n);const t=(n instanceof ShadowRoot?n.ownerDocument:n instanceof Document?n:document).createElement("style");t.setAttribute("data-svelte-lit-styles",e),t.textContent=i,n.appendChild(t)}}},ci=De.AH`
  &[data-flex='1'] {
    --arc-internal-btn-flex: 1;
  }

  &[data-flex='2'] {
    --arc-internal-btn-flex: 2;
  }

  &[data-flex='3'] {
    --arc-internal-btn-flex: 3;
  }

  &[data-flex='4'] {
    --arc-internal-btn-flex: 4;
  }

  &[data-flex='5'] {
    --arc-internal-btn-flex: 5;
  }

  &[data-layout='fill'] {
    --arc-internal-btn-display: flex;
    --arc-internal-btn-width: 100%;
    --arc-internal-btn-content-width: 0;
  }

  &[data-layout='icon'] {
    --arc-internal-btn-flex: none;
    --arc-internal-btn-padding-inline: 0;
    --arc-internal-btn-min-width: min-content;
    --arc-internal-btn-max-width: none;
    --arc-internal-btn-aspect-ratio: 1 / 1;

    &[data-shape='narrow'] {
      --arc-internal-btn-padding-inline: 2;
      --arc-internal-btn-aspect-ratio: auto;
    }
  }
`,di=De.AH`
  &[data-size='xxl'] {
    --arc-modifier: 16; /* unitless, desired font size at 100% */
    --arc-internal-btn-icon-size: 20;
    --arc-internal-btn-height: 56;
    --arc-internal-btn-gap: 10;
    --arc-internal-btn-padding-inline: 32;
    --arc-internal-btn-spinner-width: 32;
  }

  &[data-size='xl'] {
    --arc-modifier: 14; /* unitless, desired font size at 100% */
    --arc-internal-btn-icon-size: 16;
    --arc-internal-btn-height: 48;
    --arc-internal-btn-gap: 8;
    --arc-internal-btn-padding-inline: 32;
    --arc-internal-btn-spinner-width: 16;
  }

  &[data-size='lg'] {
    /** @default */
    --arc-modifier: 14; /* unitless, desired font size at 100% */
    --arc-internal-btn-icon-size: 16;
    --arc-internal-btn-height: 40;
    --arc-internal-btn-gap: 8;
    --arc-internal-btn-padding-inline: 20;
    --arc-internal-btn-spinner-width: 16;
  }

  &[data-size='md'] {
    --arc-modifier: 14; /* unitless, desired font size at 100% */
    --arc-internal-btn-icon-size: 14;
    --arc-internal-btn-height: 32;
    --arc-internal-btn-gap: 8;
    --arc-internal-btn-padding-inline: 16;
    --arc-internal-btn-spinner-width: 16;
  }

  &[data-size='sm'] {
    --arc-modifier: 12; /* unitless, desired font size at 100% */
    --arc-internal-btn-icon-size: 12;
    --arc-internal-btn-height: 24;
    --arc-internal-btn-gap: 4;
    --arc-internal-btn-padding-inline: 12;
    --arc-internal-btn-spinner-width: 14;
  }
`,pi=De.AH`
  &[data-variant='primary'] {
    /** @default */
    --arc-internal-btn-text: var(--arc-color-mono-white);
    --arc-internal-btn-fill: var(--arc-color-mono-black);
    --arc-internal-btn-edge: transparent;

    --arc-internal-btn-hover-fill: var(--arc-color-neutral-800);

    --arc-internal-btn-active-text: var(--arc-color-neutral-200);
    --arc-internal-btn-active-fill: var(--arc-color-neutral-600);

    --arc-internal-btn-disabled-text: var(--arc-color-alpha-black-30);
    --arc-internal-btn-disabled-fill: var(--arc-color-alpha-black-05);

    --arc-internal-btn-processing-fill: var(--arc-color-neutral-800);
  }

  &[data-variant='secondary'] {
    /** @default - when icon-only */
    --arc-internal-btn-text: var(--arc-color-mono-black);
    --arc-internal-btn-fill: var(--arc-color-mono-white);
    --arc-internal-btn-edge: var(--arc-color-border-full);

    --arc-internal-btn-hover-fill: var(--arc-color-neutral-100);

    --arc-internal-btn-active-text: var(--arc-color-alpha-black-60);
    --arc-internal-btn-active-fill: var(--arc-color-neutral-200);
    --arc-internal-btn-active-edge: var(--arc-color-border-stark);

    --arc-internal-btn-disabled-text: var(--arc-color-alpha-black-30);
    --arc-internal-btn-disabled-edge: var(--arc-color-border-standard);
    --arc-internal-btn-disabled-fill: var(--arc-color-alpha-white-60);

    --arc-internal-btn-processing-text: var(--arc-color-neutral-200);
    --arc-internal-btn-processing-edge: var(--arc-color-border-stark);
    --arc-internal-btn-processing-fill: var(--arc-color-alpha-white-30);

    &[data-layout='icon'] {
      --arc-internal-btn-edge: var(--arc-color-border-standard);
      --arc-internal-btn-hover-edge: var(--arc-color-border-stark);
      --arc-internal-btn-focus-edge: var(--arc-color-border-standard);
    }
  }

  &[data-variant='tertiary'] {
    --arc-internal-btn-text: var(--arc-color-mono-black);
    --arc-internal-btn-fill: transparent;
    --arc-internal-btn-edge: transparent;

    --arc-internal-btn-hover-fill: var(--arc-color-alpha-black-05);

    --arc-internal-btn-focus-fill: var(--arc-color-alpha-white-05);

    --arc-internal-btn-active-text: var(--arc-color-alpha-black-60);
    --arc-internal-btn-active-fill: var(--arc-color-alpha-black-10);

    --arc-internal-btn-disabled-text: var(--arc-color-alpha-black-30);

    --arc-internal-btn-processing-text: var(--arc-color-neutral-200);
    --arc-internal-btn-processing-fill: var(--arc-color-alpha-black-03);
  }

  /** TODO: We'll need to true this up once the design system component implements their text variant */
  &[data-variant='text'] {
    --arc-internal-btn-text: var(--arc-color-mono-black);
    --arc-internal-btn-fill: transparent;
    --arc-internal-btn-edge: transparent;

    --arc-internal-btn-hover-text: var(--arc-color-neutral-700);

    --arc-internal-btn-focus-fill: var(--arc-color-alpha-white-05);

    --arc-internal-btn-active-text: var(--arc-color-neutral-500);

    --arc-internal-btn-disabled-text: var(--arc-color-neutral-300);

    --arc-internal-btn-processing-text: var(--art-color-neutral-200);
  }
`,hi=De.AH`
  &[data-variant='primary-inverse'] {
    --arc-internal-btn-text: var(--arc-color-mono-black);
    --arc-internal-btn-fill: var(--arc-color-mono-white);
    --arc-internal-btn-edge: transparent;

    --arc-internal-btn-hover-fill: var(--arc-color-alpha-white-80);

    --arc-internal-btn-active-text: var(--arc-color-alpha-black-80);
    --arc-internal-btn-active-fill: var(--arc-color-alpha-white-60);

    --arc-internal-btn-disabled-text: var(--arc-color-alpha-white-40);
    --arc-internal-btn-disabled-fill: var(--arc-color-alpha-white-20);

    --arc-internal-btn-processing-text: var(--arc-color-neutral-200);
    --arc-internal-btn-processing-fill: var(--arc-color-alpha-white-30);

    &[data-layout='icon'] {
      --arc-internal-btn-hover-fill: var(--arc-color-alpha-white-70);
    }
  }

  &[data-variant='secondary-inverse'] {
    --arc-internal-btn-text: var(--arc-color-alpha-white-95);
    --arc-internal-btn-fill: transparent;
    --arc-internal-btn-edge: var(--arc-color-alpha-white-60);

    --arc-internal-btn-hover-fill: var(--arc-color-alpha-white-20);
    --arc-internal-btn-hover-edge: var(--arc-color-alpha-white-80);

    --arc-internal-btn-focus-fill: var(--arc-color-alpha-black-05);
    --arc-internal-btn-focus-edge: var(--arc-color-alpha-white-60);

    --arc-internal-btn-active-text: var(--arc-color-alpha-white-95);
    --arc-internal-btn-active-fill: var(--arc-color-alpha-white-40);
    --arc-internal-btn-active-edge: var(--arc-color-alpha-white-50);

    --arc-internal-btn-disabled-text: var(--arc-color-alpha-white-40);
    --arc-internal-btn-disabled-edge: var(--arc-color-alpha-white-20);

    --arc-internal-btn-processing-text: var(--arc-color-neutral-200);
    --arc-internal-btn-processing-fill: transparent;
    --arc-internal-btn-processing-edge: var(--arc-color-alpha-white-60);

    &[data-layout='icon'] {
      --arc-internal-btn-text: var(--arc-color-alpha-white-80);

      --arc-internal-btn-hover-text: var(--arc-color-alpha-white-100);
      --arc-internal-btn-hover-fill: var(--arc-color-alpha-white-30);

      --arc-internal-btn-focus-text: var(--arc-color-alpha-white-100);
      --arc-internal-btn-focus-fill: var(--arc-color-alpha-black-05);
      --arc-internal-btn-focus-edge: var(--arc-color-alpha-white-60);

      --arc-internal-btn-active-text: var(--arc-color-alpha-white-80);
      --arc-internal-btn-active-fill: var(--arc-color-alpha-white-30);
      --arc-internal-btn-active-edge: var(--arc-color-alpha-white-40);
    }
  }

  &[data-variant='tertiary-inverse'] {
    --arc-internal-btn-text: var(--arc-color-alpha-white-95);
    --arc-internal-btn-fill: transparent;
    --arc-internal-btn-edge: transparent;

    --arc-internal-btn-hover-fill: var(--arc-color-alpha-white-20);

    --arc-internal-btn-active-text: var(--arc-color-alpha-white-80);
    --arc-internal-btn-active-fill: var(--arc-color-alpha-white-40);

    --arc-internal-btn-disabled-text: var(--arc-color-alpha-white-40);

    --arc-internal-btn-processing-text: var(--arc-color-neutral-200);
    --arc-internal-btn-processing-fill: var(--arc-color-alpha-white-20);

    &[data-layout='icon'] {
      --arc-internal-btn-text: var(--arc-color-alpha-white-80);

      --arc-internal-btn-hover-text: var(--arc-color-alpha-white-100);
      --arc-internal-btn-hover-fill: var(--arc-color-alpha-white-30);

      --arc-internal-btn-focus-text: var(--arc-color-alpha-white-100);
      --arc-internal-btn-focus-fill: var(--arc-color-alpha-black-05);

      --arc-internal-btn-active-text: var(--arc-color-alpha-white-80);
      --arc-internal-btn-active-fill: var(--arc-color-alpha-white-30);
    }
  }
`,ui=De.AH`
  &[data-variant='ai-primary'] {
    --arc-internal-btn-text: var(--arc-color-mono-white);
    --arc-internal-btn-fill:
      var(--arc-gradient-ai-500) padding-box,
      var(--arc-gradient-ai-200) border-box;

    --arc-internal-btn-hover-fill:
      var(--arc-gradient-ai-400) padding-box,
      var(--arc-gradient-ai-200) border-box;

    --arc-internal-btn-active-text: var(--arc-color-alpha-white-80);
    --arc-internal-btn-active-fill:
      var(--arc-gradient-ai-600) padding-box,
      var(--arc-gradient-ai-200) border-box;

    --arc-internal-btn-disabled-fill: var(--arc-color-alpha-black-05);

    --arc-internal-btn-processing-text: var(--arc-color-alpha-white-70);
    --arc-internal-btn-processing-fill:
      var(--arc-gradient-ai-400) padding-box,
      var(--arc-gradient-ai-100) border-box;
  }

  &[data-variant='ai-secondary'] {
    --arc-internal-btn-text: var(--arc-color-mono-black);
    --arc-internal-btn-fill:
      linear-gradient(var(--arc-color-mono-white) 0 0) padding-box,
      var(--arc-gradient-ai-200) border-box;

    --arc-internal-btn-hover-fill:
      var(--arc-gradient-ai-050) padding-box,
      var(--arc-gradient-ai-300) border-box;

    --arc-internal-btn-active-text: var(--arc-color-alpha-black-60);
    --arc-internal-btn-active-fill:
      var(--arc-gradient-ai-050) padding-box,
      var(--arc-gradient-ai-100) border-box;

    --arc-internal-btn-disabled-fill: var(--arc-color-alpha-white-30);

    --arc-internal-btn-processing-text: var(--arc-color-neutral-200);
    --arc-internal-btn-processing-fill:
      linear-gradient(var(--arc-color-mono-white) 0 0) padding-box,
      var(--arc-gradient-ai-100) border-box;
  }

  &[data-variant^='ai-'] {
    --arc-internal-btn-border-width: var(--arc-computed-ai-btn-border-width);
    --arc-internal-btn-edge: transparent;
    --arc-internal-btn-disabled-text: var(--arc-color-alpha-black-30);
    --arc-internal-btn-disabled-edge: var(--arc-color-border-standard);
  }
`,gi=De.AH`
  &[data-variant='critical-primary'] {
    --arc-internal-btn-text: var(--arc-color-mono-white);
    --arc-internal-btn-fill: var(--arc-color-critical-dark);
    --arc-internal-btn-edge: transparent;

    --arc-internal-btn-hover-fill: var(--arc-color-critical-heavy);

    --arc-internal-btn-active-text: var(--arc-color-critical-medium);
    --arc-internal-btn-active-fill: var(--arc-color-critical-heavy);

    --arc-internal-btn-disabled-text: var(--arc-color-alpha-black-30);
    --arc-internal-btn-disabled-fill: var(--arc-color-alpha-black-05);

    --arc-internal-btn-processing-fill: var(--arc-color-critical-heavy);
  }

  &[data-variant='critical-secondary'] {
    --arc-internal-btn-text: var(--arc-color-critical-dark);
    --arc-internal-btn-fill: transparent;
    --arc-internal-btn-edge: var(--arc-color-critical-dark);

    --arc-internal-btn-hover-fill: var(--arc-color-critical-light);
    --arc-internal-btn-focus-fill: var(--arc-color-alpha-white-100);

    --arc-internal-btn-active-text: var(--arc-color-red-300);
    --arc-internal-btn-active-fill: var(--arc-color-red-100);
    --arc-internal-btn-active-edge: var(--arc-color-critical-medium);

    --arc-internal-btn-disabled-text: var(--arc-color-alpha-black-30);
    --arc-internal-btn-disabled-fill: var(--arc-color-alpha-white-30);
    --arc-internal-btn-disabled-edge: var(--arc-color-border-standard);

    --arc-internal-btn-processing-text: var(--arc-color-neutral-200);
    --arc-internal-btn-processing-edge: var(--arc-color-critical-medium);
  }
`,mi=De.AH`
  ${pi}
  ${hi}
  ${gi}
  ${ui}
`;li("MonArcButton",De.AH`
  [arc-button] {
    ${di}
    ${ci}
    ${mi}

    & {
      --arc-internal-btn-text-color: var(--arc-internal-btn-text);
      --arc-internal-btn-fill-color: var(--arc-internal-btn-fill);
      --arc-internal-btn-edge-color: var(--arc-internal-btn-edge);

      --arc-internal-btn-border-radius: var(--arc-border-radius-pill);
      --arc-internal-btn-border-radius-md: 4;
      --arc-internal-btn-border-width: 1;
      --arc-internal-btn-outline-size: 2;

      --arc-modifier-px: var(--arc-modifier) * 1px;
      --arc-modifier-em: var(--arc-modifier) * 1em;

      /* COMPUTED VARIABLES ------------------------------------------• */

      --arc-computed-btn-font-size: calc(var(--arc-modifier-px));
      --arc-computed-btn-icon-size: calc(
        var(--arc-internal-btn-icon-size) / var(--arc-modifier-em)
      );
      --arc-computed-btn-border-width: calc(
        var(--arc-internal-btn-border-width) / var(--arc-modifier-em)
      );
      --arc-computed-btn-outline-size: max(
        var(--arc-border-width-md),
        calc(var(--arc-internal-btn-outline-size) / var(--arc-modifier-em))
      );
      --arc-computed-btn-border-radius-md: calc(
        var(--arc-internal-btn-border-radius-md) / var(--arc-modifier-em)
      );
      --arc-computed-btn-height: calc(
        var(--arc-internal-btn-height) / var(--arc-modifier-em)
      );
      --arc-computed-btn-padding-inline: calc(
        var(--arc-internal-btn-padding-inline) / var(--arc-modifier-em)
      );
      --arc-computed-btn-gap: calc(
        var(--arc-internal-btn-gap) / var(--arc-modifier-em)
      );
      --arc-computed-btn-spinner-width: calc(
        var(--arc-internal-btn-spinner-width) / var(--arc-modifier-em)
      );

      /* Inter-Component Communication -------------------------------• */
      --arc-icon-size: var(
        --arc-computed-btn-icon-size
      ); /** @computed • ArcIcon size */
    }

    &:is(
        [data-layout='icon']:not([data-shape]),
        [data-shape='square'],
        [data-shape='narrow']
      ) {
      --arc-internal-btn-border-radius: var(
        --arc-computed-btn-border-radius-md
      ); /** @computed • border-radius */
    }

    &[data-variant^='ai-'] {
      --arc-computed-btn-border-width: calc(2 / var(--arc-modifier-em));
    }

    /* STATES --------------------------------------------------------- */

    &:is([data-is-processing], :has(input)) {
      --arc-internal-btn-position: relative;
    }

    &:disabled {
      --arc-internal-btn-cursor: not-allowed;
      --arc-internal-btn-text-color: var(
        --arc-internal-btn-disabled-text,
        var(--arc-internal-btn-text)
      );
      --arc-internal-btn-fill-color: var(
        --arc-internal-btn-disabled-fill,
        var(--arc-internal-btn-fill)
      );
      --arc-internal-btn-edge-color: var(
        --arc-internal-btn-disabled-edge,
        var(--arc-internal-btn-edge)
      );
    }

    &:not(:disabled, [data-is-processing]) {
      &:hover {
        --arc-internal-btn-text-color: var(
          --arc-internal-btn-hover-text,
          var(--arc-internal-btn-text)
        );
        --arc-internal-btn-fill-color: var(
          --arc-internal-btn-hover-fill,
          var(--arc-internal-btn-fill)
        );
        --arc-internal-btn-edge-color: var(
          --arc-internal-btn-hover-edge,
          var(--arc-internal-btn-edge)
        );
      }

      &:is(:active, [data-is-active]) {
        --arc-internal-btn-text-color: var(
          --arc-internal-btn-active-text,
          var(--arc-internal-btn-text)
        );
        --arc-internal-btn-fill-color: var(
          --arc-internal-btn-active-fill,
          var(--arc-internal-btn-fill)
        );
        --arc-internal-btn-edge-color: var(
          --arc-internal-btn-active-edge,
          var(--arc-internal-btn-edge)
        );
      }
    }

    &[data-is-processing] {
      --arc-internal-btn-cursor: default;
      --arc-internal-btn-content-visibility: hidden;
      --arc-internal-btn-content-opacity: 0;

      --arc-internal-btn-text-color: var(
        --arc-internal-btn-processing-text,
        var(--arc-internal-btn-text)
      );
      --arc-internal-btn-fill-color: var(
        --arc-internal-btn-processing-fill,
        var(--arc-internal-btn-fill)
      );
      --arc-internal-btn-edge-color: var(
        --arc-internal-btn-processing-edge,
        var(--arc-internal-btn-edge)
      );

      /* spinner svg style controls */
      --arc-internal-btn-spinner-circle-opacity: var(--arc-alpha-30);
      --arc-internal-btn-spinner-circle-stroke: var(
        --arc-internal-btn-text-color
      );
      --arc-internal-btn-spinner-progress-stroke: var(
        --arc-internal-btn-text-color
      );

      &:is(
      [data-variant*=secondary], /* contains 'secondary' */
      [data-variant*=tertiary], /* contains 'tertiary' */
      [data-variant^=ai-], /* starts with 'ai-' */
      [data-variant$=-inverse] /* ends with '-inverse' */
    ) {
        --arc-internal-btn-spinner-circle-opacity: var(--arc-alpha-100);
        --arc-internal-btn-spinner-progress-stroke: var(--arc-color-brand-root);
      }
    }

    &:where(:focus, :focus-within):focus-visible {
      --arc-internal-btn-text-color: var(
        --arc-internal-btn-focus-text,
        var(--arc-internal-btn-text)
      );
      --arc-internal-btn-fill-color: var(
        --arc-internal-btn-focus-fill,
        var(--arc-internal-btn-fill)
      );
      --arc-internal-btn-edge-color: var(
        --arc-internal-btn-focus-edge,
        var(--arc-internal-btn-edge)
      );
      --arc-internal-btn-outline-color: var(--arc-color-border-focus);

      &[data-variant$='-inverse'] {
        --arc-internal-btn-outline-color: var(--arc-color-border-focus-inverse);
      }

      outline: var(--arc-computed-btn-outline-size) solid
        var(--arc-internal-btn-outline-color); /** @computed • outline-width */
      outline-offset: var(
        --arc-button-outline-offset,
        var(--arc-computed-btn-outline-size)
      ); /** @computed • outline-offset */

      * {
        outline: none;
      }
    }
  }

  /* CORE STYLES ------------------------------------------------------ */

  [arc-button]:not([hidden]) {
    flex: var(--arc-internal-btn-flex, unset);
    display: var(--arc-internal-btn-display, inline-flex);
    align-items: center;
    justify-content: center;
  }

  [arc-button] {
    appearance: none;
    cursor: var(--arc-internal-btn-cursor, pointer);
    position: var(--arc-internal-btn-position, unset);
    transition: 150ms ease-out;

    /* footprint */

    font: inherit;
    font-size: var(
      --arc-button-font-size,
      var(--arc-computed-btn-font-size, inherit)
    ); /** @computed • font-size */
    font-weight: var(--arc-button-font-weight, var(--arc-font-weight-600));
    max-width: var(--arc-internal-btn-max-width, 100%);
    min-width: var(--arc-internal-btn-min-width, unset);
    width: var(--arc-internal-btn-width, unset);
    height: var(--arc-computed-btn-height, unset); /** @computed • height */
    aspect-ratio: var(--arc-internal-btn-aspect-ratio, unset);

    padding-block: 0;
    padding-inline: var(
      --arc-computed-btn-padding-inline
    ); /** @computed • padding-inline */

    /* Variant Theme Applied -----------------------------------------• */

    color: var(--arc-internal-btn-text-color, unset);
    background: var(--arc-internal-btn-fill-color, transparent);
    border: var(--arc-computed-btn-border-width) solid
      var(--arc-internal-btn-edge-color, unset); /** @computed • border-width */
    border-radius: var(
      --arc-button-border-radius,
      var(--arc-internal-btn-border-radius)
    ); /** @computed • border-radius */

    &[href] {
      text-decoration: var(--arc-button-text-decoration, none);
    }

    /* INNER-ELEMENTS ------------------------------------------------• */

    [data-element='button-content'] {
      flex: 1;
      width: var(--arc-internal-btn-content-width, auto);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: max(
        var(--arc-space-0-75),
        var(--arc-computed-btn-gap)
      ); /** @computed • gap */ /* 4px */
      max-width: 100%;
      overflow: hidden;
      pointer-events: var(--arc-internal-btn-content-pointer-events, none);
      user-select: none;
      visibility: var(--arc-internal-btn-content-visibility, unset);
      opacity: var(--arc-internal-btn-content-opacity, unset);
    }

    [data-element='button-label'] {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      max-width: 100%;
      line-height: normal;
      transition: 0.2s ease-out;
    }

    [data-element='button-icon'] {
      transition: 0.2s ease-out;
    }

    :is([data-element='button-spinner'], input) {
      position: absolute;
      top: 50%;
      left: 50%;
      translate: -50% -50%;
    }

    input {
      opacity: 0;
      scale: 0.1;
    }

    [data-element='button-spinner'] {
      display: flex;
      pointer-events: none;
      border-radius: 50%;
      width: var(
        --arc-computed-btn-spinner-width
      ); /** @computed • spinner size */
      aspect-ratio: 1 / 1;

      [data-element='spinner-circle'] {
        fill: none;
        stroke: var(--arc-internal-btn-spinner-circle-stroke);
        opacity: var(--arc-internal-btn-spinner-circle-opacity, 0.4);
      }

      [data-element='spinner-progress'] {
        fill: none;
        stroke: var(--arc-internal-btn-spinner-progress-stroke);
        stroke-dasharray: 0.3334 1;
        stroke-dashoffset: 0;
        stroke-linecap: round;
        animation: 743ms arc-spinner-rotate linear infinite;
        transform-origin: 50% 50%;
      }
    }
  }

  @keyframes arc-spinner-rotate {
    to {
      transform: rotate3d(0, 0, 1, 360deg);
    }
  }
`),a.Dn('<svg viewBox="0 0 100 100" data-element="button-spinner"><circle data-element="spinner-circle" cx="50%" cy="50%" r="45%" stroke-width="12.5%" pathLength="1"></circle><circle data-element="spinner-progress" cx="50%" cy="50%" r="45%" stroke-width="12.5%" pathLength="1"></circle></svg>'),a.vs('<span data-element="button-content"><!></span> <!>',1),a.vs('<a arc-button=""><!></a>'),a.vs('<button arc-button=""><!></button>');const vi=De.AH`
  @layer arc-components {
    [arc-icon] {
      font-size: var(--arc-icon-size, 1em);
      color: var(--arc-icon-color, currentcolor);
      opacity: var(--arc-icon-opacity, 1);

      &:not([hidden]) {
        flex: none;
        display: var(--arc-icon-display, inline-flex);
        align-items: center;
        justify-content: center;
        max-height: 1lh;
        line-height: 1lh;
      }

      &:has(svg) {
        width: 1em;
        height: var(--arc-icon-svg-height, 1lh);
        align-self: var(--arc-icon-svg-align-self, center);
        vertical-align: -0.1lh;

        /* Todo: This is Mondrian CSS in the Arc style sheet to handle duotones. We should try to separate this */
        &:not([data-duotone]) {
          svg {
            fill: var(--arc-icon-color, currentcolor);
          }
        }

        svg {
          width: 100%; /* keeps Safari happy ¯\_(ツ)_/¯ */
        }
      }
    }
  }
`,bi=e=>"number"==typeof e?`calc(${e/10}rem * var(--arc-internal-font-size))`:e,fi=li("MonArcIcon",vi);var zi=a.vs("<span></span>"),yi=a.vs('<span arc-icon=""><!></span>');i(2732),i(5266),a.vs('<div class="travel-boxes-wrapper svelte-xddqyh" aria-hidden="true"><svg class="svelte-xddqyh"><path class="svelte-xddqyh"></path></svg></div>'),a.vs('<div class="tooltip svelte-xddqyh" data-mon-tooltip="" popover="manual"><!> <div class="shadowed svelte-xddqyh"><div class="arrow svelte-xddqyh"><svg aria-hidden="true" data-mon-tooltip-arrow="" class="svelte-xddqyh"><defs><filter><feDropShadow dx="0px" dy="2px" stdDeviation="3px" flood-color="black" flood-opacity="0.4"></feDropShadow></filter></defs><path d="M13 0H1V1L6.2929 6.2929c.3905.3905 1.0237.3905 1.4142 0L13 1V0Z" class="svelte-xddqyh"></path></svg></div></div> <!></div>'),a.vs('<div class="tooltip-locator svelte-xddqyh"></div> <!>',1),a.vs("Share feedback <!>",1),a.vs('<div class="feedback-container svelte-18phxd6"><h2 class="svelte-18phxd6">This feature is in beta</h2> <p class="svelte-18phxd6"><span class="svelte-18phxd6">We’re actively refining it and would love your input. Some functionality\n        may be limited or evolve as we gather feedback.</span></p> <!> <!></div>'),a.vs('<div><div class="collapsible-section-content svelte-n9z2g8"><!></div></div>'),(0,h.writable)(!1);const xi=['input:not([type="checkbox"], [type="radio"])',"art-asset-library","textarea","[contenteditable]"].join(", ");function wi(e=f()){return null!=e&&!!e.matches(xi)}var Ci=i(9205);const ki=i.n(Ci)()("mondrian").extend("keyboard"),Li={activeModifierKeys:new Set,get alt(){return Li.activeModifierKeys.has("Alt")},get meta(){return Li.activeModifierKeys.has("Meta")||Li.activeModifierKeys.has("Control")},get shift(){return Li.activeModifierKeys.has("Shift")},key:void 0,get combo(){return[Li.meta&&"Meta",Li.alt&&"Alt",Li.shift&&"Shift",Li.key].filter(Boolean).join("+")}};function Si({metaKey:e,altKey:t,shiftKey:i,ctrlKey:a},n){let r=!1;return e!==n.has("Meta")&&(r=!0,e?n.add("Meta"):n.delete("Meta")),t!==n.has("Alt")&&(r=!0,t?n.add("Alt"):n.delete("Alt")),i!==n.has("Shift")&&(r=!0,i?n.add("Shift"):n.delete("Shift")),a!==n.has("Control")&&(r=!0,a?n.add("Control"):n.delete("Control")),r}let Ii=!1;const Mi={...(0,h.readable)(Li,(e=>{function t(t){const i="keydown"===t.type;Si(t,Li.activeModifierKeys),Li.key=i?t.key:void 0,e(Li)}function i(t){Si(t,Li.activeModifierKeys)&&e(Li)}Ii||(Ii=!0,window.addEventListener("keydown",t),window.addEventListener("keyup",t),document.addEventListener("visibilitychange",(function(){"hidden"===document.visibilityState&&(Li.activeModifierKeys.clear(),Li.key=void 0,e(Li))})),window.addEventListener("blur",(function(){Li.activeModifierKeys.clear(),Li.key=void 0,e(Li)})),window.addEventListener("mousedown",i,{passive:!0,capture:!0}),window.addEventListener("mousemove",i,{passive:!0,capture:!0}))})),is:e=>(Li.combo&&ki(`comparing keycombos, store: ${Li.combo}, comparison: ${e}`),Li.combo.toLowerCase()===e.toLowerCase()),on(e,t){const i=i=>{!wi()&&Mi.is(e)&&(ki("keyCombo matched, executing handler",e),t(i))};return window.addEventListener("keydown",i),()=>{window.removeEventListener("keydown",i)}}},Ti=((0,h.derived)(Mi,(e=>e.meta)),(0,h.derived)(Mi,(e=>e.alt)),(0,h.derived)(Mi,(e=>e.shift)),{down:!1,downX:-1,downY:-1,target:void 0,x:-1,y:-1});(0,h.readable)(Ti,(e=>{return window.addEventListener("mousedown",t),window.addEventListener("mousemove",a),window.addEventListener("mouseup",i),function(){window.removeEventListener("mousedown",t),window.removeEventListener("mousemove",a),window.removeEventListener("mouseup",i)};function t(e){Ti.down=!0,Ti.downX=Ti.x=e.clientX,Ti.downY=Ti.y=e.clientY,Ti.target=e.target,n()}function i(){Ti.down=!1,Ti.downX=Ti.x=Ti.downY=Ti.y=-1,Ti.target=void 0,n()}function a(e){Ti.x=e.x,Ti.y=e.y,n()}function n(){e(Ti)}}));var Bi=i(4993),Ji=i.n(Bi);const{setTimeout:Ai,clearTimeout:Zi}=window;a.vs('<mon-menu-item><label class="multi-select-option-label svelte-1aujqfc"><input class="multi-select-option-checkbox svelte-1aujqfc" type="checkbox"> <!> <span class="multi-select-option-label-text svelte-1aujqfc"> </span></label></mon-menu-item>',2),a.vs('<div class="no-results svelte-1aujqfc"> </div>'),a.vs('<mon-popover><mon-menu><section class="filters svelte-1aujqfc"><div class="search-filter svelte-1aujqfc"><!> <input class="search-filter-input svelte-1aujqfc" type="text" placeholder="Search"></div> <label class="select-all svelte-1aujqfc"><input type="checkbox" class="svelte-1aujqfc"> <span> </span></label></section> <section class="menu-items svelte-1aujqfc"></section> <!></mon-menu></mon-popover>',2),a.vs('<div class="multi-select svelte-1aujqfc"><div class="multi-select-menu-trigger svelte-1aujqfc" tabindex="-1"><div class="trigger-content svelte-1aujqfc"><!></div> <button class="chevron svelte-1aujqfc"><!></button></div> <!></div>'),a.vs('<span class="hint-text svelte-1463wmx"><!></span>'),a.vs('<div><input class="mon-focusable svelte-1da47cf" type="text" data-1pignore="" data-lpignore="" autocomplete="off"> <div class="static svelte-1da47cf" tabindex="0"> </div></div>'),a.vs('<label class="label svelte-18j4x0z"><span class="label-text svelte-18j4x0z"> </span> <input class="input svelte-18j4x0z" type="number" placeholder="--"></label>'),a.vs('<div class="mon-spinner svelte-1fzag14"><svg class="mon-spinner__icon svelte-1fzag14" fill="none" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M12 19a7 7 0 100-14 7 7 0 000 14zm0 3c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" clip-rule="evenodd"></path><path fill="currentColor" d="M2 12C2 6.477 6.477 2 12 2v3a7 7 0 00-7 7H2z"></path></svg> <!></div>'),a.vs('<p class="mon-loading__text svelte-1omw61o">Loading custom layout</p>'),a.vs('<div class="mon-loading svelte-1omw61o"><!></div>');a.Dn('<svg class="defs svelte-1l67ssw" aria-hidden="true"><defs><linearGradient x1="2.5" y1="25" x2="22.5" y2="24" gradientUnits="userSpaceOnUse"><stop stop-color="#FF0000"></stop><stop offset="0.135" stop-color="#FF8000"></stop><stop offset="0.315" stop-color="#FFFF00"></stop><stop offset="0.465" stop-color="#1AFE0A"></stop><stop offset="0.625" stop-color="#1EDFF4"></stop><stop offset="0.82" stop-color="#3912FA"></stop><stop offset="0.905" stop-color="#FF01E6"></stop></linearGradient><clipPath><circle cx="12" cy="12" r="12"></circle></clipPath><mask style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><circle cx="12" cy="12" r="12" fill="currentColor"></circle></mask><mask fill="white"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM12 17.3333C14.9455 17.3333 17.3333 14.9455 17.3333 12C17.3333 9.05448 14.9455 6.66667 12 6.66667C9.05448 6.66667 6.66667 9.05448 6.66667 12C6.66667 14.9455 9.05448 17.3333 12 17.3333Z"></path></mask><mask fill="white"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM12 17.3333C14.9455 17.3333 17.3333 14.9455 17.3333 12C17.3333 9.05448 14.9455 6.66667 12 6.66667C9.05448 6.66667 6.66667 9.05448 6.66667 12C6.66667 14.9455 9.05448 17.3333 12 17.3333Z"></path></mask><clipPath><path fill-rule="evenodd" clip-rule="evenodd" d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM12 17.3333C14.9455 17.3333 17.3333 14.9455 17.3333 12C17.3333 9.05448 14.9455 6.66667 12 6.66667C9.05448 6.66667 6.66667 9.05448 6.66667 12C6.66667 14.9455 9.05448 17.3333 12 17.3333Z"></path></clipPath></defs></svg>');const Ri="#glyphs-",Hi={"arc-fullscreen-disable":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M160 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 320c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0z"/></svg>',"arc-fullscreen-enable":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M32 32C14.3 32 0 46.3 0 64l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96z"/></svg>',"arc-pause":'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="3.448 3.43 13.081 13.099"><path d="M6.5 4H7.5C8.3125 4 9 4.6875 9 5.5V14.5C9 15.3438 8.3125 16 7.5 16H6.5C5.65625 16 5 15.3438 5 14.5V5.5C5 4.6875 5.65625 4 6.5 4ZM12.5 4H13.5C14.3125 4 15 4.6875 15 5.5V14.5C15 15.3438 14.3125 16 13.5 16H12.5C11.6562 16 11 15.3438 11 14.5V5.5C11 4.6875 11.6562 4 12.5 4Z" /></svg>',"arc-pip-disable":'<svg xmlns="http://www.w3.org/2000/svg" width="22px" height="18px" viewBox="0 0 22 18"><path d="M18 4H4v10h14V4zm4 12V1.98C22 .88 21.1 0 20 0H2C.9 0 0 .88 0 1.98V16c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2zm-2 .02H2V1.97h18v14.05z" fill-rule="nonzero"/><path fill="none" d="M-1-3h24v24H-1z"/></svg>',"arc-pip-enable":'<svg viewBox="0 0 24 24"><path d="M19 11h-8v6h8zm4 8V4.98C23 3.88 22.1 3 21 3H3c-1.1 0-2 .88-2 1.98V19c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2m-2 .02H3V4.97h18z"></path></svg>',"arc-play":'<svg width="12" height="13" viewBox="0 0 12 13" xmlns="http://www.w3.org/2000/svg"><path d="M2.74609 0.816406L10.6211 5.62891C11.0039 5.875 11.25 6.3125 11.25 6.75C11.25 7.21484 11.0039 7.65234 10.6211 7.87109L2.74609 12.6836C2.33594 12.9297 1.81641 12.957 1.40625 12.7109C0.996094 12.4922 0.75 12.0547 0.75 11.5625V1.9375C0.75 1.47266 0.996094 1.03516 1.40625 0.816406C1.81641 0.570312 2.33594 0.570312 2.74609 0.816406Z" /></svg>',"arc-transparency":'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M1 1H3.8V3.8H1V1Z" fill="black"/><path d="M3.7998 3.7998H6.5998V6.5998H3.7998V3.7998Z" fill="black" fill-opacity="0.8"/><path d="M6.6001 1H9.4001V3.8H6.6001V1Z" fill="black" fill-opacity="0.6"/><path d="M12.2002 1H15.0002V3.8H12.2002V1Z" fill="black" fill-opacity="0.2"/><path d="M1 6.59961H3.8V9.39961H1V6.59961Z" fill="black"/><path d="M6.6001 6.59961H9.4001V9.39961H6.6001V6.59961Z" fill="black" fill-opacity="0.6"/><path d="M12.2002 6.59961H15.0002V9.39961H12.2002V6.59961Z" fill="black" fill-opacity="0.2"/><path d="M1 12.2002H3.8V15.0002H1V12.2002Z" fill="black"/><path d="M6.6001 12.2002H9.4001V15.0002H6.6001V12.2002Z" fill="black" fill-opacity="0.6"/><path d="M12.2002 12.2002H15.0002V15.0002H12.2002V12.2002Z" fill="black" fill-opacity="0.2"/><path d="M9.3999 3.7998H12.1999V6.5998H9.3999V3.7998Z" fill="black" fill-opacity="0.4"/><path d="M3.7998 9.40039H6.5998V12.2004H3.7998V9.40039Z" fill="black" fill-opacity="0.8"/><path d="M9.3999 9.40039H12.1999V12.2004H9.3999V9.40039Z" fill="black" fill-opacity="0.4"/></svg>',"arc-volume-high":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M533.6 32.5C598.5 85.2 640 165.8 640 256s-41.5 170.7-106.4 223.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C557.5 398.2 592 331.2 592 256s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM473.1 107c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C475.3 341.3 496 301.1 496 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM301.1 34.8C312.6 40 320 51.4 320 64l0 384c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352 64 352c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l67.8 0L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3z"/></svg>',"arc-volume-mid":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M333.1 34.8C344.6 40 352 51.4 352 64l0 384c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L163.8 352 96 352c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l67.8 0L298.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zm172 72.2c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C507.3 341.3 528 301.1 528 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C466.1 199.1 480 225.9 480 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C425.1 284.4 432 271 432 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5z"/></svg>',"arc-volume-low":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M301.1 34.8C312.6 40 320 51.4 320 64l0 384c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352 64 352c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l67.8 0L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM412.6 181.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5z"/></svg>',"arc-volume-muted":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.1 386.2C556.7 352 576 306.3 576 256c0-60.1-27.7-113.8-70.9-149c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C507.3 170.7 528 210.9 528 256c0 39.1-15.6 74.5-40.9 100.5L449 326.6c19-17.5 31-42.7 31-70.6c0-30.1-13.9-56.9-35.4-74.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C425.1 227.6 432 241 432 256s-6.9 28.4-17.7 37.3c-1.3 1-2.4 2.2-3.4 3.4L352 250.6 352 64c0-12.6-7.4-24-18.9-29.2s-25-3.1-34.4 5.3L197.8 129.8 38.8 5.1zM352 373.3L82.9 161.3C53.8 167.4 32 193.1 32 224l0 64c0 35.3 28.7 64 64 64l67.8 0L298.7 471.9c9.4 8.4 22.9 10.4 34.4 5.3S352 460.6 352 448l0-74.7z"/></svg>',"border-solid":'<svg width="100%" height="100%" viewBox="0 0 18 2" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="18" height="2" rx="1" fill="currentColor"/></svg>',"border-dashed":'<svg width="100%" height="100%" viewBox="0 0 19 2" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="5" height="2" fill="currentColor"/><rect x="7" width="5" height="2" fill="currentColor"/><rect x="14" width="5" height="2" fill="currentColor"/></svg>',"border-dotted":'<svg width="100%" height="100%" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="2" height="2" fill="currentColor"/><rect x="4" width="2" height="2" fill="currentColor"/><rect x="8" width="2" height="2" fill="currentColor"/><rect x="12" width="2" height="2" fill="currentColor"/></svg>',"corner-radius-top-left":'<svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" fill="none">\n      <path d="M4.25 1C4.66563 1 5 1.33437 5 1.75C5 2.16562 4.66563 2.5 4.25 2.5H1.5V5.25C1.5 5.66563 1.16562 6 0.75 6C0.334375 6 0 5.66563 0 5.25V1.75C0 1.33437 0.334375 1 0.75 1H4.25ZM4.25 1C4.66563 1 5 1.33437 5 1.75C5 2.16562 4.66563 2.5 4.25 2.5H1.5V5.25C1.5 5.66563 1.16562 6 0.75 6C0.334375 6 0 5.66563 0 5.25V1.75C0 1.33437 0.334375 1 0.75 1H4.25ZM4.25 1C4.66563 1 5 1.33437 5 1.75C5 2.16562 4.66563 2.5 4.25 2.5H1.5V5.25C1.5 5.66563 1.16562 6 0.75 6C0.334375 6 0 5.66563 0 5.25V1.75C0 1.33437 0.334375 1 0.75 1H4.25ZM4.25 1C4.66563 1 5 1.33437 5 1.75C5 2.16562 4.66563 2.5 4.25 2.5H1.5V5.25C1.5 5.66563 1.16562 6 0.75 6C0.334375 6 0 5.66563 0 5.25V1.75C0 1.33437 0.334375 1 0.75 1H4.25Z" fill="black"/>\n      <path d="M0.75 10C0.334375 10 0 10.3344 0 10.75V14.25C0 14.6656 0.334375 15 0.75 15H4.25C4.66563 15 5 14.6656 5 14.25C5 13.8344 4.66563 13.5 4.25 13.5H1.5V10.75C1.5 10.3344 1.16562 10 0.75 10Z" fill="#C6C6C6"/>\n      <path d="M14 1.75C14 1.33437 13.6656 1 13.25 1H9.75C9.33437 1 9 1.33437 9 1.75C9 2.16562 9.33437 2.5 9.75 2.5H12.5V5.25C12.5 5.66563 12.8344 6 13.25 6C13.6656 6 14 5.66563 14 5.25V1.75Z" fill="#C6C6C6"/>\n      <path d="M13.25 10C12.8344 10 12.5 10.3344 12.5 10.75V13.5H9.75C9.33437 13.5 9 13.8344 9 14.25C9 14.6656 9.33437 15 9.75 15H13.25C13.6656 15 14 14.6656 14 14.25V10.75C14 10.3344 13.6656 10 13.25 10Z" fill="#C6C6C6"/>\n      </svg>',"corner-radius-top-right":'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">\n        <g clip-path="url(#clip0_8873_84280)">\n        <path d="M15 4.25C15 4.66563 14.6656 5 14.25 5C13.8344 5 13.5 4.66563 13.5 4.25L13.5 1.5L10.75 1.5C10.3344 1.5 10 1.16562 10 0.75C10 0.334375 10.3344 -2.03941e-07 10.75 -1.85773e-07L14.25 -3.27835e-08C14.6656 -1.4616e-08 15 0.334375 15 0.75L15 4.25ZM15 4.25C15 4.66563 14.6656 5 14.25 5C13.8344 5 13.5 4.66563 13.5 4.25L13.5 1.5L10.75 1.5C10.3344 1.5 10 1.16562 10 0.75C10 0.334375 10.3344 -2.03941e-07 10.75 -1.85773e-07L14.25 -3.27835e-08C14.6656 -1.4616e-08 15 0.334375 15 0.75L15 4.25ZM15 4.25C15 4.66563 14.6656 5 14.25 5C13.8344 5 13.5 4.66563 13.5 4.25L13.5 1.5L10.75 1.5C10.3344 1.5 10 1.16562 10 0.75C10 0.334375 10.3344 -2.03941e-07 10.75 -1.85773e-07L14.25 -3.27835e-08C14.6656 -1.4616e-08 15 0.334375 15 0.75L15 4.25ZM15 4.25C15 4.66563 14.6656 5 14.25 5C13.8344 5 13.5 4.66563 13.5 4.25L13.5 1.5L10.75 1.5C10.3344 1.5 10 1.16562 10 0.75C10 0.334375 10.3344 -2.03941e-07 10.75 -1.85773e-07L14.25 -3.27835e-08C14.6656 -1.4616e-08 15 0.334375 15 0.75L15 4.25Z" fill="black"/>\n        <path d="M6 0.75C6 0.334375 5.66563 -1.4616e-08 5.25 -3.27835e-08L1.75 -1.85773e-07C1.33437 -2.03941e-07 1 0.334375 1 0.75L1 4.25C1 4.66562 1.33437 5 1.75 5C2.16562 5 2.5 4.66562 2.5 4.25L2.5 1.5L5.25 1.5C5.66562 1.5 6 1.16562 6 0.75Z" fill="#C6C6C6"/>\n        <path d="M14.25 14C14.6656 14 15 13.6656 15 13.25L15 9.75C15 9.33437 14.6656 9 14.25 9C13.8344 9 13.5 9.33437 13.5 9.75L13.5 12.5L10.75 12.5C10.3344 12.5 10 12.8344 10 13.25C10 13.6656 10.3344 14 10.75 14L14.25 14Z" fill="#C6C6C6"/>\n        <path d="M6 13.25C6 12.8344 5.66562 12.5 5.25 12.5L2.5 12.5L2.5 9.75C2.5 9.33437 2.16563 9 1.75 9C1.33437 9 1 9.33437 1 9.75L1 13.25C1 13.6656 1.33437 14 1.75 14L5.25 14C5.66562 14 6 13.6656 6 13.25Z" fill="#C6C6C6"/>\n        </g>\n        <defs>\n        <clipPath id="clip0_8873_84280">\n        <rect width="14" height="16" fill="white" transform="translate(16) rotate(90)"/>\n        </clipPath>\n        </defs>\n        </svg>',"corner-radius-bottom-left":'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">\n        <g clip-path="url(#clip0_8873_84287)">\n        <path d="M1 9.75C1 9.33437 1.33438 9 1.75 9C2.16563 9 2.5 9.33437 2.5 9.75L2.5 12.5L5.25 12.5C5.66563 12.5 6 12.8344 6 13.25C6 13.6656 5.66563 14 5.25 14L1.75 14C1.33437 14 1 13.6656 1 13.25L1 9.75ZM1 9.75C1 9.33437 1.33438 9 1.75 9C2.16563 9 2.5 9.33437 2.5 9.75L2.5 12.5L5.25 12.5C5.66563 12.5 6 12.8344 6 13.25C6 13.6656 5.66563 14 5.25 14L1.75 14C1.33437 14 1 13.6656 1 13.25L1 9.75ZM1 9.75C1 9.33437 1.33438 9 1.75 9C2.16563 9 2.5 9.33437 2.5 9.75L2.5 12.5L5.25 12.5C5.66563 12.5 6 12.8344 6 13.25C6 13.6656 5.66563 14 5.25 14L1.75 14C1.33437 14 1 13.6656 1 13.25L1 9.75ZM1 9.75C1 9.33437 1.33438 9 1.75 9C2.16563 9 2.5 9.33437 2.5 9.75L2.5 12.5L5.25 12.5C5.66563 12.5 6 12.8344 6 13.25C6 13.6656 5.66563 14 5.25 14L1.75 14C1.33437 14 1 13.6656 1 13.25L1 9.75Z" fill="black"/>\n        <path d="M10 13.25C10 13.6656 10.3344 14 10.75 14L14.25 14C14.6656 14 15 13.6656 15 13.25L15 9.75C15 9.33437 14.6656 9 14.25 9C13.8344 9 13.5 9.33437 13.5 9.75L13.5 12.5L10.75 12.5C10.3344 12.5 10 12.8344 10 13.25Z" fill="#C6C6C6"/>\n        <path d="M1.75 8.94366e-09C1.33438 3.98738e-09 1 0.334375 1 0.75L1 4.25C1 4.66563 1.33437 5 1.75 5C2.16562 5 2.5 4.66563 2.5 4.25L2.5 1.5L5.25 1.5C5.66563 1.5 6 1.16563 6 0.75C6 0.334375 5.66563 5.5637e-08 5.25 5.06807e-08L1.75 8.94366e-09Z" fill="#C6C6C6"/>\n        <path d="M10 0.75C10 1.16563 10.3344 1.5 10.75 1.5L13.5 1.5L13.5 4.25C13.5 4.66563 13.8344 5 14.25 5C14.6656 5 15 4.66563 15 4.25L15 0.75C15 0.334375 14.6656 5.5637e-08 14.25 5.06807e-08L10.75 8.94366e-09C10.3344 3.98738e-09 10 0.334375 10 0.75Z" fill="#C6C6C6"/>\n        </g>\n        <defs>\n        <clipPath id="clip0_8873_84287">\n        <rect width="14" height="16" fill="white" transform="translate(0 14) rotate(-90)"/>\n        </clipPath>\n        </defs>\n        </svg>',"corner-radius-bottom-right":'<svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" fill="none">\n      <path d="M9.75 15C9.33437 15 9 14.6656 9 14.25C9 13.8344 9.33438 13.5 9.75 13.5L12.5 13.5L12.5 10.75C12.5 10.3344 12.8344 10 13.25 10C13.6656 10 14 10.3344 14 10.75L14 14.25C14 14.6656 13.6656 15 13.25 15L9.75 15ZM9.75 15C9.33437 15 9 14.6656 9 14.25C9 13.8344 9.33438 13.5 9.75 13.5L12.5 13.5L12.5 10.75C12.5 10.3344 12.8344 10 13.25 10C13.6656 10 14 10.3344 14 10.75L14 14.25C14 14.6656 13.6656 15 13.25 15L9.75 15ZM9.75 15C9.33437 15 9 14.6656 9 14.25C9 13.8344 9.33438 13.5 9.75 13.5L12.5 13.5L12.5 10.75C12.5 10.3344 12.8344 10 13.25 10C13.6656 10 14 10.3344 14 10.75L14 14.25C14 14.6656 13.6656 15 13.25 15L9.75 15ZM9.75 15C9.33437 15 9 14.6656 9 14.25C9 13.8344 9.33438 13.5 9.75 13.5L12.5 13.5L12.5 10.75C12.5 10.3344 12.8344 10 13.25 10C13.6656 10 14 10.3344 14 10.75L14 14.25C14 14.6656 13.6656 15 13.25 15L9.75 15Z" fill="black"/>\n      <path d="M13.25 6C13.6656 6 14 5.66563 14 5.25L14 1.75C14 1.33437 13.6656 1 13.25 1L9.75 1C9.33438 1 9 1.33437 9 1.75C9 2.16562 9.33438 2.5 9.75 2.5L12.5 2.5L12.5 5.25C12.5 5.66562 12.8344 6 13.25 6Z" fill="#C6C6C6"/>\n      <path d="M6.55671e-08 14.25C2.9232e-08 14.6656 0.334375 15 0.75 15L4.25 15C4.66563 15 5 14.6656 5 14.25C5 13.8344 4.66563 13.5 4.25 13.5L1.5 13.5L1.5 10.75C1.5 10.3344 1.16563 10 0.75 10C0.334375 10 4.07882e-07 10.3344 3.71547e-07 10.75L6.55671e-08 14.25Z" fill="#C6C6C6"/>\n      <path d="M0.75 6C1.16563 6 1.5 5.66562 1.5 5.25L1.5 2.5L4.25 2.5C4.66563 2.5 5 2.16563 5 1.75C5 1.33437 4.66563 1 4.25 1L0.75 1C0.334375 1 4.07882e-07 1.33437 3.71547e-07 1.75L6.55671e-08 5.25C2.9232e-08 5.66562 0.334375 6 0.75 6Z" fill="#C6C6C6"/>\n      </svg>',"aspect-ratio-9:16":'<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M21.4998 26.5V16V5.5C21.4998 5.00781 20.8331 4.625 20.4998 4.625H11.4998C10.9998 4.625 10.4998 5 10.4998 5.5L10.6667 16V26.5C10.6667 26.9375 11.1248 27.375 11.4998 27.375H20.4998C20.8331 27.375 21.4998 26.9375 21.4998 26.5ZM24 5.5V26.5C24 28.4141 22.7917 30 21.3333 30H10.6667C9.16667 30 8 28.4141 8 26.5V5.5C8 3.53125 9.16667 2 10.6667 2H21.3333C22.7917 2 24 3.53125 24 5.5Z" fill="currentColor"/></svg>',"aspect-ratio-16:9":'<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M5.5 21.4998L16 21.4998L26.5 21.4998C26.9922 21.4998 27.375 20.8331 27.375 20.4998L27.375 11.4998C27.375 10.9998 27 10.4998 26.5 10.4998L16 10.6667L5.5 10.6667C5.0625 10.6667 4.625 11.1248 4.625 11.4998L4.625 20.4998C4.625 20.8331 5.0625 21.4998 5.5 21.4998ZM26.5 24L5.5 24C3.5859 24 2 22.7917 2 21.3333L2 10.6667C2 9.16667 3.5859 8 5.5 8L26.5 8C28.4688 8 30 9.16667 30 10.6667L30 21.3333C30 22.7917 28.4687 24 26.5 24Z" fill="currentColor"/></svg>',"aspect-ratio-2:3":'<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M23.5 26.5V16V5.5C23.5 5.00781 22.8958 4.625 22.5 4.625H10.5C9.90625 4.625 9.5 5 9.5 5.5V16V26.5C9.5 26.9375 10.0547 27.375 10.5 27.375H22.5C22.8958 27.375 23.5 26.9375 23.5 26.5ZM26 5.5V26.5C26 28.4141 24.5651 30 22.8333 30H10.1667C8.38542 30 7 28.4141 7 26.5V5.5C7 3.53125 8.38542 2 10.1667 2H22.8333C24.5651 2 26 3.53125 26 5.5Z" fill="currentColor"/></svg>',"aspect-ratio-3:2":'<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M5.5 22.5L16 22.5L26.5 22.5C26.9922 22.5 27.375 21.8958 27.375 21.5L27.375 9.5C27.375 8.90625 27 8.5 26.5 8.5L16 8.5L5.5 8.5C5.0625 8.5 4.625 9.05469 4.625 9.5L4.625 21.5C4.625 21.8958 5.0625 22.5 5.5 22.5ZM26.5 25L5.5 25C3.5859 25 2 23.5651 2 21.8333L2 9.16667C2 7.38542 3.5859 6 5.5 6L26.5 6C28.4688 6 30 7.38542 30 9.16667L30 21.8333C30 23.5651 28.4687 25 26.5 25Z" fill="currentColor"/></svg>',"border-color":'\n      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">\n        <g clip-path="url(#mon-border-color-icon-boundary-clip-path)" data-figma-skip-parse="true">\n          <foreignObject x="0" y="0" width="24" height="24">\n            <div xmlns="http://www.w3.org/1999/xhtml"\n              style="background:var(--fa-secondary-color);height:100%;width:100%;opacity:1"></div>\n          </foreignObject>\n        </g>\n        <path\n          d="M23 12C23 18.0751 18.0751 23 12 23V25C19.1797 25 25 19.1797 25 12H23ZM12 1C18.0751 1 23 5.92487 23 12H25C25 4.8203 19.1797 -1 12 -1V1ZM1 12C1 5.92487 5.92487 1 12 1V-1C4.8203 -1 -1 4.8203 -1 12H1ZM12 23C5.92487 23 1 18.0751 1 12H-1C-1 19.1797 4.8203 25 12 25V23ZM16.3333 12C16.3333 14.3932 14.3932 16.3333 12 16.3333V18.3333C15.4978 18.3333 18.3333 15.4978 18.3333 12H16.3333ZM12 7.66667C14.3932 7.66667 16.3333 9.60677 16.3333 12H18.3333C18.3333 8.5022 15.4978 5.66667 12 5.66667V7.66667ZM7.66667 12C7.66667 9.60677 9.60677 7.66667 12 7.66667V5.66667C8.5022 5.66667 5.66667 8.5022 5.66667 12H7.66667ZM12 16.3333C9.60677 16.3333 7.66667 14.3932 7.66667 12H5.66667C5.66667 15.4978 8.5022 18.3333 12 18.3333V16.3333Z"\n          fill="black"\n          fill-opacity="0.1"\n          mask="url(#mon-border-color-icon-outline-mask)"\n        />\n      </svg>',"custom-shapes-rectangle":'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.75" y="3.25" width="18.5" height="13.5" stroke=currentColor stroke-width="1.5"/></svg>',"custom-shapes-square":'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.75" y="0.75" width="18.5" height="18.5" stroke=currentColor stroke-width="1.5"/></svg>',"custom-shapes-circle":'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="9.25" stroke=currentColor stroke-width="1.5"/></svg>',"custom-shapes-plus":'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.41667 6.66667V0.75H12.5833V6.66667V7.41667H13.3333H19.25V12.5833H13.3333H12.5833V13.3333V19.25H7.41667V13.3333V12.5833H6.66667H0.75V7.41667H6.66667H7.41667V6.66667Z" stroke=currentColor stroke-width="1.5"/></svg>',"custom-shapes-chevron":'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.0763 18.25L1.20849 18.25L5.1303 10.3329L5.29521 10L5.1303 9.66709L1.2085 1.75L15.0763 1.75L19.163 10L15.0763 18.25Z" stroke=currentColor stroke-width="1.5"/></svg>',"custom-shapes-octagon":'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.757121 6.42456L5.99251 0.936083L13.5754 0.757121L19.0639 5.99251L19.2429 13.5754L14.0075 19.0639L6.42456 19.2429L0.936083 14.0075L0.757121 6.42456Z" stroke=currentColor stroke-width="1.5"/></svg>',"custom-shapes-triangle":'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.31131 17.75L10 2.97923L18.6887 17.75H1.31131Z" stroke=currentColor stroke-width="1.5"/></svg>',"custom-shapes-parallelogram":'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.998432 18.25L5.78397 1.75H19.0016L14.216 18.25H0.998432Z" stroke=currentColor stroke-width="1.5"/></svg>',"custom-shapes-shield":'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 19.25C5.86967 19.25 2.75 16.455 2.75 13.266L2.75 0.750001L17.25 0.75L17.25 13.266C17.25 16.455 14.1303 19.25 10 19.25Z" stroke=currentColor stroke-width="1.5"/></svg>',"custom-shapes-bookmark":'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.70948 15.527L1.75 18.8714V0.75H18.25V18.8714L10.2905 15.527L10 15.405L9.70948 15.527Z" stroke=currentColor stroke-width="1.5"/></svg>',"custom-shapes-speech":'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.0481 15.445L4.5 18.8403V16.129V15.379H3.75H0.75V0.75H19.25V15.379H12.3558H12.1949L12.0481 15.445Z" stroke=currentColor stroke-width="1.5"/></svg>',"custom-shapes-burst":'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 1.43692L11.2238 3.4368L11.5957 4.04466L12.2218 3.70422L14.2815 2.58415L14.3414 4.92798L14.3596 5.64039L15.072 5.65859L17.4159 5.71846L16.2958 7.77821L15.9553 8.40427L16.5632 8.77623L18.5631 10L16.5632 11.2238L15.9553 11.5957L16.2958 12.2218L17.4159 14.2815L15.072 14.3414L14.3596 14.3596L14.3414 15.072L14.2815 17.4159L12.2218 16.2958L11.5957 15.9553L11.2238 16.5632L10 18.5631L8.77623 16.5632L8.40427 15.9553L7.77821 16.2958L5.71846 17.4159L5.65859 15.072L5.64039 14.3596L4.92798 14.3414L2.58415 14.2815L3.70422 12.2218L4.04466 11.5957L3.4368 11.2238L1.43692 10L3.4368 8.77623L4.04466 8.40427L3.70422 7.77821L2.58415 5.71846L4.92798 5.65859L5.64039 5.64039L5.65859 4.92798L5.71846 2.58415L7.77821 3.70422L8.40427 4.04466L8.77623 3.4368L10 1.43692Z" stroke=currentColor stroke-width="1.5"/></svg>',"custom-shapes-star":'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 1.74152L12.2033 6.35881L12.3786 6.72619L12.7821 6.77938L17.8543 7.44799L14.1438 10.9702L13.8486 11.2505L13.9227 11.6507L14.8542 16.6812L10.3578 14.2408L10 14.0467L9.64224 14.2408L5.14579 16.6813L6.07729 11.6507L6.1514 11.2505L5.85618 10.9702L2.14572 7.44799L7.21787 6.77938L7.62144 6.72619L7.79674 6.35881L10 1.74152Z" stroke=currentColor stroke-width="1.5"/></svg>',"custom-shapes-cloud":'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.8435 7.77179L15.7201 8.5053L16.4526 8.63477C17.9724 8.90342 19.25 10.4356 19.25 12.4205C19.25 14.6255 17.6897 16.25 15.9538 16.25H4.04624C2.31032 16.25 0.75 14.6255 0.75 12.4205C0.75 10.2156 2.31032 8.59108 4.04624 8.59108H4.0467H4.78646L4.79663 7.85139C4.82308 5.92674 6.18956 4.53505 7.68789 4.53505C8.36794 4.53505 9.00377 4.80993 9.51137 5.29221L10.1781 5.92566L10.6645 5.14517C11.2076 4.2736 12.0714 3.75 13.0057 3.75C14.5182 3.75 15.8974 5.16954 15.8974 7.1215C15.8974 7.34459 15.8788 7.56192 15.8435 7.77179Z" stroke=currentColor stroke-width="1.5"/></svg>',"custom-shapes-arrow":'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.681 18.0566V14.0592V13.3092H10.931H0.75V6.69081H10.931H11.681V5.94081V1.94342L18.9875 10L11.681 18.0566Z" stroke=currentColor stroke-width="1.5"/></svg>',"folder-open":'<svg width="49" height="49"viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.125 11.625C1.125 8.75391 3.42188 6.375 6.375 6.375H15.9727C17.3672 6.375 18.6797 6.94922 19.6641 7.93359L21.8789 10.1484C22.8633 11.1328 24.1758 11.625 25.5703 11.625H35.25C38.1211 11.625 40.5 14.0039 40.5 16.875V22.125H12.9375C11.9531 22.125 11.1328 22.6172 10.6406 23.4375L1.45312 39.1875C1.20703 39.5977 1.125 40.0898 1.125 40.5V11.625ZM1.28906 41.5664C1.37109 41.6484 1.37109 41.7305 1.45312 41.8125C1.37109 41.8125 1.37109 41.7305 1.37109 41.6484L1.28906 41.5664ZM38.9414 41.6484L40.2539 39.3516C40.0078 40.1719 39.5977 40.9922 38.9414 41.6484Z" fill="#136EAB"/><path d="M12.9375 22.125H45.75C46.6523 22.125 47.5547 22.6172 47.9648 23.4375C48.457 24.2578 48.457 25.3242 47.9648 26.1445L38.7773 41.8945C38.2852 42.6328 37.4648 43.125 36.5625 43.125H3.75C2.76562 43.125 1.94531 42.6328 1.45312 41.8125C0.960938 40.9922 0.960938 40.0078 1.45312 39.1875L10.6406 23.4375C11.1328 22.6172 11.9531 22.125 12.9375 22.125Z" fill="#4BB4EE"/></svg>',"padding-top-bottom":'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n      <path d="M15.9111 13.47C15.9111 12.8936 16.3777 12.4264 16.9532 12.4264C17.5287 12.4264 17.9953 12.8936 17.9953 13.47C17.9953 14.0464 17.5287 14.5137 16.9532 14.5137C16.3777 14.5137 15.9111 14.0464 15.9111 13.47Z" fill="black" fill-opacity="0.3"/>\n      <path d="M15.9111 9.9915C15.9111 9.41511 16.3777 8.94785 16.9532 8.94785C17.5287 8.94785 17.9953 9.41511 17.9953 9.9915C17.9953 10.5679 17.5287 11.0352 16.9532 11.0352C16.3777 11.0352 15.9111 10.5679 15.9111 9.9915Z" fill="black" fill-opacity="0.3"/>\n      <path d="M15.9111 6.51494C15.9111 5.93854 16.3777 5.47128 16.9532 5.47128C17.5287 5.47128 17.9953 5.93854 17.9953 6.51494C17.9953 7.09133 17.5287 7.55859 16.9532 7.55859C16.3777 7.55859 15.9111 7.09133 15.9111 6.51494Z" fill="black" fill-opacity="0.3"/>\n      <path d="M2.01093 13.47C2.01093 12.8936 2.47749 12.4264 3.05303 12.4264C3.62857 12.4264 4.09514 12.8936 4.09514 13.47C4.09514 14.0464 3.62857 14.5137 3.05303 14.5137C2.47749 14.5137 2.01093 14.0464 2.01093 13.47Z" fill="black" fill-opacity="0.3"/>\n      <path d="M2.01093 9.9915C2.01093 9.41511 2.47749 8.94785 3.05303 8.94785C3.62857 8.94785 4.09514 9.41511 4.09514 9.9915C4.09514 10.5679 3.62857 11.0352 3.05303 11.0352C2.47749 11.0352 2.01093 10.5679 2.01093 9.9915Z" fill="black" fill-opacity="0.3"/>\n      <path d="M2.01093 6.51494C2.01093 5.93854 2.47749 5.47128 3.05303 5.47128C3.62857 5.47128 4.09514 5.93854 4.09514 6.51494C4.09514 7.09133 3.62857 7.55859 3.05303 7.55859C2.47749 7.55859 2.01093 7.09133 2.01093 6.51494Z" fill="black" fill-opacity="0.3"/>\n      <path d="M2.00006 3.04366C2.00006 2.46726 2.46663 2 3.04217 2L16.958 2C17.5335 2 18.0001 2.46726 18.0001 3.04366C18.0001 3.62005 17.5335 4.08731 16.958 4.08731L3.04217 4.08731C2.46663 4.08731 2.00006 3.62005 2.00006 3.04366Z" fill="black"/>\n      <path d="M2.00006 16.9558C2.00006 16.3794 2.46663 15.9121 3.04217 15.9121L16.958 15.9121C17.5335 15.9121 18.0001 16.3794 18.0001 16.9558C18.0001 17.5322 17.5335 17.9994 16.958 17.9994L3.04217 17.9994C2.46663 17.9994 2.00006 17.5322 2.00006 16.9558Z" fill="black"/>\n      </svg>',"padding-left-right":'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n      <path d="M6.53 15.9119C7.10639 15.9119 7.57365 16.3784 7.57365 16.954C7.57365 17.5295 7.10639 17.9961 6.53 17.9961C5.9536 17.9961 5.48634 17.5295 5.48634 16.954C5.48634 16.3784 5.9536 15.9119 6.53 15.9119Z" fill="black" fill-opacity="0.3"/>\n      <path d="M10.0085 15.9119C10.5849 15.9119 11.0522 16.3784 11.0522 16.954C11.0522 17.5295 10.5849 17.9961 10.0085 17.9961C9.43212 17.9961 8.96486 17.5295 8.96486 16.954C8.96486 16.3784 9.43212 15.9119 10.0085 15.9119Z" fill="black" fill-opacity="0.3"/>\n      <path d="M13.4851 15.9119C14.0615 15.9119 14.5287 16.3784 14.5287 16.954C14.5287 17.5295 14.0615 17.9961 13.4851 17.9961C12.9087 17.9961 12.4414 17.5295 12.4414 16.954C12.4414 16.3784 12.9087 15.9119 13.4851 15.9119Z" fill="black" fill-opacity="0.3"/>\n      <path d="M6.53 2.01149C7.10639 2.01149 7.57365 2.47806 7.57365 3.0536C7.57365 3.62914 7.10639 4.0957 6.53 4.0957C5.9536 4.0957 5.48634 3.62914 5.48634 3.0536C5.48634 2.47806 5.9536 2.01149 6.53 2.01149Z" fill="black" fill-opacity="0.3"/>\n      <path d="M10.0085 2.01149C10.5849 2.01149 11.0522 2.47806 11.0522 3.0536C11.0522 3.62914 10.5849 4.0957 10.0085 4.0957C9.43212 4.0957 8.96486 3.62914 8.96486 3.0536C8.96486 2.47806 9.43212 2.01149 10.0085 2.01149Z" fill="black" fill-opacity="0.3"/>\n      <path d="M13.4851 2.01149C14.0615 2.01149 14.5287 2.47806 14.5287 3.0536C14.5287 3.62914 14.0615 4.0957 13.4851 4.0957C12.9087 4.0957 12.4414 3.62914 12.4414 3.0536C12.4414 2.47806 12.9087 2.01149 13.4851 2.01149Z" fill="black" fill-opacity="0.3"/>\n      <path d="M16.9564 2C17.5328 2 18 2.46657 18 3.04211L18 16.9579C18 17.5334 17.5328 18 16.9564 18C16.38 18 15.9127 17.5334 15.9127 16.9579L15.9127 3.04211C15.9127 2.46657 16.38 2 16.9564 2Z" fill="black"/>\n      <path d="M3.04425 2C3.62065 2 4.08791 2.46657 4.08791 3.04211L4.08791 16.9579C4.08791 17.5334 3.62065 18 3.04425 18C2.46786 18 2.00059 17.5334 2.00059 16.9579L2.00059 3.04211C2.00059 2.46657 2.46786 2 3.04425 2Z" fill="black"/>\n      </svg>',"regular-microphone-sparkle":'<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n      <path d="M0.5625 6.65625C0.5625 6.30078 0.835938 6 1.21875 6C1.57422 6 1.875 6.30078 1.875 6.65625V7.75C1.875 9.69141 3.43359 11.25 5.375 11.25C6.00391 11.25 6.60547 11.0859 7.125 10.7852C7.125 10.8125 7.125 10.8125 7.125 10.8125V10.8398C7.125 11.3047 7.34375 11.7148 7.72656 11.9609C7.20703 12.2617 6.63281 12.4531 6.03125 12.5352V13.4375H7.34375C7.69922 13.4375 8 13.7383 8 14.0938C8 14.4766 7.69922 14.75 7.34375 14.75H5.375H3.40625C3.02344 14.75 2.75 14.4766 2.75 14.0938C2.75 13.7383 3.02344 13.4375 3.40625 13.4375H4.71875V12.5352C2.36719 12.207 0.5625 10.2109 0.5625 7.75V6.65625ZM2.75 3.375C2.75 1.92578 3.92578 0.75 5.375 0.75C6.82422 0.75 8 1.92578 8 3.375V7.75C8 9.19922 6.82422 10.375 5.375 10.375C3.92578 10.375 2.75 9.19922 2.75 7.75V3.375ZM4.0625 3.375V7.75C4.0625 8.48828 4.63672 9.0625 5.375 9.0625C6.08594 9.0625 6.6875 8.48828 6.6875 7.75V3.375C6.6875 2.66406 6.08594 2.0625 5.375 2.0625C4.63672 2.0625 4.0625 2.66406 4.0625 3.375ZM8 10.8125C8 10.6211 8.10938 10.457 8.30078 10.375L10.625 9.5L11.4727 7.20312C11.5547 7.01172 11.7188 6.875 11.9375 6.875C12.1289 6.875 12.293 7.01172 12.375 7.20312L13.25 9.5L15.5469 10.375C15.7383 10.457 15.875 10.6211 15.875 10.8125C15.875 11.0312 15.7383 11.1953 15.5469 11.2773L13.25 12.125L12.375 14.4492C12.293 14.6406 12.1289 14.75 11.9375 14.75C11.7188 14.75 11.5547 14.6406 11.4727 14.4492L10.625 12.125L8.30078 11.2773C8.10938 11.1953 8 11.0312 8 10.8125ZM8.46484 9.39062C8.71094 8.89844 8.875 8.35156 8.875 7.75V6.65625C8.875 6.30078 9.14844 6 9.53125 6C9.88672 6 10.1875 6.30078 10.1875 6.65625V7.75C10.1875 7.91406 10.1602 8.07812 10.1602 8.24219L9.94141 8.84375L8.46484 9.39062Z" fill="black"/>\n      </svg>',"menu-border-width":'<svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">\n      <path d="M15.5 13.4C15.5 13.5591 15.4539 13.7117 15.3719 13.8243C15.2898 13.9368 15.1785 14 15.0625 14L1.9375 14C1.82147 14 1.71019 13.9368 1.62814 13.8243C1.54609 13.7117 1.5 13.5591 1.5 13.4L1.5 11C1.5 10.8409 1.54609 10.6883 1.62814 10.5757C1.71019 10.4632 1.82147 10.4 1.9375 10.4L15.0625 10.4C15.1785 10.4 15.2898 10.4632 15.3719 10.5757C15.4539 10.6883 15.5 10.8409 15.5 11L15.5 13.4ZM15.5 7.4C15.5 7.55913 15.4539 7.71174 15.3719 7.82426C15.2898 7.93679 15.1785 8 15.0625 8L1.9375 8C1.82147 8 1.71019 7.93678 1.62814 7.82426C1.54609 7.71174 1.5 7.55913 1.5 7.4L1.5 6.2C1.5 6.04087 1.54609 5.88826 1.62814 5.77573C1.71019 5.66321 1.82147 5.6 1.9375 5.6L15.0625 5.6C15.1785 5.6 15.2898 5.66321 15.3719 5.77573C15.4539 5.88826 15.5 6.04087 15.5 6.2L15.5 7.4ZM15.5 2.6C15.5 2.75913 15.4539 2.91174 15.3719 3.02426C15.2898 3.13679 15.1785 3.2 15.0625 3.2L1.9375 3.2C1.82147 3.2 1.71019 3.13678 1.62814 3.02426C1.54609 2.91174 1.5 2.75913 1.5 2.6C1.5 2.44087 1.54609 2.28826 1.62814 2.17573C1.71019 2.06321 1.82147 2 1.9375 2L15.0625 2C15.1785 2 15.2898 2.06321 15.3719 2.17574C15.4539 2.28826 15.5 2.44087 15.5 2.6Z" fill="currentColor"/>\n    </svg>',"menu-corner-radius":'<svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">\n      <path fill-rule="evenodd" clip-rule="evenodd" d="M4.80187 1H4.76667H2.27778C1.84823 1 1.5 1.34823 1.5 1.77778C1.5 2.20733 1.84823 2.55556 2.27778 2.55556H4.76667C6.52189 2.55556 7.79152 2.55616 8.79008 2.63775C9.77954 2.71859 10.4341 2.87505 10.9717 3.14897C11.9962 3.67094 12.8291 4.50384 13.351 5.52827C13.6249 6.06585 13.7814 6.72046 13.8623 7.70992C13.9438 8.70848 13.9444 9.97811 13.9444 11.7333V14.2222C13.9444 14.6517 14.2927 15 14.7222 15C15.1517 15 15.5 14.6517 15.5 14.2222V11.7333V11.6981C15.5 9.98553 15.5 8.65252 15.4126 7.58325C15.3239 6.49758 15.1413 5.61549 14.737 4.82206C14.0659 3.50493 12.9951 2.43407 11.6779 1.76295C10.8845 1.35868 10.0024 1.17606 8.91675 1.08736C7.84748 1 6.51447 1 4.80187 1Z" fill="currentColor"/>\n    </svg>',"menu-box-shadow":'<svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">\n      <path d="M13.75 2.75V1H1.5V13.25H3.25V15H15.5V2.75H13.75ZM12.875 12.375H2.375V1.875H12.875V12.375Z" fill="currentColor"/>\n    </svg>',"menu-overlay":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">\n      <path d="M12.7445 3.78598C12.5683 3.81798 10.005 3.81798 9.92492 3.76999V1.00247H7.12136V3.78598C6.96116 3.81798 4.38188 3.81798 4.30178 3.76999V1.01847C4.18964 0.986478 1.5623 1.00247 1.51424 1.01847C1.4822 1.16245 1.51424 3.73799 1.51424 3.81798H4.30178V6.60148H1.51424C1.4822 6.77745 1.51424 9.337 1.51424 9.41699H4.30178V12.2165H1.51424C1.4822 12.3285 1.51424 14.6801 1.51424 15H4.3178V12.2325C4.38188 12.2325 6.96116 12.2165 7.10534 12.2325C7.12136 12.2965 7.12136 14.76 7.10534 15H9.94094V12.2325H12.7285C12.7445 12.2965 12.7445 14.6961 12.7445 15H15.5V12.2165H12.7445V9.41699H15.5V6.58549H12.7445V3.81798H15.5V1.00247H12.7445V3.78598ZM7.10534 9.40099C7.04126 9.40099 4.55811 9.41699 4.33382 9.40099C4.30178 9.337 4.30178 6.76146 4.33382 6.61748H7.10534V9.40099ZM9.92492 12.2005C9.84482 12.2325 7.28156 12.2325 7.12136 12.2165V9.41699H9.92492V12.2005ZM7.12136 6.58549V3.81798H9.92492C9.92492 3.89796 9.94094 6.47351 9.92492 6.58549H7.12136ZM12.7445 9.40099H9.94094C9.92492 9.337 9.92492 6.76146 9.94094 6.61748H12.7445V9.40099Z" fill="url(#paint0_linear_14204_11278)"/>\n      <defs>\n        <linearGradient id="paint0_linear_14204_11278" x1="2.5" y1="8" x2="14" y2="8" gradientUnits="userSpaceOnUse">\n          <stop offset="0" stop-color="currentColor" />\n          <stop offset="1" stop-opacity="0.2" stop-color="currentColor" />\n        </linearGradient>\n      </defs>\n    </svg>\n    ',swatch:'\n      <svg\n        xmlns="http://www.w3.org/2000/svg"\n        viewBox="0 0 24 24"\n        fill="none"\n      >\n        <g\n          clip-path="url(#mon-swatch-clip-path)"\n        >\n          <g>\n            <foreignObject\n              x="0"\n              y="0"\n              width="24"\n              height="24"\n            >\n              <div class="conic-gradient" style="background: var(--fa-primary-color, currentColor); height: 100%; width: 100%;"></div>\n            </foreignObject>\n          </g>\n        </g>\n        <circle\n          cx="12"\n          cy="12"\n          r="11.5"\n          stroke="black"\n          stroke-opacity="0.1"\n        />\n      </svg>\n    ',"swatch-checkered":'\n      <svg\n        xmlns="http://www.w3.org/2000/svg"\n        viewBox="0 0 24 24"\n        fill="none"\n      >\n        <g mask="url(#mon-swatch-clip-mask)">\n          <rect width="3.42857" height="3.42857" fill="black" fill-opacity="0.3"/>\n          <rect y="6.85547" width="3.42857" height="3.42857" fill="black" fill-opacity="0.3"/>\n          <rect y="13.7148" width="3.42857" height="3.42857" fill="black" fill-opacity="0.3"/>\n          <rect y="20.5703" width="3.42857" height="3.42857" fill="black" fill-opacity="0.3"/>\n          <rect x="3.42822" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="3.42822" y="6.85547" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="3.42822" y="13.7148" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="3.42822" y="20.5703" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="6.85742" y="3.42969" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="6.85742" y="10.2852" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="6.85742" y="17.1445" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="10.2856" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="17.1426" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="10.2856" y="6.85547" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="17.1426" y="6.85547" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="10.2856" y="13.7148" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="10.2856" y="20.5703" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="17.1426" y="13.7148" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="17.1426" y="20.5703" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="13.7144" y="3.42969" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="20.5718" y="3.42969" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="13.7144" y="10.2852" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="20.5718" y="10.2852" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="13.7144" y="17.1445" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="20.5718" y="17.1445" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="3.42822" y="3.42969" width="3.42857" height="3.42857" fill="black" fill-opacity="0.3"/>\n          <rect x="3.42822" y="10.2852" width="3.42857" height="3.42857" fill="black" fill-opacity="0.3"/>\n          <rect x="3.42822" y="17.1445" width="3.42857" height="3.42857" fill="black" fill-opacity="0.3"/>\n          <rect x="6.85742" width="3.42857" height="3.42857" fill="black" fill-opacity="0.3"/>\n          <rect x="6.85742" y="6.85547" width="3.42857" height="3.42857" fill="black" fill-opacity="0.3"/>\n          <rect x="6.85742" y="13.7148" width="3.42857" height="3.42857" fill="black" fill-opacity="0.3"/>\n          <rect x="6.85742" y="20.5703" width="3.42857" height="3.42857" fill="black" fill-opacity="0.3"/>\n          <rect x="10.2856" y="3.42969" width="3.42857" height="3.42857" fill="black" fill-opacity="0.3"/>\n          <rect x="17.1426" y="3.42969" width="3.42857" height="3.42857" fill="black" fill-opacity="0.3"/>\n          <rect x="10.2856" y="10.2852" width="3.42857" height="3.42857" fill="black" fill-opacity="0.3"/>\n          <rect x="17.1426" y="10.2852" width="3.42857" height="3.42857" fill="black" fill-opacity="0.3"/>\n          <rect x="10.2856" y="17.1445" width="3.42857" height="3.42857" fill="black" fill-opacity="0.3"/>\n          <rect x="17.1426" y="17.1445" width="3.42857" height="3.42857" fill="black" fill-opacity="0.3"/>\n          <rect x="13.7144" width="3.42857" height="3.42857" fill="black" fill-opacity="0.3"/>\n          <rect x="20.5718" width="3.42857" height="3.42857" fill="black" fill-opacity="0.3"/>\n          <rect x="13.7144" y="6.85547" width="3.42857" height="3.42857" fill="black" fill-opacity="0.3"/>\n          <rect x="20.5718" y="6.85547" width="3.42857" height="3.42857" fill="black" fill-opacity="0.3"/>\n          <rect x="13.7144" y="13.7148" width="3.42857" height="3.42857" fill="black" fill-opacity="0.3"/>\n          <rect x="20.5718" y="13.7148" width="3.42857" height="3.42857" fill="black" fill-opacity="0.3"/>\n          <rect x="13.7144" y="20.5703" width="3.42857" height="3.42857" fill="black" fill-opacity="0.3"/>\n          <rect x="20.5718" y="20.5703" width="3.42857" height="3.42857" fill="black" fill-opacity="0.3"/>\n          <rect y="3.42969" width="3.42857" height="3.42857" fill="white"/>\n          <rect y="10.2852" width="3.42857" height="3.42857" fill="white"/>\n          <rect y="17.1445" width="3.42857" height="3.42857" fill="white"/>\n          <circle cx="12" cy="12" r="11.5" stroke="black" stroke-opacity="0.2"/>\n        </g>\n      </svg>\n    ',"text-color":'\n      <svg\n        viewBox="0 0 24 24"\n        fill="none"\n        xmlns="http://www.w3.org/2000/svg"\n      >\n        <path\n          d="M12.6016 4.28516L17.1953 15.2227C17.332 15.5508 17.168 15.9336 16.8398 16.0977C16.5117 16.2344 16.1289 16.0703 15.9648 15.7422L15.0352 13.5H8.9375L8.00781 15.7422C7.87109 16.0703 7.46094 16.2344 7.13281 16.0977C6.80469 15.9336 6.64062 15.5508 6.77734 15.2227L11.3711 4.28516C11.4805 4.03906 11.7266 3.875 12 3.875C12.2461 3.875 12.4922 4.03906 12.6016 4.28516ZM14.4883 12.1875L12 6.22656L9.48438 12.1875H14.4883Z"\n          fill="var(--fa-primary-color, currentColor)"\n        />\n        <path\n          d="M1 20C1 18.8954 1.89543 18 3 18H21C22.1046 18 23 18.8954 23 20C23 21.1046 22.1046 22 21 22H3C1.89543 22 1 21.1046 1 20Z"\n          fill="var(--fa-secondary-color, black)"\n        />\n        <path\n          d="M1.5 20C1.5 19.1716 2.17157 18.5 3 18.5H21C21.8284 18.5 22.5 19.1716 22.5 20C22.5 20.8284 21.8284 21.5 21 21.5H3C2.17157 21.5 1.5 20.8284 1.5 20Z"\n          stroke="black"\n          stroke-opacity="0.2"\n        />\n      </svg>\n    ',"text-highlight":'\n      <svg\n        viewBox="0 0 24 24"\n        fill="none"\n        xmlns="http://www.w3.org/2000/svg"\n      >\n        <path\n          d="M9.15625 10.1211C9.15625 10.4766 9.01953 10.8047 8.77344 11.0508L7.70703 12.0898L9.12891 13.5117L10.168 12.4727C10.4141 12.2266 10.7422 12.0625 11.0977 12.0625H12.4102L12.8477 11.4609L9.75781 8.37109L9.15625 8.80859V10.1211ZM17.8516 4.48828C17.8789 4.46094 17.9062 4.40625 17.9062 4.37891C17.9062 4.32422 17.8789 4.29688 17.8516 4.24219L16.9766 3.36719C16.9219 3.33984 16.8945 3.3125 16.8398 3.3125C16.8125 3.3125 16.7578 3.33984 16.7305 3.36719L10.8516 7.60547L13.6133 10.3672L17.8516 4.48828ZM11.0977 13.375L9.89453 14.5781C9.59375 14.8789 9.18359 14.9609 8.82812 14.8516L7.92578 15.7539C7.76172 15.918 7.54297 16 7.29688 16H5C4.50781 16 4.125 15.6172 4.125 15.125V15.0156C4.125 14.7695 4.20703 14.5508 4.37109 14.3867L6.36719 12.3906C6.25781 12.0352 6.33984 11.5977 6.64062 11.3242L7.84375 10.1211V8.80859C7.84375 8.39844 8.03516 7.98828 8.39062 7.74219L15.9648 2.30078C16.2383 2.10938 16.5391 2 16.8398 2C17.2227 2 17.6055 2.16406 17.8789 2.4375L18.7812 3.33984C19.0547 3.61328 19.2188 3.99609 19.2188 4.37891C19.2188 4.67969 19.1094 4.98047 18.918 5.25391L13.4766 12.8281C13.2305 13.1836 12.8203 13.375 12.4102 13.375H11.0977ZM7.78906 14.0312L7.1875 13.4297L5.92969 14.6875H7.13281L7.78906 14.0312Z"\n          fill="var(--fa-primary-color, currentColor)"\n        />\n        <path\n          d="M1 20C1 18.8954 1.89543 18 3 18H21C22.1046 18 23 18.8954 23 20C23 21.1046 22.1046 22 21 22H3C1.89543 22 1 21.1046 1 20Z"\n          fill="var(--fa-secondary-color, black)"\n        />\n        <path\n          d="M1.5 20C1.5 19.1716 2.17157 18.5 3 18.5H21C21.8284 18.5 22.5 19.1716 22.5 20C22.5 20.8284 21.8284 21.5 21 21.5H3C2.17157 21.5 1.5 20.8284 1.5 20Z"\n          stroke="black"\n          stroke-opacity="0.2"\n        />\n      </svg>\n    ',"text-highlight-undefined":'\n      <svg\n        viewBox="0 0 24 24"\n        fill="none"\n        xmlns="http://www.w3.org/2000/svg"\n      >\n        <path\n          d="M9.15625 10.1211C9.15625 10.4766 9.01953 10.8047 8.77344 11.0508L7.70703 12.0898L9.12891 13.5117L10.168 12.4727C10.4141 12.2266 10.7422 12.0625 11.0977 12.0625H12.4102L12.8477 11.4609L9.75781 8.37109L9.15625 8.80859V10.1211ZM17.8516 4.48828C17.8789 4.46094 17.9062 4.40625 17.9062 4.37891C17.9062 4.32422 17.8789 4.29688 17.8516 4.24219L16.9766 3.36719C16.9219 3.33984 16.8945 3.3125 16.8398 3.3125C16.8125 3.3125 16.7578 3.33984 16.7305 3.36719L10.8516 7.60547L13.6133 10.3672L17.8516 4.48828ZM11.0977 13.375L9.89453 14.5781C9.59375 14.8789 9.18359 14.9609 8.82812 14.8516L7.92578 15.7539C7.76172 15.918 7.54297 16 7.29688 16H5C4.50781 16 4.125 15.6172 4.125 15.125V15.0156C4.125 14.7695 4.20703 14.5508 4.37109 14.3867L6.36719 12.3906C6.25781 12.0352 6.33984 11.5977 6.64062 11.3242L7.84375 10.1211V8.80859C7.84375 8.39844 8.03516 7.98828 8.39062 7.74219L15.9648 2.30078C16.2383 2.10938 16.5391 2 16.8398 2C17.2227 2 17.6055 2.16406 17.8789 2.4375L18.7812 3.33984C19.0547 3.61328 19.2188 3.99609 19.2188 4.37891C19.2188 4.67969 19.1094 4.98047 18.918 5.25391L13.4766 12.8281C13.2305 13.1836 12.8203 13.375 12.4102 13.375H11.0977ZM7.78906 14.0312L7.1875 13.4297L5.92969 14.6875H7.13281L7.78906 14.0312Z"\n          fill="var(--fa-primary-color, currentColor)"\n        />\n      </svg>\n    ',"regular-image-sparkle":'\n      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <path d="M0 5C0 3.90625 0.875 3 2 3H14C15.0938 3 16 3.90625 16 5V8.09375C15.8125 8.03125 15.6562 8 15.5 8C15.125 8 14.75 8.15625 14.5 8.375V5C14.5 4.75 14.25 4.5 14 4.5H2C1.71875 4.5 1.5 4.75 1.5 5V15V15.0312L1.625 14.8438L4.125 11.3438C4.28125 11.125 4.5 11 4.75 11C4.96875 11 5.21875 11.125 5.34375 11.3125L6.3125 12.6562L8.90625 9.3125C9.03125 9.125 9.25 9 9.5 9C9.71875 9 9.9375 9.125 10.0938 9.3125L11.9375 11.7188L11 12.0625C10.375 12.2812 10 12.875 10 13.5V13.5312C10 14.1562 10.375 14.7188 11 14.9688L13.2188 15.7812L13.6562 17H2C0.875 17 0 16.125 0 15V5ZM3.1875 6.75C3.46875 6.3125 3.9375 6 4.5 6C5.03125 6 5.53125 6.3125 5.78125 6.75C6.0625 7.21875 6.0625 7.8125 5.78125 8.25C5.53125 8.71875 5.03125 9 4.5 9C3.9375 9 3.46875 8.71875 3.1875 8.25C2.90625 7.8125 2.90625 7.21875 3.1875 6.75ZM11 13.5C11 13.2812 11.125 13.0938 11.3438 13L14 12L14.9688 9.375C15.0625 9.15625 15.25 9 15.5 9C15.7188 9 15.9062 9.15625 16 9.375L17 12L19.625 13C19.8438 13.0938 20 13.2812 20 13.5C20 13.75 19.8438 13.9375 19.625 14.0312L17 15L16 17.6562C15.9062 17.875 15.7188 18 15.5 18C15.25 18 15.0625 17.875 14.9688 17.6562L14 15L11.3438 14.0312C11.125 13.9375 11 13.75 11 13.5Z" fill="url(#paint0_linear_19093_1180)"/>\n        <defs>\n          <linearGradient id="paint0_linear_19093_1180" x1="0.243902" y1="20" x2="19.8657" y2="19.2606" gradientUnits="userSpaceOnUse">\n            <stop stop-color="#9C15FF"/>\n            <stop offset="1" stop-color="#1EB4FB"/>\n          </linearGradient>\n        </defs>\n      </svg>\n    '};function _i(e){return Object.hasOwn(Hi,e)}function Vi(e){return e.startsWith(Ri)}Object.keys(Hi);var $i=a.vs('<span class="glyph"> </span>');function Fi(e,t){a.VC(t,!1);const i=a.zg(),n=a.zg(),r=a.zg(),o=e=>{var t=a.Im(),i=a.es(t),n=e=>{var t=a.Im(),i=a.es(t);a.qy(i,(()=>Hi[l()]),!1,!1),a.BC(e,t)};a.if(i,(e=>{_i(l())&&e(n)})),a.BC(e,t)},s=e=>{var t=a.Im(),i=a.es(t),n=e=>{var t=$i(),i=a.jf(t,!0);a.cL(t),a.vN((e=>a.j(i,e)),[()=>function(e){return e.slice(Ri.length)}(l())],a.Xd),a.BC(e,t)};a.if(i,(e=>{Vi(l())&&e(n)})),a.BC(e,t)};let l=a._w(t,"icon",8),c=a._w(t,"style",8,"regular"),d=a._w(t,"size",8,14);a.M3((()=>a.iT(l())),(()=>{a.hZ(i,_i(l()))})),a.M3((()=>a.iT(l())),(()=>{a.hZ(n,Vi(l()))})),a.M3((()=>a.iT(c())),(()=>{a.hZ(r,"duotone"===c())})),a.iq(),a.Ts();const p=a.Xd((()=>a.Jt(i)?o:a.Jt(n)?s:`fa-${c()} fa-${l()}`));!function(e,t){a.VC(t,!1);let i=a._w(t,"icon",8,"fa-regular fa-circle-dashed"),n=a._w(t,"color",8,void 0),r=a._w(t,"size",8,void 0),o=a._w(t,"duotone",8,void 0),s=a._w(t,"children",8,void 0);const l="string"==typeof i()&&i().length>0;a.Ts();var c=yi();let d;var p=a.jf(c),h=e=>{var t=a.Im(),n=a.es(t);a.UA(n,i),a.BC(e,t)},u=(e,t)=>{var n=e=>{var t=zi();a.vN((()=>a.ys(t,1,a.$z(i())))),a.BC(e,t)},r=e=>{var t=a.Im(),i=a.es(t);a.UA(i,(()=>s()??a.lQ)),a.BC(e,t)};a.if(e,(e=>{l?e(n):e(r,!1)}),t)};a.if(p,(e=>{i()&&"string"!=typeof i()?e(h):e(u,!1)})),a.cL(c),a.XI(c,(e=>fi?.(e))),a.vN((e=>{a.Jk(c,"data-duotone",o()||void 0),d=a.hg(c,"",d,{"--arc-icon-size":e,"--arc-icon-color":n()})}),[()=>bi(r())],a.Xd),a.BC(e,c),a.uY()}(e,{get icon(){return a.Jt(p)},get size(){return d()},get duotone(){return a.Jt(r)}}),a.uY()}a.vs("<div><!></div>"),a.vs('<div class="scrollbar svelte-1e1sej9" aria-hidden="true"><div class="handle svelte-1e1sej9"></div> <input tabindex="-1" type="range" class="svelte-1e1sej9"></div>'),a.vs("<!> <!>",1),a.vs('<div class="panel-tabs svelte-1uez1n9"><!></div>'),a.vs('<div class="panel svelte-1uez1n9"><!> <!></div>'),a.vs('<div class="panel-actions svelte-ir5tsd"><!></div>'),a.vs('<header><div class="panel-heading svelte-ir5tsd"><!></div> <!></header>'),a.vs('<div class="tooltip-text svelte-1yda0aw"><!></div>'),a.vs('<span class="text-label svelte-156x2eo"> </span>'),a.vs('<!> <div class="mon-sr-only svelte-156x2eo"><!></div>',1),a.vs("<div><!> <!></div>"),a.vs('<div><input type="number" class="input-value svelte-gx1obz"> <div class="input-button dec svelte-gx1obz"><!></div> <div class="input-button inc svelte-gx1obz"><!></div></div>'),a.vs("<button><!></button>"),a.vs('<div><!> <input class="radio-input svelte-1nbcryn" type="radio"></div>'),a.vs('<div class="radio-icon-group svelte-1nbcryn" role="radiogroup"></div>'),a.vs('<div class="text-input-wrapper svelte-dw7kuc"><div class="text-input-prefix svelte-dw7kuc"><div class="text-input-lead-icon svelte-dw7kuc"><!></div></div> <input> <div class="actions svelte-dw7kuc"><!></div></div>'),a.vs('<div class="slider-container svelte-7a6v09"><div class="slider-wrapper svelte-7a6v09"><div class="slider-track svelte-7a6v09"></div> <input type="range" class="slider svelte-7a6v09"></div> <!></div>'),a.vs("<!> ",1),a.vs("<mon-menu-item><!> </mon-menu-item>",2),a.vs("<mon-menu></mon-menu>",2),a.vs('<div class="mon-split-button mon-tooltip-anchor svelte-10dj79p"><div class="mon-split-button-primary svelte-10dj79p"><!></div> <div class="mon-split-button-divider svelte-10dj79p"></div> <div><div class="mon-split-button-secondary svelte-10dj79p"><!></div> <!></div></div>');var Pi=a.vs("<div><!></div>");const ji={hash:"svelte-1i06x9o",code:".suspense.--loading.svelte-1i06x9o {visibility:hidden;}"};a.vs('<label><input class="input mon-visually-hidden svelte-5dh97r"> <!></label>'),a.vs('<div class="tag-group svelte-2750ar"><!></div>'),a.vs("<input>"),a.vs('<label class="toggle-group-option mon-tooltip-anchor svelte-13t9a5s"><!> <input class="svelte-13t9a5s"> <span class="icon-wrapper svelte-13t9a5s"><!></span></label>'),a.vs('<div class="toggle-group-container svelte-13t9a5s"></div>');var Ei=a.vs('<div class="audio-player svelte-ozy54q"><div class="audio-player__housing svelte-ozy54q" role="group"><button class="audio-player__play svelte-ozy54q" type="button"><!></button> <div class="audio-player__slider-wrapper svelte-ozy54q"><input class="audio-player__slider svelte-ozy54q" type="range" step="any"> <div class="audio-player__slider-progress svelte-ozy54q"></div></div> <div class="audio-player__timer svelte-ozy54q" role="timer"> </div></div> <audio class="audio-player__audio-element"></audio></div>');const Di={hash:"svelte-ozy54q",code:".audio-player.svelte-ozy54q {display:flex;min-width:0;flex:1;padding-block:0.4rem;padding-inline:1.2rem;height:4rem;align-items:center;border-radius:10rem;background-color:var(--arc-color-mono-white);pointer-events:initial;}.audio-player__housing.svelte-ozy54q {--slider-thumb-size: 10px;--slider-thumb-bg: var(--arc-color-mono-black);--slider-thumb-border: 1px solid var(--arc-color-border-standard);--slider-thumb-box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);--slider-track-height: 0.5rem;align-items:center;display:flex;flex-flow:row nowrap;width:100%;-webkit-user-select:none;user-select:none;}.audio-player__play.svelte-ozy54q {cursor:pointer;display:flex;align-items:center;justify-content:center;}.audio-player__play.svelte-ozy54q {-webkit-appearance:none;appearance:none;border:none;background:none;font-size:1.6rem;padding-inline:0;}.audio-player__slider-wrapper.svelte-ozy54q {position:relative;height:32px;min-width:0;flex:1;display:flex;--pad-left: 1.25rem;--pad-right: 1.2rem;}.audio-player__slider.svelte-ozy54q {-webkit-appearance:none;appearance:none;background:transparent;cursor:pointer;margin:0;min-width:0;flex:1;height:100%;padding-inline-start:var(--pad-left);padding-inline-end:var(--pad-right);}\n\n  /***** Chrome, Safari, Opera and Edge Chromium styles *****/.audio-player__slider.svelte-ozy54q::-webkit-slider-thumb {-webkit-appearance:none;appearance:none;width:var(--slider-thumb-size);height:var(--slider-thumb-size);background:var(--slider-thumb-bg);border:var(--slider-thumb-border);border-radius:50%;box-shadow:var(--slider-thumb-box-shadow);cursor:pointer;margin-top:calc(-1 * var(--slider-track-height) / 2);}.audio-player__slider.svelte-ozy54q::-webkit-slider-runnable-track {background-color:var(--arc-color-border-standard);border-radius:var(--slider-track-height);height:var(--slider-track-height);}\n\n  /******** Firefox styles ********/.audio-player__slider.svelte-ozy54q::-moz-range-thumb {appearance:none;width:var(--slider-thumb-size);height:var(--slider-thumb-size);background:var(--slider-thumb-bg);border:var(--slider-thumb-border);border-radius:50%;box-shadow:var(--slider-thumb-box-shadow);cursor:pointer;margin-top:calc(-1 * var(--slider-track-height) / 2);}.audio-player__slider.svelte-ozy54q::-moz-range-track {background-color:var(--arc-color-border-standard);border-radius:var(--slider-track-height);height:var(--slider-track-height);}.audio-player__slider-progress.svelte-ozy54q {background:linear-gradient(\n      to right,\n      var(--slider-thumb-bg) var(--slider-progress-percent),\n      transparent 0%\n    );border-radius:var(--slider-track-height);height:var(--slider-track-height);position:absolute;inset-inline-start:var(--pad-left);inset-inline-end:var(--pad-right);inset-block:0 0;margin-top:auto;margin-bottom:auto;min-width:var(--slider-thumb-size);pointer-events:none;}.audio-player__timer.svelte-ozy54q {font-size:1.4rem;font-family:var(--arc-font-family-body);font-weight:var(--arc-font-weight-600);white-space:nowrap;text-align:right;width:4rem;}"};var Oi=a.vs('<div class="mon-audio-wrapper svelte-1req34n"><!></div>');const Ni={hash:"svelte-1req34n",code:".mon-audio-wrapper.svelte-1req34n {align-items:center;display:flex;inset:0;position:absolute;}"};var qi=a.Dn('<g><path class="border svelte-1b0340t"></path></g>');const Ui={hash:"svelte-1b0340t",code:".border.svelte-1b0340t {fill:none;stroke-linecap:round;}"},Gi=.5,Yi=1;var Xi=a.Dn('<filter x="0" y="0" filterUnits="userSpaceOnUse"><feGaussianBlur in="SourceAlpha"></feGaussianBlur><feOffset result="mask"></feOffset><feFlood result="color"></feFlood><feComposite operator="in" in="color" in2="mask"></feComposite><feMerge><feMergeNode></feMergeNode><feMergeNode in="SourceGraphic"></feMergeNode></feMerge></filter>'),Wi=a.Dn('<rect class="fill-color svelte-s28lkx"></rect>');const Ki={hash:"svelte-s28lkx",code:".fill-color.svelte-s28lkx {stroke:none;}"};function Qi(e,t){a.VC(t,!1),a.kZ(e,Ki);let i=a._w(t,"width",8),n=a._w(t,"height",8),r=a._w(t,"fill",8);a.Ts();var o=a.Im(),s=a.es(o),l=e=>{var t=Wi();a.vN((()=>{a.Jk(t,"width",i()),a.Jk(t,"height",n()),a.Jk(t,"fill",r().color),a.Jk(t,"opacity",r().opacity)})),a.BC(e,t)};a.if(s,(e=>{r().color&&e(l)})),a.BC(e,o),a.uY()}var ea=a.Dn('<image class="fill-image" preserveAspectRatio="none"></image>');let ta=0;const ia={type:"rectangle"};function aa(e){return e?.applied?e:void 0}function na(e){return e?.applied?e:void 0}var ra=a.vs('<div class="backdrop-wrapper svelte-faya9i" role="presentation"><svg class="mon-item-backdrop svelte-faya9i" preserveAspectRatio="none"><defs><clipPath><path></path></clipPath><!></defs><g><g><g><!><!><!><rect></rect></g><!></g></g></svg></div>');const oa={hash:"svelte-faya9i",code:".backdrop-wrapper.svelte-faya9i {position:absolute;}.mon-item-backdrop.svelte-faya9i {display:block;width:100%;height:100%;}.mon-item-mouse-trigger.svelte-faya9i {fill:none;}.mon-item-mouse-trigger.--visible.svelte-faya9i {pointer-events:all;}.mon-item-mouse-trigger.--clickable.svelte-faya9i {cursor:pointer;}"};function sa(e,t){a.VC(t,!1),a.kZ(e,oa);const i=a.zg(),n=a.zg(),r=a.zg();let s=a._w(t,"item",8),l=a._w(t,"stateId",8),c=a._w(t,"visible",8),d=a._w(t,"clickable",8,!1),p=a.zg(),h=a.zg(),u=a.zg(ia),g=a.zg(),m=a.zg(),v=a.zg(),b=a.zg(),f=a.zg(),z=a.zg(),y=a.zg(),x=a.zg(),w=a.zg(),C=a.zg(),k=a.zg(),L=a.zg();const S="mon-item-backdrop-clip-"+ta++,I="mon-item-backdrop-shadow-filter-"+ta++;a.M3((()=>a.iT(s())),(()=>{a.hZ(i,s().states.default)})),a.M3((()=>(a.iT(s()),a.iT(l()))),(()=>{a.hZ(n,s().states[l()])})),a.M3((()=>(a.Jt(n),a.Jt(i),a.iT(s()))),(()=>{if(a.hZ(p,a.Jt(n).width?.value??a.Jt(i).width.value),a.hZ(h,a.Jt(n).height?.value??a.Jt(i).height.value),"image"===s().type){const e=a.Jt(n),t=a.Jt(i);a.hZ(u,e.shapeDef??t.shapeDef),a.hZ(m,e.fill??t.fill),a.hZ(v,e.overlay??t.overlay),a.hZ(b,aa(e.dropShadow??t.dropShadow)),a.hZ(f,na(e.border??t.border)),a.hZ(z,e.altText??t.altText)}else if("shape"===s().type){const e=a.Jt(n),t=a.Jt(i);a.hZ(u,e.shapeDef??t.shapeDef),a.hZ(g,e.fill??t.fill),a.hZ(v,e.overlay??t.overlay),a.hZ(b,aa(e.dropShadow??t.dropShadow)),a.hZ(f,na(e.border??t.border)),a.hZ(z,e.altText??t.altText)}else if("group"===s().type){const e=a.Jt(n),t=a.Jt(i);a.hZ(g,e.fill??t.fill),a.hZ(v,e.overlay??t.overlay),a.hZ(f,na(e.border??t.border))}})),a.M3((()=>(a.Jt(y),a.Jt(p),a.Jt(x),a.Jt(h),a.Jt(w),a.Jt(C),a.Jt(k),a.Jt(L),a.Jt(f),a.Jt(b),Yi)),(()=>{a.hZ(y,a.Jt(p)),a.hZ(x,a.Jt(h)),a.hZ(w,0),a.hZ(C,0),a.hZ(k,0),a.hZ(L,0);let e=0;if(a.Jt(f)&&(e+=Math.ceil(.5*a.Jt(f).width.value)),a.Jt(b)){e+=a.Jt(b).blur*Yi;const{offset:{x:t,y:i}}=a.Jt(b);t<0?(a.hZ(y,a.Jt(y)-t),a.hZ(w,a.Jt(w)+t)):(a.hZ(y,a.Jt(y)+t),a.hZ(k,a.Jt(k)-t)),i<0?(a.hZ(x,a.Jt(x)-i),a.hZ(C,a.Jt(C)+i)):(a.hZ(x,a.Jt(x)+i),a.hZ(L,a.Jt(L)-i))}a.hZ(y,a.Jt(y)+2*e),a.hZ(x,a.Jt(x)+2*e),a.hZ(w,a.Jt(w)-e),a.hZ(C,a.Jt(C)-e),a.hZ(k,a.Jt(k)-e),a.hZ(L,a.Jt(L)-e)})),a.M3((()=>(a.Jt(u),a.Jt(p),a.Jt(h))),(()=>{var e,t;a.hZ(r,(e=a.Jt(u),t={width:a.Jt(p),height:a.Jt(h)},Se.get(e.type).clipPath(e,t)))})),a.iq(),a.Ts();var M=ra();let T;var B=a.jf(M),J=a.jf(B),A=a.jf(J);a.Jk(A,"id",S);var Z=a.jf(A);a.cL(A);var R=a.AD(A),H=e=>{!function(e,t){a.VC(t,!1);let i=a._w(t,"id",8),n=a._w(t,"dropShadow",8),r=a._w(t,"svgWidth",8),o=a._w(t,"svgHeight",8);a.Ts();var s=Xi(),l=a.jf(s),c=a.AD(l),d=a.AD(c);a.K2(2),a.cL(s),a.vN((()=>{a.Jk(s,"id",i()),a.Jk(s,"width",r()),a.Jk(s,"height",o()),a.Jk(l,"stdDeviation",n().blur*Gi),a.Jk(c,"dx",n().offset.x),a.Jk(c,"dy",n().offset.y),a.Jk(d,"flood-color",n().color),a.Jk(d,"flood-opacity",n().opacity)})),a.BC(e,s),a.uY()}(e,{id:I,get dropShadow(){return a.Jt(b)},get svgWidth(){return a.Jt(y)},get svgHeight(){return a.Jt(x)}})};a.if(R,(e=>{a.Jt(b)&&e(H)})),a.cL(J);var _=a.AD(J),V=a.jf(_),$=a.jf(V);a.Jk($,"clip-path",`url(#${S??""})`);var F=a.jf($),P=e=>{Qi(e,{get width(){return a.Jt(p)},get height(){return a.Jt(h)},get fill(){return a.Jt(g)}})};a.if(F,(e=>{a.Jt(g)&&e(P)}));var j=a.AD(F),E=e=>{!function(e,t){a.VC(t,!1);const i=a.zg();let n=a._w(t,"width",8),r=a._w(t,"height",8),s=a._w(t,"assets",8,void 0),l=a._w(t,"fill",8);const c=o();a.M3((()=>(a.iT(l()),a.iT(s()))),(()=>{a.hZ(i,l().assetId&&s()?.[l().assetId]?c.resolvePath(s()?.[l().assetId].path):null)})),a.iq(),a.Ts();var d=a.Im(),p=a.es(d),h=e=>{var t=ea();const o=a.Xd((()=>{const{crop:e}=l();return{crop:e}})),s=a.Xd((()=>a.Jt(o).crop.width*n())),c=a.Xd((()=>a.Jt(o).crop.height*r())),d=a.Xd((()=>.5*(n()-a.Jt(s))+n()*a.Jt(o).crop.left)),p=a.Xd((()=>.5*(r()-a.Jt(c))+r()*a.Jt(o).crop.top));let h;a.vN((()=>{a.Jk(t,"href",a.Jt(i)),a.Jk(t,"width",a.Jt(s)),a.Jk(t,"height",a.Jt(c)),a.Jk(t,"x",a.Jt(d)),a.Jk(t,"y",a.Jt(p)),h=a.hg(t,"",h,{opacity:l().opacity})})),a.BC(e,t)};a.if(p,(e=>{a.Jt(i)&&e(h)})),a.BC(e,d),a.uY()}(e,{get width(){return a.Jt(p)},get height(){return a.Jt(h)},get assets(){return s().assets},get fill(){return a.Jt(m)}})};a.if(j,(e=>{a.Jt(m)&&e(E)}));var D=a.AD(j),O=e=>{Qi(e,{get width(){return a.Jt(p)},get height(){return a.Jt(h)},get fill(){return a.Jt(v)}})};a.if(D,(e=>{a.Jt(v)&&e(O)}));var N=a.AD(D);let q;a.cL($);var U=a.AD($),G=e=>{!function(e,t){a.VC(t,!1),a.kZ(e,Ui);let i=a._w(t,"border",8),n=a._w(t,"d",8);a.Ts();var r=qi();let o;var s=a.jf(r);a.cL(r),a.vN((e=>{o=a.hg(r,"",o,{opacity:i().opacity}),a.Jk(s,"stroke-width",i().width.value),a.Jk(s,"stroke",i().color),a.Jk(s,"stroke-dasharray",e),a.Jk(s,"d",n())}),[()=>function(e){if(!e.applied)return;const t=e.width.value;return"dashed"===e.style?`${2*t} ${2*t}`:"dotted"===e.style?"0 "+2*t:void 0}(i())],a.Xd),a.BC(e,r),a.uY()}(e,{get border(){return a.Jt(f)},get d(){return a.Jt(r)}})};a.if(U,(e=>{a.Jt(f)&&e(G)})),a.cL(V),a.cL(_),a.cL(B),a.cL(M),a.vN((e=>{T=a.hg(M,"",T,{left:`${a.Jt(w)??""}px`,top:`${a.Jt(C)??""}px`,right:`${a.Jt(k)??""}px`,bottom:`${a.Jt(L)??""}px`}),a.Jk(B,"viewBox",`0 0 ${a.Jt(y)??""} ${a.Jt(x)??""}`),a.Jk(B,"role",a.Jt(z)?"img":"presentation"),a.Jk(B,"aria-label",a.Jt(z)||void 0),a.Jk(Z,"d",a.Jt(r)),a.Jk(_,"filter",a.Jt(b)?`url(#${I})`:void 0),a.Jk(V,"transform",`translate(${-a.Jt(w)} ${-a.Jt(C)})`),q=a.ys(N,0,"mon-item-mouse-trigger svelte-faya9i",null,q,e),a.Jk(N,"width",a.Jt(p)),a.Jk(N,"height",a.Jt(h)),a.Jk(N,"role",d()?"button":void 0),a.Jk(N,"tabindex",d()?0:void 0)}),[()=>({"--visible":c(),"--clickable":d()})],a.Xd),a.BC(e,M),a.uY()}var la=a.vs('<div role="presentation" tabindex="-1"><!></div>');const ca={hash:"svelte-d0xz7b",code:".mon-item-transform.svelte-d0xz7b {position:absolute;\n    /*\n    This element defines a virtual reference box for the item, but the actual physical\n    extents of the item may vary.  For non-rectangle ShapeItems, the clickable area of\n    the item can be much smaller.  For GroupItems, the reference box itself is generally\n    not clickable; only the children within.  So this element has to be non-interactable,\n    and children of ItemTransform that wish to be interactable are expected to override\n    this within the child components.\n    */pointer-events:none;}.mon-item-transform.--smooth-transitions.svelte-d0xz7b {transition:all 100ms ease;}"},da={type:"rectangle"};var pa=a.vs('<div class="text-item-clip svelte-1nmagoa"><div class="text-item-clip-boundary svelte-1nmagoa"><div class="text-item-padding-boundary svelte-1nmagoa"><!></div></div></div>');const ha={hash:"svelte-1nmagoa",code:".text-item-clip.svelte-1nmagoa {position:absolute;inset:0;}.text-item-clip-boundary.svelte-1nmagoa {position:absolute;}.text-item-padding-boundary.svelte-1nmagoa {position:absolute;inset:var(--top) var(--right) var(--bottom) var(--left);}.text-item-padding-boundary[data-vertical-align='top'].svelte-1nmagoa {--text-item-vertical-align: start;}.text-item-padding-boundary[data-vertical-align='middle'].svelte-1nmagoa {--text-item-vertical-align: center;}.text-item-padding-boundary[data-vertical-align='bottom'].svelte-1nmagoa {--text-item-vertical-align: end;}.text-item-padding-boundary.svelte-1nmagoa .tiptap {align-content:var(--text-item-vertical-align);align-self:var(--text-item-vertical-align);overflow-anchor:none;}"};var ua=a.vs('<div class="content-wrapper svelte-f85pc"><div class="tiptap ProseMirror content svelte-f85pc"></div></div>');const ga={hash:"svelte-f85pc",code:".content-wrapper.svelte-f85pc {height:100%;display:flex;pointer-events:auto;}\n\n  /**\n    * Tiptap content can sometimes render authored line breaks as empty <p> or <h1>-<h6> tags depending\n    * on whether the author used Shift+Enter vs Enter. We need to ensure these empty tags\n    * have a minimum height so they actually behave like line breaks which take up space.\n    */.content.svelte-f85pc\n    \n      :is(p:empty, h1:empty, h2:empty, h3:empty, h4:empty, h5:empty, h6:empty)\n     {min-height:1lh;}"};function ma(e,t){a.VC(t,!1),a.kZ(e,ga);const[i,n]=a.DZ(),r=a.zg();let s=a._w(t,"item",8),l=a._w(t,"stateId",8);const c=o(),{searchTerm:d}=c;a.M3((()=>(a.iT(s()),a.iT(l()))),(()=>{a.hZ(r,s().states[l()].text?.json??s().states.default.text.json)})),a.iq(),a.Ts(),function(e,t){a.VC(t,!1),a.kZ(e,ha);const i=a.zg(),n=a.zg(),r=a.zg();let o=a._w(t,"item",8),s=a._w(t,"stateId",8);a.M3((()=>(a.iT(o()),a.iT(s()))),(()=>{a.hZ(i,Be(o(),s()))})),a.M3((()=>(a.iT(o()),a.Jt(i))),(()=>{var e;a.hZ(n,(e="shape"===o().type?a.Jt(i).shapeDef:da,Se.get(e.type).textExtents(e)))})),a.M3((()=>(a.Jt(r),a.Jt(i))),(()=>{var e;e=a.Jt(i),a.hZ(r,e.textPadding)})),a.iq(),a.Ts();var l=pa(),c=a.jf(l);let d;var p=a.jf(c);let h;var u=a.jf(p);a.NI(u,t,"default",{},null),a.cL(p),a.cL(c),a.cL(l),a.vN((()=>{d=a.hg(c,"",d,{left:`calc(${a.Jt(n).left??""} * 100%)`,top:`calc(${a.Jt(n).top??""} * 100%)`,width:`calc(${a.Jt(n).width??""} * 100%)`,height:`calc(${a.Jt(n).height??""} * 100%)`}),a.Jk(p,"data-vertical-align",a.Jt(i).textVerticalAlign),h=a.hg(p,"",h,{"--top":`${a.Jt(r).top??""}px`,"--left":`${a.Jt(r).left??""}px`,"--bottom":`${a.Jt(r).bottom??""}px`,"--right":`${a.Jt(r).right??""}px`})})),a.BC(e,l),a.uY()}(e,{get item(){return s()},get stateId(){return l()},children:(e,t)=>{var n=ua(),o=a.jf(n);a.XI(o,((e,t)=>$e?.(e,t)),(()=>({doc:a.Jt(r),searchTerm:l()===s().initialState?a.Hz(d,"$searchTerm",i):void 0}))),a.cL(n),a.BC(e,n)},$$slots:{default:!0}}),a.uY(),n()}var va=a.vs('<button class="video-player__big-play-button svelte-1xrpo7n"><!></button>'),ba=a.vs('<button class="video-player__pip-button svelte-1xrpo7n" aria-label="Toggle Picture-in-Picture"><!></button>'),fa=a.vs('<div role="group"><video class="video-player__video svelte-1xrpo7n"><source></video> <!> <div class="video-player__controls svelte-1xrpo7n"><button class="video-player__play-button svelte-1xrpo7n" type="button"><!></button> <div class="video-player__seek-bar-wrapper svelte-1xrpo7n"><input class="video-player__seek-bar svelte-1xrpo7n" type="range" aria-label="Seek"> <div class="video-player__seek-bar-progress svelte-1xrpo7n"></div></div> <span class="video-player__time-remaining svelte-1xrpo7n"> </span> <!> <button class="video-player__fullscreen-button svelte-1xrpo7n" aria-label="Toggle Fullscreen"><!></button> <div class="video-player__volume-control svelte-1xrpo7n"><button class="video-player__volume-button svelte-1xrpo7n" aria-label="Toggle volume"><!></button> <div class="video-player__volume-slider-wrapper svelte-1xrpo7n"><input class="video-player__volume-slider svelte-1xrpo7n" type="range" min="0" max="1" step="0.01" aria-label="Volume"> <div class="video-player__volume-slider-progress svelte-1xrpo7n"></div></div></div></div></div>',2);const za={hash:"svelte-1xrpo7n",code:".video-player.svelte-1xrpo7n {--slider-thumb-size: 10px;--slider-thumb-bg: var(--arc-color-mono-white);--slider-thumb-border: 1px solid var(--arc-color-border-standard);--slider-thumb-box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);--slider-track-height: 0.2rem;container-type:inline-size;container-name:video-player;position:relative;align-items:center;display:flex;flex-direction:column;margin:auto;pointer-events:initial;width:100%;height:100%;}.video-player.fullscreen.svelte-1xrpo7n .video-player__video:where(.svelte-1xrpo7n) {margin:auto 0;}.video-player.touched.svelte-1xrpo7n:not(.active):not(.paused) .video-player__controls:where(.svelte-1xrpo7n),\n  .video-player.svelte-1xrpo7n:not(.touched) .video-player__controls:where(.svelte-1xrpo7n) {opacity:0;pointer-events:none;transition:opacity 1s;}.video-player__big-play-button.svelte-1xrpo7n {aspect-ratio:1 / 1;background-color:rgba(0, 0, 0, 0.67);border-radius:0;border-radius:50%;border:none;cursor:pointer;left:50%;margin:0;padding:0;position:absolute;top:50%;transform:translate(-50%, -50%);transition:background-color 0.4s;max-width:9.8rem;width:13%;min-width:4.8rem;color:var(--arc-color-mono-white);}.video-player.svelte-1xrpo7n:hover .video-player__big-play-button:where(.svelte-1xrpo7n) {background-color:rgba(0, 0, 0, 0.85);outline:0.3rem solid white;}.video-player__video.svelte-1xrpo7n {width:100%;height:100%;object-fit:fill;}.video-player__controls.svelte-1xrpo7n {bottom:0;position:absolute;align-items:center;background-color:rgba(0, 0, 0, 0.67);display:flex;gap:1rem;width:100%;height:7.5rem; /* mini = 3.2rem */color:var(--arc-color-mono-white);padding:0 1rem;}.video-player__play-button.svelte-1xrpo7n {padding:0 0.4rem;height:100%;}.video-player__play-button.svelte-1xrpo7n,\n  .video-player__pip-button.svelte-1xrpo7n,\n  .video-player__fullscreen-button.svelte-1xrpo7n,\n  .video-player__volume-button.svelte-1xrpo7n {display:flex;height:100%;align-items:center;background:none;border:none;cursor:pointer;font-size:1.5rem;color:var(--arc-color-mono-white);}.video-player__play-button.svelte-1xrpo7n:focus svg,\n  .video-player__pip-button.svelte-1xrpo7n:focus svg,\n  .video-player__fullscreen-button.svelte-1xrpo7n:focus svg,\n  .video-player__volume-button.svelte-1xrpo7n:focus svg {filter:drop-shadow(0 0 4px rgb(255 255 255 / 0.8));}.video-player__seek-bar-wrapper.svelte-1xrpo7n {position:relative;height:32px;min-width:0;flex:1;display:flex;}.video-player__time-remaining.svelte-1xrpo7n {font-size:1.2rem;font-weight:700;min-width:3.5rem;}.video-player__volume-control.svelte-1xrpo7n {align-items:center;display:flex;gap:5px;}.video-player__volume-slider-wrapper.svelte-1xrpo7n {position:relative;height:32px;min-width:0;width:100px;display:flex;}.video-player__volume-slider.svelte-1xrpo7n {width:100%;}.video-player__seek-bar.svelte-1xrpo7n,\n  .video-player__volume-slider.svelte-1xrpo7n {-webkit-appearance:none;appearance:none;background:transparent;cursor:pointer;margin:0;flex:1;height:100%;}.video-player__seek-bar.svelte-1xrpo7n::-webkit-slider-thumb,\n  .video-player__volume-slider.svelte-1xrpo7n::-webkit-slider-thumb {-webkit-appearance:none;appearance:none;width:var(--slider-thumb-size);height:var(--slider-thumb-size);background:var(--slider-thumb-bg);border:var(--slider-thumb-border);border-radius:50%;box-shadow:var(--slider-thumb-box-shadow);cursor:pointer;margin-top:calc(-2 * var(--slider-track-height));}.video-player__seek-bar.svelte-1xrpo7n::-webkit-slider-runnable-track,\n  .video-player__volume-slider.svelte-1xrpo7n::-webkit-slider-runnable-track {background-color:rgba(115, 133, 159, 0.5);height:var(--slider-track-height);}.video-player__seek-bar.svelte-1xrpo7n::-moz-range-thumb,\n  .video-player__volume-slider.svelte-1xrpo7n::-moz-range-thumb {appearance:none;width:var(--slider-thumb-size);height:var(--slider-thumb-size);background:var(--slider-thumb-bg);border:var(--slider-thumb-border);border-radius:50%;box-shadow:var(--slider-thumb-box-shadow);cursor:pointer;margin-top:calc(-2 * var(--slider-track-height));}.video-player__seek-bar.svelte-1xrpo7n::-moz-range-track,\n  .video-player__volume-slider.svelte-1xrpo7n::-moz-range-track {background-color:var(--arc-color-border-standard);height:var(--slider-track-height);}.video-player__seek-bar-progress.svelte-1xrpo7n,\n  .video-player__volume-slider-progress.svelte-1xrpo7n {background:linear-gradient(\n      to right,\n      var(--slider-thumb-bg) var(--slider-progress-percent),\n      transparent 0%\n    );height:var(--slider-track-height);position:absolute;inset-block:0 0;margin-top:auto;margin-bottom:auto;min-width:var(--slider-thumb-size);pointer-events:none;width:100%;}\n\n  @container video-player (max-width: 45rem) {.video-player__controls.svelte-1xrpo7n {height:3.2rem;justify-content:space-around;}.video-player__volume-slider-wrapper.svelte-1xrpo7n {width:100%;}.video-player__seek-bar-wrapper.svelte-1xrpo7n,\n    .video-player__time-remaining.svelte-1xrpo7n,\n    .video-player__pip-button.svelte-1xrpo7n {display:none;}\n  }"};var ya=a.vs('<div class="mon-video-wrapper svelte-ngn0zs"><!></div>');const xa={hash:"svelte-ngn0zs",code:".mon-video-wrapper.svelte-ngn0zs {align-items:center;display:flex;inset:0;position:absolute;}"};var wa=a.vs('<div class="mon-item-children svelte-1qzkifk" role="presentation"></div>'),Ca=a.vs('<div role="presentation"><!> <!> <!> <!> <!></div>');const ka={hash:"svelte-1qzkifk",code:".mon-item.svelte-1qzkifk {position:absolute;inset:0;&.--smooth-transitions {transition:opacity 100ms ease;}&.--hidden {opacity:0;}&.--clip {overflow:clip;}}.mon-item-children.svelte-1qzkifk {isolation:isolate;}"};function La(e,t){a.VC(t,!1),a.kZ(e,ka);const[i,r]=a.DZ(),s=()=>a.Hz(T,"$item",i),l=()=>a.Hz(B,"$stateId",i),d=()=>a.Hz(A,"$triggersBySourceId",i),h=()=>a.Hz(J,"$visible",i),u=a.zg(),g=a.zg(),b=a.zg(),f=a.zg(),z=a.zg(),y=a.zg(),x=a.zg();let w=a._w(t,"itemId",8),C=a._w(t,"index",8,void 0),k=a._w(t,"clip",8,!1),L=a._w(t,"noTransform",8,!1);const S=o(),{bindTriggers:I,hideTextContentForId:M}=S,T=S.getItem(w()),B=S.getState(w()),J=S.getVisible(w()),A=S.getTriggersBySourceId(),Z=c();function R({event:e}){return"click"===e}a.M3((()=>s()),(()=>{a.hZ(u,"group"===s().type?s().children:void 0)})),a.M3((()=>s()),(()=>{a.hZ(g,"shape"===s().type||"text"===s().type?s():void 0)})),a.M3((()=>s()),(()=>{a.hZ(b,"video"===s().type?s():void 0)})),a.M3((()=>s()),(()=>{a.hZ(f,"audio"===s().type?s():void 0)})),a.M3((()=>(s(),l())),(()=>{a.hZ(z,s().states[l()].opacity??s().states.default.opacity)})),a.M3((()=>(d(),s())),(()=>{a.hZ(y,d().get(s().id)??[])})),a.M3((()=>a.Jt(y)),(()=>{a.hZ(x,a.Jt(y).some(R))})),a.iq(),a.Ts();const H=a.Xd((()=>null!=C()?-C():void 0));!function(e,t){a.VC(t,!1),a.kZ(e,ca);const i=a.zg(),n=a.zg(),r=a.zg(),o=a.zg(),s=a.zg(),l=a.zg(),d=a.zg(),p=a.zg(),h=a.zg();let u=a._w(t,"item",8),g=a._w(t,"stateId",8),m=a._w(t,"zIndex",8,void 0),v=a._w(t,"noTransform",8,!1);const b=!(u().parentId===u().blockumentId)&&c();let f=a.zg(),z=a.zg();a.M3((()=>a.iT(u())),(()=>{a.hZ(i,u().states.default)})),a.M3((()=>(a.iT(u()),a.iT(g()))),(()=>{a.hZ(n,u().states[g()])})),a.M3((()=>(a.Jt(n),a.Jt(i))),(()=>{a.hZ(r,(a.Jt(n).width??a.Jt(i).width).value)})),a.M3((()=>(a.Jt(n),a.Jt(i))),(()=>{a.hZ(o,(a.Jt(n).height??a.Jt(i).height).value)})),a.M3((()=>(a.Jt(i),a.Jt(n))),(()=>{a.hZ(s,a.Jt(i).x.value+(a.Jt(n).xOffset??0))})),a.M3((()=>(a.Jt(i),a.Jt(n))),(()=>{a.hZ(l,a.Jt(i).y.value+(a.Jt(n).yOffset??0))})),a.M3((()=>(a.Jt(n),a.Jt(i),a.Jt(f),a.Jt(z))),(()=>{const e=a.Jt(n).rotation??a.Jt(i).rotation;if(null==a.Jt(f))a.hZ(z,e);else if(e!==a.Jt(f)){let t=e-a.Jt(f);t>180?t-=360:t<=-180&&(t+=360),a.hZ(z,a.Jt(z)+t)}a.hZ(f,e)})),a.M3((()=>(a.Jt(n),a.Jt(i))),(()=>{a.hZ(d,a.Jt(n).flipX??a.Jt(i).flipX)})),a.M3((()=>(a.Jt(n),a.Jt(i))),(()=>{a.hZ(p,a.Jt(n).flipY??a.Jt(i).flipY)})),a.M3((()=>(a.iT(v()),a.Jt(s),a.Jt(l),a.Jt(z),a.Jt(d),a.Jt(p))),(()=>{a.hZ(h,v()?void 0:`translate(${a.Jt(s)}px, ${a.Jt(l)}px) rotate(${a.Jt(z)}deg) scale(${a.Jt(d)?-1:1}, ${a.Jt(p)?-1:1})`)})),a.iq(),a.Ts();var y=la();let x;a.ys(y,1,"mon-item-transform svelte-d0xz7b",null,{},{"--smooth-transitions":b});var w=a.jf(y);a.NI(w,t,"default",{},null),a.cL(y),a.vN((e=>{a.Jk(y,"data-item-id",e),x=a.hg(y,"",x,{width:`${a.Jt(r)??""}px`,height:`${a.Jt(o)??""}px`,transform:a.Jt(h),"z-index":m()})}),[()=>u().id.slice(0,5)],a.Xd),a.BC(e,y),a.uY()}(e,{get item(){return s()},get stateId(){return l()},get zIndex(){return a.Jt(H)},get noTransform(){return L()},children:(e,t)=>{var r=Ca();let c,d;var C=a.jf(r);sa(C,{get item(){return s()},get stateId(){return l()},get visible(){return h()},get clickable(){return a.Jt(x)}});var L=a.AD(C,2),S=e=>{var t=wa();a.__(t,7,(()=>a.Jt(u)),(e=>e.id),((e,t,i,n)=>{var r=a.Im();La(a.es(r),{get itemId(){return a.Jt(t).id},get index(){return a.Jt(i)}}),a.BC(e,r)})),a.cL(t),a.BC(e,t)};a.if(L,(e=>{a.Jt(u)&&e(S)}));var T=a.AD(L,2),B=e=>{ma(e,{get item(){return a.Jt(g)},get stateId(){return l()}})};a.if(T,(e=>{a.Jt(g)&&a.Hz(M,"$hideTextContentForId",i)!==w()&&e(B)}));var J=a.AD(T,2),A=e=>{!function(e,t){a.VC(t,!1),a.kZ(e,xa);let i=a._w(t,"item",8),r=a._w(t,"stateId",8);const s=o();let l=a.zg();function c(e,t){e.dispatchEvent(new CustomEvent(t,{bubbles:!0,detail:{itemId:i().id}}))}function d(e){c(e.target,p.H5.mediaPlay)}function h(e){c(e.target,p.H5.mediaPause)}function u(e){c(e.target,p.H5.mediaEnd)}a.M3((()=>(a.iT(i()),a.iT(r()))),(()=>{const e=(i().states[r()].videoSources??i().states.default.videoSources).default,t=e&&i().assets?.[e];a.hZ(l,t?s.resolvePath(t.path):void 0)})),a.iq(),a.Ts();var g=ya(),b=a.jf(g);a.Eb(b,r,(e=>{var t=a.Im(),r=a.es(t),s=e=>{!function(e,t){a.VC(t,!1),a.kZ(e,za);const i=a.zg(),{a11yMediaPlay:r,a11yMediaPause:s,a11yGroupVideoPlayer:l}={a11yMediaPause:"Pause button label",a11yMediaPlay:"Play button label",a11yGroupVideoPlayer:"Video player"},c=!0;let d=a._w(t,"mediaSrc",8),p=a._w(t,"item",8),h=a._w(t,"onPlay",8,(()=>{})),u=a._w(t,"onPause",8,(()=>{})),g=a._w(t,"onEnded",8,(()=>{})),b=a.zg(),f=a.zg(),z=a.zg(),y=a.zg(),x=a.zg(),w=a.zg(),C=a.zg(0),k=a.zg(!0),L=a.zg(1),S=a.zg(0),I=a.zg(0),M=a.zg(!1),T=a.zg(!1),B=!1,J=1,A=a.zg(!1),Z=a.zg(!1);const R=()=>{a.Jt(y)&&a.Jt(y).style.setProperty("--slider-progress-percent",Number(a.Jt(S))/a.Jt(C)*100+"%")},H=Ji()((()=>{a.hZ(Z,!1)}),2e3),{mediaElements:_}=o(),V=!!HTMLVideoElement.prototype.requestPictureInPicture;(0,n.onMount)((()=>(_?.set(p().id,a.Jt(f)),V&&a.Jt(f)?.addEventListener("leavepictureinpicture",O),a.Tk(z,a.Jt(z).value="0"),()=>{_?.delete(p().id),V&&a.Jt(f)?.removeEventListener("leavepictureinpicture",O)})));let $=a.zg(),F=a.zg(),P=a.zg();const j=()=>{a.hZ(Z,!0),H()},E=e=>{a.Jt(k)?(a.Jt(f).play().catch((()=>{})),e&&h()(e),a.hZ(A,!0)):(a.Jt(f).pause(),e&&u()(e))},D=async()=>{document.pictureInPictureElement?await document.exitPictureInPicture():(await a.Jt(f).requestPictureInPicture(),a.hZ(T,!0)),R()},O=()=>{a.hZ(T,!1)},N=async()=>{document.fullscreenElement?await document.exitFullscreen():await a.Jt(b).requestFullscreen()},q=e=>{a.hZ(I,e<0?Math.max(a.Jt(I)+e,0):Math.min(a.Jt(I)+e,a.Jt(C)))},U=e=>{a.hZ(L,e<0?Math.max(a.Jt(L)+e,0):Math.min(a.Jt(L)+e,1))};a.M3((()=>(a.Jt(C),a.Jt(I))),(()=>{a.hZ($,Math.round(a.Jt(C)-a.Jt(I)))})),a.M3((()=>(a.Jt($),v)),(()=>{a.hZ(F,m(a.Jt($))),a.hZ(P,v(a.Jt($)))})),a.M3((()=>a.iT(d())),(()=>{a.hZ(i,(e=>{const t=e.split(".").pop()?.toLowerCase();switch(t){case"webm":return"video/webm";case"mp4":return"video/mp4";case"ogg":case"ogm":case"ogv":return"video/ogg";case"mov":return"video/quicktime";case"avi":return"video/x-msvideo";case"mkv":return"video/x-matroska";default:return"application/octet-stream"}})(d()))})),a.iq(),a.Ts();var G=fa();let Y;a.Jk(G,"aria-hidden",!1),a.Jk(G,"aria-label",l),a.Jk(G,"tabindex",0);var X=a.jf(G),W=a.jf(X);a.cL(X),a.Lc(X,(e=>a.hZ(f,e)),(()=>a.Jt(f)));var K=a.AD(X,2),Q=e=>{var t=va();Fi(a.jf(t),{icon:"arc-play",size:"2rem"}),a.cL(t),a.f0("click",t,E),a.BC(e,t)};a.if(K,(e=>{a.Jt(k)&&e(Q)}));var ee=a.AD(K,2),te=a.jf(ee);a.Jk(te,"tabindex",0);var ie=a.jf(te);const ae=a.Xd((()=>a.Jt(k)?"arc-play":"arc-pause"));Fi(ie,{get icon(){return a.Jt(ae)}}),a.cL(te);var ne=a.AD(te,2),re=a.jf(ne);a.R0(re),a.Jk(re,"min",0),a.Jk(re,"step",.01),a.Lc(re,(e=>a.hZ(z,e)),(()=>a.Jt(z)));var oe=a.AD(re,2);a.Lc(oe,(e=>a.hZ(y,e)),(()=>a.Jt(y))),a.cL(ne);var se=a.AD(ne,2),le=a.jf(se);a.cL(se);var ce=a.AD(se,2),de=e=>{var t=ba(),i=a.jf(t);const n=a.Xd((()=>"arc-pip-"+(a.Jt(T)?"disable":"enable")));Fi(i,{get icon(){return a.Jt(n)},size:"2rem"}),a.cL(t),a.f0("click",t,D),a.BC(e,t)};a.if(ce,(e=>{V&&e(de)}));var pe=a.AD(ce,2),he=a.jf(pe);const ue=a.Xd((()=>"arc-fullscreen-"+(a.Jt(M)?"disable":"enable")));Fi(he,{get icon(){return a.Jt(ue)},size:"1.5rem"}),a.cL(pe);var ge=a.AD(pe,2),me=a.jf(ge),ve=a.jf(me);const be=a.Xd((()=>"arc-volume-"+(0===a.Jt(L)?"muted":a.Jt(L)<=.33?"low":a.Jt(L)<=.66?"mid":"high")));Fi(ve,{get icon(){return a.Jt(be)},size:"1.8rem"}),a.cL(me);var fe=a.AD(me,2),ze=a.jf(fe);a.R0(ze),a.Lc(ze,(e=>a.hZ(x,e)),(()=>a.Jt(x)));var ye=a.AD(ze,2);let xe;a.Lc(ye,(e=>a.hZ(w,e)),(()=>a.Jt(w))),a.cL(fe),a.cL(ge),a.cL(ee),a.cL(G),a.Lc(G,(e=>a.hZ(b,e)),(()=>a.Jt(b))),a.vN((e=>{Y=a.ys(G,1,"video-player svelte-1xrpo7n",null,Y,e),X.volume=a.Jt(L),a.Jk(W,"src",d()),a.Jk(W,"type",a.Jt(i)),a.Jk(te,"aria-label",a.Jt(k)?r:s),a.Jk(re,"max",a.Jt(C)),a.Jk(se,"aria-label",a.Jt(P)),a.j(le,`-${a.Jt(F)??""}`),a.to(ze,a.Jt(L)),xe=a.hg(ye,"",xe,{"--slider-progress-percent":100*a.Jt(L)+"%"})}),[()=>({active:a.Jt(Z),paused:a.Jt(k),fullscreen:a.Jt(M),touched:a.Jt(A)})],a.Xd),a.M$(X,(()=>a.Jt(I)),(e=>a.hZ(I,e))),a.IY("duration","durationchange",X,(e=>a.hZ(C,e))),a.Ej(X,(()=>a.Jt(k)),(e=>a.hZ(k,e))),a.f0("click",X,E),a.f0("ended",X,(function(...e){g()?.apply(this,e)})),a.f0("timeupdate",X,(e=>{const t=e.target,{currentTime:i}=t;B||(a.hZ(S,`${i}`),R())})),a.f0("click",te,E),a.oJ(re,(()=>a.Jt(S)),(e=>a.hZ(S,e))),a.f0("input",re,(()=>{B||(B=!0),R()})),a.f0("change",re,(e=>{B&&(B=!1);const t=Number(e.currentTarget?.value);a.hZ(I,t)})),a.f0("click",pe,N),a.f0("click",me,(()=>{a.Jt(L)>0?(J=a.Jt(L),a.hZ(L,0)):a.hZ(L,J)})),a.f0("input",ze,(e=>{const t=e.target;a.hZ(L,parseFloat(t.value))})),a.f0("fullscreenchange",G,(e=>{a.hZ(M,!a.Jt(M)),R()})),a.f0("click",G,j),a.f0("keydown",G,(e=>{const t=a.Jt(C)<=20?.1*a.Jt(C):5,i={Enter:()=>E()," ":()=>E(),ArrowRight:()=>q(t),ArrowLeft:()=>q(-t),ArrowUp:()=>U(.1),ArrowDown:()=>U(-.1),f:N};e.target===e.currentTarget&&Object.keys(i).includes(e.key)&&(e.preventDefault(),e.stopPropagation(),i[e.key]())})),a.f0("mousemove",G,j),a.f0("focus",G,j),a.BC(e,G),a.Ek(t,"allowTabNavigation",c),a.uY({allowTabNavigation:c})}(e,{get mediaSrc(){return a.Jt(l)},get item(){return i()},onPlay:d,onPause:h,onEnded:u})};a.if(r,(e=>{a.Jt(l)&&e(s)})),a.BC(e,t)})),a.cL(g),a.vN((()=>a.Jk(g,"data-item-id",i().id))),a.BC(e,g),a.uY()}(e,{get item(){return a.Jt(b)},get stateId(){return l()}})};a.if(J,(e=>{a.Jt(b)&&e(A)}));var R=a.AD(J,2),H=e=>{!function(e,t){a.VC(t,!1),a.kZ(e,Ni);let i=a._w(t,"item",8),r=a._w(t,"stateId",8);const s=o();let l=a.zg();function c(e,t){e.dispatchEvent(new CustomEvent(t,{bubbles:!0,detail:{itemId:i().id}}))}function d(e){c(e.target,p.H5.mediaPlay)}function h(e){c(e.target,p.H5.mediaPause)}function u(e){c(e.target,p.H5.mediaEnd)}a.M3((()=>(a.iT(i()),a.iT(r()))),(()=>{const e=(i().states[r()].audioSources??i().states.default.audioSources).default,t=e&&i().assets?.[e];a.hZ(l,t?s.resolvePath(t.path):void 0)})),a.iq(),a.Ts();var g=Oi(),b=a.jf(g);a.Eb(b,r,(e=>{var t=a.Im(),r=a.es(t),s=e=>{!function(e,t){a.VC(t,!1),a.kZ(e,Di);const{mediaElements:i}=o(),r=!0;let s=a._w(t,"item",8),l=a._w(t,"mediaSrc",8),c=a.zg(),d=a._w(t,"onPlay",8),p=a._w(t,"onPause",8),h=a._w(t,"onEnded",8);(0,n.onMount)((()=>(i?.set(s().id,a.Jt(c)),()=>{i?.delete(s().id)})));const{a11yMediaPlay:u,a11yMediaPause:g,a11yGroupAudioPlayer:b}={a11yMediaPause:"Pause button label",a11yMediaPlay:"Play button label",a11yGroupAudioPlayer:"Audio player"};let f=a.zg(),z=a.zg(),y=a.zg("0"),x=a.zg(),w=!1,C=a.zg(0),k=a.zg(0),L=a.zg(!0);const S=e=>{e.preventDefault(),e.stopPropagation(),a.hZ(L,!a.Jt(L))};let I=a.zg(),M=a.zg(),T=a.zg();const B=e=>{a.hZ(C,e<0?Math.max(a.Jt(C)+e,0):Math.min(a.Jt(C)+e,a.Jt(k)))};a.M3((()=>(a.Jt(x),a.Jt(y),a.Jt(k),a.Jt(C))),(()=>{a.Jt(x)&&a.Jt(x).style.setProperty("--slider-progress-percent",Number(a.Jt(y))/a.Jt(k)*100+"%"),a.hZ(I,Math.round(a.Jt(k)-a.Jt(C)))})),a.M3((()=>(a.Jt(I),v)),(()=>{a.hZ(M,m(a.Jt(I),!1)),a.hZ(T,v(a.Jt(I)))})),a.iq(),a.Ts();var J=Ei(),A=a.jf(J);a.Jk(A,"aria-hidden",!1),a.Jk(A,"aria-label",b),a.Jk(A,"tabindex",0);var Z=a.jf(A);a.Jk(Z,"tabindex",0);var R=a.jf(Z);const H=a.Xd((()=>a.Jt(L)?"arc-play":"arc-pause"));Fi(R,{get icon(){return a.Jt(H)}}),a.cL(Z),a.Lc(Z,(e=>a.hZ(f,e)),(()=>a.Jt(f)));var _=a.AD(Z,2),V=a.jf(_);a.R0(V),a.Jk(V,"min",0),a.Lc(V,(e=>a.hZ(z,e)),(()=>a.Jt(z)));var $=a.AD(V,2);a.Lc($,(e=>a.hZ(x,e)),(()=>a.Jt(x))),a.cL(_);var F=a.AD(_,2),P=a.jf(F,!0);a.cL(F),a.cL(A);var j=a.AD(A,2);a.Lc(j,(e=>a.hZ(c,e)),(()=>a.Jt(c))),a.cL(J),a.vN((()=>{a.Jk(Z,"aria-label",a.Jt(L)?u:g),a.Jk(V,"max",a.Jt(k)||void 0),a.Jk(F,"aria-label",a.Jt(T)),a.j(P,a.Jt(M)),a.Jk(j,"src",l())})),a.f0("click",Z,S),a.oJ(V,(()=>a.Jt(y)),(e=>a.hZ(y,e))),a.f0("input",V,(()=>{w||(w=!0),a.Jt(x).style.setProperty("--slider-progress-percent",Number(a.Jt(y))/a.Jt(k)*100+"%")})),a.f0("change",V,(e=>{w&&(w=!1);const t=Number(e.currentTarget?.value);a.hZ(C,t)})),a.f0("keydown",A,(e=>{const t=e=>{e.preventDefault(),e.stopPropagation(),B(5)},i=e=>{e.preventDefault(),e.stopPropagation(),B(-5)};e.target===a.Jt(f)||e.target===a.Jt(z)?("Enter"===e.key||" "===e.key?S(e):e.stopPropagation(),e.target===a.Jt(z)&&("ArrowRight"===e.key||"ArrowUp"===e.key?t(e):"ArrowLeft"===e.key||"ArrowDown"===e.key?i(e):e.stopPropagation())):"Enter"===e.key||" "===e.key?S(e):"ArrowRight"===e.key||"ArrowUp"===e.key?t(e):"ArrowLeft"!==e.key&&"ArrowDown"!==e.key||i(e)})),a.M$(j,(()=>a.Jt(C)),(e=>a.hZ(C,e))),a.IY("duration","durationchange",j,(e=>a.hZ(k,e))),a.Ej(j,(()=>a.Jt(L)),(e=>a.hZ(L,e))),a.f0("timeupdate",j,(e=>{const t=e.target,{currentTime:i}=t;w||a.hZ(y,`${i}`)})),a.f0("loadedmetadata",j,(e=>{const t=e.target;(t.duration===1/0||isNaN(t.duration))&&(t.currentTime=1e101,t.ontimeupdate=()=>{t.ontimeupdate=null,t.currentTime=0})})),a.f0("ended",j,(function(...e){h()?.apply(this,e)})),a.f0("pause",j,(function(...e){p()?.apply(this,e)})),a.f0("play",j,(function(...e){d()?.apply(this,e)})),a.BC(e,J),a.Ek(t,"allowTabNavigation",r),a.uY({allowTabNavigation:r})}(e,{get item(){return i()},get mediaSrc(){return a.Jt(l)},onPlay:d,onPause:h,onEnded:u})};a.if(r,(e=>{a.Jt(l)&&e(s)})),a.BC(e,t)})),a.cL(g),a.vN((()=>a.Jk(g,"data-item-id",i().id))),a.BC(e,g),a.uY()}(e,{get item(){return a.Jt(f)},get stateId(){return l()}})};a.if(R,(e=>{a.Jt(f)&&e(H)})),a.cL(r),a.XI(r,((e,t)=>I?.(e,t)),(()=>({item:s(),triggers:a.Jt(y)}))),a.vN((e=>{c=a.ys(r,1,"mon-item svelte-1qzkifk",null,c,e),r.inert=!h(),a.Jk(r,"aria-hidden",!h()),d=a.hg(r,"",d,{opacity:a.Jt(z)})}),[()=>({"--smooth-transitions":Z,"--clip":k(),"--hidden":!h()})],a.Xd),a.BC(e,r)},$$slots:{default:!0}}),a.uY(),r()}var Sa=a.vs('<div class="ui-theme svelte-vr6353"><!></div>');const Ia={hash:"svelte-vr6353",code:"\n  /* Note that :root is important for elements injected into `body`\n  to have access to these vars. */:root,\n  :host {--mon-color-border: var(--arc-color-border-standard);--mon-color-border-selected: var(--arc-color-brand-root);--mon-color-primary: var(--arc-color-blue-600);--mon-color-secondary: var(--arc-color-blue-500);--mon-opacity-inert: var(--arc-alpha-50);--mon-color-input: var(--arc-color-alpha-black-03);\n\n    /**\n      Hardcoded hex value to align with Rise's current behavior for the time being. May be worthwhile to\n      look into a more robust auto-contrast solution in the future.\n    */--mon-color-text-selection: #b5d6fd;\n\n    /*\n     * Some z-indexes for things that may occupy a shared stacking context.\n     * When possible, order problems should be resolved by using isolation instead.\n     */--mon-z-index-select: 3000;--mon-z-index-popover: 3100;--mon-z-index-context-menu: 3200;--mon-z-index-tooltip: 4000;--mon-z-index-toast: 5000;--mon-input-padding: var(--arc-space-0-75) var(--arc-space-1);--mon-input-height: 3.2rem;--mon-focus-outline-width: 0.2rem;--mon-input-hover-box-shadow: inset 0 0 0 0.1rem\n      var(--arc-color-border-stark);--mon-input-focus-box-shadow: inset 0 0 0 var(--mon-focus-outline-width)\n      var(--arc-color-border-focus);--mon-button-hover-background: var(--arc-color-alpha-black-05);--mon-button-active-background: var(--arc-color-alpha-black-10);}.ui-theme.svelte-vr6353 {\n    /*\n    TODO: Remove this forced font once Rise stops poisoning art-design-system-tokens.\n    See https://github.com/articulate/mondrian/issues/1965, https://github.com/articulate/rise-frontend/pull/7589\n    */--arc-font-family-body: Inter, system-ui, sans-serif;font-family:var(--arc-font-family-body);font-size:var(--arc-font-size-14);}.ui-theme.svelte-vr6353 *,\n  .ui-theme.svelte-vr6353 *::before,\n  .ui-theme.svelte-vr6353 *::after {box-sizing:border-box;\n    /** TODO: deprecate once we determine how this should be applied globally as part of\n      * the design system reset stylesheet in a way that is compatible with all the fonts\n      * we plan to support in i18n contexts */font-synthesis:none;}.ui-theme.svelte-vr6353 :where(button, input, textarea) {font-family:inherit;}.mon-sr-only {clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;}:where(.mon-focusable) {border-radius:var(--arc-border-radius-sm);}:where(.mon-focusable:not(:disabled, :has(:disabled)):hover) {box-shadow:inset 0 0 0 0.1rem var(--arc-color-neutral-100);}:where(.mon-focusable:is(:focus-visible, :has(:focus-visible))) {box-shadow:var(--mon-input-focus-box-shadow);}\n\n  /* TODO: Consider moving this utility class to own file */.mon-visually-hidden {clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;}\n\n  /** Custom tiptap overrides intended to be enforced by Mondrian specifically */.tiptap {font-family:var(--mon-theme-font-body);min-height:100%;width:100%;}.tiptap :is(h1, h2, h3, h4, h5, h6) {font-family:var(--mon-theme-font-heading);font-size:inherit;font-weight:inherit;}.tiptap :is(p, h1, h2, h3, h4, h5, h6) {margin:0;}.tiptap > :last-child {\n    /* The last paragraph/heading should have no space-after at all.\n    Since the individual space-after values are applied directly as style attributes, this needs\n    to be high specificity to override */margin-block-end:0 !important;}.tiptap strong {font-weight:bold;}.tiptap em {font-style:italic;}.tiptap s {text-decoration:line-through;}.tiptap u {text-decoration:underline;}\n\n  /** To align with Rise */.tiptap a {color:var(--color-theme);text-decoration:none;}.tiptap a > span {text-decoration:underline;}\n\n  /** Copy of styles that tiptap normally injects into the document head. We render in a shadow root\n    * so default injection doesn't work for us. So we just instead reproduce the rules in our UiTheme styles\n    * which do get rendered within our shadow root wrapper. \n    * TODO: Engage tiptap team about exporting their JS styles so we dont have to do stuff like this\n    */.ProseMirror {position:relative;word-wrap:break-word;white-space:pre-wrap;white-space:break-spaces;font-variant-ligatures:none;font-feature-settings:'liga' 0; /* the above doesn't seem to work in Edge */}.ProseMirror [contenteditable='false'] {white-space:normal;}.ProseMirror [contenteditable='false'] [contenteditable='true'] {white-space:pre-wrap;}.ProseMirror pre {white-space:pre-wrap;}img.ProseMirror-separator {display:inline !important;border:none !important;margin:0 !important;width:1px !important;height:1px !important;}.ProseMirror-gapcursor {display:none;pointer-events:none;position:absolute;margin:0;}.ProseMirror-gapcursor:after {content:'';display:block;position:absolute;top:-2px;width:20px;border-top:1px solid black;\n    animation: svelte-vr6353-ProseMirror-cursor-blink 1.1s steps(2, start) infinite;}\n\n  @keyframes svelte-vr6353-ProseMirror-cursor-blink {\n    to {\n      visibility: hidden;\n    }\n  }.ProseMirror-hideselection *::selection {background:transparent;}.ProseMirror-hideselection *::-moz-selection {background:transparent;}.ProseMirror-hideselection * {caret-color:transparent;}.ProseMirror-focused .ProseMirror-gapcursor {display:block;}.tippy-box[data-animation='fade'][data-state='hidden'] {opacity:0;}"},Ma=(e,{item:t,triggers:i})=>{function a(a,n={}){i.filter((e=>e.event===a)).forEach((i=>{!function(e,t,i){t.dispatchEvent(new CustomEvent("trigger",{detail:i,bubbles:!0}))}(0,e,{itemId:t.id,triggerId:i.id,...n})}))}const n=[...new Set(i.map((e=>e.event)))].map((t=>{switch(t){case p.H5.hover:{let i=!1;return[b("mouseenter",e,(e=>{i||(i=!0,a(t,{hovered:i}))})),b("mouseleave",e,(e=>{i&&(i=!1,a(t,{hovered:i}))}))]}case p.H5.click:return[b("click",e,(e=>{const i=window.getSelection();"Range"!==i?.type&&a(t)})),b("keyup",e,(e=>{["Space","Enter"].includes(e.code)&&e.target===document.activeElement&&a(t)}))];case p.H5.mediaPlay:case p.H5.mediaPause:case p.H5.mediaEnd:return b(t,e,(e=>{a(t)}));default:return b(t,e,(()=>{a(t)}))}})).flat(2).filter(Boolean);return{destroy(){n.forEach((e=>{e()}))}}},Ta=(e,{items:t,currentStates:i,currentVisibles:a,triggers:n,mediaElements:r})=>{const o=Pe()(n,"sourceId"),s={[p.zw.changeState](e,a,n){const r="self"===e.targetId[0]?a:t[e.targetId[0]];!1===n.hovered?i.get(r.id)?.revert(e.targetState):i.get(r.id)?.set(e.targetState)},[p.zw.changeVisibility](e,i,n){e.targetId.forEach((r=>{const o="self"===r?i:t[r];!1===n.hovered?a.get(o.id)?.set(!e.targetVisibility):a.get(o.id)?.set(e.targetVisibility)}))},[p.zw.mediaPause](e,t){e.targetId.forEach((e=>{const i=r?.get("self"===e?t.id:e);i?.pause()}))},[p.zw.mediaPlay](e,t){e.targetId.forEach((e=>{const i=r?.get("self"===e?t.id:e);i?.play().catch((()=>{}))}))},[p.zw.mediaEnd](e,t){e.targetId.forEach((e=>{const i=r?.get("self"===e?t.id:e);i&&(i.currentTime=i.duration,i.pause())}))},[p.zw.changeLayer](e,t){}},l=b("trigger",e,(e=>{const{itemId:i,triggerId:a,...n}=e.detail,r=t[i];if(!r)throw new Error(`Could not execute trigger ${a} on item ${i} because the item could not be found.`);const l=o[r.id]?.find((e=>e.id===a));if(!l||!l.actions.length)throw new Error(`Could not execute trigger ${a} on item ${i} because the trigger could not be found.`);l.actions.forEach((e=>{const t=s[e.type];if(!t)throw new Error(`Could not execute trigger ${a} on item ${i} because an appropriate handler for its '${e.type}' action could not be found.`);t(e,r,n)}))}));return{destroy(){l()}}};var Ba=a.vs("<div> </div>"),Ja=a.vs('<div class="preview svelte-1cumtsm"><div class="width-gauge svelte-1cumtsm"></div> <div class="item-wrapper svelte-1cumtsm"><!></div></div>'),Aa=a.vs('<div class="item-wrapper svelte-1cumtsm"><!></div>'),Za=a.vs("<!> <!>",1);const Ra={hash:"svelte-1cumtsm",code:".preview.svelte-1cumtsm {\n    /* Stacking context so Rise doesn't need to know about Mondrian z-indexes */isolation:isolate;width:100%;}.item-wrapper.svelte-1cumtsm {transform-origin:0 0;position:relative;.preview:where(.svelte-1cumtsm) & {margin:0 auto;}}.width-gauge.svelte-1cumtsm {width:100%;}"};var Ha=i(6170),_a=i.n(Ha),Va=i(4535);const $a=((e,t={width:"100%"},i="div")=>a=>{const n=(0,Ha.useRef)(null),r=(0,Ha.useRef)(null);return(0,Ha.useEffect)((()=>{const t=n.current.shadowRoot??n.current.attachShadow({mode:"open"});return r.current=(0,Va.YU)({component:e,target:t,props:a}),()=>{r.current?.$destroy()}}),[]),(0,Ha.useEffect)((()=>{r.current?.$set(a)}),[a]),_a().createElement(i,{ref:n,style:t,"data-mondrian-shadow-root-host":!0})})((function(e,t){a.VC(t,!1),a.kZ(e,Ra);const[i,c]=a.DZ(),p=()=>a.Hz(T,"$itemsById",i),u=()=>a.Hz(a.Jt(g),"$rootItemCurrentStateId",i),g=a.zg(),m=a.zg(),v=a.zg(),b=a.zg();let f=a._w(t,"manifest",8),z=a._w(t,"blockumentId",8),y=a._w(t,"prefetch",8,!0),x=a._w(t,"searchTerm",8,void 0),w=a._w(t,"runtimeInterface",8,void 0),C=a._w(t,"autoSize",8,!0);(0,n.setContext)(l,!0);let k=a.zg(),L=a.zg();const S=function(){const e=new Map;return{...(0,h.writable)(e),add:(t,i)=>(e.has(t)||e.set(t,function(e){let t,i,a;e.subscribe((e=>{t=e}));const n=(0,h.writable)(t);n.subscribe((e=>{i=a??t,a=e}));const r={...n,revert(e){a===e&&r.set(i)},reset(){r.set(t)}};return r}(i)),e.get(t)),get(t){if(!e.has(t))throw new Error(`No state found for item ${t}`);return e.get(t)},resetAll(){[...e.values()].forEach((e=>{e.reset()}))}}}(),I=function(){const e=new Map;return{...(0,h.writable)(e),upsert(t,i){if(!e.has(t)){const a=function(e){const t={...(0,h.writable)(e),show(){t.set(!0)},hide(){t.set(!1)},reset(){t.set(e)}};return t}(i);return e.set(t,a),a}const a=e.get(t);return a.set(i),a},get(t){if(!e.has(t))throw new Error(`No visibility found for item ${t}`);return e.get(t)},resetAll(){[...e.values()].forEach((e=>{e.reset()}))}}}(),M=(0,h.writable)(new Map),T=(0,h.writable)({}),B=(0,h.derived)(T,(e=>Object.values(e)));(0,h.derived)([M,B],(([e,t])=>({triggers:e,items:t}))).subscribe((({items:e})=>{e.forEach((e=>{S.add(e.id,(0,h.readable)(e.initialState)),I.upsert(e.id,e.initialVisible)})),I.resetAll(),S.resetAll()}));const J=new Map,A=(0,h.writable)(x()),Z={getTriggersBySourceId:()=>(0,h.readonly)(M),getItem:e=>(0,h.derived)(T,(t=>t[e])),getState:e=>S.get(e),getVisible:e=>I.get(e),searchTerm:(0,h.readonly)(A),bindTriggers:Ma,mediaElements:J,hideTextContentForId:(0,h.readable)(null),resolvePath:e=>(w()?.resolvePath??d)(e)};var R;R=Z,(0,n.setContext)(r,R);let H=a.zg();(0,n.onMount)((()=>{I.resetAll();const e=new ResizeObserver((()=>{a.Jt(H)&&V()}));return a.Jt(H)&&e.observe(a.Jt(H)),()=>{e.disconnect()}}));let _=a.zg(1);function V(){if(!(a.Jt(L)&&a.Jt(H)&&u()&&C()&&a.Jt(v)&&a.Jt(b)))return;const e=a.Jt(H).offsetWidth;a.hZ(_,Math.min(1,e/a.Jt(v)))}let $=a.zg(),F=a.zg(),P=a.zg("off");const j=Ji()((e=>{a.hZ(P,e?"polite":"off")}),100,{maxWait:500,trailing:!0});function E(){j(!0)}function D(){j(!1)}a.M3((()=>(a.iT(f()),a.iT(z()),a.Jt(k),je)),(()=>{const e=function(e,t){const i={},{items:a}=e;if(a)for(const e of Object.values(a))e.blockumentId===t&&(i[e.id]=structuredClone(e));return i}(f(),z());a.hZ(k,f().blockuments?.[z()]),a.hZ(L,a.Jt(k)?.children[0]?.id),M.set(je(a.Jt(k)?.triggers??[])),T.set(e)})),a.M3((()=>a.iT(x())),(()=>{A.set(x())})),a.M3((()=>a.Jt(L)),(()=>{a.QK(a.hZ(g,a.Jt(L)?S.get(a.Jt(L)):void 0),"$rootItemCurrentStateId",i)})),a.M3((()=>(a.Jt(L),p(),u(),Be)),(()=>{a.hZ(m,a.Jt(L)&&p()[a.Jt(L)]&&u()?Be(p()[a.Jt(L)],u(),["width","height"]):void 0)})),a.M3((()=>a.Jt(m)),(()=>{a.hZ(v,a.Jt(m)?.width.value)})),a.M3((()=>a.Jt(m)),(()=>{a.hZ(b,a.Jt(m)?.height.value)})),a.M3((()=>(a.Jt($),a.Jt(v),a.Jt(F),a.Jt(b))),(()=>{a.Jt($)===a.Jt(v)&&a.Jt(F)===a.Jt(b)||(a.hZ($,a.Jt(v)),a.hZ(F,a.Jt(b)),V())})),a.iq(),a.Ts(),function(e,t){a.kZ(e,Ia);var i=Sa(),n=a.jf(i);a.NI(n,t,"default",{},null),a.cL(i),a.BC(e,i)}(e,{children:(e,t)=>{var r=Za(),l=a.es(r),c=e=>{!function(e,t){a.VC(t,!1);const i=a.zg();let n=a._w(t,"items",8);const r=o();a.M3((()=>a.iT(n())),(()=>{a.hZ(i,new Map(n().flatMap((e=>Object.values(e.assets??{}))).map((e=>[e.id,e]))))})),a.iq(),a.Ts(),a.d5((e=>{var t=a.Im(),n=a.es(t);a.__(n,1,(()=>a.Jt(i).values()),(e=>e.id),((e,t)=>{var i=s();a.vN((e=>a.Jk(i,"href",e)),[()=>r.resolvePath(a.Jt(t).path)],a.Xd),a.BC(e,i)})),a.BC(e,t)})),a.uY()}(0,{get items(){return a.Hz(B,"$itemsList",i)}})};a.if(l,(e=>{y()&&e(c)}));var d=a.AD(l,2),h=e=>{var t=Ba(),i=a.jf(t);a.cL(t),a.vN((()=>a.j(i,`Block ${z()??""} could not be loaded`))),a.BC(e,t)},u=e=>{!function(e,t){a.VC(t,!1),a.kZ(e,ji);const i=function(){const e=new Set;return(0,n.setContext)("mondrian-suspense",e),e}();let r=a.zg(!0);(0,n.onMount)((()=>{Promise.all(i).then((()=>{a.hZ(r,!1)}))})),a.Ts();var o=Pi();let s;var l=a.jf(o);a.NI(l,t,"default",{get isLoading(){return a.Jt(r)}},null),a.cL(o),a.vN((e=>s=a.ys(o,1,"suspense svelte-1i06x9o",null,s,e)),[()=>({"--loading":a.Jt(r)})],a.Xd),a.BC(e,o),a.uY()}(e,{children:(e,t)=>{var i=a.Im(),n=a.es(i),r=e=>{var t=Ja();let i;var n=a.jf(t);a.Lc(n,(e=>a.hZ(H,e)),(()=>a.Jt(H)));var r=a.AD(n,2);let o;La(a.jf(r),{get itemId(){return a.Jt(L)},noTransform:!0,clip:!0}),a.cL(r),a.QZ((()=>a.f0("focus",r,E))),a.QZ((()=>a.f0("blur",r,D))),a.QZ((()=>a.f0("focusin",r,E))),a.QZ((()=>a.f0("mouseover",r,E))),a.QZ((()=>a.f0("mouseout",r,D))),a.QZ((()=>a.f0("focusout",r,D))),a.XI(r,((e,t)=>Ta?.(e,t)),(()=>({items:p(),currentStates:S,currentVisibles:I,triggers:a.Jt(k).triggers,mediaElements:J}))),a.cL(t),a.vN((()=>{i=a.hg(t,"",i,{height:(a.Jt(b)??500)*a.Jt(_)+"px"}),a.Jk(r,"aria-live",a.Jt(P)),o=a.hg(r,"",o,{transform:`scale(${a.Jt(_)??""})`,width:`${a.Jt(v)??""}px`,height:`${a.Jt(b)??""}px`})})),a.BC(e,t)},o=e=>{var t=Aa();let i;La(a.jf(t),{get itemId(){return a.Jt(L)},clip:!0}),a.cL(t),a.QZ((()=>a.f0("focus",t,E))),a.QZ((()=>a.f0("blur",t,D))),a.QZ((()=>a.f0("focusin",t,E))),a.QZ((()=>a.f0("mouseover",t,E))),a.QZ((()=>a.f0("mouseout",t,D))),a.QZ((()=>a.f0("focusout",t,D))),a.XI(t,((e,t)=>Ta?.(e,t)),(()=>({items:p(),currentStates:S,currentVisibles:I,triggers:a.Jt(k).triggers,mediaElements:J}))),a.vN((()=>{a.Jk(t,"aria-live",a.Jt(P)),i=a.hg(t,"",i,{width:`${a.Jt(v)??""}px`,height:`${a.Jt(b)??""}px`})})),a.BC(e,t)};a.if(n,(e=>{C()?e(r):e(o,!1)})),a.BC(e,i)},$$slots:{default:!0}})};a.if(d,(e=>{void 0===a.Jt(k)||void 0===a.Jt(L)?e(h):e(u,!1)})),a.BC(e,r)},$$slots:{default:!0}}),a.uY(),c()})),Fa=e=>{const{manifest:t,...i}=e,a=(0,Ha.useMemo)((()=>{const e=p.S0.safeParse(t);if(e.success)return e.data}),[t]);return a?_a().createElement($a,{manifest:a,...i}):null},Pa=["shape","text"],ja=(e,t)=>{if(t.content)return t.content.reduce(((t,i)=>t+ja(e,i)),0);if("text"===t.type&&t.text){const i=new RegExp(Re()(e),"gi"),a=t.text.match(i);return a?a.length:0}return 0},Ea=(e,t,i)=>{if(t){if("children"in t)return t?.children.reduce(((t,a)=>t+Ea(e,i[a.id],i)),0);if((e=>Pa.includes(e.type))(t)){const i=t.states[t.initialState].text;if(i)return ja(e,i.json)}}return 0},Da=(e,t,i)=>t.reduce(((t,a)=>(t[a.id]=i.items?a.items.reduce(((t,a)=>{const n=Object.values(i.blockuments||{}).find((e=>e.id===a.blockumentId));return n?t+Ea(e,i.items?.[n.children[0].id],i.items||{}):t}),0):0,t)),{})},7417:(e,t,i)=>{i.d(t,{Mw:()=>s,un:()=>l,S0:()=>n,zw:()=>o,H5:()=>r,Al:()=>$}),i(5076);var a=i(3899);a.lg.Asset.Asset,a.lg.AudioItem.AudioAssets,a.lg.AudioItem.AiAudioSettings,a.lg.AudioItem.AudioItemFullState,a.lg.AudioItem.AudioItem,a.lg.AudioItem.AudioItemState,a.lg.Backdrop.MinimalBackdropData,a.lg.Backdrop.ExtendedBackdropData,a.lg.Backdrop.BackdropColorFillData,a.lg.Backdrop.BackdropImageFillData,a.lg.Backdrop.GroupBackdropStateData,a.lg.Backdrop.ShapeBackdropStateData,a.lg.Backdrop.ImageBackdropStateData,a.lg.BaseItem.BaseItemState,a.lg.Blockument.Blockument,a.lg.BlockumentTransaction.BlockumentTransaction,a.lg.Border.Border,a.lg.DropShadow.DropShadow,a.lg.Fill.FillImageCrop,a.lg.Fill.FillColor,a.lg.Fill.FillImage,a.lg.GroupItem.GroupItemFullState,a.lg.GroupItem.GroupItem,a.lg.GroupItem.GroupItemState,a.lg.ImageItem.ImageItemFullState,a.lg.ImageItem.ImageItem,a.lg.ImageItem.ImageItemState,a.lg.Item.Item,a.lg.ItemRef.ItemRef,a.lg.JSONContent.JSONContent,a.lg.JSONContentStrict.Mark,a.lg.JSONContentStrict.BreakNode,a.lg.JSONContentStrict.TextNode,a.lg.JSONContentStrict.InlineNode,a.lg.JSONContentStrict.BlockNodeContent,a.lg.JSONContentStrict.ParagraphNode,a.lg.JSONContentStrict.HeadingNode,a.lg.JSONContentStrict.ListItemNode,a.lg.JSONContentStrict.OrdererdListNode,a.lg.JSONContentStrict.UnorderedListNode,a.lg.JSONContentStrict.BlockNode,a.lg.JSONContentStrict.DocNode;const n=a.lg.Manifest.Manifest,r=(a.lg.RichTextRef.RichTextRef,a.lg.ShapeDef.ShapeDefBase,a.lg.ShapeDef.ShapeDefRoundedCorners,a.lg.ShapeDef.ShapeRectangle,a.lg.ShapeDef.ShapeEllipse,a.lg.ShapeDef.ShapeStar,a.lg.ShapeDef.ShapeCloud,a.lg.ShapeDef.ShapePlus,a.lg.ShapeDef.ShapeTriangle,a.lg.ShapeDef.ShapeBookmark,a.lg.ShapeDef.ShapeChevron,a.lg.ShapeDef.ShapeOctagon,a.lg.ShapeDef.ShapeParallelogram,a.lg.ShapeDef.ShapeShield,a.lg.ShapeDef.ShapeSpeechBubble,a.lg.ShapeDef.ShapeArrow,a.lg.ShapeDef.ShapeDef,a.lg.ShapeItem.ShapeItemFullState,a.lg.ShapeItem.ShapeItem,a.lg.ShapeItem.ShapeItemState,a.lg.State.StateMeta,a.lg.State.BaseItemFullState,a.lg.TextItem.TextVerticalAlign,a.lg.TextItem.TextPadding,a.lg.TextItem.TextItemFullState,a.lg.TextItem.TextItem,a.lg.TextItem.TextItemState,a.lg.Trigger.TriggerMediaAction,a.lg.Trigger.TriggerChangeStateAction,a.lg.Trigger.TriggerChangeVisibilityAction,a.lg.Trigger.TriggerChangeLayerAction,a.lg.Trigger.TriggerAction,a.lg.Trigger.Trigger,a.lg.Unit.Unit,a.lg.VideoItem.VideoAssets,a.lg.VideoItem.VideoItemFullState,a.lg.VideoItem.VideoItem,a.lg.VideoItem.VideoItemState,{click:"click",hover:"hover",mediaPlay:"mediaPlay",mediaPause:"mediaPause",mediaEnd:"mediaEnd"}),o={changeState:"changeState",changeVisibility:"changeVisibility",mediaPause:"mediaPause",mediaPlay:"mediaPlay",mediaEnd:"mediaEnd",changeLayer:"changeLayer"};i(8562),i(9840);const s={top:20,left:20,bottom:20,right:20},l={top:0,left:0,bottom:0,right:0};i(9912),i(4147);var c=i(4198),d=i(4717),p=i(3004),h=i(4758),u=i(1212),g=i(2359),m=i(31),v=i(2740),b=i(2559),f=i(5873),z=i(9395),y=i(5739);function x(e){return"string"==typeof e?e.replace(/[:;]/g,""):"number"==typeof e?String(e):""}const w=/([a-z%]+)\s*$/i;function C({attributes:e,chain:t,editor:i,selection:a}){const n=[];i.state.doc.nodesBetween(a.from,a.to,((e,t)=>{"listItem"===e.type.name&&n.push({node:e,pos:t})}));const r=a.$from.start()===a.from;if(n.length>1){for(const{node:i,pos:o}of n)(r||o>=a.from&&o<=a.to)&&t.setTextSelection({from:o,to:o+i.nodeSize}).updateAttributes("listItem",e);t.setTextSelection({from:a.from,to:a.to})}else i.isActive("listItem")&&r&&t.updateAttributes("listItem",e);return t}function k(e){let t=e.style.fontSize;if(!t)if(e.closest){const i=e.closest('[style*="font-size:"]')?.style?.fontSize;t=i||""}else e.parentNode&&"style"in e.parentNode&&(t=e.parentNode.style.fontSize||"");const i=parseFloat(t);if(isNaN(i))return null;const a=w.exec(t);if(null==a)return null;switch(a[1]){case"rem":return Math.round(10*i);case"px":return Math.round(i);case"pt":return n=i,Math.round(4*n/3);default:return null}var n}const L=c.YY.create({name:"textSize",addGlobalAttributes:()=>[{types:["textStyle","highlight","listItem"],attributes:{textSize:{default:y.qV,parseHTML:e=>k(e),renderHTML:e=>({style:`font-size: ${e.textSize/10}rem`})}}}],addCommands:()=>({setTextSize:e=>({chain:t,editor:i,tr:{selection:a}})=>{const n=i.isActive("highlight"),r=t().setMark("textStyle",{textSize:e});return n&&r.setMark("highlight",{textSize:e}),C({attributes:{textSize:e},chain:r,editor:i,selection:a}).run()}})}),S=c.YY.create({name:"lineHeight",addGlobalAttributes:()=>[{types:["paragraph","heading"],attributes:{lineHeight:{default:y.t0,parseHTML(e){const t=e.style.lineHeight,i=parseFloat(t);return isNaN(i)?null:i},renderHTML:e=>({style:`line-height: ${x(e.lineHeight)}`})}}}],addCommands:()=>({setLineHeight:e=>({commands:t})=>{const i=t.updateAttributes("paragraph",{lineHeight:e}),a=t.updateAttributes("heading",{lineHeight:e});return i&&a}})}),I=c.YY.create({name:"spaceAfter",addGlobalAttributes:()=>[{types:["paragraph","heading"],attributes:{spaceAfter:{default:y.Gj,parseHTML(e){const t=e.style.marginBlockEnd||e.style.marginBottom;if(!t)return null;const i=t.match(/^\s*(\d+(\.\d+)?)\s*(cm|mm|in|px|pt|pc|em|rem|ex|ch)\s*$/i);if(!i)return null;const a=Number(i[1]),n=i[3];if(isNaN(a)||a<0)return null;switch(n.toLowerCase()){case"cm":return a/2.54*96;case"mm":return a/25.4*96;case"in":return 96*a;case"px":return a;case"pt":return a/72*96;case"pc":return a/6*96;case"em":{const t=k(e);return t?a*t:null}case"rem":return 16*a;case"ex":return 7*a;case"ch":return 8*a;default:return null}},renderHTML:e=>({style:`margin-block-end: ${x(e.spaceAfter)}px;`})}}}],addCommands:()=>({setSpaceAfter:e=>({commands:t})=>{const i=t.updateAttributes("paragraph",{spaceAfter:e}),a=t.updateAttributes("heading",{spaceAfter:e});return i&&a}})}),M=c.YY.create({name:"fontFamily",addGlobalAttributes:()=>[{types:["textStyle","listItem"],attributes:{fontFamily:{default:y.rp,parseHTML:e=>e.style.fontFamily,renderHTML:e=>e.fontFamily?{style:`font-family: ${x(e.fontFamily)}`}:{}}}}],addCommands:()=>({setFontFamily:e=>({chain:t,editor:i,tr:{selection:a}})=>{const n=t();return n.setMark("textStyle",{fontFamily:e}),C({attributes:{fontFamily:e},chain:n,editor:i,selection:a}).run()}})}),T=d.A.extend({addGlobalAttributes(){const e=this.parent(),t=e[0].attributes.color.renderHTML;return e[0].attributes.color.renderHTML=({color:e})=>t({color:x(e)}),e},addCommands:()=>({setColor:e=>({chain:t,editor:i,tr:a})=>{const{selection:n}=a,r=t();return r.setMark("textStyle",{color:e}),i.getAttributes("link").href&&r.updateAttributes("link",{unlinkColor:e}),!0===a.getMeta("linkUpdateColorChange")?r.run():C({attributes:{color:e},chain:r,editor:i,selection:n}).run()},unsetColor:()=>({chain:e,editor:t,tr:{selection:i}})=>{const a=e();return a.setMark("textStyle",{color:null}).removeEmptyTextStyle(),C({attributes:{color:null},chain:a,editor:t,selection:i}).run()}})}).configure({types:["textStyle","listItem"]}),B=p.Ay.extend({addAttributes(){const e=this.parent(),t=e.color.renderHTML;return e.color.renderHTML=({color:e})=>t({color:x(e)}),e}}).configure({multicolor:!0}),J=g.A.extend({addGlobalAttributes(){const e=this.parent(),t=e[0].attributes.textAlign.renderHTML;return e[0].attributes.textAlign.renderHTML=({textAlign:e})=>t({textAlign:x(e)}),e}}).configure({types:["heading","paragraph"]}),A={rel:"noopener noreferrer",target:"_blank"},Z=u.Ay.extend({addAttributes(){return{...this.parent(),rel:{default:A.rel,parseHTML:e=>e.getAttribute("rel"),renderHTML:()=>({rel:A.rel})},target:{default:A.target,parseHTML:e=>e.getAttribute("target"),renderHTML:()=>({target:A.target})},unlinkColor:{default:y.ik}}}}),R=c.YY.create({name:"init",addCommands:()=>({initFontFamily:()=>({chain:e})=>e().setFontFamily(y.rp).run(),initLineHeight:()=>({chain:e})=>e().setLineHeight(y.t0).run(),initTextSize:()=>({chain:e})=>e().setTextSize(y.qV).run(),initColor:()=>({chain:e})=>e().setColor(y.ik).run()})}),H="latestDefocusedSelectionDecoration",_=c.YY.create({name:H,addProseMirrorPlugins:()=>[new b.k_({key:new b.hs(H),state:{init:e=>f.zF.empty,apply(e,t){const{doc:i,selection:a}=e,n=e.getMeta(H),r=a&&a.from!==a.to;if(!r||"focus"===n?.action)return f.zF.empty;if(r&&"blur"===n?.action){const e=f.NZ.inline(a.from,a.to,{class:"latest-defocused-selection",nodeName:"mark"});return f.zF.create(i,[e])}return t}},props:{decorations(e){return this.getState(e)},handleDOMEvents:{blur(e){const{tr:t}=e.state,i=t.setMeta(H,{from:t.selection.from,to:t.selection.to,action:"blur"});e.dispatch(i)},focus(e){const{tr:t}=e.state,i=t.setMeta(H,{from:t.selection.from,to:t.selection.to,action:"focus"});e.dispatch(i)}}}})]}),V=c.YY.create({name:"clearMarksOnEnter",addKeyboardShortcuts(){return{Enter:()=>{const{state:e}=this.editor,{selection:t}=e,{$from:i,empty:a}=t;if(!a)return!1;const n=i.parent;if("heading"!==n.type.name)return!1;const r=i.marks().filter((e=>"textStyle"===e.type.name));let o=null;r.length>0&&(o=r[0].attrs.color||null);const s=n.attrs.textAlign||"left";let l=this.editor.chain().splitBlock().setParagraph().setTextAlign(s);return l=l.unsetMark("bold").unsetMark("italic").unsetMark("underline").unsetMark("strike").unsetMark("highlight"),l=o?l.setMark("textStyle",{color:o}):l.unsetMark("textStyle"),l.run()}}}}),$=[m.A,z.A.configure({code:!1,history:!1,heading:{levels:[2,3,4,5,6]}}),J,B,V,T,L,S,I,v.A,h.A,M,R,_,Z.configure({HTMLAttributes:A,openOnClick:!1,protocols:y.Cd})];(0,c._w)($),i(1399)},4147:(e,t,i)=>{i.d(t,{eS:()=>n}),i(9912);var a=i(5739);function n({callback:e,contentTypes:t,doc:i}){for(const a of i.content??[])a.type&&t.includes(a.type)&&e(a,i),a.content&&n({callback:e,contentTypes:t,doc:a});return i}a.ik,a.qV},8562:(e,t,i)=>{i.d(t,{up:()=>a}),i(3330);const a={id:crypto.randomUUID(),name:"bike.jpg",path:"mondrian/assets/default/bike.jpg",width:1680,height:1120}},9912:(e,t,i)=>{var a=i(5739);a.qm,a.Fg,a.qm,a.Fg,a.qm,a.Fg,a.qm,a.Fg,a.qm,a.Fg},5739:(e,t,i)=>{i.d(t,{Cd:()=>d,Fg:()=>a,Gj:()=>s,ik:()=>c,qV:()=>r,qm:()=>l,rp:()=>n,t0:()=>o});const a="var(--mon-theme-font-heading)",n="var(--mon-theme-font-body)",r=17,o=2,s=0,l=1.25,c="#000000",d=["http","https","mailto"]},1399:(e,t,i)=>{i.d(t,{B2:()=>n}),i(5076);var a=i(3899);a.QU.Auth.JWTClaims,a.QU.ContentFamily.ContentFamilyType,a.QU.ContentFamily.ContentFamily,a.QU.ContentFamily.ContentParent,a.QU.RiseContext.RiseTheme,a.QU.RiseContext.MondrianDecoratedRiseTheme,a.QU.RiseContext.RiseFont,a.QU.RiseContext.RiseTypeface,a.QU.RiseContext.RiseTypefaces,a.QU.RiseContext.FeatureFlags,a.QU.RiseContext.RiseBlockSettings,a.QU.RiseContext.RiseContext,a.QU.RiseContext.RiseResolvedAsset,a.QU.Template.Template,a.QU.TemplateCategory.TemplateCategory,a.QU.VersionedEntity.VersionedEntity;const n=a.QU.VersionedEntity.VersionedManifest},3899:(e,t,i)=>{i.d(t,{fS:()=>at,mu:()=>nt,t8:()=>rt,mP:()=>ot,tr:()=>st,A5:()=>lt,fJ:()=>ct,ml:()=>dt,Er:()=>pt,Nr:()=>ht,ES:()=>ut,L$:()=>gt,S2:()=>mt,Lo:()=>vt,EM:()=>bt,x_:()=>ft,ED:()=>zt,x1:()=>yt,NL:()=>xt,Un:()=>wt,lg:()=>Ct,QU:()=>it});var a=i(5076);function n(e){return a.z.preprocess((t=>{if(!t||"object"!=typeof t||Array.isArray(t))return{};const i={};for(const a in e.shape)if(a in t){const n=t[a];e.shape[a].safeParse(n).success&&(i[a]=n)}return i}),e.partial())}function r(e,t,i){return{name:e,deps:t,factory:i}}function o(e){const t=new Map(e.map((e=>[e.name,{name:e.name,module:e,state:"new",value:0}])));function i(e){const a=t.get(e);if(!a)throw new Error(`Unknown require ${e}`);if("finished"===a.state)return a.value;if("pending"===a.state)throw new Error("Circular require!");a.state="pending";const n=a.module.deps.map(i),r=a.module.factory(...n);return a.state="finished",a.value=r,r}const a={};for(const{name:t}of e)a[t]=i(t);return a}const s=r("Auth",[],(()=>({JWTClaims:a.z.intersection(a.z.object({aud:a.z.string(),cid:a.z.union([a.z.number(),a.z.string()]).optional(),exp:a.z.number(),iat:a.z.number(),iss:a.z.string(),jti:a.z.number().optional(),scp:a.z.unknown().optional(),sub:a.z.string(),uid:a.z.number().optional(),aid:a.z.string().optional()}),a.z.record(a.z.string(),a.z.unknown()))}))),l=r("ContentFamily",[],(()=>{const e=a.z.enum(["app","blockument","course"]);return{ContentFamilyType:e,ContentFamily:a.z.object({contentId:a.z.string(),contentType:e,parentId:a.z.string(),parentType:e}),ContentParent:a.z.object({parentId:a.z.string(),parentType:e})}})),c=r("RiseContext",[],(()=>{const e=a.z.object({themeId:a.z.string(),accentContrast:a.z.enum(["AUTO","BLACK","LIGHT","DARK"]).nullable().optional(),allowSearch:a.z.boolean(),animateBlockEntrance:a.z.boolean(),blockCorners:a.z.enum(["ROUNDED","SQUARED"]),blockNavigationType:a.z.enum(["CONTINOUS","STEPPED"]).nullable().optional(),blockPaddingBottom:a.z.number(),blockPaddingTop:a.z.number(),buttonNavigationStyle:a.z.enum(["FULL","FLOATING","FLOATING_FULL"]),buttonInlineStyle:a.z.enum(["ROUNDED","SQUARED"]),buttonScheme:a.z.enum(["ACCENT","DARK","LIGHT","TINT"]),colorAccent:a.z.string(),compactShowLessonCount:a.z.boolean(),coverImage:a.z.string(),coverImageAlpha:a.z.number(),coverImageColor:a.z.enum(["ACCENT","DARK","LIGHT"]).nullable().optional(),coverImageDefault:a.z.string().nullable().optional(),coverPageType:a.z.enum(["ACCENT","CENTERED","CENTERED_ACCENT_TINT","CENTERED_OVERLAY","CENTERED_IMAGE","IMAGE","LEFT","LEFT_OVERLAY","SPLIT_LEFT","SPLIT_LEFT_IMAGE","SPLIT_RIGHT","SPLIT_RIGHT_IMAGE","TWO_THIRDS_LEFT_IMAGE","TWO_THIRDS_RIGHT_IMAGE","WHITE"]),customColorLessonHeaderContrast:a.z.enum(["AUTO","BLACK","LIGHT","DARK"]).nullable().optional(),enableVideoPlaybackSpeed:a.z.boolean().nullable().optional(),hideCoverPage:a.z.boolean().nullable().optional(),hideLessonHeaders:a.z.boolean().nullable().optional(),lessonHeaderColor:a.z.string().nullable().optional(),lessonHeaderImage:a.z.string(),lessonHeaderImageAlpha:a.z.number(),lessonHeaderImageColor:a.z.enum(["ACCENT","DARK","LIGHT"]),lessonHeaderSize:a.z.enum(["LARGE","MEDIUM","SMALL"]),lessonHeaderStyle:a.z.enum(["ACCENT","BLACK","COLOR","DARK","GRAY","IMAGE","LIGHT","TINT"]),navigation:a.z.boolean(),navigationRestricted:a.z.boolean(),navigationStyle:a.z.enum(["ACCENT","DARK","DARK_ACCENT","DARK_IMAGE","LIGHT","LIGHT_ACCENT","LIGHT_IMAGE","GRAY","TINT"]),navigationType:a.z.enum(["COMPACT","OVERLAY","SIDEBAR"]),showAuthor:a.z.boolean(),showLessonCount:a.z.boolean(),showNavigationButtons:a.z.boolean(),sidebarStartsOpen:a.z.boolean(),bodyTypefaceId:a.z.string().nullable().optional(),headingTypefaceId:a.z.string().nullable().optional(),uiTypefaceId:a.z.string().nullable().optional(),colors:a.z.array(a.z.string()).nullable().optional()}),t=e.extend({colorTint:a.z.string()}),i=a.z.enum(["bold","regular","light","italic","black","semibold","semibolditalic","bolditalic","medium"]),r=a.z.object({id:a.z.string(),key:a.z.string(),original:a.z.string().nullable(),style:i}),o=a.z.object({id:a.z.string(),name:a.z.string(),author:a.z.string().nullable(),createdAt:a.z.string(),default:a.z.boolean(),fonts:a.z.record(a.z.string(),r)}),s=a.z.record(a.z.string(),o),l=a.z.union([a.z.boolean(),a.z.number(),a.z.string()]),c=a.z.record(a.z.string(),l),d=a.z.object({backgroundColor:a.z.string().optional()});return{RiseTheme:e,MondrianDecoratedRiseTheme:t,RiseFont:r,RiseTypeface:o,RiseTypefaces:s,FeatureFlags:c,RiseBlockSettings:d,RiseContext:n(a.z.object({theme:n(t),typefaces:s,featureFlags:c,block:d,aiAssistantSubscriptionEnabled:a.z.boolean(),showUpsellModal:a.z.boolean()})),RiseResolvedAsset:a.z.object({key:a.z.string(),url:a.z.string(),refs:a.z.string().optional(),jobId:a.z.string(),courseId:a.z.string(),inputKey:a.z.string(),lessonId:a.z.string(),original:a.z.string(),uploadId:a.z.string(),mediaType:a.z.enum(["audio","video"]),thumbnail:a.z.string(),transcodeId:a.z.string(),state:a.z.enum(["COMPLETE","CANCELLED","ERROR"]),done:a.z.boolean(),duration:a.z.number()})}})),d=r("Template",[],(()=>({Template:a.z.object({id:a.z.string(),blockumentId:a.z.string(),sourceId:a.z.string().nullable(),name:a.z.string().max(128),isComponent:a.z.boolean().default(!1),thumbnailAssetPath:a.z.string().nullable(),categoryId:a.z.string().nullable()})}))),p=r("TemplateCategory",[],(()=>({TemplateCategory:a.z.object({id:a.z.string(),name:a.z.string().max(128),icon:a.z.string().nullable()})}))),h=r("VersionedEntity",[],(()=>{const e=a.z.object({id:a.z.string(),_v:a.z.number()});return{VersionedEntity:e,VersionedManifest:a.z.object({blockuments:a.z.record(a.z.string(),e).optional(),items:a.z.record(a.z.string(),e).optional()})}})),u=r("Asset",[],(()=>({Asset:a.z.object({id:a.z.string(),path:a.z.string(),name:a.z.string(),width:a.z.number().optional(),height:a.z.number().optional()})}))),g=r("BaseItem",["Asset","State"],(({Asset:e},{BaseItemFullState:t,StateMeta:i})=>{const n=e=>a.z.intersection(i,e.partial()),r=e=>a.z.intersection(a.z.object({default:e}),a.z.record(a.z.string(),n(e))),o=n(t);return{State:n,States:r,BaseItem:t=>a.z.object({id:a.z.string(),blockumentId:a.z.string(),clonedFromId:a.z.string().optional(),parentId:a.z.string(),type:a.z.string(),name:a.z.string().max(128),tagName:a.z.enum(["div","figure","figcaption","blockquote"]).default("div"),locked:a.z.boolean().default(!1),authoringVisible:a.z.boolean().default(!0),initialVisible:a.z.boolean().default(!0),initialState:a.z.string().default("default"),states:r(t),assets:a.z.record(a.z.string(),e).default({}).optional(),removed:a.z.boolean().default(!1),_v:a.z.literal(2)}),BaseItemState:o}})),m=r("Blockument",["ItemRef","Trigger"],(({ItemRef:e},{Trigger:t})=>({Blockument:a.z.object({id:a.z.string(),title:a.z.string().max(255),children:a.z.array(e).max(1),triggers:a.z.array(t),_v:a.z.literal(2)})}))),v=r("Border",["Unit"],(({Unit:e})=>({Border:a.z.object({applied:a.z.boolean().default(!1),type:a.z.enum(["none","fill"]).default("none"),color:a.z.string().default("#000000"),opacity:a.z.number().default(1),style:a.z.enum(["solid","dashed","dotted"]).default("solid"),width:e.default({value:1,unit:"px"})})}))),b=r("Fill",["FillColor","FillImage","FillNone"],(({FillColor:e},{FillImage:t},{FillNone:i})=>({Fill:a.z.discriminatedUnion("type",[e,t,i])}))),f=r("FillBase",[],(()=>({FillBase:a.z.object({assetId:a.z.string().optional(),color:a.z.string().optional(),opacity:a.z.number().min(0).max(1).default(1)})}))),z=r("FillColor",["FillBase"],(({FillBase:e})=>({FillColor:e.extend({type:a.z.literal("color"),color:a.z.string().default("#e4e4e4")})}))),y=r("FillImage",["FillBase"],(({FillBase:e})=>{const t=a.z.object({width:a.z.number(),height:a.z.number(),left:a.z.number(),top:a.z.number()}),i=e.extend({type:a.z.literal("image"),assetId:a.z.string(),crop:t.default({width:1,height:1,left:0,top:0})});return{FillImageCrop:t,FillImage:i}})),x=r("FillNone",["FillBase"],(({FillBase:e})=>({FillNone:e.extend({type:a.z.literal("none")})}))),w=r("FillOverlay",["FillColor","FillNone"],(({FillColor:e},{FillNone:t})=>({FillOverlay:a.z.discriminatedUnion("type",[e,t])}))),C=r("GroupItem",["BaseItem","ItemRef","State"],(({BaseItem:e,State:t},{ItemRef:i},{BaseItemFullState:n})=>{const r=n.extend({children:a.z.array(i)});return{GroupItemFullState:r,GroupItem:e(r).extend({type:a.z.literal("group")}),GroupItemState:t(r)}})),k=r("ImageItem",["BaseItem","State"],(({BaseItem:e,State:t},{BaseItemFullState:i})=>{const n=i.extend({altText:a.z.string().default("")});return{ImageItemFullState:n,ImageItem:e(n).extend({type:a.z.literal("image")}),ImageItemState:t(n)}})),L=r("Item",["GroupItem","ImageItem","ShapeItem","TextItem","VideoItem"],(({GroupItem:e},{ImageItem:t},{ShapeItem:i},{TextItem:n},{VideoItem:r})=>({Item:a.z.discriminatedUnion("type",[e,t,i,n,r])}))),S=r("ItemRef",[],(()=>({ItemRef:a.z.object({id:a.z.string(),clonedFromId:a.z.string().optional(),state:a.z.string(),visible:a.z.boolean()})}))),I=r("JSONContent",[],(()=>{const e=a.z.intersection(a.z.object({type:a.z.string().optional(),attrs:a.z.record(a.z.string(),a.z.any()).optional(),content:a.z.array(a.z.lazy((()=>e))).optional(),marks:a.z.array(a.z.intersection(a.z.object({type:a.z.string(),attrs:a.z.record(a.z.string(),a.z.any()).optional()}),a.z.record(a.z.string(),a.z.any()))).optional(),text:a.z.string().optional()}),a.z.record(a.z.string(),a.z.any()));return{JSONContent:e}})),M=r("Manifest",["Blockument","Item"],(({Blockument:e},{Item:t})=>({Manifest:a.z.object({blockuments:a.z.record(a.z.string(),e).optional(),items:a.z.record(a.z.string(),t).optional()})}))),T=r("Padding",["Unit"],(({Unit:e})=>({Padding:a.z.object({top:e.default({value:0,unit:"px"}),left:e.default({value:0,unit:"px"}),bottom:e.default({value:0,unit:"px"}),right:e.default({value:0,unit:"px"})})}))),B=r("RichTextRef",["JSONContent"],(({JSONContent:e})=>({RichTextRef:a.z.object({id:a.z.string(),type:a.z.literal("tiptap"),json:e})}))),J=r("ShapeItem",["BaseItem","TextItem"],(({BaseItem:e,State:t},{TextItemFullState:i})=>{const n=i.extend({clipPath:a.z.literal("ellipse").nullable().default(null),altText:a.z.string().nullable().default(null)});return{ShapeItemFullState:n,ShapeItem:e(n).extend({type:a.z.literal("shape")}),ShapeItemState:t(n)}})),A=r("State",["Border","Fill","FillOverlay","Padding","Unit"],(({Border:e},{Fill:t},{FillOverlay:i},{Padding:n},{Unit:r})=>{const o=a.z.object({id:a.z.string(),name:a.z.string().max(128)}),s=o.extend({x:r.default({value:0,unit:"px"}),y:r.default({value:0,unit:"px"}),xOffset:a.z.number().default(0),yOffset:a.z.number().default(0),position:a.z.literal("absolute").default("absolute"),width:r.default({value:100,unit:"%"}),height:r.default({value:100,unit:"%"}),padding:n,fill:t,overlay:i,aspectRatioLocked:a.z.boolean(),border:e,borderRadius:a.z.object({applied:a.z.boolean().default(!1),topLeft:r.default({value:0,unit:"px"}),topRight:r.default({value:0,unit:"px"}),bottomRight:r.default({value:0,unit:"px"}),bottomLeft:r.default({value:0,unit:"px"})}),rotation:a.z.number().default(0),flipX:a.z.boolean().default(!1),flipY:a.z.boolean().default(!1)});return{StateMeta:o,BaseItemFullState:s}})),Z=r("TextItem",["BaseItem","RichTextRef","State"],(({BaseItem:e,State:t},{RichTextRef:i},{BaseItemFullState:n})=>{const r=a.z.enum(["top","middle","bottom"]),o=n.extend({text:i,textVerticalAlign:r.default("top")});return{TextVerticalAlign:r,TextItemFullState:o,TextItem:e(o).extend({type:a.z.literal("text")}),TextItemState:t(o)}})),R=r("Trigger",[],(()=>{const e=a.z.object({id:a.z.string(),event:a.z.enum(["click","hover","mediaPlay","mediaPause","mediaEnd"]),sourceId:a.z.string().optional()}),t=e.extend({action:a.z.enum(["mediaPause","mediaPlay","mediaEnd"]),targetId:a.z.string()}),i=e.extend({action:a.z.literal("changeState"),targetId:a.z.string(),targetState:a.z.string().default("default")}),n=e.extend({action:a.z.literal("changeVisibility"),targetId:a.z.string(),targetVisibility:a.z.boolean()});return{TriggerMediaAction:t,TriggerChangeState:i,TriggerChangeVisibility:n,Trigger:a.z.discriminatedUnion("action",[i,n,t])}})),H=r("Unit",[],(()=>({Unit:a.z.object({unit:a.z.enum(["px","%","auto","fr"]),value:a.z.number()})}))),_=r("VideoItem",["BaseItem","State"],(({BaseItem:e,State:t},{BaseItemFullState:i})=>{const n=a.z.object({default:a.z.string()}),r=i.extend({videoSources:n});return{VideoAssets:n,VideoItemFullState:r,VideoItem:e(r).extend({type:a.z.literal("video")}),VideoItemState:t(r)}})),V=r("AudioItem",["BaseItem","State"],(({BaseItem:e,State:t},{BaseItemFullState:i})=>{const n=a.z.object({default:a.z.string()}),r=i.extend({audioSources:n});return{AudioAssets:n,AudioItemFullState:r,AudioItem:e(r).extend({type:a.z.literal("audio")}),AudioItemState:t(r)}})),$=r("BaseItem",["Asset","State"],(({Asset:e},{BaseItemFullState:t,StateMeta:i})=>{const n=e=>a.z.intersection(i,e.partial()),r=e=>a.z.intersection(a.z.object({default:e}),a.z.record(a.z.string(),n(e))),o=n(t);return{State:n,States:r,BaseItem:t=>a.z.object({id:a.z.string(),blockumentId:a.z.string(),clonedFromId:a.z.string().optional(),parentId:a.z.string(),type:a.z.string(),name:a.z.string().max(128),tagName:a.z.enum(["div","figure","figcaption","blockquote"]).default("div"),locked:a.z.boolean().default(!1),authoringVisible:a.z.boolean().default(!0),initialVisible:a.z.boolean().default(!0),initialState:a.z.string().default("default"),states:r(t),assets:a.z.record(a.z.string(),e).default({}).optional(),removed:a.z.boolean().default(!1),_v:a.z.literal(3)}),BaseItemState:o}})),F=r("Blockument",["ItemRef","Trigger"],(({ItemRef:e},{Trigger:t})=>({Blockument:a.z.object({id:a.z.string(),title:a.z.string().max(255),children:a.z.array(e).max(1),triggers:a.z.array(t),_v:a.z.literal(3)})}))),P=r("Item",["AudioItem","GroupItem","ShapeItem","TextItem","VideoItem"],(({AudioItem:e},{GroupItem:t},{ShapeItem:i},{TextItem:n},{VideoItem:r})=>({Item:a.z.discriminatedUnion("type",[e,t,i,n,r])}))),j=r("BaseItem",["Asset","State"],(({Asset:e},{BaseItemFullState:t,StateMeta:i})=>{const n=e=>a.z.intersection(i,e.partial()),r=e=>a.z.intersection(a.z.object({default:e}),a.z.record(a.z.string(),n(e))),o=n(t);return{State:n,States:r,BaseItem:t=>a.z.object({id:a.z.string(),blockumentId:a.z.string(),clonedFromId:a.z.string().optional(),parentId:a.z.string(),type:a.z.string(),name:a.z.string().max(128),tagName:a.z.enum(["div","figure","figcaption","blockquote"]).default("div"),locked:a.z.boolean().default(!1),authoringVisible:a.z.boolean().default(!0),initialVisible:a.z.boolean().default(!0),initialState:a.z.string().default("default"),states:r(t),assets:a.z.record(a.z.string(),e).default({}).optional(),removed:a.z.boolean().default(!1),_v:a.z.literal(4)}),BaseItemState:o}})),E=r("Blockument",["ItemRef","Trigger"],(({ItemRef:e},{Trigger:t})=>({Blockument:a.z.object({id:a.z.string(),title:a.z.string().max(255),children:a.z.array(e).max(1),triggers:a.z.array(t),fonts:a.z.record(a.z.string(),a.z.string()).optional(),_v:a.z.literal(4)})}))),D=r("ShapeDef",[],(()=>{const e=a.z.object({type:a.z.literal("rectangle"),borderRadius:a.z.object({topLeft:a.z.number(),topRight:a.z.number(),bottomRight:a.z.number(),bottomLeft:a.z.number()}).optional()}),t=a.z.object({type:a.z.literal("ellipse")}),i=a.z.object({type:a.z.literal("star"),sidePairs:a.z.number().min(3),innerRadius:a.z.number().min(.1).max(1)}),n=a.z.object({type:a.z.literal("cloud")});return{ShapeRectangle:e,ShapeEllipse:t,ShapeStar:i,ShapeCloud:n,ShapeDef:a.z.discriminatedUnion("type",[e,t,i,n])}})),O=r("ShapeItem",["BaseItem","TextItem"],(({BaseItem:e,State:t},{TextItemFullState:i})=>{const n=i.extend({altText:a.z.string().nullable().default(null)});return{ShapeItemFullState:n,ShapeItem:e(n).extend({type:a.z.literal("shape")}),ShapeItemState:t(n)}})),N=r("State",["Border","Fill","FillOverlay","Padding","ShapeDef","Unit"],(({Border:e},{Fill:t},{FillOverlay:i},{Padding:n},{ShapeDef:r},{Unit:o})=>{const s=a.z.object({id:a.z.string(),name:a.z.string().max(128)}),l=s.extend({x:o.default({value:0,unit:"px"}),y:o.default({value:0,unit:"px"}),xOffset:a.z.number().default(0),yOffset:a.z.number().default(0),position:a.z.literal("absolute").default("absolute"),width:o.default({value:100,unit:"%"}),height:o.default({value:100,unit:"%"}),padding:n,fill:t,overlay:i,aspectRatioLocked:a.z.boolean(),border:e,clipDef:r.default({type:"rectangle"}),rotation:a.z.number().default(0),flipX:a.z.boolean().default(!1),flipY:a.z.boolean().default(!1)});return{StateMeta:s,BaseItemFullState:l}})),q=r("BaseItem",["Asset","State"],(({Asset:e},{BaseItemFullState:t,StateMeta:i})=>{const n=e=>a.z.intersection(i,e.partial()),r=e=>a.z.intersection(a.z.object({default:e}),a.z.record(a.z.string(),n(e))),o=n(t);return{State:n,States:r,BaseItem:t=>a.z.object({id:a.z.string(),blockumentId:a.z.string(),clonedFromId:a.z.string().optional(),parentId:a.z.string(),type:a.z.string(),name:a.z.string().max(128),tagName:a.z.enum(["div","figure","figcaption","blockquote"]).default("div"),locked:a.z.boolean().default(!1),authoringVisible:a.z.boolean().default(!0),initialVisible:a.z.boolean().default(!0),initialState:a.z.string().default("default"),states:r(t),assets:a.z.record(a.z.string(),e).default({}).optional(),removed:a.z.boolean().default(!1),_v:a.z.literal(5)}),BaseItemState:o}})),U=r("Blockument",["ItemRef","Trigger"],(({ItemRef:e},{Trigger:t})=>({Blockument:a.z.object({id:a.z.string(),title:a.z.string().max(255),children:a.z.array(e).max(1),triggers:a.z.array(t),fonts:a.z.record(a.z.string(),a.z.string()).optional(),_v:a.z.literal(5)})}))),G=r("ShapeDef",[],(()=>{const e=a.z.object({type:a.z.literal("rectangle"),borderRadius:a.z.object({topLeft:a.z.number(),topRight:a.z.number(),bottomRight:a.z.number(),bottomLeft:a.z.number()}).optional()}),t=a.z.object({type:a.z.literal("ellipse")}),i=a.z.object({type:a.z.literal("star"),sidePairs:a.z.number().min(3),innerRadius:a.z.number().min(.1).max(1)}),n=a.z.object({type:a.z.literal("cloud")}),r=a.z.object({type:a.z.literal("plus"),stroke:a.z.number().min(.01).max(1)}),o=a.z.object({type:a.z.literal("triangle")}),s=a.z.object({type:a.z.literal("bookmark"),cutoutInset:a.z.number().min(0).max(.8)}),l=a.z.object({type:a.z.literal("chevron"),outsideCornerXCoords:a.z.number().min(.7).max(1),insideCenterXCoord:a.z.number().min(0).max(.3)}),c=a.z.object({type:a.z.literal("octagon")}),d=a.z.object({type:a.z.literal("parallelogram"),shear:a.z.number().min(0).max(1)});return{ShapeRectangle:e,ShapeEllipse:t,ShapeStar:i,ShapeCloud:n,ShapePlus:r,ShapeTriangle:o,ShapeBookmark:s,ShapeChevron:l,ShapeOctagon:c,ShapeParallelogram:d,ShapeDef:a.z.discriminatedUnion("type",[s,l,n,t,c,r,e,i,o,d])}})),Y=r("State",["Border","Fill","FillOverlay","Padding","ShapeDef","Unit"],(({Border:e},{Fill:t},{FillOverlay:i},{Padding:n},{ShapeDef:r},{Unit:o})=>{const s=a.z.object({id:a.z.string(),name:a.z.string().max(128)}),l=s.extend({x:o.default({value:0,unit:"px"}),y:o.default({value:0,unit:"px"}),xOffset:a.z.number().default(0),yOffset:a.z.number().default(0),position:a.z.literal("absolute").default("absolute"),width:o.default({value:100,unit:"%"}),height:o.default({value:100,unit:"%"}),padding:n,fill:t,overlay:i,aspectRatioLocked:a.z.boolean(),border:e,clipDef:r.default({type:"rectangle"}),rotation:a.z.number().default(0),flipX:a.z.boolean().default(!1),flipY:a.z.boolean().default(!1),authoringAspectRatioCropLock:a.z.enum(["freeform","preset","none"])});return{StateMeta:s,BaseItemFullState:l}})),X=r("BaseItem",["Asset","State"],(({Asset:e},{BaseItemFullState:t,StateMeta:i})=>{const n=e=>a.z.intersection(i,e.partial()),r=e=>a.z.intersection(a.z.object({default:e}),a.z.record(a.z.string(),n(e))),o=n(t);return{State:n,States:r,BaseItem:t=>a.z.object({id:a.z.string(),blockumentId:a.z.string(),clonedFromId:a.z.string().optional(),parentId:a.z.string(),type:a.z.string(),name:a.z.string().max(128),tagName:a.z.enum(["div","figure","figcaption","blockquote"]).default("div"),locked:a.z.boolean().default(!1),authoringVisible:a.z.boolean().default(!0),initialVisible:a.z.boolean().default(!0),initialState:a.z.string().default("default"),states:r(t),assets:a.z.record(a.z.string(),e).default({}).optional(),removed:a.z.boolean().default(!1),_v:a.z.literal(6)}),BaseItemState:o}})),W=r("Blockument",["ItemRef","Trigger"],(({ItemRef:e},{Trigger:t})=>({Blockument:a.z.object({id:a.z.string(),title:a.z.string().max(255),children:a.z.array(e).max(1),triggers:a.z.array(t),fonts:a.z.record(a.z.string(),a.z.string()).optional(),_v:a.z.literal(6)})}))),K=r("ShapeDef",[],(()=>{const e=a.z.object({type:a.z.literal("rectangle"),borderRadius:a.z.object({topLeft:a.z.number(),topRight:a.z.number(),bottomRight:a.z.number(),bottomLeft:a.z.number()}).optional()}),t=a.z.object({type:a.z.literal("ellipse")}),i=a.z.object({type:a.z.literal("star"),sidePairs:a.z.number().min(3),innerRadius:a.z.number().min(.1).max(1)}),n=a.z.object({type:a.z.literal("cloud")}),r=a.z.object({type:a.z.literal("plus"),stroke:a.z.number().min(.01).max(1)}),o=a.z.object({type:a.z.literal("triangle"),topVertex:a.z.number().min(0).max(1).optional()}),s=a.z.object({type:a.z.literal("bookmark"),cutoutInset:a.z.number().min(0).max(.8)}),l=a.z.object({type:a.z.literal("chevron"),outsideCornerXCoords:a.z.number().min(.7).max(1),insideCenterXCoord:a.z.number().min(0).max(.3)}),c=a.z.object({type:a.z.literal("octagon")}),d=a.z.object({type:a.z.literal("parallelogram"),shear:a.z.number().min(0).max(1)}),p=a.z.object({type:a.z.literal("shield")}),h=a.z.object({type:a.z.literal("speechBubble")}),u=a.z.object({type:a.z.literal("arrow"),thickness:a.z.number().min(.1).max(.5),headLength:a.z.number().min(.1).max(.9)});return{ShapeRectangle:e,ShapeEllipse:t,ShapeStar:i,ShapeCloud:n,ShapePlus:r,ShapeTriangle:o,ShapeBookmark:s,ShapeChevron:l,ShapeOctagon:c,ShapeParallelogram:d,ShapeShield:p,ShapeSpeechBubble:h,ShapeArrow:u,ShapeDef:a.z.discriminatedUnion("type",[s,l,n,t,c,r,e,i,o,d,p,h,u])}})),Q=r("TextItem",["BaseItem","RichTextRef","State"],(({BaseItem:e,State:t},{RichTextRef:i},{BaseItemFullState:n})=>{const r=a.z.enum(["top","middle","bottom"]),o=a.z.object({top:a.z.number(),left:a.z.number(),bottom:a.z.number(),right:a.z.number()}),s=n.extend({text:i,textVerticalAlign:r.default("top"),textPadding:o});return{TextVerticalAlign:r,TextPadding:o,TextItemFullState:s,TextItem:e(s).extend({type:a.z.literal("text")}),TextItemState:t(s)}})),ee=r("BaseItem",["Asset","State"],(({Asset:e},{BaseItemFullState:t,StateMeta:i})=>{const n=e=>a.z.intersection(i,e.partial()),r=e=>a.z.intersection(a.z.object({default:e}),a.z.record(a.z.string(),n(e))),o=n(t);return{State:n,States:r,BaseItem:t=>a.z.object({id:a.z.string(),blockumentId:a.z.string(),clonedFromId:a.z.string().optional(),parentId:a.z.string(),type:a.z.string(),name:a.z.string().max(128),tagName:a.z.enum(["div","figure","figcaption","blockquote"]).default("div"),locked:a.z.boolean().default(!1),authoringVisible:a.z.boolean().default(!0),initialVisible:a.z.boolean().default(!0),initialState:a.z.string().default("default"),states:r(t),assets:a.z.record(a.z.string(),e).default({}).optional(),removed:a.z.boolean().default(!1),_v:a.z.literal(7)}),BaseItemState:o}})),te=r("Blockument",["ItemRef","Trigger"],(({ItemRef:e},{Trigger:t})=>({Blockument:a.z.object({id:a.z.string(),title:a.z.string().max(255),children:a.z.array(e).max(1),triggers:a.z.array(t),fonts:a.z.record(a.z.string(),a.z.string()).optional(),_v:a.z.literal(7)})}))),ie=r("BaseItem",["Asset","State"],(({Asset:e},{BaseItemFullState:t,StateMeta:i})=>{const n=e=>a.z.intersection(i,e.partial()),r=e=>a.z.intersection(a.z.object({default:e}),a.z.record(a.z.string(),n(e))),o=n(t);return{State:n,States:r,BaseItem:t=>a.z.object({id:a.z.string(),blockumentId:a.z.string(),clonedFromId:a.z.string().optional(),parentId:a.z.string(),type:a.z.string(),name:a.z.string().max(128),tagName:a.z.enum(["div","figure","figcaption","blockquote"]).default("div"),locked:a.z.boolean().default(!1),authoringVisible:a.z.boolean().default(!0),initialVisible:a.z.boolean().default(!0),initialState:a.z.string().default("default"),states:r(t),assets:a.z.record(a.z.string(),e).default({}).optional(),removed:a.z.boolean().default(!1),_v:a.z.literal(8)}),BaseItemState:o}})),ae=r("Blockument",["ItemRef","Trigger"],(({ItemRef:e},{Trigger:t})=>({Blockument:a.z.object({id:a.z.string(),title:a.z.string().max(255),children:a.z.array(e).max(1),triggers:a.z.array(t),fonts:a.z.record(a.z.string(),a.z.string()).optional(),_v:a.z.literal(8)})}))),ne=r("BaseItem",["Asset","State"],(({Asset:e},{BaseItemFullState:t,StateMeta:i})=>{const n=e=>a.z.intersection(i,e.partial()),r=e=>a.z.intersection(a.z.object({default:e}),a.z.record(a.z.string(),n(e))),o=n(t);return{State:n,States:r,BaseItem:t=>a.z.object({id:a.z.string(),blockumentId:a.z.string(),clonedFromId:a.z.string().optional(),parentId:a.z.string(),type:a.z.string(),name:a.z.string().max(128),tagName:a.z.enum(["div","figure","figcaption","blockquote"]).default("div"),locked:a.z.boolean().default(!1),authoringVisible:a.z.boolean().default(!0),initialVisible:a.z.boolean().default(!0),initialState:a.z.string().default("default"),states:r(t),assets:a.z.record(a.z.string(),e).default({}).optional(),removed:a.z.boolean().default(!1),_v:a.z.literal(9)}),BaseItemState:o}})),re=r("Blockument",["ItemRef","Trigger"],(({ItemRef:e},{Trigger:t})=>({Blockument:a.z.object({id:a.z.string(),title:a.z.string().max(255),children:a.z.array(e).min(0).max(1),triggers:a.z.array(t),fonts:a.z.record(a.z.string(),a.z.string()).optional(),_v:a.z.literal(9)})}))),oe=r("GroupItem",["BaseItem","ItemRef","State"],(({BaseItem:e,State:t},{ItemRef:i},{BaseItemFullState:n})=>{const r=n.extend({_groupBrand:a.z.never().optional()});return{GroupItemFullState:r,GroupItem:e(r).extend({type:a.z.literal("group"),children:a.z.array(i)}),GroupItemState:t(r)}})),se=r("ItemRef",[],(()=>({ItemRef:a.z.object({id:a.z.string(),clonedFromId:a.z.string().optional()})}))),le=r("BaseItem",["Asset","State"],(({Asset:e},{BaseItemFullState:t,StateMeta:i})=>{const n=e=>a.z.intersection(i,e.partial()),r=e=>a.z.intersection(a.z.object({default:e}),a.z.record(a.z.string(),n(e))),o=n(t);return{State:n,States:r,BaseItem:t=>a.z.object({id:a.z.string(),blockumentId:a.z.string(),clonedFromId:a.z.string().optional(),parentId:a.z.string(),type:a.z.string(),name:a.z.string().max(128),tagName:a.z.enum(["div","figure","figcaption","blockquote"]).default("div"),locked:a.z.boolean().default(!1),authoringVisible:a.z.boolean().default(!0),initialVisible:a.z.boolean().default(!0),initialState:a.z.string().default("default"),states:r(t),assets:a.z.record(a.z.string(),e).default({}).optional(),removed:a.z.boolean().default(!1),_v:a.z.literal(10)}),BaseItemState:o}})),ce=r("Blockument",["ItemRef","Trigger"],(({ItemRef:e},{Trigger:t})=>({Blockument:a.z.object({id:a.z.string(),title:a.z.string().max(255),children:a.z.array(e).min(0).max(1),triggers:a.z.array(t),fonts:a.z.record(a.z.string(),a.z.string()).optional(),_v:a.z.literal(10)})}))),de=r("DropShadow",[],(()=>{const e=a.z.object({x:a.z.number(),y:a.z.number()}),t=a.z.object({applied:a.z.literal(!1)}),i=a.z.object({applied:a.z.literal(!0),offset:e,blur:a.z.number().min(0),spread:a.z.number().min(0),color:a.z.string(),opacity:a.z.number().min(0).max(1)});return{DropShadow:a.z.discriminatedUnion("applied",[t,i])}})),pe=r("ShapeItem",["BaseItem","DropShadow","TextItem"],(({BaseItem:e,State:t},{DropShadow:i},{TextItemFullState:n})=>{const r=n.extend({altText:a.z.string().nullable().default(null),dropShadow:i});return{ShapeItemFullState:r,ShapeItem:e(r).extend({type:a.z.literal("shape")}),ShapeItemState:t(r)}})),he=r("BaseItem",["Asset","State"],(({Asset:e},{BaseItemFullState:t,StateMeta:i})=>{const n=e=>a.z.intersection(i,e.partial()),r=e=>a.z.intersection(a.z.object({default:e}),a.z.record(a.z.string(),n(e))),o=n(t);return{State:n,States:r,BaseItem:t=>a.z.object({id:a.z.string(),blockumentId:a.z.string(),clonedFromId:a.z.string().optional(),parentId:a.z.string(),type:a.z.string(),name:a.z.string().max(128),tagName:a.z.enum(["div","figure","figcaption","blockquote"]).default("div"),locked:a.z.boolean().default(!1),authoringVisible:a.z.boolean().default(!0),initialVisible:a.z.boolean().default(!0),initialState:a.z.string().default("default"),states:r(t),assets:a.z.record(a.z.string(),e).default({}).optional(),removed:a.z.boolean().default(!1),_v:a.z.literal(11)}),BaseItemState:o}})),ue=r("Blockument",["ItemRef","Trigger"],(({ItemRef:e},{Trigger:t})=>({Blockument:a.z.object({id:a.z.string(),title:a.z.string().max(255),children:a.z.array(e).min(0).max(1),triggers:a.z.array(t),fonts:a.z.record(a.z.string(),a.z.string()).optional(),_v:a.z.literal(11)})}))),ge=r("Trigger",[],(()=>{const e=a.z.object({type:a.z.enum(["mediaPause","mediaPlay","mediaEnd"]),targetId:a.z.array(a.z.string())}),t=a.z.object({type:a.z.literal("changeState"),targetId:a.z.tuple([a.z.string()]),targetState:a.z.string().default("default")}),i=a.z.object({type:a.z.literal("changeVisibility"),targetId:a.z.array(a.z.string()),targetVisibility:a.z.boolean()}),n=a.z.discriminatedUnion("type",[e,t,i]);return{TriggerMediaAction:e,TriggerChangeStateAction:t,TriggerChangeVisibilityAction:i,TriggerAction:n,Trigger:a.z.object({id:a.z.string(),event:a.z.enum(["click","hover","mediaPlay","mediaPause","mediaEnd"]),sourceId:a.z.string().optional(),actions:a.z.array(n)})}})),me=r("BaseItem",["Asset","State"],(({Asset:e},{BaseItemFullState:t,StateMeta:i})=>{const n=e=>a.z.intersection(i,e.partial()),r=e=>a.z.intersection(a.z.object({default:e}),a.z.record(a.z.string(),n(e))),o=n(t);return{State:n,States:r,BaseItem:t=>a.z.object({id:a.z.string(),blockumentId:a.z.string(),clonedFromId:a.z.string().optional(),parentId:a.z.string(),type:a.z.string(),name:a.z.string().max(128),tagName:a.z.enum(["div","figure","figcaption","blockquote"]).default("div"),locked:a.z.boolean().default(!1),authoringVisible:a.z.boolean().default(!0),initialVisible:a.z.boolean().default(!0),initialState:a.z.string().default("default"),states:r(t),assets:a.z.record(a.z.string(),e).default({}),removed:a.z.boolean().default(!1),_v:a.z.literal(12)}),BaseItemState:o}})),ve=r("Blockument",["ItemRef","Trigger"],(({ItemRef:e},{Trigger:t})=>({Blockument:a.z.object({id:a.z.string(),title:a.z.string().max(255),children:a.z.array(e).min(0).max(1),triggers:a.z.array(t),fonts:a.z.record(a.z.string(),a.z.string()).optional(),_v:a.z.literal(12)})}))),be=r("Fill",["FillBase"],(({FillColorFields:e,FillImageFields:t})=>{const i=a.z.enum(["color","image"]);return{Fill:a.z.intersection(a.z.intersection(e,t),a.z.object({type:i}))}})),fe=r("FillBase",[],(()=>{const e=a.z.object({width:a.z.number(),height:a.z.number(),left:a.z.number(),top:a.z.number()}),t=a.z.object({opacity:a.z.number().min(0).max(1).default(1)}),i=t.extend({color:a.z.string().optional()}),n=t.extend({assetId:a.z.string().optional(),crop:e.default({width:1,height:1,left:0,top:0})});return{FillImageCrop:e,FillBase:t,FillColorFields:i,FillImageFields:n}})),ze=r("OverlayFill",["FillBase"],(({FillColorFields:e})=>({OverlayFill:e.extend({type:a.z.literal("color")})}))),ye=r("State",["Border","Fill","OverlayFill","Padding","ShapeDef","Unit"],(({Border:e},{Fill:t},{OverlayFill:i},{Padding:n},{ShapeDef:r},{Unit:o})=>{const s=a.z.object({id:a.z.string(),name:a.z.string().max(128)}),l=s.extend({x:o.default({value:0,unit:"px"}),y:o.default({value:0,unit:"px"}),xOffset:a.z.number().default(0),yOffset:a.z.number().default(0),position:a.z.literal("absolute").default("absolute"),width:o.default({value:100,unit:"%"}),height:o.default({value:100,unit:"%"}),padding:n,fill:t,overlay:i,aspectRatioLocked:a.z.boolean(),border:e,clipDef:r.default({type:"rectangle"}),rotation:a.z.number().default(0),flipX:a.z.boolean().default(!1),flipY:a.z.boolean().default(!1),authoringAspectRatioCropLock:a.z.enum(["freeform","preset","none"])});return{StateMeta:s,BaseItemFullState:l}})),xe=r("BaseItem",["Asset","State"],(({Asset:e},{BaseItemFullState:t,StateMeta:i})=>{const n=e=>a.z.intersection(i,e.partial()),r=e=>a.z.intersection(a.z.object({default:e}),a.z.record(a.z.string(),n(e))),o=n(t);return{State:n,States:r,BaseItem:t=>a.z.object({id:a.z.string(),blockumentId:a.z.string(),clonedFromId:a.z.string().optional(),parentId:a.z.string(),type:a.z.string(),name:a.z.string().max(128),tagName:a.z.enum(["div","figure","figcaption","blockquote"]).default("div"),locked:a.z.boolean().default(!1),authoringVisible:a.z.boolean().default(!0),initialVisible:a.z.boolean().default(!0),initialState:a.z.string().default("default"),states:r(t),assets:a.z.record(a.z.string(),e).default({}),removed:a.z.boolean().default(!1),layer:a.z.string().optional(),aiExperiment:a.z.boolean().optional(),_v:a.z.literal(13)}),BaseItemState:o}})),we=r("Blockument",["ItemRef","Trigger"],(({ItemRef:e},{Trigger:t})=>({Blockument:a.z.object({id:a.z.string(),title:a.z.string().max(255),children:a.z.array(e).min(0).max(1),triggers:a.z.array(t),fonts:a.z.record(a.z.string(),a.z.string()).optional(),layers:a.z.array(a.z.object({id:a.z.string(),name:a.z.string()})),aiExperiment:a.z.boolean().optional(),_v:a.z.literal(13)})}))),Ce=r("BlockumentTransaction",["Blockument","Item"],(({Blockument:e},{Item:t})=>({BlockumentTransaction:a.z.object({blockument:e.optional(),items:a.z.record(a.z.string(),t).optional()})}))),ke=r("Fill",[],(()=>{const e=a.z.object({width:a.z.number(),height:a.z.number(),left:a.z.number(),top:a.z.number()}),t=a.z.object({opacity:a.z.number().min(0).max(1).default(1)}),i=a.z.enum(["color","image"]),n=t.extend({color:a.z.string().optional()}),r=n.extend({type:i,assetId:a.z.string().optional(),crop:e.default({width:1,height:1,left:0,top:0})});return{FillImageCrop:e,FillColorFields:n,Fill:r}})),Le=r("State",["Border","Fill","Padding","ShapeDef","Unit"],(({Border:e},{Fill:t,FillColorFields:i},{Padding:n},{ShapeDef:r},{Unit:o})=>{const s=a.z.object({id:a.z.string(),name:a.z.string().max(128)}),l=s.extend({x:o.default({value:0,unit:"px"}),y:o.default({value:0,unit:"px"}),xOffset:a.z.number().default(0),yOffset:a.z.number().default(0),position:a.z.literal("absolute").default("absolute"),width:o.default({value:100,unit:"%"}),height:o.default({value:100,unit:"%"}),padding:n,fill:t,opacity:a.z.number().min(0).max(1).default(1),overlay:i,aspectRatioLocked:a.z.boolean(),border:e,clipDef:r.default({type:"rectangle"}),rotation:a.z.number().default(0),flipX:a.z.boolean().default(!1),flipY:a.z.boolean().default(!1),authoringAspectRatioCropLock:a.z.enum(["freeform","preset","none"])});return{StateMeta:s,BaseItemFullState:l}})),Se=r("Trigger",[],(()=>{const e=a.z.object({type:a.z.enum(["mediaPause","mediaPlay","mediaEnd"]),targetId:a.z.array(a.z.string())}),t=a.z.object({type:a.z.literal("changeState"),targetId:a.z.tuple([a.z.string()]),targetState:a.z.string().default("default")}),i=a.z.object({type:a.z.literal("changeVisibility"),targetId:a.z.array(a.z.string()),targetVisibility:a.z.boolean()}),n=a.z.object({type:a.z.literal("changeLayer"),layerId:a.z.string().nullable()}),r=a.z.discriminatedUnion("type",[e,t,i,n]);return{TriggerMediaAction:e,TriggerChangeStateAction:t,TriggerChangeVisibilityAction:i,TriggerChangeLayerAction:n,TriggerAction:r,Trigger:a.z.object({id:a.z.string(),event:a.z.enum(["click","hover","mediaPlay","mediaPause","mediaEnd"]),sourceId:a.z.string().optional(),actions:a.z.array(r)})}})),Ie=r("BaseItem",["Asset","State"],(({Asset:e},{BaseItemFullState:t,StateMeta:i})=>{const n=e=>a.z.intersection(i,e.partial()),r=e=>a.z.intersection(a.z.object({default:e}),a.z.record(a.z.string(),n(e))),o=n(t);return{State:n,States:r,BaseItem:t=>a.z.object({id:a.z.string(),blockumentId:a.z.string(),clonedFromId:a.z.string().optional(),parentId:a.z.string(),type:a.z.string(),name:a.z.string().max(128),tagName:a.z.enum(["div","figure","figcaption","blockquote"]).default("div"),locked:a.z.boolean().default(!1),authoringVisible:a.z.boolean().default(!0),initialVisible:a.z.boolean().default(!0),initialState:a.z.string().default("default"),states:r(t),assets:a.z.record(a.z.string(),e).default({}),removed:a.z.boolean().default(!1),layer:a.z.string().optional(),aiExperiment:a.z.boolean().optional(),_v:a.z.literal(14)}),BaseItemState:o}})),Me=r("Blockument",["ItemRef","Trigger"],(({ItemRef:e},{Trigger:t})=>({Blockument:a.z.object({id:a.z.string(),title:a.z.string().max(255),children:a.z.array(e).min(0).max(1),triggers:a.z.array(t),fonts:a.z.record(a.z.string(),a.z.string()).optional(),layers:a.z.array(a.z.object({id:a.z.string(),name:a.z.string()})),aiExperiment:a.z.boolean().optional(),_v:a.z.literal(14)})}))),Te=r("BaseItem",["Asset","State"],(({Asset:e},{BaseItemFullState:t,StateMeta:i})=>{const n=e=>a.z.intersection(i,e.partial()),r=e=>a.z.intersection(a.z.object({default:e}),a.z.record(a.z.string(),n(e))),o=n(t);return{State:n,States:r,BaseItem:t=>a.z.object({id:a.z.string(),blockumentId:a.z.string(),clonedFromId:a.z.string().optional(),parentId:a.z.string(),type:a.z.string(),name:a.z.string().max(128),tagName:a.z.enum(["div","figure","figcaption","blockquote"]).default("div"),locked:a.z.boolean().default(!1),authoringVisible:a.z.boolean().default(!0),initialVisible:a.z.boolean().default(!0),initialState:a.z.string().default("default"),states:r(t),assets:a.z.record(a.z.string(),e).default({}),removed:a.z.boolean().default(!1),layer:a.z.string().optional(),aiExperiment:a.z.boolean().optional(),_v:a.z.literal(15)}),BaseItemState:o}})),Be=r("Blockument",["ItemRef","Trigger"],(({ItemRef:e},{Trigger:t})=>({Blockument:a.z.object({id:a.z.string(),title:a.z.string().max(255),children:a.z.array(e).min(0).max(1),triggers:a.z.array(t),fonts:a.z.record(a.z.string(),a.z.string()).optional(),layers:a.z.array(a.z.object({id:a.z.string(),name:a.z.string()})),aiExperiment:a.z.boolean().optional(),_v:a.z.literal(15)})}))),Je=r("ShapeDef",[],(()=>{const e=a.z.object({type:a.z.string()}),t=e.extend({cornerRounding:a.z.number().min(0)}),i=e.extend({type:a.z.literal("rectangle"),borderRadius:a.z.object({topLeft:a.z.number(),topRight:a.z.number(),bottomRight:a.z.number(),bottomLeft:a.z.number()}).optional()}),n=e.extend({type:a.z.literal("ellipse")}),r=t.extend({type:a.z.literal("star"),sidePairs:a.z.number().min(3),innerRadius:a.z.number().min(.1).max(1)}),o=e.extend({type:a.z.literal("cloud")}),s=t.extend({type:a.z.literal("plus"),stroke:a.z.number().min(.01).max(1)}),l=t.extend({type:a.z.literal("triangle"),topVertex:a.z.number().min(0).max(1).optional()}),c=t.extend({type:a.z.literal("bookmark"),cutoutInset:a.z.number().min(0).max(.8)}),d=t.extend({type:a.z.literal("chevron"),outsideCornerXCoords:a.z.number().min(.7).max(1),insideCenterXCoord:a.z.number().min(0).max(.3)}),p=t.extend({type:a.z.literal("octagon")}),h=t.extend({type:a.z.literal("parallelogram"),shear:a.z.number().min(0).max(1)}),u=t.extend({type:a.z.literal("shield")}),g=t.extend({type:a.z.literal("speechBubble")}),m=t.extend({type:a.z.literal("arrow"),thickness:a.z.number().min(.1).max(.5),headLength:a.z.number().min(.1).max(.9)});return{ShapeDefBase:e,ShapeDefRoundedCorners:t,ShapeRectangle:i,ShapeEllipse:n,ShapeStar:r,ShapeCloud:o,ShapePlus:s,ShapeTriangle:l,ShapeBookmark:c,ShapeChevron:d,ShapeOctagon:p,ShapeParallelogram:h,ShapeShield:u,ShapeSpeechBubble:g,ShapeArrow:m,ShapeDef:a.z.discriminatedUnion("type",[c,d,o,n,p,s,i,r,l,h,u,g,m])}})),Ae=r("Backdrop",["Border","DropShadow","Fill","ShapeDef"],(({Border:e},{DropShadow:t},{FillColor:i,FillImage:n},{ShapeDef:r})=>{const o=a.z.object({border:e,overlay:i}),s=o.extend({dropShadow:t,shapeDef:r}),l=a.z.object({fill:i}),c=a.z.object({fill:n}),d=o.extend(l.shape).extend({}),p=s.extend(l.shape).extend({}),h=s.extend(c.shape).extend({});return{MinimalBackdropData:o,ExtendedBackdropData:s,BackdropColorFillData:l,BackdropImageFillData:c,GroupBackdropStateData:d,ShapeBackdropStateData:p,ImageBackdropStateData:h}})),Ze=r("BaseItem",["Asset","State"],(({Asset:e},{BaseItemFullState:t,StateMeta:i})=>{const n=e=>a.z.intersection(i,e.partial()),r=e=>a.z.intersection(a.z.object({default:e}),a.z.record(a.z.string(),n(e))),o=n(t);return{State:n,States:r,BaseItem:t=>a.z.object({id:a.z.string(),blockumentId:a.z.string(),clonedFromId:a.z.string().optional(),parentId:a.z.string(),type:a.z.string(),name:a.z.string().max(128),tagName:a.z.enum(["div","figure","figcaption","blockquote"]).default("div"),locked:a.z.boolean().default(!1),authoringVisible:a.z.boolean().default(!0),initialVisible:a.z.boolean().default(!0),initialState:a.z.string().default("default"),states:r(t),assets:a.z.record(a.z.string(),e).default({}),removed:a.z.boolean().default(!1),layer:a.z.string().optional(),aiExperiment:a.z.boolean().optional(),_v:a.z.literal(16)}),BaseItemState:o}})),Re=r("Blockument",["ItemRef","Trigger"],(({ItemRef:e},{Trigger:t})=>({Blockument:a.z.object({id:a.z.string(),title:a.z.string().max(255),children:a.z.array(e).min(0).max(1),triggers:a.z.array(t),fonts:a.z.record(a.z.string(),a.z.string()).optional(),layers:a.z.array(a.z.object({id:a.z.string(),name:a.z.string()})),aiExperiment:a.z.boolean().optional(),_v:a.z.literal(16)})}))),He=r("Fill",[],(()=>{const e=a.z.object({width:a.z.number(),height:a.z.number(),left:a.z.number(),top:a.z.number()}),t=a.z.object({opacity:a.z.number().min(0).max(1)});return{FillImageCrop:e,FillColor:t.extend({color:a.z.string().optional()}),FillImage:t.extend({assetId:a.z.string().optional(),crop:e})}})),_e=r("GroupItem",["Backdrop","BaseItem","ItemRef","State"],(({GroupBackdropStateData:e},{BaseItem:t,State:i},{ItemRef:n},{BaseItemFullState:r})=>{const o=r.extend(e.shape).extend({_groupBrand:a.z.never().optional()});return{GroupItemFullState:o,GroupItem:t(o).extend({type:a.z.literal("group"),children:a.z.array(n)}),GroupItemState:i(o)}})),Ve=r("ImageItem",["Backdrop","BaseItem","State"],(({ImageBackdropStateData:e},{BaseItem:t,State:i},{BaseItemFullState:n})=>{const r=n.extend(e.shape).extend({altText:a.z.string()});return{ImageItemFullState:r,ImageItem:t(r).extend({type:a.z.literal("image")}),ImageItemState:i(r)}})),$e=r("Item",["AudioItem","GroupItem","ImageItem","ShapeItem","TextItem","VideoItem"],(({AudioItem:e},{GroupItem:t},{ImageItem:i},{ShapeItem:n},{TextItem:r},{VideoItem:o})=>({Item:a.z.discriminatedUnion("type",[e,t,i,n,r,o])}))),Fe=r("ShapeItem",["Backdrop","BaseItem","TextItem"],(({ShapeBackdropStateData:e},{BaseItem:t,State:i},{TextItemFullState:n})=>{const r=n.extend(e.shape).extend({});return{ShapeItemFullState:r,ShapeItem:t(r).extend({type:a.z.literal("shape")}),ShapeItemState:i(r)}})),Pe=r("State",["Padding","Unit"],(({Padding:e},{Unit:t})=>{const i=a.z.object({id:a.z.string(),name:a.z.string().max(128)}),n=i.extend({x:t.default({value:0,unit:"px"}),y:t.default({value:0,unit:"px"}),xOffset:a.z.number().default(0),yOffset:a.z.number().default(0),position:a.z.literal("absolute").default("absolute"),width:t.default({value:100,unit:"%"}),height:t.default({value:100,unit:"%"}),padding:e,opacity:a.z.number().min(0).max(1).default(1),aspectRatioLocked:a.z.boolean(),rotation:a.z.number().default(0),flipX:a.z.boolean().default(!1),flipY:a.z.boolean().default(!1),authoringAspectRatioCropLock:a.z.enum(["freeform","preset","none"])});return{StateMeta:i,BaseItemFullState:n}})),je=r("BaseItem",["Asset","State"],(({Asset:e},{BaseItemFullState:t,StateMeta:i})=>{const n=e=>a.z.intersection(i,e.partial()),r=e=>a.z.intersection(a.z.object({default:e}),a.z.record(a.z.string(),n(e))),o=n(t);return{State:n,States:r,BaseItem:t=>a.z.object({id:a.z.string(),blockumentId:a.z.string(),clonedFromId:a.z.string().optional(),parentId:a.z.string(),type:a.z.string(),name:a.z.string().max(128),locked:a.z.boolean().default(!1),authoringVisible:a.z.boolean().default(!0),initialVisible:a.z.boolean().default(!0),initialState:a.z.string().default("default"),states:r(t),assets:a.z.record(a.z.string(),e).default({}),removed:a.z.boolean().default(!1),layer:a.z.string().optional(),aiExperiment:a.z.boolean().optional(),_v:a.z.literal(17)}),BaseItemState:o}})),Ee=r("Blockument",["ItemRef","Trigger"],(({ItemRef:e},{Trigger:t})=>({Blockument:a.z.object({id:a.z.string(),title:a.z.string().max(255),children:a.z.array(e).min(0).max(1),triggers:a.z.array(t),fonts:a.z.record(a.z.string(),a.z.string()).optional(),layers:a.z.array(a.z.object({id:a.z.string(),name:a.z.string()})),aiExperiment:a.z.boolean().optional(),_v:a.z.literal(17)})}))),De=r("State",["Unit"],(({Unit:e})=>{const t=a.z.object({id:a.z.string(),name:a.z.string().max(128)}),i=t.extend({x:e.default({value:0,unit:"px"}),y:e.default({value:0,unit:"px"}),xOffset:a.z.number().default(0),yOffset:a.z.number().default(0),width:e.default({value:100,unit:"%"}),height:e.default({value:100,unit:"%"}),opacity:a.z.number().min(0).max(1).default(1),aspectRatioLocked:a.z.boolean(),rotation:a.z.number().default(0),flipX:a.z.boolean().default(!1),flipY:a.z.boolean().default(!1),authoringAspectRatioCropLock:a.z.enum(["freeform","preset","none"])});return{StateMeta:t,BaseItemFullState:i}})),Oe=r("BaseItem",["Asset","State"],(({Asset:e},{BaseItemFullState:t,StateMeta:i})=>{const n=e=>a.z.intersection(i,e.partial()),r=e=>a.z.intersection(a.z.object({default:e}),a.z.record(a.z.string(),n(e))),o=n(t);return{State:n,States:r,BaseItem:t=>a.z.object({id:a.z.string(),blockumentId:a.z.string(),clonedFromId:a.z.string().optional(),parentId:a.z.string(),type:a.z.string(),name:a.z.string().max(128),locked:a.z.boolean().default(!1),authoringVisible:a.z.boolean().default(!0),initialVisible:a.z.boolean().default(!0),initialState:a.z.string().default("default"),states:r(t),assets:a.z.record(a.z.string(),e).default({}),removed:a.z.boolean().default(!1),layer:a.z.string().optional(),aiExperiment:a.z.boolean().optional(),_v:a.z.literal(18)}),BaseItemState:o}})),Ne=r("Blockument",["ItemRef","Trigger"],(({ItemRef:e},{Trigger:t})=>({Blockument:a.z.object({id:a.z.string(),title:a.z.string().max(255),children:a.z.array(e).min(0).max(1),triggers:a.z.array(t),fonts:a.z.record(a.z.string(),a.z.string()).optional(),layers:a.z.array(a.z.object({id:a.z.string(),name:a.z.string()})),aiExperiment:a.z.boolean().optional(),authoringOpened:a.z.boolean(),_v:a.z.literal(18)})}))),qe=r("JSONContentStrict",[],(()=>{const e=a.z.object({type:a.z.literal("textStyle"),attrs:a.z.object({color:a.z.string(),textSize:a.z.number(),fontFamily:a.z.string()})}),t=a.z.object({type:a.z.literal("highlight"),attrs:a.z.object({color:a.z.string(),textSize:a.z.number()})}),i=a.z.object({type:a.z.literal("bold")}),n=a.z.object({type:a.z.literal("italic")}),r=a.z.object({type:a.z.literal("underline")}),o=a.z.object({type:a.z.literal("strike")}),s=a.z.discriminatedUnion("type",[e,t,i,n,r,o]),l=a.z.object({type:a.z.literal("hardBreak"),marks:a.z.never().optional(),content:a.z.never().optional(),text:a.z.never().optional()}),c=a.z.object({type:a.z.literal("text"),marks:a.z.array(s).optional(),content:a.z.never().optional(),text:a.z.string()}),d=a.z.discriminatedUnion("type",[c,l]),p=a.z.object({textAlign:a.z.enum(["left","center","right"]),lineHeight:a.z.number()}),h=p.extend({level:a.z.union([a.z.literal(2),a.z.literal(3),a.z.literal(4),a.z.literal(5),a.z.literal(6)])}),u=a.z.union([a.z.array(d),a.z.array(a.z.lazy((()=>y)))]),g=a.z.object({type:a.z.string(),marks:a.z.never().optional(),content:u.optional(),text:a.z.never().optional()}),m=g.extend({type:a.z.literal("paragraph"),attrs:p}),v=g.extend({type:a.z.literal("heading"),attrs:h}),b=g.extend({type:a.z.literal("listItem"),attrs:a.z.object({color:a.z.string().nullable(),textSize:a.z.number(),fontFamily:a.z.string()}).optional()}),f=g.extend({type:a.z.literal("orderedList"),attrs:a.z.object({start:a.z.number()})}),z=g.extend({type:a.z.literal("bulletList")}),y=a.z.discriminatedUnion("type",[m,v,b,f,z]),x=a.z.object({type:a.z.literal("doc"),content:a.z.array(y)});return{Mark:s,BreakNode:l,TextNode:c,InlineNode:d,BlockNodeContent:u,ParagraphNode:m,HeadingNode:v,ListItemNode:b,OrdererdListNode:f,UnorderedListNode:z,BlockNode:y,DocNode:x}})),Ue=r("BaseItem",["Asset","State"],(({Asset:e},{BaseItemFullState:t,StateMeta:i})=>{const n=e=>a.z.intersection(i,e.partial()),r=e=>a.z.intersection(a.z.object({default:e}),a.z.record(a.z.string(),n(e))),o=n(t);return{State:n,States:r,BaseItem:t=>a.z.object({id:a.z.string(),blockumentId:a.z.string(),clonedFromId:a.z.string().optional(),parentId:a.z.string(),type:a.z.string(),name:a.z.string().max(128),locked:a.z.boolean().default(!1),authoringVisible:a.z.boolean().default(!0),initialVisible:a.z.boolean().default(!0),initialState:a.z.string().default("default"),states:r(t),assets:a.z.record(a.z.string(),e).default({}),removed:a.z.boolean().default(!1),layer:a.z.string().optional(),aiExperiment:a.z.boolean().optional(),_v:a.z.literal(19)}),BaseItemState:o}})),Ge=r("Blockument",["ItemRef","Trigger"],(({ItemRef:e},{Trigger:t})=>({Blockument:a.z.object({id:a.z.string(),title:a.z.string().max(255),children:a.z.array(e).min(0).max(1),triggers:a.z.array(t),fonts:a.z.record(a.z.string(),a.z.string()).optional(),layers:a.z.array(a.z.object({id:a.z.string(),name:a.z.string()})),aiExperiment:a.z.boolean().optional(),authoringOpened:a.z.boolean(),_v:a.z.literal(19)})}))),Ye=r("ShapeItem",["Backdrop","BaseItem","TextItem"],(({ShapeBackdropStateData:e},{BaseItem:t,State:i},{TextItemFullState:n})=>{const r=n.extend(e.shape).extend({altText:a.z.string()});return{ShapeItemFullState:r,ShapeItem:t(r).extend({type:a.z.literal("shape")}),ShapeItemState:i(r)}})),Xe=r("BaseItem",["Asset","State"],(({Asset:e},{BaseItemFullState:t,StateMeta:i})=>{const n=e=>a.z.intersection(i,e.partial()),r=e=>a.z.intersection(a.z.object({default:e}),a.z.record(a.z.string(),n(e))),o=n(t);return{State:n,States:r,BaseItem:t=>a.z.object({id:a.z.string(),blockumentId:a.z.string(),clonedFromId:a.z.string().optional(),parentId:a.z.string(),type:a.z.string(),name:a.z.string().max(128),locked:a.z.boolean().default(!1),authoringVisible:a.z.boolean().default(!0),initialVisible:a.z.boolean().default(!0),initialState:a.z.string().default("default"),states:r(t),assets:a.z.record(a.z.string(),e).default({}),removed:a.z.boolean().default(!1),layer:a.z.string().optional(),aiExperiment:a.z.boolean().optional(),_v:a.z.literal(20)}),BaseItemState:o}})),We=r("Blockument",["ItemRef","Trigger"],(({ItemRef:e},{Trigger:t})=>({Blockument:a.z.object({id:a.z.string(),title:a.z.string().max(255),children:a.z.array(e).min(0).max(1),triggers:a.z.array(t),fonts:a.z.record(a.z.string(),a.z.string()).optional(),layers:a.z.array(a.z.object({id:a.z.string(),name:a.z.string()})),aiExperiment:a.z.boolean().optional(),authoringOpened:a.z.boolean(),_v:a.z.literal(20)})}))),Ke=r("AudioItem",["BaseItem","State"],(({BaseItem:e,State:t},{BaseItemFullState:i})=>{const n=a.z.object({default:a.z.string()}),r=a.z.object({text:a.z.string(),model:a.z.string(),stability:a.z.number().optional(),similarity:a.z.number().optional(),styleExaggeration:a.z.number().optional(),speakerBoost:a.z.boolean().optional(),voiceName:a.z.string(),voiceSource:a.z.enum(["my_voices","voice_library"]),aiScriptWriterUsed:a.z.boolean().optional(),advancedSettingsModified:a.z.boolean().optional()}),o=i.extend({audioSources:n}),s=e(o).extend({type:a.z.literal("audio"),aiAudioSettings:r.optional()});return{AudioAssets:n,AiAudioSettings:r,AudioItemFullState:o,AudioItem:s,AudioItemState:t(o)}})),Qe=r("BaseItem",["Asset","State"],(({Asset:e},{BaseItemFullState:t,StateMeta:i})=>{const n=e=>a.z.intersection(i,e.partial()),r=e=>a.z.intersection(a.z.object({default:e}),a.z.record(a.z.string(),n(e))),o=n(t);return{State:n,States:r,BaseItem:t=>a.z.object({id:a.z.string(),blockumentId:a.z.string(),clonedFromId:a.z.string().optional(),parentId:a.z.string(),type:a.z.string(),name:a.z.string().max(128),locked:a.z.boolean().default(!1),authoringVisible:a.z.boolean().default(!0),initialVisible:a.z.boolean().default(!0),initialState:a.z.string().default("default"),states:r(t),assets:a.z.record(a.z.string(),e).default({}),removed:a.z.boolean().default(!1),layer:a.z.string().optional(),aiExperiment:a.z.boolean().optional(),_v:a.z.literal(21)}),BaseItemState:o}})),et=r("Blockument",["ItemRef","Trigger"],(({ItemRef:e},{Trigger:t})=>({Blockument:a.z.object({id:a.z.string(),title:a.z.string().max(255),children:a.z.array(e).min(0).max(1),triggers:a.z.array(t),fonts:a.z.record(a.z.string(),a.z.string()).optional(),layers:a.z.array(a.z.object({id:a.z.string(),name:a.z.string()})),aiExperiment:a.z.boolean().optional(),authoringOpened:a.z.boolean(),_v:a.z.literal(21)})}))),tt=r("JSONContentStrict",[],(()=>{const e=a.z.object({type:a.z.literal("textStyle"),attrs:a.z.object({color:a.z.string(),textSize:a.z.number(),fontFamily:a.z.string()})}),t=a.z.object({type:a.z.literal("highlight"),attrs:a.z.object({color:a.z.string(),textSize:a.z.number()})}),i=a.z.object({type:a.z.literal("bold")}),n=a.z.object({type:a.z.literal("italic")}),r=a.z.object({type:a.z.literal("underline")}),o=a.z.object({type:a.z.literal("strike")}),s=a.z.discriminatedUnion("type",[e,t,i,n,r,o]),l=a.z.object({type:a.z.literal("hardBreak"),marks:a.z.never().optional(),content:a.z.never().optional(),text:a.z.never().optional()}),c=a.z.object({type:a.z.literal("text"),marks:a.z.array(s).optional(),content:a.z.never().optional(),text:a.z.string()}),d=a.z.discriminatedUnion("type",[c,l]),p=a.z.object({textAlign:a.z.enum(["left","center","right"]),lineHeight:a.z.number(),spaceAfter:a.z.number().optional()}),h=p.extend({level:a.z.union([a.z.literal(2),a.z.literal(3),a.z.literal(4),a.z.literal(5),a.z.literal(6)])}),u=a.z.union([a.z.array(d),a.z.array(a.z.lazy((()=>y)))]),g=a.z.object({type:a.z.string(),marks:a.z.never().optional(),content:u.optional(),text:a.z.never().optional()}),m=g.extend({type:a.z.literal("paragraph"),attrs:p}),v=g.extend({type:a.z.literal("heading"),attrs:h}),b=g.extend({type:a.z.literal("listItem"),attrs:a.z.object({color:a.z.string().nullable(),textSize:a.z.number(),fontFamily:a.z.string()}).optional()}),f=g.extend({type:a.z.literal("orderedList"),attrs:a.z.object({start:a.z.number()})}),z=g.extend({type:a.z.literal("bulletList")}),y=a.z.discriminatedUnion("type",[m,v,b,f,z]),x=a.z.object({type:a.z.literal("doc"),content:a.z.array(y)});return{Mark:s,BreakNode:l,TextNode:c,InlineNode:d,BlockNodeContent:u,ParagraphNode:m,HeadingNode:v,ListItemNode:b,OrdererdListNode:f,UnorderedListNode:z,BlockNode:y,DocNode:x}})),it=o([s,l,c,d,p,h]),at=o([u,g,m,v,b,f,z,y,x,w,C,k,L,S,I,M,T,B,J,A,Z,R,H,_]),nt=o([u,V,$,F,v,b,f,z,y,x,w,C,P,S,I,M,T,B,J,A,Z,R,H,_]),rt=o([u,V,j,E,v,b,f,z,y,x,w,C,P,S,I,M,T,B,D,O,N,Z,R,H,_]),ot=o([u,V,q,U,v,b,f,z,y,x,w,C,P,S,I,M,T,B,G,O,Y,Z,R,H,_]),st=o([u,V,X,W,v,b,f,z,y,x,w,C,P,S,I,M,T,B,K,O,Y,Q,R,H,_]),lt=o([u,V,ee,te,v,b,f,z,y,x,w,C,P,S,I,M,T,B,K,O,Y,Q,R,H,_]),ct=o([u,V,ie,ae,v,b,f,z,y,x,w,C,P,S,I,M,T,B,K,O,Y,Q,R,H,_]),dt=o([u,V,ne,re,v,b,f,z,y,x,w,oe,P,se,I,M,T,B,K,O,Y,Q,R,H,_]),pt=o([u,V,le,ce,v,de,b,f,z,y,x,w,oe,P,se,I,M,T,B,K,pe,Y,Q,R,H,_]),ht=o([u,V,he,ue,v,de,b,f,z,y,x,w,oe,P,se,I,M,T,B,K,pe,Y,Q,ge,H,_]),ut=o([u,V,me,ve,v,de,be,fe,oe,P,se,I,M,ze,T,B,K,pe,ye,Q,ge,H,_]),gt=o([u,V,xe,we,Ce,v,de,ke,oe,P,se,I,M,T,B,K,pe,Le,Q,Se,H,_]),mt=o([u,V,Ie,Me,Ce,v,de,ke,oe,P,se,I,M,T,B,K,pe,Le,Q,Se,H,_]),vt=o([u,V,Te,Be,Ce,v,de,ke,oe,P,se,I,M,T,B,Je,pe,Le,Q,Se,H,_]),bt=o([u,V,Ae,Ze,Re,Ce,v,de,He,_e,Ve,$e,se,I,M,T,B,Je,Fe,Pe,Q,Se,H,_]),ft=o([u,V,Ae,je,Ee,Ce,v,de,He,_e,Ve,$e,se,I,M,B,Je,Fe,De,Q,Se,H,_]),zt=o([u,V,Ae,Oe,Ne,Ce,v,de,He,_e,Ve,$e,se,I,qe,M,B,Je,Fe,De,Q,Se,H,_]),yt=o([u,V,Ae,Ue,Ge,Ce,v,de,He,_e,Ve,$e,se,I,qe,M,B,Je,Ye,De,Q,Se,H,_]),xt=o([u,V,Ae,Xe,We,Ce,v,de,He,_e,Ve,$e,se,I,qe,M,B,Je,Ye,De,Q,Se,H,_]),wt=o([u,Ke,Ae,Qe,et,Ce,v,de,He,_e,Ve,$e,se,I,tt,M,B,Je,Ye,De,Q,Se,H,_]),Ct=o([u,Ke,Ae,Qe,et,Ce,v,de,He,_e,Ve,$e,se,I,tt,M,B,Je,Ye,De,Q,Se,H,_])}}]);