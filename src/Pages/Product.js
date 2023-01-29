import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {Button ,Container, Form, Select} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../App.css';
import { addProduct } from "../redux/cartRedux"
import { addWish } from "../redux/wishRedux"
import { useDispatch } from "react-redux";

const Product = () => {

  const { _id } = useParams();
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [size, setSize] = useState("") 
  const dispatch = useDispatch();

  const fetchProduct = async (_id) => {

    const url = "http://localhost:3000/products/" + _id;
    let response = await fetch(url);
    let responseJson = await response.json();
    setProduct(responseJson);
    console.log(product);
    console.log(_id)
  };

  useEffect(() => {
    fetchProduct(_id);
  }, [_id]);

  const handleQuantity = (type) => {
    if (type === "dec"){
     quantity > 0 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  }

  const handleClick = () =>{
    dispatch(addProduct({...product, quantity, size}));
  };

  const handleClick2 = () =>{
    dispatch(addWish({...product, quantity, size}));
  };

  return (
    <div className="container">
      <div className='row'>
        <div className='col-md-6 col-sm-12 img_title'>
          <img className='product_img img_fluid' src={product.img} alt={product.product_name} />
        </div>
        <div className='col-md-6 col-sm-12 product_table'>
          <p className="title_product">{product.product_name} </p>
          <p className="price_product">${product.net_price}</p>
          <p className="short_desc">{product.short_description}...<br/></p>
          <div className="stars">
            <StarOutlineIcon/>
            <StarOutlineIcon/>
            <StarOutlineIcon/>
            <StarOutlineIcon/>
            <StarOutlineIcon/>
            <p>(0)</p>
          </div>
          <div className="size2">
            <p>Check your size: &nbsp;</p>
            <Form.Select name="sizese" aria-label="sizese" className="select2" onClick={(e) => setSize(e.target.value)}>
            {product.size?.map((s) => (
                  <option key={s}>{s}</option>
                ))}
         </Form.Select>
          </div>
          <div className="lists">
          <div className="btn-wishlist">
          <p>Add To Wishlist &nbsp;</p>
              <Link to={`/wishlist`}>
                <div onClick={handleClick2}><FavoriteIcon/></div>
            </Link>
          </div>
          <div className="count-cart">
            <AddIcon onClick={()=>handleQuantity("inc")}/>
              <div className="amount">
                {quantity}
              </div>
            < RemoveIcon onClick={()=>handleQuantity("dec")}/>
            <Link to={`/cart`}>
                <div className="btn-add-to-cart" onClick={handleClick}>Add To Cart</div>
            </Link>
          </div>
          </div>
        </div>
        {/* <button type="submit" className="button2">
                <Link class="link-btn2" to={'/home'}>Back</Link></button> */}
      </div>
        <div className="row">
          <div className="col-12">
            <Accordion defaultActiveKey="0" flush className="accordion">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Informaction </Accordion.Header>
        <Accordion.Body>
          <div className="row"> 
            <div className="col-lg-6 col-sm-12" > 
              {product.description}
            </div>
            <div className="col-lg-6 col-sm-12"> 
                Material: {product.matter} <br />
                Assay: {product.assay} carats<br />
                Weight: {product.weight} grams<br/>
                <div className="table_size">
                Size: {product.size?.map((s) => (
                  <p  key={s}>&nbsp;{s},</p>
                ))} <br />
                </div>
                Brand: {product.brand} <br />
                <div className="table_size">
                Category: {product.category?.map((s) => (
                  <p  key={s}>&nbsp;{s},</p>
                ))} </div><br />
                
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Comments</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
          </div>
        </div>
      </div>


    
  );

}

export default Product;