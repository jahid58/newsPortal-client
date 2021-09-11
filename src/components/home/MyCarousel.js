import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "../../images/banner4.jpg";
import img2 from "../../images/banner5.jpg";
import img3 from "../../images/banner6.jpg";
const MyCarousel = () => {
  const text = {
    position: "absolute",
    zIndex: "50",
    color: "black",
    fontSize: "40px",
    fontWeight: "700",
    backgroundColor: "rgba(256,226,224,.2)",
    fontFamily: "vardana",
    top: "30%",
    width: "100%",
    textTransform: "uppercase",
    padding: "30px",
  };
  const parent = { position: "relative" };
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
      <div style={parent}>
        <img
          src={img1}
          alt="this is banner"
          style={{ height: "80vh", filter: "blur(3px)" }}
        />
        <h2 style={text}>
          Select Category and <br /> update yourself with your choice
        </h2>
      </div>
      <div style={parent}>
        <img
          src={img2}
          alt="this is banner"
          style={{
            backgroundSize: "cover",
            height: "80vh",
            filter: "blur(3px)",
          }}
        />
        <h2 style={text}>
          Get Latest News and <br />
          stay connected with the world
        </h2>
      </div>
      <div style={parent}>
        <img
          src={img3}
          alt="this is the banner"
          style={{
            backgroundSize: "cover",
            height: "80vh",
            filter: "blur(3px)",
          }}
        />
        <h2 style={text}>
          Drop a Comment and <br /> help us to update
        </h2>
      </div>
    </Carousel>
  );
};

export default MyCarousel;
