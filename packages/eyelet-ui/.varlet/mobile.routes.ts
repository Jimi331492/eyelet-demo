export default [    
  {
    path: '/button',
    // @ts-ignore
    component: () => import('/Users/jimilo/Desktop/UI-source/eyelet/packages/eyelet-ui/src/button/example/index.vue')
  },
  {
    path: '/dialog',
    // @ts-ignore
    component: () => import('/Users/jimilo/Desktop/UI-source/eyelet/packages/eyelet-ui/src/dialog/example/index.vue')
  },
  {
    path: '/icon',
    // @ts-ignore
    component: () => import('/Users/jimilo/Desktop/UI-source/eyelet/packages/eyelet-ui/src/icon/example/index.vue')
  },
  {
    path: '/style-provider',
    // @ts-ignore
    component: () => import('/Users/jimilo/Desktop/UI-source/eyelet/packages/eyelet-ui/src/style-provider/example/index.vue')
  },
  {
    path: '/themes',
    // @ts-ignore
    component: () => import('/Users/jimilo/Desktop/UI-source/eyelet/packages/eyelet-ui/src/themes/example/index.vue')
  },
  {
    path: '/toast',
    // @ts-ignore
    component: () => import('/Users/jimilo/Desktop/UI-source/eyelet/packages/eyelet-ui/src/toast/example/index.vue')
  }
]