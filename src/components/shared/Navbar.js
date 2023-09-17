import React from "react";
import { Link } from "react-router-dom";

//icon
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logoutIcon from "../../assets/icons/logout.svg";
import menuIcon from "../../assets/icons/menu-icon.svg";

//Styles
import styles from "./Navbar.module.scss";

//redux
import { useSelector, useDispatch } from "react-redux";
import Modal from "./CustomModal";
import { clearUser, userData } from "../../helper/storage";
import { logout, selectUser } from "../../redux/auth/userSlice";
import {
  selectModal,
  showModal,
} from "../../redux/modalDisplay/modalDisplaySlice";
import ConfirmationModal from "../confirmation-modal/ConfirmationModal";
import Dropdown from "../dropdown/dropdown";
import { notify } from "../toast";

const Navbar = () => {
  const state = useSelector((state) => state.cartState);
  const user = useSelector(selectUser) || userData();

  const dispatch = useDispatch();
  const modal = useSelector(selectModal);

  const options = [
    <Link to="/home" className="w-full block">
      Home
    </Link>,
    <Link to="/products" className="w-full block">
      Products
    </Link>,
    <Link to="/about-us" className="w-full block">
      About
    </Link>,
  ];

  const displayModal = () => {
    dispatch(showModal());
  };

  const logOut = () => {
    dispatch(logout());
    notify("You logout successfully", "success");
    clearUser();
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.linkContainer}>
          {options.map((link , i) => {
            return (
              <p key={i} className="font-bold  m-16 relative w-max two ">
                {link}
              </p>
            );
          })}
        </div>
        <div className={styles.menuIcon}>
          <Dropdown options={options} isIcon={true} title={menuIcon} />
        </div>

        <div className="flex gap-x-4	">
          {state.itemCounter !== 0 && (
            <div className={styles.iconContainer}>
              <Link to="/cart">
                <FontAwesomeIcon icon={faCartShopping} />
              </Link>
              <span> {state.itemCounter} </span>
            </div>
          )}

          <div className={styles.register}>
            {user ? (
              <h3>
                {user?.user?.username ?? user.username} /
                <ConfirmationModal
                  isIcon={true}
                  question="Are you sure to exit?"
                  title={logoutIcon}
                  func={logOut}
                />
              </h3>
            ) : (
              <span onClick={displayModal}>Login / SignUp</span>
            )}
          </div>
        </div>
      </div>

      {modal && <Modal />}
    </div>
  );
};

export default Navbar;
