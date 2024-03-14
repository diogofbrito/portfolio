import React, { useState } from 'react';
import './style.css';
import { NavLink, useLocation } from 'react-router-dom';
import { ThemeSwitch } from '../ThemeSwitch/index';
import { ToggleMenuButton } from '../ToggleMenuButton/index';
import { Index } from '../../pages/Projetos/Index/index';

export function Header() {
	const location = useLocation();
	const isProjectsPage = location.pathname.startsWith('/portfolio/projects');
	const [isIndexOpen, setIsIndexOpen] = useState(false);

	const toggleIndex = () => {
		setIsIndexOpen(!isIndexOpen);
	};

	return (
		<div className='navbar'>
			<div className='navbar__item'>
				<NavLink className='item__flex' to='/portfolio/'>
					Diogo Brito
				</NavLink>
				<NavLink className='item__flex' to='/portfolio/projects'>
					Projects
				</NavLink>
				<NavLink className='item__flex' to='/portfolio/about'>
					About
				</NavLink>
				<NavLink className='item__flex' to='/portfolio/contacts'>
					Contacts
				</NavLink>

				{isProjectsPage && (
					<>
						<ToggleMenuButton onClick={toggleIndex} />
						{isIndexOpen && <Index />}
					</>
				)}
				<ThemeSwitch />
			</div>
		</div>
	);
}
