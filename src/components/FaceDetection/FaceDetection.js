import React from'react';
import './FaceDetection.css';

const FaceDetection = ({imageURL, box}) =>{
	return(
		<div className='center ma'>
			<div className='absolute mt2'>
				<img id='inputimage' alt='' src={imageURL} width='500px' height='auto'/>
				<div className='bounding-box' style={{top: box.topLine, right:box.rightLine, bottom:box.bottomLine, left:box.leftLine}}></div>
			</div>
		</div>
	);
}

export default FaceDetection;