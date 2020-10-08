import React from 'react';
import Tilt from 'react-tilt';
import bvs from './bvs.jpg' 
import './Logo.css';
const Logo= () =>{
	return(
		<div className='ma4 mt0'>
			<Tilt className="Tilt br2 shadow-2  " options={{ max : 55 }} style={{ height: 100, width: 200 }} >
	 			<div className="Tilt-inner pa3">
	 				<img  style={{paddingTop:'5px'}}src={bvs} alt='Logo' height='100' width='200' /> </div>
			</Tilt>
		</div>
		);
}
 export default Logo; 	