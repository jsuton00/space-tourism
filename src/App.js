import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useViewportContext } from './hooks/useViewport';
import CrewPage from './pages/CrewPage';
import DestinationPage from './pages/DestinationPage';
import HomePage from './pages/HomePage';
import TechnologyPage from './pages/TechnologyPage';

const App = () => {
	const [width] = useViewportContext();
	return (
		<>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/destination" element={<DestinationPage />} />
				<Route path="/crew" element={<CrewPage />} />
				<Route path="/technology" element={<TechnologyPage width={width} />} />
			</Routes>
		</>
	);
};

export default App;
