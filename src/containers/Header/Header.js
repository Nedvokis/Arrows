import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

class Header extends Component {
	render() {
		return (
			<div className="header">
				<div className="header__logo">
					<Link to="/">
						Arrows
					</Link>
				</div>
        <div className="header__nav-bar">
          <div className="header__nav-bar_btn">
            О нас
          </div>
          <div className="header__nav-bar_btn">
            Найти
          </div>
          <div className="header__nav-bar_btn">
            <Link to="/signin">
              Вход
            </Link>
          </div>
        </div>
			</div>
		);
	}
}

export default Header;
