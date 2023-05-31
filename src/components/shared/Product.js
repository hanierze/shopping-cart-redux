import React from "react";
import { useSelector , useDispatch } from "react-redux";

//style
import styles from "./Product.module.css";

//icon
import trash from "../../assets/icons/trash.svg";

import { Link } from "react-router-dom";
import { isInCart, quantityCount, shorten } from "../../helper/function";

import {increase , decrease,removeItem,addItem} from '../../redux/cart/cartAction'




const Product = ({ product }) => {

  const dispatch = useDispatch();
  const state  = useSelector(state => state.cartState)


  const { title, price, image, id } = product;
  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt="products" />
      <div>
        <div>
          <p className={styles.title}> {shorten(title)} </p>
          <p> ${price} </p>
        </div>
        <div className={styles.linkContainer}>
          <Link to={`/products/${id}`}> detail </Link>
          <div className={styles.buttonsContainer}>
            {quantityCount(state, id) === 1 && (
              <button
                className={styles.smallButton}
                onClick={() =>
                  dispatch(removeItem( product) )
                }
              >
                <img src={trash} alt="trash" />
              </button>
            )}
            {quantityCount(state, id) > 1 && (
              <button
                className={styles.smallButton}
                onClick={() => dispatch(decrease(product))}
              >
                -
              </button>
            )}
            {quantityCount(state, id) > 0 && (
              <span className={styles.counter}>{quantityCount(state, id)}</span>
            )}
            {isInCart(state, id) ? (
              <button
                className={styles.smallButton}
                onClick={() => dispatch(increase(product))}
              >
                +
              </button>
            ) : (
              <button
                onClick={() => dispatch(addItem(product))}
              >
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
