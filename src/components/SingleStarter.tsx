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
						<div className="updowngradeItemsArea">
							<h3>Add/remove features</h3>
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
						</div>
					)}

					{singleStarter.demoUrl.trim() !== '' && (
						<div className="demoUrlArea">
							<h3>Live demo</h3>
							<ul>
								<li>
									<a
										target="_blank"
										href={singleStarter.demoUrl}
									>
										{singleStarter.demoUrl}
									</a>
								</li>
							</ul>
						</div>
					)}

					{singleStarter.learningMaterialItems.length > 0 && (
						<div className="learningMaterialArea">
							<h3>Learning material</h3>
							<ul>
								{singleStarter.learningMaterialItems.map(
									(learningMaterialItem, i) => {
										return (
											<li key={i}>
												<a
													target="_blank"
													href={
														learningMaterialItem.url
													}
												>
													{learningMaterialItem.title}
												</a>
											</li>
										);
									}
								)}
							</ul>
						</div>
					)}

					{singleStarter.todoItems.length > 0 && (
						<div className="todoItemArea">
							<h3>Todo</h3>
							<ul>
								{singleStarter.todoItems.map((todoItem, i) => {
									return <li key={i}>{todoItem}</li>;
								})}
							</ul>
						</div>
					)}
				</div>

				<div className="info">
					<div className="title">{singleStarter.title}</div>
					<div className="description">
						{singleStarter.description}
					</div>
					<RepositoryButtons starter={singleStarter} />
					{!showReadme && (
						<div className="features"
							dangerouslySetInnerHTML={{
								__html: convertMarkdownToHtml(
									singleStarter.featureMarkdown
								),
							}}
						></div>
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
