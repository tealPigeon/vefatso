
import React from "react";
// import { StackedCarouselSlideProps } from "react-stacked-center-carousel";
// import "./Slide.css";
// import addToFavorites from '../add_to_favorites_black_stroke.svg';
// import settings from '../settings.svg';
import { ReactComponent as Favorites } from '../add_to_favorites_black_stroke.svg';
import { ReactComponent as Settings } from '../settings.svg';

export const SlideMobile = React.memo(function (StackedCarouselSlideProps) {
  const {
    data,
    dataIndex,
    isCenterSlide,
    swipeTo,
    slideIndex
  } = StackedCarouselSlideProps;

    const coverImage = data[dataIndex].image;
  const text = data[dataIndex].text;

  return (

    <>
      <div className="card-card" draggable={false}>
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
            className="cover-image"
              style={{ width: 200 }}
              alt="product_image"
              src={coverImage}
            />
            <div style={{ display: `${isCenterSlide ? "block" : "none"}` }}>

              <div style={{ fontFamily: 'Cormorant Garamond', fontStyle: "normal", fontWeight: 600, textAlign: "center", textTransform: "uppercase", fontSize: "20px", marginBottom: "100px", marginTop: "20px" }}>
                <p>{text}</p>
                <div style={{ display: "flex", justifyContent: "center", gap: "40px", marginTop: "11px" }}>
                  <Favorites className="slider_addToFavorites" />
                  <p className="slider__price">2 300 р</p>
                  <Settings style={{ width: "26px", height: "21px", cursor: "pointer" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  );

}

);

export default SlideMobile;
