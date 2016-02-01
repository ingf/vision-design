# 基础功能演示

- order: 0

基础功能描述。

---

````jsx
import { Button } from 'antd';

ReactDOM.render(<div>
    <Button type="primary">主按钮</Button>
    <Button>默认按钮</Button>
    <Button type="secondary">次按钮</Button>
    <Button type="primary-inverse">主按钮-空白</Button>
    <Button type="inverse">默认按钮-空白</Button>
    <Button type="secondary-inverse">次按钮-空白</Button>
    <div>
        <Button size="large" disabled>购买</Button>
        <Button type="inverse" size="large" disabled>购买</Button>
    </div>
</div>,
mountNode);
````

<style>
#components-button-demo-basic .ant-btn {
  margin-right: 8px;
  margin-bottom: 12px;
}
</style>
