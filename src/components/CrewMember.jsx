import React from 'react';

const CrewMember = (props) => {
	const { name, image, role, bio } = props;
	return (
		<div className="crew">
			<div className="crew-text-section">
				<p className="crew-role">{role}</p>
				<h3 className="crew-name">{name}</h3>
				<p className="crew-bio">{bio}</p>
			</div>
			<div className="crew-image-section">
				<img src={image} alt={name} className="crew-image" />
			</div>
		</div>
	);
};

export default CrewMember;
