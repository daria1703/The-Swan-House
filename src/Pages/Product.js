import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";

const Product = () => {

  const {_id} = useParams();
  const [product, setProduct] = useState([]);

  const fetchProduct = async (_id) => {

    const url = "https://swan-server.herokuapp.com/products/"+_id;
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
      <div className="content">
        <p>{product.title}</p>
        <img src={product.img}/>
              {/* <button type="submit" className="button2">
                <Link class="link-btn2" to={'/home'}>Back</Link></button> */}
      
    </div>
    );

}

export default Product;