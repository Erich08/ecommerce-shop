import React from 'react';
import { useCart } from '../context/CartContext';
import Stack from 'react-bootstrap/stack';
import { urlFor } from '../lib/client';
import { format } from '../utilities/formatter';
import Button from 'react-bootstrap/Button';

type CartProps = {
  id: number;
  quantity: number;
};

export default function Cart({ id, quantity }: CartProps) {
  const { itemData, removeItem, increaseQty, decreaseQty } = useCart();
  const item = itemData.find((i) => i.id === id);

  if (item == null) return null;

  return (
    <Stack direction='horizontal' gap={2}>
      <img
        src={urlFor(item.image && item.image[0])}
        height={120}
        width={120}
        style={{ objectFit: 'cover' }}
        alt={item.name}
      />
      <div className='me-auto'>
        <p>{format(item.price * quantity)}</p>
        <p>Qty: {quantity}</p>
      </div>
      <div className='btn-container'>
        <div>
          <Button
            size='sm'
            variant='success'
            onClick={() => increaseQty(item.id)}
          >
            +
          </Button>
          <Button
            size='sm'
            variant='danger'
            onClick={() => decreaseQty(item.id)}
          >
            -
          </Button>
        </div>
      </div>
      <Button onClick={() => removeItem(item.id)} variant='outline-danger'>
        &times;
      </Button>
    </Stack>
  );
}
