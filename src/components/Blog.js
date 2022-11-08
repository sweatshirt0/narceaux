import React from 'react'
import Title from './Title'
import Nav from './Nav'
import Blog1 from './Blog1'

const Blog = () => {
	return(
		<div className="whole-wrapper">
			<Title />
			<Nav />
			<div className="blog-list-wrapper">
				<a className="blog" href="/blogs/:blog1">1. Welcome to my new home</a>
			</div>
		</div>
	)
}

export default Blog
