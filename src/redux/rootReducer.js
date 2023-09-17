import { combineReducers } from "redux";
import productsReducer from "./products/productsReducer";
import cartReducer from "./cart/cartReducer";
import userReducer from "../redux/auth/userSlice";
import modalDisplayReducer from "../redux/modalDisplay/modalDisplaySlice"
import categoryReducer from '../redux/category/categorySlice'

const rootReducer = combineReducers({
    productState:productsReducer,
    cartState:cartReducer,
    user: userReducer,
    modalState:modalDisplayReducer,
    categoryState:categoryReducer
})
export default rootReducer