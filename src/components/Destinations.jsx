import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Destination from './Destination';

const Destinations = (props) => {
	const { destinations } = props;

	return (
		<Tabs className="destinations-tabs">
			<TabList className="destinations-tabs-navigation">
				{destinations.length > 0 &&
					destinations.map((destination) => {
						return (
							<Tab
								key={destination.name}
								className="destinations-tabs-navigation-item"
							>
								{destination.name}
							</Tab>
						);
					})}
			</TabList>
			{destinations.length > 0 &&
				destinations.map((destination) => {
					return (
						<TabPanel
							key={destination.name}
							className="destination-tabs-content"
						>
							<Destination
								name={destination.name}
								image={destination.images.png}
								description={destination.description}
								distance={destination.distance}
								travel={destination.travel}
							/>
						</TabPanel>
					);
				})}
		</Tabs>
	);
};

export default Destinations;
