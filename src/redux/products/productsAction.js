import axios from "axios";


const fetchProductsRequest = () => {
    return{type:"FETCH_PRODUCTS_REQUEST"}
}

const fetchProductsSucces = products => {
    return{
        type:"FETCH_PRODUCTS_SUCCESS",
        payload:products
    }
}

const fetchProductsFailure = error => {
    return{
        type:"FETCH_PRODUCTS_FAILURE",
        payload:error
    }
}

const fetchProductRequest = () => {
    return{type:"FETCH_PRODUCT_REQUEST"}
}

const fetchProductSucces = product => {
    return{
        type:"FETCH_PRODUCT_SUCCESS",
        payload:product
    }
}
 
const fetchProducts = () => {
    return dispatch => {
        dispatch(fetchProductsRequest());
        axios.get(`${process.env.REACT_APP_API_URL}/products?populate=*`).
        then(res => {
            const products = res.data.data
            dispatch(fetchProductsSucces(products))
        }).catch(error => {
            dispatch(fetchProductsFailure(error))
        })
    }
}

const fetchProduct = (id) => {
    return dispatch => {
        dispatch(fetchProductRequest());
        axios.get(`${process.env.REACT_APP_API_URL}/products/${id}?populate=*`).
        then(res => {
            const product = res.data.data.attributes
            dispatch(fetchProductSucces(product))
        }).catch(error => {
            dispatch(fetchProductsFailure(error))
        })
    }
}

const filterProduct = (category) => {
    return dispatch => {
        dispatch(fetchProductsRequest());
        const categoryFilter = category !== 'all' ? `&filters[category][name][$eq]=${category}` :''
        axios.get(`${process.env.REACT_APP_API_URL}/products?populate=*${categoryFilter}`).
        then(res => {
            const product = res.data.data
            dispatch(fetchProductsSucces(product))
        }).catch(error => {
            dispatch(fetchProductsFailure(error))
        })
    }
}



export {fetchProducts , fetchProduct , filterProduct}