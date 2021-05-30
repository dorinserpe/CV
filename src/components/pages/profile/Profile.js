import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import ImgProfile from '../../../images/SerpeDorin.jpeg';

export default function Profile() {
	return (
		<div>
			<div className='card'>
				<div className='card-image'>
					<img className='activator' src={ImgProfile} alt='Serpe Dorin' />
				</div>
				<div className='card-content'>
					<span className='card-title activator grey-text text-darken-4'>
						Serpe Dorin
					</span>
				</div>
			</div>
		</div>
	);
}
