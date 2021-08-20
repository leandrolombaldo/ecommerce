import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { FaStar, FaRegHeart, FaHeart } from "react-icons/fa";
import { Container1, PromoItem, PrimaryCata, Container } from "./styles";

import api from "../../config/api";

interface ProductData {
  id: number;
  name: string;
  description: string;
  size: Array<string>;
  price: number;
  sales_quantity: number;
  isFavorite: boolean;
  discount: number;
  star: number;
  image: string;
}

export function Catalog() {
  const history = useHistory();
  const [topSalesProducts, setTopSalesProducts] = useState<ProductData[]>([]);
  const [favorites, setFavorites] = useState<ProductData[]>([]);

  async function getTopSales() {
    try {
      const response = await api.get(`/Products/`);

      const { data } = response;

      const topProducts = data.filter(
        (product: ProductData) => product.sales_quantity < 30
      );

      setTopSalesProducts(topProducts);

      const favoritesStoraged = JSON.parse(
        localStorage.getItem("@favorite_products") || "[]"
      );

      // if(!favoritesStoraged){
      //   return
      // }

      setFavorites(favoritesStoraged);
    } catch (error) {
      alert("Ocorreu um erro ao buscar os items");
    }
  }

  useEffect(() => {
    getTopSales();
  }, []);

  async function handleFavorite(id: number) {
    const specificProduct = favorites.find((item) => item.id === id);

    if (specificProduct) {
      const newFavorites = favorites.filter((item) => item.id !== id);
      setFavorites(newFavorites);
      localStorage.setItem("@favorite_products", JSON.stringify(newFavorites));

      const newProducts = topSalesProducts.map((product: ProductData) => {
        if (product.id === id) {
          product.isFavorite = !product.isFavorite;
        }
        return product;
      });

      setTopSalesProducts(newProducts);

      return;
    }

    const newProducts = topSalesProducts.map((product: ProductData) => {
      if (product.id === id) {
        product.isFavorite = !product.isFavorite;
        setFavorites((state) => [...state, product]);
        localStorage.setItem(
          "@favorite_products",
          JSON.stringify([...favorites, product])
        );
      }
      return product;
    });

    setTopSalesProducts(newProducts);
  }

  function checkIfIsFavorite(id: number) {
    const favoriteProduct = favorites.find((item) => item.id === id);

    return favoriteProduct !== undefined;
  }

  return (
    <Container1>
      {topSalesProducts.map((product: ProductData) => (
        <PromoItem key={product.id}>
          <img src={product.image} alt={`${product.name}`} />
          <div className="profile">
            {checkIfIsFavorite(product.id) ? (
              <FaHeart onClick={() => handleFavorite(product.id)} color="red" />
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

    const topSellers = products.filter(
      (product: ProductData) => product.star > 4
    );
    setRecommendedProducts(topSellers);
  }

  useEffect(() => {
    getTopRecommended();
  }, []);

  return (
    <PrimaryCata>
      {recommendedProducts.map((product: ProductData) => {
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
              ).toFixed(2)}
              &nbsp;&nbsp; <s>${product.price}</s>
            </h6>
          </Container>
        );
      })}
    </PrimaryCata>
  );
}
