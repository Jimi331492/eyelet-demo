# 按钮

### 基本使用

```html
<zm-button>基本使用</zm-button>
```

### 主题色按钮

```html
<zm-button color="#B00F0F">#B00F0F</zm-button>
<zm-button color="#F35918">#F35918</zm-button>
```

### 按钮大小

```html
<zm-button size="small">小型</zm-button>
<zm-button size="defalut">默认</zm-button>
<zm-button size="large">大型</zm-button>
```

### 块级按钮

```html
<zm-button block>块级按钮</zm-button>
```

## API

### 属性

| 参数    | 说明     | 类型                              | 默认值    |
| ------- | -------- | --------------------------------- | --------- |
| `color` | 按钮颜色 | _string_                          | `#286fff` |
| `size`  | 按钮大小 | `'large' \| 'small' \| 'default'` | `default` |
| `block`  | 块级按钮 | _boolean_ | `false` |

### 事件

| 事件名  | 说明           | 参数           |
| ------- | -------------- | -------------- |
| `click` | 点击按钮时触发 | `event: Event` |

### 插槽

| 插槽名    | 说明     | 参数 |
| --------- | -------- | ---- |
| `default` | 按钮内容 | `-`  |

### 样式变量

<!-- 以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制。 -->

| 变量名 | 默认值 |
| --- | --- |
|`--button-width`| `224px`|
|`--button-height`| `88px`|
|`--button-color`| `#fff`|
|`--button-background`| `#286fff`|
|`--button-sm-width`| `152px`|
|`--button-sm-height`| `64px`|
|`--button-lg-width`| `335px`|
|`--button-lg-height`| `96px`|
|`--button-border-radius`| `16px`|
|`--button-sm-border-radius`| `8px`|
<!-- |`--button-success-background`| `var(--color-success)`|
|`--button-info-background`| `var(--color-info)`|
|`--button-error-background`| `var(--color-danger)`|
|`--button-warning-background`| `var(--color-warning)`| -->
