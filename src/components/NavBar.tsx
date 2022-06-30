import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';

type Quantity = {
  quantity: number;
};

export default function NavBar() {
  const { handleShow, itemQty } = useCart();

  return (
    <Navbar bg='dark' variant='dark'>
      <Container>
        <Nav className='me-auto'>
          <Nav.Link as={NavLink} to='/'>
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to='/store'>
            Store
          </Nav.Link>
        </Nav>
        <Button
          variant='outline-light'
          onClick={handleShow}
          style={{ position: 'relative' }}
        >
          Cart
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              height: '1.5rem',
              width: '1.5rem',
              transform: 'translate(50%, 50%)',
              margin: '0px 0px 5px 0px',
            }}
            className='bg-danger rounded-circle'
          >
            {itemQty}
          </div>
        </Button>
      </Container>
    </Navbar>
  );
}
