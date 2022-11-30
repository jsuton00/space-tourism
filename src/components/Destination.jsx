import React from 'react';

const Destination = (props) => {
	const { name, image, description, distance, travel } = props;

	return (
		<div className="destination">
			<div className="destination-image-section">
				<img src={image} alt={name} className="destination-image" />
			</div>
			<div className="destination-text-section">
				<h3 className="destination-name">{name}</h3>
				<p className="destination-description">{description}</p>
				<div className="destination-distance-travel">
					<div className="destination-distance">
						<h5>Avg. Distance</h5>
						<p>{distance}</p>
					</div>
					<div className="destination-travel">
						<h5>Est. Travel Time</h5>
						<p>{travel}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Destination;
