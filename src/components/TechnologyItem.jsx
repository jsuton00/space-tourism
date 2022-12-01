import React from 'react';

const TechnologyItem = (props) => {
	const { name, image, description } = props;
	return (
		<div className="technology">
			<div className="technology-text-section">
				<p className="technology-subheading">The terminology...</p>
				<h3 className="technology-name">{name}</h3>
				<p className="technology-description">{description}</p>
			</div>
			<div className="technology-image-section">
				<img src={image} alt={name} className="technology-image" />
			</div>
		</div>
	);
};

export default TechnologyItem;
