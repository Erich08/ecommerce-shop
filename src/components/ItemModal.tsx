import React from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/esm/Container';
import Modal from 'react-bootstrap/Modal';
import { useCart } from '../context/CartContext';

export default function ItemModal({}) {
  const { handleModalClose, isModalOpen, isModalData, isModalDescription } =
    useCart();

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

      <Container>
        <Modal.Body>
          <h4>{isModalData}</h4>
          <p>{isModalDescription}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='dark' onClick={handleModalClose}>
            Close
          </Button>
          {/* TODO: Incorporate add to cart button in Modal */}
        </Modal.Footer>
      </Container>
    </Modal>
  );
}
