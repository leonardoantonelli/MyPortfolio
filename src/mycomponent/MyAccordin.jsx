import { Row, Col } from "react-bootstrap";
import icon1 from "../assets/img/icon/Risorsa 12.png";
import icon2 from "../assets/img/icon/Risorsa 13.png";
import icon3 from "../assets/img/icon/Risorsa 14.png";
function MyAccordin() {
  return (
    <>
      {" "}
      <h2
        id="skills"
        className="myTextWhite d-flex fw-bolder justify-content-center my-5 mymargintop"
      >
        Il mio Skill Set:
      </h2>
      <Row className="mt-6 d-sm-flex flex-md-column align-items-md-center justify-md-content-center d-lg-flex flex-lg-row ">
        <Col className="d-flex flex-column align-items-center justify-content-center ">
          <div className="mycard myBlackBg myTextWhite">
            {" "}
            <img src={icon1} alt="" className="h-50 p-2" />
            <h4 className="fw-bold">Grafic Design</h4>
            <p>
              Inizialmente formatosi come grafico e renderista, nutro una
              profonda passione per tutto ciò che riguarda la comunicazione
              visiva e multimediale.
            </p>
          </div>
        </Col>
        <Col className="d-flex flex-column align-items-center justify-content-center ">
          <div className="mycard myBlackBg myTextWhite">
            {" "}
            <img src={icon2} alt="" className="h-50 p-2" />
            <h4 className="fw-bold">Web Design</h4>
            <p>
              Uno dei miei punti di forza risiede nella dedizione e nello studio
              che investo nel campo dell'UI e dell'UX Design.
            </p>
          </div>
        </Col>
        <Col className="d-flex flex-column align-items-center justify-content-center w-100">
          <div className="mycard myBlackBg myTextWhite">
            {" "}
            <img src={icon3} alt="" className="h-50 p-2" />
            <h4 className="fw-bold">Creatività</h4>
            <p>
              {" "}
              Mi piace considerarmi un 'Architetto digitale' con una miriade di
              idee.
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div class="tabs">
            <div class="tab">
              <label class="tab-label btn-grad" for="chck1">
                ADOBE SUITE
              </label>
              <div className="tab-content d-flex flex-column text-center ">
                <h5 className=" ">
                  {" "}
                  <span> Illustrator</span>
                </h5>
                <h5 className="">
                  {" "}
                  <span> Photoshop</span>
                </h5>
                <h5 className="">
                  {" "}
                  <span> Indesign</span>
                </h5>
              </div>
            </div>
          </div>
        </Col>
        <Col>
          <div class="tabs">
            <div class="tab">
              <label class="tab-label btn-grad" for="chck1">
                WEB DEVELOP
              </label>
              <div className="tab-content d-flex flex-column text-center ">
                <h5 className=" ">
                  {" "}
                  <span> Html & Css </span>
                </h5>
                <h5 className="">
                  {" "}
                  <span> Javascript </span>
                </h5>
                <h5 className="">
                  {" "}
                  <span> Bootstrap & Sass </span>
                </h5>
                <h5 className="">
                  {" "}
                  <span>React </span>
                </h5>
              </div>
            </div>
          </div>
        </Col>
        <Col>
          <div class="tabs">
            <div class="tab shadow">
              <label class="tab-label btn-grad" for="chck1">
                DRAWING & 3D MODEL
              </label>
              <div className="tab-content  d-flex flex-column text-center ">
                <h5 className=" ">
                  {" "}
                  <span> Rhinoceros </span>
                </h5>
                <h5 className="">
                  {" "}
                  <span> 3D Studio Max </span>
                </h5>
                <h5 className="">
                  {" "}
                  <span> Cinema 4D </span>
                </h5>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default MyAccordin;
