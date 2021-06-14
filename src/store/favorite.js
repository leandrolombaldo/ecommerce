import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import { FaRegHeart, FaHeart } from "react-icons/fa";


import data from '../pages/DetailsProduct/data';



function FavoriteWeb() {

    const { id } = useParams()

    const product = data.find(item => item.id === Number(id));

    const [favorites, setFavorites] = useState([]);
    const getArray = JSON.parse(localStorage.getItem('favorites') || '0');

    useEffect(() => {
        if (getArray !== 0) {
            setFavorites([...getArray])
        }
    }, [])

    const addFav = (props) => {
        let array = favorites
        let addArray = true;
        array.map((product, key) => {
            if (product === props.id);
            array.splice(key, 1);
            addArray = false;
        });
        if (addArray) {
            array.push(props.id);
        }
        setFavorites([...array])
        localStorage.setItem('favorites', JSON.stringify(favorites));

        var storage = localStorage.getItem('favItem' + (props.id) || '0')
        if (storage == null) {
            localStorage.setItem(('favItem' + (props.id)), JSON.stringify(props.product));
        }
        else {
            localStorage.removeItem('favItem' + (props.id));
        }
    }


    return (
        <span>
        {favorites.includes(id) ? (
            < FaHeart
            onClick={() => addFav({ product, id})}
            style={{color:'red'}}
            />
        ) : (
            <FaRegHeart 
            onClick={() => addFav({ product, id})}
            />
        )
        }
        </span>
)
}

export default FavoriteWeb;