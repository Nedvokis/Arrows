import React, { Component } from 'react';

class Input extends Component{

    render(){

        const {
            disabled, 
            label, 
            isWork, 
            value, 
            onChange,
        } = this.props;

        return(
            <div className='input'>
                { label ? `<div className='input__label'> ${label} </div>` : null}
                <div className="input__fieald">
                    <input 
                        disabled={disabled || isWork}
                        value={value}
                        onChange={onChange}
                    />
                </div>
            </div>
        );
    }
}

export default Input;