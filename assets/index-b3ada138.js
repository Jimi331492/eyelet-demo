import{ax as g,X as C,W as F,d as A,q as y,ay as B,F as E}from"./vue-router.esm-bundler-952984cf.js";import{c as W,a as q}from"./components-40cc0dae.js";import{p as h,t as d}from"./elements-d53220cc.js";const w=e=>["mini","small","normal","large"].includes(e),z=e=>w(e)||g(e)||C(e)||F(e),D=e=>["start","end","center","space-around","space-between","flex-start","flex-end"].includes(e),M=e=>["stretch","center","start","end","baseline","flex-start","flex-end"].includes(e),U={size:{type:[String,Number,Array],default:"normal",validator:z},wrap:{type:Boolean,default:!0},direction:{type:String,default:"row"},justify:{type:String,default:"flex-start",validator:D},align:{type:String,validator:M},inline:{type:Boolean,default:!1}};function t(e){return`calc(${e} / 2)`}function X(e,s,u){const{direction:a,justify:r,index:l,lastIndex:c}=u;let n="0";return a==="row"&&(["flex-start","center","flex-end","start","end"].includes(r)?l!==c?n=`${t(e)} ${s} ${t(e)} 0`:n=`${t(e)} 0`:r==="space-around"?n=`${t(e)} ${t(s)}`:r==="space-between"&&(l===0?n=`${t(e)} ${t(s)} ${t(e)} 0`:l===c?n=`${t(e)} 0 ${t(e)} ${t(s)}`:n=`${t(e)} ${t(s)}`)),a==="column"&&l!==c&&(n=`0 0 ${e} 0`),n}const{n:m,classes:Z}=q("space"),$=A({name:"ZmSpace",props:U,setup(e,{slots:s}){const u=(a,r)=>r?[`var(--space-size-${a}-y)`,`var(--space-size-${a}-x)`]:g(a)?a.map(d):[d(a),d(a)];return()=>{const{inline:a,justify:r,align:l,wrap:c,direction:n,size:x}=e;let f=W(s.default)??[];const b=w(x),[S,j]=u(x,b);f=(p=>{const o=[];return p.forEach(i=>{if(i.type!==B){if(i.type===E&&g(i.children)){i.children.forEach(v=>{o.push(v)});return}o.push(i)}}),o})(f);const V=f.length-1,I=f.map((p,o)=>{const i=X(S,j,{direction:n,justify:r,index:o,lastIndex:V});return y("div",{style:{margin:i}},[p])});return y("div",{class:Z(m(),m("$--box"),[a,m("--inline")]),style:{flexDirection:n,justifyContent:h(r),alignItems:h(l),flexWrap:c?"wrap":"nowrap",margin:n==="row"?`calc(-1 * ${S} / 2) 0`:void 0}},[I])}}});$.install=function(e){e.component($.name,$)};export{$ as S};