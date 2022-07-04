import React from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useCart } from '../context/CartContext';
import { Stack } from 'react-bootstrap';
import Cart from './Cart';
import { format } from '../utilities/formatter';
import Button from 'react-bootstrap/Button';
import {
  useStripe,
  useElements,
  PaymentElement,
} from '@stripe/react-stripe-js';

type OffCanvasProps = {
  isOpen: boolean;
};

export default function OffCanvas({ isOpen }: OffCanvasProps) {
  const { handleClose, cart, itemData } = useCart();
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: 'localhost:3000/store',
      },
    });

    if (result.error) {
      console.log(result.error.message);
    }
    console.log('hello');
  };

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
            >
              <form onSubmit={handleSubmit}>
                <PaymentElement />
                <Button variant='outline-dark' disabled={!stripe}>
                  Check Out
                </Button>
              </form>
            </div>
          </Stack>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
