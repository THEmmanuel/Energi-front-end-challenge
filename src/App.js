import React from 'react';
import './App.css';
import Home from './pages/Home/Home';
import NavIcon from './components/NavIcon/NavIcon';
import style from './containers/Nav/Nav.module.css'

const Nav = () => {
	return (
		<div className={style.Nav}>
			<NavIcon />
			<NavIcon />
		</div>
	)
}


const App = () => {
	return (
		<div className="App">
			<Nav />
			<Home />
		</div>
	)
};

export default App;