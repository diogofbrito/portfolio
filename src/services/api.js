import axios from 'axios';

const api = axios.create({
	baseURL: '/portfolio/data',
});

export async function getProj() {
	const response = await api.get('/mainProjectsData.json');

	/* console.log('PROJ::', response); */

	return response.data;
}

export async function getAbout() {
	const response = await api.get('/aboutData.json');

	/* console.log('ABOUT::', response); */

	return response.data;
}

export async function getIntro() {
	const response = await api.get('/introProjectsData.json');

	/* console.log('INTRO::', response); */

	return response.data;
}
