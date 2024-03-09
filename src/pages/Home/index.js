import { NavLink } from "react-router-dom";

import Slide from "../../components/Slide";
import Mosaic from "../../components/Mosaic";
import { Catalog, PrimaryCatalog } from "../../components/Catalog";
import Footer from "../../components/NavFooter";
import Swiper from "../../components/Swiper";
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
  FinalProduct,
  Main
} from "./styles.js";


function Home() {
  const { cart } = useCart();

  return (
    <>
      <NavbarHome>
        <Navbar className="navbar" expand="lg">
          <Navbar.Brand style={{ cursor: "pointer" }}>
            <img
              src={Logo}
              alt="logo Carolina's store"
              onClick={() => navigate("/")}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="mr-auto"
              style={{ fontFamily: "Raleway", fontSize: "20px" }}
            >
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About</NavLink>
              {/* <NavLink href="#Em-Construção">Shop</NavLink>
              <NavLink href="#Em-Construção">Contact US</NavLink> */}
            </Nav>
            <Nav
              className="justify-content-end"
              style={{ fontFamily: "Raleway", fontSize: "20px" }}
            >
              <NavLink to="/cart">
                <FaShoppingBag color="#000" />
                {cart.reduce((acc, item) => acc + item.quantity, 0)}
              </NavLink>
              <NavLink to="/signin">
                <FaRegUser color="#000" />
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </NavbarHome>
      <Slide />
      <Catalog />
      <Main>
        <TextTitle>
          Best Seller
          <br />
          Product
        </TextTitle>

        <TextParag>
          Capture more customers with a great brand recall. Whether
          you need a catchy slogan for advertising.
        </TextParag>
      </Main>
      <PrimaryCatalog />
      <Swiper />
      <TextTitle>Gallary</TextTitle>
      <TextParag>
        Capture more customers with a great brand
        reacall. Whether you need a catchy
      </TextParag>
      <Mosaic />
      <TextTitle>Our Blogs</TextTitle>
      <TextParag>
        Capture more customers with a great brand recall. Whether
        you need a catchy slogan for advertising.
      </TextParag>
      <Container>
        <ProductBlog>
          <img src={product1} alt="Detox" />
          <h5>Detox Calm Melissa doTerra</h5>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <a href="#">See More</a>
          <FinalProduct />
        </ProductBlog>
        <ProductBlog>
          <img src={product2} alt="Argan Oil" />
          <h5>Argan Oil Miolo Comestic</h5>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <a href="#">See More</a>
          <FinalProduct />
        </ProductBlog>
        <ProductBlog>
          <img src={product3} alt="Tree sap" />
          <h5>Tree Sap Ointment Miolo Comestic</h5>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <a href="#">See More</a>
          <FinalProduct />
        </ProductBlog>
      </Container>
      <Footer />
    </>
  );
}

export default Home;
