import React from "react";
import video from "../../../Images/funny.mp4"
import style from "./style.module.scss";
const Trailer = () => {
  return (
    <div className="container mx-auto my-36">
      <div className="flex justify-center">
        {/* <iframe
          width="1405"
          height="658"
          src="https://www.youtube.com/embed/fS2JiSw37dU"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe> */}
        <video  width="1536" height="658" controls>
            <source src={video}/>
        </video>
      </div>
    </div>
  );
};

export default Trailer;
