import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CrewPage from './pages/CrewPage';
import DestinationPage from './pages/DestinationPage';
import HomePage from './pages/HomePage';
import TechnologyPage from './pages/TechnologyPage';

const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/destination" element={<DestinationPage />} />
				<Route path="/crew" element={<CrewPage />} />
				<Route path="/technology" element={<TechnologyPage />} />
			</Routes>
		</>
	);
};

export default App;
