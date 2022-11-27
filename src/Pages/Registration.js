import { Component } from 'react'
import React from 'react'

export default class Registration extends Component {
    constructor(props){
        super(props);
        this.state = {
            first_name: "",
            last_name: "",
            email: "",
            password: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        const {first_name, last_name, email, password} = this.state;
        console.log(first_name, last_name, email, password);

        fetch("http://localhost:3000/register",{
            method:"POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                first_name,
                last_name,
                email,
                password
            }),
        }).then((res) => res.json())
        .then((data) =>{
            console.log(data,"userRegister");
        });
    }

render(){
    return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <h3>Sign up</h3>
                <div className='mb-3'>
                    <label>First name</label>
                    <input
                        // value={name}
                        onChange={e => this.setState({first_name: e.target.value})}
                        type="text"
                        placeholder="First name"
                    />
                </div>
                <br />
                <div className='mb-3'>
                    <label>Last name</label>
                    <input
                    // value={email}
                    onChange={e => this.setState({last_name: e.target.value})}
                    type="text"
                    placeholder="Last name"
                />
                </div>
                <br />
                <div className='mb-3'>
                    <label>Email</label>
                    <input
                    // value={email}
                    onChange={e => this.setState({email:e.target.value})}
                    type="text"
                    placeholder="Enter your email"
                />
                </div>
                <br />
                <div className='mb-3'>
                    <label>Password</label>
                    <input
                    // value={password}
                    onChange={e => this.setState({password:e.target.value})}
                    type="password"
                    placeholder="Password"
                />
                </div>
                <br />
                <input type='submit' value="Sign up" className='btn btn-primary' />
            </form>
        </div>
    )}
}


