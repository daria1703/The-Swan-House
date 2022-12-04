import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
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
          <p>
            {product.product_name} <br/>
            {product.price} zł <br />
            Materiał: {product.matter} <br />
            Próba kruszcu: {product.assay} karat<br />
            Rozmiar: {product.size} <br />
            Producent: {product.brand} <br />
            Kategoria: {product.category} <br />
            Opis: {product.description} <br/>
            {/* Cena netto: {product.net_price} */}
          </p>
        </div>
        {/* <button type="submit" className="button2">
                <Link class="link-btn2" to={'/home'}>Back</Link></button> */}
      </div>

    </div>
  );

}

export default Product;