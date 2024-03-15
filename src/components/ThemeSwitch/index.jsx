import React, { useState, useEffect } from 'react';

export const ThemeSwitch = () => {
	const [theme, setTheme] = useState('light');

	const toggleTheme = () => {
		console.log(theme);
		const newTheme = theme === 'light' ? 'dark' : 'light';
		console.log('New Theme:', newTheme);

		setTheme(newTheme);
		localStorage.setItem('theme', newTheme);
	};

	useState(() => {
		const storedTheme = localStorage.getItem('theme');
		if (storedTheme) {
			setTheme(storedTheme);
		}
	}, []);

	useEffect(() => {
		    console.log('Theme Changed:', theme);

		document.documentElement.setAttribute('data-theme', theme);
		if (theme === 'dark') {
			document.body.classList.add('dark-mode');
		} else {
			document.body.classList.remove('dark-mode');
		}
	}, [theme]);

	return <button onClick={toggleTheme}>{theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}</button>;
};
