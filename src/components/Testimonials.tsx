import React from 'react';

export default function Testimonials() {
  return (
    <div className='testimonial-container'>
      <h1>What our customers are saying about us</h1>
      <div className='testimonial-wrapper'>
        <div className='testimonial'>
          <img src='/person1.png' alt='person1' className='customers' />
          <h3>Emilee</h3>
          <p>
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            voluptatibus ex qui nulla consequuntur eius sapiente eaque? Beatae,
            sint ipsam maxime soluta quas consequuntur eum repellendus
            reiciendis velit iste sequi."
          </p>
        </div>
        <div className='testimonial'>
          <img
            src='/person2.png'
            alt='person2'
            className='customers'
            loading='lazy'
          />
          <h3>Brax</h3>
          <p>
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            voluptatibus ex qui nulla consequuntur eius sapiente eaque? Beatae,
            sint ipsam maxime soluta quas consequuntur eum repellendus
            reiciendis velit iste sequi."
          </p>
        </div>
        <div className='testimonial'>
          <img
            src='/person3.png'
            alt='person3'
            className='customers'
            loading='lazy'
          />
          <h3>Paislee</h3>
          <p>
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            voluptatibus ex qui nulla consequuntur eius sapiente eaque? Beatae,
            sint ipsam maxime soluta quas consequuntur eum repellendus
            reiciendis velit iste sequi."
          </p>
        </div>
      </div>
    </div>
  );
}
