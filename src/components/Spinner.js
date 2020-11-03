import React from 'react';

const Spinner = (props) => {
	return (
		<div class="ui segment" style={{ height: '100vh' }}>
		  <div class="ui active dimmer">
		    <div class="ui text loader">Please, select allow</div>
		  </div>
		  <p></p>
		</div>
	);
}

export default Spinner;