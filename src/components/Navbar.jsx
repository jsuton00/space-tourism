import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_ITEM_LINKS } from '../constants/navItemLinks';

const Navbar = (props) => {
	const { width, handleClose } = props;

	const onClick = () => {
		return handleClose();
	};
	return (
		<nav
			className={`header-navbar-section ${
				width > 992 ? '' : 'header-navmenu-section'
			}`}
		>
			{NAV_ITEM_LINKS.length > 0 &&
				NAV_ITEM_LINKS.map((link) => {
					return (
						<Link
							key={link.navItemLinkNumber}
							onClick={onClick}
							to={`/${
								link.navItemLinkText === 'home' ? '' : link.navItemLinkText
							}`}
							className="nav-item-link"
						>
							<div className="nav-item">
								<p className="nav-item-text">
									<span className="nav-item-number">
										{link.navItemLinkNumber}
									</span>
									<span className="nav-item-title">{link.navItemLinkText}</span>
								</p>
							</div>
						</Link>
					);
				})}
		</nav>
	);
};

export default Navbar;
