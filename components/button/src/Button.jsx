import '../design/style/Button.scss';

import React from 'react';
import classNames from 'classnames';

// Insert one space between two chinese characters automatically.
function insertSpace(child) {
    // if (isString(child) && isTwoCNChar(child)) {
    //     return child.split('').join(' ');
    // }

    // if (isString(child.type) && isTwoCNChar(child.props.children)) {
    //     return React.cloneElement(child, {},
    //         child.props.children.split('').join(' '));
    // }

    return child;
}
const prefix = 'Button--';

export default class Button extends React.Component {
    render() {
        const {
            type, size, onClick, className, children, ...others
        } = this.props;

        const classes = classNames({
            'Button': true,
            [prefix + type]: type,
            [prefix + size]: size,
            [className]: className
        });

        const kids = React.Children.map(children, insertSpace);

        return (
            <button
                {...others}
                className = {classes}
                onClick = {onClick} 
            > 
                {kids} 
            </button>
        )
    }
}

Button.propTypes = {
    type: React.PropTypes.string,
    size: React.PropTypes.string,
    onClick: React.PropTypes.func,
    className: React.PropTypes.string,
};

Button.defaultProps = {
    onClick() {},
};