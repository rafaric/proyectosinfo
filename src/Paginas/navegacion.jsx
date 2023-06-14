import * as React from "react";
import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navegacion.css";
import insta from "../img/icons/instagram.png";
import git from "../img/icons/github.png";
import lin from "../img/icons/linkedin.png";

function NavList() {
  return (
    <Navbar expand="lg" className="sticky-top" id="nav">
      <div className="menu-container">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="">
            <LinkContainer to="/">
              <Nav.Link>Listado de SuperHeroes</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/productos">
              <Nav.Link>Listado de Productos</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/todo">
              <Nav.Link>Todo</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/encriptador">
              <Nav.Link>Encriptador de texto</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </div>
      <div className="menu-redes">
        <ul className="menu-redes-lista">
          <li>
            <a href="/">
              <img className="redes-home" src="images/home.png" alt="home" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/rafaric81"
              target="_blank"
              rel="noreferrer"
            >
              <img className="redes" src={insta} alt="instagram" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/rafaric"
              target="_blank"
              rel="noreferrer"
            >
              <img className="redes" src={git} alt="github" />
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/rafaelstongoli"
              target="_blank"
              rel="noreferrer"
            >
              <img className="redes" src={lin} alt="linkedin" />
            </a>
          </li>
        </ul>
      </div>
    </Navbar>
  );
}

export default NavList;
