import React from "react";
import style from './NavIcon.module.css';

const NavIcon = props => {
	return (
		<div className={style.NavIcon}>
			<div className={style.IconContainer}>
				<img src={props.TabIcon} alt="" />
				<span className={style.IconText}>
					{props.TabName}
				</span>
			</div>
			<div className={style.ActiveIndicator}></div>
		</div>
	)
}

export default NavIcon