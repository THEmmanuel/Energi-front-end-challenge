import React, { useState, useEffect } from 'react';
import style from './Wallet.module.css';
import Metamask from '../../../assets/metamask.svg'

const Wallet = () => {
	const [hasMetamask, setHasMetamask] = useState(true);
	const [accountAddress, setAccountAddress] = useState('')
	const [accountBalance, setAccountBalance] = useState('')
	const [isConnected, setIsConnected] = useState('')


	// Destructure the Ethereum object from the window object
	useEffect(() => {
		const { ethereum } = window;
		const checkMetamaskHandler = async () => {
			!ethereum ? setHasMetamask(false) : setHasMetamask(true)
		};
		checkMetamaskHandler()
	}, [])

	const connectWalletHandler = async () => {

	}

	return (
		<div className={style.Wallet}>
			<div className={style.WalletWrapper}>
				<img src={Metamask} alt="" className={style.MetamaskImage} />
				<button className={style.ConnectButton}>
					Connect Wallet
				</button>

			</div>
		</div>
	)
}

export default Wallet;