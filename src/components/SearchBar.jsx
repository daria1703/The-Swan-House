import React, { useState } from 'react'
import { useParams, Link } from "react-router-dom";
import { Button } from 'react-bootstrap'
import { useEffect } from 'react'
import close from '../img/close.png'
import search from "../img/search.png"

function SearchBar() {

  const { _id } = useParams();
  const [query, setQuery] = useState("")
  const [product, setProduct] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);
  const [wordEntered, setEnteredWord] = useState("")

  const fetchProduct = async (_id) => {

    const url = "http://localhost:3000/products/"
    let response = await fetch(url);
    let responseJson = await response.json();
    setProduct(responseJson);
    console.log(product);
    // console.log(_id)
  };

  useEffect(() => {
    fetchProduct(_id);
  }, [_id]);

  const handleFilter = (event) =>{
    const searchWord = event.target.value
    setEnteredWord(searchWord)
    const newFilter = product.filter((value) => {
      return value.product_name.toLowerCase().includes(searchWord.toLowerCase())
    })
    if (searchWord === ""){
      setFilterProduct([]);
    } else {
      setFilterProduct(newFilter);
    }
  }

  const clearInput = () => {
    setFilterProduct([]);
    setEnteredWord("")
  }

  return (
    <div className="serachcontainer">
      <div className="search">
      <input  type="text" className="searcher" placeholder='Search...' value={wordEntered} onChange={handleFilter}/>
      <div className="searchIcon">
      {filterProduct.length === 0 ? <div className="cross"><img
                    alt="user"
                    src={search}
                    width="20"
                    height="20"
                    className="d-inline-block align-center"
                  /></div> : <div className="cross2"><img
                  alt="user"
                  src={close}
                  width="10"
                  height="10"
                  className="d-inline-block align-center"
                  onClick={clearInput}
                /></div>}
      </div>
      </div>
      {filterProduct.length != 0 && (
        <ul className='list'>
        {/* <li className='listItem'>{product.short_description}Earring</li> */}
        {filterProduct.slice(0,10).map((item) => (
                <li className='listItem'>
                  <div className="row">
                    <Link to={`/product/${item._id}`} className="col-12 product_search" onClick={clearInput}>
                        <div className="col-4"><img className="search_img" src={item.img} alt={item.product_name} /></div>
                        <div className=""><p className="product_serach_title">{item.product_name} <br/> ${item.net_price}</p> </div>
                    </Link>
                  </div>
                </li>
                ))}
        <a href="./products/woman" onClick={clearInput} className="btn btn-primary top_button" style={{marginBottom: 10 + "px"}} >Show more</a>
      </ul>
      )}
    </div>
  )
}

export default SearchBar