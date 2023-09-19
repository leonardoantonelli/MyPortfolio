import { Col, Row } from "react-bootstrap";

import htmlicon from "../assets/img/icon/htmlicon.png";
import imgshop from "../assets/img//ShopNike/Risorsa 11.png";
import bootstrapicon from "../assets/img/icon/bootstrapicon.png";
import cssicon from "../assets/img/icon/cssicon.png";
import jsicon from "../assets/img/icon/jsicon.png";
import reacticon from "../assets/img/icon/reacticon.png";
import sassicon from "../assets/img/icon/sassicon.png";
function Nikeshop() {
  return (
    <>
      <Row className="d-flex  align-items-center my-3">
        <img src={imgshop} alt="" />
        <Col className=" d-flex align-items-center flex-column">
          <h2 className="myTextBlu fw-bolder"> Shop Nike</h2>
          <h5 className="myTextRed d-flex fw-bolder justify-content-center">
            {" "}
            Ui design{" "}
          </h5>{" "}
          <p className="px-5 mx-5 myTextWhite ">
            Progetto di creazione di uno shop onlinee che si occupa della
            vendita di scarpe, un esercizio utile per apprendere e migliore
            tutte le features di React, lavorarando per componenti e funzioni.
          </p>
          <button className="btn-grad mybutton d-flex align-content-center justify-content-center">
            {" "}
            <a
              href="https://github.com/leonardoantonelli/MyCapstone1 "
              className="text-decoration-none myTextWhite"
            >
              <h5 className="fw-bold"> Visita </h5>
            </a>{" "}
          </button>
        </Col>
        <Col
          className="d-flex aligh-items-center text-center my-5 flex-column
         "
        >
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
                <img src={bootstrapicon} alt="" className="programs-icon" />{" "}
                <p className="myTextWhite mt-3"> BOOTSTRAP 5</p>
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
                <img src={reacticon} alt="" className="programs-icon" />
                <p className="myTextWhite">REACT 18</p>
              </div>
              <div
                className="d-flex align-items-center
            "
              >
                <img src={sassicon} alt="" className="programs-icon" />
                <p className="myTextWhite"> SASS </p>
              </div>
            </div>
          </div>
        </Col>{" "}
      </Row>
    </>
  );
}

export default Nikeshop;