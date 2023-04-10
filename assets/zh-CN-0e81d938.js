import{_ as c,p as e,f as d,h as o,M as t,q as l,S as n,P as s,aq as p}from"./vue-router.esm-bundler-952984cf.js";const r={components:{}},h={class:"varlet-site-doc"},j=t("h1",null,"轻提示",-1),i=t("div",{class:"card"},[t("h3",null,"介绍"),t("p",null,"用于向用户显示快速消息。")],-1),m=t("h2",null,"组件调用",-1),g={class:"card"},u=t("h3",null,"基本使用",-1),_=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" show = ref("),t("span",{class:"hljs-literal"},"false"),s(`)
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"zm-button"),s(),t("span",{class:"hljs-attr"},"size"),s("="),t("span",{class:"hljs-string"},'"large"'),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"show = !show"'),s(">")]),s("基本使用"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"zm-button"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"zm-toast"),s(),t("span",{class:"hljs-attr"},"v-model:show"),s("="),t("span",{class:"hljs-string"},'"show"'),s(">")]),s("Toast组件调用-基本使用"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"zm-toast"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),b={class:"card"},f=t("h3",null,"顶部显示",-1),y=t("p",null,[s("通过 "),t("code",null,"position"),s(" 属性改变 "),t("code",null,"toast"),s(" 显示位置。")],-1),w=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" show = ref("),t("span",{class:"hljs-literal"},"false"),s(`)
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"zm-toast"),s(),t("span",{class:"hljs-attr"},"v-model:show"),s("="),t("span",{class:"hljs-string"},'"show"'),s(),t("span",{class:"hljs-attr"},"position"),s("="),t("span",{class:"hljs-string"},'"top"'),s(">")]),s(`
   Toast组件调用-顶部显示
   `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(" #"),t("span",{class:"hljs-attr"},"action"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"zm-icon"),s(),t("span",{class:"hljs-attr"},":size"),s("="),t("span",{class:"hljs-string"},'"12"'),s(),t("span",{class:"hljs-attr"},"name"),s("="),t("span",{class:"hljs-string"},'"select"'),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"show = false"'),s(" />")]),s(`
   `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"zm-toast"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"zm-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(),t("span",{class:"hljs-attr"},"size"),s("="),t("span",{class:"hljs-string"},'"large"'),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"show = !show"'),s(">")]),s("顶部显示"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"zm-button"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),k={class:"card"},T=t("h3",null,"垂直排列",-1),z=t("p",null,[s("通过 "),t("code",null,"vertical"),s(" 属性改变 "),t("code",null,"toast"),s(" 排列方式，通过 "),t("code",null,"自定义插槽"),s(" 创建上方 action。")],-1),v=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" show = ref("),t("span",{class:"hljs-literal"},"false"),s(`)
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
   `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"zm-toast"),s(),t("span",{class:"hljs-attr"},"v-model:show"),s("="),t("span",{class:"hljs-string"},'"show"'),s(),t("span",{class:"hljs-attr"},"position"),s("="),t("span",{class:"hljs-string"},'"center"'),s(),t("span",{class:"hljs-attr"},":vertical"),s("="),t("span",{class:"hljs-string"},'"true"'),s(">")]),s(`
   Toast组件调用-垂直排列-居中显示
   `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(" #"),t("span",{class:"hljs-attr"},"action"),s(">")]),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"zm-icon"),s(),t("span",{class:"hljs-attr"},"name"),s("="),t("span",{class:"hljs-string"},'"zm-logo"'),s(" />")]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"zm-toast"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"zm-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(),t("span",{class:"hljs-attr"},"size"),s("="),t("span",{class:"hljs-string"},'"large"'),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"show = !show"'),s(">")]),s("垂直排列"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"zm-button"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),x={class:"card"},I=t("h3",null,"显示时长",-1),C=t("p",null,[s("通过 "),t("code",null,"duration"),s(" 属性改变 "),t("code",null,"toast"),s(" 显示时长。")],-1),L=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" show = ref("),t("span",{class:"hljs-literal"},"false"),s(`)
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"zm-toast"),s(),t("span",{class:"hljs-attr"},"v-model:show"),s("="),t("span",{class:"hljs-string"},'"show"'),s(),t("span",{class:"hljs-attr"},":duration"),s("="),t("span",{class:"hljs-string"},'"1000"'),s(">")]),s("Toast组件调用-显示时长-1s"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"zm-toast"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"zm-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(),t("span",{class:"hljs-attr"},"size"),s("="),t("span",{class:"hljs-string"},'"large"'),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"show = !show"'),s(">")]),s(`
    显示时长
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"zm-button"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),N={class:"card"},M=t("h3",null,"禁止穿透点击",-1),O=t("p",null,[s("使用 "),t("code",null,"forbid-click"),s(" 控制是否禁止穿透点击。")],-1),S=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" show = ref("),t("span",{class:"hljs-literal"},"false"),s(`)
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"zm-toast"),s(),t("span",{class:"hljs-attr"},"v-model:show"),s("="),t("span",{class:"hljs-string"},'"show"'),s(),t("span",{class:"hljs-attr"},":forbid-click"),s("="),t("span",{class:"hljs-string"},'"true"'),s(">")]),s("禁止穿透点击"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"zm-toast"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"zm-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(),t("span",{class:"hljs-attr"},"size"),s("="),t("span",{class:"hljs-string"},'"large"'),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"show = !show"'),s(">")]),s(`
    禁止穿透
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"zm-button"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),V=t("h2",null,"函数调用",-1),$={class:"card"},B=t("h3",null,"函数调用-基本使用",-1),P=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { Toast } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@eyelet/ui'"),s(`
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"zm-button"),s(),t("span",{class:"hljs-attr"},"size"),s("="),t("span",{class:"hljs-string"},'"large"'),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"Toast("'),t("span",{class:"hljs-attr"},"Toast"),s("函数调用"),t("span",{class:"hljs-attr"},"-"),s('基本使用")">')]),s("基本使用"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"zm-button"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),q={class:"card"},D=t("h3",null,"函数调用-显示时长",-1),A=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { Toast } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@eyelet/ui'"),s(`

