import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown, Container, Form, Button, Row, Col } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from '../Pages/Home';
import Shop from '../Pages/Shop';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import ErrorPage from '../Pages/ErrorPage';
import Cart from '../Pages/Cart'
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from '../Pages/Product';
import PersonList from '../Pages/PersonList';
import PersonAdd from '../Pages/PersonAdd';
import PersonRemove from '../Pages/PersonRemove';
// import PersonUpdate from './Pages/PersonUpdate'
import Login from '../Pages/Login';
import Payment from "../Pages/Payment"
import UserProfile from '../Pages/UserProfile';
import ResetPassword from '../Pages/ResetPassword';
import logo from '../img/logo.png';
import bascet from '../img/koszyk.png';
import heart from '../img/heart.png';
import user from '../img/user.png';
import "../css/navbar.css";
import search from "../img/search.png"
// import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import Badge from '@mui/material/Badge';


export default class NavbarComp extends Component {
  render() {
    
    return (
      <Router>
        <Navbar  expand="lg">
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
                    className="searcher"
                    aria-label="Search"
                  />
                  <Button className="button_search"><img
                    alt="user"
                    src={search}
                    width="20"
                    height="20"
                    className="d-inline-block align-center"
                  /></Button>
                  
                </Form>
              </Col>
              <Col lg={2} className="nav_ico .d-sm-none .d-md-nome">
                <Navbar.Brand href="/">
                  <img
                    alt="user"
                    src={user}
                    width="35"
                    height="35"
                    className="d-inline-block align-center"
                  />
                </Navbar.Brand>
                <Navbar.Brand href="/">
                {/* <Badge className="badge_search">
                <img
                    alt="bascet"
                    src={bascet}
                    width="23"
                    height="25"
                    padding-bottom="3px"
                    className="d-inline-block align-center"
                  />
                  4
                </Badge>
                    <span className="visually-hidden">unread messages</span> */}
                    <Badge badgeContent={4} color="primary">
                      {/* <ShoppingBagOutlinedIcon color="action" className="shopping-bag"/> */}
                      <img
                    alt="bascet"
                    src={bascet}
                    width="23"
                    height="25"
                    className="d-inline-block align-center"
                  />
                    </Badge>
                </Navbar.Brand>
                <Navbar.Brand href="/">
                  <img
                    alt="heart"
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
                    <Nav.Link as={Link} to={"/products/woman"}>Shop</Nav.Link>
                    <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
                    <Nav.Link as={Link} to={"/contact"}>Contact</Nav.Link>
                    <Nav.Link as={Link} to={"/personList"}>Users</Nav.Link>
                    <Nav.Link as={Link} to={"/personAdd"}>Register</Nav.Link>
                    <Nav.Link as={Link} to={"/login"}>Login</Nav.Link>
                    <Nav.Link as={Link} to={"/payment"}>Payment</Nav.Link>
                    <Nav.Link as={Link} to={"/cart"}>Cart</Nav.Link>
                    <NavDropdown title="Account" id="navbarScrollingDropdown">
                      <NavDropdown.Item as={Link} to={"/userProfile"}>Profile</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to={"/personRemove"}>Remove your account</NavDropdown.Item>
                      {/* <NavDropdown.Item as={Link} to={"/resetPassword"}>Reset your password</NavDropdown.Item> */}
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
          <Route path="/products/:category" element={<Shop />} />
          <Route path="/product/:_id" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/personList" element={<PersonList />} />
          <Route path="/personAdd" element={<PersonAdd />} />
          <Route path="/personRemove" element={<PersonRemove />} />
          <Route path="/login" element={<Login />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/userProfile" element={<UserProfile />} />
          {/* <Route path="/login" element={isLoggedIn == "ture" ? <UserProfile/> : <Login />} /> */}
          <Route path="/resetPassword" element={<ResetPassword />} />
          {/* <Route path="/personUpdate" element={<PersonUpdate />} /> */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>

    )
  }
}
