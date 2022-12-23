import { IStarter } from '../interfaces';

interface IProps {
	singleStarter: IStarter;
}

export const SingleStarter = ({ singleStarter } : IProps) => {
	return (
		<>
			<h2>single starter: {singleStarter.title}</h2> </>
	);
};