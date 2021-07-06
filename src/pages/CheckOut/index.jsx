import Navtop from "../../components/Navbar";
import Footer from "../../components/NavFooter";

import { useCart } from "../../hooks/useCart";
import Cep from "../../components/Cep";

import {
  Container,
  Login,
  Address,
  Payment,
  H5,
  YourOrder,
  ProductList,
  DetailsProducts,
  Total,
} from "./styles";

import {
  FaUserCheck,
  FaCheck,
  FaRegAddressBook,
  FaCreditCard,
} from "react-icons/fa";

import { RiBankLine } from "react-icons/ri";
import { Accordion, Card, Button, Form, Col } from "react-bootstrap";

const Checkout = () => {
  const { cart, changeQty, total } = useCart();

  const Boleto = () => {
    alert("Boleto sent to email");
  };

  return (
    <>
      <Navtop />
      <Container>
        <h2>Checkout</h2>
        <Login>
          <span>
            <FaUserCheck />
          </span>
          <div className="login">
            <p>
              LOGIN <FaCheck />
            </p>
            <strong>Nome</strong>
          </div>
          <div>
            <button>CHANGE</button>
          </div>
        </Login>
        <Address>
        <Accordion defaultActiveKey="0">
          <Card>
          <Card.Header className="colorNamesMethodPayment">
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                <FaRegAddressBook color="#000" size="30"/>
              </Accordion.Toggle>
              Address
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <label>SHIPPING ADDRESS</label>
                <Cep />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          </Accordion>
        </Address>

        <H5>PAYMENT METHOD</H5>
        <Payment>
          <Accordion defaultActiveKey="0">
            <Card>
              <Card.Header className="colorNamesMethodPayment">
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  <FaCreditCard color="#000" size="30" />
                </Accordion.Toggle>
                Debit/Credit Card
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Enter Card Number</Form.Label>
                      <Form.Control
                        type="tel"
                        placeholder="0000 0000 0000 0000"
                      />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col}>
                      <Form.Label>Month</Form.Label>
                      <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col}>
                      <Form.Label>Year</Form.Label>
                      <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col}>
                      <Form.Label>CVV*</Form.Label>
                      <Form.Control />
                    </Form.Group>
                  </Form.Row>
                  <Button variant="dark" type="submit">
                    Pay ${total(cart).toFixed(2)}
                  </Button>
                  <p>
                    Your card details would be securely saved for faster
                    payments. Your CVV will not be stored
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  <RiBankLine color="#000" size="30" />
                </Accordion.Toggle>
                Boleto
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <Button onClick={Boleto} variant="dark" type="submit">
                    Receive Boleto to e-mail
                  </Button>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Payment>

        <YourOrder>
          <p>Your Order</p>
          <hr />
          {cart.map((cartItem) => (
            <ProductList>
              <img src={cartItem.image} alt="" />
              <div>
                <strong>{cartItem.name}</strong>
                <div className="details">
                  <p>
                    Size: <span>M</span>
                  </p>
                  <p>
                    Color: <span>{cartItem.color}</span>
                  </p>
                </div>
                <h5>
                  ${cartItem.price} <span>x {cartItem.qty}</span>
                </h5>
              </div>
            </ProductList>
          ))}
          <br />
          <hr />
          <DetailsProducts>
            <div className="delivery">
              <span>Delivery</span>
              <strong>Free</strong>
            </div>
            <div className="discount">
              <span>Discount</span>
              <strong>$0</strong>
            </div>
          </DetailsProducts>
          <hr />
          <Total>
            <h5>Total</h5>
            <h5>${total(cart).toFixed(2)}</h5>
          </Total>
        </YourOrder>
      </Container>
      <Footer />
    </>
  );
};

export default Checkout;
