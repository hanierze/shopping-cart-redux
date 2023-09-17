//Styles
import { Link } from "react-router-dom";
import styles from "./payment.module.scss";


const Payment = () => {

  return(
    <div className={styles.complete}>
    <h3>checked out successfully</h3>
    <Link to="/products">buy more ...</Link>
  </div>
  )



}

export default Payment;