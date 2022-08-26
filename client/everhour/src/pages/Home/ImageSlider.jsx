import { Image } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import { SlideData } from "./SlideData";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// If you want to use your own Selectors look up the Advancaed Story book examples
const ImageSlider = () => {
  return (
    <Carousel infiniteLoop>
      {SlideData.map((slide,i) => {
        return <Image key={i} src={slide.image} height="auto" width="800px" />;
      })}
    </Carousel>
  );
};

export default ImageSlider;
