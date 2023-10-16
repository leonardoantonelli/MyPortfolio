import { Col, Row } from "react-bootstrap";
import img1 from "../assets/img/Baymish/1.jpg";
import img2 from "../assets/img/Baymish/2.jpg";
import img3 from "../assets/img/Baymish/3.jpg";
import imglogo from "../assets/img/Baymish/logo finale.png";
import img16 from "../assets/img/Baymish/JewelleryCollection-4.jpg";
import img14 from "../assets/img/Baymish/JewelleryCollection-7.jpg";
import img15 from "../assets/img/Baymish/JewelleryCollection-9.jpg";
import smartph from "../assets/img/Baymish/Risorsa 7.png";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
function BaymishProject() {
  return (
    <>
      <Row className="d-flex  align-items-center my-5" id="baymish">
        <Col xs={12} lg={6} className=" d-flex align-items-center flex-column">
          <MDBCarousel>
            <MDBCarouselItem
              className="w-100 d-block"
              itemId={1}
              src={img1}
              alt="..."
            />
            <MDBCarouselItem
              className="w-100 d-block"
              itemId={2}
              src={img2}
              alt="..."
            />
            <MDBCarouselItem
              className="w-100 d-block"
              itemId={3}
              src={img3}
              alt="..."
            />
          </MDBCarousel>{" "}
        </Col>
        <Col className=" d-flex align-items-center flex-column mt-4">
          <h2 className="myTextBlu fw-bolder">Baymish</h2>
          <h5 className="myTextRed d-flex fw-bolder justify-content-center">
            {" "}
            Grafic Design{" "}
          </h5>{" "}
          <p className="px-2 mx-2 myTextWhite ">
            Nella gestione della comunicazione sui social media per Baymish, un
            nuovo brand nel campo del Jewelry Design, ho creato moodboard e
            immagini per le diverse piattaforme, sfruttando la mia passione per
            la fotografia e l'editing.
          </p>
        </Col>
      </Row>
      <Row className="d-flex  align-items-center ">
        <Col
          xs={12}
          lg={6}
          className=" d-flex align-items-center justify-content-evenly "
        >
          <img src={imglogo} alt="" />
          <img src={smartph} alt="" className="w-50" />
        </Col>
        <Col>
          <MDBCarousel>
            <MDBCarouselItem
              className="w-100 d-block "
              itemId={1}
              src={img16}
              alt="..."
            />
            <MDBCarouselItem
              className="w-100 d-block  "
              itemId={2}
              src={img14}
              alt="..."
            />
            <MDBCarouselItem
              className="w-100 d-block "
              itemId={3}
              src={img15}
              alt="..."
            />
          </MDBCarousel>
        </Col>
      </Row>
    </>
  );
}

export default BaymishProject;
