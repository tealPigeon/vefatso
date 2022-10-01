import React from "react";
import { ReactComponent as CloseButton } from "../close_button.svg"
import "./PopUpConstructorSelection.css"

import pattern from "../pattern.jpeg";

function PopUpConstructorSelection({openChoosingConstructor, open})
{
    return                 <>
    {open ? <div className="block__2 opened"
        style={{
            backgroundColor: "#C77541",
            backgroundImage:  `url(${pattern})`,
            color: "#FFFCF5",
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: "10",
            width: "100vw",
            height: "100vh",
            overflow: "auto",
        }}>
        <CloseButton className="choose_constructor_close"  onClick={() => openChoosingConstructor(false)} />
        <div className="choose_constructor_title" >выберите конструктор</div>
        <div  className="choose_constructor_subtitle" >
            тут какой-то текст текст какой-то какой-то какая красота ууляляшечки
        </div>

        <div className="constructors" >
            <div  className="choose_constructor_wrapper" >
                            <div className="choose_constructor" >
                <div className="choose_constructor__image" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1460039230329-eb070fc6c77c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80)'}}></div>
                <p className="choose_constructor_name" >кольца</p>
                <p className="choose_constructor_description" > руки не крюки</p>
            </div>
            <div className="choose_constructor" >                                
            <div className="choose_constructor__image " style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80)'}}></div>
            <p className="choose_constructor_name" >кольца</p>
                <p className="choose_constructor_description" > руки не крюки</p>
            </div>
            </div>
<div  className="choose_constructor_wrapper" >
                <div className="choose_constructor" >                                
            <div className="choose_constructor__image "style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1469259943454-aa100abba749?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80)' }}></div>
            <p className="choose_constructor_name" >кольца</p>
                <p className="choose_constructor_description" > руки не крюки</p>
            </div>
            <div className="choose_constructor" >                                
            <div className="choose_constructor__image " style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1460039230329-eb070fc6c77c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80)'}}></div>
            <p className="choose_constructor_name" >кольца</p>
                <p className="choose_constructor_description" > руки не крюки</p>
            </div>
            </div>
        </div>
    </div> : <div className="block__2 closed"
        style={{
            backgroundColor: "#C77541",
            backgroundImage:  `url(${pattern})`,
            color: "#FFFCF5",
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: "10",
            width: "100vw",
            height: "100vh",
            overflow: "auto",
        }}>
        <CloseButton className="choose_constructor_close"  onClick={() => openChoosingConstructor(false)} />
        <div className="choose_constructor_title" >выберите конструктор</div>
        <div  className="choose_constructor_subtitle" >
            тут какой-то текст текст какой-то какой-то какая красота ууляляшечки
        </div>

        <div className="constructors" >
            <div  className="choose_constructor_wrapper" >
                            <div className="choose_constructor" >
                <div className="choose_constructor__image turn_grey" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1460039230329-eb070fc6c77c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80)'}}></div>
                <p className="choose_constructor_name" >кольца</p>
                <p className="choose_constructor_description" > руки не крюки</p>
            </div>
            <div className="choose_constructor" >                                
            <div className="choose_constructor__image turn_grey" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80)'}}></div>
            <p className="choose_constructor_name" >кольца</p>
                <p className="choose_constructor_description" > руки не крюки</p>
            </div>
            </div>
<div  className="choose_constructor_wrapper" >
                <div className="choose_constructor" >                                
            <div className="choose_constructor__image turn_grey"style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1469259943454-aa100abba749?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80)' }}></div>
            <p className="choose_constructor_name" >кольца</p>
                <p className="choose_constructor_description" > руки не крюки</p>
            </div>
            <div className="choose_constructor" >                                
            <div className="choose_constructor__image turn_grey" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1460039230329-eb070fc6c77c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80)'}}></div>
            <p className="choose_constructor_name" >кольца</p>
                <p className="choose_constructor_description" > руки не крюки</p>
            </div>
            </div>
        </div>
    </div>}
    
</>
}

export default PopUpConstructorSelection;