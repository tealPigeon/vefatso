import Marquee from "react-fast-marquee";
import "./MarqueeComponent.css"
import { ReactComponent as Star } from "../Star 2.svg"

function MarqueeComponent({textMarquee}){
    let messages = [];
    for (let i = 0; i < 10; i++) messages.push(<div key={i} className="running_line__content"><Star/><div>{textMarquee}</div> </div>);

    return  <Marquee className="running_line" gradient={false} direction={"right"}> {messages} </Marquee>
}
export default MarqueeComponent;