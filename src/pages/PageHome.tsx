import { useContext } from 'react';
import { AppContext } from '../appContext';
import { useParams } from 'react-router-dom';
import { Starters } from '../components/Starters';

export const PageHome = () => {
	const { starters } = useContext(AppContext);
	const { idCode } = useParams();

	return (
		<div className="page pageHome">
			<Starters starters={starters} />
		</div>
	);
};
