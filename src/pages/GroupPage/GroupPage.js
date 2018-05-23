import React, { Component } from 'react';
import Header from 'containers/Header/Header';
import './GroupPage.scss';

class GroupPage extends Component {
  render() {
    return (
      <div className="group-profile">
        <Header />
        <div className="group-profile__content">
          <div className="group-profile__flex-dir">
            <div className="group-profile__title">
                HTML 5 и его полезности
            </div>
            <div className="group-profile__descripteon">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GroupPage;
