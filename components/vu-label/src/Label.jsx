import '../design/style/Label.scss';

import React from 'react'
import classnames from 'classnames'
import { render } from 'react-dom'

const prefix = 'Label--';
export default class Label extends React.Component {

    render() {
        const {
            type, className,children, ...others
        } = this.props;

        const classes = classnames({
            'Label': true,
            [prefix + type]: type,
            [className]: className
        });

        return (
            <label
                {...others}
                className = {classes}>
                {children} 
            </label>
        )
    }

}

Label.propTypes = {
    type: React.PropTypes.string,
};

Label.defaultProps = {
    onClick() {},
};
