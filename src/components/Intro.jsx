import button_arrow from "../button_arrow.svg";
import star from "../Star.svg"
import intro_picture from "../intro_picture.png"
import Header from "./Header";
import Menu from "./Menu";
import "./Intro.css"

function Intro({openChoosingConstructor, menuIsOpen, openMenu})
{
    return <div className="intro" style={{ backgroundImage: 'url(' + require("../back.jpg") + ')', color: "#fff", padding: "32px 60px" }}>
    <Menu menuIsOpen={menuIsOpen} setMenuIsOpen={openMenu} />
    <Header setMenuIsOpen={openMenu} />
    <div className="intro__wrapper">
        <img className="intro__image_mobile" src={intro_picture} style={{ marginRight: "30px" }} alt="img" />
        <div className="intro__title_mobile">уникальный</div>
        <div className="intro__wrapper__title">  уникальный конструктор ювелирных изделий</div>
        <div className="intro__wrapper__subtitle">
            <img src={star} style={{ marginRight: "30px", }} alt="star"/> примерь украшение на свою ручку / ножку / шейку
        </div>
        <div className="intro__wrapper__title_last">конструктор</div>
    </div>
    <button className="button_constructor" onClick={() => openChoosingConstructor(true)} >
        <img src={button_arrow} alt="arrow"/>
        <div style={{ marginLeft: "17px" }}>пробовать</div>
    </button>
</div>
}

export default Intro;