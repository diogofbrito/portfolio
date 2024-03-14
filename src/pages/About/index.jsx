import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../contexts/AppContext';
import './style.css';

export function About() {
	const { about, fetchAbout } = useContext(AppContext);
	const { bio, education, skills, clients } = about;

	useEffect(() => {
		fetchAbout();
	}, []);

	return (
		<div id='about' className='about'>
			<div className='container'>
				<div className='about__overlay'>
					<div className='about__grid'>
						
						<div className='grid__item'>
							<h2>{bio}</h2>
							<br />
							<div>
								<h3>Selected clients: {clients}</h3>
							</div>
						</div>

						<div className='grid__item'>
							<h4>
								Education:<br></br>
								{education}
							</h4>
						</div>

						<div className='grid__item'>
							<h3>
								For any further details or work inquiries, please send an email to diogobrito74 [at] gmail.com
								<br />
								<br />
								useful links:
								<br />
								<div>
									<i className='gg-instagram'></i>
									<i className='fa fa-linkedin-square'></i>
									<a href=''>Stand Project</a>
								</div>
							</h3>
							<br />
							<h4>
								<a href='assets/files/Diogo Brito - CV 2023.pdf' download='Diogo Brito resume' type='application/pdf'>
									my resume here
								</a>
								<br />
								<br />
								studio
								<br />
								Avenida General Roçadas 157B
								<br />
								1170-159 Lisbon
							</h4>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
