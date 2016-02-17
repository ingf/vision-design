import '../../design/style/index.scss'
import Label from '../../index'
import React from 'react'
import ReactDom from 'react-dom'

let Example = (props) => (
    <div className='example'>
        <Label type="primary">可退票</Label>
        <Label>新年特惠减5元</Label>
        <Label type="secondary">3D眼镜</Label>
    </div>
)

ReactDom.render(<Example/>, document.getElementById('app'));
