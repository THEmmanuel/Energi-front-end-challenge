import React, { useState, useEffect } from "react";
import style from './CoinTable.module.css';

const currencyFormatter = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD',
})

const CoinTable = props => {
	const data = props.data

	return (
		<div className={style.CoinTableWrapper}>
			<table>
				<tr>
					<th>#</th>
					<th>Coin</th>
					<th></th>
					<th>Price</th>
				</tr>

				{!data
					? <span>Loading</span>
					: Object.values(data)
						.sort((a, b) => b.last_price - a.last_price)
						.map((value, index) => {
							return (
								<tr className={style.TableContent}>
									<td>{index + 1}</td>
									<td>{value.name}</td>
									<td>{value.symbol}</td>
									<td>
										{currencyFormatter.format(value.last_price)}
									</td>
								</tr>
							)
						}
						)
				}
			</table>
		</div>
	)
}


export default CoinTable;