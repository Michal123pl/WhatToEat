import React from 'react';
import './Navigation.css';

const Navigation = ({next, previous, to}) => {
	return (
		<div className='Navigation'>
		{((to/20)-1)>0
			?<input
			id='previous' 
			type='button' 
			value='<'
			onClick={previous}
			/>
			:<div></div>
		}
		{to>20
			?<input 
			id='current'
			type='button' 
			value={Math.ceil(to/20)}
			/>
			:(<input 
			id='current'
			type='button' 
			value='1'
			/>)
		}
		
			<input 
			id='next'
			type='button' 
			value='>'
			onClick={next}
			/>

		</div>
	);
}

export default Navigation;