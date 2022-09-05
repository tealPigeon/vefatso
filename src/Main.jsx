import Header from "./components/Header";
import React from "react";
// import Carousel from "./components/Carousel"
import Carousel from "./components/Carousel";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import button_arrow from "./button_arrow.svg";
import star from "./Star.svg"
import send_icon from "./send_icon.svg"
import background_image from "./background_image.png"
import close_button from "./close_button.svg"
import intro_picture from "./intro_picture.png"
import pattern from "./pattern.svg"
import mobile_start from "./mobile_start.svg"
import ring from "./components/ring.png"

function Main() {

    var settings = {
        dots: true,
        arrows: false,
        center: true,
        autoplay: true,
        autoplaySpeed: 500,
        speed: 5000,
        slidesToScroll: 1,
        infinite: true,
    };

    let [choseConstructor, setChoseConstructor] = React.useState(false);

    return <>
        {/* <div className="running_line"> */}
        <marquee direction="right" behavior="scroll" loop="infinite" className="running_line" >
            античный минимализм 50% античный минимализм 50% античный минимализм 50% античный минимализм 50% античный минимализм 50% античный минимализм 50% античный минимализм 50% античный минимализм 50% античный минимализм 50% античный минимализм 50% античный минимализм 50% античный минимализм 50% античный минимализм 50% античный минимализм 50% античный минимализм 50% античный минимализм 50%
        </marquee>

        <div className="intro" style={{ backgroundImage: 'url(' + require("./back.jpg") + ')', color: "#fff", padding: "32px 60px" }}>
            <Header />
            <div className="intro__wrapper">
                <img className="intro__image_mobile" src={intro_picture} style={{ marginRight: "30px" }} />
                <div className="intro__title_mobile">уникальный</div>
                <div className="intro__wrapper__title">  уникальный конструктор ювелирных изделий</div>
                <div className="intro__wrapper__subtitle">
                    <img src={star} style={{ marginRight: "30px", }} /> примерь украшение на свою ручку / ножку / шейку
                </div>
                <div className="intro__wrapper__title_last">конструктор</div>

            </div>
            <button className="button_constructor" onClick={() => setChoseConstructor(true)} >
                <img src={button_arrow} />
                <div style={{ marginLeft: "17px" }}>пробовать</div>
            </button>

        </div>
        {
            choseConstructor ?
                <>
                    <div className="block__2"
                        style={{
                            backgroundColor: "#C77541",
                            color: "#FFFCF5",
                            position: "fixed",
                            top: 0,
                            left: 0,
                            zIndex: "10",
                            width: "100vw",
                            height: "100vh",
                            padding: "50px"
                        }}>
                        <img className="menu_close" src={close_button} style={{ float: "right", width: "25px", height: "25px", }} onClick={() => setChoseConstructor(false)} />
                        <div style={{
                            fontStyle: "italic",
                            fontWeight: "500",
                            fontSize: "47.7301px",
                            lineHeight: "76px",
                            textTransform: "uppercase",
                            textAlign: "center"
                        }}>выберите конструктор</div>
                        <div style={{
                            fontSize: "13.9213px",
                            lineHeight: "17px",
                            textTransform: "uppercase",

                            textAlign: "center",
                            marginTop: "19px",
                            // float: "right"
                        }}>
                            тут какой-то текст текст какой-то какой-то какая красота ууляляшечки
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", width: "85%", height: "100%", paddingTop: "60px", gap: "35px", marginLeft: "auto", marginRight: "auto" }}>
                            <div className="turn_grey" style={{ width: "100%", borderRadius: "198.875px 198.875px 0px 0px", border: "solid 2.5px #97440D", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", paddingBottom: "0px", padding: "28px", boxSizing: "content-box" }}>
                                <div style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=704&q=80)', borderRadius: "198.875px 198.875px 0px 0px", width: "90%", height: "70%", }}></div>
                                <p style={{ fontFamily: 'Cormorant Garamond', fontStyle: "italic", fontWeight: "500", fontSize: "34px", lineHeight: "41px", textAlign: "center", textTransform: "uppercase", marginTop: "15px" }}>кольца</p>
                                <p>руки не крюки</p>
                            </div>
                            <div className="turn_grey" style={{ width: "100%", borderRadius: "198.875px 198.875px 0px 0px", border: "solid 2.5px #97440D", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", paddingBottom: "0px", padding: "28px", boxSizing: "content-box" }}>
                                <div style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80)', borderRadius: "198.875px 198.875px 0px 0px", width: "90%", height: "70%", }}></div>
                                <p style={{ fontFamily: 'Cormorant Garamond', fontStyle: "italic", fontWeight: "500", fontSize: "34px", lineHeight: "41px", textAlign: "center", textTransform: "uppercase", marginTop: "15px" }}>кольца</p>
                                <p>руки не крюки</p>
                            </div>
                            <div className="turn_grey" style={{ width: "100%", borderRadius: "198.875px 198.875px 0px 0px", border: "solid 2.5px #97440D", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", paddingBottom: "0px", padding: "28px", boxSizing: "content-box" }}>
                                <div style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1469259943454-aa100abba749?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80)', borderRadius: "198.875px 198.875px 0px 0px", width: "90%", height: "70%", }}></div>
                                <p style={{ fontFamily: 'Cormorant Garamond', fontStyle: "italic", fontWeight: "500", fontSize: "34px", lineHeight: "41px", textAlign: "center", textTransform: "uppercase", marginTop: "15px" }}>кольца</p>
                                <p>руки не крюки</p>
                            </div>
                            <div className="turn_grey" style={{ width: "100%", borderRadius: "198.875px 198.875px 0px 0px", border: "solid 2.5px #97440D", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", paddingBottom: "0px", padding: "28px", boxSizing: "content-box" }}>
                                <div style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1460039230329-eb070fc6c77c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80)', borderRadius: "198.875px 198.875px 0px 0px", width: "90%", height: "70%", }}></div>
                                <p style={{ fontFamily: 'Cormorant Garamond', fontStyle: "italic", fontWeight: "500", fontSize: "34px", lineHeight: "41px", textAlign: "center", textTransform: "uppercase", marginTop: "15px" }}>кольца</p>
                                <p>руки не крюки</p>
                            </div>

                        </div>
                    </div>
                    <div className="choose_constructor_mobile">
                    <img className="menu_close" src={close_button} style={{ float: "right", width: "15px", height: "15px", }} onClick={() => setChoseConstructor(false)} />

                        <h3 className="choose_constructor_mobile_title">
                            выберите конструктор
                        </h3>
                        <p className="choose_constructor_mobile_subtitle">
                            тут какой-то текст текст какой-то какой-то какая красота ууляляшечки
                        </p>
                        <div className="choose_constructor_mobile__grid">
                            <div className="choose_constructor_mobile__grid__col">
                                <div className="choose_constructor_mobile__grid__item">
                                    <img className="choose_constructor_mobile__grid__item__img" src={"https://images.unsplash.com/photo-1604337932194-d8623703cf0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"} />
                                    <h3 className="choose_constructor_mobile__grid__title">кольца</h3>
                                    <p className="choose_constructor_mobile__grid__subtitle">руки не крюки</p>
                                </div>
                                <div className="choose_constructor_mobile__grid__item">
                                    <img className="choose_constructor_mobile__grid__item__img" src={"https://images.unsplash.com/photo-1604337932194-d8623703cf0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"} />

                                    <h3 className="choose_constructor_mobile__grid__title">кольца</h3>
                                    <p className="choose_constructor_mobile__grid__subtitle">руки не крюки</p>
                                </div>
                            </div>
                            <div className="choose_constructor_mobile__grid__col">
                                <div className="choose_constructor_mobile__grid__item">
                                    <img className="choose_constructor_mobile__grid__item__img" src={"https://images.unsplash.com/photo-1604337932194-d8623703cf0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"} />

                                    <h3 className="choose_constructor_mobile__grid__title">кольца</h3>
                                    <p className="choose_constructor_mobile__grid__subtitle">руки не крюки</p>
                                </div>
                                <div className="choose_constructor_mobile__grid__item">
                                    <img className="choose_constructor_mobile__grid__item__img" src={"https://images.unsplash.com/photo-1604337932194-d8623703cf0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"} />
                                    <h3 className="choose_constructor_mobile__grid__title">кольца</h3>
                                    <p className="choose_constructor_mobile__grid__subtitle">руки не крюки</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </> : null
        }
        <div className="list_products_mobile">
            <div style={{ borderRadius: "0px 60px 0px 0px", border: "1px solid black", borderBottom: "0", borderLeft: "0" }}  >
                <div className="products" style={{ borderBottom: "0", borderLeft: "0", paddingTop: "30px", paddingBottom: "30px" }}>
                    <img style={{ height: "290px" }} src={"https://images.unsplash.com/photo-1604337932194-d8623703cf0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"} />
                    <h3>кольца</h3>
                    <p>руки не крюки</p>
                </div>
                <div className="products" style={{ borderRadius: "0px 60px 0px 0px", border: "1px solid black", borderBottom: "0", borderLeft: "0", borderRight: "0", paddingTop: "30px", paddingBottom: "30px" }}>
                    <img style={{ height: "290px" }} src={"https://images.unsplash.com/photo-1604337932194-d8623703cf0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"} />
                    <h3>кольца</h3>
                    <p>руки не крюки</p>
                </div>
                <div className="products" style={{ borderRadius: "0px 60px 0px 0px", border: "1px solid black", borderBottom: "0", borderLeft: "0", borderRight: "0", paddingTop: "30px", paddingBottom: "30px" }}>
                    <img style={{ height: "290px" }} src={"https://images.unsplash.com/photo-1604337932194-d8623703cf0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"} />
                    <h3>кольца</h3>
                    <p>руки не крюки</p>
                </div>
            </div>
            <div>
                <div>
                    <img src={mobile_start} style={{ marginTop: "15px", marginBottom: "45px", width: "52px", height: "52px" }} />
                </div>
                <div style={{}}>
                    <div className="products" style={{ borderRadius: "60px 0px 0px 0px  ", border: "1px solid black", borderBottom: "0", borderLeft: "0", borderRight: "0", paddingTop: "30px", paddingBottom: "30px" }}>
                        <img style={{ height: "290px" }} src={"https://images.unsplash.com/photo-1604337932194-d8623703cf0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"} />
                        <h3>кольца</h3>
                        <p>руки не крюки</p>
                    </div>
                    <div className="products" style={{ borderRadius: "60px 0px 0px 0px  ", border: "1px solid black", borderBottom: "0", borderLeft: "0", borderRight: "0", paddingTop: "30px", paddingBottom: "30px" }}>
                        <img style={{ height: "290px" }} src={"https://images.unsplash.com/photo-1604337932194-d8623703cf0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"} />
                        <h3>кольца</h3>
                        <p>руки не крюки</p>
                    </div>
                    <div style={{ textAlign: "start", borderRadius: "60px 0px 0px 0px", border: "1px solid black", borderBottom: "0", borderLeft: "0", borderRight: "0", paddingTop: "30px", paddingBottom: "30px", paddingLeft: "25px", fontSize: "12", paddingRight: "30px" }} >

                        на нашем сайте вы можете выбрать украшения из наших коллекций
                        и собрать уникальное украшение на заказ
                        <div style={{ textAlign: "center", paddingTop: "35px", paddingBottom: "50px" }}>
                            <img src={mobile_start} style={{ transform: "rotate(45deg)", textAlign: "center", width: "52px", height: "52px" }} />
                        </div>

                    </div>
                </div>
            </div>


        </div>

        <div className="list_products">
            <div style={{
                fontStyle: "italic",
                fontWeight: "500",
                fontSize: "47.7301px",
                lineHeight: "76px",
                textTransform: "uppercase",
                maxWidth: "1000px",
                textAlign: "left"
            }}>коллекции готовых изделий</div>
            <div style={{
                fontSize: "13.9213px",
                lineHeight: "17px",
                textTransform: "uppercase",
                maxWidth: "600px",
                textAlign: "left",
                marginTop: "19px",
                float: "right"
            }}>
                на нашем сайте вы можете выбрать украшения из наших коллекций
                и собрать уникальное украшение на заказ
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr", width: "100%", height: "95%", paddingTop: "60px", gap: "35px" }}>
                <div className="turn_grey" style={{ width: "100%", borderRadius: "198.875px 198.875px 0px 0px", border: "solid 2px black", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", padding: "28px", boxSizing: "content-box" }}>
                    <div style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1508610048659-a06b669e3321?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80)', borderRadius: "198.875px 198.875px 0px 0px", width: "100%", height: "70%", }}></div>
                    <p style={{ fontFamily: 'Cormorant Garamond', fontStyle: "italic", fontWeight: "500", fontSize: "34px", lineHeight: "41px", textAlign: "center", textTransform: "uppercase", marginTop: "15px" }}>кольца</p>
                    <p>руки не крюки</p>
                </div>
                <div className="turn_grey" style={{ width: "100%", borderRadius: "198.875px 198.875px 0px 0px", border: "solid 2px black", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", padding: "28px", boxSizing: "content-box" }}>
                    <div style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1437275537121-331a0457c8d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)', borderRadius: "198.875px 198.875px 0px 0px", width: "100%", height: "70%", }}></div>
                    <p style={{ fontFamily: 'Cormorant Garamond', fontStyle: "italic", fontWeight: "500", fontSize: "34px", lineHeight: "41px", textAlign: "center", textTransform: "uppercase", marginTop: "15px" }}>кольца</p>
                    <p>руки не крюки</p>                    </div>
                <div className="turn_grey" style={{ width: "100%", borderRadius: "198.875px 198.875px 0px 0px", border: "solid 2px black", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", padding: "28px", boxSizing: "content-box" }}>
                    <div style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1494972308805-463bc619d34e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80)', borderRadius: "198.875px 198.875px 0px 0px", width: "100%", height: "70%", }}></div>
                    <p style={{ fontFamily: 'Cormorant Garamond', fontStyle: "italic", fontWeight: "500", fontSize: "34px", lineHeight: "41px", textAlign: "center", textTransform: "uppercase", marginTop: "15px" }}>кольца</p>
                    <p>руки не крюки</p>                    </div>
                <div className="turn_grey" style={{ width: "100%", borderRadius: "198.875px 198.875px 0px 0px", border: "solid 2px black", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", padding: "28px", boxSizing: "content-box" }}>
                    <div style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1469259943454-aa100abba749?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80)', borderRadius: "198.875px 198.875px 0px 0px", width: "100%", height: "70%", }}></div>
                    <p style={{ fontFamily: 'Cormorant Garamond', fontStyle: "italic", fontWeight: "500", fontSize: "34px", lineHeight: "41px", textAlign: "center", textTransform: "uppercase", marginTop: "15px" }}>кольца</p>
                    <p>руки не крюки</p>                    </div>
                <div className="turn_grey" style={{ width: "100%", paddingBottom: "0", borderRadius: "198.875px 198.875px 0px 0px", border: "solid 2px black", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", padding: "28px", boxSizing: "content-box" }}>
                    <div style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1505129013025-ecf8f0168373?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80)', borderRadius: "198.875px 198.875px 0px 0px", width: "100%", height: "70%", }}></div>
                    <p style={{ fontFamily: 'Cormorant Garamond', fontStyle: "italic", fontWeight: "500", fontSize: "34px", lineHeight: "41px", textAlign: "center", textTransform: "uppercase", marginTop: "15px" }}>кольца</p>
                    <p>руки не крюки</p>                    </div>

            </div>
        </div>

        <div className="block">
            <Slider {...settings}>
                {/* <div>
                    <div style={{ padding: "110px 170px", backgroundColor:"black" }}>
                        <div style={{ fontSize: "14px", color: "black" }}>КОЛЛЕКЦИЯ</div>
                        <div style={{ fontSize: "48px", color: "black" }}>ВОСПОМИНАНИЯ</div>
                    </div>
                </div> */}
                <div className='slider__image' style={{ backgroundImage: 'url(' + require("./background_2.png") + ')', backgroundSize: "cover", padding: "39px" }}>
                    <img src="https://images.unsplash.com/photo-1584811644165-33db3b146db5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80to=format&fit=crop&w=687&q=80" />

                    <div className="slider_slide" >
                        <h3 className="slider_slide_subtitle" >КОЛЛЕКЦИЯ</h3>
                        <h3 className="slider_slide_title" >ВОСПОМИНАНИЯ</h3>
                    </div>
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1566977744263-79e677f4e7cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" />
                    <div className="slider_slide" >
                        <h3 className="slider_slide_subtitle" >КОЛЛЕКЦИЯ</h3>
                        <h3 className="slider_slide_title" >ВОСПОМИНАНИЯ</h3>
                    </div>
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
                    <div className="slider_slide" >
                        <h3 className="slider_slide_subtitle" >КОЛЛЕКЦИЯ</h3>
                        <h3 className="slider_slide_title" >ВОСПОМИНАНИЯ</h3>

                    </div>
                </div>
            </Slider>


            {/* <div className="block__1">
                <div style={{ padding: "110px 170px"}}> 
                    <div  style={{ fontSize: "14px", color: "black"}}>КОЛЛЕКЦИЯ</div>
                    <div  style={{ fontSize: "48px", color: "black"}}>ВОСПОМИНАНИЯ</div>
                </div>
            </div> */}

            <div className="wrapper_constructor_button" style={{ backgroundImage: 'url(' + require("./background_2.png") + ')' }}>

                <h3 className="wrapper_constructor_button_subtitle">УНИКАЛЬНЫЙ</h3>
                <h3 className="wrapper_constructor_button_title">КОНСТРУКТОР</h3>
                <div >
                    <button onClick={() => setChoseConstructor(true)} className="button_constructor" >
                        <img src={button_arrow} />
                        <div style={{ marginLeft: "17px" }}>пробовать</div>
                    </button>
                </div>

            </div>

        </div>
        <div className="top_products" >
            <h3 className="top_products__title" style={{
            }}>
                топ несуществующих товаров недели
            </h3>
            <div style={{ textTransform: "uppercase", marginTop: "18px" }}>
                какой-то текст
            </div>
            <div className="carousel">
                <Carousel style={{ marginTop: "75px" }} />
            </div>
        </div>


        <div className="top_products_mobile" >
            <h3 className="top_products__title" style={{
            }}>
                топ несуществующих товаров недели
            </h3>
            <div style={{ textTransform: "uppercase", marginTop: "18px" }}>
                какой-то текст
            </div>

            <Carousel style={{ marginTop: "75px" }} />

        </div>

        <div className="block_5">
            <div className="block_5__feedback">
                <div className="block_5__feedback__title" ><b>новости</b> о новых поступлениях и коллекциях, <b>ничего лишнего</b></div>
                <form className="block_5__feedback__title__form" style={{}}>
                    {/* <label style={{fontWeight: "400", fontSize: "26px", lineHeight: "32px", textTransform: "uppercase"}}>
  e-mail */}
                    <input className="email__input" type="email" name="email" placeholder="E-MAIL" style={{ backgroundColor: "transparent", fontWeight: "400", fontSize: "26px", lineHeight: "32px", color: "black", }}>
                        {/* <img src={send_icon}/> */}
                    </input>
                    {/* </label> */}
                    <input type="image" value="Отправить" src={send_icon} style={{ width: "10%", height: "25px", marginRight: "0" }} />
                </form>
            </div>

            <footer className="footer">
                <div>доставка</div>
                <div>возврат</div>
                <div>гарантии</div>
                <div>таблица размеров</div>
                <div>конфиденциальность</div>
                <div>контакты</div>
            </footer>

        </div>
    </>;
}

export default Main;