import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { technologyTabButtons } from '../constants/technologyTabButtons';
import TechnologyItem from './TechnologyItem';

const Technology = (props) => {
	const { technology, width } = props;
	return (
		<Tabs className="technology-tabs">
			<TabList className="technology-tabs-navigation">
				{technologyTabButtons.length > 0 &&
					technologyTabButtons.map((tab) => {
						return (
							<Tab key={tab} className="technology-tabs-navigation-item">
								{tab}
							</Tab>
						);
					})}
			</TabList>
			{technology.length > 0 &&
				technology.map((tech) => {
					return (
						<TabPanel key={tech.name} className="technology-tabs-content">
							<TechnologyItem
								name={tech.name}
								image={
									width > 992 ? tech.images.portrait : tech.images.landscape
								}
								description={tech.description}
							/>
						</TabPanel>
					);
				})}
		</Tabs>
	);
};

export default Technology;
