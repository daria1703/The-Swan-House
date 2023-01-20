import {Container,Button, Row, Col, Form, Select} from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';
import {Link } from "react-router-dom";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { addProduct } from "../redux/cartRedux"
import React, { useState } from 'react';
import p1 from '../img/p1.jpg'

const ProductPopUp = ({item}) =>{

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
  return (
    <>
      <Link ><SearchOutlinedIcon onClick={handleShow} className="icon"/></Link>
      <Modal show={show} onHide={handleClose} key={item.id}>
        <Modal.Header closeButton>
          <Modal.Title>{item.product_name}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
        <Container>
          <Row >
            <Col xs={12} md={12}>
            <img
                    alt="name"
                    src={item.img}
                    width="100%"
                    height="100%"
                    className="d-inline-block align-top"
                  />
            </Col>
          </Row>

          <Row>
          <Col className="margin" xs={12} md={12}>
              <b>Short description: </b> {item.short_description}
            </Col>
            <Col className="margin" xs={6} md={4}>
              <b>Price:</b> ${item.net_price}
            </Col>
            <Col className="margin" xs={6} md={4}>
              <b>Material:</b> {item.matter}
            </Col>
            <Col className="margin" xs={6} md={4}>
              <b>Assay: </b> {item.assay}
            </Col>
            <Col className="margin" xs={6} md={4} className="size_container">
            <b>Size:</b> 
            
            {item.size?.map((s) => (
                  <p className="option" key={s}>&nbsp;{s},</p>
                ))}
         
            </Col>
            <Col className="margin" xs={6} md={4}>
            <b>Brand:</b> {item.brand}
            </Col>
          </Row>
        </Container>
      </Modal.Body>
        <Modal.Footer>
          <Link className="btn primary-btn top_button" onClick={handleClose}>
            CLOSE
          </Link>
          <Link className="btn primary-btn top_button" to={`/product/${item._id}`}>
            SHOW MORE
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default ProductPopUp