import React, { Component } from 'react';

import SearchBar from './SearchBar.js';



class App extends Component {
	constructor(props) {
		super(props);
	}

	state = {
		
	}


	onSearchSubmit = (value) => {
		console.log(value);
	}


	render() {

		return (
			<div className="ui container" style={{ marginTop: '2rem' }}>
				<SearchBar submit={this.onSearchSubmit}/>
			</div>
	  );
	}
  
}

export default App;
