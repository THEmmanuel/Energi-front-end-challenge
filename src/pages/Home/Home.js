import React from 'react';
import style from './Home.module.css';
import CoinTable from '../../containers/CoinTable/CoinTable'

const Home = () => {
	return (
		<div className={style.Home}>
			<CoinTable/>
		</div>
	)
}

export default Home;
