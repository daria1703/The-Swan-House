import React from 'react'
import { useLocation } from "react-router"
import "../css/success.css";
import bg from '../img/bg_success.png'
import logo from '../img/success_logo.png'
import check from '../img/checkmark-circle-fill.png'
import { Link } from 'react-router-dom'

const Success = () => {

    const location = useLocation()
    console.log(location)

  return (
    <div>
      <h1 className='title_succes'>Success</h1>
      <div className='img_succes_container'>
        <img src={bg} alt="success background" />
        <div className="logo_scuccess">
          <img src={logo} alt="logo" />
        </div>
        <div className="check_scuccess">
          <img src={check} alt="check" />
        </div>
      </div>
      <div className="thank_you">
      <h2>Thank You!</h2>
        <p><strong>Payment done Successfully</strong></p>
        <p>Click below to return to home page</p>
        <p><Link to={`/`} className="btn primary-btn top_button2">HOME</Link></p>
      </div>
    </div>
  )
}

export default Success