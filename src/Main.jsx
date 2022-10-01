import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WrapperSliderAndSelection from "./components/WrapperSliderAndSelection";
import PopUpConstructorSelection from "./components/PopUpConstructorSelection"
import ListProduct from "./components/ListProduct";
import BottomBlock from "./components/BottomBlock";
import MarqueeComponent from "./components/MarqueeComponent";
import TopProducts from "./components/TopProducts"
import Intro from "./components/Intro";


function Main({ data, loading, error, url, textMarquee }) {
    console.log(error)
    let [choseConstructor, setChoseConstructor] = React.useState(false);
    let [menuIsOpen, setMenuIsOpen] = React.useState(false);
    function openChoosingConstructor(isOpen) { setChoseConstructor(isOpen); }
    function openMenu(isOpen) { setMenuIsOpen(isOpen); }

    return <>
    {
        loading ? <>
        <MarqueeComponent textMarquee={textMarquee}/>
        <Intro openChoosingConstructor={openChoosingConstructor} menuIsOpen={menuIsOpen} openMenu={openMenu} />
        <PopUpConstructorSelection open={choseConstructor} openChoosingConstructor={openChoosingConstructor} />
        <ListProduct products={data.groups_list} url={url} />
        <WrapperSliderAndSelection collections_slider={data.collections_slider} openChoosingConstructor={openChoosingConstructor} url={url} />
        <TopProducts slides={data.catalog_slider} loading={loading} url={url} />
        <BottomBlock />
        </> :<p>Даннных нет :(</p>
    }
    </>;
}

export default Main;