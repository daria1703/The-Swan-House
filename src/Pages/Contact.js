import React from 'react'
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import LocalPostOfficeOutlinedIcon from '@mui/icons-material/LocalPostOfficeOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';

function Contact() {
  return (
    
    <div className="container">
      <h1 className="title_contact">Contact</h1>
      <div className="row">
        <div className="col-lg-4 col-sm-12 conract_card">
          <h2>We Are Here!</h2>
          <FmdGoodOutlinedIcon className="icon_contact"/>
          <p>New York, NY 10012, US</p>
          </div>
          <div className="col-lg-4 col-sm-12 conract_card">
          <h2>Mail Us</h2>
          <LocalPostOfficeOutlinedIcon className="icon_contact"/>
          <p>info@swanshop.com</p>
          </div>
          <div className="col-lg-4 col-sm-12 conract_card">
          <h2>Call Us</h2>
          <LocalPhoneOutlinedIcon className="icon_contact"/>
          <p>+ 01 234 567 88 </p>
          </div>
      </div>
    </div>
  )
}

export default Contact