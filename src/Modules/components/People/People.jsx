import React from "react";
import style from "./style.module.scss";
import Slider from "react-slick";
import top_1 from "../../../Images/top_1.png";
import top_2 from "../../../Images/top_2.png";
import top_3 from "../../../Images/top_3.png";

const People = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <></>,
    prevArrow: <></>,
    appendDots: (dots) => <></>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container mx-auto mb-36 ">
      <div className="flex justify-center items-center flex-col">
        <h1 className={style.title}>Top businesses</h1>
        <p className={style.text}>
          Accompanying the application is indispensable for businesses that play
          a great role and contribute to the ecosystem. The same goal becomes
          the spearhead in some areas.
        </p>
      </div>
      <div>
        <Slider {...settings} className={style.list}>
          <div className={style.items}>
            <img  src={top_1} alt="top_1" />
          </div>
          <div className={style.items}>
            <img src={top_2} alt="top_2" />
            </div>
        <div className={style.items}>
              <img src={top_3} alt="top_3" />
        </div>
          {" "}
        </Slider>{" "}
      </div>
    </div>
  );
};

export default People;
