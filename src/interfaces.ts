export interface IStarter {
	id: number;
	idCode: string;
	title: string;
	description: string;
	featureList: string;
	features: string[];
	githubUrl: string;
	githubUrl2: string;
	imageUrl: string;
	readmeText: string;
	installLines: string[];
	installLines2: string[];
	isFullStack: boolean;
	animationUrl: string;
	updowngradeItems: IUpdowngradeItem[];
	demoUrl: string;
	learningMaterialItems: ILearningMaterialItem[];
}

export interface IUpdowngradeItem {
	text: string;
	idCode: string;
};

export interface ILearningMaterialItem {
	title: string;
	url: string;
}