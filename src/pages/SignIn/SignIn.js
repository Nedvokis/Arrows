import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from 'containers/Header/Header';
import Button from 'components/Button/Button';
import Input from 'components/Input/Input';

import SigninActions, {
  selectName,
  selectPassword,
  selectLoginProgress,
} from 'redux/reduxSignIn';

import './SignIn.scss';

const mapStateToProps = ({ signin }) => ({
  name: selectName(signin),
  password: selectPassword(signin),
  progress: selectLoginProgress(signin),
})

const mapActionsToProps = {
  onChangeName: SigninActions.changeName,
  onChangePassword: SigninActions.changePassword,
  onSendSigninForm: SigninActions.sendSigninForm,
}

class SignIn extends Component {

  handleOnChangeName = (event) => {
    this.props.onChangeName(event.target.value);
  }

  handleOnChangePassword = (event) => {
    this.props.onChangePassword(event.target.value);
  }

  render() {
    const {
      name,
      password,
      progress,
    } = this.props;

    return (
      <div className="sign-in">
        <Header />
        <div className="container sign-in__container">
          <div className="sign-in__form">
            <Input
              inputClass="sign-in__input"
              label="Ваш логин:" value={name}
              onChange={this.handleOnChangeName}
            />
            <Input
              inputClass="sign-in__input"
              label="Ваш пароль:"
              value={password}
              secure={true}
              onChange={this.handleOnChangePassword}
            />
            <Button className="btn btn-primary sign-in__confirm" text="Войти" />
            <div className="sign-in__or">
              или
                </div>
            <div className="sign-in__registration">
              <Link to="/signup">
                Зарегестрироватся
                  </Link>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapActionsToProps)(SignIn);