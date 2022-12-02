import React from 'react';
import Navbar from './Navbar';

const NavModal = (props) => {
	const { width, handleClose } = props;
	return (
		<div className="nav-modal container">
			<div className="nav-modal-container">
				<Navbar width={width} handleClose={handleClose} />
			</div>
		</div>
	);
};

export default NavModal;
