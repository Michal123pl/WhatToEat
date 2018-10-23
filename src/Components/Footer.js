import React from 'react';
import './Footer.css';
import donut from './donut.png';


const Footer = () => {
	return (
		<div>
			<img src={donut} alt='donut'/>
			<div className='gridFooter'>
				<div className='author'>
					<p>&copy; Michał Nowotarski</p>
				</div>

				<div className='attribution'>Icons made by <a href="http://www.freepik.com" title="Freepik" >Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer">CC 3.0 BY</a>
					
				</div>
				<div id="edamam-badge" data-color="transparent"></div>

			</div>
		</div>
	);
}

export default Footer;