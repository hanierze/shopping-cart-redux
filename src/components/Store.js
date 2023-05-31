import React, {  useEffect } from "react";
import Product from "./shared/Product";

import { useSelector , useDispatch } from "react-redux";

//styles
import styles from "./Store.module.css";

import LoadingProducts from "./loading/LoadingProducts";

//redux
import {fetchProducts} from '../redux/products/productsAction'

const Store = () => { 

  const dispatch = useDispatch();
  const productState = useSelector(state => state.productState)

  useEffect(() => {
   if(!productState.products.length) dispatch(fetchProducts())
  }, []);

  return (
    <>
      {productState.loading ? (
        <div className={styles.lodingContainer}>
           <LoadingProducts /> 

        </div>
      ) : 
      productState.error? 
      <h2>Something went wrong</h2> :
      (
        <div className={styles.container}>
          {productState.products.map((item) => (
            <Product key={item.id} product={item} />
          ))}
        </div>
      )}
    </>
  );
};

export default Store;
