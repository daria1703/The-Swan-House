import React from "react";
import "../css/login.css";
import logo from '../img/logo.png';
import bg from '../img/login.png'

export default class Login extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			email: " ",
			password: " ",
            isLogged: false
		}
        this.handleSubmit = this.handleSubmit.bind(this)
	}

    // handleChange = e => {
	// 	this.setState({ [e.target.name]: e.target.value })
	// }

    handleSubmit = e => {
		e.preventDefault()
		// console.log(this.state)
		// axios.post("http://localhost:3000/users/login/", this.state)
        // .then(res => alert(res.data.message))
        const {email, password} = this.state;
        console.log(email, password);
        fetch("http://localhost:3000/users/login/", {
            method: "POST",
            crossDomain: true,
            headers:{
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify({
                email,
                password
            }),
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data, "login");
            if (data.status === "ok"){
                alert("Login successful");
                window.localStorage.setItem("token", data.data);
                window.localStorage.setItem("loggedIn", true);
                // window.localStorage.setItem("token", data.data);
                window.location.href="./userProfile";
            }
        })
	}


    render() {
        return(
            <div className="login">
                <img src={bg} alt="background"/>
                <form onSubmit={this.handleSubmit} className="login_form">
                <div className="logo_container">
						<p>The swan house</p>
						<img src={logo} alt="logo" className="logo_register"/>
						<p>The swan house</p>
					</div>
                <h1>Welcom Back!</h1>
                <input type="email" name="email" onChange={(e) => this.setState({email: e.target.value})} placeholder="Enter your e-mail"/>
                <input type="password" name="password" placeholder='Your Password' onChange={(e) => this.setState({password: e.target.value})} />
                <button className="btn btn-primary btn-login" onClick={this.handleSubmit}>Login</button>
                <a href="./resetPassword" className="login-a">Forgot password?</a>
                <p>Haven't got an account? <a href="/personAdd" className="register-a">SIGN UP </a></p>

                </form>
            </div>
        )
    }

}
