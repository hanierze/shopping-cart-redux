//styles
import styles from "./CustomModal.module.scss";

import React, { useState } from "react";

import SignUp from "../register/SignUp";
import Login from "../register/Login";
import { hideModal } from "../../redux/modalDisplay/modalDisplaySlice";
import { useDispatch } from "react-redux";

const Modal = () => {

  const forms = [
    { name: "Login", id: 1 },
    { name: "Sign up", id: 2 },
  ];

  const dispatch = useDispatch()

  const closeModal = () => {
    dispatch(hideModal())
  };

  const [idSelectedItem, setIdSelectedItem] = useState(1)

  const selectItem = (id) => {
    setIdSelectedItem(id)
  }

  return (
    <div  className={styles.modal}>
      <div>
          <span className={styles.close} onClick={closeModal}>
            &times;
          </span>

        <div className={styles.tabContainer}>
          <ul >
            {forms.map((form) => {
              return <li
                key={form.id}
                className={` mr-2 ${idSelectedItem === form.id && styles.active}`}
                onClick={() => selectItem(form.id)}
              >
                <button className={`${idSelectedItem !== form.id && 'hover:border-b-2 hover:text-gray-600'}`} >{form.name}</button>
              </li>;
            })}
          </ul>
        </div>

        {idSelectedItem === 2 ? <SignUp /> : <Login />}
      </div>
    </div>
  );
};

export default Modal;
