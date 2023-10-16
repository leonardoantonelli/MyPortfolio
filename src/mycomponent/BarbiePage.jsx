import { Col, Row } from "react-bootstrap";
import imgmed from "../assets/img/medium/Risorsa 2.png";
import htmlicon from "../assets/img/icon/htmlicon.png";
import cssicon from "../assets/img/icon/cssicon.png";
import jsicon from "../assets/img/icon/jsicon.png";
import Carouselbaribie from "./Carouselbaribie";

function Barbiepage() {
  return (
    <>
      {" "}
      <Row className="d-flex  align-items-center my-5 " id="barbie">
        <Col md={12} lg={6} className=" d-flex align-items-center flex-column">
          <h2 className="myTextBlu fw-bolder"> Barbie </h2>
          <h5 className="myTextRed d-flex fw-bolder justify-content-center">
            {" "}
            Front-end Develop{" "}
          </h5>{" "}
          <p className=" myTextWhite px-2 mx-2 "> </p>
          <p className=" myTextWhite px-2 mx-2 ">
            Benvenuti nella Magia di Barbie! Cosa troverete sulla pagina? Un
            Mondo di Fantasia: La nostra landing page vi immergerà in un mondo
            incantato fatto di colori vivaci, magia e avventure straordinarie.
            L'ambiente grafico creato con HTML e CSS è un vero e proprio omaggio
            all'universo incantato di Barbie!{" "}
          </p>
          <a
            href="https://leonardoantonelli.github.io/barbie-landingpage/ "
            className="text-decoration-none myTextWhite"
          >
            <button className="btn-grad2 fw-bold mb-6">Visita</button>
          </a>
        </Col>
        <Col className=" d-flex align-items-center justify-content-center flex-m-flex ">
          <Carouselbaribie />
        </Col>
      </Row>
    </>
  );
}

export default Barbiepage;
