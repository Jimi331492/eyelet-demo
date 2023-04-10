import{_ as c,p as e,f as o,h as d,M as s,q as l,S as n,P as a,aq as h}from"./vue-router.esm-bundler-952984cf.js";const p={components:{}},i={class:"varlet-site-doc"},r=s("h1",null,"图标",-1),j=s("div",{class:"card"},[s("h3",null,"介绍"),s("p",null,[a("基于字体的图标库，也支持网络图片。字体图标来自 "),s("a",{href:"https://www.iconfont.cn/manage/index?manage_type=myprojects&projectId=3837212"},"IconFont")])],-1),m={class:"card"},_=s("h3",null,"图标尺寸",-1),g=s("p",null,"32px(xs)、40px(sm)、48px(md)、64px(lg)、80px(xl)，其中32(xs)和48(md)是最常用尺寸，在设计图上遇见没有边框的图自动往这两个尺寸上靠，选稍大那个（图标宽26选32，宽34选48）",-1),u=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
 `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"zm-icon"),a(),s("span",{class:"hljs-attr"},"name"),a("="),s("span",{class:"hljs-string"},'"zm-logo"'),a(),s("span",{class:"hljs-attr"},":size"),a("="),s("span",{class:"hljs-string"},'"32"'),a("/>")]),a(`
 `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"zm-icon"),a(),s("span",{class:"hljs-attr"},"name"),a("="),s("span",{class:"hljs-string"},'"zm-logo"'),a(),s("span",{class:"hljs-attr"},":size"),a("="),s("span",{class:"hljs-string"},'"48"'),a(" />")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
`)])],-1),f={class:"card"},v=s("h3",null,"图标颜色",-1),z=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
 `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"zm-icon"),a(),s("span",{class:"hljs-attr"},":size"),a("="),s("span",{class:"hljs-string"},'"48"'),a(),s("span",{class:"hljs-attr"},"name"),a("="),s("span",{class:"hljs-string"},'"zm-logo"'),a(" />")]),a(`
 `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"zm-icon"),a(),s("span",{class:"hljs-attr"},":size"),a("="),s("span",{class:"hljs-string"},'"48"'),a(),s("span",{class:"hljs-attr"},"name"),a("="),s("span",{class:"hljs-string"},'"zm-logo"'),a(),s("span",{class:"hljs-attr"},"color"),a("="),s("span",{class:"hljs-string"},'"#2979ff"'),a(" />")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
`)])],-1),y={class:"card"},x=s("h3",null,"使用图片",-1),b=s("p",null,[a("当传入的 "),s("code",null,"name"),a(" 是一个网络地址时,将会使用 "),s("code",null,"img"),a(" 标签以 "),s("code",null,"cover"),a(" 模式显示。"),s("code",null,"size"),a(" 为图片的宽高。")],-1),k=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
 `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"zm-icon"),a(),s("span",{class:"hljs-attr"},"name"),a("="),s("span",{class:"hljs-string"},'"https://canyan.kp-static.com/mini/top-loading.gif"'),a(),s("span",{class:"hljs-attr"},":size"),a("="),s("span",{class:"hljs-string"},'"48"'),a(" />")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
`)])],-1),w={class:"card"},N=s("h3",null,"注册事件",-1),V=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"script"),a(),s("span",{class:"hljs-attr"},"setup"),a(">")]),s("span",{class:"javascript"},[a(`
 `),s("span",{class:"hljs-keyword"},"import"),a(" { Toast } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'@eyelet/ui'"),a(`;
`)]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"script"),a(">")]),a(`

`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
 `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"zm-icon"),a(`
  `),s("span",{class:"hljs-attr"},"name"),a("="),s("span",{class:"hljs-string"},'"zm-logo"'),a(`
  `),s("span",{class:"hljs-attr"},"color"),a("="),s("span",{class:"hljs-string"},'"#2979ff"'),a(`
  `),s("span",{class:"hljs-attr"},":size"),a("="),s("span",{class:"hljs-string"},'"48"'),a(`
  @`),s("span",{class:"hljs-attr"},"click"),a("="),s("span",{class:"hljs-string"},`"() => Toast('点击成功')"`),a(`
 />`)]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
`)])],-1),$={class:"card"},B=s("h3",null,"图标切换动画",-1),C=s("p",null,[a("当设置了 "),s("code",null,"transition(ms)"),a(" 并通过图标的 "),s("code",null,"name"),a(" 切换图标时，可以触发切换动画。")],-1),I=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"script"),a(),s("span",{class:"hljs-attr"},"setup"),a(">")]),s("span",{class:"javascript"},[a(`
 `),s("span",{class:"hljs-keyword"},"import"),a(" { ref } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'vue'"),a(`;

 `),s("span",{class:"hljs-keyword"},"const"),a(" name = ref("),s("span",{class:"hljs-string"},"'information'"),a(`);

 `),s("span",{class:"hljs-function"},[s("span",{class:"hljs-keyword"},"function"),a(),s("span",{class:"hljs-title"},"toggle"),a("("),s("span",{class:"hljs-params"}),a(") ")]),a(`{
  iconName.value =
   iconName.value === ref(`),s("span",{class:"hljs-string"},"'zm-logo'"),a(`)
    ? `),s("span",{class:"hljs-string"},"'https://canyan.kp-static.com/mini/top-loading.gif'"),a(`
    : `),s("span",{class:"hljs-string"},"'zm-logo'"),a(`;
 }
`)]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"script"),a(">")]),a(`

`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
 `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"zm-icon"),a(),s("span",{class:"hljs-attr"},"color"),a("="),s("span",{class:"hljs-string"},'"#2979ff"'),a(),s("span",{class:"hljs-attr"},":name"),a("="),s("span",{class:"hljs-string"},'"name"'),a(),s("span",{class:"hljs-attr"},":transition"),a("="),s("span",{class:"hljs-string"},'"300"'),a(),s("span",{class:"hljs-attr"},":size"),a("="),s("span",{class:"hljs-string"},'"48"'),a(" @"),s("span",{class:"hljs-attr"},"click"),a("="),s("span",{class:"hljs-string"},'"toggle"'),a(" />")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
`)])],-1),S={class:"card"},T=s("h3",null,"新增图标",-1),q=s("p",null,[a("首先您需要获取新增图标的SVG文件(大小建议1024*1024,命名"),s("code",null,"code"),a("-"),s("code",null,"icon-name"),a(")，并引入到["),s("code",null,"@eyelet/icon"),a("]下的/svg文件夹,执行"),s("code",null,"pnpm build:icons"),a(" 便可以更新图标。")],-1),E=s("pre",{class:"hljs"},[s("code",null,`pnpm build:icons
`)],-1),P=h('<h2>API</h2><div class="card"><h3>属性</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>name</code></td><td>图标名称</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>size</code></td><td>尺寸</td><td><em>number</em></td><td><code>48</code></td></tr><tr><td><code>color</code></td><td>图标颜色, 只适用于字体图标</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>namespace</code></td><td>图标的命名空间, 可扩展自定义图标库</td><td><em>string</em></td><td><code>zm-icon</code></td></tr><tr><td><code>transition</code></td><td>过渡动画时间（ms）</td><td><em>string | number</em></td><td><code>0</code></td></tr></tbody></table></div><div class="card"><h3>事件</h3><table><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>click</code></td><td>点击图标时触发</td><td><code>event: Event</code></td></tr></tbody></table></div><div class="card"><h3>样式变量</h3><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--icon-size</code></td><td><code>48px</code></td></tr></tbody></table></div>',4);function A(F,G,M,D,H,J){const t=e("var-site-code-example");return o(),d("div",i,[r,j,s("div",m,[_,g,l(t,null,{default:n(()=>[u]),_:1})]),s("div",f,[v,l(t,null,{default:n(()=>[z]),_:1})]),s("div",y,[x,b,l(t,null,{default:n(()=>[k]),_:1})]),s("div",w,[N,l(t,null,{default:n(()=>[V]),_:1})]),s("div",$,[B,C,l(t,null,{default:n(()=>[I]),_:1})]),s("div",S,[T,q,l(t,null,{default:n(()=>[E]),_:1})]),P])}const L=c(p,[["render",A]]);export{L as default};
