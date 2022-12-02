import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useToggle } from './hooks/useToggle';
import { useViewportContext } from './hooks/useViewport';
import CrewPage from './pages/CrewPage';
import DestinationPage from './pages/DestinationPage';
import HomePage from './pages/HomePage';
import TechnologyPage from './pages/TechnologyPage';

const App = () => {
	const [width] = useViewportContext();
	const [isOpen, handleToggle, handleClose] = useToggle();
	return (
		<>
			<Routes>
				<Route
					path="/"
					element={
						<HomePage
							width={width}
							isOpen={isOpen}
							handleToggle={handleToggle}
							handleClose={handleClose}
						/>
					}
				/>
				<Route
					path="/destination"
					element={
						<DestinationPage
							width={width}
							isOpen={isOpen}
							handleToggle={handleToggle}
							handleClose={handleClose}
						/>
					}
				/>
				<Route
					path="/crew"
					element={
						<CrewPage
							width={width}
							isOpen={isOpen}
							handleToggle={handleToggle}
							handleClose={handleClose}
						/>
					}
				/>
				<Route
					path="/technology"
					element={
						<TechnologyPage
							width={width}
							isOpen={isOpen}
							handleToggle={handleToggle}
							handleClose={handleClose}
						/>
					}
				/>
			</Routes>
		</>
	);
};

export default App;
