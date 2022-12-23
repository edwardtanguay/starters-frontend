import { IStarter } from '../interfaces';

interface IProps {
	singleStarter: IStarter;
}

export const SingleStarter = ({ singleStarter } : IProps) => {
	return (
		<div className="singleStarter">
			<img src={singleStarter.imageUrl}/>
			<div className="info">
				<div className="title">{singleStarter.title}</div>
				<div className="description">{singleStarter.description}</div>
				<a target="_blank" href={singleStarter.githubUrl}>
					<button>GitHub Repository</button>
				</a>
				<ul className="features">
					{singleStarter.features.map(feature => {
						return (
							<li>{feature}</li>
						)
					})}
				</ul>
			</div>
	</div>	
	);
};