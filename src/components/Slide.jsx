import React from "react";
import {ReactComponent as Favorites} from '../favorites_product.svg';
import {ReactComponent as Settings} from '../settings.svg';
import "./Slide.css"

export const Slide = React.memo(function (StackedCarouselSlideProps) {
  const {
    data,
    dataIndex,
    isCenterSlide,
    swipeTo,
    slideIndex
  } = StackedCarouselSlideProps;

  const coverImage = data[dataIndex].image;
  const text = data[dataIndex].text;
  const id = data[dataIndex].id;

  return (
    <div className="card-card" key={id}>
      <div className={`cover fill ${isCenterSlide ? "off" : "on"}`}>
        <div
          className="card-overlay fill"
          onClick={() => {
            if (!isCenterSlide) swipeTo(slideIndex);
          }}
        />
      </div>
      <div className="detail fill">
        <div className="discription">
          <img
            alt="j"
            className="cover-image product_image"
            src={coverImage}
          />
          <div style={{ display: `${isCenterSlide ? "block" : "none"}`}}>
            <div className="product_title" >
              <p>{text}</p>
              <div className="product_button_wrapper" >
                <Favorites className="slider_addToFavorites" />
                <p className="slider__price">2 300 р</p>
                <Settings className="slider__settings" /> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Slide;