import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

//redux
import { useSelector, useDispatch } from "react-redux";

//styles
import styles from "./ProductDetail.module.scss";
import { fetchProduct } from "../redux/products/productsAction";

const ProductDetail = () => {

  const { id } = useParams();
  const dispatch = useDispatch();

  const productState = useSelector((state) => state.productState);

  useEffect(() => {
    dispatch(fetchProduct(id));
    console.log(productState)
  }, []);

  const product = productState.product;
  console.log('product',product)
  const { images, title, description, price, category } = product;
  console.log('category',category?.data?.attributes?.name)

  return (
    <>
      {productState.loading ? (
        <h1>Loading Product</h1>
      ) : productState.error ? (
        <h1>Something went wrong</h1>
      ) : (
        <div className={styles.lodingContainer}>
          <div className={styles.container}>
            <img
              className={styles.image}
              src={`${process.env.REACT_APP_BASE_URL}${images?.data[0].attributes.url}`}
              alt="product"
            />
            <div className={styles.textContainer}>
              <h3>{title}</h3>
              <p className={styles.description}>{description}</p>
              <p className={styles.category}>
                <span>Category:</span> {category?.data?.attributes?.name}
              </p>
              <div className={styles.buttonContainer}>
                <span className={styles.price}>{price} $</span>
                <Link to="/products">Back to Shop</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetail;
