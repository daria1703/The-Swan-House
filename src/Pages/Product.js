import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Accordion from 'react-bootstrap/Accordion';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { Link } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import '../App.css';

const Product = () => {

  const { _id } = useParams();
  const [product, setProduct] = useState([]);

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
          <div className="size">
            <p>Check your size: &nbsp;</p>
            <div className="sizes"> 
              <a href="!#">
                <div className="button-size">48</div>
              </a>
              <a href="!#">
                <div className="button-size">48</div>
              </a>
              <a href="!#">
                <div className="button-size">48</div>
              </a>
            </div>
          </div>
          <div className="lists">
          <div className="btn-wishlist">
          <p>Add To Wishlist &nbsp;</p>
            <a href="#">
                <FavoriteIcon/>
            </a>
          </div>
          <div className="count-cart">
            <AddIcon/>
              <div className="amount">
                1
              </div>
            < RemoveIcon/>
            <a href="#">
                <div className="btn-add-to-cart">Add To Cart</div>
            </a>
          </div>
          </div>
        </div>
        {/* <button type="submit" className="button2">
                <Link class="link-btn2" to={'/home'}>Back</Link></button> */}
      </div>
        <div className="row">
          <div className="col-12">
            {/* <Tabs
              defaultActiveKey="profile"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="description" title="Description">
                {product.description} 
              </Tab>
              <Tab eventKey="details" title="Details">
                Materiał: {product.matter} <br />
                Próba kruszcu: {product.assay} karat<br />
                Rozmiar: {product.size} <br />
                Producent: {product.brand} <br />
                Kategoria: {product.category} <br />
              </Tab>
              <Tab eventKey="contact" title="Contact" ></Tab>
            </Tabs> */}
            <Accordion defaultActiveKey="0" flush className="accordion">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Informaction </Accordion.Header>
        <Accordion.Body>
          <div className="row"> 
            <div className="col-lg-6 col-sm-12" > 
              {product.description}
            </div>
            <div className="col-lg-6 col-sm-12"> 
                Ore: {product.matter} <br />
                Assay: {product.assay} karat<br />
                Size: {product.size} <br />
                Brand: {product.brand} <br />
                category: {product.category} <br />
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


// <div className="container">
//       <div className='row'>
//         <div className='col-md-6 col-sm-12 img_title'>
//           <img className='product_img img_fluid' src={product.img} alt={product.product_name} />
//         </div>
//         <div className='col-md-6 col-sm-12 product_table'>
//           <p>
//             {product.product_name} <br/>
//             {product.price} zł <br />
//             Materiał: {product.matter} <br />
//             Próba kruszcu: {product.assay} karat<br />
//             Rozmiar: {product.size} <br />
//             Producent: {product.brand} <br />
//             Kategoria: {product.category} <br />
//             Opis: {product.description} <br/>
//             {/* Cena netto: {product.net_price} */}
//           </p>
//         </div>
//         {/* <button type="submit" className="button2">
//                 <Link class="link-btn2" to={'/home'}>Back</Link></button> */}
//       </div>

//     </div>

    
  );

}

export default Product;