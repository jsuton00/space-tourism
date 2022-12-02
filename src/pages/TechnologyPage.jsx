import React, { useState } from 'react';
import data from '../assets/data.json';
import Header from '../components/Header';
import Technology from '../components/Technology';

const TechnologyPage = (props) => {
	const { width } = props;
	const [technology] = useState(data.technology);
	return (
		<div className="page technology-page">
			<div className="page-content technology-page-content container">
				<Header />
				<main className="page-main-content technology-page-main-content">
					<h1 className="technology-page-title">
						<span className="technology-page-title-number">03</span>
						<span className="technology-page-title-text">Space Launch 101</span>
					</h1>
					<div className="crew-carousel-section">
						{technology && <Technology technology={technology} width={width} />}
					</div>
				</main>
			</div>
		</div>
	);
};

export default TechnologyPage;
