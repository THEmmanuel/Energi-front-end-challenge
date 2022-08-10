import React from "react";
import style from './NavIcon.module.css';

const NavIcon = () => {
	return (
		<div className={style.NavIcon}>
			<div className={style.IconContainer}>
				<span>Image</span>
				<span className={style.IconText}>Home</span>
			</div>
			<div className={style.ActiveIndicator}></div>
		</div>
	)
}

export default NavIcon