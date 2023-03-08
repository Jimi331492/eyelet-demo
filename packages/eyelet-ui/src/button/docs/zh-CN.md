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
<zm-button size="small">small</zm-button>
<zm-button size="defalut">defalut</zm-button>
<zm-button size="large">large</zm-button>
```

## API

### 属性

| 参数    | 说明     | 类型                              | 默认值    |
| ------- | -------- | --------------------------------- | --------- |
| `color` | 按钮颜色 | _string_                          | `#286fff` |
| `size`  | 按钮大小 | `'large' \| 'small' \| 'default'` | `default` |

### 事件

| 事件名  | 说明           | 参数           |
| ------- | -------------- | -------------- |
| `click` | 点击按钮时触发 | `event: Event` |

### 插槽

| 插槽名    | 说明     | 参数 |
| --------- | -------- | ---- |
| `default` | 按钮内容 | `-`  |
