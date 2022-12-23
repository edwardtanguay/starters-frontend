import { IStarter } from '../interfaces';
import { NavLink} from 'react-router-dom';

interface IProps {
	starters: IStarter[];
}

export const Starters = ({ starters }: IProps) => {
	return (
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
	);
};
