import React from 'react';

import styles from './SeasonDisplay.module.scss';


const seasonConfig = {
	summer: {
		text: 'Lets hit the beach!',
		iconName: 'sun',
	},
	winter: {
		text: 'Brr, it is chilly!',
		iconName: 'snowflake',
	},
}


const getSeason = (lat, month) => {
	if(month > 2 && month < 9) {
		return lat > 0 ? 'summer' : 'winter';
	}
	else {
		return lat < 0 ? 'winter' : 'summer';
	}
}



const SeasonDisplay = (props) => {

	const season = getSeason(props.lat, new Date().getMonth());

	const { text, iconName } = seasonConfig[season];

	return (
		<div className={
			`${styles.season} 
			 ${season === 'summer' ? `${styles.season__summer}` : `${styles.season__winter}`}`}>
			<i className={
				`icon 
				 massive 
				 ${styles.icon_left} ${iconName}
				 ${season === 'summer' ? `${styles.icon_summer}` : `${styles.icon_winter}`}
				`
			}></i>
			<h1 className={styles.season__title}>{text}</h1>
			<i className={
				`icon 
				 massive 
				 ${styles.icon_right} ${iconName}
				 ${season === 'summer' ? `${styles.icon_summer}` : `${styles.icon_winter}`}
				`
			}></i>
		</div>
	);
}

export default SeasonDisplay;