import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { Home } from './pages/Home/index';
import { About } from './pages/About/index';
import { Projects } from './pages/Projetos/index';
import { ErrorPage } from './pages/ErrorPage/index';
import { List } from './pages/Projetos/List/index';
import { Index } from './pages/Projetos/Index/index';
import { Contacts } from './pages/Contactos/index';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: '/projects',
				element: <Projects />,
				children: [
					{
						index: true,
						element: <List />,
					},
					{
						path: 'index',
						element: <Index />,
					},
				],
			},
			{
				path: '/about',
				element: <About />,
			},
			{
				path: '/contacts',
				element: <Contacts />,
			},
			{
				path: '*',
				element: <ErrorPage />,
			},
		],
	},
]);
