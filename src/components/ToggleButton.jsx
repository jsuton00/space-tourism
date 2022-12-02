import React from 'react';
import { FaBars } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';

const ToggleButton = (props) => {
	const { isOpen, handleToggle, handleClose, width } = props;

	const handleClick = () => {
		if (width > 992) {
			return handleClose();
		}

		return handleToggle();
	};
	return (
		<button
			id="toggle-button"
			name="toggle-button"
			onClick={handleClick}
			className="btn toggle-button"
		>
			<span className="toggle-button-icon">
				{isOpen === true ? <MdClose /> : <FaBars />}
			</span>
		</button>
	);
};

export default ToggleButton;
