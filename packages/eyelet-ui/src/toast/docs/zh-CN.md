# 轻提示

### 介绍

用于向用户显示快速消息。

## 组件调用

### 基本使用

```html
<script setup>
import { ref } from 'vue'

const show = ref(false)
</script>

<template>
  <zm-button size="large" @click="show = !show">基本使用</zm-button>
  <zm-toast v-model:show="show">Toast组件调用-基本使用</zm-toast>
</template>
```

### 顶部显示

通过 `position` 属性改变 `toast` 显示位置。

```html
<script setup>
import { ref } from 'vue'

const show = ref(false)
</script>

<template>
  <zm-toast v-model:show="show" position="top">
   Toast组件调用-顶部显示
   <template #action>
    <zm-icon :size="12" name="select" @click="show = false" />
   </template>
  </zm-toast>
  <zm-button type="primary" size="large" @click="show = !show">顶部显示</zm-button>
</template>
```

### 垂直排列

通过 `vertical` 属性改变 `toast` 排列方式，通过 `自定义插槽` 创建上方 action。

```html
<script setup>
import { ref } from 'vue'

const show = ref(false)
</script>

<template>
   <zm-toast v-model:show="show" position="center" :vertical="true">
   Toast组件调用-垂直排列-居中显示
   <template #action><zm-icon name="zm-logo" /></template>
  </zm-toast>
  <zm-button type="primary" size="large" @click="show = !show">垂直排列</zm-button>
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
  <zm-toast v-model:show="show" :duration="1000">Toast组件调用-显示时长-1s</zm-toast>
  <zm-button type="primary" size="large" @click="show = !show">
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
  <zm-toast v-model:show="show" :forbid-click="true">禁止穿透点击</zm-toast>
  <zm-button type="primary" size="large" @click="show = !show">
    禁止穿透
  </zm-button>
</template>
```

## 函数调用

### 函数调用-基本使用

```html
<script setup>
import { Toast } from '@eyelet/ui'
</script>

<template>
  <zm-button size="large" @click="Toast("Toast函数调用-基本使用")">基本使用</zm-button>
</template>
```

### 函数调用-显示时长

```html
<script setup>
import { Toast } from '@eyelet/ui'

function createToast() {
  Toast({
    content: "Toast函数调用-显示时长-1s",
    duration: 1000
  })
}
</script>

<template>
  <zm-button size="large" @click="createToast">显示时长</zm-button>
</template>
```

### 函数调用-顶部显示

```html
<script setup>
import { Toast } from '@eyelet/ui'

function createToast() {
  Toast({
    content: "Toast函数调用-顶部显示",
    position: 'top'
  })
}
</script>

<template>
  <zm-button type="warning" block @click="createToast">顶部显示</zm-button>
</template>
```

### 函数调用-垂直排列

```html
<script setup>
import { Toast } from '@eyelet/ui'

function createToast() {
  Toast({
    content: "Toast函数调用-顶部显示",
    position: 'top'
  })
}
</script>

<template>
  <zm-button type="warning" block @click="createToast">顶部显示</zm-button>
</template>
```

### Toast 类型

```html
<script setup>
import { Toast } from '@eyelet/ui'

function createToast(type) {
  if (type === 'loading') {
      const toast = Toast[type]({
        content: '加载中...',
        position: 'center',
        vertical: true,
      })
    setTimeout(() => {
      toast.clear();
      Toast.success({
        content: '加载完成',
        position: 'center',
        vertical: true,
      });
    }, 2000)
  }else{
     Toast[type]("这是一条Toast")
  }
}
</script>

<template>
  <zm-space direction="column" size="large">
    <zm-button 
      type="success" 
      block 
      @click="createToast('success')"
    >
      成功
    </zm-button>
    <zm-button 
      type="warning" 
      block 
      @click="createToast('warning')"
    >
      警告
    </zm-button>
    <zm-button 
      type="info" 
      block 
      @click="createToast('info')"
    >
      消息
    </zm-button>
    <zm-button 
      type="danger" 
      block 
      @click="createToast('error')"
    >
      错误
    </zm-button>
    <zm-button 
      type="primary" 
      block 
      @click="createToast('loading')"
    >
      加载
    </zm-button>
  </zm-space>
</template>
```

### 多例模式

使用函数式调用时，Toast 默认采用单例模式，即同一时间只会存在一个 Toast，如果需要在同一时间弹出多个 Toast，可以参考下面的示例:

