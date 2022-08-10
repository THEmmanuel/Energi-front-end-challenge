import React from 'react';
import style from './Wallet.module.css';
import Metamask from '../../../assets/metamask.svg'

const Wallet = () => {
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