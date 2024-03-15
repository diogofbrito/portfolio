import React from 'react';

export function MediaItem({ imageUrl, videoUrl, title, category, itemClass }) {
	    const combinedClasses = `${itemClass} project__item`;

	
	return (
		<div className={combinedClasses}>
			<div className='item__content item__gallery'>
				{videoUrl ? (
					<video autoPlay muted loop playsInline preload='metadata'>
						<source src={videoUrl} type='video/mp4' />
					</video>
				) : (
					<img src={imageUrl} alt={title} loading='lazy' />
				)}
			</div>
			<div className='item__id title__intro'>
				<div className='title'>{title}</div>
				<div className='type'>{Array.isArray(category) ? category.map((cat, index) => <div key={index}>{cat}</div>) : <div>{category}</div>}</div>
			</div>
		</div>
	);
}
