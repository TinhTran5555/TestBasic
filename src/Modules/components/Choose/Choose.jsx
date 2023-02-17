import React from "react";
import style from "./style.module.scss";
import Slider from "react-slick";
import choose_1 from "../../../Images/choose_1.png";
import choose_2 from "../../../Images/choose_2.png";
import choose_3 from "../../../Images/choose_3.png";
import choose_4 from "../../../Images/choose_4.png";

const Choose = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <></>,
    prevArrow: <></>,
    appendDots: dots => (
             <></>),
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 425,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
  return (
    <div className="container mx-auto mb-36 ">
      <div className="flex justify-center items-center flex-col">
        <h1 className={style.title}>Why choose us</h1>
        <p className={style.text}>
          Modern consumer trends: Focus on top-selected services. Changing
          business models to adapt to new consumer trends: Applying the latest
          technology
        </p>
      </div>
      <div>
        <Slider {...settings} className={style.list}>
          <div>
            <div className={style.items}>
              <div className="items-logo">
                <img src={choose_1} alt="choose_1" />
              </div>
              <div className={style.itemsText}>
                <h2>Professional</h2>
              </div>
            </div>
          </div>{" "}
          <div>
            <div className={style.items}>
              <div className="items-logo">
                <img src={choose_2} alt="choose_2" />
              </div>
              <div className={style.itemsText}>
                <h2>Fast</h2>
              </div>{" "}
            </div>
          </div>
          <div>
            <div className={style.items}>
              <div className="items-logo">
                <img src={choose_3} alt="choose_3" />
              </div>
              <div className={style.itemsText}>
                <h2>Multi service</h2>
              </div>{" "}
            </div>
          </div>
          <div>
            <div className={style.items}>
              <div className="items-logo">
                <img src={choose_4} alt="choose_4" />
              </div>
              <div className={style.itemsText}>
                <h2>Safty, quality</h2>
              </div>{" "}
            </div>
          </div>
        </Slider>{" "}
      </div>
    </div>
  );
};

export default Choose;
