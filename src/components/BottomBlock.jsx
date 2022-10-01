import "./BottomBlock.css";
import { ReactComponent as V } from "../v.svg";
import { ReactComponent as E } from "../e.svg";
import { ReactComponent as F } from "../f.svg";
import { ReactComponent as A } from "../a.svg";
import { ReactComponent as T } from "../t.svg";
import { ReactComponent as S } from "../s.svg";
import { ReactComponent as O } from "../o.svg";
import { ReactComponent as Subtract } from "../subtract.svg";
import send_icon from "../send_icon.svg"

function BottomBlock(){
return <div className="block_5">
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
        <input className="email__input__button" type="image" value="Отправить" alt="img" src={send_icon} />
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
</div>}
export default BottomBlock;