import React, { } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navtop from '../../components/Navbar';
import Footer from '../../components/NavFooter';
import { FaRegHeart, FaRegStar } from "react-icons/fa";
import Catalog from '../../components/Catalog';
import { productData } from '../../components/Catalog/data';
import data from './data';

import { useCart } from '../../hooks/useCart';


import { Container, Img, Div, Top, Mid, Button, Button1, Obs, Input, ButtonCep, NotCep, Info, BottomMid, ContainerMid, ContainerFooter, ButtonDes, Empty, Colors } from './styles';



function DetailsProduct() {


    const { id } = useParams()
    const product = data.find(item => item.id === Number(id));



    console.log(product)
    const { addToCart } = useCart();

    return (
        <>
            <Navtop />
            <Container className="container">
                <Img key=''>
                    <img src={product.img} alt='' />
                    <ButtonDes>Description</ButtonDes>
                    <Empty disabled></Empty>
                    <p>
                        {product.description}
                    </p>
                </Img>
                <Div>
                    <Top>
                        <h3>{product.name}</h3>
                        <span><FaRegHeart /></span>
                    </Top>
                    <hr />
                    <p>0 de 5 <span><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /></span>(0) <span>Rating</span></p>
                    <Mid>
                        <h4>$ {product.price}</h4>
                        <p>8x ${(product.price / 8).toFixed(2)} month</p>
                    </Mid>
                    <p>COLORS | {product.color[0]}</p>
                    <Colors>
                        <p>{product.palet[0]}</p>
                    </Colors>
                    <p>SIZE</p>
                    <ol>
                        {product.size.map((value, index) => {
                            return <a className="select" key={index}>{value}</a>
                        })}
                    </ol>
                    <Button type='button' onClick={() => addToCart(product)}>BUY</Button>
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