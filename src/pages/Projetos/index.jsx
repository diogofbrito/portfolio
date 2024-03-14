import React, { useContext, useEffect } from 'react';
import { Outlet } from 'react-router';
import { BtnFilter } from '../../components/BtnFilter/index';
import { AppContext } from '../../contexts/AppContext';

export function Projects() {
	const { fetchProj } = useContext(AppContext);

	useEffect(() => {
		fetchProj();
	}, []);

	return (
		<div>
			<BtnFilter />
			<Outlet />
		</div>
	);
}
