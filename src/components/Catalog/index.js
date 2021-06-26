import { useHistory } from 'react-router-dom';

import { FaStar } from "react-icons/fa";
import { Catal, Promo1, Promo2, Promo3, PrimaryCata, Container, Img, P, H5, H6, Star } from './styles.js';
import data from "./data";


import { useCart } from '../../hooks/useCart';
import Cata1 from '../../assets/cata1.jpg';
import Cata2 from '../../assets/cata2.jpeg';
import Cata3 from '../../assets/cata3.jpeg';


export function Catalog() {

    // const { addToCart } = useCart();

    // const history = useHistory();

    console.log()
    return (
        <>
            <Catal>
                <Promo1 className="promo1">
                    <img src={Cata1} alt='' />
                    <div className="profile">
                    <h3>BRUZA</h3>
                    <h5>$299.55&nbsp;&nbsp; <s>$499.99</s></h5>
                    <button className="buy">BUY NOW</button>
                    </div>
                </Promo1>
                <Promo2 className="promo2">
                    <img src={Cata2} alt='' />
                    <div className="profile">
                    <h3>DRESS</h3>
                    <h5>$299.55&nbsp;&nbsp; <s>$499.99</s></h5>
                    <button className="buy">BUY NOW</button>
                    </div>
                </Promo2>
                <Promo3 className="promo3">
                    <img src={Cata3} alt='' />
                    <div className="profile">
                    <h3>KIT</h3>
                    <h5>$299.55&nbsp;&nbsp; <s>$499.99</s></h5>
                    <button className="buy">BUY NOW</button>
                    </div>
                </Promo3>
            </Catal>
        </>

        // <Container>
        //     <div className="row">
        //         {data.map((product) => {
        //             return (
        //                 <Catalogo key={product.id}>
        //                     <Card style={{ width: '15rem' }}>
        //                         <Card.Img variant="top" src={product.img} alt={product.alt} />
        //                         <Card.Body>
        //                             <Card.Title>{product.name}</Card.Title>
        //                             <Card.Text>Price: ${product.price} <strong> 8/.mo* {(product.price / 8).toFixed(2)}</strong></Card.Text>
        //                             <Favority>
        //                                 <Card.Text className="star"><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /></Card.Text>
        //                             </Favority>
        //                             <br />
        //                             <Button type="button" variant="outline-primary" onClick={() => addToCart(product)}>Add to cart</Button>
        //                             <Button type="button" variant="outline-primary" onClick={() => history.push(`/detailsproduct/${product.id}`)}>Details Product</Button>
        //                         </Card.Body>
        //                     </Card>
        //                 </Catalogo>
        //             )
        //         })}
        //     </div>
        // </Container>
    );
}

export function PrimaryCatalog() {

    return (
        <PrimaryCata >
            {data.map((product) => {
                return (
                    <Container key={product.id}>
                        <Img src={product.img} alt='' />
                        <P>10% OFF</P>
                        <Star><FaStar color='#ffbf00' /><FaStar color='#ffbf00' /><FaStar color='#ffbf00' /><FaStar color='#ffbf00' /><FaStar color='#ffbf00' /></Star>
                        <H5>{product.name}</H5>
                        <H6>${product.price}&nbsp;&nbsp; <s>$999.95</s></H6>
                    </Container>
                )
            })}
        </PrimaryCata>
    )
}

export default (Catalog, PrimaryCatalog);