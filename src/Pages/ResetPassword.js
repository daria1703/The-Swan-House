import React from "react";
import "../css/login.css";

export default class ResetPassword extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			email: " ",
		}
        this.handleSubmit = this.handleSubmit.bind(this)
	}

    handleSubmit = e => {
		e.preventDefault()
        const { email } = this.state;
        console.log(email);
        fetch("http://localhost:3000/users/forgetPassword", {
            method: "POST",
            crossDomain: true,
            headers:{
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify({
                email
            }),
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data, "ResestPassword");
            alert(data.status);
        })
	}


    render() {
        return(
            <div className="login">
                <form onSubmit={this.handleSubmit}>
                <h1>Reset Password</h1>
                <input type="email" name="email" onChange={(e) => this.setState({email: e.target.value})} placeholder="Enter your e-mail"/>
                <button className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
                <a href="/login">Sign up</a>
                </form>
            </div>
        )
    }

}
