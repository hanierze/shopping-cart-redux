import { Navigate, Route, Routes } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import Navbar from "./components/shared/Navbar";
import ShopCart from "./components/ShopCart";
import Store from "./components/Store";
import { Provider } from "react-redux";

import Sidebar from "./components/sideBar/Sidebar";

import styles from "./App.module.scss";

//Redux
import store from "./redux/store";
import Footer from "./components/shared/Footer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/shared/Home";
import AboutUs from "./components/about-us/AboutUs";
import New from "./components/new";

function App() {
  return (
    <Provider store={store}>
      <div className={styles.appWrapper}>
        <div className={styles.content}>
          <Navbar />
          <div className="flex h-full overflow-auto	">
            {/* <Sidebar /> */}
            <div className={styles.containerRoutes}>
              <Routes>
                <Route path="/products/:id" element={<ProductDetail />} />
                <Route path="/"  element={<Navigate to="/home" replace />}  />
                <Route path="/home" element={<Home />} />
                <Route path="/products" element={<Store />} />
                <Route path="/cart" element={<ShopCart />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      <ToastContainer />
    </Provider>
  );
}

export default App;
