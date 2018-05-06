import React, { Component } from 'react';
import Link from 'react-router-dom/Link';
import './Header.css';

class Header extends Component {
	render() {
		return (
			<div className="header">
				<div className="header__logo">
					<Link to="/">
						Arrows
					</Link>
				</div>
			</div>
		);
	}
}

export default Header;
