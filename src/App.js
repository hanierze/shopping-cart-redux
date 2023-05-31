import { Route, Routes } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import Navbar from "./components/shared/Navbar";
import ShopCart from "./components/ShopCart";
import Store from "./components/Store";
import { Provider } from "react-redux";

//Redux
import  store  from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Routes>
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/" element={<Store />} />
        <Route path="/products" element={<Store />} />
        <Route path="/cart" element={<ShopCart />} />
      </Routes>
    </Provider>
  );
}

export default App;
