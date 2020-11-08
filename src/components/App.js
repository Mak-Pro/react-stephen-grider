import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar.js';
import ImagesList from './ImagesList.js';


class App extends Component {
	constructor(props) {
		super(props);
	}

	state = {
		imgURLS: [],
	}


	onSearchSubmit = (value) => {
		axios.get('https://api.unsplash.com/search/photos', {
			params: {
				query: value
			},
			headers: {
				Authorization: 'Client-ID cWHJH5cgfhVzcOrOizwnsPmVge-m9hpEpWQY32do_tc',
			}
		})
		.then(response => {
			let newImgURLS = response.data.results;
			this.setState({
				imgURLS: newImgURLS
			});
		})
		.catch(error => {
			console.log(error);
		});
	}


	render() {

		const URLSList = this.state.imgURLS.map(item => {
			return item.urls.regular;
		});

		return (
			<div className="ui container" style={{ marginTop: '2rem' }}>
				<SearchBar submit={this.onSearchSubmit}/>
				<ImagesList list={URLSList}/>
			</div>
	  );
	}
  
}

export default App;
