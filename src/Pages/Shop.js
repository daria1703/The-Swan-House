import React from 'react'
import {useEffect, useState} from "react";
import Product from '../Components/Product';

function Shop() {
    const [products, setProducts] = useState([]);
  

  useEffect(() =>{
    fetchProducts()
  }, []);

  const fetchProducts = async () =>{
    let url = 'https://gnikdroy.pythonanywhere.com/api/book/';

    while (url) {
      console.log(url);
      let data = await fetch(url);
      let products = await data.json();
      setProducts(products.results);
      url = products.next;
      console.log(products);
    }

    console.log(products);
      

    // const data = await fetch('https://gnikdroy.pythonanywhere.com/api/book/');
    // const books = await data.json();
    // console.log(books)
    // setPopular(books.results);
    // setFiltered(books.results)
  };
  return (
    <div className="App">
      <div class="popular-books">
        {products.map(product =>{
          return <Product key={product.id} product={product}/>;
        })}
      </div>
    </div>
  );

}

export default Shop