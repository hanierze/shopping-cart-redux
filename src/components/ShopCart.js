import React from "react";
import { Link } from "react-router-dom";
import Cart from "./shared/Cart";

import { useSelector, useDispatch } from "react-redux";
import { clear, checkout } from "../redux/cart/cartAction";

//styles
import styles from "./ShopCart.module.scss";
import { userData } from "../helper/storage";
import Payment from "./payment/payment";

//Toast
import { notify } from "../components/toast";
import ConfirmationModal from "./confirmation-modal/ConfirmationModal";

const ShopCart = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.cartState);

  const payment = () => {
    const { jwt } = userData();
    jwt ? dispatch(checkout()) : notify("Please login first", "error");
  };

  return (
    <div className={styles.container}>
      {state.itemCounter !== 0 && (
        <div className={styles.cart}>
          {state.selectedItems.map((item) => (
            <Cart product={item} key={item.id} />
          ))}
        </div>
      )}
      {state.itemCounter > 0 && (
        <div className={styles.total}>
          <div>
            <p>total items : {state.itemCounter}</p>
            <p>total payments : ${state.total}</p>
          </div>
          <div className={styles.buttons}>
            <button className={styles.checkout} onClick={payment}>
              Check out
            </button>

            <div className={styles.clear}>
              <ConfirmationModal
                question="Are you sure to delete?"
                title="Clear"
                func={() => dispatch(clear())}
              />
            </div>

          </div>
        </div>
      )}

      {state.checkout && <Payment />}

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
