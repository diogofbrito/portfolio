import React, { createContext, useState} from 'react';


export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
	const [isDarkMode, setIsDarkMode] = useState(true);

	const toggleTheme = () => {
		setIsDarkMode(prevMode => !prevMode);
		const root = document.documentElement;
		if (isDarkMode) {
			root.style.setProperty('--background-color', 'var(--background-color-light)');
			root.style.setProperty('--text-color', 'var(--text-color-light)');
		} else {
			root.style.setProperty('--background-color', 'var(--background-color-dark)');
			root.style.setProperty('--text-color', 'var(--text-color-dark)');
		}
	};


	return <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>{children}</ThemeContext.Provider>;
}
 