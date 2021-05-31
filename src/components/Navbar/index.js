import React, {  } from 'react';
import { useHistory } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { FaShoppingBag, FaRegUser } from "react-icons/fa";

import { useCart } from '../../hooks/useCart';
import { Top } from './styles'



const Navtop = () => {
  const history = useHistory();
  const { cart } = useCart();

 

  return (
    <Top>
      <Navbar collapseOnSelect expand="lg" variant="light" >
        <Navbar.Brand onClick={() => history.push('/')}>Store Carolina's</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link onClick={() => history.push('/about')}>About</Nav.Link>
            <Nav.Link href="#pricing">Shop</Nav.Link>
            <Nav.Link href="#pricing">Contact-Us</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">404</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Wishlist</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link onClick={() => history.push('/cart')}>
              <FaShoppingBag />
              {cart.reduce((acc, item) => acc + item.qty, 0)} Shopping cart
            </Nav.Link>
            <Nav.Link onClick={() => history.push('/signin')}><FaRegUser /> </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Top>
  );
}

export default Navtop;

