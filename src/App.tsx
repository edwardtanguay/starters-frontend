import './styles/App.scss';
import { NavLink, Routes, Route, Navigate } from 'react-router-dom';
import { PageStarters } from './pages/PageStarters';
import { PageAbout } from './pages/PageAbout';

function App() {

	return (
		<div className="App">
			<h1>Starters: Templates and Fameworks</h1>
			<h2>Base projects to get you up-and-coding fast!</h2>
			<nav>
				<NavLink to="/starters">Show All Starters</NavLink>
				<NavLink to="/about">About</NavLink>
			</nav>

			<Routes>
				<Route path="/starters" element={<PageStarters />}>
					<Route path=":idCode" element={null}/>
				</Route>
				<Route path="/about" element={<PageAbout />} />
				<Route
					path="/"
					element={<Navigate to="/starters" replace />}
				/>
			</Routes>
		</div>
	);
}

export default App;
