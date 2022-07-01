import React from 'react';
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
              <Card className='bg-dark text-white'>
                <Card.Img
                  variant='top'
                  src={urlFor(item.image && item.image[0])}
                  height='250px'
                  style={{ objectFit: 'cover' }}
                />

                <Card.Body className='me-auto'>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{format(item.price)}</Card.Text>
                  <div className='btn-card-container'>
                    <Button
                      className='store-btn'
                      variant='success'
                      onClick={() => increaseQty(item.id)}
                    >
                      Add to cart
                    </Button>

                    <Button
                      className='btn-left store-btn'
                      variant='outline-light'
                    >
                      Details
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Container>
        ))}
      </Row>
    </Container>
  );
}
