import React, { Component } from 'react';
import Header from 'containers/Header/Header';
import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import './SignIn.scss';

class SignIn extends Component{
  render(){
      return(
        <div className="sign-in">
            <Header />
            <div className="sign-in__form">
              <Input />
              <Input />
              <Button />
            </div>
        </div>
      );
  }
}

export default SignIn;