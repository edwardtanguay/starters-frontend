import { useContext } from 'react';
import { AppContext } from '../appContext';
import { NavLink } from 'react-router-dom';

export const PageHome = () => {
	const { starters } = useContext(AppContext);

	return (
		<div className="page pageHome">
			<div className="starters">
				{starters.map((starter) => {
					return (
						<div className="starter">
							<NavLink to={`/home/${starter.idCode}`}>
								<img src={starter.imageUrl} />
							</NavLink>
							<div className="info">
								<div className="title">{starter.title}</div>
								<div className="description">
									{starter.description}
								</div>
								<a target="_blank" href={starter.githubUrl}>
									<button>GitHub Repository</button>
								</a>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
