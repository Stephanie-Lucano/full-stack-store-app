import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import {Row, Col, Button} from "reactstrap";
import Stars from "../Functions/stars";

export default function ProductDetails() {
    const API = process.env.REACT_APP_API_URL;
    const {id} = useParams();
    console.log(API, id)
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        name: "",
        price: 0,
        rating: 0,
        featured: false,
        image: ""
    });
    
    useEffect(() => {
        axios
        .get(`${API}/products/${id}`)
        .then((response) => setProduct(response.data))
        .catch((error) => console.log(error))
    }, [API, id]);
    const handleDelete = () => {
        axios
        .delete(`${API}/products/${id}`, product)
        .then(() => navigate("/products"))
        .catch((error) => console.log(error))
    };
    return (
        <>
            <img width="50%" src={product.image} alt="furniture" />
            <p>{product.name}</p>
            <p>{"$"+product.price}</p>
            <p>{Stars(product.rating)}</p>
            <p>{product.featured ? "featured": ""}</p>
            
            <Row>
            <Col sm={2}>
            <Link to="/products">
                <Button color="success">Back</Button>
            </Link>
            </Col>
            <Col sm={2}>
            <Link to={`/products/${id}/edit`}>
                <Button color="warning">Edit</Button>
            </Link>
            </Col>
            <Col xs={6} sm={2}>
                <Button onClick={handleDelete} color="danger">Delete</Button>
            </Col>
            </Row>
        </>
    );
};