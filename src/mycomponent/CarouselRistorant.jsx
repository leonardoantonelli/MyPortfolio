import Carousel from "react-bootstrap/Carousel";

import img1 from "../assets/img/Restorant/Asset 27.png";
import img2 from "../assets/img/Restorant/Asset 28.png";
import img3 from "../assets/img/Restorant/Asset 29.png";

function CarouselRisotant() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={img2} className="w-100" />
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

export default CarouselRisotant;
