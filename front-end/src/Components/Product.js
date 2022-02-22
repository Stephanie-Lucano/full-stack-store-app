import {Card, CardText, CardBody, CardTitle, Row, Col, CardColumns, CardLink} from "reactstrap";

export default function Product({product}) {
    return (
        <div>
            <Row>
            <Col sm="4">
            <CardColumns>
                <Card>
                    <CardBody>
                        <CardLink href={`/products/${product.id}`}>
                            <img width="100%" src={product.image} alt="Product image"/>
                        </CardLink>
                        <CardTitle>{product.name}</CardTitle>
                        <CardText>{"$"+product.price}</CardText>
                        <CardText>{product.rating+"🌟"}</CardText>
                    </CardBody>
                </Card>
            </CardColumns>
            </Col>
            </Row>
        </div>
    )
}