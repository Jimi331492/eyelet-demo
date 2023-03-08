import{_ as t,p as c,f as h,h as p,M as s,q as n,S as e,P as a}from"./vue-router.esm-bundler-8e74c6a8.js";const o={components:{}},i={class:"varlet-site-doc"},r=s("h1",null,"海拔效果",-1),j=s("div",{class:"card"},[s("h3",null,"介绍"),s("p",null,[a("组件库提供了基于 "),s("code",null,"Material"),a(" 规范的阴影海拔效果，用来表现元素的立体感。")])],-1),d={class:"card"},m=s("h3",null,"引入样式",-1),_=s("pre",{class:"hljs"},[s("code",null,[s("link",{class:"hljs-style",rel:"stylesheet",href:"//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css"}),s("span",{class:"hljs-keyword"},"import"),a(),s("span",{class:"hljs-string"},"'@varlet/ui/es/styles/elevation.css'"),a(`
`)])],-1),u={class:"card"},g=s("h3",null,"基本使用",-1),v=s("p",null,[a("阴影程度划分为 "),s("code",null,"0-24"),a(" 个等级，等级越高海拔越高。")],-1),f=s("pre",{class:"hljs"},[s("code",null,[s("link",{class:"hljs-style",rel:"stylesheet",href:"//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css"}),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-space"),a(),s("span",{class:"hljs-attr"},"class"),a("="),s("span",{class:"hljs-string"},'"elevation-example-list"'),a(),s("span",{class:"hljs-attr"},":size"),a("="),s("span",{class:"hljs-string"},'"[16, 16]"'),a(">")]),a(`
    `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"div"),a(`
      `),s("span",{class:"hljs-attr"},"class"),a("="),s("span",{class:"hljs-string"},'"elevation-example-item"'),a(`
      `),s("span",{class:"hljs-attr"},":class"),a("="),s("span",{class:"hljs-string"},'"`var-elevation--${e - 1}`"'),a(`
      `),s("span",{class:"hljs-attr"},"v-for"),a("="),s("span",{class:"hljs-string"},'"e in 25"'),a(`
      `),s("span",{class:"hljs-attr"},":key"),a("="),s("span",{class:"hljs-string"},'"e"'),a(`
    >`)]),a(`
      {{ e - 1 }}
    `),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"div"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"var-space"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`

`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"style"),a(">")]),s("span",{class:"css"},[a(`
`),s("span",{class:"hljs-selector-class"},".elevation-example-list"),a(` {
  `),s("span",{class:"hljs-attribute"},"margin-top"),a(": "),s("span",{class:"hljs-number"},"8px"),a(),s("span",{class:"hljs-meta"},"!important"),a(`;
}

`),s("span",{class:"hljs-selector-class"},".elevation-example-item"),a(` {
  `),s("span",{class:"hljs-attribute"},"display"),a(`: flex;
  `),s("span",{class:"hljs-attribute"},"justify-content"),a(`: center;
  `),s("span",{class:"hljs-attribute"},"align-items"),a(`: center;
  `),s("span",{class:"hljs-attribute"},"width"),a(": "),s("span",{class:"hljs-number"},"25vw"),a(`;
  `),s("span",{class:"hljs-attribute"},"height"),a(": "),s("span",{class:"hljs-number"},"25vw"),a(`;
}
`)]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"style"),a(">")]),a(`
`)])],-1);function x(y,b,k,w,$,N){const l=c("var-site-code-example");return h(),p("div",i,[r,j,s("div",d,[m,n(l,{"playground-ignore":""},{default:e(()=>[_]),_:1})]),s("div",u,[g,v,n(l,null,{default:e(()=>[f]),_:1})])])}const C=t(o,[["render",x]]);export{C as default};
