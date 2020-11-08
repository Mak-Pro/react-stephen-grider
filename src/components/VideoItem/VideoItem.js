import React from 'react';

import styles from './VideoItem.module.scss';

const VideoItem = ({ video, selectedVideo }) => {

	return (
		<div className={['item', `${styles.video__item}`].join(' ')} onClick={() => selectedVideo(video.id.videoId, video.snippet.title)}>
			<img className={["ui image", `${styles.video__item_image}`].join(' ')} src={video.snippet.thumbnails.medium.url} />
			<div className="content">
				<h3 className="header">{video.snippet.title}</h3>
			</div>
		</div>
	);
}

export default VideoItem;