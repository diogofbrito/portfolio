import React from 'react';
import { Gallery } from '../../components/Gallery/index';
import './style.css';
import { Link } from 'react-router-dom';

export function Home() {
	return (
		<div>
			<Gallery />
			<div className='home__about'>
				<div className='about__content'>
					<div> Diogo Brito is a graphic designer and creative web developer.</div>
					<div>
						
						<Link className='about__link' to='/portfolio/about'>About</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
