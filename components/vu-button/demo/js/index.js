import '../../design/style/index.scss'
import Button from '../../index'
import React from 'react'
import ReactDom from 'react-dom'

let Example = (props) => (
    <div className='example'>
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
    </div>
)

ReactDom.render(<Example/>, document.getElementById('app'));
