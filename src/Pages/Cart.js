import React from "react";
import "../css/cart.css";
import coliber from '../img/p1.jpg'
import Add from '@mui/icons-material/Add';
import Remove from '@mui/icons-material/Remove';
import k1 from '../img/k1.jpg'
import p1 from '../img/p1.jpg'
import { useSelector } from 'react-redux'

const Cart = () => {

    // constructor(props) {
    // 	super(props)

    // 	this.state = {
    // 		email: " ",
    // 	}
    //     this.handleSubmit = this.handleSubmit.bind(this)
    // }

    // handleSubmit = e => {
    // 	e.preventDefault()
    //     const { email } = this.state;
    //     console.log(email);
    //     fetch("http://localhost:3000/users/forgetPassword", {
    //         method: "POST",
    //         crossDomain: true,
    //         headers:{
    //             "Content-Type": "application/json",
    //             Accept: "application/json",
    //             "Access-Control-Allow-Origin": "*"
    //         },
    //         body: JSON.stringify({
    //             email
    //         }),
    //     })
    //     .then((res) => res.json())
    //     .then((data) => {
    //         console.log(data, "ResestPassword");
    //         alert(data.status);
    //     })
    // }
      const cart = useSelector(state=>state.cart)
        return (
            <div className="container">
              <div className="wraper1">
                <h1 className="title1">YOUR BAG</h1>
                <div className="top">
                <a href=""><div className="btn primary-btn top_button">CONTINUE SHOPPING</div></a>
                  <div className="top_texts">
                    <div className="top_text">Shopping Bag(2)</div>
                    <div className="top_text">Your Wishlist (0)</div>
                  </div>
                  <a href=""><div className="btn primary-btn top_button">CHECKOUT NOW</div></a>
                </div>
                <div className="bottom">
                  <div className="info2">
                   {cart.products.map(product=>( 
                   <div className="product1">
                      <div className="product_detail1">
                        <img className="image" src={product.img} />
                        <div className="details1">
                          <div className="product_name1">
                            <b>Product:</b> {product.product_name}
                          </div>
                          <div className="product_id">
                            <b>ID:</b> {product._id}
                          </div>
                          <div className="product_size">
                            <b>Size:</b> {product.size}
                          </div>
                        </div>
                      </div>
                      <div className="price_detail">
                        <div className="product_amount_container">
                          <Add />
                          <div className="product_amount">{product.quantity}</div>
                          <Remove />
                        </div>
                        <div className="product_price">$ {product.net_price*product.quantity}</div>
                      </div>
                    </div>))}
                  </div>
                  <div className="summary">
                    <h2 className="summary_title">Order Summary</h2>
                    <div className="summary_item">
                        <div className="summary_item_text">Subtotal</div>
                        <div className="summary_item_price">$ {cart.total}</div>
                    </div>
                    <div className="summary_item">
                        <div className="summary_item_text">Estimated Shipping</div>
                        <div className="summary_item_price">$ 5.90</div>
                    </div>
                    <div className="summary_item">
                        <div className="summary_item_text">Shipping Discount</div>
                        <div className="summary_item_price">$ -5.90</div>
                    </div>
                    <div className="summary_item">
                        <div className="summary_item_text" type="total">Total</div>
                        <div className="summary_item_price">$ {cart.total}</div>
                    </div>
                    <a href="" className="btn btn-primary check-btn top_button"><div>CHECKOUT NOW</div></a>
                </div>
                </div>
              </div>
            </div>
          );
}

export default Cart