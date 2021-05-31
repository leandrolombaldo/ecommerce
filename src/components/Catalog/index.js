import React, { } from 'react';
import { Card, Button, Container } from 'react-bootstrap';
import { FaRegStar, FaRegHeart } from "react-icons/fa";
import { Catalogo, Favority } from './styles';


import { useCart } from '../../hooks/useCart';


function Catalog({ data }) {
    const { addToCart } = useCart();

    

    return (
        <Container>
            <div className="row">
                {data.map((product) => {
                    return (
                        <Catalogo key={product.id}>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={product.img} alt={product.alt} />
                                <Card.Body>
                                    <Card.Title>{product.name}</Card.Title>
                                    <Card.Text>Price: ${product.price} <strong> 8/.mo* {(product.promo / 8).toFixed(2)}</strong></Card.Text>
                                    <Card.Text>Offer: ${product.promo} <strong> 8/.mo* {(product.promo / 8).toFixed(2)}</strong></Card.Text>
                                    <Favority>
                                        <Card.Text className="star"><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /></Card.Text>
                                        <Card.Text className="heart"><FaRegHeart /></Card.Text>
                                    </Favority>
                                    <br />
                                    <Button type="button" variant="outline-primary" onClick={() => addToCart(product)}>Add to cart</Button>
                                </Card.Body>
                            </Card>
                        </Catalogo>
                    )
                })}
            </div>
        </Container>
    );
}

export default Catalog;