import { IStarter } from '../interfaces';
import { convertMarkdownToHtml } from '../tools';

interface IProps {
	singleStarter: IStarter;
}

export const SingleStarter = ({ singleStarter }: IProps) => {
	return (
		<div className="singleStarter">
			<img src={singleStarter.imageUrl} />
			<div className="info">
				<div className="title">{singleStarter.title}</div>
				<div className="description">{singleStarter.description}</div>
				<a target="_blank" href={singleStarter.githubUrl}>
					<button>GitHub Repository</button>
				</a>
				<ul className="features">
					{singleStarter.features.map((feature, i) => {
						return <li key={i} dangerouslySetInnerHTML={{__html: convertMarkdownToHtml(feature)}}></li>;
					})}
				</ul>
			</div>
		</div>
	);
};
