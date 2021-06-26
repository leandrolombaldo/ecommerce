// import React, { } from 'react';
// import { useHistory } from 'react-router-dom';
// import Navtop from '../../components/Navbar';
// import Footer from '../../components/NavFooter';
// import { ContainerMod, AlignCenter, H2, CartTotal } from './styles';
// import { Table, Container, Button } from 'react-bootstrap';

// import { useCart } from '../../hooks/useCart';




// const Cart = () => {
//     const history = useHistory();
//     const {  cart, changeQty, total } = useCart();


//     return (
//         <>
//         <Navtop />
//         <Container>
//             <H2>
//                 <h2 >Shopping Cart</h2>
//             </H2>
//             <ContainerMod>
//                 <Table reponsive >
//                     <thead>
//                         <tr>
//                             <th>PRODUCT</th>
//                             <th>QUANTITY</th>
//                             <th>PRICE</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {cart.length === 0 ? <p>No items in cart.</p> : null}
                        
//                         {cart.map((cartItem) => (
//                             <tr key={cartItem.id}>
//                                 <td >
//                                     <div>
//                                         <AlignCenter>
//                                             <img src={cartItem.img} alt={cartItem.alt} width='100' className='mr-4' />
//                                             <div>
//                                                 <h6 className='text-muted'>{cartItem.name}</h6>
//                                                 <h5 className='fw-bold'>{cartItem.name}</h5>
//                                             </div>
//                                         </AlignCenter>
//                                     </div>
//                                 </td>
//                                 <td >
//                                     <AlignCenter>
//                                     <input  type="text"  value={cartItem.qty} onChange={(e) => changeQty(cartItem, parseInt(e.target.value))} />
//                                     </AlignCenter>
//                                 </td>
//                                 <td>${(cartItem.price * cartItem.qty)}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </Table>

//                 <CartTotal>
//                     <thead>
//                         <h2>Cart Total</h2>
//                     </thead>
//                     <tbody>

//                         <hr className='my-4' />
//                         <div className='d-flex'>
//                             <h6 className='mr-5 mb-0'>Subtotal</h6>
//                             <h6>${total(cart)}</h6>
//                         </div>
//                         <hr className='my-4' />
//                         <div className='d-flex'>
//                             <h6 className='mr-5 mb-0'>Shipping:</h6>
//                             <div>
//                                 <h6 className='mb-0'>Free shipping</h6>
//                                 <p className='mb-0'>Shipping options will be updated during checkout.</p>
//                             </div>
//                         </div>
//                         <hr className='my-4' />
//                         <div className='d-flex'>
//                             <h5 className='fw-bold mr-5'> Total: </h5>
//                             <h5>${total(cart)}</h5>
//                         </div>
//                         <br />
//                         <Button  type='button' className='w-100' onClick={() => history.push('/checkout')} style={{}}><strong>CHECKOUT</strong></Button>

//                     </tbody>

//                 </CartTotal>
//             </ContainerMod>
//         </Container>
//         <Footer />
//         </>
//     )
// }

// export default Cart;
