import React from "react";
import style from "./style.module.scss";
import Slider from "react-slick";
import learn_1 from "../../../Images/learn_1.png";
import learn_2 from "../../../Images/learn_2.png";
import learn_3 from "../../../Images/learn_3.png";
import learn_4 from "../../../Images/learn_4.png";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

const Service = () => {

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
      <div className="flex mb-20 ">
        <h1 className={style.title}>Learn more about the service</h1>
      </div>
      <div>
        <Slider {...settings} className={style.list}>
          <div>
            <div className={style.items}>
              <div className="items-logo">
                <img src={learn_1} alt="learn_1" />
              </div>
              <div className={style.itemsText}>
                <h2>Cleaning</h2>
                <p>Hiện đại và uy tính, Tạo không gian sống sạch đẹp</p>
                <button>Tìm hiểu thêm</button>
              </div>
            </div>
          </div>{" "}
          <div>
            <div className={style.items}>
              <div className="items-logo">
                <img src={learn_2} alt="learn_2" />
              </div>
              <div className={style.itemsText}>
                <h2>Appliances</h2>
                <p>Experience ...</p>
                <button>Tìm hiểu thêm</button>
              </div>{" "}
            </div>
          </div>
          <div>
            <div className={style.items}>
              <div className="items-logo">
                <img src={learn_3} alt="learn_3" />
              </div>
              <div className={style.itemsText}>
                <h2>Household</h2>
                <p>Experience ...</p>
                <button>Tìm hiểu thêm</button>
              </div>{" "}
            </div>
          </div>
          <div>
            <div className={style.items}>
              <div className="items-logo">
                <img src={learn_4} alt="learn_4" />
              </div>
              <div className={style.itemsText}>
                <h2>Electronic</h2>
                <p>Experience ...</p>
                <button>Tìm hiểu thêm</button>
              </div>{" "}
            </div>
          </div>
          <div>
            <div className={style.items}>
              <div className="items-logo">
                <img src={learn_4} alt="learn_4" />
              </div>
              <div className={style.itemsText}>
                <h2>Electronic</h2>
                <p>Experience ...</p>
                <button>Tìm hiểu thêm</button>
              </div>{" "}
            </div>
          </div>
        </Slider>{" "}
      </div>
    </div>
  );
};

export default Service;
