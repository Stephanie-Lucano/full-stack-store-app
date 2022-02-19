import axios from "axios";
import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";

export default function ProductNewForm() {
    const API = process.env.REACT_APP_API_URL;
    const navigate = useNavigate({});
    const [product, setProduct] = useState({
        name: "",
        price: 0,
        rating: 0
    });

    const handleSubmit = (event) => {
        axios.post(`${API}/products`, product)
        .then(() => navigate(`/products`))
        .catch((error) => console.log(error))
    };
    const handleClearAll = (event) => {
        setProduct({
            name: "",
            price: 0,
            rating: 0,
            featured: false
        });
    };
    const handleTextChange = (event) => {
        setProduct({...product, [event.target.id]:event.target.value})
    };
    const handleCheckboxChange = (event) => {
        setProduct({...product, [event.target.value]:!product.featured})
    };
    return (
        <>
            <p>Empty form fields 🪄</p>
            <form>
            <label htmlFor="name">Name</label>
                <input
                id="name"
                name="name"
                type="text"
                value={product.name}
                onChange={handleTextChange}
                required
                ></input>
                <label htmlFor="price">Price</label>
                <input
                id="price"
                name="price"
                type="number"
                value={product.price}
                onChange={handleTextChange}
                required
                ></input>
                <label htmlFor="rating">Rating</label>
                <input
                id="rating"
                name="rating"
                type="number"
                value={product.rating}
                onChange={handleTextChange}
                required
                ></input>
                <label htmlFor="featured">Featured</label>
                <input
                id="featured"
                name="featured"
                type="checkbox"
                onChange={handleCheckboxChange}
                checked={product.featured}
                ></input>
            </form>
            <Link to="/products"><button>Back</button></Link>
            <button onClick={handleSubmit}>Submit</button>
            <button onClick={handleClearAll}>Clear All</button>
        </>
    );
};