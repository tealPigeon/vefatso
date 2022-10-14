import React from "react";
import {
  StackedCarousel,
  ResponsiveContainer
} from "react-stacked-center-carousel";
import { Slide } from "./Slide.jsx";
import "./Carousel.css";
import Slider from "react-slick";
import { ReactComponent as Favorites } from '../favorites_product.svg';
import { ReactComponent as Settings } from '../settings.svg';
import { disablePageScroll, enablePageScroll, getScrollState } from 'scroll-lock';

function Carousel({ slides, url }) {
  let data = []
  slides.forEach((slide) => {
    data.push({
      id: slide.id,
      // image: `http://85.193.91.30/media/${slide.picture}`,
      image: url + slide.picture,
      text: slide.title, 
      price:slide.price,
      is_favorite:slide.is_favorite
    })
  });

  const settings = {
    infinite: true,
    className: "center",
    centerMode: true,
    slidesToShow: 3,
    speed: 500,
    variableWidth: true,
    adaptiveHeight: true,
    focusOnSelect: true,
    centerPadding: "20px",
  };


  const ref = React.useRef(StackedCarousel);

  function onClick() {
    disablePageScroll();
    // console.log("скролл заблочен")
  }

  function onPointerUp() {
    enablePageScroll()
    // console.log("скролл разблочен")
  }


  
  return (
    <div className="card">
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
                    height={516}
                    useGrabCursor={false}
                  /></div>

                <div className="carousel_mobile">

                  <Slider {...settings}  >
                    {slides.map((slide) => {
                      return <div className="discription" style={{ width: 230 }} onPointerLeave={() => onPointerUp()} onPointerDown={() => onClick()} onPointerUp={() => onPointerUp()} key={slide.id}>
                        <img
                          className="cover-image"
                          style={{ width: 200 }}
                          alt="product_image"
                          src={url + slide.picture} />

                        <div className="wrapper__product_info" style={{ fontFamily: 'Cormorant Garamond', fontStyle: "normal", fontWeight: 600, textAlign: "center", textTransform: "uppercase", fontSize: "20px", marginBottom: "100px", marginTop: "20px" }}>
                          <p>{slide.title}</p>
                          <div style={{ display: "flex", justifyContent: "center", gap: "40px", marginTop: "11px" }}>
                            {/* <Favorites className="slider_addToFavorites " /> */}
                            <Favorites className={`${slide.is_favorite ? "slide_isFavorites" : "slider_addToFavorites"}`} />
                            <p className="slider__price">{slide.price}</p>
                            <Settings style={{ width: "26px", height: "21px", cursor: "pointer" }} />
                          </div>
                        </div>
                      </div>
                    })
                    }

                  </Slider>
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