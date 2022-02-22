import axios from "axios";
import { useState, useEffect } from "react";
import Product from "./Product";

export default function Products() {
    const API = process.env.REACT_APP_API_URL;
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios
        .get(`${API}/products`)
        .then((response) => setProducts(response.data))
        .catch((error) => console.log(error))
    }, [API])
    return (
        <>
            {/* <p>table appears 🪄</p> */}
            {products.map((product) => <Product key={product.id} product={product} />)}
        </>
    )
}