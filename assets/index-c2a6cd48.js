import{f as p}from"./elements-d53220cc.js";import{c as g,a as k}from"./components-40cc0dae.js";import{d as y,au as b,a as S,u as T,a1 as V,f as P,h as x,q as r,S as n,ao as c,F as C,P as u,as as i}from"./vue-router.esm-bundler-952984cf.js";import"./index-d548bc30.js";import{d as E}from"./index-b6b06f70.js";import{Z as d}from"./Button-3fb06f7f.js";const w={styleVars:{type:Object,default:()=>({})},tag:{type:String,default:"div"}},{n:B}=k("style-provider"),o=y({name:"ZmStyleProvider",props:w,setup(e,{slots:s}){return()=>b(e.tag,{class:B(),style:p(e.styleVars)},g(s.default))}});const m=[];function l(e){m.forEach(t=>document.documentElement.style.removeProperty(t)),m.length=0;const s=p(e??{});Object.entries(s).forEach(([t,a])=>{document.documentElement.style.setProperty(t,a),m.push(t)})}l.Component=o;o.install=function(e){e.component(o.name,o)};l.install=function(e){e.component(o.name,o)};const Z=u("组件调用"),N=u(" 切换样式变量 "),j=u("函数调用"),F=u("切换根节点样式变量"),D=y({setup(e){const s=l.Component,t=S({});let a=null;const f={"--rate-primary-color":"var(--color-success)","--button-primary-color":"var(--color-success)","--switch-handle-active-background":"var(--color-success)","--switch-track-active-background":"var(--color-success)"},_={"--color-primary":"#3f51b5"};function h(){t.value=t.value?null:f}function v(){a=a?null:_,l(a)}return T(()=>{l(V()==="darkTheme"?E:null)}),(O,q)=>(P(),x(C,null,[r(c(i),null,{default:n(()=>[Z]),_:1}),r(c(s),{"style-vars":t.value},{default:n(()=>[r(c(d),{style:{"margin-top":"10px"},type:"primary",block:"",onClick:h},{default:n(()=>[N]),_:1})]),_:1},8,["style-vars"]),r(c(i),null,{default:n(()=>[j]),_:1}),r(c(d),{type:"primary",block:"",onClick:v},{default:n(()=>[F]),_:1})],64))}});export{D as default};
