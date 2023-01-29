import React, { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import {Button ,Container} from 'react-bootstrap'
import '../App.css';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ProductPopUp from "../components/Modal"
import { addWish } from "../redux/wishRedux"
import { useDispatch } from "react-redux";

const ProductOnList = ({item}) => {

  const dispatch = useDispatch();

  const handleClick = () =>{
    dispatch(addWish({...item}));
  };

  return (
    <div className='products_list_container'>
           <div key={item.id}>
             <div className='product'>
               <Link className="link-btn2" to={`/product/${item._id}`}>
                 <img src={item.img} alt={item.product_name} className="products_img"/>
               </Link>
               <Link className="link-btn2" to={`/product/${item._id}`}>
                 <p className="product-p">
                   {item.product_name}</p>
               </Link>
                 <p className="product-p">${item.net_price}</p>
               {/* <Button className="btn-product">
                 Add to cart
               </Button> */}
               <div className="icons">
                 <Link to={`/product/${item._id}`}><LocalMallOutlinedIcon className="icon" /></Link>
                 <ProductPopUp item={item} key={item.id}/>
                 {/* <Link ><SearchOutlinedIcon className="icon"/></Link> */}
                 <a href="#!" onClick={handleClick}><FavoriteBorderOutlinedIcon className="icon"/></a>
               </div>  
             </div>
           </div>
       </div>
    
  );

}

export default ProductOnList;