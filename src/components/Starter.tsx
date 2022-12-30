import { NavLink } from 'react-router-dom';
import { IStarter } from '../interfaces';
import { RepositoryButtons } from './RepositoryButtons';

interface IProps {
	starter: IStarter;
}

export const Starter = ({ starter }: IProps) => {
	return (
		<div className="starter">
			<NavLink to={`/list/${starter.idCode}`}>
				<img src={`/images/starters/${starter.idCode}.png`} />
			</NavLink>
			<div className="info">
				<div className="title">
					{starter.title}
				</div>
				<div className="description">{starter.description}</div>
			</div>
		</div>
	);
};
