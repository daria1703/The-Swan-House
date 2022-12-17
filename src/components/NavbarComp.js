import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown, Container, Form, Button, Row, Col } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from '../Pages/Home';
import Shop from '../Pages/Shop';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import ErrorPage from '../Pages/ErrorPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from '../Pages/Product';
import PersonList from '../Pages/PersonList';
import PersonAdd from '../Pages/PersonAdd';
import PersonRemove from '../Pages/PersonRemove';
// import PersonUpdate from './Pages/PersonUpdate'
import Login from '../Pages/Login'
import UserProfile from '../Pages/UserProfile';
import ResetPassword from '../Pages/ResetPassword';
import logo from '../img/logo.png'
import bascet from '../img/koszyk.png'
import heart from '../img/heart.png'
import user from '../img/user.png'
import "../css/navbar.css"


export default class NavbarComp extends Component {
  render() {
    return (
      <Router>
        <Navbar bg="light" expand="lg">
          <Container fluid className="menu">
            <Row>
              <Col lg={6} className="logo">
                <Navbar.Brand href="/">
                  <img
                    alt="logo"
                    src={logo}
                    width="70"
                    height="70"
                    className="d-inline-block align-top"
                  />
                </Navbar.Brand>
              </Col>
              <Col lg={4} className="search">
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Col>
              <Col lg={2} className="nav_ico .d-sm-none .d-md-nome">
                <Navbar.Brand href="/">
                  <img
                    alt="logo"
                    src={user}
                    width="35"
                    height="35"
                    className="d-inline-block align-center"
                  />
                </Navbar.Brand>
                <Navbar.Brand href="/">
                  <img
                    alt="logo"
                    src={bascet}
                    width="25"
                    height="25"
                    padding-bottom="3px"
                    className="d-inline-block align-center"
                  />
                </Navbar.Brand>
                <Navbar.Brand href="/">
                  <img
                    alt="logo"
                    src={heart}
                    width="25"
                    height="25"
                    className="d-inline-block align-center"
                  />
                </Navbar.Brand>
              </Col>
            </Row>

            <Row className="menu_2">
              <Col xl={4}>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className="menu_2">
                  <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                  >
                    <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                    <Nav.Link as={Link} to={"/products"}>Shop</Nav.Link>
                    <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
                    <Nav.Link as={Link} to={"/contact"}>Contact</Nav.Link>
                    <Nav.Link as={Link} to={"/personList"}>Users</Nav.Link>
                    <Nav.Link as={Link} to={"/personAdd"}>Register</Nav.Link>
                    <Nav.Link as={Link} to={"/login"}>Login</Nav.Link>
                    <NavDropdown title="Account" id="navbarScrollingDropdown">
                      <NavDropdown.Item as={Link} to={"/userProfile"}>Profile</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to={"/personRemove"}>Remove your account</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to={"/resetPassword"}>Reset your password</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item as={Link} to={"/"}>
                        Log out
                      </NavDropdown.Item>
                    </NavDropdown>
                    {/* <Nav.Link as={Link} to={"/"}>
                      Link
                    </Nav.Link> */}
                  </Nav>
                </Navbar.Collapse>
              </Col>
            </Row>




          </Container>
        </Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Shop />} />
          <Route path="/product/:_id" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/personList" element={<PersonList />} />
          <Route path="/personAdd" element={<PersonAdd />} />
          <Route path="/personRemove" element={<PersonRemove />} />
          <Route path="/login" element={<Login />} />
          <Route path="/userProfile" element={<UserProfile />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          {/* <Route path="/personUpdate" element={<PersonUpdate />} /> */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>

    )
  }
}
