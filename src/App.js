import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import About from './Pages/About';
import Contact from './Pages/Contact';
import ErrorPage from './Pages/ErrorPage';
import "bootstrap/dist/css/bootstrap.min.css";
import Product from './Pages/Product';
import PersonList from './Pages/PersonList';
import PersonAdd from './Pages/PersonAdd';
import PersonRemove from './Pages/PersonRemove';
// import PersonUpdate from './Pages/PersonUpdate'
import Login from './Pages/Login'
import UserProfile from './Pages/UserProfile';
import ResetPassword from './Pages/ResetPassword';


function App() {
  return (
    <Router>
      <nav className="navbar_swan">
        <Link className="nav-item nav-link" to="/">Home</Link>
        <Link className="nav-item nav-link" to="/products">Shop</Link>
        <Link className="nav-item nav-link" to="/about">About</Link>
        <Link className="nav-item nav-link" to="/contact">Contact</Link>
        <Link className="nav-item nav-link" to="/personList">PersonList</Link>
        <Link className="nav-item nav-link" to="/personAdd">PersonAdd</Link>
        <Link className="nav-item nav-link" to="/personRemove">PersonRemove</Link>
        <Link className="nav-item nav-link" to="/login">Login</Link>
        <Link className="nav-item nav-link" to="/userProfile">Profile</Link>
        <Link className="nav-item nav-link" to="/resetPassword">Reset Password</Link>
        {/* <Link className="nav-item nav-link" to="/personUpdate">PersonUpdate</Link> */}

      </nav>
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
        <Route path="/resetPassword" element={<ResetPassword/>} />
        {/* <Route path="/personUpdate" element={<PersonUpdate />} /> */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
