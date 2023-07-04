import React from "react";
import { data } from "../../constants/data";
import { Image } from "antd";
import "./HomeLayout.css";

type Props = {};

const HomeLayout = (props: Props) => {
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
