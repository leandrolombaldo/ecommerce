import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaRegHeart, FaHeart } from "react-icons/fa";


import data from '../components/Catalog/data';




function FavoriteWeb() {

    const { id } = useParams()

    const product = data.find(product => product.id === Number(id));

    const [favorites, setFavorites] = useState([]);
    const getArray = JSON.parse(localStorage.getItem('favorites') || '0');

    useEffect(() => {
        if (getArray !== 0) {
            setFavorites([...getArray])
        }
    }, [])


    const addFav = (props) => {
        let arrayFav = favorites
        let addArray = true;
        arrayFav.map((product, index) => {
            if (product.id === props.id);
            arrayFav.splice(index, 1);
        });
        if (addArray) {
            arrayFav.push(id);
        }
        setFavorites([...arrayFav])
        localStorage.setItem('favorites', JSON.stringify(favorites));

        let storage = localStorage.getItem(('Id ' + (props.id)), JSON.stringify(props.product))
        if (storage == null) {
            localStorage.setItem(('Id ' + (props.id)), JSON.stringify(props.product));
        }
        else {
            localStorage.removeItem('Id ' + (props.id));
        }
    }



    return (
        <span>
            {favorites.includes(id) ? (
                <FaHeart
                    onClick={() => addFav({ product, id })}
                    style={{ color: 'red' }}
                />
            ) : (
                <FaRegHeart
                    onClick={() => addFav({ product, id })}
                />
            )
            }
        </span>
    )
}

export default FavoriteWeb;