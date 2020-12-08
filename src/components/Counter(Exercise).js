import React from 'react';

const CounterExercise = (props) => {

	const [ couner, setCounter ] = React.useState(0);

	const onBUttonClick = () => {
		setCounter(couner + 1);
	}


	return (
		<div className="ui segment container center aligned">
			<h3>{ couner }</h3>
			<button className="ui purple basic button" onClick={onBUttonClick}>Increase Counter</button>
		</div>
	);
}

export default CounterExercise;