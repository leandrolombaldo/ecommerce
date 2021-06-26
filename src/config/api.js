import axios from 'axios';

export const api = axios.create({
    baseURL: "https://600e2b9f3bb1d100179de755.mockapi.io/api/Products",
});


api.get("/products")
        .then((response) => doSomething(response.data))
        .catch((err))