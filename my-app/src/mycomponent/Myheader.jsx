import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { useState, useEffect } from "react";
import MyAccordin from "./MyAccordin";
import Footer from "./Footer";
import Navbar from "react-bootstrap/Navbar";
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
      <BrowserRouter>
        <Navbar className="myBlackDarkBg myTextWhite shadow">
          <Container>
            <Navbar.Brand href="#home" className="fs-1 fw-bolder myTextWhite">
              <h1>Leonardo Antonelli </h1>
            </Navbar.Brand>
            <Nav className="me-auto fs-4 d-sm-none d-md-flex">
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
          </Container>
        </Navbar>

        <Routes>
          <Route path="/skills" element={<MyAccordin />} />
          <Route path="/contatti" element={<Footer />} />
          <Route path="/projects" element={<Silv />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default ColorSchemesExample;
