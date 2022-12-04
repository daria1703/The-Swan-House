import React from "react";
import "../css/login.css";
import axios from "axios";
// import {useHistory} from "react-router-dom";

export default class Login extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			email: " ",
			password: " ",
            isLogged: false
		}
	}

    handleChange = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

    handleSubmit = e => {
		e.preventDefault()
		console.log(this.state)
		axios.post("http://localhost:3000/users/login/", this.state)
        .then(res => alert(res.data.message))

	}


    render() {
        return(
            <div className="login">
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                <input type="text" name="email" value={this.email} onChange={this.handleChange} placeholder="Enter your e-mail"/>
                <input type="password" name="password" value={this.password} placeholder='Your Password' onChange={this.handleChange} />
                <button className="btn btn-primary" onClick={this.handleSubmit}>Login</button>
                or
                <button className="btn btn-primary">Register</button>
                </form>
            </div>
        )
    }

}
