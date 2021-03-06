import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useCart } from '../context/CartContext';
import { Stack } from 'react-bootstrap';
import Cart from './Cart';
import { format } from '../utilities/formatter';
import Button from 'react-bootstrap/Button';

type OffCanvasProps = {
  isOpen: boolean;
};

export default function OffCanvas({ isOpen }: OffCanvasProps) {
  const { handleClose, cart, itemData } = useCart();
  const [success, setSuccess] = useState(false);

  return (
    <>
      <Offcanvas
        onHide={handleClose}
        show={isOpen}
        placement='end'
        scroll={true}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Your Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Stack gap={3}>
            {cart.map((item) => (
              <Cart key={item.id} {...item} />
            ))}
            <div className='total-container'>
              Total:{' '}
              {format(
                cart.reduce((total, cartItem) => {
                  const item = itemData.find((i) => i.id === cartItem.id);
                  return total + (item?.price || 0) * cartItem.quantity;
                }, 0)
              )}
            </div>
            <div
              className='checkout-btn'
              style={{ display: 'flex', justifyContent: 'center' }}
            ></div>
          </Stack>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
