import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/users/`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <ul>
        {
          this.state.persons
            .map(person =>
              <li key={person._id}>
                Imię:  {person.name + " "} <br />
                Nazwisko:  {person.lastName + " "} <br />
                Email:  {person.email + " "} <br />
                Płeć {person.sex + " "} <br />
                Hasło: {person.password + " "} <br />
                {/* Powtórzone hasło: {person.reEnteredPassword + " "} <br /> */}
                Id:  {person._id}</li>
            )
        }
      </ul>
    )
  }
}

