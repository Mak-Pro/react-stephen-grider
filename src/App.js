import React from 'react';


// useState
import Accordion from './components/Accordion.js';
import CounterExercise from './components/Counter(Exercise).js';


// useState, useEffect
import Search from './components/Search.js';



const App = () => {

	const items = [
		{
			id: 1,
			title: 'What is React?',
			content: 'React is a javascript library...',
		},
		{
			id: 2,
			title: 'How do we show content?',
			content: 'We show content ib render method in class components and simply return in functional components',
		},
		{
			id: 3,
			title: 'Why is React useful?',
			content: 'React is a very popular library in the world with the very big community'
		},

	]

	
	return (
		<React.Fragment>
			<Accordion items={items}/>
			<hr />
			<CounterExercise />
			<hr />
			<Search /> 
		</React.Fragment>
	);
  
}

export default App;
