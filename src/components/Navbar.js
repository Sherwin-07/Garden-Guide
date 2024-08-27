import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavigationBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">Plant Pulse</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto"> {/* Changed from `mr-auto` to `ms-auto` */}
          <Nav.Link as={Link} to="/garden-journal">Garden Journal</Nav.Link>
          <Nav.Link as={Link} to="/medicinal-plants">Medicinal Plant Benefits</Nav.Link>
          <Nav.Link as={Link} to="/plant-care-guide">Plant Care Guide</Nav.Link>
          <Nav.Link as={Link} to="/about-us">About Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
