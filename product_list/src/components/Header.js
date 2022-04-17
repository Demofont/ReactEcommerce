import React from 'react'

function Header() {
	return (
		<nav>
			<div className = "logo"> Rayes. </div>
				<ul>
					<li> Home </li>
					<li> Our products </li>
					<li> About </li>
					<li> Contact</li>
				</ul>
				<div className = "search">
					<i className = "fa fa-search"></i>
					<i className = "faf fa-shopping-basket"></i>
				</div>
		</nav>
	)
}

export default Header;