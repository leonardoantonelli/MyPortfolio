import { Col, Row } from "react-bootstrap";
import imgmed from "../assets/img/medium/Risorsa 2.png";
import htmlicon from "../assets/img/icon/htmlicon.png";
import cssicon from "../assets/img/icon/cssicon.png";
import jsicon from "../assets/img/icon/jsicon.png";

function MediumProject() {
  return (
    <>
      {" "}
      <Row className="d-flex  align-items-center my-3" id="medium">
        <Col md={12} lg={6} className=" d-flex align-items-center flex-column">
          <h2 className="myTextBlu fw-bolder"> Medium </h2>
          <h5 className="myTextRed d-flex fw-bolder justify-content-center">
            {" "}
            Front-end Develop{" "}
          </h5>{" "}
          <p className=" myTextWhite px-2 mx-2 ">
            Nel progetto Medium, ho riprodotto il sito ufficiale medium.com,
            mettendo in evidenza le tecniche di base di CSS e Javascript. Nel
            contesto del corso Epicode, ho avuto l'opportunità di approfondire
            le mie competenze esercitandomi nella replica di noti siti web, tra
            cui Netflix, Spotify e altri.
          </p>
          <div className="text-center ">
            {" "}
            <h5 className="myTextWhite"> Software utillizzati</h5>
          </div>
          <div className="d-flex ">
            {" "}
            <div className="d-flex flex-column align-items-center mx-3">
              <img src={htmlicon} alt="" className="programs-icon" />
              <p className="myTextWhite"> HTML 5 </p>
            </div>
            <div className="d-flex flex-column align-items-center ms-3 ">
              <img src={cssicon} alt="" className="programs-icon" />
              <p className="myTextWhite">CSS</p>
            </div>
            <div className="d-flex flex-column align-items-center mx-3">
              {" "}
              <img src={jsicon} alt="" className="programs-icon" />
              <p className="myTextWhite"> JAVASCRIPT </p>
            </div>
          </div>
        </Col>
        <Col className=" d-flex align-items-center justify-content-center flex-m-flex ">
          <img src={imgmed} alt="" className="imgpc" />
        </Col>
      </Row>
    </>
  );
}

export default MediumProject;
