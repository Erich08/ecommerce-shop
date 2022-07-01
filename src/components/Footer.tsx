import { Container } from 'react-bootstrap';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <Container className='bg-dark mt-5' fluid>
      <footer>
        Copyright &copy; {year} Erich Hartnauer
        <div className='footer-links' style={{ margin: '1.5rem 0 0 0' }}>
          <a
            href='https://www.linkedin.com/in/erich-hartnauer-71077a220/'
            target='_blank'
          >
            <FaLinkedin size={35} />
          </a>
          <a href='https://github.com/Erich08/ecommerce-shop' target='_blank'>
            <FaGithub size={35} />
          </a>
        </div>
      </footer>
    </Container>
  );
}
