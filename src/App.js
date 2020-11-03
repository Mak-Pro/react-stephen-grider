import React, { Component, Fragment } from 'react';


import SeasonDisplay from './components/SeasonDisplay/SeasonDisplay.js';
import Spinner from './components/Spinner.js';



class App extends Component {
	// если constructor не используется, не нужно его прописывать
	// constructor(props) {
	// 	super(props);

	// 	// OLD Variant to set state
	// 	// this.state = {
	// 	// 	lat: null,
	// 	// 	long: null,
	// 	// 	errorMessage: '',
	// 	// 	loading: true,
	// 	// }
	// }

	// Modern variant
	state = {
		lat: null,
		long: null,
		errorMessage: '',
		loading: true,
	}

	componentDidMount() {
		navigator.geolocation.getCurrentPosition(
			position => this.setState({
					lat: position.coords.latitude,
					long: position.coords.longitude,
					loading: false,
				}),
			err => this.setState({
					errorMessage: err.message,
					loading: false,
				})
		);
	}


	componentDidUpdate() {
		console.log('App was updated');
	}

	render() {

		return (
			<Fragment>
				{
					this.state.loading ? 
					<Spinner /> : 
					this.state.lat ? 
					<SeasonDisplay lat={this.state.lat} long={this.state.long}/> : 
					<h1 style={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>{this.state.errorMessage}</h1>
				}
			</Fragment>
			
	  );
	}
  
}

export default App;
