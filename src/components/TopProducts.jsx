import Carousel from "./Carousel";
import "./TopProducts.css"
function TopProducts({slides, loading, url})
{
    return <div className="top_products" >
    <h3 className="top_products__title" style={{
    }}>
        топ несуществующих товаров недели
    </h3>
    <div style={{ textTransform: "uppercase", marginTop: "18px" }}>
        какой-то текст
    </div>
    {
        loading ? <Carousel slides={slides} style={{ marginTop: "75px" }} url={url}/> : null
    }

</div> 
}
export default TopProducts;