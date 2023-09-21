import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Col, Row } from "react-bootstrap";

import { FiGithub, FiPhone, FiMessageCircle } from "react-icons/fi";
export default function App() {
  return (
    <MDBFooter
      id="contact"
      className="myBlackDarkBg myTextWhite my-5 text-white "
    >
      <MDBContainer className="p-4 pb-0 ">
        <Row>
          {" "}
          <Col>
            {" "}
            <p className="display-3"> Contattami</p>
          </Col>
          <Col></Col>
          <Col
            className="d-flex flex-column fs-5
           "
          >
            <h6>
              <a
                href=" https://github.com/leonardoantonelli"
                className="text-decoration-none myTextWhite"
              >
                <FiGithub /> @leonardoantonelli{" "}
              </a>
            </h6>
            <h6>
              <a
                href="mailto:antonellileonardodesign@gmail.com "
                className="textdecorationnone myTextWhite"
              >
                <FiMessageCircle /> antonellileonardodesign@gmail.com{" "}
              </a>
            </h6>
            <h6>
              {" "}
              <a
                href="tel:3285405551"
                className="textdecorationnone myTextWhite"
              >
                <FiPhone /> +39 3285405551
              </a>
            </h6>
          </Col>
          <Col></Col>{" "}
        </Row>
      </MDBContainer>
    </MDBFooter>
  );
}
