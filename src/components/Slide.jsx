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
  const price = data[dataIndex].price;
  const is_favorite = data[dataIndex].is_favorite;


//   const changeFavorite = async(id)=> {
//     console.log(id)
//     if(is_favorite !== undefined && is_favorite===false) {
//         await fetch(`http://85.193.91.30/user/add_to_favorites`, {
//             headers: {
//                 "Content-Type": "application/json;charset=utf-8",
//                 "Accept": "application/json",
//             },
//             method: "POST",
//             body: JSON.stringify({
//                 id: id
//             })
//         })
//     }
//     else
//     if(is_favorite !== undefined && is_favorite===true)
//     {
//       await fetch(`http://85.193.91.30/user/delete_from_favorites`, {
//           headers: {
//               "Content-Type": "application/json;charset=utf-8",
//               "Accept": "application/json",
//           },
//           method: "POST",
//           body: JSON.stringify({
//               id: id
//           })
//       })
//   }
// }



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
                {/* <Favorites className="slider_addToFavorites" /> */}
                {/* <Favorites className={`${is_favorite ? "slide_isFavorites" : "slider_addToFavorites"}`} onClick={()=>changeFavorite(id)}/> */}
                <Favorites className={`${is_favorite ? "slide_isFavorites" : "slider_addToFavorites"}`}/>
                <p className="slider__price">{price}</p>
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