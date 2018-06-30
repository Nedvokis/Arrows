import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from 'containers/Header/Header';
import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import './SignUp.scss';

class SignUp extends Component{
  render(){
      return(
        <div className="sign-in">
            <Header />
            <div className="container sign-in__container">
              <div className="sign-in__form">
                <Input inputClass="sign-in__input" label="Ваш логин:" />
                <Input inputClass="sign-in__input" label="Ваш email:" />
                <Input inputClass="sign-in__input" label="Ваш пароль:" secure={true} />
                <Input inputClass="sign-in__input" label="Подтвердите пароль:" secure={true} />
                <Button className="btn btn-primary sign-in__confirm" text="Зарегестрироватся" />
                <div className="sign-in__or">
                  или
                </div>
                <div className="sign-in__registration">
                  <Link to="/signin">
                    Войти
                  </Link>
                </div>
              </div>
            </div>
        </div>
      );
  }
}

export default SignUp;