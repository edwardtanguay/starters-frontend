import { useState } from 'react';
import { IStarter } from '../interfaces';
import { convertMarkdownToHtml } from '../tools';
import { RepositoryButtons } from './RepositoryButtons';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';

interface IProps {
	singleStarter: IStarter;
}

export const SingleStarter = ({ singleStarter }: IProps) => {
	const [showReadme, setShowReadme] = useState(false);

	return (
		<>
			<Helmet>
				<title>{singleStarter.title}</title>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
				<meta
					property="og:title"
					content="Developer Jobs in Germany"
					data-react-helmet="true"
				/>
				<meta
					property="og:type"
					content="site"
					data-react-helmet="true"
				/>
				<meta
					property="og:description"
					content="Daily developer Jobs in Germany listed with information on skills needed and links to learn these skills"
					data-react-helmet="true"
				/>
				<meta
					property="og:image"
					content="https://jobs.tanguay.eu/images/screenshot-jobsite.png"
					data-react-helmet="true"
				/>
				<meta
					property="og:url"
					content="https://jobs.tanguay.eu"
					data-react-helmet="true"
				/>
			</Helmet>
			<div className="singleStarter">
				<div className="preInfo">
					<img
						src={singleStarter.imageUrl}
						onClick={(e) => {
							if (e.detail === 3) {
								setShowReadme(!showReadme);
							}
						}}
					/>
					{singleStarter.updowngradeItems.length > 0 && (
						<>
							<h3>Downgrade/upgrade</h3>
							<ul>
								{singleStarter.updowngradeItems.map(
									(updowngradeItem, i) => {
										return (
											<li key={i}>
												<NavLink
													to={`/list/${updowngradeItem.idCode}`}
												>
													{updowngradeItem.text}
												</NavLink>
											</li>
										);
									}
								)}
							</ul>
						</>
					)}
				</div>

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
