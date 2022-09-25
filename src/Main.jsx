import Header from "./components/Header";
import React from "react";
import Carousel from "./components/Carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import button_arrow from "./button_arrow.svg";
import star from "./Star.svg"
import send_icon from "./send_icon.svg"
import background_image from "./background_image.png"
import intro_picture from "./intro_picture.png"

import { ReactComponent as Star } from "./Star 2.svg"
import Marquee from "react-fast-marquee";
import { ReactComponent as V } from "./v.svg";
import { ReactComponent as E } from "./e.svg";
import { ReactComponent as F } from "./f.svg";
import { ReactComponent as A } from "./a.svg";
import { ReactComponent as T } from "./t.svg";
import { ReactComponent as S } from "./s.svg";
import { ReactComponent as O } from "./o.svg";
import { ReactComponent as Subtract } from "./subtract.svg";
import Menu from "./components/Menu";
import WrapperSliderAndSelection from "./components/WrapperSliderAndSelection";
import PopUpConstructorSelection from "./components/PopUpConstructorSelection"
import { useFetch } from "./useFetch";
import ListProduct from "./components/ListProduct";

function Main() {

    let [choseConstructor, setChoseConstructor] = React.useState(false);
    let [menuIsOpen, setMenuIsOpen] = React.useState(false);
    // let [data, setData] = React.useState(null);
    const [data, loading, error] = useFetch("http://85.193.91.30/?content=json");
    console.log(data)
    console.log(loading)
    console.log(error)
    // React.useEffect(() => {
    //     async function getData() {
    //         const response = await fetch(
    //             `http://85.193.91.30/?content=json`
    //         )
    //         let actualData = await response.json();
    //         setData(actualData);
    //         console.log(actualData)
    //     }
    //     getData()
    // }, [])

    function openChoosingConstructor(isOpen) { setChoseConstructor(isOpen); }

    function openMenu(isOpen) { setMenuIsOpen(isOpen); }

    return <>
        <Marquee className="running_line" gradient={false} direction={"right"}>
            <Star style={{ margin: "3px 10px" }} /> античный минимализм 50%  <Star style={{ margin: "3px 10px" }} /> античный минимализм 50%  <Star style={{ margin: "3px 10px" }} /> античный минимализм 50% <Star style={{ margin: "3px 10px" }} /> античный минимализм 50% <Star style={{ margin: "3px 10px" }} /> античный минимализм 50% <Star style={{ margin: "3px 10px" }} /> античный минимализм 50% <Star style={{ margin: "3px 10px" }} /> античный минимализм 50% <Star style={{ margin: "3px 10px" }} /> античный минимализм 50% <Star style={{ margin: "3px 10px" }} /> античный минимализм 50% <Star style={{ margin: "3px 10px" }} /> античный минимализм 50% <Star style={{ margin: "3px 10px" }} /> античный минимализм 50% <Star style={{ margin: "3px 10px" }} /> античный минимализм 50%
        </Marquee>
        {/* <div>
            { data != null ? 
            data.catalog_slider.map((slide)=>{return <><img style={{ height: "290px" }} src={`http://85.193.91.30/media/${slide.picture}`} /></>})
                
        :null
}
        
        </div> */}
        <div className="intro" style={{ backgroundImage: 'url(' + require("./back.jpg") + ')', color: "#fff", padding: "32px 60px" }}>
            <Menu menuIsOpen={menuIsOpen} setMenuIsOpen={openMenu} />
            <Header setMenuIsOpen={openMenu} />
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
                <PopUpConstructorSelection openChoosingConstructor={openChoosingConstructor} /> : null
        }

        {
            loading ? <ListProduct products={data.groups_list} /> : null
        }

        {
            loading ? <WrapperSliderAndSelection collections_slider={data.collections_slider} openChoosingConstructor={openChoosingConstructor} /> : null
        }

        <div className="top_products" >
            <h3 className="top_products__title" style={{
            }}>
                топ несуществующих товаров недели
            </h3>
            <div style={{ textTransform: "uppercase", marginTop: "18px" }}>
                какой-то текст
            </div>
            {
                loading ? <Carousel slides={data.catalog_slider} style={{ marginTop: "75px" }} /> : null
            }

        </div>


        <div className="block_5">
            <div className="block_5__letters">
                <V className="block_5__letter box_v" />
                <E className="block_5__letter box_e" />
                <F className="block_5__letter box_f" />
                <A className="block_5__letter box_a" />
                <T className="block_5__letter box_t" />
                <S className="block_5__letter box_s" />
                <O className="block_5__letter box_o" />
                <Subtract className="subtract" />
            </div>
            <div className="block_5__feedback">
                <div className="block_5__feedback__title" ><b>новости</b> о новых поступлениях и коллекциях, <b>ничего лишнего</b></div>
                <form className="block_5__feedback__title__form" style={{}}>
                    <input className="email__input" type="email" name="email" placeholder="E-MAIL" >
                    </input>
                    <input className="email__input__button" type="image" value="Отправить" src={send_icon} />
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