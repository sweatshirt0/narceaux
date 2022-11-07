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
				<p className="news">News will go here</p>
			</div>
		</div>
	)
}

export default News
