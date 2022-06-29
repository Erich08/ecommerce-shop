import { Container } from 'react-bootstrap';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <Container className='bg-dark mt-5' fluid>
      <footer>Copyright &copy; {year} eCommerce </footer>
    </Container>
  );
}
