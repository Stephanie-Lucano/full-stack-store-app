import {Card, CardText, CardBody, CardTitle, Row, Col, CardLink, Button, CardImg} from "reactstrap";
import Stars from "../Functions/stars";

export default function Product({product}) {
    return (
        <div>
            <Row>
            <Col sm="5">
                <Card>
                    <CardImg top width="50%" src={product.image} alt="aspiring furniture looks for customers home" />
                    <CardBody>
                        <CardTitle>{product.name}</CardTitle>
                        <CardText>{"$"+product.price}</CardText>
                        <CardText>{Stars(product.rating)}</CardText>
                        <CardText>{product.image ? "Best Seller 💎" : ""}</CardText>
                        <CardLink href={`/products/${product.id}`}>
                        <Button>View</Button>
                        </CardLink>
                    </CardBody>
                </Card>
            </Col>
            </Row>
        </div>
    )
}