import React from "react"
import Nav from "./Nav"
import Title from "./Title"
import Form from "./Form"
import Content from "./Content"

const Home = () => {
	return(
		<div className="whole-wrapper">
			<Title />
			<Nav />
			<Form />
			<Content />
		</div>
	)
}

export default Home
