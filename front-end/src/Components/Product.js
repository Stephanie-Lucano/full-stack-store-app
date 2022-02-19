import {Link} from "react-router-dom";
export default function Product({product}) {
    return (
        <>
            <Link to={`/products/${product.id}`}><p>{product.name} {product.price} {product.rating} 🪄</p></Link>
        </>
    )
}