```html
<script setup>
import { Toast } from '@zmlet/ui'

function openMultiple() {
  Toast.allowMultiple(true)

  const toast1 = Toast('Toast 1');
  Toast.success('Toast 2');

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
| `v-model:show`   | 是否显示 `Toast`                                         | _boolean_ | `false` |
| `type`           | `Toast` 类型，可选值为 `success warning info error loading` | _string_ | `-` |
| `position`       | `Toast`  位置，可选值为 `top center bottom`                 | _string_ | `top` |
| `duration`       | 显示时长                                                    | _number_ | `3000` |
| `content`        | 自定义内容                                                   | _string_ | `-` |
| `content-class`  | 自定义内容的类名                                                | _string_ | `-` |
| `vertical`       | 是否启用竖直排列方式                                              | _boolean_ | `false` |
| `loading-name`   | LoadingIcon(见 `Icon` 组件)                               | _number_ | `餐眼gif`       |
| `loading-size`   | LoadingIcon大小(见 `Icon` 组件)                               | _string_ | `40`       |
| `loading-color`  | LoadingIcon颜色(见 `Icon`组件)                                |_string_|`current_color`|
| `lock-scroll`    | 是否禁止滚动穿透                                                | _boolean_  | `false` |
| `forbid-click`   | 是否禁止穿透点击                                                | _boolean_  | `false` |
| `teleport`       | 弹出层挂载的位置                                                | _TeleportProps['to']_  | `body` |

### 事件

| 事件名 | 说明 | 回调参数 |
| ----- | -------- | -------- |
| `open` | 打开 `Toast` 时触发 | `-` |
| `opened` |  打开 `Toast` 动画结束时触发 | `-` |
| `close` | 关闭 `Toast` 时触发 | `-` |
| `closed` | 关闭 `Toast` 动画结束时触发 | `-` |

### 插槽

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | `Toast` 内容 | `-` |
| `action` | `Toast` 右边动作区 | `-` |

### 方法

实例上的 `clear` 方法可关闭当前实例，全局 `clear` 方法可关闭所有的轻提示。

| 方法名 | 说明 | 参数 | 返回值 |
| ---- | ---- | ---- | ---- |
| `Toast` | 显示轻提示 | _options \| string_ | `toast 实例` |
| `Toast.success` | 显示成功轻提示 | _options \| string_ | `toast 实例` |
| `Toast.info` | 显示普通轻提示 | _options \| string_ | `toast 实例` |
| `Toast.warning` | 显示警告轻提示 | _options \| string_ | `toast 实例` |
| `Toast.error` | 显示错误轻提示 | _options \| string_ | `toast 实例` |
| `Toast.loading` | 显示加载轻提示 | _options \| string_ | `toast 实例` |
| `Toast.clear` | 关闭轻提示 | _-_ | `-` |
| `Toast.allowMultiple` | 是否允许多例模式 | _boolean_ | `-` |
| `Toast.setDefaultOptions` | 设置默认的选项配置 | _options_ | `-` |
| `Toast.resetDefaultOptions` | 重置默认的选项配置 | _-_ | `-` |

### Toast Options

#### 函数式调用时传入的选项

| 参数              | 说明                                                      | 类型 | 默认值            |
|-----------------|---------------------------------------------------------| -------- |----------------|
| `type`          | `Toast` 类型，可选值为 `success warning info error loading` | _string_ | `-`            |
| `position`      | `Toast` 位置，可选值为 `top center bottom`                  | _string_ | `top`          |
| `duration`      | 显示时长(当 `type` 属性为 `loading` 时，需要手动关闭)                   | _number_ | `3000`         |
| `content`       | 自定义内容                                                   | _string_ | `-`            |
| `contentClass`  | 自定义内容的类名                                                | _string_ | `-`            |
| `vertical`      | 是否启用竖直排列方式                                              | _boolean_ | `false`        |
| `loadingName`   | LoadingIcon(见 `Icon` 组件)                               | _string_ | `circle`       |
| `loadingSize`   | LoadingIcon大小(见 `Icon` 组件)                               | _string_ | `normal`       |
| `loadingColor`  | LoadingIcon颜色(见 `Icon` 组件)                               | _string_ | `currentColor` |
| `lockScroll`    | 是否禁止滚动穿透                                                | _boolean_  | `false`        |
| `forbidClick`   | 是否禁止穿透点击(当 `type` 属性为 `loading` 时，默认为 `true`)           | _boolean_  | `false`        |
| `onOpen`        | 打开 `Toast` 时触发                                       | _() => void_ | `-`            |
| `onOpened`      | 打开 `Toast` 动画结束时触发                                   | _() => void_ | `-`            |
| `onClose`       | 关闭 `Toast` 时触发                                       | _() => void_ | `-`            |
| `onClosed`      | 关闭 `Toast` 动画结束时触发                                   | _() => void_ | `-`            |

### 样式变量

<!-- 以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制。 -->

| 变量名 | 默认值 |
| --- | --- |
| `--toast-width` | `240px` |
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
