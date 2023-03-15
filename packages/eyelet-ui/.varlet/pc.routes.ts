export default [  
  {
    path: '/en-US/index',
    // @ts-ignore
    component: () => import('/Users/jimilo/Desktop/UI-source/eyelet/packages/eyelet-ui/.varlet/site/pc/pages/index/index.vue')
  },
  {
    path: '/zh-CN/index',
    // @ts-ignore
    component: () => import('/Users/jimilo/Desktop/UI-source/eyelet/packages/eyelet-ui/.varlet/site/pc/pages/index/index.vue')
  },
  {
    path: '/layout',
    // @ts-ignore
    component:()=> import('/Users/jimilo/Desktop/UI-source/eyelet/packages/eyelet-ui/.varlet/site/pc/Layout.vue'),
    children: [
      
      {
        path: '/zh-CN/button',
        // @ts-ignore
        component: () => import('/Users/jimilo/Desktop/UI-source/eyelet/packages/eyelet-ui/src/button/docs/zh-CN.md')
      },
      {
        path: '/en-US/dialog',
        // @ts-ignore
        component: () => import('/Users/jimilo/Desktop/UI-source/eyelet/packages/eyelet-ui/src/dialog/docs/en-US.md')
      },
      {
        path: '/zh-CN/dialog',
        // @ts-ignore
        component: () => import('/Users/jimilo/Desktop/UI-source/eyelet/packages/eyelet-ui/src/dialog/docs/zh-CN.md')
      },
      {
        path: '/zh-CN/icon',
        // @ts-ignore
        component: () => import('/Users/jimilo/Desktop/UI-source/eyelet/packages/eyelet-ui/src/icon/docs/zh-CN.md')
      },
      {
        path: '/en-US/space',
        // @ts-ignore
        component: () => import('/Users/jimilo/Desktop/UI-source/eyelet/packages/eyelet-ui/src/space/docs/en-US.md')
      },
      {
        path: '/zh-CN/style-provider',
        // @ts-ignore
        component: () => import('/Users/jimilo/Desktop/UI-source/eyelet/packages/eyelet-ui/src/style-provider/docs/zh-CN.md')
      },
      {
        path: '/en-US/styles',
        // @ts-ignore
        component: () => import('/Users/jimilo/Desktop/UI-source/eyelet/packages/eyelet-ui/src/styles/docs/en-US.md')
      },
      {
        path: '/zh-CN/styles',
        // @ts-ignore
        component: () => import('/Users/jimilo/Desktop/UI-source/eyelet/packages/eyelet-ui/src/styles/docs/zh-CN.md')
      },
      {
        path: '/zh-CN/themes',
        // @ts-ignore
        component: () => import('/Users/jimilo/Desktop/UI-source/eyelet/packages/eyelet-ui/src/themes/docs/zh-CN.md')
      },
      {
        path: '/zh-CN/toast',
        // @ts-ignore
        component: () => import('/Users/jimilo/Desktop/UI-source/eyelet/packages/eyelet-ui/src/toast/docs/zh-CN.md')
      },
      {
        path: '/zh-CN/home',
        // @ts-ignore
        component: () => import('/Users/jimilo/Desktop/UI-source/eyelet/packages/eyelet-ui/docs/home.zh-CN.md')
      },
    ]
  }
]