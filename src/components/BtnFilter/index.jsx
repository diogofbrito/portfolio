import React, { useState } from 'react';
import './style.css';

export function BtnFilter() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className='btnFilter'>
			<div className='btn__content'>
				<button onClick={toggleDropdown}>Filter</button>
			</div>
			{isOpen && (
				<div className='dropdown__content'>
					<button>Coding</button>
					<button>Web Design</button>
					<button>Editorial</button>
					<button>Posters</button>
					<button>Visual Identity</button>
					<button>Art Direction</button>
					<button>Video</button>
					<button>Exhibitions</button>
				</div>
			)}
		</div>
	);
}
