import React, { useContext} from 'react';
import { AppContext } from '../../contexts/AppContext';
import './style.css';
import '../../dark-mode.css';

export function ThemeSwitch() {
	const { isDarkMode, toggleTheme } = useContext(AppContext);

	 const toggleDarkMode = () => {
			toggleTheme();
			document.body.classList.toggle('dark-mode');
		};

	const handleInputChange = event => {
		event.stopPropagation();
		toggleDarkMode();
	};

	return (
		<button className={`item__switch ${isDarkMode ? 'dark' : 'light'}`}>
			<label className='theme__switch' htmlFor='checkbox'>
				<input type='checkbox' id='checkbox' checked={isDarkMode} readOnly onChange={handleInputChange} />
				<div className='slider round'></div>
			</label>
		</button>
	);
}
