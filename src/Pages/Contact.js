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
          <p><a className="mailto" href="mailto:info@swanshop.com">info@swanshop.com</a></p>
          </div>
          <div className="col-lg-4 col-sm-12 conract_card">
          <h2>Call Us</h2>
          <LocalPhoneOutlinedIcon className="icon_contact"/>
          <p><a className="mailto" href="tel:01 234 567 88">+ 01 234 567 88</a></p>
          </div>
      </div>
      <div className="mapouter" style={{marginTop: 60}}>
    <div className="gmap_canvas">
      <iframe width="100%" height="350" id="gmap_canvas" src="https://maps.google.com/maps?q=ANS&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
    </div>
  </div>
    </div>
  )
}

export default Contact