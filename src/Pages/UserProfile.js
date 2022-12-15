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
        })
	}
    render(){
        return(
            <div>
                Name: {this.state.userData.name} <br/>
                Email: {this.state.userData.email}
            </div>
        )
    }
    }

