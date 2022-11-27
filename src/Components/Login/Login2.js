import React from 'react'
import "./login.css"

const Login2 = () => {
  return (
    <div className='login'>
      <h1>Login</h1>
      <input type="text" placeholder='Enter your email'/>
      <input type="text" placeholder='Enter your password'/>
      <div type="button" class="btn btn-primary">Login</div>
      <div>or</div>
      <div type="button" class="btn btn-primary">Register</div>
    </div>
  )
} 

export default Login2