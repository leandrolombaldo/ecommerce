import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'
 

import { FaStar } from "react-icons/fa";
import { Container1, PromoItem, PrimaryCata, Container } from './styles.js';


// import { useCart } from '../../hooks/useCart';
import data from './data';
import api from '../../config/api';


export function Catalog() {
    // const { addToCart } = useCart(); 
    const history = useHistory(); 
    const [topSalesProducts, setTopSalesProducts] = useState([]);
  
    async function getTopSales() {

        try {
            const response = await api.get(`/Products/`);

            const { data } = response;

            const topProducts = data.filter(product => product.sales_quantity < 30);

            setTopSalesProducts(topProducts);
        } catch (error) {
            alert("Ocorreu um erro ao buscar os items");
        }
    }


    useEffect(() => {
        getTopSales()
    }, []);

   

    return (
     
            <Container1>
                {topSalesProducts.map(product => (
                    <PromoItem key={product.id}>
                        <img src={product.image} alt={`${product.name}`} />
                        <div className="profile">
                            <h3>{product.name}</h3>
                            <h5>R${product.price} <s>$499.99</s></h5>
                            <button className="buy" type="button" onClick={() => history.push(`/detailsproduct/${product.id}`)}>BUY NOW</button>
                        </div>
                    </PromoItem>
                ))}
            </Container1>
    

    );
}



export function PrimaryCatalog() {
    const [recommendedProducts, setRecommendedProducts] = useState([]);

    async function getTopRecommended (){
        const response = await api.get('/Products');

        const products  = response.data;

        const topSellers = products.filter(product => product.star > 4);

        const recommendedProducts = products.map((product, index, productsList)=>{  
            // console.log(productsList.length)

            product.image = data[index < 6 ? index : productsList.length -5].image   
            
            // console.log(product);
           return product
        })

        
        setRecommendedProducts(topSellers)
    }

    useEffect(()=> {
        getTopRecommended()
    },[])

    return (
        <PrimaryCata > 
            {recommendedProducts.map((product) => {
                return (
                    <Container key={product.id}>
                        <img src={product.image} alt={`${product.name}`} />
                        <p>{product.discount}% OFF</p>
                        <span><FaStar color='#ffbf00' /><FaStar color='#ffbf00' /><FaStar color='#ffbf00' /><FaStar color='#ffbf00' /><FaStar color='#ffbf00' /></span>
                        <h5>{product.name}</h5>
                        <h6>${(product.price -((product.price * product.discount) /100)).toFixed([2])} &nbsp;&nbsp; <s>${product.price}</s></h6>
                    </Container>
                )
            })}
        </PrimaryCata>
    )
}

export default (Catalog, PrimaryCatalog);