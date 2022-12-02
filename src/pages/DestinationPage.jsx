import React, { useState } from 'react';
import Destinations from '../components/Destinations';
import Header from '../components/Header';
import data from '../assets/data.json';

const DestinationPage = (props) => {
	const { width, isOpen, handleToggle, handleClose } = props;
	const [destinations] = useState(data.destinations);
	return (
		<div className="page destination-page">
			<div className="page-content destination-page-content container">
				<Header
					width={width}
					isOpen={isOpen}
					handleToggle={handleToggle}
					handleClose={handleClose}
				/>
				<main className="page-main-content destination-page-main-content">
					<h1 className="destination-page-title">
						<span className="destination-page-title-number">01</span>
						<span className="destination-page-title-text">
							Pick your destination
						</span>
					</h1>
					<div className="destination-tabs-section">
						{destinations && <Destinations destinations={destinations} />}
					</div>
				</main>
			</div>
		</div>
	);
};

export default DestinationPage;
