import React from 'react'
import { Container, Button, Row, Col, Card} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import earring from "../img/earring.jpg"
import ring from "../img/ring2.jpg"
import bracelet from "../img/bracelet2.jpg"
import necklace from "../img/necklace2.jpg"
import hanger from "../img/hanger2.jpg"
import "../css/category.css";

class CategoryItemsquer extends React.Component {

  render(){
    return (
      
      <Container>
        <Row>
            <Col lg={3} className="category-block">
          <Card >
            <Card.Body >
              <Link to={`/products/earring`}> 
              <Card.Img src={earring} />
                <div className="info">
                <h2>Earrings</h2>
                <Button to={`/products/earring`}>
                  SHOP NOW
                </Button>
                </div>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} className="category-block">
          <Card>
            <Card.Body>
              <Link to={`/products/ring`} > 
              <Card.Img src={ring} />
              <div className="info">
              <h2>Rings</h2>
                <Button to={`/products/ring`}>
                  SHOP NOW
                </Button>
              </div>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} className="category-block">
          <Card>
            <Card.Body>
              <Link to={`/products/bracelet`} > 
              <Card.Img src={bracelet} />
              <div className="info">
              <h2>Bracelets</h2>
                <Button to={`/products/bracelet`}>
                  SHOP NOW
                </Button>
              </div>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} className="category-block" >
          <Card>
            <Card.Body>
              <Link to={`/products/necklace`} > 
              <Card.Img src={necklace} />
              <div className="info">
              <h2>Necklaces</h2>
                <Button to={`/products/necklace`}>
                  SHOP NOW
                </Button>
              </div>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} className="category-block">
          <Card>
            <Card.Body>
              <Link to={`/products/pendant`} > 
              <Card.Img src={hanger} />
              <div className="info">
              <h2>Pendants</h2>
                <Button to={`/products/pendant`}>
                  SHOP NOW
                </Button>
              </div>
              </Link>
            </Card.Body>
          </Card>
        </Col>
    </Row>
  </Container>
  )
  }
}

export default CategoryItemsquer