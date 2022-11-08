import React from 'react'
import Title from './Title'
import Nav from './Nav'

const News = () => {
	return(
		<div className="whole-wraper">
			<Title />
			<Nav />
			<div className="news-wrapper">
				<div className="news-title-wrapper">
					<h2 className="news-title">News</h2>
				</div>
				<p className="news"><span>Update 1 and plans for the future:</span> I have created the base pages -- and thus the bases for my website; this will be basic information for now. In the future; i hope to have a functional chat application within the site, host an irc server related to the site and its online chat, and to find a way to upload my atari-recoded browser game. This will all be done by me - so timing may vary. Thanks for stopping by.</p>
			</div>
		</div>
	)
}

export default News
