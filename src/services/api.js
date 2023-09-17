import axios from "axios";


export const getProducts = async() => {
    const prosucts = await axios.get(`${process.env.REACT_APP_BASE_URL}/products`);
    return prosucts.data;
};