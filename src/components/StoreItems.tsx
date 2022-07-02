import React from 'react';
import { useCart } from '../context/CartContext';
import { format } from '../utilities/formatter';
import { urlFor } from '../lib/client';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';

type ItemProps = {
  name: string;
  image: string;
  price: number;
  id: number;
  description: string;
};

export default function StoreItems({
  name,
  id,
  image,
  price,
  description,
}: ItemProps) {
  const { increaseQty, dataModal } = useCart();

  return (
    <>
      <Container key={id}>
        <Col>
          <Card className='bg-danger text-white'>
            <Card.Img
              variant='top'
              src={urlFor(image && image[0])}
              height='250px'
              style={{ objectFit: 'cover' }}
            />

            <Card.Body className='me-auto'>
              <Card.Title>{name}</Card.Title>
              <Card.Text>{format(price)}</Card.Text>
              <div className='btn-card-container'>
                <Button
                  className='store-btn'
                  variant='outline-dark'
                  onClick={() => increaseQty(id)}
                >
                  Add to cart
                </Button>

                <Button
                  className='btn-left store-btn'
                  variant='outline-light'
                  onClick={() => dataModal(name, description)}
                >
                  Details
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Container>
    </>
  );
}
