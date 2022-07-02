import React from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/esm/Container';
import Modal from 'react-bootstrap/Modal';
import { useCart } from '../context/CartContext';

type ModalDetails = {
  name: string;
};

export default function ItemModal() {
  const { handleModalClose, isModalOpen, isModalDetails } = useCart();
  // const item = itemData.find((i) => i.id === id);
  // if (item == null) return null;

  return (
    <Modal
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
      show={isModalOpen}
      onClick={handleModalClose}
      className='bg-transparent'
    >
      <Modal.Header closeButton>
        <Modal.Title>Item Details</Modal.Title>
      </Modal.Header>

      <h4></h4>

      <Container>
        <Modal.Body></Modal.Body>
        <Modal.Footer>
          <Button onClick={handleModalClose}>Close</Button>
        </Modal.Footer>
      </Container>
    </Modal>
  );
}
