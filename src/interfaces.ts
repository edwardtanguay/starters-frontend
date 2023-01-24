export interface IStarter {
	id: number;
	idCode: string;
	title: string;
	description: string;
	featureMarkdown: string;
	githubUrl: string;
	githubUrl2: string;
	imageUrl: string;
	readmeText: string;
	isFullStack: boolean;
	updowngradeItems: IUpdowngradeItem[];
	demoUrl: string;
	learningMaterialItems: ILearningMaterialItem[];
	todoItems: string[];
	hasAnimation: boolean;
	externalForkItems: IExternalHookItem[]
}

export interface IUpdowngradeItem {
	text: string;
	idCode: string;
};

export interface ILearningMaterialItem {
	title: string;
	url: string;
}

export interface IExternalHookItem {
	title: string;
	url: string;
}