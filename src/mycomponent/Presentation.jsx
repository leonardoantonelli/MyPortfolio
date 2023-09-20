import { Col, Container, Row } from "react-bootstrap";
import imgcv from "../assets/img/icon/imgcv.png";

function Presentation() {
  return (
    <>
      <Container id="home">
        <Row className=" d-flex aligh-items-center justify-content-between ">
          <Col
            xs={12}
            md={8}
            className=" px-2 mx-2 d-flex flex-column justify-content-center"
          >
            <p className="myTextBlu fw-bold px-2 mx-2 mt-5">
              Benvenuto sul mio Portfolio
            </p>
            <h2 className="myTextWhite px-2 mx-2 ">
              {" "}
              Mi chiamo Leonardo Antonelli{" "}
            </h2>
            <div
              className="d-flex 
            "
            >
              <h3 className="static-txt display-6 myTextWhite px-2 mx-2 d-none d-lg-block ">
                sono un{" "}
              </h3>
              <ul className="dynamic-txts myTextRed display-6 fw-bold d-none d-lg-block">
                <li>
                  <p>Graphic Designer</p>{" "}
                </li>
                <li>
                  <p>Junior Front-Ender</p>{" "}
                </li>
                <li>
                  <p>3D Model Lover</p>{" "}
                </li>
              </ul>

              <ul className="dynamic-txts2 myTextRed display-6 fw-bold  d-lg-none">
                <li>
                  <p>Grafic Designer</p>{" "}
                </li>
                <li>
                  <p>Junior Front-End Dev</p>{" "}
                </li>
                <li>
                  <p>3D Model Lover</p>{" "}
                </li>
              </ul>
            </div>
            <p className="myTextWhite px-2 mx-2">
              Sono un giovane designer laureato in Disegno Industriale/Design e
              Progettazione presso l'Università di Roma La Sapienza. Ho seguito
              il corso di Front-End e Back-End presso la scuola Epicode,
              acquisendo competenze che vanno dalle fondamenta di HTML e CSS
              fino all'esplorazione dei principi di React e Bootstrap. Questo mi
              ha fornito una solida base per lo sviluppo di pagine web."
            </p>
            <a href=" mailto:antonellileonardodesign@gmail.com">
              <button className="btn-grad2 px-2 mx-2 fw-bold">
                {" "}
                Contattami
              </button>
            </a>
          </Col>

          <Col className=" d-flex justify-content-center align-content-center">
            <img src={imgcv} alt="" className="w-100 " />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Presentation;
