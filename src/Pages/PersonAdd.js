import React from 'react';
import axios from 'axios';
import "../css/register.css"
import logo from '../img/logo.png';
import bg from '../img/bg-login_register.png'

export default class PersonAdd extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			name: " ",
			lastName: " ",
			email: " ",
			password: " ",
			reEnteredPassword: " ",
			sex: " ",
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	handleSubmit = e => {
		e.preventDefault()
		console.log(this.state)
		if (this.state.password === this.state.reEnteredPassword) {
			console.log(this.state.password, this.state.reEnteredPassword)
			alert("posted")
			axios
				.post('http://localhost:3000/users/register/', this.state)
				.then(response => {
					console.log(response)
					window.location.href="./login";
				})
				.catch(error => {
					console.log(error)
				})
		} else {
			alert("Invalid password")
		}
	}

	render() {
		return (
			<div className='register'>
				<img src={bg} alt="background" className=".d-none .d-lg-block"/>
				<form onSubmit={this.handleSubmit} className="register_form">
					<div className="logo_container">
						<p>The swan house</p>
						<img src={logo} alt="logo" className="logo_register"/>
						<p>The swan house</p>
					</div>
					<h1>Create An Account</h1>
					<input type="text" name="name" placeholder='Your Name' value={this.name} onChange={this.handleChange} />
					<input type="text" name="lastName" placeholder='Your Last Name' value={this.lastName} onChange={this.handleChange} />
					<input type="text" name="email" value={this.email} placeholder='Your Email' onChange={this.handleChange} />
					{/* <div className="form-check form-check-inline">
						<input className="form-check-input" type="radio" name="sex" id="inlineRadio1" value={this.sex} onChange={this.handleChange} />
						<label className="form-check-label" htmlFor="inlineRadio1">Kobieta</label>
					</div>
					<div className="form-check form-check-inline">
						<input className="form-check-input" type="radio" name="sex" id="inlineRadio2" value={this.sex} onChange={this.handleChange} />
						<label className="form-check-label" htmlFor="inlineRadio2">Mężczyzna</label>
					</div>
					<div className="form-check form-check-inline">
						<input className="form-check-input" type="radio" name="sex" id="inlineRadio3" value={this.sex} onChange={this.handleChange} />
						<label className="form-check-label" htmlFor="inlineRadio3">Wolę nie mówić</label>
					</div> */}
					<input type="password" name="password" value={this.password} placeholder='Your Password' onChange={this.handleChange} />
					<input type="password" name="reEnteredPassword" value={this.reEnteredPassword} placeholder='Re-enter Password' onChange={this.handleChange} />
					<div className="arregment">
						By creating an account, I consent to the <br/>processing  of my personal data in accordance <br/>with the <b>PRIVACY  POLICY</b>
					</div>
					<button type="submit" onChange={this.handleSubmitS} className="btn btn-primary btn-register">Create</button>
					<p>Already have an account? <a href="./login">SIGN IN</a></p>
				</form>
			</div>
		)
	}
}