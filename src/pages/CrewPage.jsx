import React, { useState } from 'react';
import Header from '../components/Header';
import data from '../assets/data.json';
import Crew from '../components/Crew';

const CrewPage = (props) => {
	const { width, isOpen, handleToggle, handleClose } = props;
	const [crew] = useState(data.crew);
	return (
		<div className="page crew-page">
			<div className="page-content crew-page-content container">
				<Header
					width={width}
					isOpen={isOpen}
					handleToggle={handleToggle}
					handleClose={handleClose}
				/>
				<main className="page-main-content crew-page-main-content">
					<h1 className="crew-page-title">
						<span className="crew-page-title-number">02</span>
						<span className="crew-page-title-text">Meet your crew</span>
					</h1>
					<div className="crew-carousel-section">
						{crew && <Crew crew={crew} />}
					</div>
				</main>
			</div>
		</div>
	);
};

export default CrewPage;
