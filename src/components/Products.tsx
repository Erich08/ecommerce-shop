import Container from 'react-bootstrap/Container';

export default function Products() {
  return (
    <Container className='products-container'>
      <div className='product-one'>
        <img src='/applewatch2_adobe_express.png' alt='Mackbook Pro' />
        <div className='product-right'>
          <h1>Apple Watch Series 7</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
            mollitia vel voluptatum nulla maiores reiciendis totam velit
            perferendis corrupti deleniti? Rem minus exercitationem officiis
            dolor accusamus reprehenderit. Laboriosam, inventore corrupti.
          </p>
        </div>
      </div>
      <div className='product-two'>
        <div className='product-left'>
          <h1>Macbook Pro</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consectetur maxime, consequatur molestias molestiae voluptas enim
            labore! Placeat magni, expedita veniam doloremque ipsam ex,
            doloribus, ad ab tempora corrupti culpa similique.
          </p>
        </div>
        <img src='/macbook2_adobe_express.png' alt='Apple Watch' />
      </div>

      <div className='product-three'>
        <img src='/airpods.png' alt='Apple Watch' />
        <div className='product-right'>
          <h1>Airpods</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consectetur maxime, consequatur molestias molestiae voluptas enim
            labore! Placeat magni, expedita veniam doloremque ipsam ex,
            doloribus, ad ab tempora corrupti culpa similique.
          </p>
        </div>
      </div>
    </Container>
  );
}
