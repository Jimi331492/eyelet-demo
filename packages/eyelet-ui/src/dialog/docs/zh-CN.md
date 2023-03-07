# 弹窗

### 基本使用

```html
<zm-button @click="showDialog">普通弹窗</zm-button>
<zm-dialog mode="center" :visible="visible" @close="handleClose">这是一个普通弹窗</zm-dialog>
```

### 底部升起

```html
<zm-button @click="showDialog">底部弹窗</zm-button>
<zm-dialog mode="bottom" :visible="visible" @close="handleClose">这是一个底部弹窗</zm-dialog>
```

## API

### 属性

| 参数           | 说明                                                                           | 类型                 | 默认值   |
| -------------- | ------------------------------------------------------------------------------ | -------------------- | -------- |
| `mode`         | 弹窗位置                                                                       | `center` \| `bottom` | 'center' |
| `classname`    | 同一般 ReactNode 节点的 classname (挂在弹窗的 body-content 上)                 | string               | ''       |
| `visible`      | 控制弹窗的显示与隐藏                                                           | boolean              | false    |
| `mask`         | 是否展示遮罩                                                                   | boolean              | true     |
| `maskClosable` | 点击遮罩是否能关闭                                                             | boolean              | false    |
| `closable`     | 是否展示关闭按钮                                                               | boolean              | true     |
| `noPadding`    | 取消弹窗(body-content)默认的 padding 除了靠屏幕的一边(可以通过 classname 设置) | boolean              | false    |

### 事件

| 事件名  | 说明                     | 参数           |
| ------- | ------------------------ | -------------- |
| `close` | 点击遮罩或者关闭按钮触发 | `event: Event` |

### 插槽

| 插槽名    | 说明     | 参数 |
| --------- | -------- | ---- |
| `default` | 按钮内容 | `-`  |
