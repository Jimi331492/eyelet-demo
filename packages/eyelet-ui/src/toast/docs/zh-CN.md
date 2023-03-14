# 轻提示

### 介绍

用于向用户显示快速消息。

## 组件调用

### 基本使用

```html
<script setup lang="ts">
import { ref } from 'vue'

const show = ref(false)
</script>

<template>
  <zm-button type="primary" block @click="show = !show">基本使用</zm-button>
  <zm-toast v-model:show="show">这是一条消息！！</zm-toast>
</template>
```

### 垂直排列

通过 `vertical` 属性改变 `toast` 排列方式，通过 `自定义插槽` 创建右边 action。

```html
<script setup>
import { ref } from 'vue'

const show = ref(false)
</script>

<template>
  <zm-toast v-model:show="show" :vertical="true">
    这是一条消息！！
    <template #action>
      <zm-button type="primary" @click="show = !show">关闭</zm-button>
    </template>
  </zm-toast>
  <zm-button type="primary" block @click="show = true">垂直排列</zm-button>
</template>
```

### 底部显示

通过 `position` 属性改变 `toast` 显示位置。

```html
<script setup>
import { ref } from 'vue'

const show = ref(false)
</script>

<template>
  <zm-toast v-model:show="show" position="bottom">
    这是一条消息！！
    <template #action>
      <zm-button type="primary" @click="show = false">关闭</zm-button>
    </template>
  </zm-toast>
  <zm-button type="primary" block @click="show = true">底部显示</zm-button>
</template>
```

### 显示时长

通过 `duration` 属性改变 `toast` 显示时长。

```html
<script setup>
import { ref } from 'vue'

const show = ref(false)
</script>

<template>
  <zm-toast v-model:show="show" :duration="1000"> 这是一条消息！！</zm-toast>
  <zm-button type="primary" block @click="show = true">
    显示时长
  </zm-button>
</template>
```

### 禁止穿透点击

使用 `forbid-click` 控制是否禁止穿透点击。

```html
<script setup>
import { ref } from 'vue'

const show = ref(false)
</script>

<template>
  <zm-toast v-model:show="show" :forbid-click="true">
    这是一条消息！！
  </zm-toast>
  <zm-button type="primary" block @click="show = true">
    禁止穿透
  </zm-button>
</template>
```

## 函数调用

### 函数调用-基本使用

```html
<script setup>
import { Snackbar } from '@zmlet/ui'
</script>

<template>
  <zm-button type="warning" block @click="Snackbar("这是一个消息条")">基本使用</zm-button>
</template>
```

### 函数调用-显示时长

```html
<script setup>
import { Snackbar } from '@zmlet/ui'

function createSnackbar() {
  Snackbar({
    content: "这是一个消息条!!",
    duration: 1000
  })
}
</script>

<template>
  <zm-button type="warning" block @click="createSnackbar">显示时长</zm-button>
</template>
```

### 函数调用-底部显示

```html
<script setup>
import { Snackbar } from '@zmlet/ui'

function createSnackbar() {
  Snackbar({
    content: "这是一条消息！！",
    position: 'bottom'
  })
}
</script>

<template>
  <zm-button type="warning" block @click="createSnackbar">底部显示</zm-button>
</template>
```

### Snackbar 类型

```html
<script setup>
import { Snackbar } from '@zmlet/ui'

function createSnackbar(type) {
  Snackbar[type]("这是一个消息条")
  if (type === 'loading') {
    setTimeout(() => {
      Snackbar.success("加载成功")
    }, 2000)
  }
}
</script>

<template>
  <zm-space direction="column" size="large">
    <zm-button 
      type="success" 
      block 
      @click="createSnackbar('success')"
    >
      成功
    </zm-button>
    <zm-button 
      type="warning" 
      block 
      @click="createSnackbar('warning')"
    >
      警告
    </zm-button>
    <zm-button 
      type="info" 
      block 
      @click="createSnackbar('info')"
    >
      消息
    </zm-button>
    <zm-button 
      type="danger" 
      block 
      @click="createSnackbar('error')"
    >
      错误
    </zm-button>
    <zm-button 
      type="primary" 
      block 
      @click="createSnackbar('loading')"
    >
      加载
    </zm-button>
  </zm-space>
</template>
```

### 多例模式

使用函数式调用时，Snackbar 默认采用单例模式，即同一时间只会存在一个 Snackbar，如果需要在同一时间弹出多个 Snackbar，可以参考下面的示例:

```html
<script setup>
import { Snackbar } from '@zmlet/ui'

function openMultiple() {
  Snackbar.allowMultiple(true)

  const toast1 = Snackbar('Snackbar 1');
  Snackbar.success('Snackbar 2');

  setTimeout(() => {
    toast1.clear()
  }, 1000)
}
</script>

<template>
  <zm-button type="primary" block @click="openMultiple">多例模式</zm-button>
</template>
```

## API

### 属性

