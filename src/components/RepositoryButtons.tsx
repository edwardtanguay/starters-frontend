import { IStarter } from "../interfaces";

interface IProps {
	starter: IStarter
}

export const RepositoryButtons = ({ starter }: IProps) => {
	return (
		<>
			{starter.githubUrl2.trim() === '' ? (
				<a target="_blank" href={starter.githubUrl}>
					<button>GitHub Repository</button>
				</a>
			) : (
				<>
					<a target="_blank" href={starter.githubUrl2}>
						<button>Backend Repository</button>
					</a>
					<a target="_blank" href={starter.githubUrl}>
						<button>Frontend Repository</button>
					</a>
				</>
			)}
		</>
	);
};
