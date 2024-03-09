import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Navtop from "../../components/Navbar";
import Footer from "../../components/NavFooter";

import { FaRegStar, FaRegHeart, FaHeart } from "react-icons/fa";

import { useCart } from "../../hooks/useCart";
import api from "../../config/api";

import {
  Container,
  Img,
  Div,
  Top,
  Mid,
  Button,
  Button1,
  Obs,
  Input,
  ButtonCep,
  NotCep,
  Info,
  BottomMid,
  ContainerMid,
  ContainerFooter,
  ButtonDes,
  Empty,
  Color,
  BoxCep,
  PriceShipping
} from "./styles";

function DetailsProduct() {

  const { id } = useParams();
  // const product = data.find((item) => item.id === Number(id));

  const [product, setProduct] = useState([]);
  const [shipping, setShipping] = useState(null);
  const [shippingOne, setShippingOne] = useState('');

  useEffect(() => {
    api.get(`/products/${id}`).then((response) => {
      setProduct(response.data);
    });
  }, [id]);

  const { addToCart } = useCart();

  const handleCepShipping = () => {
    // pega somente 3 ultimos numero digitados
    const calcShipping = shipping % 1000;

    if (calcShipping < 99) {
      setShippingOne('ZipCode Incorret')
    } else if(calcShipping > 100 && calcShipping <= 400) {
      setShippingOne('Shipping $25.00')
    } else if (calcShipping > 401 && calcShipping <= 700) {
      setShippingOne('Shipping $35.00')
    } else if (calcShipping > 701 && calcShipping <= 999) {
      setShippingOne('Shipping $45.00')
    }
    
  }

  return (
    <>
      <Navtop />
      <Container className="container">
        <Img key={product.id}>
          <img src={product.image} alt="" />
          <ButtonDes>Description</ButtonDes>
          <Empty disabled></Empty>
          <p>{product.description}</p>
        </Img>
        <Div>
          <Top>
            <h3>{product.name}</h3>
            <span>
              <FaRegHeart />
            </span>
          </Top>
          <hr />
          <p>
            0 de 5{" "}
            <span>
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
            </span>(0) <span>Rating</span>
          </p>
          <Mid>
            <h4>$ {product.price}</h4>
            <p>8x ${(product.price / 8).toFixed(2)} month</p>
          </Mid>
          <p>COLOR | {product.color}</p>

          <Color style={{ background: `${product.palet}` }} />

          <p>SIZE</p>
          <ol>
            {product.sizes?.map((value, index) => {
              return (
                <li className="select" key={index}>
                  {value}
                </li>
              );
            })}
          </ol>
          <Button type="button" onClick={() => addToCart(product)}>
            BUY
          </Button>
          <Button1 type="button">
            BUY WITH <span>1 CLICK</span>
          </Button1>
          <Obs>Check if the product is available in the cart.</Obs>
          <hr />
          <p>SIMULATE SHIPPING</p>
          <BoxCep>
            <Input placeholder="Enter your ZIPCODE" type="tel" onChange={(e) => setShipping(e.target.value)}/>
            <ButtonCep type="button" onClick={handleCepShipping}>OK</ButtonCep>
          </BoxCep>
          <PriceShipping>
            {shippingOne}
          </PriceShipping>
          <NotCep>
            <Link
              style={{ color: "#000" }}
              to={{
                pathname:
                  "http://www.buscacep.correios.com.br/sistemas/buscacep/buscaCepEndereco.cfm",
              }}
              target="_blank"
            >
              I don't know my ZIPCODE
            </Link>
          </NotCep>
          <Info>
            Prices, terms and types of delivery are valid only for this product
            under consultation.
          </Info>
        </Div>
      </Container>

      <ContainerMid className="container">
        <BottomMid>COMPLETE LOOK</BottomMid>
      </ContainerMid>

      <ContainerFooter className="container">
        <fieldset className="fieldset-border">
          <legend class="legend-border">Returns & Exchanges</legend>
          <p>
            <strong>EASY EXCHANGE</strong>
          </p>
          <p>
            It is simple and practical to exchange your products through the
            website or APP.
          </p>
          <NotCep>
            <Link style={{ color: "#000" }}>I want to know how to change</Link>
          </NotCep>
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
