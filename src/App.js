import React, { Component } from 'react';
import youtube from './APIs/youtube.js';


import SearchBar from './components/SearchBar/SearchBar.js';
import VideosList from './components/VideosList/VideosList.js';
import VideoDetail from './components/VideoDetail/VideoDetail.js';



class App extends Component {
	constructor(props) {
		super(props);
	}

	state = {
		videos: [],
		selectedVideo: {
			id: null,
			title: '',
		}, 
	}


	onSearchSubmit = (value) => {

		youtube.get('/search', {
			params: {
				q: value,
				key: 'AIzaSyCGz1v0fhRr2bcWBtHCCByrD70X9SE8UAs',
				part: 'snippet',
				type: 'video',
			}
		})
		.then(response => {
			this.setState({
				videos: response.data.items,
			});
		})
		.catch(error => {
			console.log(error.response);
		});
	}


	selectedVideo = (id, title) => {
		const newSelectedVideo = {
			...this.state.selectedVideo,
			id,
			title
		};
		this.setState({ selectedVideo: newSelectedVideo });
	}


	render() {

		return (
			<div className='ui container'>
				<SearchBar onSearchSubmit={this.onSearchSubmit}/>
				<div className='ui grid container'>
					<div className='row'>
						<div className='ui ten wide column segment'>
							{this.state.videos.length ? <VideoDetail 
								videoId={this.state.selectedVideo.id || this.state.videos[0].id.videoId}
								videoTitle={this.state.selectedVideo.title || this.state.videos[0].snippet.title}
							/> : null}
						</div>
						<div className='ui six wide column segment'>
							<VideosList 
								videos={this.state.videos}
								selectedVideo={(id, title) => this.selectedVideo(id, title)}
							/>
						</div>
					</div>
				</div>
			</div>
			
	  );
	}
  
}

export default App;
