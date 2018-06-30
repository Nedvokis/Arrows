import React, { Component } from 'react';
import  classNames from 'classnames';
import './Input.scss';

class Input extends Component{

    render(){

        const {
            disabled,
            isWork,
            label,
            value,
            onChange,
            inputLabelClass,
            inputClass,
            secure,
        } = this.props;

        if(label){
            return(
                <div className='input'>
                    <div className= {classNames('input__label', inputLabelClass)}>
                     {label} 
                    </div>
                    <div className={classNames('input__field', inputClass)}>
                        <input 
                            disabled={disabled || isWork}
                            value={value}
                            onChange={onChange}
                            type={secure ?'password' : 'text'}
                        />
                    </div>
                </div>
            )
        }

        return(
            <div className='input'>
                <div className={classNames('input__field', inputClass)}>
                    <input 
                        disabled={disabled || isWork}
                        value={value}
                        onChange={onChange}
                        type={secure ?'password' : 'text'}                        
                    />
                </div>
            </div>
        );
    }
}

export default Input;