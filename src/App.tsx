import { QueryClient, QueryClientProvider } from 'react-query';
import { RouterProvider } from 'react-router-dom';
import { ReactNotifications } from 'react-notifications-component'
import router from './routes';
import 'react-notifications-component/dist/theme.css'
// import 'animate.css/animate.min.css';

const queryClient = new QueryClient();

const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<ReactNotifications />
			<RouterProvider router={router} />
		</QueryClientProvider>
	)
}

export default App;