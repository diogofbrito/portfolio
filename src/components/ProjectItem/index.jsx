import React from 'react';
import './style.css';

export function ProjectItem({ project }) {
	const { id, title, imageUrl, videoUrl, category } = project;

	return (
		<div key={id} className='project__item'>
			<div className='item__gallery'>
				{videoUrl ? (
					<video autoPlay muted loop playsInline preload='metadata'>
						<source src={videoUrl} type='video/mp4' />
					</video>
				) : (
					<img src={imageUrl} alt={title} />
				)}
			</div>
			<div className='item__id'>
				<div className='title'>{title}</div>
				<div className='type'>{Array.isArray(category) ? category.map((cat, index) => <div key={index}>{cat}</div>) : <div>{category}</div>}</div>
			</div>
		</div>
	);
}
