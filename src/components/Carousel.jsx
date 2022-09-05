import React from "react";
import {
  StackedCarousel,
  ResponsiveContainer
} from "react-stacked-center-carousel";
// import Fab from "@material-ui/core/Fab";
// import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
// import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
// import "./Slide.css";
import { Slide } from "./Slide.jsx";
import { SlideMobile } from "./SlideMobile.jsx";

const data = [
  {
    image: "https://sun9-east.userapi.com/sun9-57/s/v1/ig2/d4a-CHYxI2H6Dcia97CGKFUMYE3f2DFmxt-NzZ7eQnjDL8t2jHkt4g2Ybz3vYuzf7mvvouMhCnNWVRiZf8BCMQ55.jpg?size=340x408&quality=96&type=album",
    text: "название товара"
  },
  {
    image: "https://sun9-east.userapi.com/sun9-57/s/v1/ig2/d4a-CHYxI2H6Dcia97CGKFUMYE3f2DFmxt-NzZ7eQnjDL8t2jHkt4g2Ybz3vYuzf7mvvouMhCnNWVRiZf8BCMQ55.jpg?size=340x408&quality=96&type=album",
    text: "название товара"
  },
  {
    image: "https://sun9-east.userapi.com/sun9-57/s/v1/ig2/d4a-CHYxI2H6Dcia97CGKFUMYE3f2DFmxt-NzZ7eQnjDL8t2jHkt4g2Ybz3vYuzf7mvvouMhCnNWVRiZf8BCMQ55.jpg?size=340x408&quality=96&type=album",
    text: "название товара"
  },
  {
    image: "https://sun9-east.userapi.com/sun9-57/s/v1/ig2/d4a-CHYxI2H6Dcia97CGKFUMYE3f2DFmxt-NzZ7eQnjDL8t2jHkt4g2Ybz3vYuzf7mvvouMhCnNWVRiZf8BCMQ55.jpg?size=340x408&quality=96&type=album",
    text: "название товара"
  },
  {
    image: "https://sun9-east.userapi.com/sun9-57/s/v1/ig2/d4a-CHYxI2H6Dcia97CGKFUMYE3f2DFmxt-NzZ7eQnjDL8t2jHkt4g2Ybz3vYuzf7mvvouMhCnNWVRiZf8BCMQ55.jpg?size=340x408&quality=96&type=album",
    text: "название товара"
  }
];

const Carousel = () => {
  const ref = React.useRef(StackedCarousel);
  return (
    <div className="card">
      <div style={{}}>
        <ResponsiveContainer
          carouselRef={ref}
          render={(width, carouselRef) => {
            return (
              <>
                <div className="carousel">
                  <StackedCarousel
                    ref={carouselRef}
                    slideComponent={Slide}
                    slideWidth={300}
                    carouselWidth={width}
                    data={data}
                    maxVisibleSlide={5}
                    disableSwipe
                    customScales={[1, 0.6, 0.4, 1]}
                    transitionTime={700}
                  /></div>

                <div className="carousel_mobile">
                  <StackedCarousel
                    ref={carouselRef}
                    slideComponent={SlideMobile}
                    slideWidth={200}
                    carouselWidth={width}
                    data={data}
                    maxVisibleSlide={3}
                    disableSwipe
                    customScales={[1, 0.7, 1]}
                    transitionTime={700}
                  />
                </div>
              </>


            );
          }}
        />
        {/* <Fab
          className="card-button left"
          size="small"
          onClick={() => ref.current?.goBack()}
        >
          <KeyboardArrowLeftIcon style={{ fontSize: 30 }} />
        </Fab>
        <Fab
          className="card-button right"
          size="small"
          onClick={() => ref.current?.goNext()}
        >
          <KeyboardArrowRightIcon style={{ fontSize: 30 }} /> */}
        {/* </Fab> */}
      </div>
    </div>
  );
};

export default Carousel;