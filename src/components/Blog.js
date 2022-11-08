import React from 'react'
import Title from './Title'
import Nav from './Nav'

const Blog = () => {
	return(
		<div className="whole-wrapper">
			<Title />
			<Nav />
			<div className="blog-list-wrapper">
				<a className="blog" href="/blogs/:blog1">1. Welcome to my new home</a><br/>
				<a className="blog" href="/blogs/blog2">2. Gloomy and Cozy.</a>
			</div>
		</div>
	)
}

export default Blog
