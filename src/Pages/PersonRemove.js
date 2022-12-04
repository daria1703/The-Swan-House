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

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person ID:
            <input type="text" name="_id" onChange={this.handleChange} />
          </label>
          <button type="submit">Delete</button>
        </form>
      </div>
    )
  }
}