import React from "react";

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
            <div>
                Name: {this.state.userData.name} <br/>
                Email: {this.state.userData.email}
                <button onClick={this.logout} className="btn btn-primary btn-login">Log out</button>
            </div>
        )
    }
    }