| 参数               | 说明                                                      | 类型 | 默认值 |
|------------------|---------------------------------------------------------| -------- | ---------- |
| `v-model:show`   | 是否显示 `Snackbar`                                         | _boolean_ | `false` |
| `type`           | `Snackbar` 类型，可选值为 `success warning info error loading` | _string_ | `-` |
| `position`       | `Snackbar`  位置，可选值为 `top center bottom`                 | _string_ | `top` |
| `duration`       | 显示时长                                                    | _number_ | `3000` |
| `content`        | 自定义内容                                                   | _string_ | `-` |
| `content-class`  | 自定义内容的类名                                                | _string_ | `-` |
| `vertical`       | 是否启用竖直排列方式                                              | _boolean_ | `false` |
| `loading-type`   | Loading类型(见 `Loading` 组件)                               | _string_ | `circle`       |
| `loading-size`   | Loading大小(见 `Loading` 组件)                               | _string_ | `normal`       |
| `loading-color`  | loading颜色(见`_loading`组件)                                |_string_|`current_color`|
| `loading-radius` | Loading半径大小(见 `Loading` 组件)                             | _string \| number_  | `-` |
| `lock-scroll`    | 是否禁止滚动穿透                                                | _boolean_  | `false` |
| `forbid-click`   | 是否禁止穿透点击                                                | _boolean_  | `false` |
| `teleport`       | 弹出层挂载的位置                                                | _TeleportProps['to']_  | `body` |

### 事件

| 事件名 | 说明 | 回调参数 |
| ----- | -------- | -------- |
| `open` | 打开 `Snackbar` 时触发 | `-` |
| `opened` |  打开 `Snackbar` 动画结束时触发 | `-` |
| `close` | 关闭 `Snackbar` 时触发 | `-` |
| `closed` | 关闭 `Snackbar` 动画结束时触发 | `-` |

### 插槽

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | `Snackbar` 内容 | `-` |
| `action` | `Snackbar` 右边动作区 | `-` |

### 方法

实例上的 `clear` 方法可关闭当前实例，全局 `clear` 方法可关闭所有的消息条。

| 方法名 | 说明 | 参数 | 返回值 |
| ---- | ---- | ---- | ---- |
| `Snackbar` | 显示消息条 | _options \| string_ | `toast 实例` |
| `Snackbar.success` | 显示成功消息条 | _options \| string_ | `toast 实例` |
| `Snackbar.info` | 显示普通消息条 | _options \| string_ | `toast 实例` |
| `Snackbar.warning` | 显示警告消息条 | _options \| string_ | `toast 实例` |
| `Snackbar.error` | 显示错误消息条 | _options \| string_ | `toast 实例` |
| `Snackbar.loading` | 显示加载消息条 | _options \| string_ | `toast 实例` |
| `Snackbar.clear` | 关闭消息条 | _-_ | `-` |
| `Snackbar.allowMultiple` | 是否允许多例模式 | _boolean_ | `-` |
| `Snackbar.setDefaultOptions` | 设置默认的选项配置 | _options_ | `-` |
| `Snackbar.resetDefaultOptions` | 重置默认的选项配置 | _-_ | `-` |

### Snackbar Options

#### 函数式调用时传入的选项

| 参数              | 说明                                                      | 类型 | 默认值            |
|-----------------|---------------------------------------------------------| -------- |----------------|
| `type`          | `Snackbar` 类型，可选值为 `success warning info error loading` | _string_ | `-`            |
| `position`      | `Snackbar` 位置，可选值为 `top center bottom`                  | _string_ | `top`          |
| `duration`      | 显示时长(当 `type` 属性为 `loading` 时，需要手动关闭)                   | _number_ | `3000`         |
| `content`       | 自定义内容                                                   | _string_ | `-`            |
| `contentClass`  | 自定义内容的类名                                                | _string_ | `-`            |
| `vertical`      | 是否启用竖直排列方式                                              | _boolean_ | `false`        |
| `loadingType`   | Loading类型(见 `Loading` 组件)                               | _string_ | `circle`       |
| `loadingSize`   | Loading大小(见 `Loading` 组件)                               | _string_ | `normal`       |
| `loadingColor`  | Loading颜色(见 `Loading` 组件)                               | _string_ | `currentColor` |
| `loadingRadius` | Loading半径大小(见 `Loading` 组件)                                 | _string \| number_  | `-` |
| `lockScroll`    | 是否禁止滚动穿透                                                | _boolean_  | `false`        |
| `forbidClick`   | 是否禁止穿透点击(当 `type` 属性为 `loading` 时，默认为 `true`)           | _boolean_  | `false`        |
| `onOpen`        | 打开 `Snackbar` 时触发                                       | _() => void_ | `-`            |
| `onOpened`      | 打开 `Snackbar` 动画结束时触发                                   | _() => void_ | `-`            |
| `onClose`       | 关闭 `Snackbar` 时触发                                       | _() => void_ | `-`            |
| `onClosed`      | 关闭 `Snackbar` 动画结束时触发                                   | _() => void_ | `-`            |

### 样式变量

<!-- 以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制。 -->

| 变量名 | 默认值 |
| --- | --- |
| `--toast-max-width` | `686px` |
| `--toast-min-width` | `171px` |
| `--toast-color` | `rgba(255, 255, 255, .87)` |
| `--toast-border-radius` | `4px` |
| `--toast-background` | `#333` |
| `--toast-font-size` | `zm(--font-size-md)` |
| `--toast-margin` | `6px 24px` |
| `--toast-border-color` | `currentColor` |
| `--toast-success-background` | `zm(--color-success)` |
| `--toast-info-background` | `zm(--color-info)` |
| `--toast-error-background` | `zm(--color-danger)` |
| `--toast-warning-background` | `zm(--color-warning)` |
| `--toast-content-padding` | `14px 16px` |
| `--toast-action-margin` | `0 16px 0 0` |
