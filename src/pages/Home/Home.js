import React from 'react';
import style from './Home.module.css';
import CoinTable from '../../containers/CoinTable/CoinTable'

const Home = props => {
	return (
		<div className={style.Home}>
			<CoinTable data = {props.data}/>
		</div>
	)
}

export default Home;
