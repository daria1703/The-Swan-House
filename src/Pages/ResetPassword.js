import React from "react";
import "../css/reset_password.css";
import logo from '../img/logo.png';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

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
            <div className="reset">
                <form className="reset_form" onSubmit={this.handleSubmit}>
                <div className="logo_container">
						<p>The swan house</p>
						<img src={logo} alt="logo" className="logo_reset"/>
						<p>The swan house</p>
					</div>
                <h1 className="h1_reste">Forgot password?</h1>
                <p>No worries, we'll send you reset instruction</p>
                <input type="email" name="email" onChange={(e) => this.setState({email: e.target.value})} placeholder="Enter your e-mail"/>
                <button className="btn btn-primary btn-reset" onClick={this.handleSubmit}>Reset Password</button>
                <a href="/login" className="reset-a"><KeyboardArrowLeftIcon/>Back to <strong>SIGN IN</strong></a>
                </form>
            </div>
        )
    }

}
