import React from "react";
import './Header.css';
import { Link } from "react-router-dom";

function Header(){
	return (
	<header>
		<ul>
			<li>
				<Link to="/" className="link" > Home </Link>
			</li>
			<li>
				<Link to="/about" className="link"> About </Link>
			</li>
		</ul>
	</header>
	)
}

export default Header