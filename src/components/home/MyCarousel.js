import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "../../images/banner4.jpg";
import img2 from "../../images/banner5.jpg";
import img3 from "../../images/banner6.jpg";
const MyCarousel = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval="3000"
      className="carousel-style"
      showArrows={true}
      showThumbs={false}
      showStatus={false}
    >
      <div>
        <img src={img1} style={{ height: "80vh" }} />
      </div>
      <div>
        <img src={img2} style={{ backgroundSize: "cover", height: "80vh" }} />
      </div>
      <div>
        <img src={img3} style={{ backgroundSize: "cover", height: "80vh" }} />
      </div>
    </Carousel>
  );
};

export default MyCarousel;
