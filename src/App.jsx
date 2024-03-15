import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './components/Header/index';
import { AppProvider } from './contexts/AppContext';
import './index.css';
import './assets/font/stylesheet.css';

function App() {
	return (
			<AppProvider>
				<Header />
				<Outlet />
			</AppProvider>
	);
}

export default App;
