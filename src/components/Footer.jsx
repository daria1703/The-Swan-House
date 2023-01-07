import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import LocalPostOfficeOutlinedIcon from '@mui/icons-material/LocalPostOfficeOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import "../css/footer.css"

export default function App() {
  return (
    <footer className='text-center text-lg-start '>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom border-top'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='https://www.facebook.com/' className='me-4'>
            <FacebookIcon className="icon_footer"  />
          </a>
          <a href='https://www.instagram.com/' className='me-4'>
            <PinterestIcon className="icon_footer" />
          </a>
          <a href='https://pl.pinterest.com/' className='me-4 '>
            <InstagramIcon className="icon_footer" />
          </a>
        </div>
      </section>

      <section className=''>
        <Container className='text-center text-md-start mt-5'>
          <Row className='mt-3'>
            <Col md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                The Swan House
              </h6>
              <p>
              The Swan House since 2022 we have been creating timeless jewelry thanks to which our customers can be who they want, with whom they want and when they want.
              </p>
            </Col>

            <Col md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Promocje
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Nowości
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Popularne
                </a>
              </p>
            </Col>

            <Col md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='/contact' className='text-reset'>
                  Contact Us
                </a>
              </p>
              <p>
                <a href='/about' className='text-reset'>
                  About Us
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  WishList
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                    Delivery
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                    Privacy Policy
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                    Terms And Conditions
                </a>
              </p>
            </Col>

            <Col md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <FmdGoodOutlinedIcon className="icon_footer me-2" icon='home' />
                New York, NY 10012, US
              </p>
              <p>
                <LocalPostOfficeOutlinedIcon className="icon_footer me-2" icon='envelope' />
                info@swanshop.com
              </p>
              <p>
                <LocalPhoneOutlinedIcon className="icon_footer me-2" icon='phone' /> + 01 234 567 88
              </p>
              <p>
                <LocalPhoneOutlinedIcon className="icon_footer me-2" icon='print'/> + 01 234 567 89
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <div className='text-center p-4 footer'>
        © 2023 Copyright: &nbsp;
        <a className='text-reset fw-bold' href='http://localhost:3001/'>
        The Swan House
        </a>
      </div>
    </footer>
  );
}