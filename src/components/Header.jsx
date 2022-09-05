import styles from './Header.module.css'
import vefatso from '../vefatso.svg'
import menu from '../menu_open.svg'
import add_to_favorites from '../add_to_favorites.svg'
import basket from '../basket.svg'
import React from "react";
import telegram_logo from "../telegram_logo.svg"
import close_button from "../close_button.svg"

function Header()
{
    let [menuIsOpen, setMenuIsOpen] = React.useState(false);

    return <>
    <header>
        <div className={styles.header}  style={{justifyContent: "space-between"}}>
            <div className={styles.header__menu_logo}>
                {/* <div>menu</div> */}
                <img src={menu} style={{width: "25px", height:"11px", cursor:"pointer" }} onClick={()=>{setMenuIsOpen(!menuIsOpen)}}/>
                
                {/* <div>logo</div> */}
            </div>
            <img src={vefatso} style={{cursor:"pointer" }} />
            <div className={styles.header__right}>
            {/* <div>search</div> */}
            <img src={add_to_favorites} style={{cursor:"pointer" }}/>
            <p>20</p>
            <img src={basket} style={{cursor:"pointer" }}/>
            <p>1</p>
               {/* <div>bookmarks</div> */}
                {/* <div>basket</div> */}
            </div>

        </div>
    </header>
            {
                menuIsOpen ? <div className="menu">
                  <img className="menu_close" src={close_button} onClick={()=>{setMenuIsOpen(!menuIsOpen)}} /> 

                    <h3 className='menu_heading'>категория</h3>
                    <ul className='menu_heading_items' style={{textAlign: "left", listStyleType:"none", cursor:"pointer"}}>
                    <li>все</li>
                    <li>кольца</li>
                    <li>серьги</li>
                    <li>подвески</li>
                    <li>браслеты</li>
                    <li>амулеты</li>
                    </ul>
                    <h3 className='menu_heading'>коллекции</h3>
                    <ul className='menu_heading_items' style={{textAlign: "left", }}>
                    <li>вспоминания</li>            
                    <li>тишина</li>
                    <li>текст</li>
                    </ul>
                    <h3 className='menu_heading'>конструктор</h3>
                    <h3 className='menu_heading'>личный кабинет</h3>    
                    <ul className='menu_heading_items' style={{textAlign: "left", }}>       
                    <li>избранное</li>
                    <li>корзина</li>
                    <li>войти</li>
                    </ul>
                  
                {/* <div  onClick={()=>{setMenuIsOpen(!menuIsOpen)}}>x</div> */}
                <div style={{display: "flex", gap:"12px", textAlign:"center", marginTop:"50px"}}>
                    <img src={telegram_logo}/>
                    <div style={{color:"black", fontWeight: "400"}}>TELEGRAM</div>
                </div>
                
               
            </div>: null
            }

    </>;
}

export default Header;