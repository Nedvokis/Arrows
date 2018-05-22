import React, { Component } from 'react';
import UserInfo from 'components/UserInfo/UserInfo';
import Header from 'containers/Header/Header';
import ListGroups from 'containers/ListGroups/ListGroups';
import './UserPage.css';

class UserPage extends Component {
  render() {
    return (
      <div className="user-profile">
        <Header />
        <div className="user-profile__content">
          <div className="user-profile__flex-dir">
            <UserInfo />
            <ListGroups />
          </div>
        </div>
      </div>
    );
  }
}

export default UserPage;
