import React from 'react';
import CrewMember from './CrewMember';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Crew = (props) => {
	const { crew } = props;
	return (
		<Carousel showArrows={false} showStatus={false}>
			{crew.length > 0 &&
				crew.map((crew) => {
					return (
						<CrewMember
							key={crew.name}
							name={crew.name}
							image={crew.images.png}
							role={crew.role}
							bio={crew.bio}
						/>
					);
				})}
		</Carousel>
	);
};

export default Crew;
