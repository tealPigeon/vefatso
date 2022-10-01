import Slider from "react-slick";
import React from "react";
import button_arrow from "../button_arrow.svg";
import "./WrapperSliderAndSelection.css";
function WrapperSliderAndSelection({ openChoosingConstructor, collections_slider, url }) {
    var settings = {
        dots: true,
        arrows: false,
        center: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 1000,
        slidesToScroll: 1,
        infinite: true,
        swipe: true,
        // touchMove:true
    };
    return <div className="block">
        <Slider {...settings}>
            {
                collections_slider.map((slide) => {
                    return <div key={slide.id}>
                        {/* <img className="slider_image" src={`http://85.193.91.30/media/${slide.picture}`} /> */}
                        <img className="slider_image" src={url + slide.picture} alt="img"/>
                        <div className="slider_slide">
                            <div className="slider_slide_mobile_wrapper">
                                <div className="slider_slide_mobile_wrapper_titles">
                                    <h3 className="slider_slide_subtitle" >{slide.description}</h3>
                                    <h3 className="slider_slide_title" >{slide.title}</h3>
                                    {/* <button className=" button_constructor " onClick={() => openChoosingConstructor(true)} style={{ marginBottom: "45px", alignSelf: "end", marginTop: "350px" }}>
                                        <img src={button_arrow} alt="arrow"/>
                                        <div style={{ marginLeft: "17px" }}>пробовать</div>
                                    </button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                })
            }

        </Slider>
        <div className="wrapper_constructor_button" style={{ backgroundImage: 'url(' + require("../background_2.png") + ')' }}>
            <div className="wrapper_constructor_button_titles">
                <h3 className="wrapper_constructor_button_subtitle">УНИКАЛЬНЫЙ</h3>
                <h3 className="wrapper_constructor_button_title">КОНСТРУКТОР</h3>
                <div >
                    <button onClick={() => openChoosingConstructor(true)} className="button_constructor" >
                        <img src={button_arrow} alt="arrow"/>
                        <div style={{ marginLeft: "17px" }}>пробовать</div>
                    </button>
                </div>
            </div>
        </div>
    </div>
}

export default WrapperSliderAndSelection;