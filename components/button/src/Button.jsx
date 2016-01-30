import '../design/style/Button.scss';

import React from 'react'
import classnames from 'classnames'
import { render } from 'react-dom'

const prefix = 'Button--';
export default class Button extends React.Component {

    render() {
        const {
            className, children, ...others
        } = this.props;

        const classes = classnames({
            'Button': true,
            [className]: className
        });

        return (
            <div
                {...others}
                className = {classes}>
                {children} 
            </div>
        )
    }

}

Button.propTypes = {
    className: React.PropTypes.string,
};

Button.defaultProps = {
    onClick() {},
};
