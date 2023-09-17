import React, { useEffect, useState } from "react";
import Product from "./shared/Product";

import { useSelector, useDispatch } from "react-redux";

//styles
import styles from "./Store.module.scss";

import LoadingProducts from "./loading/LoadingProducts";

//redux
import { fetchProducts, filterProduct } from "../redux/products/productsAction";
import { fetchCategories } from "../redux/category/categorySlice";

const Store = () => {
  const dispatch = useDispatch();
  const productState = useSelector((state) => state.productState);
  const categoryState = useSelector((state) => state.categoryState);

  const fetchData = async () => {
    await dispatch(fetchProducts());
    await dispatch(fetchCategories());
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [selectedCategory, setSelectedCategory] = useState("all");
  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
    dispatch(filterProduct(e.target.value));
  };

  return (
    <>
      <div className={styles.selectOption}>
          <label className="mb-2" htmlFor="category">Select Category :</label>
          <select
          id="category"
            className="select select-bordered w-full max-w-xs"
            value={selectedCategory}
            onChange={(event) => handleChange(event)}
          >
            
            <option select="true">all</option>
            {categoryState.categories.map((cat) => (
              <option key={cat.id}>{cat.attributes.name}</option>
            ))}
          </select>
          </div>

      {productState.loading ? (
        <div className={styles.lodingContainer}>
          <LoadingProducts />
        </div>
      ) : productState.error ? (
        <h2>Something went wrong</h2>
      ) : (
        <div className={styles.container}>
          {productState.products.length ? (
            productState.products?.map((item) => (
              <Product key={item.id} product={item} />
            ))
          ) : (
            <h1>There is no data available</h1>
          )}
        </div>
      )}
    </>
  );
};

export default Store;
