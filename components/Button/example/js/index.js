import '../../design/style/index.scss'
import Button from '../../index'
import React from 'react'
import ReactDom from 'react-dom'

let Example = (props) => (
    <div className='example'>
        <div>
            <Button type="primary">主按钮</Button>
            <Button>次按钮</Button>
            <Button type="secondary">幽灵按钮</Button>
            <Button type="primary-inverse">虚线按钮</Button>
            <div>
                <Button size="large" disabled>购买</Button>
            </div>
        </div>
    </div>
)

ReactDom.render(<Example/>, document.getElementById('app'));

