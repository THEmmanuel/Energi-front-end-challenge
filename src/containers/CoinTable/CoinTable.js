import React, { useState, useEffect } from "react";
import style from './CoinTable.module.css';
import axios from 'axios';

const url = 'https://api.energiswap.exchange/v1/assets'

const CoinTable = () => {

	const [data, setData] = useState({})

	// Fetch data on component mount. Empty dependency array
	useEffect(async () => {
		try {
			await axios.get(url)
				.then(res => setData(res.data))
		} catch (error) {
			console.log(error)
		}
	}, [])

	console.log(typeof data)

	return (
		<div className={style.CoinTableWrapper}>
			{/* <div className={style.CoinTableHeading}>
				<span>#</span>
				<span>Coin</span>
				<span>Price</span>
			</div>

			<div className={style.CoinTableContent}>
				<Coin />
			</div> */}
			<table>
				<tr>
					<th>#</th>
					<th>Coin</th>
					<th></th>
					<th>Price</th>
				</tr>

				{Object.values(data).map((value, index) => {
					return (
						<tr>
							<td>{index + 1}</td>
							<td>{value.name}</td>
							<td>{value.symbol}</td>
							<td>{value.last_price}</td>
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