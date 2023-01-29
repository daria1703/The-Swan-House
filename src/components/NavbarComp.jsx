import { Navbar, Nav, NavDropdown, Container, Form, Button, Row, Col } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom'
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
import UserProfile from '../Pages/UserProfile';
import ResetPassword from '../Pages/ResetPassword';
import Success from "../Pages/Success";
import logo from '../img/logo.png';
import bascet from '../img/koszyk.png';
import heart from '../img/heart.png';
import userICO from '../img/user.png';
import "../css/navbar.css";
import search from "../img/search.png"
import Badge from '@mui/material/Badge';
import {useSelector} from "react-redux";
import { useState, useEffect, useRef } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import SearchBar from "../components/SearchBar"
import lottie from 'lottie-web'
import WishList from "../Pages/WishList"


const NavbarComp = () => {

  const cart = useSelector(state=>state.user.cart)
  const wish = useSelector(state=>state.user.wish)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const quantity = useSelector(state=>state.user.cart.quantity)
  const wish_quantity = useSelector(state=>state.user.wish.quantity)

  const user = useSelector((state) => state.user.currentUser);

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
                  <SearchBar/>
                  
                </Form>
              </Col>
              <Col lg={2} className="nav_ico .d-sm-none .d-md-nome">
                <Navbar.Brand>
                  <Link to={`/userProfile`}>
                  <img
                    alt="user"
                    src={userICO}
                    width="35"
                    height="35"
                    className="d-inline-block align-center"
                  />
                  </Link>
                </Navbar.Brand>
                <Navbar.Brand>
                
                <Badge badgeContent={quantity} color="primary" onClick={handleShow}>
                      <img
                    alt="bascet"
                    src={bascet}
                    width="23"
                    height="25"
                    className="d-inline-block align-center"
                  />
                  </Badge>

                  <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                      <Offcanvas.Title>Cart</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                      {quantity === 0 ? 
                      <div className="empty_container2">
                        <p>Your cart is empty!</p>
                        
                        <Link className="btn-add-to-cart" to={"/"} >CONTINUE SHOPPING</Link>
                      </div> : 
                      <div className="info3">
                      {cart.products.map(product=>( 
                      <div className="product4">
                         <div className="product_detail1">
                           <img className="image" src={product.img} />
                           <div className="details1">
                             <div className="product_name1">
                               <b>Product:</b> {product.product_name}
                             </div>
                             <div className="product_size">
                               <b>Size:</b> {product.size}
                             </div>
                             <div className="product_size">
                               <b>Quantity:</b> {product.quantity}
                             </div>
                             <div className="product_name1"><b>Price: </b>$ {product.net_price*product.quantity}</div>
                           </div>
                         </div>
                       </div>))}
                       <Link className="btn-add-to-cart" to={"/cart"} >Go to Cart</Link>
                     </div>}
                      
                    </Offcanvas.Body>
                  </Offcanvas>

                </Navbar.Brand>
                <Navbar.Brand >
                <Link to={'/wishlist'}>
                <Badge badgeContent={wish_quantity} color="primary">
                      <img
                    alt="wishlist"
                    src={heart}
                    width="25"
                    height="25"
                    className="d-inline-block align-center"
                  />
                  </Badge>
                </Link>
                  {/* <img
                    alt="heart"
                    src={heart}
                    width="25"
                    height="25"
                    className="d-inline-block align-center"
                  /> */}
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
                    {/* <Nav.Link as={Link} to={"/personList"}>Users</Nav.Link> */}
                    <Nav.Link as={Link} to={"/personAdd"}>Register</Nav.Link>
                    <Nav.Link as={Link} to={"/login"}>Login</Nav.Link>
                    <Nav.Link as={Link} to={"/wishlist"}>WishList</Nav.Link>
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
          <Route path = "/personAdd" element={user ? <Navigate to="/" replace /> :  <PersonAdd />} />
          <Route path="/personRemove" element={<PersonRemove />} />
          <Route path="/login" element={user ? <Navigate to="/" replace /> :  <Login />}  />
          <Route path="/wishlist" element={<WishList />} />
          {/* <Route path="/payment" element={<Payment />} /> */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/userProfile" element={<UserProfile />} />
          {/* <Route path="/login" element={isLoggedIn == "ture" ? <UserProfile/> : <Login />} /> */}
          <Route path="/resetPassword" element={<ResetPassword />} />
          <Route path="/success" element={<Success/>} />
          {/* <Route path="/personUpdate" element={<PersonUpdate />} /> */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>

    )
}

export default NavbarComp
