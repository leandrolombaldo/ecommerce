import React from 'react';
import { Link} from 'react-router-dom';
import Navtop from '../../components/Navbar';
import Footer from '../../components/NavFooter';
import Foto1 from '../../assets/catalogo1.jpeg';
import { FaRegHeart, FaRegStar } from "react-icons/fa";
import Catalog from '../../components/Catalog';
import { productData } from '../../components/Catalog/data';



import { useCart } from '../../hooks/useCart';


import { Container, Img, Div, Top, Mid, Button, Button1, Obs, Input, ButtonCep, NotCep, Info, BottomMid, ContainerMid, ContainerFooter, ButtonDes, Empty } from './styles';

function DetailsProduct() {
    
    const { cart } = useCart();

    return (
        <>
            <Navtop />
            {cart.map((cartItem) => (
            <Container className="container">                
                <Img >
                    <img src={Foto1} alt='' />
                    <ButtonDes>Description</ButtonDes>
                    <Empty disabled></Empty>
                    <p>
                        lorem ipsum dolor sit amet, consectetur
                        lorem ipsum dolor sit amet
                        lorem ipsum dolor sit amet, consectetur
                        lorem ipsum dolor sit amet
                        lorem ipsum dolor sit amet, consectetur
                        lorem ipsum dolor sit amet
                        lorem ipsum dolor sit amet, consectetur
                        lorem ipsum dolor sit amet
                        lorem ipsum dolor sit amet, consectetur
                        lorem ipsum dolor sit amet
                        lorem ipsum dolor sit amet, consectetur
                        lorem ipsum dolor sit amet
                        lorem ipsum dolor sit amet, consectetur
                        lorem ipsum dolor sit amet
                        lorem ipsum dolor sit amet, consectetur
                        lorem ipsum dolor sit amet
                        lorem ipsum dolor sit amet, consectetur
                        lorem ipsum dolor sit amet
                        lorem ipsum dolor sit amet, consectetur
                        lorem ipsum dolor sit amet
                </p>
                </Img>
                <Div>
                    <Top>
                        <h3>DRESS PINK</h3>
                        <span><FaRegHeart /></span>
                    </Top>
                    <hr />
                    <p>0 de 5 <span><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /></span>(0) <span>Rating</span></p>
                    <Mid>
                        <h4>$499</h4>
                        <p>8x 62,38 month</p>
                    </Mid>
                    <p>COR | Pink</p>
                    <p>TAMANHO</p>
                    <ol>
                        <li>36</li>
                        <li>37</li>
                        <li>38</li>
                        <li>39</li>
                        <li>40</li>
                    </ol>
                    <Button type='button'>BUY</Button>
                    <Button1 type='button'>BUY WITH <span>1 CLICK</span></Button1>
                    <Obs>Check if the product is available in the cart.</Obs>
                    <hr />
                    <p>SIMULATE SHIPPING</p>
                    <Input placeholder="Enter your ZIPCODE" type='tel' />
                    <ButtonCep type='button'>OK</ButtonCep>
                    <NotCep><Link style={{ color: '#000' }} to={{ pathname: 'http://www.buscacep.correios.com.br/sistemas/buscacep/buscaCepEndereco.cfm' }} target='_blank'>I don't know my ZIPCODE</Link></NotCep>
                    <Info>Prices, terms and types of delivery are valid only for this product under consultation.</Info>
                </Div>
            </Container >            
            ))}
            <ContainerMid className="container">
                <BottomMid>COMPLETE LOOK</BottomMid>
                <Catalog data={productData} />
            </ContainerMid>
            <ContainerFooter className="container">
                <fieldset className="fieldset-border">
                    <legend class="legend-border">Returns & Exchanges</legend>
                    <p><strong>EASY EXCHANGE</strong></p>
                    <p>It is simple and practical to exchange your products through the website or APP.</p>
                    <NotCep><Link style={{ color: '#000' }}>I want to know how to change</Link></NotCep>
                </fieldset>
                <fieldset className="fieldset-border">
                    <legend class="legend-border">Payment Methods</legend>
                    <table>
                        <tbody>
                            <tr>
                                <td>CARD</td>
                                <td>8x month</td>
                            </tr>
                            <tr>
                                <td>BOLETO</td>
                                <td>In Cash</td>
                            </tr>
                            <tr>
                                <td>PIX</td>
                                <td>Instant Payment</td>
                            </tr>
                        </tbody>
                    </table>
                </fieldset>
            </ContainerFooter>
            <Footer />
        </>
    );
}

export default DetailsProduct;