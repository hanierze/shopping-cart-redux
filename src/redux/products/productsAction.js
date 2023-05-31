import axios from "axios";

const BASE_URL = "https://fakestoreapi.com";

const fetchProductsRequest = () => {
    return{type:"FETCH_PRODUCTS_REQUEST"}
}

const fetchProductsSucces = prosucts => {
    return{
        type:"FETCH_PRODUCTS_SUCCESS",
        payload:prosucts
    }
}

const fetchProductsFailure = error => {
    return{
        type:"FETCH_PRODUCTS_FAILURE",
        payload:error
    }
}


const fetchProducts = () => {
    return dispatch => {
        dispatch(fetchProductsRequest());
        axios.get(`${BASE_URL}/products`).
        then(res => {
            const products = res.data
            dispatch(fetchProductsSucces(products))
        }).catch(error => {
            dispatch(fetchProductsFailure(error))
        })
    }
}

export {fetchProducts}