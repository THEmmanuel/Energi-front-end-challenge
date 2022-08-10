import React from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Wallet from './pages/Wallet/Wallet'
import NavIcon from './components/NavIcon/NavIcon';
import style from './containers/Nav/Nav.module.css'

// const Nav = () => {
// 	return (

// 	)
// }

const App = () => {
	return (
		<Router>
			<div className="App">
				{/* <Nav /> */}
				<nav className={style.Nav}>
					<Link to='Home'>
						<NavIcon />
					</Link>

					<Link to='Wallet'>
						<NavIcon />
					</Link>
				</nav>

				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route exact path='/home' element={<Home />} />
					<Route exact path='/wallet' element={<Wallet />} />
				</Routes>
			</div >
		</Router>


	)
};

export default App;