import { IStarter } from '../interfaces';
import { Starter } from './Starter';

interface IProps {
	starters: IStarter[];
}

export const Starters = ({ starters }: IProps) => {
	return (
		<div className="starters">
			{starters.map((starter) => {
				return (
					<Starter starter={starter} />
				);
			})}
		</div>
	);
};
