import React from "react";
import { Link } from "react-router-dom";
import Cart from "./shared/Cart";

import { useSelector , useDispatch } from "react-redux";
import {clear , checkout} from '../redux/cart/cartAction'


//styles
import styles from "./ShopCart.module.css";

const ShopCart = () => {
  const dispatch = useDispatch();
  const state  = useSelector(state => state.cartState)


  return (
    <div className={styles.container}>
      <div className={styles.cart}>
        {state.selectedItems.map((item) => (
          <Cart product={item} key={item.id} />
        ))}
      </div>
      {state.itemCounter > 0 && (
        <div className={styles.total}>
          <p>total items : {state.itemCounter}</p>
          <p>total payments : ${state.total}</p>
          <div className={styles.buttons}>
            <button
              className={styles.checkout}
              onClick={() => dispatch(dispatch(clear()))}
            >
              Check out
            </button>
            <button
              className={styles.clear}
              onClick={() => dispatch(checkout())}
            >
              Clear
            </button>
          </div>
        </div>
      )}

      {state.checkout && (
        <div className={styles.complete}>
          <h3>checked out successfully</h3>
          <Link to="/products">buy more ...</Link>
        </div>
      )}

      {!state.checkout && state.itemCounter === 0 && (
        <div className={styles.complete}>
          <h3>Want to buy?</h3>
          <Link to="/products">go back to shop</Link>
        </div>
      )}
    </div>
  );
};

export default ShopCart;
