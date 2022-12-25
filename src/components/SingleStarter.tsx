import { useState } from 'react';
import { IStarter } from '../interfaces';
import { convertMarkdownToHtml } from '../tools';
import { RepositoryButtons } from './RepositoryButtons';

interface IProps {
	singleStarter: IStarter;
}

export const SingleStarter = ({ singleStarter }: IProps) => {
	const [showReadme, setShowReadme] = useState(false);

	return (
		<>
			<div className="singleStarter">
				<img
					src={singleStarter.imageUrl}
					onClick={(e) => {
						if (e.detail === 3) {
							setShowReadme(!showReadme);
						}
					}}
				/>

				<div className="info">
					<div className="title">{singleStarter.title}</div>
					<div className="description">
						{singleStarter.description}
					</div>
					<RepositoryButtons starter={singleStarter} />
					{!showReadme && (
						<ul className="features">
							{singleStarter.features.map((feature, i) => {
								return (
									<li
										key={i}
										dangerouslySetInnerHTML={{
											__html: convertMarkdownToHtml(
												feature
											),
										}}
									></li>
								);
							})}
						</ul>
					)}
					{showReadme && (
						<div className="readmeArea">
							<h1>README.md</h1>
							<textarea readOnly>
								{singleStarter.readmeText}
							</textarea>
						</div>
					)}
				</div>
			</div>

			{singleStarter.animationUrl && (
				<div className="animationArea">
					<div className="animationTitle">Animation</div>
					<div className="moreInfoArea">
						<img src={singleStarter.animationUrl} />
					</div>
				</div>
			)}
		</>
	);
};
