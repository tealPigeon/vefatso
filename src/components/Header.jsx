import styles from './Header.module.css'
import {ReactComponent as Logo} from '../vefatso.svg'
import {ReactComponent as Menu}  from '../menu_open.svg'
import {ReactComponent as Favorites} from '../add_to_favorites.svg'

import {ReactComponent as Basket} from '../basket.svg'
// import basket from '../basket.svg'
import React from "react";
import {ReactComponent as TelegramLogo} from "../telegram_logo.svg"
import {ReactComponent as CloseButton} from "../close_button.svg"
import {Link } from 'react-router-dom';

// import {ReactComponent as ReactLogo} from './logo.svg';


function Header({setMenuIsOpen}) {


    return <>
        <header>
            <div className={styles.header} style={{ justifyContent: "space-between" }}>
                    <Menu className={styles.header__menu_logo} onClick={() => setMenuIsOpen(true) } />
                    <Logo className={styles.header__logo} />
                <div className={styles.header__right}>
                    {/* <div>search</div> */}
                    <div className={styles.header__right__favorite}>
                        <Favorites className={styles.header__right__favorite_img} />
                    <p  style={{fontSize:"10px"}}>20</p>
                    </div>

                    <div  className={styles.header__right__basket}>
                        <Basket className={styles.header__right__basket_img}/>
                        <p className={styles.header__right__basket_count} >1</p>
                    </div>
                    
                    {/* <img src={basket} style={{ cursor: "pointer", width: "10px", height:"14px" }} /> */}
                    
                    {/* <div>bookmarks</div> */}
                    {/* <div>basket</div> */}
                </div>

            </div>
        </header>

    </>;
}

export default Header;