import React, { } from 'react';
import {useHistory} from 'react-router-dom';
import { Card, Button, Container } from 'react-bootstrap';
import { FaRegStar } from "react-icons/fa";
import { Catalogo, Favority } from './styles';
import FavoriteWeb from '../../store/favorite';


import { useCart } from '../../hooks/useCart';


function Catalog({ data }) {


    const { addToCart } = useCart();

    const history = useHistory();
    

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
                                    <Card.Text>Price: ${product.price} <strong> 8/.mo* {(product.price / 8).toFixed(2)}</strong></Card.Text>
                                    <Favority>
                                        <Card.Text className="star"><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /></Card.Text>
                                        <Card.Text className="heart"><FavoriteWeb /></Card.Text>
                                    </Favority>
                                    <br />
                                    <Button type="button" variant="outline-primary" onClick={() => addToCart(product)}>Add to cart</Button>
                                    <Button type="button" variant="outline-primary" onClick={() => history.push(`/detailsproduct/${product.id}`)}>Details Product</Button>
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