`),t("span",{class:"hljs-function"},[t("span",{class:"hljs-keyword"},"function"),s(),t("span",{class:"hljs-title"},"createToast"),s("("),t("span",{class:"hljs-params"}),s(") ")]),s(`{
  Toast({
    `),t("span",{class:"hljs-attr"},"content"),s(": "),t("span",{class:"hljs-string"},'"Toast函数调用-显示时长-1s"'),s(`,
    `),t("span",{class:"hljs-attr"},"duration"),s(": "),t("span",{class:"hljs-number"},"1000"),s(`
  })
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"zm-button"),s(),t("span",{class:"hljs-attr"},"size"),s("="),t("span",{class:"hljs-string"},'"large"'),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"createToast"'),s(">")]),s("显示时长"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"zm-button"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),E={class:"card"},F=t("h3",null,"函数调用-顶部显示",-1),G=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { Toast } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@eyelet/ui'"),s(`

`),t("span",{class:"hljs-function"},[t("span",{class:"hljs-keyword"},"function"),s(),t("span",{class:"hljs-title"},"createToast"),s("("),t("span",{class:"hljs-params"}),s(") ")]),s(`{
  Toast({
    `),t("span",{class:"hljs-attr"},"content"),s(": "),t("span",{class:"hljs-string"},'"Toast函数调用-顶部显示"'),s(`,
    `),t("span",{class:"hljs-attr"},"position"),s(": "),t("span",{class:"hljs-string"},"'top'"),s(`
  })
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"zm-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"warning"'),s(),t("span",{class:"hljs-attr"},"block"),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"createToast"'),s(">")]),s("顶部显示"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"zm-button"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),H={class:"card"},J=t("h3",null,"函数调用-垂直排列",-1),K=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { Toast } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@eyelet/ui'"),s(`

`),t("span",{class:"hljs-function"},[t("span",{class:"hljs-keyword"},"function"),s(),t("span",{class:"hljs-title"},"createToast"),s("("),t("span",{class:"hljs-params"}),s(") ")]),s(`{
  Toast({
    `),t("span",{class:"hljs-attr"},"content"),s(": "),t("span",{class:"hljs-string"},'"Toast函数调用-顶部显示"'),s(`,
    `),t("span",{class:"hljs-attr"},"position"),s(": "),t("span",{class:"hljs-string"},"'top'"),s(`
  })
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"zm-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"warning"'),s(),t("span",{class:"hljs-attr"},"block"),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"createToast"'),s(">")]),s("顶部显示"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"zm-button"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),Q={class:"card"},R=t("h3",null,"Toast 类型",-1),U=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { Toast } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@eyelet/ui'"),s(`

`),t("span",{class:"hljs-function"},[t("span",{class:"hljs-keyword"},"function"),s(),t("span",{class:"hljs-title"},"createToast"),s("("),t("span",{class:"hljs-params"},"type"),s(") ")]),s(`{
  `),t("span",{class:"hljs-keyword"},"if"),s(" (type === "),t("span",{class:"hljs-string"},"'loading'"),s(`) {
      `),t("span",{class:"hljs-keyword"},"const"),s(` toast = Toast[type]({
        `),t("span",{class:"hljs-attr"},"content"),s(": "),t("span",{class:"hljs-string"},"'加载中...'"),s(`,
        `),t("span",{class:"hljs-attr"},"position"),s(": "),t("span",{class:"hljs-string"},"'center'"),s(`,
        `),t("span",{class:"hljs-attr"},"vertical"),s(": "),t("span",{class:"hljs-literal"},"true"),s(`,
      })
    `),t("span",{class:"hljs-built_in"},"setTimeout"),s("("),t("span",{class:"hljs-function"},"() =>"),s(` {
      toast.clear();
      Toast.success({
        `),t("span",{class:"hljs-attr"},"content"),s(": "),t("span",{class:"hljs-string"},"'加载完成'"),s(`,
        `),t("span",{class:"hljs-attr"},"position"),s(": "),t("span",{class:"hljs-string"},"'center'"),s(`,
        `),t("span",{class:"hljs-attr"},"vertical"),s(": "),t("span",{class:"hljs-literal"},"true"),s(`,
      });
    }, `),t("span",{class:"hljs-number"},"2000"),s(`)
  }`),t("span",{class:"hljs-keyword"},"else"),s(`{
     Toast[type](`),t("span",{class:"hljs-string"},'"这是一条Toast"'),s(`)
  }
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"zm-space"),s(),t("span",{class:"hljs-attr"},"direction"),s("="),t("span",{class:"hljs-string"},'"column"'),s(),t("span",{class:"hljs-attr"},"size"),s("="),t("span",{class:"hljs-string"},'"large"'),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"zm-button"),s(` 
      `),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"success"'),s(` 
      `),t("span",{class:"hljs-attr"},"block"),s(` 
      @`),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},`"createToast('success')"`),s(`
    >`)]),s(`
      成功
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"zm-button"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"zm-button"),s(` 
      `),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"warning"'),s(` 
      `),t("span",{class:"hljs-attr"},"block"),s(` 
      @`),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},`"createToast('warning')"`),s(`
    >`)]),s(`
      警告
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"zm-button"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"zm-button"),s(` 
      `),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"info"'),s(` 
      `),t("span",{class:"hljs-attr"},"block"),s(` 
      @`),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},`"createToast('info')"`),s(`
    >`)]),s(`
      消息
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"zm-button"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"zm-button"),s(` 
      `),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"danger"'),s(` 
      `),t("span",{class:"hljs-attr"},"block"),s(` 
      @`),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},`"createToast('error')"`),s(`
    >`)]),s(`
      错误
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"zm-button"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"zm-button"),s(` 
      `),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(` 
      `),t("span",{class:"hljs-attr"},"block"),s(` 
      @`),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},`"createToast('loading')"`),s(`
    >`)]),s(`
      加载
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"zm-button"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"zm-space"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),W={class:"card"},X=t("h3",null,"多例模式",-1),Y=t("p",null,"使用函数式调用时，Toast 默认采用单例模式，即同一时间只会存在一个 Toast，如果需要在同一时间弹出多个 Toast，可以参考下面的示例:",-1),Z=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { Toast } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@zmlet/ui'"),s(`

`),t("span",{class:"hljs-function"},[t("span",{class:"hljs-keyword"},"function"),s(),t("span",{class:"hljs-title"},"openMultiple"),s("("),t("span",{class:"hljs-params"}),s(") ")]),s(`{
  Toast.allowMultiple(`),t("span",{class:"hljs-literal"},"true"),s(`)

  `),t("span",{class:"hljs-keyword"},"const"),s(" toast1 = Toast("),t("span",{class:"hljs-string"},"'Toast 1'"),s(`);
  Toast.success(`),t("span",{class:"hljs-string"},"'Toast 2'"),s(`);

  `),t("span",{class:"hljs-built_in"},"setTimeout"),s("("),t("span",{class:"hljs-function"},"() =>"),s(` {
    toast1.clear()
  }, `),t("span",{class:"hljs-number"},"1000"),s(`)
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"zm-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(),t("span",{class:"hljs-attr"},"block"),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"openMultiple"'),s(">")]),s("多例模式"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"zm-button"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),ss=p('<h2>API</h2><div class="card"><h3>属性</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>v-model:show</code></td><td>是否显示 <code>Toast</code></td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>type</code></td><td><code>Toast</code> 类型，可选值为 <code>success warning info error loading</code></td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>position</code></td><td><code>Toast</code> 位置，可选值为 <code>top center bottom</code></td><td><em>string</em></td><td><code>top</code></td></tr><tr><td><code>duration</code></td><td>显示时长</td><td><em>number</em></td><td><code>2000</code></td></tr><tr><td><code>content</code></td><td>自定义内容</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>content-class</code></td><td>自定义内容的类名</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>vertical</code></td><td>是否启用竖直排列方式</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>loading-name</code></td><td>LoadingIcon(见 <code>Icon</code> 组件)</td><td><em>number</em></td><td><code>餐眼gif</code></td></tr><tr><td><code>loading-size</code></td><td>LoadingIcon大小(见 <code>Icon</code> 组件)</td><td><em>string</em></td><td><code>40</code></td></tr><tr><td><code>loading-color</code></td><td>LoadingIcon颜色(见 <code>Icon</code>组件)</td><td><em>string</em></td><td><code>current_color</code></td></tr><tr><td><code>lock-scroll</code></td><td>是否禁止滚动穿透</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>forbid-click</code></td><td>是否禁止穿透点击</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>teleport</code></td><td>弹出层挂载的位置</td><td><em>TeleportProps[&#39;to&#39;]</em></td><td><code>body</code></td></tr></tbody></table></div><div class="card"><h3>事件</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td><code>open</code></td><td>打开 <code>Toast</code> 时触发</td><td><code>-</code></td></tr><tr><td><code>opened</code></td><td>打开 <code>Toast</code> 动画结束时触发</td><td><code>-</code></td></tr><tr><td><code>close</code></td><td>关闭 <code>Toast</code> 时触发</td><td><code>-</code></td></tr><tr><td><code>closed</code></td><td>关闭 <code>Toast</code> 动画结束时触发</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>插槽</h3><table><thead><tr><th>插槽名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>default</code></td><td><code>Toast</code> 内容</td><td><code>-</code></td></tr><tr><td><code>action</code></td><td><code>Toast</code> 右边动作区</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>方法</h3><p>实例上的 <code>clear</code> 方法可关闭当前实例，全局 <code>clear</code> 方法可关闭所有的轻提示。</p><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td><code>Toast</code></td><td>显示轻提示</td><td><em>options | string</em></td><td><code>toast 实例</code></td></tr><tr><td><code>Toast.success</code></td><td>显示成功轻提示</td><td><em>options | string</em></td><td><code>toast 实例</code></td></tr><tr><td><code>Toast.info</code></td><td>显示普通轻提示</td><td><em>options | string</em></td><td><code>toast 实例</code></td></tr><tr><td><code>Toast.warning</code></td><td>显示警告轻提示</td><td><em>options | string</em></td><td><code>toast 实例</code></td></tr><tr><td><code>Toast.error</code></td><td>显示错误轻提示</td><td><em>options | string</em></td><td><code>toast 实例</code></td></tr><tr><td><code>Toast.loading</code></td><td>显示加载轻提示</td><td><em>options | string</em></td><td><code>toast 实例</code></td></tr><tr><td><code>Toast.clear</code></td><td>关闭轻提示</td><td><em>-</em></td><td><code>-</code></td></tr><tr><td><code>Toast.allowMultiple</code></td><td>是否允许多例模式</td><td><em>boolean</em></td><td><code>-</code></td></tr><tr><td><code>Toast.setDefaultOptions</code></td><td>设置默认的选项配置</td><td><em>options</em></td><td><code>-</code></td></tr><tr><td><code>Toast.resetDefaultOptions</code></td><td>重置默认的选项配置</td><td><em>-</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Toast Options</h3><h4>函数式调用时传入的选项</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>type</code></td><td><code>Toast</code> 类型，可选值为 <code>success warning info error loading</code></td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>position</code></td><td><code>Toast</code> 位置，可选值为 <code>top center bottom</code></td><td><em>string</em></td><td><code>top</code></td></tr><tr><td><code>duration</code></td><td>显示时长(当 <code>type</code> 属性为 <code>loading</code> 时，需要手动关闭)</td><td><em>number</em></td><td><code>2000</code></td></tr><tr><td><code>content</code></td><td>自定义内容</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>contentClass</code></td><td>自定义内容的类名</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>vertical</code></td><td>是否启用竖直排列方式</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>loadingName</code></td><td>LoadingIcon(见 <code>Icon</code> 组件)</td><td><em>string</em></td><td><code>circle</code></td></tr><tr><td><code>loadingSize</code></td><td>LoadingIcon大小(见 <code>Icon</code> 组件)</td><td><em>string</em></td><td><code>normal</code></td></tr><tr><td><code>loadingColor</code></td><td>LoadingIcon颜色(见 <code>Icon</code> 组件)</td><td><em>string</em></td><td><code>currentColor</code></td></tr><tr><td><code>lockScroll</code></td><td>是否禁止滚动穿透</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>forbidClick</code></td><td>是否禁止穿透点击(当 <code>type</code> 属性为 <code>loading</code> 时，默认为 <code>true</code>)</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>onOpen</code></td><td>打开 <code>Toast</code> 时触发</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onOpened</code></td><td>打开 <code>Toast</code> 动画结束时触发</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClose</code></td><td>关闭 <code>Toast</code> 时触发</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClosed</code></td><td>关闭 <code>Toast</code> 动画结束时触发</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>样式变量</h3><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--toast-width</code></td><td><code>240px</code></td></tr><tr><td><code>--toast-max-width</code></td><td><code>686px</code></td></tr><tr><td><code>--toast-min-width</code></td><td><code>171px</code></td></tr><tr><td><code>--toast-color</code></td><td><code>rgba(255, 255, 255, .87)</code></td></tr><tr><td><code>--toast-border-radius</code></td><td><code>4px</code></td></tr><tr><td><code>--toast-background</code></td><td><code>#333</code></td></tr><tr><td><code>--toast-font-size</code></td><td><code>zm(--font-size-md)</code></td></tr><tr><td><code>--toast-margin</code></td><td><code>6px 24px</code></td></tr><tr><td><code>--toast-border-color</code></td><td><code>currentColor</code></td></tr><tr><td><code>--toast-success-background</code></td><td><code>zm(--color-success)</code></td></tr><tr><td><code>--toast-info-background</code></td><td><code>zm(--color-info)</code></td></tr><tr><td><code>--toast-error-background</code></td><td><code>zm(--color-danger)</code></td></tr><tr><td><code>--toast-warning-background</code></td><td><code>zm(--color-warning)</code></td></tr><tr><td><code>--toast-content-padding</code></td><td><code>14px 16px</code></td></tr><tr><td><code>--toast-action-margin</code></td><td><code>0 16px 0 0</code></td></tr></tbody></table></div>',7);function ts(as,ls,ns,cs,es,ds){const a=e("var-site-code-example");return d(),o("div",h,[j,i,m,t("div",g,[u,l(a,null,{default:n(()=>[_]),_:1})]),t("div",b,[f,y,l(a,null,{default:n(()=>[w]),_:1})]),t("div",k,[T,z,l(a,null,{default:n(()=>[v]),_:1})]),t("div",x,[I,C,l(a,null,{default:n(()=>[L]),_:1})]),t("div",N,[M,O,l(a,null,{default:n(()=>[S]),_:1})]),V,t("div",$,[B,l(a,null,{default:n(()=>[P]),_:1})]),t("div",q,[D,l(a,null,{default:n(()=>[A]),_:1})]),t("div",E,[F,l(a,null,{default:n(()=>[G]),_:1})]),t("div",H,[J,l(a,null,{default:n(()=>[K]),_:1})]),t("div",Q,[R,l(a,null,{default:n(()=>[U]),_:1})]),t("div",W,[X,Y,l(a,null,{default:n(()=>[Z]),_:1})]),ss])}const ps=c(r,[["render",ts]]);export{ps as default};
