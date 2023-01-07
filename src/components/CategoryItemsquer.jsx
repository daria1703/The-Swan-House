import React from 'react'
import { Container, Button, Row, Col, Card } from 'react-bootstrap'
import earring from "../img/earring.jpg"
import ring from "../img/ring2.jpg"
import bracelet from "../img/bracelet2.jpg"
import necklace from "../img/necklace2.jpg"
import hanger from "../img/hanger2.jpg"
import "../css/category.css";

function CategoryItemsquer() {
  return (
  <Container>
    <Row>
      <Col lg={3} className="category-block">
          <Card >
            <Card.Body >
              <Card.Link href="#" > 
              <Card.Img src={earring} />
                <div className="info">
                <h2>Earrings</h2>
                <Button>
                  SHOP NOW
                </Button>
                </div>
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} className="category-block">
          <Card>
            <Card.Body>
              <Card.Link href="#" > 
              <Card.Img src={ring} />
              <div className="info">
              <h2>Rings</h2>
                <Button>
                  SHOP NOW
                </Button>
              </div>
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} className="category-block">
          <Card>
            <Card.Body>
              <Card.Link href="#" > 
              <Card.Img src={bracelet} />
              <div className="info">
              <h2>Bracelets</h2>
                <Button>
                  SHOP NOW
                </Button>
              </div>
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} className="category-block" >
          <Card>
            <Card.Body>
              <Card.Link href="#" > 
              <Card.Img src={necklace} />
              <div className="info">
              <h2>Necklaces</h2>
                <Button>
                  SHOP NOW
                </Button>
              </div>
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} className="category-block">
          <Card>
            <Card.Body>
              <Card.Link href="#" > 
              <Card.Img src={hanger} />
              <div className="info">
              <h2>Pendants</h2>
                <Button>
                  SHOP NOW
                </Button>
              </div>
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
    </Row>
  </Container>
  )
}

export default CategoryItemsquer