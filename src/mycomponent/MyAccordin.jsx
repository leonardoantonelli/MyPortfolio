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
        My Skill Set:
      </h2>
      <Row className="mt-6 d-sm-flex flex-sm-column align-items-sm-center justify-sm-content-center d-lg-flex flex-lg-row ">
        <Col className="mycard ">
          {" "}
          <img src={icon1} alt="" className="h-50" />
          <h4>Grafic Design</h4>
          <p>
            Nato come grafico e renderista sono appassiato a tutto ciò che
            comprende la comunicione visiva e multimediale.
          </p>
        </Col>
        <Col className="mycard ">
          <img src={icon2} alt="" className="h-50" />
          <h4>Web Design</h4>
          <p>
            Uno dei miei punti forti è senza dubbio la passione e lo studio che
            ci metto nella UI e UX Design.
          </p>
        </Col>
        <Col className="mycard ">
          <img src={icon3} alt="" className="h-50" />
          <h4>Creatività</h4>
          <p>
            {" "}
            Mi piace pensare di essere un "Architetto della creatività", dalle
            mille idee, versatile e soprattutto lanciato a nuove esperienze.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <div class="tabs">
            <div class="tab">
              <label class="tab-label btn-grad" for="chck1">
                ADOBE
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
