import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

function PlantCareGuide() {
  const guides = [
    { title: 'Watering Guide', description: 'Water most plants once a week, allowing soil to dry between waterings.' },
    { title: 'Soil Guide', description: 'Use well-draining soil for most indoor and outdoor plants.' },
    { title: 'Temperature Guide', description: 'Maintain temperatures between 60-75°F for most indoor plants.' },
    { title: 'Humidity Guide', description: 'Maintain a humidity level of 40-60% for tropical plants.' }
  ];

  return (
    <Container>
      <h2>Plant Care Guide</h2>
      <Row>
        {guides.map((guide, index) => (
          <Col key={index} sm={12} md={6} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{guide.title}</Card.Title>
                <Card.Text>{guide.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default PlantCareGuide;
