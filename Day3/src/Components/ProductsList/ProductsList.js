import Product from "../Products/Product";
import "./ProductsList.css"

function ProductsList() {
    const products = [
        {id:1, image:'https://aws-obg-image-lb-3.tcl.com/content/dam/brandsite/product/tv/p/p615/pc/product/EM_55P615_front_global.png', name:'TV', price:'Rs. 90,000/-'},
        {id:2, image:'https://5.imimg.com/data5/SA/WB/MY-38219723/apple-mobile-earphone.jpg', name:'Earphones', price:'Rs. 300/-'},
        {id:3, image:'https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/uk/advisor/wp-content/uploads/2020/11/phones-switch-apps.jpg', name:'Mobile', price:'Rs. 50,000/-'}
    ]

    function Next(parameter) {
        console.log(parameter + " you clicked the Next")
      }

    return(
        <div>
            <div className="product_list">
                {products.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
            <button className='button' onClick={() => {
                Next("Yash")
            }}>Next</button>
        </div>
        
    )
}

export default ProductsList