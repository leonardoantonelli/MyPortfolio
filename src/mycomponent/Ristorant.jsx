import { Col, Row } from "react-bootstrap";
import imgmed from "../assets/img/medium/Risorsa 2.png";
import htmlicon from "../assets/img/icon/htmlicon.png";
import cssicon from "../assets/img/icon/cssicon.png";
import jsicon from "../assets/img/icon/jsicon.png";
import CarouselRistorant from "./CarouselRistorant";

function Ristorant() {
  return (
    <>
      {" "}
      <Row className="d-flex  align-items-center my-5 " id="japan">
        <Col md={12} lg={6} className=" d-flex align-items-center flex-column">
          <h2 className="myTextBlu fw-bolder"> Japanes Restorant </h2>
          <h5 className="myTextRed d-flex fw-bolder justify-content-center">
            {" "}
            Front-end Develop{" "}
          </h5>{" "}
          <p className=" myTextWhite px-2 mx-2 "> </p>
          <p className=" myTextWhite px-2 mx-2 ">
            Benvenuti nel sito web del nostro ristorante giapponese, un progetto
            realizzato personalmente per celebrare la cucina autentica del
            Giappone. Esplorate il nostro menu completo online, dove potete
            selezionare e ordinare comodamente i vostri piatti preferiti per
            un'esperienza culinaria unica!{" "}
          </p>
          <a
            href="https://leonardoantonelli.github.io/menu-Japan/"
            className="text-decoration-none myTextWhite"
          >
            <button className="btn-grad2 fw-bold mb-6">Visita</button>
          </a>
        </Col>
        <Col className=" d-flex align-items-center justify-content-center flex-m-flex ">
          <CarouselRistorant></CarouselRistorant>
        </Col>
      </Row>
    </>
  );
}

export default Ristorant;
