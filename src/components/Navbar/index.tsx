import { useHistory } from "react-router-dom";

import { Navbar, Nav } from "react-bootstrap";
import { FaShoppingBag, FaRegUser } from "react-icons/fa";
import { Container } from "./styles";

import Logo from "../../assets/logo.svg";
import { useCart } from '../../hooks/useCart';

const Navtop = () => {
  const history = useHistory();
  const { cart } = useCart();

  return (
    <Container>
      <Navbar  className="navbar" expand="lg" >
        <Navbar.Brand style={{cursor:'pointer'}}>
          <img
            src={Logo}
            alt="logo Carolina's store"
            onClick={() => history.push("/")}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" style={{fontFamily: "Raleway", fontSize: "20px",}}>
            <Nav.Link onClick={() => history.push("/")}>Home</Nav.Link>
            <Nav.Link onClick={() => history.push("/about")}>About</Nav.Link>
            <Nav.Link href="#Em-Construção">Shop</Nav.Link>
            <Nav.Link href="#Em-Construção">Contact US</Nav.Link>
          </Nav>
          <Nav className="justify-content-end" style={{fontFamily: "Raleway", fontSize: "20px"}}>
            <Nav.Link onClick={() => history.push("/cart")}>
              <FaShoppingBag color="#000" />
              {cart.reduce((acc, item) => acc + item.quantity, 0)}
            </Nav.Link>
            <Nav.Link onClick={() => history.push("/signin")}>
              <FaRegUser color="#000" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default Navtop;
