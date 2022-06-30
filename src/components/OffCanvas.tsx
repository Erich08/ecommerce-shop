import React from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useCart } from '../context/CartContext';
import Stack from 'react-bootstrap/Stack';
import Cart from './Cart';
import { format } from '../utilities/formatter';

type OffCanvasProps = {
  isOpen: boolean;
};

export default function OffCanvas({ isOpen }: OffCanvasProps) {
  const { handleClose, cart, itemData } = useCart();
  console.log(cart);
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
          </Stack>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
