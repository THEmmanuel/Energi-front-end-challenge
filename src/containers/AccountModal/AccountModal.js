import React from 'react';
import style from './AccountModal.module.css';

const AccountModal = props => {
	return (
		<section className={style.AccountModal}>
			<div className={style.AccountModalWrapper}>
				<div className={style.AccountDetails}>
					<div className={style.NetworkInformation}>
						<div className={style.Network}>
							<span className={style.NetworkName}>Energi Network</span>
						</div>

						<div className={style.ConnectionStatus}>
							<div className={style.dot}></div>
							<span className={style.ConnectionText}>
								Connected
							</span>
						</div>
					</div>

					<div className={style.AccountInformation}>
						<div className={style.WalletAddressWrapper}>
							<span>{props.WalletAddress}</span>
						</div>

						<div className={style.WalletActions}>
							<img src="https://img.icons8.com/fluency-systems-regular/48/717477/copy.png" alt="" />

							<img src="https://img.icons8.com/windows/32/717477/export.png"/>
						</div>
					</div>

					<div className={style.AccountBalance}>
						<span className={style.BalanceHeading}>
							Total Balance
						</span>

						<div className={style.Balance}>
							<span className={style.CryptoBalance}>
								{props.Balance}
							</span>

							<span className={style.AccountUSDBalance}>
								{props.USDBalance}
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default AccountModal