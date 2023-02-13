import { useContext } from 'react';
import { AppContext } from './appContext';
import './styles/App.scss';
import { NavLink, Routes, Route, Navigate } from 'react-router-dom';
import { PageList } from './pages/PageList';
import { PageAbout } from './pages/PageAbout';

function App() {
	const { starters } = useContext(AppContext);

	return (
		<div className="App">
			<h1>Starters, Templates and Frameworks2</h1>
			<h2>Base projects to get you up-and-coding fast</h2>
			<nav>
				<NavLink to="/list">Show All {starters.length}</NavLink>
				<NavLink to="/about">About</NavLink>
			</nav>

			<Routes>
				<Route path="/list" element={<PageList />}>
					<Route path=":idCode" element={null}/>
				</Route>
				<Route path="/about" element={<PageAbout />} />
				<Route
					path="/"
					element={<Navigate to="/list" replace />}
				/>
			</Routes>
		</div>
	);
}

export default App;
