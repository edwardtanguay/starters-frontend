import { NavLink } from 'react-router-dom';
import { IStarter } from '../interfaces';
import { RepositoryButtons } from './RepositoryButtons';

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
				<div className="title">{starter.title}<span className="smartphone-only">{starter.description}</span></div>
				<div className="description">{starter.description}</div>
				<RepositoryButtons starter={starter}/>
			</div>
		</div>
	);
};
