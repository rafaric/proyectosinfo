import * as React from "react";
import {LinkContainer} from 'react-router-bootstrap'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navegacion.css'
import insta from "../img/icons/instagram.png"
import git from "../img/icons/github.png"
import lin from "../img/icons/linkedin.png"

function NavList() {
  return (
    <Navbar expand="lg">
      <div className="menu-container">
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
          <LinkContainer to="/todo">
            <Nav.Link>Todo</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/buscador">
            <Nav.Link>Buscador de Peliculas</Nav.Link>
          </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </div>
      <div className="menu-redes">
        <ul>
          <li><img src={insta} alt="instagram" /></li>
          <li><img src={git} alt="instagram" /></li>
          <li><img src={lin} alt="instagram" /></li>
        </ul>
      </div>
    </Navbar>
    )
}

export default NavList