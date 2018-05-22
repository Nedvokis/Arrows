import { Component } from 'react';

const Input = ({disabled, isWork, value, onChange }) => (
    <input 
        disabled={disabled || isWork}
        value={value}
        onChange={onChange}
        />
);

export default Input;