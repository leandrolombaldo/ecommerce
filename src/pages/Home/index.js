import { useHistory } from "react-router";

import Slide from "../../components/Slide";
import Mosaic from "../../components/Mosaic";
import { Catalog, PrimaryCatalog } from "../../components/Catalog";
import Footer from "../../components/NavFooter";
import { useCart } from "../../hooks/useCart";

import { Navbar, Nav } from "react-bootstrap";
import { FaShoppingBag, FaRegUser } from "react-icons/fa";

import product1 from "../../assets/product.jpeg";
import product2 from "../../assets/product1.jpeg";
import product3 from "../../assets/product2.jpeg";
import Logo from "../../assets/logo.svg";


import {
  NavbarHome,
  TextTitle,
  TextParag,
  Container,
  ProductBlog,
  ProductBlog1,
  ProductBlog2,
  FinalProduct,
} from "./styles.js";


function Home() {
  const history = useHistory();
  const { cart } = useCart();

  return (
    <>
      <NavbarHome>
        <Navbar className="navbar" expand="lg">
          <Navbar.Brand style={{cursor: "pointer"}}>
            <img
              src={Logo}
              alt="logo Carolina's store"
              onClick={() => history.push("/")}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="mr-auto"
              style={{ fontFamily: "Raleway", fontSize: "20px" }}
            >
              <Nav.Link onClick={() => history.push("/")}>Home</Nav.Link>
              <Nav.Link onClick={() => history.push("/about")}>About</Nav.Link>
              <Nav.Link href="#Em-Construção">Shop</Nav.Link>
              <Nav.Link href="#Em-Construção">Contact US</Nav.Link>
            </Nav>
            <Nav
              className="justify-content-end"
              style={{ fontFamily: "Raleway", fontSize: "20px" }}
            >
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
      </NavbarHome>
      <Slide />
      <Catalog />
      <TextTitle>
        Best Seller
        <br />
        &nbsp; Product
      </TextTitle>
      <TextParag>
        Capture more customers with a great brand recall. Whether
        <br /> you need a catchy slogan for advertising.
      </TextParag>
      <PrimaryCatalog />
      <TextTitle>Gallary</TextTitle>
      <TextParag>
        Capture more customers with a great brand
        <br />
        reacall. Whether you need a catchy
      </TextParag>
      <Mosaic />
      <TextTitle>Our Blogs</TextTitle>
      <TextParag>
        Capture more customers with a great brand recall. Whether
        <br /> you need a catchy slogan for advertising.
      </TextParag>
      <Container>
        <ProductBlog>
          <img src={product1} alt="Detox" />
          <h5>Detox Calm Melissa doTerra</h5>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <button type="button">See More</button>
          <FinalProduct />
        </ProductBlog>
        <ProductBlog1>
          <img src={product2} alt="Argan Oil" />
          <h5>Argan Oil Miolo Comestic</h5>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <button type="button">See More</button>
          <FinalProduct />
        </ProductBlog1>
        <ProductBlog2>
          <img src={product3} alt="Tree sap" />
          <h5>Tree Sap Ointment Miolo Comestic</h5>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <button type="button">See More</button>
          <FinalProduct />
        </ProductBlog2>
      </Container>
      <Footer />
    </>
  );
}

export default Home;
