import { useContext } from 'react';
import { AppContext } from '../appContext'; 

export const PageHome = () => {
	const { starters } = useContext(AppContext);
	
	return (
		<div className="page pageHome">
			<h2>There are {starters.length} starters:</h2>
		</div>
	);
};