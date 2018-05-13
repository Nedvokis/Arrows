import React, { Component } from 'react';
import ListGroupItem from '../../components/ListGroupItem/ListGroupItem'
import './ListGroups.css';

class ListGroups extends Component {
  render() {
    return(
      <div className="list-groups">
        <ListGroupItem />
      </div>
    );
  }
}

export default ListGroups;