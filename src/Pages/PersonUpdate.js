// import React from 'react';
// import axios from 'axios';

////// dopiero do zrobienia i przemyślenia


// export default class PersonUpdate extends React.Component {
//     constructor(props) {
// 		super(props)

// 		this.state = {
//             name: " ",
// 		}
// 	}

// 	handleChange = e => {
// 		this.setState({ [e.target.name]: e.target.value })
// 	}

// 	handleSubmit = e => {
// 		e.preventDefault()
// 		console.log(this.state)
// 		axios
// 			.patch('https://swan-server.herokuapp.com/users/', this.state)
// 			.then(response => {
// 				console.log(response)
// 			})
// 			.catch(error => {
// 				console.log(error)
// 			})
// 	}

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Person Name:
//             <input type="text" name="name" onChange={this.handleChange} />
//           </label>
//           <button type="submit">Add</button>
//         </form>
//       </div>
//     )
//   }
// }