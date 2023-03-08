;(function(){var style=document.createElement('style');style.type='text/css';style.rel='stylesheet';style.appendChild(document.createTextNode(`.zm-button{display:flex;padding:10px;background:#3a7afe;color:#fff;outline:none;border:none;border-radius:2px;cursor:pointer}.zm-button:active{opacity:.9}@keyframes ani-slide-bottom-in{0%{transform:translateY(100%)}to{transform:translateY(0)}}@keyframes ani-opacity-in{0%{opacity:0}to{opacity:1}}@keyframes ani-opacity-out{0%{opacity:1}to{opacity:0}}@keyframes ani-slide-bottom-out{0%{transform:translateY(0)}to{transform:translateY(100%)}}.zm-dialog{position:fixed;top:0;left:0;z-index:999;width:100vw;height:100vh}.zm-dialog__mask{width:100%;height:100%;background:rgba(0,0,0,.3);animation:ani-opacity-in .3s cubic-bezier(.165,.84,.44,1) both}.zm-dialog__mask.remove{animation:ani-opacity-out .3s cubic-bezier(.165,.84,.44,1) both}.zm-dialog__normal-body{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);overflow:scroll;border-radius:12px;background-color:#fff;color:#000;animation:ani-opacity-in .3s cubic-bezier(.165,.84,.44,1) both}.zm-dialog__normal-body.remove{animation:ani-opacity-out .3s cubic-bezier(.165,.84,.44,1) both}.zm-dialog__normal-body .close{position:absolute;top:0;right:0;display:flex;justify-content:center;align-items:center;margin:8px 8px 0 0;width:40px;height:40px}.zm-dialog__normal-body .close .icon-close{font-size:12px}.zm-dialog__normal-body--content{padding:24px 16px 16px;min-width:284px;max-width:359px;min-height:138px;box-sizing:border-box}.zm-dialog__normal-body--content.no-padding{padding:0}.zm-dialog__bottom-body{position:absolute;bottom:0;left:0;overflow:scroll;width:100%;border-radius:12px 12px 0 0;background-color:#fff;color:#000;animation:ani-slide-bottom-in .3s cubic-bezier(.25,.46,.45,.94) both}.zm-dialog__bottom-body.remove{animation:ani-slide-bottom-out .3s cubic-bezier(.25,.46,.45,.94) both}.zm-dialog__bottom-body .close{position:absolute;top:0;right:0;display:flex;justify-content:center;align-items:center;margin:8px 8px 0 0;width:40px;height:40px}.zm-dialog__bottom-body .close .icon-close{font-size:12px}.zm-dialog__bottom-body--content{box-sizing:border-box;padding:16px;min-height:116px;max-height:calc(100vh - var(--nav-bar-height))}.zm-dialog__bottom-body--content.no-padding{padding-top:0;padding-right:0;padding-left:0}.iphonex{padding-bottom:env(safe-area-inset-bottom)}
`));var head=document.querySelector('head');head.appendChild(style)})();(function(n,o){typeof exports=="object"&&typeof module<"u"?o(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],o):(n=typeof globalThis<"u"?globalThis:n||self,o(n.Varlet={},n.Vue))})(this,function(n,o){"use strict";const l=o.defineComponent({name:"ZmButton",props:{color:{type:String},onClick:{type:Function}},setup(e,a){var{slots:i}=a,r=s=>e.onClick==null?void 0:e.onClick(s);return()=>{var{color:s}=e;return o.createVNode("button",{class:"zm-button",style:{background:s},onClick:r},[i.default==null?void 0:i.default()])}}});l.install=function(e){e.component(l.name,l)};var f=l;function p(e){return{type:[Function,Array],default:e}}function C(e){return["center","bottom"].includes(e)}var g={mode:{type:String,require:!0,default:"center",validator:C},className:{type:String,default:""},visible:{type:Boolean,require:!0,default:!1},mask:{type:Boolean,default:!0},maskClosable:{type:Boolean,default:!0},closable:{type:Boolean,default:!1},noPadding:{type:Boolean,default:!1},onClose:p()},k=e=>(o.pushScopeId(""),e=e(),o.popScopeId(),e),y={key:0,class:"zm-dialog"},b=k(()=>o.createElementVNode("span",{class:"icomoon icon-close"},null,-1)),B=[b];function h(e,a){return e._visible?(o.openBlock(),o.createElementBlock("div",y,[e.mask?(o.openBlock(),o.createElementBlock("div",{key:0,class:o.normalizeClass(["zm-dialog__mask",{remove:e.hideAnimation}]),onClick:a[0]||(a[0]=function(){return e.handleClose&&e.handleClose(...arguments)})},null,2)):o.createCommentVNode("v-if",!0),o.createElementVNode("div",{class:o.normalizeClass([e.classnames[e.mode]||"zm-dialog__normal-body",{remove:e.hideAnimation}])},[e.closable?(o.openBlock(),o.createElementBlock("div",{key:0,class:"close",onClick:a[1]||(a[1]=function(){return e.handleClose&&e.handleClose(...arguments)})},B)):o.createCommentVNode("v-if",!0),e.mode==="bottom"?(o.openBlock(),o.createElementBlock("div",{key:1,class:o.normalizeClass(["zm-dialog__bottom-body--content",e.noPadding&&"no-padding","iphonex",e.className?e.className.split(" "):[]])},[o.renderSlot(e.$slots,"default")],2)):e.mode==="center"?(o.openBlock(),o.createElementBlock("div",{key:2,class:o.normalizeClass(["zm-dialog__normal-body--content",e.noPadding&&"no-padding",e.className?e.className.split(" "):[]])},[o.renderSlot(e.$slots,"default")],2)):o.createCommentVNode("v-if",!0)],2)])):o.createCommentVNode("v-if",!0)}var m=o.defineComponent({name:"ZmDialog",props:g,setup(e){var a={center:"zm-dialog__normal-body",bottom:"zm-dialog__bottom-body"},i=o.ref(!1),r=o.ref(!1),s=()=>{console.log("handleClose"),r.value=!0,setTimeout(()=>{r.value=!1,i.value=!1,e.onClose&&e.onClose()},300)},z=d=>{console.log(d,"visible"),i.value!==d&&(d?i.value=!0:s())};return o.watch(()=>e.visible,z),{_visible:i,hideAnimation:r,classnames:a,handleClose:s}}});m.render=h;const t=m;t.install=function(e){e.component(t.name,t)};var v=t;const N="",S="",V="",c="0.0.3";function u(e){l.install&&e.use(l),t.install&&e.use(t)}const _={version:c,install:u,Button:l,Dialog:t};n.Button=l,n.Dialog=t,n._ButtonComponent=f,n._DialogComponent=v,n.default=_,n.install=u,n.version=c,Object.defineProperties(n,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});