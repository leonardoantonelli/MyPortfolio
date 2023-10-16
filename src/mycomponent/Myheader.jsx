import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { useState, useEffect } from "react";
import MyAccordin from "./MyAccordin";
import Footer from "./Footer";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function ColorSchemesExample() {
  const [activeLink, setActiveLink] = useState("home");
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <>
      <Navbar className="myBlackDarkBg myTextWhite shadow navbar-expand-lg">
        <Container>
          <Navbar.Brand
            href="#home"
            className=" fw-bolder myTextWhite dimensheadertitle "
          >
            Portfolio
          </Navbar.Brand>
          <Nav className="me-auto fs-4 d-sm-none d-md-flex">
            <Navbar.Collapse>
              {" "}
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills"
                    ? "active navbar-link myTextWhite dimensheader "
                    : "navbar-link myTextWhite dimensheader"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === "projects"
                    ? "active navbar-link myTextWhite dimensheader"
                    : "navbar-link myTextWhite dimensheader"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Progetti
              </Nav.Link>
              <Nav.Link
                href="#contact"
                className={
                  activeLink === "contact"
                    ? "active navbar-link myTextWhite dimensheader"
                    : "navbar-link myTextWhite dimensheader"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Contatti
              </Nav.Link>
            </Navbar.Collapse>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
