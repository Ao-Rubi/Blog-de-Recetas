import React from "react";
import {Nav, Navbar, Container} from "react-bootstrap"
import { Link, NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">Blog</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink end to="/" className="nav-item nav-link">Inicio</NavLink>
              <NavLink end to="/administrar" className="nav-item nav-link">Administrar</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menu;