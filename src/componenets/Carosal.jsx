import React from "react";
import Slider from "react-slick";
import DoctorCard from "./DoctorCard";
import Content from "./Content";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ items }) => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1600, // Adjust the breakpoint value as needed
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Adjust the breakpoint value as needed
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div style={{ padding: "50px", backgroundColor: "#d4e7f4" }}>
      <h1
        style={{
          fontWeight: "bold",
          fontSize: "40px",
          marginBottom: "20px",
          paddingBottom: "25px",
          textAlign: "center",
        }}
        className="content-heading"
      >
        Our Doctors{" "}
      </h1>
      <Slider {...settings}>
        {items.map((item) => (
          <div key={item.id}>
            <DoctorCard
              image={item.image}
              heading={item.heading}
              content={item.content}
              buttonText={item.buttonText}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
