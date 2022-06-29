import React from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import { useCart } from '../context/CartContext';

type OffCanvasProps = {
  isOpen: boolean;
};

export default function OffCanvas({ isOpen }: OffCanvasProps) {
  const { handleClose } = useCart();
  return (
    <>
      <Offcanvas onHide={handleClose} show={isOpen} placement='end'>
        <Offcanvas.Header closeButton>Your Cart</Offcanvas.Header>
      </Offcanvas>
    </>
  );
}
