import Slide from "../../components/Slide";
import Mosaic from "../../components/Mosaic";
import { Catalog, PrimaryCatalog } from "../../components/Catalog";
import Footer from "../../components/NavFooter";
import Swiper from "../../components/Swiper";

import product1 from "../../assets/product.jpeg";
import product2 from "../../assets/product1.jpeg";
import product3 from "../../assets/product2.jpeg";

import { TextTitle, TextParag, Container, ProductBlog, FinalProduct, Main } from "./styles";
import { Navbar } from "../../components/Navbar";

function Home() {
  return (
    <>
      <Navbar home />

      <Slide />

      <Catalog />

      <Main>
        <TextTitle>
          Best Seller
          <br />
          Product
        </TextTitle>

        <TextParag>
          Capture more customers with a great brand recall. Whether you need a catchy slogan for advertising.
        </TextParag>
      </Main>
      <PrimaryCatalog />
      <Swiper />
      <TextTitle>Gallary</TextTitle>
      <TextParag>Capture more customers with a great brand reacall. Whether you need a catchy</TextParag>
      <Mosaic />
      <TextTitle>Our Blogs</TextTitle>
      <TextParag>
        Capture more customers with a great brand recall. Whether you need a catchy slogan for advertising.
      </TextParag>
      <Container>
        <ProductBlog>
          <img src={product1} alt="Detox" />
          <h5>Detox Calm Melissa doTerra</h5>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <a href="#">See More</a>
          <FinalProduct />
        </ProductBlog>
        <ProductBlog>
          <img src={product2} alt="Argan Oil" />
          <h5>Argan Oil Miolo Comestic</h5>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <a href="#">See More</a>
          <FinalProduct />
        </ProductBlog>
        <ProductBlog>
          <img src={product3} alt="Tree sap" />
          <h5>Tree Sap Ointment Miolo Comestic</h5>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <a href="#">See More</a>
          <FinalProduct />
        </ProductBlog>
      </Container>
      <Footer />
    </>
  );
}

export default Home;
