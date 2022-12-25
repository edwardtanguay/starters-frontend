export const PageAbout = () => {
	return (
		<div className="page pageAbout">
			<img src="images/edward_tanguay.jpg" />
			<div className="info">
				<p className="highlight">
					This site gives you numerous projects that have various technologies installed which work together, so that you can concentrate on the site you want to build instead of setting up all the boilerplate code.<br/><br/>Each site has an explanation of what technologies are included and the README.md file at the repository has step-by-step install instructuctions. 
				</p>
				<hr/>
				<p>
					My name is Edward Tanguay, I create websites that help
					web developers be more effective.
				</p>
				<p>You might also like these:</p>
				<div className="item">
					<a href="https://jobs.tanguay.eu">jobs.tanguay.eu</a> -
					developer jobs in Germany with links to learn required
					skills
				</div>
				<div className="item">
					<a href="https://edwardtanguay.vercel.app/howtos">howtos</a> -
				over 600 howtos with step-by-step instructions, mostly MERN stack	
				</div>
			</div>
		</div>
	);
};
