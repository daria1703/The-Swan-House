import React from 'react'
import { Link, Outlet } from 'react-router-dom';
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
      <div className="content">

        {items.map(item => (
          <section key={item.id}>
            <p>{item.product_name}</p>
            <p>{item._id}</p>
            <p>{item.description}</p>

            
              <Link class="link-btn2" to={`/product/${item._id}`}>Check!</Link>
           <Outlet/>

            {/* <img src={item.img}/> */}
            {/* <div class="image">
                  <img class="image__img" src={item.image} alt={item.title} />
                  <div class="image__overlay image__overlay--primary">
                    
                    <div className="btn-div"> 
                             <button type="submit" className="button3">
                                 <Link class="link-btn2" to={`/film/${item.id}` }>Check!</Link></button>
                         </div>
                         <div class="image__title">{item.title}</div>
                  </div>
                </div> */}
          </section>
        ))}
      </div>
    );
  }
}

export default Shop;