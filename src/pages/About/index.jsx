import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../contexts/AppContext';
import './style.css';

export function About() {
	const { about, fetchAbout } = useContext(AppContext);
	const { bio, education, skills, clients, exhibitions } = about;

	useEffect(() => {
		fetchAbout();
	}, []);

	return (
		<div className='container'>
			<div className='about'>
				<div className='about__flex'>
					<div className='bio'>
						<div className='title'>About</div>
						<div>{bio}</div>
					</div>
					<div className='services'>
						<div className='services__flex'>
							<div className='title'>Services</div>
							<ul>{skills && skills.map((skill, index) => <li key={`skill_${index}`}>{skill}</li>)}</ul>
						</div>
						<div className='services__flex'>
							<div className='title'>Clients & Partnership</div>
							<ul>{clients && clients.map((client, index) => <li key={`client_${index}`}>{client}</li>)}</ul>
						</div>
					</div>
					<div className='exhibitions'>
						<div className='title'>Exhibitions</div>
						<div>
							<ul>{exhibitions && exhibitions.map((exhibition, index) => <li key={`exhibition_${index}`}>{exhibition}</li>)}</ul>
						</div>
					</div>
				</div>

				<div className='about__flex'>For any further details or work inquiries, please send an email to diogobrito74 [at] gmail.com</div>
			</div>

			{/* <div className='grid__item'>
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
			 */}
		</div>
	);
}
