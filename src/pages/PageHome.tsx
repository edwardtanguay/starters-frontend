import { useContext } from 'react';
import { AppContext } from '../appContext';
import { useParams } from 'react-router-dom';
import { Starters } from '../components/Starters';
import { SingleStarter } from '../components/SingleStarter';

export const PageHome = () => {
	const { starters } = useContext(AppContext);
	const { idCode } = useParams();

	return (
		<div className="page pageHome">
			{idCode ? (
				<SingleStarter idCode={idCode} />
			) : (
				<Starters starters={starters} />
			)}
		</div>
	);
};
