import '../css/App.css';
import { Home } from '../pages/Home';
import { Store } from '../pages/Store';
import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import { CartProvider } from '../context/CartContext';
import NavBar from './NavBar';
import Footer from './Footer';

function App() {
  return (
    <CartProvider>
      <NavBar />
      <Container>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/store' element={<Store />} />
        </Routes>
      </Container>
      <Footer />
    </CartProvider>
  );
}

export default App;
