import React from 'react';
import Button from 'components/Button/Button';
import groupImg from './HTML5_Logo.svg';
import './ListGroupItem.scss';

const ListGroupItem = ({ title }) => (
  <div className="list-groups-item">
    <div className="list-groups-item__img">
      <img src={groupImg} alt="group-icon" />
    </div>
    <div className="list-groups-item__info">
      <div className="list-groups-item__title">
        {title ? title : '404 название группы не найдено'}
      </div>
      <div className="list-groups-item__date">
        34.05.2018 в 14:00
          </div>
      <div className="list-groups-item__description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit...
          </div>
      <div className="list-groups-item__btn-more">
        <Button
          className="btn_medium btn btn-primary"
          link="/group"
          text="Check it."
          disabled={false}
        />
      </div>
    </div>
  </div>
)

export default ListGroupItem;