import React from 'react';
import axios from 'axios';

const Search = (props) => {

	const [ term, setTerm ] = React.useState('');
	const [ results, setResults ] = React.useState([]);

	const url = 'https://en.wikipedia.org';

	// Execute every time
	/*React.useEffect(() => {
		console.log('Execute every time!');	
	});*/


	// Execute one time only when component rendered!
	/*React.useEffect(() => {
		console.log('Execute one time only when component rendered!');	
	}, []);*/




	React.useEffect(() => {

		const timeoutId = setTimeout(() => {
			axios.get(`${url}/w/api.php`, {
				params: {
					action: 'query',
					list: 'search',
					origin: '*',
					format: 'json',
					srsearch: term
				}
			})
			.then(response => {
				if(term) {
					setResults(response.data.query.search);
				}
			})
			.catch(error => {
				console.log(error.response);
			});
		}, 700);
		
		


		return () => {
			clearTimeout(timeoutId);
		}


	}, [term]);


	const renderedResults = results.map(result => {
		return (
			<div key={result.pageid} className="item">
				<div className="content">
					<div className="header">{ result.title }</div>
					<p dangerouslySetInnerHTML={{ __html: result.snippet }}></p>
				</div>
				<div className="content right floated">
					<a href={`${url}?curid=${result.pageid}`} className="ui button" target="_blank">Go</a>
				</div>
			</div>
		);
	});

	return (
		<div className="ui form container">
			<div className="field">
				<label htmlFor="search">Enter Search Term</label>
				<input 
					type="text" 
					className="input" 
					id="search"
					value={ term }
					onChange={(e) => setTerm(e.target.value)}
				/>
			</div>
			{term ? <div className="ui celled list">
				{ renderedResults }
			</div> : null}
			
		</div>
	);
}

export default Search;