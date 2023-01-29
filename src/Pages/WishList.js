import React from "react";
import "../css/cart.css";
import "../css/wishlist.css";
import Add from '@mui/icons-material/Add';
import Remove from '@mui/icons-material/Remove';
import k1 from '../img/k1.jpg'
import p1 from '../img/p1.jpg'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react';
import {Button} from 'react-bootstrap';
import { userRequest } from "../requestMethods";
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


const WishList = () => {

  const wish = useSelector((state)=>state.user.wish);
  const [quantity, setQuantity] = useState(0);

  const handleQuantity = (type) => {
    if (type === "dec"){
     quantity > 0 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  }

        return (
            <div className="container">
              <div className="wraper1">
                <h1 className="title1">YOUR WISHLIST</h1>
                <div className="top">
                <a href="/"><div className="btn primary-btn top_button">CONTINUE SHOPPING</div></a>
                  <div className="top_texts">
                  <a href="/cart"><div className="btn primary-btn top_button">GO TO CART</div></a>
                  </div>
                </div>
                <div className="products_list_container2">
                  
                   {wish.products.map(product=>( 
                    
                    <div className="product3">
                    <Link to={`/product/${product._id}`}>
                        <div className="product_detail2">
                            <img className="image" src={product.img} />
                            <div className="details1">
                            <div className="product_name1">
                                {product.product_name}
                            </div>
                            <div className="product_id">
                                <b>ID:</b> {product._id}
                            </div>
                            <div className="table_size">
                                <b>Size:</b> {product.size?.map((s) => (
                                <p  key={s}>&nbsp;{s},</p>
                                ))} <br />
                            </div>
                          <div className="table_size">
                            <b>Price:</b> ${product.net_price}
                          </div>
                            </div>
                        </div>
                   </Link>
                    </div>))}
                </div>
              </div>
            </div>
          );
}

export default WishList