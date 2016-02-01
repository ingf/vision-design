# Button

- category: Components
- chinese: 按钮
- type: 基本

---

按钮用于开始一个即时操作。

## 何时使用

标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。


## API

- 通过设置 Button 的属性来产生不同的按钮样式，推荐顺序为：
`type` -> `size` -> `disabled` -> `onClick`

- 按钮的属性说明如下：

属性 | 类型 | 默认值 | 说明
-----|-----|-----|------
type | string | undefined | 设置按钮类型，可选值为 `primary` `secondary` `inverse` `primary-inverse` `secondary-inverse`
size | string | undefined | 设置按钮大小，可选值为 `small` `large` 
disabled | Bool | false | 设置按钮不可用
onClick | Function | `function() {}` | `click` 事件的 handler

- `<Button>Hello world!</Button>` 最终会被渲染为 `<button>Hello world!</button>`，并且除了上表中的属性，其它属性都会直接传到 `<button></button>`
