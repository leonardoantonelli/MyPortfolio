import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { useState, useEffect } from "react";
import MyAccordin from "./MyAccordin";
import Footer from "./Footer";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Silv from "./SilvProject";
import { Link } from "react-router-dom";
import { BrowserRouter, Switch, Route, Routes } from "react-router-dom";
function ColorSchemesExample() {
  const [activeLink, setActiveLink] = useState("home");
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <h1>Leonardo Antonelli </h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="myWhiteBg myTextWhite " />
          <Navbar.Collapse id="basic-navbar-nav" className="myTextWhite ">
            <Nav className="me-auto myTextWhite">
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills"
                    ? "active navbar-link myTextWhite"
                    : "navbar-link myTextWhite"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === "projects"
                    ? "active navbar-link myTextWhite"
                    : "navbar-link myTextWhite"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>
              <Nav.Link
                href="#contact"
                className={
                  activeLink === "contact"
                    ? "active navbar-link myTextWhite "
                    : "navbar-link myTextWhite"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Contatti
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
