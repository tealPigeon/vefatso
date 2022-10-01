import React from "react";
import {
  StackedCarousel,
  ResponsiveContainer
} from "react-stacked-center-carousel";
import { Slide } from "./Slide.jsx";
import { SlideMobile } from "./SlideMobile.jsx";
import "./Carousel.css";

function Carousel({slides, url})
{
  let data = []
  slides.forEach((slide)=>{
  data.push( {
        id:slide.id,
        // image: `http://85.193.91.30/media/${slide.picture}`,
        image: url+slide.picture,
        text: slide.title
      })
  });

  const ref = React.useRef(StackedCarousel);
  return (
    <div className="card" >
      <div style={{ width: "100%", position: "relative" }}>
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
                    swipe={true}
                    height={516}
                  /></div>

                <div className="carousel_mobile">
                  <StackedCarousel
                    ref={carouselRef}
                    slideComponent={SlideMobile}
                    slideWidth={200}
                    carouselWidth={width}
                    data={data}
                    maxVisibleSlide={3}
                    customScales={[1, 0.7, 1]}
                    transitionTime={700}
                    useGrabCursor={true}
                    height={516}
                  />
                </div>
              </>
            );
          }}
        />
      </div>
    </div>
  );
};

export default Carousel;