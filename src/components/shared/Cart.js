import React from "react";
import { shorten } from "../../helper/function";

import { useDispatch } from "react-redux";

//styles
import styles from "./Cart.module.scss";

//icon
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Cart = ({ product }) => {
  
  const { images, price, title } = product.attributes;
  const image = `${process.env.REACT_APP_BASE_URL}${images.data[0].attributes.url}`
  const { quantity} = product;

  const dispatch = useDispatch();

  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <img className={styles.imgProduct} src={image} alt={shorten(title)} />
        <div className={styles.titleContainer}>
          <span style={{ marginRight: "10px" }}> {shorten(title)} </span>
          <span> $ {price}</span>
        </div>
        <div className={styles.buttonsContainer}>
          {quantity === 1 && (
            <button
              className={styles.smallButton}
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: product })
              }
            >
              <FontAwesomeIcon icon={faTrashAlt} size="xs" />
            </button>
          )}
          {quantity > 1 && (
            <button
              className={styles.smallButton}
              onClick={() => dispatch({ type: "DECREASE", payload: product })}
            >
              -
            </button>
          )}
          <span className={styles.quantity}> {quantity} </span>

          <button
            className={styles.smallButton}
            onClick={() => dispatch({ type: "INCREASE", payload: product })}
          >
            +
          </button>
        </div>
        </div>
    </div>
  );
};

export default Cart;
