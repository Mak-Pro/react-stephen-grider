import React from 'react';
import VideoItem from '../../components/VideoItem/VideoItem.js';

import './VideosList.module.scss';

const VideosList = ({ videos, selectedVideo }) => {

	const videoItems = videos.map(item => {
		return <VideoItem 
							key={item.id.videoId ? item.id.videoId : new Date()}
							video={item}
							selectedVideo={(id, title) => selectedVideo(id, title)}
					 />;
	});


	return (
		<div className='ui list'>{ videoItems }</div>
	);

}

export default VideosList;