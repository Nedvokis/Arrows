import React, { Component } from 'react';
import UserInfo from 'components/UserInfo/UserInfo';
import Header from 'containers/Header/Header';
import ListGroups from 'containers/ListGroups/ListGroups';
import './UserPage.scss';

class UserPage extends Component {
  render() {
    return (
      <div className="user-profile">
        <Header />
        <div className="user-profile__content">
          <div className="user-profile__flex-dir">
            <UserInfo />
          </div>
        </div>
      </div>
    );
  }
}

export default UserPage;
