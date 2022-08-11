import React, { useState } from "react";
import style from './NavIcon.module.css';

const NavIcon = props => {
	const [activeRoute, setActiveRoute] = useState(false);

	return (
		<div
			className={style.NavIcon} onClick={
				() => {
					setActiveRoute(true)
				}
			}>
			<div className={style.IconContainer}>
				<img src={props.TabIcon} alt="" />
				<span className={style.IconText}>
					{props.TabName}
				</span>
			</div>
			{
				activeRoute ?
					<div className={style.ActiveIndicator}></div> :
					<div></div>
			}
		</div>
	)
}

export default NavIcon