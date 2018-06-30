import React, { Component } from 'react';
import ListGroupItem from 'components/ListGroupItem/ListGroupItem'
import './ListGroups.scss';

class ListGroups extends Component {
  render() {
    return(
      <div className="list-groups">
        <div className="container">
          <ListGroupItem />
        </div>
      </div>
    );
  }
}

export default ListGroups;