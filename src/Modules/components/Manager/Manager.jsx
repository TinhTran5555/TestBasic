import React from 'react'
import desktop from "../../../Images/desktop.png";
import appstore from "../../../Images/Appstore.png";
import googleplay from "../../../Images/googleplay.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import style from "./style.module.scss";
const Manager = () => {
    return (
        <div className="container mx-auto mb-36 flex justify-center">
          <div className="flex justify-center w-full">
            <div className="customer-left w-1/2 flex justify-center ">
              <div >
    
                <img src={desktop} alt="iphone12" />
              </div>

            </div>
            <div className="customer-right w-1/2">
              <div className={style.right}>
                <h1>Apps for customers</h1>
                <p className="content">
                  The general idea behind "diversification" is to provide a Service
                  ecosystem that fully caters to all customer needs from the
                  smallest needs
                </p>
                <div className={style.social}>
                  <div className={style.googleplay} >
                    <a href="#">
                      <img src={googleplay} alt="googleplay" /></a>
                  </div>
                  <div className="download">
                    <a href="#">
                      <img src={appstore} alt="appstore" /></a>
                  </div>
                </div>
                <div className={style.link}>
                  <a href="#">
    
                    <span >See more</span>
                    <span>
                      <FontAwesomeIcon icon={faChevronDown} />
                    </span>
                  </a></div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Manager