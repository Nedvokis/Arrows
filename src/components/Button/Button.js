import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Button extends Component{
    render(){

        const {
            disable,
            link,
            text,
            isWork,
            classNames,
        } = this.props;

        if(link){
            return(
                <button className={classNames} color="primary" disable={ disable || isWork }>
                    <Link to={link}> {text} </Link>
                </button>
            );
        }

        return(
            <button className={classNames} color="primary" disable={ disable || isWork }>
                {text}
            </button>
        );
    }
}

export default Button;