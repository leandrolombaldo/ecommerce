// import React, { } from 'react';
import { NavLink } from "react-router-dom";

import { Navbar } from "../../components/Navbar";
import Footer from "../../components/NavFooter";

import { Container, MyCart, YourOrder, DetailsProducts, Total } from "./styles";
import { FaRegCheckCircle, FaPlusCircle, FaMinusCircle } from "react-icons/fa";

import { useCart } from "../../hooks/useCart";

const Cart = () => {
  const { cart, total } = useCart();

  return (
    <>
      <Navbar />
      <Container>
        <h2>My Cart</h2>
        <div className="cartEmpty">{cart.length === 0 ? <p>No items in cart.</p> : null}</div>
        {cart.map((cartItem) => (
          <MyCart>
            <img src={cartItem.image} alt="" />
            <div className="info" key={cartItem.id}>
              <strong>{cartItem.name}</strong>
              <p>Size: M</p>
              <p>Color: {cartItem.color}</p>
            </div>
            <div className="quantity">
              <button>
                <FaPlusCircle color="#00ae7c" />
              </button>
              <p>{cartItem.quantity}</p>
              <button>
                <FaMinusCircle color="#00ae7c" />
              </button>
            </div>
            <div className="value">
              <p>${cartItem.price}</p>
              <p>x {cartItem.quantity}</p>
            </div>
          </MyCart>
        ))}

        <YourOrder>
          <p>In Total</p>
          <hr />

          <DetailsProducts>
            <div className="order">
              <span>Order</span>
              {/* <strong>${total(cart)}</strong> */}
            </div>
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
            <NavLink
              to="/checkout"
              // disabled={cart.length === 0}
            >
              To Checkout{" "}
              <span>
                <FaRegCheckCircle />
              </span>
            </NavLink>
          </Total>
        </YourOrder>
      </Container>
      <Footer />
    </>
  );
};

export default Cart;
