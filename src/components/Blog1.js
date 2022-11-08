import React from 'react'
import Title from './Title'
import Nav from './Nav'

const Blog1 = () => {
	return(
		<div className="whole-wrapper">
			<Title />
			<Nav />
			<a className="return" href="/blogs">Return back to blogs list.</a>
			<div className="blog-wrapper">
				<h3 className="blog-title">Blog 1 -- Welcome to my cozy little coven on the internet.</h3>
				<p className="blog-content"><span className="indent">Hello</span> there, this is my first react based website that i&apos;ve published on the internet.<br/> There isn&apos;t much here yet; especially since I have been having a bit of trouble uploading my browser game through react. I&apos;ll figure it out at some point. But in the meantime, i think having a little blog to go along as &apos;content&apos; for the site until I have a few more ideas to contribute and to help make this place a bit more interactive. One of my next projects is to work on the chat - that way, you guys can communicate with me, and with each other. But first I will have to make a working login for you guys. This should keep me busy and learning some interesting and useful things. Anyway -- I just officially got paid for the first time at my job with the start up. I&apos;m so excited and motivated to work more - and hopefully i can keep this going for a while. Thats all for me right now - I&apos;ll write to you guys later. - Chef Sweaty.</p>
			</div>
		</div>
	)
}

export default Blog1
