import React, { Component } from 'react';
import Header from '../../containers/Header/Header';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="home__wrapper">
        <Header />
      </div>
    );
  }
}

export default Home;
