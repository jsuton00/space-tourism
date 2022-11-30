import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/shared/logo.svg';
import Navbar from './Navbar';

const Header = () => {
	return (
		<header className="header">
			<div className="header-row">
				<div className="header-brand-section">
					<Link to="/" className="header-brand-link">
						<img
							src={logo}
							alt="Space tourism logo"
							className="header-brand-image"
						/>
					</Link>
				</div>
				<Navbar />
			</div>
		</header>
	);
};

export default Header;
