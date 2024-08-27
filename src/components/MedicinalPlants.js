import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

function MedicinalPlants() {
  const plants = [
    { name: 'Aloe Vera', benefit: 'Heals burns and improves skin health.' },
    { name: 'Lavender', benefit: 'Reduces anxiety and improves sleep.' },
    { name: 'Peppermint', benefit: 'Soothes digestive issues and headaches.' },
    { name: 'Chamomile', benefit: 'Reduces inflammation and helps with sleep.' },
    { name: 'Ginger', benefit: 'Reduces nausea and inflammation.' },
    { name: 'Turmeric', benefit: 'Anti-inflammatory and antioxidant properties.' }
  ];

  return (
    <Container>
      <h2>Medicinal Plant Benefits</h2>
      <Row>
        {plants.map((plant, index) => (
          <Col key={index} sm={12} md={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{plant.name}</Card.Title>
                <Card.Text>{plant.benefit}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default MedicinalPlants;
