import { Col, Row } from "react-bootstrap";
import smart1 from "../assets/img/SilvProject/smart1n.png";
import smart2 from "../assets/img/SilvProject/smart2n.png";
import pc1 from "../assets/img/SilvProject/tablet_and_laptop_on_transparent_background.png";
import htmlicon from "../assets/img/icon/htmlicon.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import bootstrapicon from "../assets/img/icon/bootstrapicon.png";
import cssicon from "../assets/img/icon/cssicon.png";
import jsicon from "../assets/img/icon/jsicon.png";

import { isVisible } from "@testing-library/user-event/dist/utils";

function SilvProject() {
  return (
    <>
      <Row id="projects" className="d-flex  align-items-center my-3">
        <h2 className="myTextWhite d-flex fw-bolder justify-content-center my-5">
          My Projects:
        </h2>

        <Col className=" d-flex align-items-center flex-column mb-3">
          <h2 className="myTextBlu fw-bolder"> Silv</h2>
          <h5 className="myTextRed d-flex fw-bolder justify-content-center">
            {" "}
            Ui design{" "}
          </h5>
          <p className=" myTextWhite px-2 mx-2 ">
            Il progetto Silv si è basato sulla ricerca e studio di un'estetica
            web che si potesse adattare all'azienda produttrice di creme che ha
            già una brand identity forte. Il progetto consiste in una
            landing-page composta di una main section d'impatto, una breve
            storia dell'azienda, una carrellata di quattro prodotti e una
            section che parla dello staff.
          </p>
          <a
            href="https://github.com/leonardoantonelli/ "
            className="text-decoration-none myTextWhite"
          >
            <button className="btn-grad2 fw-bold mb-6">Visita</button>
          </a>
        </Col>
        <Col
          xs={12}
          md={6}
          className=" d-flex align-items-center justify-content-center flex-m-flex "
        >
          <img src={smart1} alt="" className="vert-move w-50" />
          <img src={smart2} alt="" className=" vert-move2 w-50" />
        </Col>
      </Row>
      <Row className="d-flex  align-items-center my-3 ">
        <Col lg="8" s="6">
          <img src={pc1} alt="" className=" w-100" />
        </Col>

        <Col
          className="d-flex aligh-items-center text-center flex-column
         "
        >
          <div className="text-center ">
            {" "}
            <h5 className="myTextWhite"> Software utillizzati</h5>
          </div>
          <div className="d-flex justify-content-center">
            {" "}
            <div className="d-flex flex-column align-items-stretch me-4 ">
              <div
                className="d-flex align-items-center
            "
              >
                {" "}
                <img src={htmlicon} alt="" className="programs-icon" />
                <p className="myTextWhite"> HTML 5 </p>
              </div>

              <div
                className="d-flex align-items-center
            "
              >
                <img src={cssicon} alt="" className="programs-icon" />
                <p className="myTextWhite">CSS</p>
              </div>
            </div>
            <div className="d-flex aligh-items-center flex-column ">
              <div
                className="d-flex align-items-center
            "
              >
                <img src={jsicon} alt="" className="programs-icon" />
                <p className="myTextWhite"> JAVASCRIPT </p>
              </div>
              <div
                className="d-flex align-items-center
            "
              >
                <img src={bootstrapicon} alt="" className="programs-icon" />{" "}
                <p className="myTextWhite mt-3"> BOOTSTRAP 5</p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default SilvProject;
