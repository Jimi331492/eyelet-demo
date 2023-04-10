import{d as U,a as T,w as p,az as X,Z as v,n as _,_ as P,f as g,i as b,N as y,R as E,aA as x,r as h,t as ee,u as ne,v as te,x as oe,z as se,b as Z,o as ae,p as j,D as ie,E as le,h as re,M as I,j as q,O as w,P as M,Q as G,q as O,S as N,m as A,G as ce,T as de,V as ue,W as fe,Y as pe,C as me}from"./vue-router.esm-bundler-952984cf.js";import{d as u,a as B,p as L,c,u as ye,m as ve}from"./components-40cc0dae.js";import{a as ge}from"./elements-d53220cc.js";const k={name:{type:String},size:{type:Number},color:{type:String},namespace:{type:String,default:"zm-icon"},transition:{type:[Number,String],default:0},onClick:u()},{n:he,classes:ze}=B("icon"),Ce=U({name:"ZmIcon",props:k,setup(e){const n=T(""),t=T(!1);return p(()=>e.name,async(s,a)=>{const{transition:i}=e;if(a==null||v(i)===0){n.value=s;return}t.value=!0,await _(),setTimeout(()=>{a!=null&&(n.value=s),t.value=!1},v(i))},{immediate:!0}),{n:he,classes:ze,nextName:n,shrinking:t,isURL:X,toNumber:v,px2vw:ge}}});function ke(e,n,t,o,s,a){return g(),b(x(e.isURL(e.name)?"img":"i"),{class:y(e.classes(e.n(),[e.namespace!==e.n(),e.namespace],`${e.namespace}--set`,[e.isURL(e.name),e.n("image"),`${e.namespace}-${e.nextName}`],[e.shrinking,e.n("--shrinking")])),style:E({color:e.color,transition:`transform ${e.toNumber(e.transition)}ms`,width:e.isURL(e.name)?e.px2vw(e.size):null,height:e.isURL(e.name)?e.px2vw(e.size):null,fontSize:e.px2vw(e.size)}),src:e.isURL(e.name)?e.nextName:null,onClick:e.onClick},null,8,["class","style","src","onClick"])}const $=P(Ce,[["render",ke]]);$.install=function(e){e.component($.name,$)};function $e(e){return["top","center","bottom"].includes(e)}function Te(e){return D.includes(e)}const Y={type:{type:String,validator:Te},position:{type:String,default:"bottom",validator:$e},content:{type:String},contentClass:{type:String},duration:{type:Number,default:2e3},vertical:{type:Boolean,default:!1},loadingName:{...L(k,"name"),default:"https://canyan.kp-static.com/mini/top-loading.gif"},loadingSize:{...L(k,"size"),default:40},loadingColor:{...L(k,"color"),default:"currentColor"},lockScroll:{type:Boolean,default:!1},show:{type:Boolean,default:!1},teleport:{type:String,default:"body"},forbidClick:{type:Boolean,default:!1},onOpen:u(),onOpened:u(),onClose:u(),onClosed:u(),"onUpdate:show":u(),_update:{type:String}},F={locks:{},zIndex:2e3,touchmoveForbid:!0};h(F);const d=h(F);function be(e,n){const t=T(d.zIndex);return p(e,o=>{o&&(d.zIndex+=n,t.value=d.zIndex)},{immediate:!0}),{zIndex:t}}function H(){Object.keys(d.locks).length<=0?document.body.classList.remove("var--lock"):document.body.classList.add("var--lock")}function z(e){d.locks[e]=1,H()}function C(e){delete d.locks[e],H()}function we(e,n){const{uid:t}=se();n&&p(n,o=>{o===!1?C(t):o===!0&&e()===!0&&z(t)}),p(e,o=>{n&&n()===!1||(o===!0?z(t):C(t))}),ee(()=>{n&&n()===!1||e()===!0&&z(t)}),ne(()=>{n&&n()===!1||e()===!0&&C(t)}),te(()=>{n&&n()===!1||e()===!0&&z(t)}),oe(()=>{n&&n()===!1||e()===!0&&C(t)})}const{n:Oe,classes:Ie}=B("toast"),Ne={success:"select",warning:"select",info:"select",error:"select",loading:""},Le=U({name:"ZmToastCore",components:{ZmIcon:$},props:Y,setup(e){const n=T(null),{zIndex:t}=be(()=>e.show,1);we(()=>e.show,()=>e.lockScroll);const o=Z(()=>e.type==="loading"||e.forbidClick),s=Z(()=>e.type?Ne[e.type]:""),a=()=>{n.value=setTimeout(()=>{e.type!=="loading"&&c(e["onUpdate:show"],!1)},e.duration)};return p(()=>e.show,i=>{i?(c(e.onOpen),a()):i===!1&&(clearTimeout(n.value),c(e.onClose))}),p(()=>e._update,()=>{clearTimeout(n.value),a()}),ae(()=>{e.show&&(c(e.onOpen),a())}),{TOAST_TYPE:D,n:Oe,classes:Ie,zIndex:t,iconName:s,isForbidClick:o}}});function Ee(e,n,t,o,s,a){const i=j("zm-icon");return ie((g(),re("div",{class:y(e.n()),style:E({pointerEvents:e.isForbidClick?"auto":"none",zIndex:e.zIndex})},[I("div",{class:y(e.classes(e.n("wrapper"),e.n(`wrapper-${e.position}`),[e.vertical,e.n("vertical")],[e.type&&e.TOAST_TYPE.includes(e.type),e.n(`wrapper-${e.type}`)])),style:E({zIndex:e.zIndex})},[I("div",{class:y([e.n("content"),e.contentClass])},[I("div",{class:y(e.n("content--action"))},[e.iconName?(g(),b(i,{key:0,name:e.iconName,size:12},null,8,["name"])):q("",!0),e.type==="loading"?(g(),b(i,{key:1,name:e.loadingName,size:e.loadingSize},null,8,["name","size"])):q("",!0),w(e.$slots,"action")],2),w(e.$slots,"default",{},()=>[M(G(e.content),1)])],2)],6)],6)),[[le,e.show]])}const Q=P(Le,[["render",Ee]]),{n:Ae}=B("toast"),Se=U({name:"ZmToast",components:{ZmToastCore:Q},props:Y,setup(){const{disabled:e}=ye();return{n:Ae,disabled:e}}});function Ue(e,n,t,o,s,a){const i=j("zm-toast-core");return g(),b(de,{to:e.teleport,disabled:e.disabled},[O(ce,{name:`${e.n()}-fade`,onAfterEnter:e.onOpened,onAfterLeave:e.onClosed},{default:N(()=>[O(i,A(e.$props,{class:e.n("transition")}),{action:N(()=>[w(e.$slots,"action")]),default:N(()=>[w(e.$slots,"default",{},()=>[M(G(e.content),1)])]),_:3},16,["class"])]),_:3},8,["name","onAfterEnter","onAfterLeave"])],8,["to","disabled"])}const f=P(Se,[["render",Ue]]);function Pe(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!me(e)}const D=["loading","success","warning","info","error"];let R=0,S=!1,W,m=!1;const J={type:void 0,content:"",position:"bottom",duration:2e3,vertical:!1,contentClass:void 0,lockScroll:!1,teleport:"body",forbidClick:!1,onOpen:()=>{},onOpened:()=>{},onClose:()=>{},onClosed:()=>{}};let l=h([]),V=J;const Be={name:"zm-toast-fade",tag:"div",class:"zm-transition-group"},De={setup(){return()=>{const e=l.map(({id:n,reactiveToastOptions:t,_update:o})=>{const s=document.querySelector(".zm-transition-group");t.forbidClick||t.type==="loading"?s.classList.add("zm-pointer-auto"):s.classList.remove("zm-pointer-auto"),m&&(t.position="top");const i={position:m?"relative":"absolute",...Me(t.position)};return O(Q,A(t,{key:n,style:i,"data-id":n,_update:o,show:t.show,"onUpdate:show":K=>t.show=K}),null)});return O(pe,A(Be,{style:{zIndex:d.zIndex},onAfterEnter:Ve,onAfterLeave:Ze}),Pe(e)?e:{default:()=>[e]})}}},r=function(e){const n=Re(e),t=h({...V,...n});t.show=!0,S||(S=!0,W=ve(De).unmountInstance);const{length:o}=l,s={id:R++,reactiveToastOptions:t};if(o===0||m)qe(s);else{const a=`update-${R}`;je(t,a)}return{clear(){!m&&l.length?l[0].reactiveToastOptions.show=!1:t.show=!1}}};D.forEach(e=>{r[e]=n=>(ue(n)?n.type=e:n={content:n,type:e},r(n))});r.install=function(e){e.component(f.name,f)};r.allowMultiple=function(e=!1){e!==m&&(l.forEach(n=>{n.reactiveToastOptions.show=!1}),m=e)};r.clear=function(){l.forEach(e=>{e.reactiveToastOptions.show=!1})};r.setDefaultOptions=function(e){V=e};r.resetDefaultOptions=function(){V=J};r.Component=f;function Ve(e){const n=e.getAttribute("data-id"),t=l.find(o=>o.id===v(n));t&&c(t.reactiveToastOptions.onOpened)}function Ze(e){e.parentElement&&e.parentElement.classList.remove("zm-pointer-auto");const n=e.getAttribute("data-id"),t=l.find(s=>s.id===v(n));t&&(t.animationEnd=!0,c(t.reactiveToastOptions.onClosed)),l.every(s=>s.animationEnd)&&(c(W),l=h([]),S=!1)}function qe(e){l.push(e)}function Re(e={}){return fe(e)?{content:e}:e}function je(e,n){const[t]=l;t.reactiveToastOptions={...t.reactiveToastOptions,...e},t._update=n}function Me(e="top"){return e==="bottom"?{[e]:"5%"}:{top:e==="top"?"5%":"45%"}}f.install=function(e){e.component(f.name,f)};const He=r;export{$ as I,He as T};