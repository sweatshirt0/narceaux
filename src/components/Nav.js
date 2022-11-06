import React from "react"

const Nav = () => {
	return(
		<div className="nav-wrapper">
			<a className="home" href="/">Home</a>
			<a className="news" href="/news">News</a>
			<a className="contact" href="/contact">Contact</a>
			<a className="games" href="/games">Games</a>
		</div>
	)
}

export default Nav
