import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import StoreItems from '../components/StoreItems';
import { useCart } from '../context/CartContext';

export function Store() {
  const { itemData } = useCart();
  return (
    <Container className='mt-5'>
      <Row sm={1} md={3} lg={4} className='g-3'>
        {itemData.map((item) => (
          <StoreItems key={item.id} {...item} />
        ))}
      </Row>
    </Container>
  );
}
