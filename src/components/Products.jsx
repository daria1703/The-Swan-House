import { useEffect, useState } from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import ProductOnList from "../Pages/ProductOnList";
import axios from "axios";
import {Button ,Container, Form, Select} from 'react-bootstrap'


const Products = ({ cat, filters, sort }) => {
  console.log(cat, filters, sort)
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:3000/products?category=${cat}`
            : "http://localhost:3000/products"
        );
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } 
    if (sort === "lowtohigh") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.net_price - b.net_price)
      );
    } if (sort === "hightolow") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.net_price - a.net_price)
      );
    } if (sort === "atoz") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.product_name.localeCompare(b.product_name))
      );
    }
    if (sort === "ztoa") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.product_name.localeCompare(a.product_name))
      );
    }
  }, [sort]);

  return (
    <Container>
      {cat
        ? filteredProducts.map((item) => <ProductOnList item={item} key={item.id} />)
        : products
            .slice(0, 4)
            .map((item) => <ProductOnList item={item} key={item.id} />)}
    </Container>
  );
};

export default Products;

// import React from 'react'
// import { Link, useLocation } from 'react-router-dom';
// import {Button ,Container, Form, Select} from 'react-bootstrap'
// import '../App.css';
// import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
// import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
// import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

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