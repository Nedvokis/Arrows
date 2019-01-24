import React, { Component } from 'react';

import Header from 'containers/Header/Header';
import ListGroups from 'containers/ListGroups/ListGroups';

import './GroupSearch.scss';


class GroupSearch extends Component {
  handleOnChangeSeatch = (e) => {
    console.log(e.target.value);
  }

  render() {
    return (
      <div className="group-profile">
        <Header />
        <div className="group-search__search">
          <div className="container">
            <input className="group-search__search-input" onChange={this.handleOnChangeSeatch} />
            <button className="group-search__search-btn">Найти</button>
          </div>
        </div>
        <ListGroups />
      </div>
    );
  }
}

export default GroupSearch;
