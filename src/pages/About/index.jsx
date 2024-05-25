import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../contexts/AppContext';
import './style.css';
import { Link } from 'react-router-dom';

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
					<div className='education'>
						<div className='title'>Education</div>
						<div>
							<ul>{education && education.map((edu, index) => <li key={`exhibition_${index}`}>{edu}</li>)}</ul>
						</div>
					</div>
				</div>

				<div className='about__flex fixo'>
					For any further details or work inquiries, please send an email to<br></br> diogobrito74@gmail.com
					<br></br>
					<br></br>
					<Link to='https://github.com/diogofbrito' target='_blank' rel='noopener noreferrer'>
						Github
					</Link>
					<br></br>
					<Link to='https://www.ostand.pt' target='_blank' rel='noopener noreferrer'>
						Stand Project
					</Link>
					<br></br>
					<Link to='https://www.ostand.pt' target='_blank' rel='noopener noreferrer'>
						Instagram
					</Link>
					<br></br>
					<Link to='https://www.linkedin.com/in/diogofcbrito/' target='_blank' rel='noopener noreferrer'>
						LinkedIn
					</Link>
				</div>
			</div>
		</div>
	);
}
