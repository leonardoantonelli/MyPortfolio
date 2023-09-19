import { Col, Container, Row } from "react-bootstrap";
import imgcv from "../assets/img/icon/imgcv.png";

function Presentation() {
  return (
    <>
      <Container id="home">
        <Row className=" d-flex aligh-items-center justify-content-between ">
          <Col className=" d-flex flex-column justify-content-center">
            <p className="myTextBlu fw-bold">Welcome to my Portfolio</p>
            <h1 className="myTextWhite "> Mi chiamo Leonardo Antonelli </h1>
            <div
              className="d-flex 
            "
            >
              {" "}
              <h3 className="static-txt display-6 myTextWhite d-sm-none d-md-flex">
                sono un{" "}
              </h3>
              <ul className="dynamic-txts myTextRed display-6 fw-bold d-sm-none d-md-block">
                <li>
                  <p>Grafic Designer</p>{" "}
                </li>
                <li>
                  <p>Junior Front-Ender</p>{" "}
                </li>
                <li>
                  <p>3D Model Lover</p>{" "}
                </li>
              </ul>
            </div>
            <p className="myTextWhite">
              Sono un giovane designer, laureato in Disegno Industriale / Design
              e Progettazzione nell'Università di Roma La Sapienza. Frequentato
              il corso di Front-End e Back-end presso la scuola Epicode,
              imparando dalle basi dell'HTML e CSS arrivando fino ad esplorare
              tutti i principi di React e Bootstrap, avendo un quadro completo
              dello sviluppo di pagine Web.
            </p>
            <a href=" mailto:antonellileonardodesign@gmail.com">
              <button className="btn-grad mybutton d-flex align-content-center justify-content-center">
                {" "}
                <h5 className="fw-bold"> Contattami </h5>
              </button>
            </a>
          </Col>

          <Col className=" d-flex justify-content-center align-content-center">
            <img src={imgcv} alt="" className="w-100 p-5" />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Presentation;
