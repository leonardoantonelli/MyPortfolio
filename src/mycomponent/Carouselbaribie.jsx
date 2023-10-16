import Carousel from "react-bootstrap/Carousel";

import img1 from "../assets/img/Barbiepage/Asset 10.png";
import img2 from "../assets/img/Barbiepage/Asset 9.png";
import img3 from "../assets/img/Barbiepage/Asset 11.png";
import img4 from "../assets/img/Barbiepage/Asset 12.png";
function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={img2} className="w-100" />
      </Carousel.Item>{" "}
      <Carousel.Item>
        <img src={img4} className="w-100" />
      </Carousel.Item>{" "}
      <Carousel.Item>
        <img src={img3} className="w-100" />
      </Carousel.Item>{" "}
      <Carousel.Item>
        <img src={img1} className="w-100" />
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
