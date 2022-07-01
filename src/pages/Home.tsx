import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import Products from '../components/Products';
import Testimonials from '../components/Testimonials';

export function Home() {
  return (
    <>
      <div className='home-container'>
        <div className='home-left'>
          <h1>Great deals are just a click away</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit provident fuga reiciendis necessitatibus? Iusto
            voluptatum fugiat iste rem fugit repellendus corrupti, suscipit in
            dolor facere culpa earum expedita qui enim.
          </p>
          <Button variant='danger' size='lg' className='shop-btn'>
            <NavLink
              to='/store'
              style={{ textDecoration: 'none', color: 'white' }}
            >
              Shop Now{' '}
            </NavLink>
          </Button>
        </div>
        <div className='banner__img__container'>
          <img
            className='banner-img'
            src='/airpodsmax2_adobe_express.png'
            alt='banner'
            height={700}
            width={530}
          />
        </div>
      </div>
      <Products />
      <Testimonials />
    </>
  );
}
