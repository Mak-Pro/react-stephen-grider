import React from 'react';

const ImagesList = (props) => {

	const { list } = props;

	const listOfImages = list.map((url, index) => {
		return <img key={index} src={url} alt="picture" style={{ width: 'calc(50% - 1.5rem)', marginBottom: '3rem' }}/>
	});

	return (
		<div style={{ 
			display: 'flex', 
			justifyContent: 'space-between',
			alignItems: 'flex-start', 
			flexWrap: 'wrap' }}>
			{listOfImages}
		</div>
	);
}

export default ImagesList;