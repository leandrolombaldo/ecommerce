// import React, { } from 'react';
import { useHistory } from 'react-router-dom';

import Navtop from "../../components/Navbar";
import Footer from "../../components/NavFooter";

import {
  Container,
  MyCart,
  Address,
  YourOrder,
  DetailsProducts,
  Total,
} from "./styles";
import {
  FaRegCheckCircle,
  FaPlusCircle, 
  FaMinusCircle,
} from "react-icons/fa";

import { useCart } from "../../hooks/useCart";

const Cart = () => {
   const history = useHistory();
  //  const {  cart, changeQty, total } = useCart();

  
  return (
    <>
      <Navtop />
      <Container>
        <h2>My Cart</h2>
        <MyCart>
        <img src="https://images.unsplash.com/photo-1621458091100-20eeb61ab5da?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="" />
          <div className="info">
            <strong>Nome</strong>
            <p>Size: M</p>
            <p>Color: Blue</p>
          </div>
          <div className="quantity">
            <button><FaPlusCircle color="#00ae7c" /></button>
            <p>0</p>
            <button><FaMinusCircle color="#00ae7c" /></button>
          </div>
          <div className="value">
            <p>$299</p>
            <p>x 1</p>
          </div>
        </MyCart>
        <MyCart>
        <img src="https://images.unsplash.com/photo-1621458091100-20eeb61ab5da?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="" />
          <div className="info">
            <strong>Nome</strong>
            <p>Size: M</p>
            <p>Color: Blue</p>
          </div>
          <div className="quantity">
            <button><FaPlusCircle color="#00ae7c" /></button>
            <p>0</p>
            <button><FaMinusCircle color="#00ae7c" /></button>
          </div>
          <div className="value">
            <p>$299</p>
            <p>x 1</p>
          </div>
        </MyCart>
        <MyCart>
        <img src="https://images.unsplash.com/photo-1621458091100-20eeb61ab5da?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="" />
          <div className="info">
            <strong>Nome</strong>
            <p>Size: M</p>
            <p>Color: Blue</p>
          </div>
          <div className="quantity">
            <button><FaPlusCircle color="#00ae7c" /></button>
            <p>0</p>
            <button><FaMinusCircle color="#00ae7c" /></button>
          </div>
          <div className="value">
            <p>$299</p>
            <p>x 1</p>
          </div>
        </MyCart>
       

        <YourOrder>
          <p>In Total</p>
          <hr />
                   
          <DetailsProducts>
            <div className="order">
              <span>Order</span>
              <strong>$299</strong>
            </div>
            <div className="delivery">
              <span>Delivery</span>
              <strong>Free</strong>
            </div>
            <div className="discount">
              <span>Discount</span>
              <strong>-$10</strong>
            </div>
          </DetailsProducts>
          <hr />
          <Total>
            <button onClick={() => history.push('/checkout')}>To Checkout <span><FaRegCheckCircle /></span></button>
          </Total>
        </YourOrder>

        {/* <ContainerMod>
                <Table reponsive >
                    <thead>
                        <tr>
                            <th>PRODUCT</th>
                            <th>QUANTITY</th>
                            <th>PRICE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.length === 0 ? <p>No items in cart.</p> : null}
                        
                        {cart.map((cartItem) => (
                            <tr key={cartItem.id}>
                                <td >
                                    <div>
                                        <AlignCenter>
                                            <img src={cartItem.img} alt={cartItem.alt} width='100' className='mr-4' />
                                            <div>
                                                <h6 className='text-muted'>{cartItem.name}</h6>
                                                <h5 className='fw-bold'>{cartItem.name}</h5>
                                            </div>
                                        </AlignCenter>
                                    </div>
                                </td>
                                <td >
                                    <AlignCenter>
                                    <input  type="text"  value={cartItem.qty} onChange={(e) => changeQty(cartItem, parseInt(e.target.value))} />
                                    </AlignCenter>
                                </td>
                                <td>${(cartItem.price * cartItem.qty)}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>

                <CartTotal>
                    <thead>
                        <h2>Cart Total</h2>
                    </thead>
                    <tbody>

                        <hr className='my-4' />
                        <div className='d-flex'>
                            <h6 className='mr-5 mb-0'>Subtotal</h6>
                            <h6>${total(cart)}</h6>
                        </div>
                        <hr className='my-4' />
                        <div className='d-flex'>
                            <h6 className='mr-5 mb-0'>Shipping:</h6>
                            <div>
                                <h6 className='mb-0'>Free shipping</h6>
                                <p className='mb-0'>Shipping options will be updated during checkout.</p>
                            </div>
                        </div>
                        <hr className='my-4' />
                        <div className='d-flex'>
                            <h5 className='fw-bold mr-5'> Total: </h5>
                            <h5>${total(cart)}</h5>
                        </div>
                        <br />
                        <Button  type='button' className='w-100' onClick={() => history.push('/checkout')} style={{}}><strong>CHECKOUT</strong></Button>

                    </tbody>

                </CartTotal>
            </ContainerMod> */}
      </Container>
      <Footer />
    </>
  );
};

export default Cart;
