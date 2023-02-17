import React from "react";
import style from "./style.module.scss";
import Slider from "react-slick";
import people_1 from "../../../Images/people_1.png";
import people_2 from "../../../Images/people_2.png";
import people_3 from "../../../Images/people_3.png";
import { Rate } from 'antd';

const Feedback = () => {

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
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
    <div className="container mx-auto mb-36">
       <div className="flex justify-center items-center flex-col">
        <h1 className={style.title}>Business Feedback</h1>
        <p className={style.text}>
        Sharing from associates experience with iService
        </p>
      </div>
      <div>
        <Slider {...settings} className={style.list}>
          <div>
            <div className={style.items}>
                <div className={style.top}>
                    <div className={style.logo}>
                <img src={people_1} alt="people_1" />
              </div>
              <div className={style.content}><h2>Cleaning</h2>
              <p>Hiện đại </p></div>
                </div>
              <div className={style.mid}>
              <Rate allowHalf defaultValue={5}/>
              </div>

              <div className={style.bot}>
                
                <p>The reports and orders for each service are very specific. Is an application worth sustainable cooperation.</p>
              
              </div>
            </div>
          </div>{" "}
          <div>
            <div className={style.items}>
                <div className={style.top}>
                    <div className={style.logo}>
                <img src={people_2} alt="people_2" />
              </div>
              <div className={style.content}><h2>Esther Howard</h2>
              <p>La pasteria</p></div>
                </div>
              <div className={style.mid}>
              <Rate allowHalf defaultValue={4}/>
              </div>

              <div className={style.bot}>
                
                <p>The reports and orders for each service are very specific. Is an application worth sustainable cooperation.</p>
              
              </div>
            </div>
          </div>
          <div>
            <div className={style.items}>
                <div className={style.top}>
                    <div className={style.logo}>
                <img src={people_3} alt="people_3" />
              </div>
              <div className={style.content}><h2>Robert Fox</h2>
              <p>La pasteria </p></div>
                </div>
              <div className={style.mid}>
              <Rate allowHalf defaultValue={5}/>
              </div>

              <div className={style.bot}>
                
                <p>The reports and orders for each service are very specific. Is an application worth sustainable cooperation.</p>
              
              </div>
            </div>
          </div>
        </Slider>{" "}
      </div>
    </div>
  );
};

export default Feedback;
