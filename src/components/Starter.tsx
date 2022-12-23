import { NavLink } from 'react-router-dom';
import { IStarter } from '../interfaces';

interface IProps {
	starter: IStarter;
}

export const Starter = ({ starter }: IProps) => {
	return (
		<div className="starter">
			<NavLink to={`/home/${starter.idCode}`}>
				<img src={starter.imageUrl} />
			</NavLink>
			<div className="info">
				<div className="title">{starter.title}</div>
				<div className="description">{starter.description}</div>
				<a target="_blank" href={starter.githubUrl}>
					<button>GitHub Repository</button>
				</a>
			</div>
		</div>
	);
};
