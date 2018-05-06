import React, { Component } from 'react';
import Header from '../../containers/Header/Header';
import ListGroups from '../../containers/ListGroups/ListGroups';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="home__wrapper">
        <Header />
        <div className="home__content">
          <ListGroups />
        </div>
      </div>
    );
  }
}

export default Home;
