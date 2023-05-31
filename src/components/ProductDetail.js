import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

//redux
import { useSelector  } from "react-redux";


//styles
import styles from "./ProductDetail.module.css";

const ProductDetail = () => {

  const products = useSelector(state => state.productState.products)
  const { id } = useParams();

  const product = products.find((item) => item.id === +id);
  const { image, title, description, price, category } = product;

  return (

<div className={styles.container}>
<img className={styles.image} src={image} alt="product" />
<div className={styles.textContainer}>
    <h3>{title}</h3>
    <p className={styles.description}>{description}</p>
    <p className={styles.category}><span>Category:</span> {category}</p>
    <div className={styles.buttonContainer}>
        <span className={styles.price}>{price} $</span>
        <Link to="/products">Back to Shop</Link>
    </div>
</div>
</div>



  );
};

export default ProductDetail;
