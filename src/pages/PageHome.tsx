import { useContext } from 'react';
import { AppContext } from '../appContext';

export const PageHome = () => {
	const { starters } = useContext(AppContext);

	return (
		<div className="page pageHome">
			<div className="starters">
				{starters.map((starter) => {
					return <div className="starter">
						
						<div className="title">{starter.title}</div>
					</div>;
				})}
			</div>
		</div>
	);
};
