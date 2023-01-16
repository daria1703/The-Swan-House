import './App.css';
import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
// import PersonUpdate from './Pages/PersonUpdate'
import NavbarComp from './components/NavbarComp';
import Announcement from './components/Announcement';
import Footer from './components/Footer'
function App() {
  return (
    <div className="App">
      <Announcement/>
      <NavbarComp />
      <Footer/>
    </div>
  );
}

export default App;
