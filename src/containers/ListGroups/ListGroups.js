import React, { Component } from 'react';
import ListGroupItem from 'components/ListGroupItem/ListGroupItem';
import { LIST_OF_GROUPS } from 'constants/devMeta';
import './ListGroups.scss';

class ListGroups extends Component {
  render() {
    return (
      <div className="list-groups">
        <div className="container">
          {LIST_OF_GROUPS.map(group => (
            <ListGroupItem title={group.title} />
          ))}
        </div>
      </div>
    );
  }
}

export default ListGroups;