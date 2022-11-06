import React from 'react';

const Form = () => {
	return(
		<div className="form-wrapper">
			<form action="#" method="POST">
				<h3 className="form-title">Hello Friend.</h3>
				<label for="username">Username: </label>
				<input type="text" name="username" placeholder="username..." /><br /><br />
				<label for="password">Password: </label>
				<input type="password" name="password" placeholder="password..." />
			</form>
		</div>
		)
}

export default Form
