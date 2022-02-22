import axios from "axios";
import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {Col, Button, Form, FormGroup, Label, Input, FormText, Row} from "reactstrap";

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
            {/* <p>Empty form fields 🪄</p> */}
            <Form>
                <FormGroup row>
                <Label for="name" sm={2}>Name</Label>
                <Col sm={10}>
                <Input
                id="name"
                name="name"
                type="text"
                value={product.name}
                onChange={handleTextChange}
                required
                ></Input>
                </Col>
                </FormGroup>
                <FormGroup row>
                <Label for="price" sm={2}>Price</Label>
                <Col sm={10}>
                <Input
                id="price"
                name="price"
                type="number"
                value={product.price}
                onChange={handleTextChange}
                required
                ></Input>
                </Col>
                </FormGroup>
                <FormGroup row>
                <Label for="rating" sm={2}>Rating</Label>
                <Col sm={10}>
                <Input
                id="rating"
                name="rating"
                type="select"
                value={product.rating}
                onChange={handleTextChange}
                required
                >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Input>
                </Col>
                </FormGroup>
                <FormGroup row>
                <Label for="featured" sm={2}>Featured</Label>
                <Col sm={10}>
                <Input
                id="featured"
                name="featured"
                type="checkbox"
                onChange={handleCheckboxChange}
                checked={product.featured}
                ></Input>
                </Col>
                </FormGroup>
                <FormGroup row>
                <Label for="url" sm={2}>URL</Label>
                <Col sm={10}>
                <Input placeholder="http:// or https://" type="url" name="url" id="url" />
                <FormText color="muted">
                    Add a picture
                </FormText>
                </Col>
                </FormGroup>
            </Form>
            <Row>
                <Col xs={6} sm={2}>
                <Button onClick={handleSubmit} color="success">Submit</Button>{" "}
                </Col>
                <Col xs={6} sm={2}>
                <Button onClick={handleClearAll} color="danger">Clear All</Button>{" "}
                </Col>
                <Col sm={2}>
                <Link to="/products">
                    <Button color="warning">Back</Button>
                </Link>
                </Col>
            </Row>
        </>
    );
};