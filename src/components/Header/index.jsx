import React, { useState } from 'react';
import './style.css';
import { NavLink, useLocation } from 'react-router-dom';
import { ThemeSwitch } from '../ThemeSwitch/index';
import { ToggleMenuButton } from '../ToggleMenuButton/index';
import { Index } from '../../pages/Projetos/Index/index';

export function Header() {
	const location = useLocation();
	const isProjectsPage = location.pathname.startsWith('/projects');
	const [isIndexOpen, setIsIndexOpen] = useState(false);

	const toggleIndex = () => {
		setIsIndexOpen(!isIndexOpen);
	};

	return (
		<div className='navbar'>
			<div className='navbar__item'>
				<NavLink className='item__flex' to='/'>
					Diogo Brito
				</NavLink>
				<NavLink className='item__flex' to='/projects'>
					Projects
				</NavLink>
				<NavLink className='item__flex' to='/about'>
					About
				</NavLink>
				<NavLink className='item__flex' to='/contacts'>
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
