import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './components/Header/index';
import { AppProvider } from './contexts/AppContext';

function App() {
	return (
		<div>
			<AppProvider>
				<Header />
				<div className='main'>
					<Outlet />
				</div>
			</AppProvider>
		</div>
	);
}

export default App;
