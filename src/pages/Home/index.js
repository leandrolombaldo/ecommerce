import Navtop from '../../components/Navbar';
import Slide from '../../components/Slide';
import Catalog from '../../components/Catalog';
import {productData, productPromo} from '../../components/Catalog/data';
import Bannerf from '../../components/Bannerf';
import Footer from '../../components/NavFooter';


import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <>
      <Navtop />
      <Slide />
      <Catalog  data={productData} />
      <Bannerf />
      <Catalog  data={productPromo} />
      <Footer />
      
    </>
  );
}

export default App;