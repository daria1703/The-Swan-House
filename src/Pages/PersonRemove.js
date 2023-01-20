import React from 'react';
import axios from 'axios';

export default class PersonRemove extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      _id: " ",
    }
  }

  handleChange = event => {
    this.setState({ _id: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    axios.delete(`http://localhost:3000/users/${this.state._id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  logout=()=>{
    window.localStorage.clear();
    window.location.href="./";
}

  render() {
    return (
      <div className="profile_container">
        <h1 className="title">Are You Sure?</h1>
        <p>To delete your account, please enter your ID <br/> (you will find it on your account) </p>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person ID: 
            <input className="delete_input" type="text" name="_id" onChange={this.handleChange} />
          </label>
          <br/>
          <button onClick={this.logout} className="btn primary-btn delete_button" type="submit">Delete</button>
        </form>
      </div>
    )
  }
}