# 图标

### 介绍

基于字体的图标库，也支持网络图片。字体图标来自 [IconFont](https://www.iconfont.cn/manage/index?manage_type=myprojects&projectId=3837212)

### 图标尺寸

32px(xs)、40px(sm)、48px(md)、64px(lg)、80px(xl)，其中32(xs)和48(md)是最常用尺寸，在设计图上遇见没有边框的图自动往这两个尺寸上靠，选稍大那个（图标宽26选32，宽34选48）

```html
<template>
 <zm-icon name="zm-logo" :size="32"/>
 <zm-icon name="zm-logo" :size="48" />
</template>
```

### 图标颜色

```html
<template>
 <zm-icon :size="48" name="zm-logo" />
 <zm-icon :size="48" name="zm-logo" color="#2979ff" />
</template>
```

### 使用图片

当传入的 `name` 是一个网络地址时,将会使用 `img` 标签以 `cover` 模式显示。`size` 为图片的宽高。

```html
<template>
 <zm-icon name="https://canyan.kp-static.com/mini/top-loading.gif" :size="48" />
</template>
```

### 注册事件

```html
<script setup>
 import { Toast } from '@eyelet/ui';
</script>

<template>
 <zm-icon
  name="zm-logo"
  color="#2979ff"
  :size="48"
  @click="() => Toast('点击成功')"
 />
</template>
```

### 图标切换动画

当设置了 `transition(ms)` 并通过图标的 `name` 切换图标时，可以触发切换动画。

```html
<script setup>
 import { ref } from 'vue';

 const name = ref('information');

 function toggle() {
  iconName.value =
   iconName.value === ref('zm-logo')
    ? 'https://canyan.kp-static.com/mini/top-loading.gif'
    : 'zm-logo';
 }
</script>

<template>
 <zm-icon color="#2979ff" :name="name" :transition="300" :size="48" @click="toggle" />
</template>
```

### 新增图标

首先您需要获取新增图标的SVG文件(大小建议1024*1024,命名`code`-`icon-name`)，并引入到[`@eyelet/icon`]下的/svg文件夹,执行`pnpm build:icons` 便可以更新图标。

```css
pnpm build:icons
```

## API

### 属性

| 参数         | 说明                               | 类型               | 默认值     |
| ------------ | ---------------------------------- | ------------------ | ---------- |
| `name`       | 图标名称                           | _string_           | `-`        |
| `size`       | 尺寸                               |   _number_ | `48`        |
| `color`      | 图标颜色, 只适用于字体图标         | _string_           | `-`        |
| `namespace`  | 图标的命名空间, 可扩展自定义图标库 | _string_           | `zm-icon` |
| `transition` | 过渡动画时间（ms）                 | _string \| number_ | `0`        |

### 事件

| 事件名  | 说明           | 参数           |
| ------- | -------------- | -------------- |
| `click` | 点击图标时触发 | `event: Event` |

### 样式变量

<!-- 以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制。 -->

| 变量名        | 默认值 |
| ------------- | ------ |
| `--icon-size` | `48px` |
