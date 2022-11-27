import React, { useState } from 'react'
import "./register.css"
import axios, { Axios } from "axios"

const Register2 = () => {
  const url = "https://swan-server.herokuapp.com/users/"
  const [user, setUser] = useState({
    name: "",
    lastName: "",
    email: "",
    sex: "",
    password: "",
    reEnterPassword: ""
  })

  // const handleChange = e => {
  //   console.log(e.target)
  //   const {name, value} = e.target
  //   setUser({
  //     ...user,
  //     [name]: value
  //   })
  // }

  function submit(e){
    e.preventDefault();
      Axios.post(url,{
        name: user.name,
        lastName: user.lastName,
        email: user.email,
        sex: user.sex,
        password: user.password,
        reEnterPassword: user.reEnterPassword
      })
      .then(res=>{
        console.log(res.user)
      })
  }

  function handle(e){
    const newuser = {...user}
    newuser[e.target.id] = e.target.value
    setUser(newuser)
    console.log(newuser)
  }

  const register = () => {
    const {name, lastName, email, password, sex, reEnterPassword} = user;
    if(name && lastName && email && password && sex && (reEnterPassword === password)){
      // alert("posted")
      axios.post("http://localhost:3001/loginorregistr", user)
      .then(res => console.log(res))
      alert("invalid input")
    }
  }
// jak nie wyjdzie to zastąp wszytkie na onChange={handleChange}
  return (
    <div className='login'>
      <form onSubmit={(e)=> submit(e)}>
      <h1>Register</h1>
      <input type="text" name="name" value={user.name} placeholder='Your Name'  onChange={(e)=>handle(e)}/>
      <input type="text" name="lastName" value={user.lastName} placeholder='Your Last Name' onChange={(e)=>handle(e)} />
      <input type="text" name="email" value={user.email} placeholder='Your Email' onChange={(e)=>handle(e)}/>
      <div className="form-check form-check-inline">
        <input className="form-check-input" type="radio" name="sex" id="inlineRadio1" value={user.sex} onChange={(e)=>handle(e)}/>
        <label className="form-check-label" htmlFor="inlineRadio1">Kobieta</label>
      </div>
      <div className="form-check form-check-inline">
        <input className="form-check-input" type="radio" name="sex" id="inlineRadio2" value={user.sex} onChange={(e)=>handle(e)}/>
        <label className="form-check-label" htmlFor="inlineRadio2">Mężczyzna</label>
      </div>
      <div className="form-check form-check-inline">
        <input className="form-check-input" type="radio" name="sex" id="inlineRadio3" value={user.sex} onChange={(e)=>handle(e)}/>
        <label className="form-check-label" htmlFor="inlineRadio3">Wolę nie mówić</label>
      </div>
      <input type="password" name="password" value={user.password} placeholder='Your Password' onChange={(e)=>handle(e)}/>
      <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder='Re-enter Password' onChange={(e)=>handle(e)}/>
      <div type="button" className="btn btn-primary" onClick={register}>Register</div>
      <div>or</div>
      <div type="button" className="btn btn-primary">Login</div>
      </form>
    </div>
  )
}

export default Register2