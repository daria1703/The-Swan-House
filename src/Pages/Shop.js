import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import {Button ,Container, Form, Select} from 'react-bootstrap'
import { useState } from "react";
import '../App.css';
import Products from "../components/Products";
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

// class Shop extends React.Component {

//   constructor(props) {

//     super(props);

//     this.state = {
//       items: [],
//       isLoaded: false
//     }

//   }

//   /**
//    * componentDidMount
//    *
//    * Fetch json array of objects from given url and update state.
//    */
//   componentDidMount() {

//     fetch('http://localhost:3000/products/')
//       .then(res => res.json())
//       .then(json => {
//         this.setState({
//           items: json,
//           isLoaded: true,
//         })
//       }).catch((err) => {
//         console.log(err);
//       });

//   }

//   render() {

//     const { isLoaded, items } = this.state;

//     if (!isLoaded)
//       return <div>Loading...</div>;

//     // clik()

//     return (
//     <div> 
//         <h1 className="title">Shop</h1>
//       <div className="filters">
//        <div className="filter">
//         <Form.Select aria-label="Default select example" className="select">
//           <option>Weight</option>
//           <option value="1">1</option>
//           <option value="2">1,1</option>
//           <option value="3">1,2</option>
//           <option value="1">1,3</option>
//           <option value="2">1,4</option>
//           <option value="3">1,5</option>
//         </Form.Select>
//         <Form.Select aria-label="Default select example" className="select">
//           <option>Size</option>
//           <option value="1">15</option>
//           <option value="2">16</option>
//           <option value="3">17</option>
//           <option value="1">18</option>
//           <option value="2">19</option>
//           <option value="3">20</option>
//         </Form.Select>
//         <Form.Select aria-label="Default select example" className="select">
//           <option>Brand</option>
//           <option value="1">YES</option>
//           <option value="2">APART</option>
//           <option value="3">W.KRUK</option>
//         </Form.Select>
//        </div>
//        <div className="filter">
        
//         <Form.Select aria-label="Default select example" className="select">
//           <option value="1">Name, A to Z</option>
//           <option value="2">Name Z to A</option>
//           <option value="3">Price, low to high</option>
//           <option value="3">Price, high to low</option>
//         </Form.Select>
//        </div>
//       </div>
//       <div className='products_list_container'>
//         {items.map(item => (
//           <div key={item.id}>
//             <div className='product'>
//               <Link class="link-btn2" to={`/product/${item._id}`}>
//                 <img src={item.img} alt={item.product_name} className="products_img"/>
//               </Link>
//               <Link class="link-btn2" to={`/product/${item._id}`}>
//                 <p className="product-p">
//                   {item.product_name}</p>
//               </Link>
//                 <p className="product-p">${item.net_price}</p>
//               <Button className="btn-product">
//                 Add to cart
//               </Button>
//               <div className="icons">
//                 <a href="#!"><LocalMallOutlinedIcon className="icon"/></a>
//                 <a href="#!"><SearchOutlinedIcon className="icon"/></a>
//                 <a href="#!"><FavoriteBorderOutlinedIcon className="icon"/></a>
//               </div>  
//             </div>
//           </div>
//         ))}
//       </div>
//   </div>
//     );
//   }
// }

// export default Shop;


const Shop = () => {
  const location = useLocation();
  console.log(location)
  console.log(location.pathname.split("/")[2])
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  console.log(filters)

  return(
    <div> 
        <h1 className="title">{cat}</h1>
       <div className="filters">
        <div className="filter">
        {/* <Form.Select name="weight" onClick={handleFilters} aria-label="weight" className="select">
           <option>Weight</option>
           <option value="1">1</option>
           <option value="2">2</option>
          <option value="3">3</option>
         </Form.Select> */}
         <Form.Select name="size" onClick={handleFilters} aria-label="size" className="select">
            <option >Size</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
         </Form.Select>
         <Form.Select name="brand" onClick={handleFilters} aria-label="brand" className="select">
            <option >Brand</option>
            <option value="YES">YES</option>
            <option value="APART">APART</option>
            <option value="W.KRUK">W.KRUK</option>
         </Form.Select>
        </div>
        <div className="filter">
        
         <Form.Select aria-label="sort" className="select" onChange={(e) => setSort(e.target.value)}>
            <option value="atoz">Name, A to Z</option>
            <option value="ztoa">Name Z to A</option>
            <option value="newest">New</option>
            <option value="lowtohigh">Price, low to high</option>
            <option value="hightolow">Price, high to low</option>
         </Form.Select>
        </div>
       </div>
       <Products cat={cat} filters={filters} sort={sort} />
   </div>
  )
}

export default Shop