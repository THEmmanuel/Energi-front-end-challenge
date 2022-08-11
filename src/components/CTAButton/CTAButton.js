import React from 'react';
import style from './CTAButton.module.css';

const CTAButton = props => {
	return (
		<button
			className={style.ConnectButton}
			onClick={props.ButtonClick}>
			{props.ButtonText}
		</button>
	)
}

export default CTAButton;