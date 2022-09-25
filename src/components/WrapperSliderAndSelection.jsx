import Slider from "react-slick";
import React from "react";
import button_arrow from "../button_arrow.svg";
import "./WrapperSliderAndSelection.css";
function WrapperSliderAndSelection({ openChoosingConstructor, collections_slider }) {
    var settings = {
        dots: true,
        arrows: false,
        center: true,
        // autoplay: true,
        // autoplaySpeed: 500,
        speed: 500,
        slidesToScroll: 1,
        infinite: true,
        swipe: true,
        // touchMove:true
    };
    return <div className="block">
        <Slider {...settings}>
            {
            collections_slider.map((slide)=>{
return <div key={slide.id}> <img className="slider_image" src={`http://85.193.91.30/media/${slide.picture}`} />
<div className="slider_slide">
    <div className="slider_slide_mobile_wrapper">
        <div className="slider_slide_mobile_wrapper_titles">
            <h3 className="slider_slide_subtitle" >{slide.description}</h3>
            <h3 className="slider_slide_title" >{slide.title}</h3>
            <button className=" button_constructor " onClick={() => openChoosingConstructor(true)} style={{ marginBottom: "45px", alignSelf: "end", marginTop: "350px" }}>
                <img src={button_arrow} />
                <div style={{ marginLeft: "17px" }}>пробовать</div>
            </button>
        </div>
    </div>
</div>
</div>})
}
            {/* <div>
                <img className="slider_image" src="https://images.unsplash.com/photo-1584811644165-33db3b146db5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80to=format&fit=crop&w=687&q=80" />
                <div className="slider_slide">
                    <div className="slider_slide_mobile_wrapper">
                        <div className="slider_slide_mobile_wrapper_titles">
                            <h3 className="slider_slide_subtitle" >КОЛЛЕКЦИЯ</h3>
                            <h3 className="slider_slide_title" >ВОСПОМИНАНИЯ</h3>
                            <button className="button_constructor " onClick={() => openChoosingConstructor(true)} style={{ marginBottom: "45px", alignSelf: "end", marginTop: "350px" }}>
                                <img src={button_arrow} />
                                <div style={{ marginLeft: "17px" }}>пробовать</div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <img className="slider_image"  src="https://images.unsplash.com/photo-1566977744263-79e677f4e7cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" />
                <div className="slider_slide">
                    <div className="slider_slide_mobile_wrapper">
                        <div className="slider_slide_mobile_wrapper_titles">
                            <h3 className="slider_slide_subtitle" >КОЛЛЕКЦИЯ</h3>
                            <h3 className="slider_slide_title" >ВОСПОМИНАНИЯ</h3>
                            <button className=" button_constructor " onClick={() => openChoosingConstructor(true)} style={{ marginBottom: "45px", alignSelf: "end", marginTop: "350px" }}>
                                <img src={button_arrow} />
                                <div style={{ marginLeft: "17px" }}>пробовать</div>
                            </button>
                        </div>
                    </div>
                </div>
            </div> */}
            
        </Slider>

        <div className="wrapper_constructor_button" style={{ backgroundImage: 'url(' + require("../background_2.png") + ')' }}>
            <div className="wrapper_constructor_button_titles">
                <h3 className="wrapper_constructor_button_subtitle">УНИКАЛЬНЫЙ</h3>
                <h3 className="wrapper_constructor_button_title">КОНСТРУКТОР</h3>
                <div >
                    <button onClick={() => openChoosingConstructor(true)} className="button_constructor" >
                        <img src={button_arrow} />
                        <div style={{ marginLeft: "17px" }}>пробовать</div>
                    </button>
                </div>
            </div>
        </div>
    </div>
}

export default WrapperSliderAndSelection;