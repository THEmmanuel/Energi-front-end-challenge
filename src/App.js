import React from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom';
import style from './App.module.css';
import Home from './pages/Home/Home';
import Wallet from './pages/Wallet/Wallet'
import NavIcon from './components/NavIcon/NavIcon';
import NavStyle from './containers/Nav/Nav.module.css'


const App = () => {
	return (
		<Router>
			<div className={style.App}>
				{/* <Nav /> */}
				<nav className={NavStyle.Nav}>
					<Link to='Home'>
						<NavIcon
							TabIcon='https://img.icons8.com/material-rounded/22/A2ADB8/home.png'
							TabName='Home'
						/>
					</Link>

					<Link to='Wallet'>
						<NavIcon
							TabIcon='https://img.icons8.com/ios-glyphs/22/A2ADB8/coin-wallet.png'
							TabName='Wallet'
						/>
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