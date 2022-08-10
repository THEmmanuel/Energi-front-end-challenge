import React, { useState, useEffect } from "react";
import style from './CoinTable.module.css';
import axios from 'axios';

const url = 'https://api.energiswap.exchange/v1/assets'

const currencyFormatter = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD',
})

// useEffect(() => {
// 	async function fetchData() {
// 		// You can await here
// 		const response = await MyAPI.getData(someId);
// 		// ...
// 	}
// 	fetchData();
// }, [someId]); // Or [] if effect doesn't need props or state

const CoinTable = () => {

	const [data, setData] = useState({})

	// Fetch data on component mount. Empty dependency array
	useEffect(() => {
		async function fetchCoins() {
			try {
				await axios.get(url)
					.then(res => setData(res.data))
			} catch (error) {
				console.log(error)
			}
		}
		fetchCoins()
	}, [])

	console.log(typeof data)

	return (
		<div className={style.CoinTableWrapper}>
			<table>
				<tr>
					<th>#</th>
					<th>Coin</th>
					<th></th>
					<th>Price</th>
				</tr>

				{Object.values(data).map((value, index) => {
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