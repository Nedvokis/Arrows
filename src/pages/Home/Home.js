import React, { Component } from 'react';
import Header from 'containers/Header/Header';
import ListGroups from 'containers/ListGroups/ListGroups';
import './Home.scss';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Header />
        <div className="home__content">
          <div className="home__flex-dir">
            <ListGroups />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
