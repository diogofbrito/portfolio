export function reducer(state, action) {
	
	const { type, payload } = action;

	switch (type) {
		case 'SET_PROJECTS':
			return { ...state, projects: payload };
		case 'SET_ABOUT':
			return { ...state, about: payload };
		case 'SET_INTRO':
			return { ...state, intro: payload };
		case 'TOGGLE_THEME':
			return { ...state, isDarkMode: !state.isDarkMode };
		default:
			return state;
	}
};

