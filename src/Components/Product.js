import React from 'react'

function Product({product}) {
  return (
    <div class="book">
        <h2>{product.title}</h2>
        {/* <img src={"https://www.gutenberg.org/cache/epub/"+book.id+"/pg"+book.id+".cover.medium.jpg"}/> */}
    </div>
  )
}

export default Product