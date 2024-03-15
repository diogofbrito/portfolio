import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../contexts/AppContext';
import './style.css';

export function Gallery() {
	const { intro } = useContext(AppContext);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImageIndex(prevIndex => (prevIndex + 1) % intro.length);
		}, 8000);

		return () => clearInterval(interval);
	}, [intro.length]);

	return (
		<div className='gallery'>
			{intro.map(({ id, title, imageUrl, videoUrl, category }, index) => {
				const isActive = index === currentImageIndex;
				const itemClass = isActive ? 'gallery__item active' : 'gallery__item';

				return (
					<div key={id} className={itemClass}>
						<div className='item__content'>
							{videoUrl ? (
								<video autoPlay muted loop playsInline preload='metadata'>
									<source src={videoUrl} type='video/mp4' />
								</video>
							) : (
								<img src={imageUrl} alt={title} loading='lazy'/>
							)}
						</div>

						<div className='title__intro'>
							<div className='name__proj'>{title}</div>
							<div className='name__type'>{Array.isArray(category) ? category.map((cat, index) => <div key={index}>{cat}</div>) : <div>{category}</div>}</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}
