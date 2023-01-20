import React from "react";
import user from '../img/userProfile.png'
import { Link } from 'react-router-dom'
import "../css/userProfile.css";
export default class UserProfile extends React.Component{

    constructor(props){
        super(props);
            this.state = {
                userData: " ",
            }
    }

    componentDidMount(){
        fetch("http://localhost:3000/users/userData/", {
            method: "POST",
            crossDomain: true,
            headers:{
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify({
                token:window.localStorage.getItem("token"),
            }),
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data, "userData");
            this.setState({userData: data.data});
            if(data.data == "Token expired"){
                alert("Token expired, please log in again");
                window.localStorage.clear();
                window.location.href="./login";
            }
        })
	}


    logout=()=>{
        window.localStorage.clear();
        window.location.href="./";
    }

    render(){
        return(
            <div className="profile_container">
                <p>
                <img className="user_img" src={user} alt={this.state.userData.name} /><br/>
                <p className="user_name">{this.state.userData.name} {this.state.userData.lastName} <br/><span className="email_user">{this.state.userData.email}</span></p>
             <br/> <strong>Your ID: </strong>{this.state.userData._id} <br/>
                <p className="margin_link"><Link  to={`/resetPassword`}>Forgot Password?</Link></p>
                
                <Link className="margin_link" to={`/personRemove`}>Delete Your Account</Link>
                <br/>
                <button onClick={this.logout} className="btn btn-primary btn-login">Log out</button>
                </p>
            </div>
        )
    }
    }

