import {ReactComponent as TelegramLogo} from "../telegram_logo.svg"
import {ReactComponent as CloseButton} from "../close_button.svg"
import {Link } from 'react-router-dom';
import "./Menu.css"

function Menu({setMenuIsOpen, menuIsOpen})
{
    return <>{
        menuIsOpen ? <div className="menu open_menu">
            <CloseButton className="menu_close"  onClick={() => { setMenuIsOpen(false) }} />

            <ul className='menu_items'>
            <li><h3 className='menu_heading' >категория</h3></li>
            <Link to={"/all"}><li>все</li></Link>
                <li>кольца</li>
                <li>серьги</li>
                <li>подвески</li>
                <li>браслеты</li>
                <li>амулеты</li>
            </ul>

            <ul className='menu_items'>
            <li><h3 className='menu_heading'>коллекции</h3></li>
                <li>вспоминания</li>
                <li>тишина</li>
                <li>текст</li>
            </ul>
            <ul className='menu_items'>
                <li><h3 className='menu_heading active_point'>конструктор</h3></li>
            </ul>
            
            
            <ul className='menu_items'>
            <li><h3 className='menu_heading'>личный кабинет</h3></li>
                <li>избранное</li>
                <li>корзина</li>
                <li>войти</li>
            </ul>
            <div className='menu_telegram_link' >
                <TelegramLogo className='menu_telegram_link_img' />
                <div className='menu_telegram_link_text'>TELEGRAM</div>
            </div>
        </div> : <div className="menu closed_menu" >
            <CloseButton className="menu_close"  onClick={() => { setMenuIsOpen(true) }} />
            <ul className='menu_items'>
            <li><h3 className='menu_heading' >категория</h3></li>

            <Link to={"/all"}><li>все</li></Link>
                <li>кольца</li>
                <li>серьги</li>
                <li>подвески</li>
                <li>браслеты</li>
                <li>амулеты</li>
            </ul>

            <ul className='menu_items'>
            <li><h3 className='menu_heading'>коллекции</h3></li>
                <li>вспоминания</li>
                <li>тишина</li>
                <li>текст</li>
            </ul>
            <ul className='menu_items'>
                <li><h3 className='menu_heading active_point'>конструктор</h3></li>
            </ul>
            
            <ul className='menu_items'>
            <li><h3 className='menu_heading'>личный кабинет</h3></li>
                <li>избранное</li>
                <li>корзина</li>
                <li>войти</li>
            </ul>
            <div className='menu_telegram_link' >
                <TelegramLogo className='menu_telegram_link_img' />
                <div className='menu_telegram_link_text'>TELEGRAM</div>
            </div>
        </div>
    }</>
}

export default Menu;