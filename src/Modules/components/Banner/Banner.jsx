import React from "react";
import { Carousel } from "antd";
import "./style.scss";
import banner_1 from "../../../Images/banner_1.png";
import banner_2 from "../../../Images/banner_2.jpg";
import banner_3 from "../../../Images/banner_3.jpg";
import banner_4 from "../../../Images/banner_4.jpg";

const bannerImg = [
  { src: banner_1, alt: "banner_1" },
  { src: banner_2, alt: "banner_2" },
  { src: banner_3, alt: "banner_3" },
  { src: banner_4, alt: "banner_4" },
];
const Banner = () => {
  return (
    <Carousel className="banner">
      {bannerImg.map((items, index) => {
        return (
          <div key={index}>
            <img src={items.src} alt={items.alt} />
          </div>
        );
      })}
    </Carousel>
  );
};

export default Banner;
