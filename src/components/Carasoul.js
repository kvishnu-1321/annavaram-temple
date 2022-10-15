import React from "react";
import Carousel from "react-bootstrap/Carousel";
import carousalimg from "../Assets/images/carousalimg1.jpg";
import carousalimg2 from "../Assets/images/carousalimg2.jpg";

const Carasoul = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img className="d-block w-100" src={carousalimg} alt={carousalimg} />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={carousalimg2} alt={carousalimg} />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={carousalimg} alt={carousalimg} />
      </Carousel.Item>
    </Carousel>
  );
};

export default Carasoul;
