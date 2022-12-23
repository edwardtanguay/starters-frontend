import { useContext } from 'react';
import { AppContext } from '../appContext';
import { useParams } from 'react-router-dom';
import { Starters } from '../components/Starters';
import { SingleStarter } from '../components/SingleStarter';

export const PageHome = () => {
	const { starters } = useContext(AppContext);
	const { idCode } = useParams();
	const singleStarter = starters.find((m) => m.idCode === idCode);

	return (
		<div className="page pageHome">
			{idCode ? (
				<>
					{singleStarter !== undefined && (
						<SingleStarter singleStarter={singleStarter} />
					)}
				</>
			) : (
				<Starters starters={starters} />
			)}
		</div>
	);
};
