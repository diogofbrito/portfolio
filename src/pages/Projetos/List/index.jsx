import React, { useContext } from 'react';
import { AppContext } from '../../../contexts/AppContext';
import { ProjectItem } from '../../../components/ProjectItem/index';
import './style.css';

export function List() {
	const { projects } = useContext(AppContext);

	return (
		<div className='projects'>
			<div className='container'>
				<div className='projects__grid'>
					{projects.map(project => (
						<ProjectItem key={project.id} project={project} />
					))}
				</div>
			</div>
		</div>
	);
}
