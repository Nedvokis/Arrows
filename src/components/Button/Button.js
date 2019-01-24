import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Button.scss';

class Button extends Component {
    render() {

        const {
            disable,
            link,
            text,
            isWork,
            className,
        } = this.props;

        if (link) {
            return (
                <button className={className} color="primary" disable={disable || isWork}>
                    <Link to={link}> {text} </Link>
                </button>
            );
        }

        return (
            <button className={className} color="primary" disable={disable || isWork}>
                {text}
            </button>
        );
    }
}

export default Button;