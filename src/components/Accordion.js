import React from 'react';

const Accordion = ({items}) => {


	const [activeItemId, setActiveItemId] = React.useState(null);


	const onTitleClick = (id) => {
		setActiveItemId(id);
	}

	const renderedItems = items.map(item => {
		return (
			<React.Fragment key={item.id}>
				<div className={["title", activeItemId === item.id ? "active" : null].join(' ')} onClick={() => onTitleClick(item.id)}>
			    <i className="dropdown icon"></i>
			    {item.title}
			  </div>
				<div className={["content", activeItemId === item.id ? "active" : null].join(' ')}>
			    <p className="transition visible">{item.content}</p>
			  </div>
			</React.Fragment>
		);
	});

	return (
		<div className="ui styled accordion" style={{margin: '5rem auto'}}>
			{renderedItems}
		</div>
			
		
	);
}

export default Accordion;