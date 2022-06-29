import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { client, urlFor } from '../lib/client';
import Card from 'react-bootstrap/Card';
import { format } from '../utilities/formatter';
import OffCanvas from '../components/OffCanvas';

const query = '*[_type == "product"] {image, name, slug, price}';

export type ItemData = {
  name: string;
  price: number;
  image: string;
  slug: string;
};

export function Store() {
  const [itemData, setItemData] = useState<ItemData[]>([] as ItemData[]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await client.fetch(query);
      setItemData(data);
    };
    fetchData();
  }, []);

  return (
    <Container className='mt-5'>
      <Row sm={1} md={3} lg={4} className='g-3'>
        {itemData.map((item: ItemData) => (
          <Container key={item.slug}>
            <Col>
              <Card className='bg-dark text-white'>
                <Card.Img
                  variant='top'
                  src={urlFor(item.image && item.image[0])}
                  height='250px'
                  style={{ objectFit: 'cover' }}
                />

                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{format(item.price)}</Card.Text>
                  <Button variant='outline-light'>Add to cart</Button>
                </Card.Body>
              </Card>
            </Col>
          </Container>
        ))}
      </Row>
    </Container>
  );
}
