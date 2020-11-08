import React from 'react';

const VideoDetail = ({ videoId, videoTitle }) => {

	return (
		<div className="ui card" style={{ width: 'auto', height: '100%', display: 'flex',flexDirection: 'column' }}>
		  <div style={{ flex: 1 }}>
		    <iframe 
		    	style={{ width: '100%', height: '100%' }}
		    	src={`https://www.youtube.com/embed/${videoId}`}
		    	frameBorder="0" 
		    	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
		    	allowFullScreen
		    	></iframe>
		  </div>
		  <div style={{ padding: '2rem' }}>
		    <h3 className="header">{videoTitle}</h3>
		  </div>
		</div>
	);
}

export default VideoDetail;