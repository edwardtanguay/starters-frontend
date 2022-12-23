import './styles/App.scss';
import { NavLink, Routes, Route, Navigate } from 'react-router-dom';
import { PageHome } from './pages/PageHome';
import { PageAbout } from './pages/PageAbout';

function App() {

	return (
		<div className="App">
			<h1>Starters, Templates and Mini-Frameworks</h1>
			<h2>Base projects to get you up-and-coding fast!</h2>
			<nav>
				<NavLink to="/home">Show All</NavLink>
				<NavLink to="/about">About</NavLink>
			</nav>

			<Routes>
				<Route path="/home" element={<PageHome />}>
					<Route path=":idCode" element={null}/>
				</Route>
				<Route path="/about" element={<PageAbout />} />
				<Route
					path="/"
					element={<Navigate to="/home" replace />}
				/>
			</Routes>
		</div>
	);
}

export default App;
