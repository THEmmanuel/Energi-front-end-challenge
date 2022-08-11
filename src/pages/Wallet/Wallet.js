import React, { useState, useEffect } from 'react';
import style from './Wallet.module.css';
import Metamask from '../../../assets/metamask.svg';
import CTAButton from '../../components/CTAButton/CTAButton';
import AccountModal from '../../containers/AccountModal/AccountModal';
import { ethers } from 'ethers';

const Wallet = () => {
	const [hasMetamask, setHasMetamask] = useState(true);
	const [accountAddress, setAccountAddress] = useState('')
	const [accountBalance, setAccountBalance] = useState('')
	const [isConnected, setIsConnected] = useState(true)

	const { ethereum } = window;
	const provider = new ethers.providers.Web3Provider(window.ethereum);

	// Destructure the Ethereum object from the window object
	useEffect(() => {
		const { ethereum } = window;
		const checkMetamaskHandler = async () => {
			!ethereum ? setHasMetamask(false) : setHasMetamask(true)
		};
		checkMetamaskHandler()
	}, [])

	const connectWalletHandler = async () => {
		try {
			if (!ethereum) {
				sethaveMetamask(false);
			}
			const accounts = await ethereum.request({
				method: 'eth_requestAccounts',
			});
			let balance = await provider.getBalance(accounts[0]);
			let bal = ethers.utils.formatEther(balance);
			console.log('connecting wallet')
			setAccountAddress(accounts[0]);
			setAccountBalance(bal);
			setIsConnected(true);
		} catch (error) {
			setIsConnected(false);
			console.log(error)
		}
	}

	return (
		<div className={style.Wallet}>
			{
				!isConnected
					?
					<div className={style.WalletWrapper}>
						<div className={style.WalletContainer}>
							<img src={Metamask} alt="" className={style.MetamaskImage} />
							<span className={style.MetamaskText}>METAMASK</span>
						</div>

						<CTAButton
							ButtonText='Connect Wallet'
							ButtonClick={connectWalletHandler}
						/>
					</div>
					:
					<AccountModal
						WalletAddress={accountAddress}
						Balance={accountBalance}
						USDBalance={accountBalance * 4}
					/>
			}

		</div>
	)
}

export default Wallet;