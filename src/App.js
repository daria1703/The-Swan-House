import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import About from './Pages/About';
import Contact from './Pages/Contact';
import ErrorPage from './Pages/ErrorPage';
import Product from './Pages/Product';
// import Login2 from './Pages/Login';
// import Register2 from './Pages/Registration';
// import HomeLogIn from './Components/HomeLogIn/HomeLogIn';
import LogandReg from './Components/LogandRegScreen/LogandReg';
import "bootstrap/dist/css/bootstrap.min.css";



function App() {
  return (
    <Router>
      <nav className="navbar_swan">
        <Link className="nav-item nav-link" to="/">Home</Link>
        <Link className="nav-item nav-link" to="/products">Shop</Link>
        <Link className="nav-item nav-link" to="/about">About</Link>
        <Link className="nav-item nav-link" to="/contact">Contact</Link>
        {/* <Link className="nav-item nav-link" to="/loginorregistr/login">Log in</Link>
        <Link className="nav-item nav-link" to="/loginorregistr/register">Sign out</Link> */}
        {/* <Link className="nav-item nav-link" to="/loginorregistr">Log In</Link> */}
        <Link className="nav-item nav-link" to="/loginorregistr">Log In</Link>


      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Shop />} />
        <Route path="/product/:_id" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/loginorregistr" element={<LogandReg />}>
          {/* <Route path="/loginorregistr/login" element={<Login2 />} />
          <Route path="/loginorregistr/register" element={<Register2 />} /> */}
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
