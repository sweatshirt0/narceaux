import React from 'react'
import Title from './Title'
import Nav from './Nav'

const Blog2 = () => {
	return(
		<div className="whole-wrapper">
			<Title />
			<Nav />
			<a className="return" href="/blogs">Return to blogs list.</a>
			<div className="blog-wrapper">
				<h3 className="blog-title">Gloomy and Cozy.</h3>
				<p className="blog-content"><span className="indent">Hello</span> Friend. I&apos;m hoping your day has went well. Today was pretty slow which was nice - but a lot of unexpected stuff happened today; so i don&apos;t feel the greatest. I am going to try to work on something for a bit to try to get lost in something for the time being. I feel like this all too often. - sweatshirt.</p>
			</div>
		</div>
	)
}

export default Blog2
