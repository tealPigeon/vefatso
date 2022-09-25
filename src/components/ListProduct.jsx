import mobile_start from "../mobile_start.svg"
function ListProduct({ products }) {
    console.log(products)
    let productsLeft= products.filter((element, index) =>index%2==0)
    let productsRight = products.filter((element, index) =>index%2==1)
    const url = "http://85.193.91.30/media/";
    return <>
        <div className="list_products_mobile">
            <div style={{ borderRadius: "0px 60px 0px 0px", border: "1px solid black", borderBottom: "0", borderLeft: "0", position: "relative" }}  >
                {
                    productsLeft.map((product) => {
                        return <div key={product.id} className="products products__left" style={{ borderBottom: "0", paddingTop: "30px", paddingBottom: "30px", marginTop: "-1px" }}>
                            <img style={{ height: "290px" }} src={`${url + product.picture}`} />
                            <h3>{product.title}</h3>
                            <p>какой-то bottom text</p>
                        </div>
                    })
                }
            </div>
            <div>
                <div>
                    <img src={mobile_start} style={{ marginTop: "15px", marginBottom: "45px", width: "52px", height: "52px" }} />
                </div>
                <div >
                    {
                        productsRight.map((product) => {
                            return <div  key={product.id} className="products products__right" style={{ borderBottom: "0", paddingTop: "30px", paddingBottom: "30px", marginTop: "-1px" }}>
                                <img style={{ height: "290px" }} src={`${url + product.picture}`} />
                                <h3>{product.title}</h3>
                                <p>какой-то bottom text</p>
                            </div> 
                        })
                    }
                    <div style={{ textAlign: "start", borderRadius: "60px 0px 0px 0px", border: "1px solid black", borderBottom: "0", borderRight: "0", paddingTop: "30px", paddingBottom: "30px", paddingLeft: "25px", fontSize: "12", paddingRight: "30px" }} className="products products__right">

                        на нашем сайте вы можете выбрать украшения из наших коллекций
                        и собрать уникальное украшение на заказ
                        <div style={{ textAlign: "center", paddingTop: "35px", paddingBottom: "50px" }}>
                            <img src={mobile_start} style={{ transform: "rotate(45deg)", textAlign: "center", width: "52px", height: "52px" }} />
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div className="list_products">
            <div style={{
                fontStyle: "italic",
                fontWeight: "500",
                fontSize: "47.7301px",
                lineHeight: "76px",
                textTransform: "uppercase",
                maxWidth: "1000px",
                textAlign: "left"
            }}>коллекции готовых изделий</div>
            <div style={{
                fontSize: "13.9213px",
                lineHeight: "17px",
                textTransform: "uppercase",
                maxWidth: "600px",
                textAlign: "left",
                marginTop: "19px",
                float: "right"
            }}>
                на нашем сайте вы можете выбрать украшения из наших коллекций
                и собрать уникальное украшение на заказ
            </div>
            <div style={{ width: "auto", paddingTop: "60px", marginTop: "46px" }}>
                {
                    products.map((product) => {
                        return <div key={product.id} style={{ display: "inline-block", width: "200px", borderRadius: "198.875px 198.875px 0px 0px", border: "solid 2px #E3DDCD", alignItems: "center", justifyContent: "flex-start", padding: "26px", boxSizing: "content-box", height: "661px" }}>
                            <div className="turn_grey" style={{ backgroundImage: `url(${url+product.picture})`, borderRadius: "198.875px 198.875px 0px 0px", width: "100%", height: "413px", }}></div>
                            <p style={{ fontFamily: 'Cormorant Garamond', fontStyle: "italic", fontWeight: "500", fontSize: "34px", lineHeight: "41px", textAlign: "center", textTransform: "uppercase", marginTop: "15px" }}>{product.title}</p>
                            <p>какой-то bottom text</p>
                        </div>
                    }
                    )
                }
            </div>
        </div>
    </>
}
export default ListProduct;