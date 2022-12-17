import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, Col, Row, Card, Container, NavDropdown, Nav, Navbar, CardImg } from 'react-bootstrap';
// import Button from "react-bootstrap/Button"
import "../css/home.css"
import slider1 from "../img/slider3_3_3.jpg"
import slider2 from "../img/slider2_2_2.jpg"
import slider3 from "../img/slider4_4_4.jpg"
import delivery from "../img/package_blue.png"
import brand from "../img/blie_brand.png"
import diamont from "../img/blue_diamont.png"

function Home() {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src={slider1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src={slider2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item >
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src={slider3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      
      <Container>
      <Row>
      <Col lg={4} className="insure-block">
          <Card>
            <Card.Body>
              <Card.Link href="#" style={{height:'100'}}> <Card.Img src={diamont} />
                <Card.Title>Highest Quality</Card.Title>
                <Card.Text>
                  We guarantee the highest quality of our products
                </Card.Text>
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} className="insure-block">
          <Card>
            <Card.Body>
              <Card.Link href="#" style={{height:'100'}}> <Card.Img src={delivery} />
                <Card.Title>Fast Shipping</Card.Title>
                <Card.Text>
                 Parcel at your home in 24 hour or less!
                </Card.Text>
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} className="insure-block">
          <Card>
            <Card.Body>
              <Card.Link href="#" style={{height:'100'}}> <Card.Img src={brand} />
                <Card.Title>Known Brands</Card.Title>
                <Card.Text>
                  We have well-known and loved brands with us
                </Card.Text>
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      </Container>

    </div>
  )
}

export default Home