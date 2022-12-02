import React from 'react';
import { useNavigate } from 'react-router';
import Header from '../components/Header';

const HomePage = (props) => {
	const { width, isOpen, handleToggle, handleClose } = props;
	let navigate = useNavigate();

	const onClick = () => {
		navigate({ pathname: '/destination' });
	};
	return (
		<div className="page home-page">
			<div className="page-content home-page-content container">
				<Header
					width={width}
					isOpen={isOpen}
					handleToggle={handleToggle}
					handleClose={handleClose}
				/>
				<main className="page-main-content home-page-main-content">
					<div className="hero-section">
						<div className="hero-section-text">
							<h1 className="hero-section-title">So, you want to travel to</h1>
							<h1 className="hero-section-title-emphasis">Space</h1>
							<p className="hero-section-description">
								Let’s face it; if you want to go to space, you might as well
								genuinely go to outer space and not hover kind of on the edge of
								it. Well sit back, and relax because we’ll give you a truly out
								of this world experience!
							</p>
						</div>
						<div className="hero-section-button">
							<button
								type="button"
								className="explore-button"
								onClick={onClick}
							>
								Explore
							</button>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
};

export default HomePage;
