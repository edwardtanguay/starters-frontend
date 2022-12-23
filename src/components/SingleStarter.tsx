
interface IProps {
	idCode: string;
}

export const SingleStarter = ({ idCode } : IProps) => {
	return (
		<>
			<h2>single starter: {idCode}</h2> </>
	);
};