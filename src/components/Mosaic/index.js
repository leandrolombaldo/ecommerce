import Make1 from "../../assets/make1.jpeg";
import Make2 from "../../assets/make2.jpeg";
import Make3 from "../../assets/make3.jpeg";
import Make4 from "../../assets/make4.jpeg";
import Make5 from "../../assets/make5.jpeg";
import Make6 from "../../assets/make6.jpeg";
import Make7 from "../../assets/make7.jpeg";

import { Container, Img, Img1, Img2, Img3, Img4, Img5, Img6 } from "./styles";

function Mosaic() {
  return (
    <Container>
      <Img src={Make1}></Img>
      <Img1 src={Make3}></Img1>
      <Img2 src={Make6}></Img2>
      <Img3 src={Make4}></Img3>
      <Img4 src={Make2}></Img4>
      <Img5 src={Make7}></Img5>
      <Img6 src={Make5}></Img6>
    </Container>
  );
}

export default Mosaic;
