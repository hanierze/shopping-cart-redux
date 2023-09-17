import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import axios from "axios";
import { useDispatch } from 'react-redux';


//Toast
import { notify } from "../toast";

//Styles
import styles from "./Login.module.scss";
import { storeUser } from "../../helper/storage";
import { login } from "../../redux/auth/userSlice";
import { hideModal } from "../../redux/modalDisplay/modalDisplaySlice";

const Login = () => {

  const dispatch = useDispatch();

  const LoginSchema = Yup.object().shape({
    password: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values, { resetForm }) => {
      axios.post(`${process.env.REACT_APP_API_URL}/auth/local`, {
        identifier: values.email,
        password: values.password
      })
      .then((response) => {
        if(response.data.jwt)  {
          storeUser(response.data)
          dispatch(login(response.data))
          dispatch(hideModal())
          resetForm()
        }
        notify("You login successfully", "success");
      }).catch(error => {
        notify(error.message,"error" )
    });


      // if (formik.errors) {
      //   notify("You login successfully", "success");
      // } else {
      //   notify("Invalid data!", "error");
      // }
    },
    validationSchema: LoginSchema,
  });

  return (
    <div className={styles.container}>
      <form onSubmit={formik.handleSubmit}>
        <div className={styles.formContainer}>
          {/* <h3>Login Form</h3> */}

          <div className={styles.inputContainer}>
            <label htmlFor="email">email</label>
            <input
              className={
                formik.touched.email && formik.errors.email
                  ? styles.errorLoginInput
                  : styles.mainLoginInput
              }
              type="text"
              id="email"
              {...formik.getFieldProps("email")}
            />
            <i className="fa fa-envelope fa-fw" aria-hidden="true"></i>
            {formik.touched.email && formik.errors.email ? (
              <span className={styles.error}>{formik.errors.email}</span>
            ) : null}
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="password">password</label>
            <input
              className={
                formik.touched.password && formik.errors.password
                  ? styles.errorLoginInput
                  : styles.mainLoginInput
              }
              type="password"
              id="password"
              {...formik.getFieldProps("password")}
            />
            <i className="fa fa-lock  fa-fw" aria-hidden="true"></i>
            {formik.touched.password && formik.errors.password ? (
              <span className={styles.error}>{formik.errors.password}</span>
            ) : null}
          </div>
          <div className={styles.submitButton}>
            <button type="submit">Login</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
