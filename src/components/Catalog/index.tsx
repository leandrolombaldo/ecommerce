import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { FaStar, FaRegHeart, FaHeart } from 'react-icons/fa';
import { Container1, PromoItem, PrimaryCata, Container } from './styles';

import api from '../../config/api';
import { useProducts } from '../../hooks/useProducts';

interface ProductData {
	id: number;
	title: string;
	description: string;
	price: number;
	image: string;
	rating: [
		{
			rate: number;
			count: number;
		}
	];
}

export function Catalog() {
	const limit = 3;

	const { data, isLoading } = useProducts(limit);
	const navigate = useNavigate();
	// const [favorites, setFavorites] = useState<ProductData[]>([]);

	// async function handleFavorite(id: number) {
	// 	const specificProduct = favorites.find(item => item.id === id);

	// 	if (specificProduct) {
	// 		const newFavorites = favorites.filter(item => item.id !== id);
	// 		setFavorites(newFavorites);
	// 		localStorage.setItem('@favorite_products', JSON.stringify(newFavorites));

	// 		const newProducts = topSalesProducts.map((product: ProductData) => {
	// 			if (product.id === id) {
	// 				product.isFavorite = !product.isFavorite;
	// 			}
	// 			return product;
	// 		});

	// 		setTopSalesProducts(newProducts);

	// 		return;
	// 	}

	// 	const newProducts = topSalesProducts.map((product: ProductData) => {
	// 		if (product.id === id) {
	// 			product.isFavorite = !product.isFavorite;
	// 			setFavorites(state => [...state, product]);
	// 			localStorage.setItem('@favorite_products', JSON.stringify([...favorites, product]));
	// 		}
	// 		return product;
	// 	});

	// 	setTopSalesProducts(newProducts);
	// }

	// function checkIfIsFavorite(id: number) {
	// 	const favoriteProduct = favorites.find(item => item.id === id);

	// 	return favoriteProduct !== undefined;
	// }

	return (
		<Container1>
			{isLoading ? (
				<h1>Loading...</h1>
			) : (
				data.map((product: ProductData) => (
					<PromoItem key={product.id}>
						<img src={product.image} alt={`${product.title}`} />
						<div className='profile'>
							{/* {checkIfIsFavorite(product.id) ? (
							// <FaHeart onClick={() => handleFavorite(product.id)} color='red' className='icon' />
						) : (
							// <FaRegHeart onClick={() => handleFavorite(product.id)} className='icon' />
						)} */}

							<h3>{product.title}</h3>
							<h5>
								R${product.price} <s>$499.99</s>
							</h5>
							<button className='buy' type='button' onClick={() => navigate(`/detailsproduct/${product.id}`)}>
								BUY NOW
							</button>
						</div>
					</PromoItem>
				))
			)}
		</Container1>
	);
}

export function PrimaryCatalog() {
	// 	const [recommendedProducts, setRecommendedProducts] = useState([]);
	// 	async function getTopRecommended() {
	// 		const response = await api.get('/Products');
	// 		const products = response.data;
	// 		const topSellers = products.filter((product: ProductData) => product.star > 4);
	// 		setRecommendedProducts(topSellers);
	// 	}
	// 	useEffect(() => {
	// 		getTopRecommended();
	// 	}, []);
	// 	return (
	// 		<PrimaryCata>
	// 			{recommendedProducts.map((product: ProductData) => {
	// 				return (
	// 					<Container key={product.id}>
	// 						<img src={product.image} alt={`${product.name}`} />
	// 						<p>{product.discount}% OFF</p>
	// 						<span>
	// 							<FaStar color='#ffbf00' />
	// 							<FaStar color='#ffbf00' />
	// 							<FaStar color='#ffbf00' />
	// 							<FaStar color='#ffbf00' />
	// 							<FaStar color='#ffbf00' />
	// 						</span>
	// 						<h5>{product.name}</h5>
	// 						<h6>
	// 							${(product.price - (product.price * product.discount) / 100).toFixed(2)}
	// 							&nbsp;&nbsp; <s>${product.price}</s>
	// 						</h6>
	// 					</Container>
	// 				);
	// 			})}
	// 		</PrimaryCata>
	// 	);
}
