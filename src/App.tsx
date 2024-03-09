import Routes from './routes';

import GlobalStyle from './styles/global';
import Provider from './store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
	const queryClient = new QueryClient();

	return (
		<Provider>
			<QueryClientProvider client={queryClient}>
				<Routes />
				<GlobalStyle />
			</QueryClientProvider>
		</Provider>
	);
}

export default App;
