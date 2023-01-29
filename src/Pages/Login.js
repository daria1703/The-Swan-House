import React from "react";
import "../css/login.css";
import logo from '../img/logo.png';
import bg from '../img/login.png'
import { useState } from "react";
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const { isFetching, error } = useSelector((state) => state.user);

    const handleClick = (e) => {
        e.preventDefault();
        login(dispatch, { email, password });
    };
	
        return(
            <div className="login">
                <img src={bg} alt="background"/>
                <form className="login_form">
                <div className="logo_container">
						<p>The swan house</p>
						<img src={logo} alt="logo" className="logo_register"/>
						<p>The swan house</p>
					</div>
                <h1>Welcom Back!</h1>
                <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter your e-mail"/>
                <input type="password" name="password" placeholder='Your Password' onChange={(e) => setPassword(e.target.value)} />
                <button className="btn btn-primary btn-login" onClick={handleClick} disabled={isFetching}>Login</button>
                {error && <p className="error">Something went wrong...</p>}
                <a href="./resetPassword" className="login-a">Forgot password?</a>
                <p>Haven't got an account? <a href="/personAdd" className="register-a">SIGN UP </a></p>

                </form>
            </div>
        )

}

export default Login
