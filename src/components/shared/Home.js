import React from "react";

//Styles
import styles from "./Home.module.scss";
import woman from "../../assets/images/shoppingWoman.jpg";
import { Link } from "react-router-dom";
import ConfirmationModal from "../confirmation-modal/ConfirmationModal";

const Home = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.userBox}>
        <img src={woman} alt="woman" />
      </div>

      <div className={styles.textContainer}>
        <h1> Shopping Site</h1>
        <p>
          Discover elegance, style, and comfort like never before at Zanama
          Boutique. Step into a world where fashion meets passion, where every
          outfit tells a unique story. We're more than just a store
        </p>
        <button className={styles.btn}>
          <Link to="/products">Show Product</Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
