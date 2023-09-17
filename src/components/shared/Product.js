import React from "react";
import { useSelector, useDispatch } from "react-redux";

//style
import styles from "./Product.module.scss";

//icon
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "react-router-dom";
import { isInCart, quantityCount, shorten } from "../../helper/function";

import {
  increase,
  decrease,
  removeItem,
  addItem,
} from "../../redux/cart/cartAction";


const Product = ({ product }) => {
  const dispatch = useDispatch();
  const cartstate = useSelector((state) => state.cartState);

  const { title, price, images } = product.attributes;
  const image = `${process.env.REACT_APP_BASE_URL}${images.data[0].attributes.url}`
  const {  id } = product;
  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt="products" />
      <div className="mt-2">
        <div>
          <p className={styles.title}> {shorten(title)} </p>
          <p> ${price} </p>
        </div>
        <div className={styles.linkContainer}>
          <Link to={`/products/${id}`}> detail </Link>
          <div className={styles.buttonsContainer}>
            {quantityCount(cartstate, id) === 1 && (
              <button
                className={styles.smallButton}
                onClick={() => dispatch(removeItem(product))}
              >
                <FontAwesomeIcon icon={faTrashAlt} size="xs" />
              </button>
            )}
            {quantityCount(cartstate, id) > 1 && (
              <button
                className={styles.smallButton}
                onClick={() => dispatch(decrease(product))}
              >
                -
              </button>
            )}
            {quantityCount(cartstate, id) > 0 && (
              <span className={styles.counter}>{quantityCount(cartstate, id)}</span>
            )}
            {isInCart(cartstate, id) ? (
              <button
                className={styles.smallButton}
                onClick={() => dispatch(increase(product))}
              >
                +
              </button>
            ) : (
              <button onClick={() => dispatch(addItem(product))}>
                add to cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
