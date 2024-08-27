import React, { useState } from 'react';
import { Form, Button, Table, Container } from 'react-bootstrap';

function GardenJournal() {
  const [plants, setPlants] = useState([]);
  const [newPlant, setNewPlant] = useState({ name: '', type: '', date: '' });

  const handleChange = (e) => {
    setNewPlant({ ...newPlant, [e.target.name]: e.target.value });
  };

  const handleAddPlant = () => {
    setPlants([...plants, newPlant]);
    setNewPlant({ name: '', type: '', date: '' });
  };

  const handleDeletePlant = (index) => {
    setPlants(plants.filter((_, i) => i !== index));
  };

  const handleEditPlant = (index) => {
    const plantToEdit = plants[index];
    setNewPlant(plantToEdit);
    handleDeletePlant(index);
  };

  return (
    <Container>
      <h2>Garden Journal</h2>
      <Form>
        <Form.Group>
          <Form.Label>Plant Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={newPlant.name}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Type of Plant</Form.Label>
          <Form.Control as="select" name="type" value={newPlant.type} onChange={handleChange}>
            <option>Select</option>
            <option>Herb</option>
            <option>Vegetable</option>
            <option>Fruit</option>
            <option>Flower</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Date of Planting</Form.Label>
          <Form.Control
            type="date"
            name="date"
            value={newPlant.date}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" onClick={handleAddPlant}>Add Plant</Button>
      </Form>

      <Table striped bordered hover className="mt-4">
        <thead>
          <tr>
            <th>Plant Name</th>
            <th>Type</th>
            <th>Date of Planting</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {plants.map((plant, index) => (
            <tr key={index}>
              <td>{plant.name}</td>
              <td>{plant.type}</td>
              <td>{plant.date}</td>
              <td>
                <Button variant="warning" onClick={() => handleEditPlant(index)}>Edit</Button>
                {' '}
                <Button variant="danger" onClick={() => handleDeletePlant(index)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default GardenJournal;
