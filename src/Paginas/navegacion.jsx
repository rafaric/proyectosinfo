import * as React from "react";
import {LinkContainer} from 'react-router-bootstrap'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navegacion.css'


function NavList() {
  return (
    <Navbar bg="light" expand="lg">
      <LinkContainer to="/">
        <Navbar.Brand>Mi Portfolio</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <LinkContainer to="/superheroes">
          <Nav.Link>Listado de SuperHeroes</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/productos">
          <Nav.Link>Listado de Productos</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/buscador">
          <Nav.Link>Buscador de Peliculas</Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
</Navbar>
    )
}

export default NavList