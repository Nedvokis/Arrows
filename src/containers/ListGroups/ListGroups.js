import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import groupImg from './HTML5_Logo.svg';
import './ListGroups.css';

class ListGroups extends Component {
  render() {
    return(
      <div className="list-groups">
        <div className="list-groups__item">
          <div className="group__img">
            <img src={groupImg} alt="group-icon"/>
          </div>
          <div className="group__info">
            <div className="group__title">
              HTML 5 и его полезности.
            </div>
            <div className="group__date">
              34.05.2018 в 14:00
            </div>
            <div className="group__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit...
            </div>
            <div className="group__btn-more">
              <Button color="primary">
                <Link to="/group">
                  Узнать больше
                </Link>
              </Button>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListGroups;