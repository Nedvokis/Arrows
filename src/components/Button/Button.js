import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Button extends Component{
    render(){

        const {
            disable,
            link,
            text,
            isWork,
        } = this.props;

        console.log(link);

        return(
            <button color="primary" disable={ disable || isWork }>
                <Link to={link}>
                    {text}
                </Link>
            </button>
        );
    }
}

export default Button;