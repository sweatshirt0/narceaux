import React from 'react'
import Title from './Title'
import Nav from './Nav'

const Games = () => {
	return(
		<div className="whole-wrapper">
			<Title />
			<Nav />
			<div className="games-wrapper">
				<a className="atari-recoded" href="/games">1. Atari -- recoded</a>
			</div>
		</div>
	)
}

export default Games
