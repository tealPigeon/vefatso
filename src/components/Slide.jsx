import React from "react";
// import { StackedCarouselSlideProps } from "react-stacked-center-carousel";
// import "./Slide.css";
import addToFavorites from '../add_to_favorites_black_stroke.svg';
import settings from '../settings.svg';
import ring from './ring.png'

export const Slide = React.memo(function (StackedCarouselSlideProps) {
  const {
    data,
    dataIndex,
    isCenterSlide,
    swipeTo,
    slideIndex
  } = StackedCarouselSlideProps;

  // const coverImage = data[dataIndex].image;
  const coverImage = ring;
  const text = data[dataIndex].text;

  console.log(coverImage);
  return (
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
            style={{ width: 300 }}
            alt="j"
            className="cover-image"
            src={coverImage}
          />
          <div style={{ fontFamily: 'Cormorant Garamond', fontStyle: "normal", fontWeight: 600, textAlign: "center", textTransform: "uppercase", fontSize: "33.6735px", display: "grid", gridTemplateRows: "1fr 1fr", marginBottom: "100px", width: "280px", marginTop: "20px" }}>
            <p>{text}</p>
            <div style={{ display: "grid", gridTemplateColumns: "15px 2fr 15px" }}>
              <img src={addToFavorites} style={{ width: "29px", height: "27px" }} />
              <p>2 300 р</p>
              <img src={settings} />
            </div>
          </div>

        </div>
      </div>
    </div>

  //   <div className="card-card" draggable={false}>
  //   <div className={`cover fill ${isCenterSlide ? "off" : "on"}`}>
  //     <div
  //       className="card-overlay fill"
  //       onClick={() => {
  //         if (!isCenterSlide) swipeTo(slideIndex);
  //       }}
  //     />
  //   </div>
  //   <div className="detail fill">
  //     <div className="discription">
  //       <img
  //         style={{ width: 200 }}
  //         alt="j"
  //         className="cover-image"
  //         src={coverImage}
  //       />
  //       <div style={{ fontFamily: 'Cormorant Garamond', fontStyle: "normal", fontWeight: 600, textAlign: "center", textTransform: "uppercase", fontSize: "24px", display: "grid", gridTemplateRows: "1fr 1fr", marginBottom: "100px", width: "200px", marginTop: "20px" }}>
  //         <p>{text}</p>
  //         <div style={{ display: "grid", gridTemplateColumns: "29px 2fr 29px" }}>
  //           <img src={addToFavorites} style={{ width: "29px", height: "27px" }} />
  //           <p>2 300 р</p>
  //           <img src={settings} style={{ width: "29px", height: "27px" }}/>
  //         </div>
  //       </div>

  //     </div>
  //   </div>
  // </div>
  );
});

export default Slide;