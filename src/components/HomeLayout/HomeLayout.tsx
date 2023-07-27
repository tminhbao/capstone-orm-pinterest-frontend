import React, { useState } from "react";
import { data } from "../../constants/data";
import { Image } from "antd";
import "./HomeLayout.css";
import HomeSlider from "../HomeSlider/HomeSlider";

type Props = {};

const HomeLayout = (props: Props) => {
  const [isLogin, setIsLogin] = useState(false);

  const colashImages = (link: string) => {
    return (
      <>
        <img src={link} alt="colash-image" />
        <img src={link} alt="colash-image" />
        <img src={link} alt="colash-image" />
        <img src={link} alt="colash-image" />
        <img src={link} alt="colash-image" />
        <img src={link} alt="colash-image" />
      </>
    );
  };
  const link =
    "https://i.pinimg.com/236x/d3/fb/69/d3fb6973cddc1d875dc7c2e04525d2e7.jpg";

  if (!isLogin) {
    return (
      <div className="d-flex justify-content-center">
        <HomeSlider />
      </div>
    );
  }
  return (
    <div className="gallery">
      {data.map((image, idx) => {
        return (
          <div key={idx} className="item">
            <Image src={image.img} alt="unsplash" />
          </div>
        );
      })}
    </div>
  );
};

export default HomeLayout;
