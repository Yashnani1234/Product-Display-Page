import './Product.css'

function Product({ product }) {
    return(
        <div className="product">
            <img src={product.image} alt={product.name}/>
            <h1>{product.name}</h1>
            <p>{product.price}</p>
        </div>
    )
}

export default Product