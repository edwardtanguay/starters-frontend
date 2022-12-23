import { useState, useEffect } from 'react';
import { createContext } from 'react';
import axios from 'axios';
import {
	IStarter
} from './interfaces';

interface IAppContext {
	starters: IStarter[];
}

interface IAppProvider {
	children: React.ReactNode;
}

const backendUrl = import.meta.env.VITE_BACKEND_URL;

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
	const [starters, setStarters] = useState([]);

	const loadStarters = async () => {
		(async () => {
			const _starters = (await axios.get(`${backendUrl}/starters`)).data;
			setStarters(_starters);
		})();
	};

	useEffect(() => {
		(async () => {
			await loadStarters();
		})();
	}, []);


	return (
		<AppContext.Provider
			value={{
				starters
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
