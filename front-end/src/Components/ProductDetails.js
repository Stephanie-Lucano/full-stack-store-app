import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

export default function ProductDetails() {
    const API = process.env.REACT_APP_API_URL;
    const {id} = useParams();
    console.log(API, id)
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        name: "empty",
        price: 0,
        rating: 0
    });
    useEffect(() => {
        axios
        .get(`${API}/products/${id}`)
        .then((response) => setProduct(response.data))
        .catch((error) => console.log(error))
    }, [API, id]);
    console.log(product, API);

    const handleDelete = () => {
        axios
        .delete(`${API}/products/${id}`, product)
        .then(() => navigate("/products"))
        .catch((error) => console.log(error))
    };

    return (
        <>
            <p>{product.name} 🪄</p>
            <p>{product.price} 🪄</p>
            <p>{product.rating} 🪄</p>
            <Link to={`/products/${id}/edit`}><button>Edit</button></Link>
            <Link to="/products"><button>Back</button></Link>
            <button onClick={handleDelete}>Delete</button>
        </>
    );
};