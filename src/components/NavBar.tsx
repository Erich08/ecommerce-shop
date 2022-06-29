import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function NavBar() {
  const { handleShow } = useCart();

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
        <Button variant='outline-light' onClick={handleShow}>
          Cart
        </Button>
      </Container>
    </Navbar>
  );
}
