import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

type Props = {};

const HomeSlider = (props: Props) => {
  return (
    <Carousel width={"900px"}>
      <img src="https://picsum.photos/1600/900" alt="imagem" title="imagem" />
      <img src="https://picsum.photos/1600/900" alt="imagem" title="imagem" />
      <img src="https://picsum.photos/1600/900" alt="imagem" title="imagem" />
      <img src="https://picsum.photos/1600/900" alt="imagem" title="imagem" />
      <img src="https://picsum.photos/1600/900" alt="imagem" title="imagem" />
    </Carousel>
  );
};

export default HomeSlider;
