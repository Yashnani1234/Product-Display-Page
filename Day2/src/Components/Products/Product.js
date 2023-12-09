import './Product.css'

function Product(props) {
    return(
        <div className="product">
            <img src={props.image} alt={props.name}/>
            <h1>{props.name}</h1>
            <p>{props.price}</p>
        </div>
    )
}

export default Product