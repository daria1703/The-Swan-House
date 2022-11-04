import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';
class Shop extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      items: [],
      isLoaded: false
    }

  }

  /**
   * componentDidMount
   *
   * Fetch json array of objects from given url and update state.
   */
  componentDidMount() {

    fetch('https://swan-server.herokuapp.com/products')
      .then(res => res.json())
      .then(json => {
        this.setState({
          items: json,
          isLoaded: true,
        })
      }).catch((err) => {
        console.log(err);
      });

  }

  render() {

    const { isLoaded, items } = this.state;

    if (!isLoaded)
      return <div>Loading...</div>;

    // clik()

    return (
      <div className='products_list_container'>
        {items.map(item => (
          <div key={item.id}>
            
            <Link class="link-btn2" to={`/product/${item._id}`}>
              <div className='product'>
                <img src={item.img} alt={item.product_name} className="products_img"/>
                <p>{item.product_name}</p>
                <p>{item.price} zł</p>
              </div>
            </Link>

          </div>
        ))}
      </div>
    );
  }
}

export default Shop;