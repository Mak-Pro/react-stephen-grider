import React, { Component } from 'react';

class SearchBar extends Component {

	state = {
		term: '',
	}


	// Метод обработки пользовательского ввода
	onInputChange = (e) => {
		this.setState({
			term: e.target.value
		});
	}


	// Отдельный метод
	onFormSubmit = (e) => {
		e.preventDefault();
		this.props.submit(this.state.term);
	}


  render() {
    return (
			<div className="ui segment">
				{/* Вариант без использования метода */}
				{/*<form className="ui form" onSubmit={(e) => this.props.submit(e, this.state.term)}>*/}

				{/* Вариант с отдельным методом*/}
				<form className="ui form" onSubmit={this.onFormSubmit}>
					<div className="ui field">
						<label htmlFor="search">Image Search</label>
						{/* Вариант с отдельным методом*/}
						{/*<input type="text" id="search" value={this.state.term} onChange={this.onInputChange}/>*/}

						{/* Вариант с без использования метода */}
						<input 
							type="text" 
							id="search" 
							value={this.state.term} 
							onChange={(e) => this.setState({ term: e.target.value })}/>
					</div>
				</form>
			</div>
    );
  }
}

export default SearchBar;