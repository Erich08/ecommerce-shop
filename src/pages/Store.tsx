import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { urlFor } from '../lib/client';
import Card from 'react-bootstrap/Card';
import { format } from '../utilities/formatter';
import { useCart } from '../context/CartContext';

export function Store() {
  const { increaseQty, itemData } = useCart();

  return (
    <Container className='mt-5'>
      <Row sm={1} md={3} lg={4} className='g-3'>
        {itemData.map((item) => (
          <Container key={item.id}>
            <Col>
              <Card>
                <Card.Img
                  variant='top'
                  src={urlFor(item.image && item.image[0])}
                  height='250px'
                  style={{ objectFit: 'cover' }}
                />

                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{format(item.price)}</Card.Text>
                  <Button
                    variant='outline-dark'
                    onClick={() => increaseQty(item.id)}
                  >
                    Add to cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Container>
        ))}
      </Row>
    </Container>
  );
}
