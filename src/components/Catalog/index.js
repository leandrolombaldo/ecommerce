import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { FaStar, FaRegHeart, FaHeart } from "react-icons/fa";
import { Container1, PromoItem, PrimaryCata, Container } from "./styles.js";

// import { useCart } from '../../hooks/useCart';
import api from "../../config/api";

export function Catalog() {
  // const { addToCart } = useCart();
  const history = useHistory();
  const [topSalesProducts, setTopSalesProducts] = useState([]);
  const [favorites, setFavorites] = useState([])

  async function getTopSales() { 
    try {
      const response = await api.get(`/Products/`);

      const { data } = response;

      const topProducts = data.filter((product) => product.sales_quantity < 30);

      setTopSalesProducts(topProducts);

      const favoritesStoraged  = JSON.parse(localStorage.getItem('@favorite_products'));

      if(!favoritesStoraged){
        return
      }
  
      setFavorites(favoritesStoraged); 

    } catch (error) {
      alert("Ocorreu um erro ao buscar os items");
    }
  }

  useEffect(() => {
    getTopSales();
  }, []);

  async function handleFavorite(id) { 
    const favoriteProduct = favorites.find(item=> item.id === id);

    if(favorites.includes(favoriteProduct)){
      return
    }
    const newProducts = topSalesProducts.map((product) => {
        
      if (product.id === id) {
        product.isFavorite = !product.isFavorite;  
        localStorage.setItem('@favorite_products', JSON.stringify([...favorites, product]))
      }

      // let storage = JSON.parse(localStorage.getItem('@favorite_products', favorites));
      // const filterFavorites = storage.filter((product) => product.id)
      
      // console.log(filterFavorites)
    });
     

    setTopSalesProducts(newProducts);  
  }

  function checkIfIsFavorite(id){
    const favoriteProduct = favorites.find(item => item.id === id)
    
    return favorites.includes(favoriteProduct)
  }

  return (
    <Container1>
      {topSalesProducts.map((product) => (
        <PromoItem key={product.id}>
          <img src={product.image} alt={`${product.name}`} />
          <div className="profile"> 

          {product.isFavorite || checkIfIsFavorite(product.id) ? (
            <FaHeart onClick={() => handleFavorite(product.id)} color="red"/>
          ) : (
            <FaRegHeart onClick={() => handleFavorite(product.id)} />
          )} 

            <h3>{product.name}</h3>
            <h5>
              R${product.price} <s>$499.99</s>
            </h5>
            <button
              className="buy"
              type="button"
              onClick={() => history.push(`/detailsproduct/${product.id}`)}
            >
              BUY NOW
            </button>
          </div>
        </PromoItem>
      ))}
    </Container1>
  );
}

export function PrimaryCatalog() {
  const [recommendedProducts, setRecommendedProducts] = useState([]);

  async function getTopRecommended() {
    const response = await api.get("/Products");

    const products = response.data;

    const topSellers = products.filter((product) => product.star > 4);
    setRecommendedProducts(topSellers);
  }

  

  useEffect(() => {
    getTopRecommended();
  }, []);

  return (
    <PrimaryCata>
      {recommendedProducts.map((product) => {
        return (
          <Container key={product.id}>
            <img src={product.image} alt={`${product.name}`} />
            <p>{product.discount}% OFF</p>
            <span>
              <FaStar color="#ffbf00" />
              <FaStar color="#ffbf00" />
              <FaStar color="#ffbf00" />
              <FaStar color="#ffbf00" />
              <FaStar color="#ffbf00" />
            </span>
            <h5>{product.name}</h5>
            <h6>
              $
              {(
                product.price -
                (product.price * product.discount) / 100
              ).toFixed([2])}{" "}
              &nbsp;&nbsp; <s>${product.price}</s>
            </h6>
          </Container>
        );
      })}
    </PrimaryCata>
  );
}

export default (Catalog, PrimaryCatalog);
