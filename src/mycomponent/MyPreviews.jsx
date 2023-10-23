import { Row, Col, Container } from "react-bootstrap";
import icon1 from "../assets/img/Previews/Asset 1.png";
import icon2 from "../assets/img/Previews/Asset 2.png";
import icon3 from "../assets/img/Previews/Asset 3.png";
import icon4 from "../assets/img/Previews/Asset 4.png";
import icon5 from "../assets/img/Previews/Asset 5.png";
import icon6 from "../assets/img/Previews/Asset 6.png";
import Mycardpreviews from "./Mycardpreviews";

function Mypreviews() {
  return (
    <>
      {" "}
      <Container>
        <h2
          id="projects"
          className="myTextWhite d-flex fw-bolder justify-content-center my-5 mymargintop mb-4
          "
        >
          I miei progetti:
        </h2>
        <Row className="mb-6">
          <Col xs={6} lg={4}>
            {" "}
            <Mycardpreviews icon={icon4} a={"#silv"} />
          </Col>{" "}
          <Col xs={6} lg={4}>
            {" "}
            <Mycardpreviews icon={icon3} a={"#barbie"} />
          </Col>
          <Col xs={6} lg={4}>
            {" "}
            <Mycardpreviews icon={icon1} a={"#medium"} />
          </Col>
          <Col xs={6} lg={4}>
            {" "}
            <Mycardpreviews
              icon={icon2}
              a={"https://leonardoantonelli.github.io/pokedex/"}
            />
          </Col>
          <Col xs={6} lg={4}>
            {" "}
            <Mycardpreviews icon={icon5} a={"#adidas"} />
          </Col>
          <Col xs={6} lg={4}>
            {" "}
            <Mycardpreviews icon={icon6} a={"#baymish"} />{" "}
          </Col>
        </Row>{" "}
      </Container>
    </>
  );
}

export default Mypreviews;
