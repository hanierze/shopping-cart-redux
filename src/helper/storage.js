import { Navigate } from "react-router-dom";
import { notify } from "../components/toast";

export const storeUser = (data) => {

  localStorage.setItem(
    "user",
    JSON.stringify({
      user: {username : data.user.username},
      jwt: data.jwt,
    })
  );
};

export const clearUser = () => {
  localStorage.clear("user");
};

export const userData = () => {
  const stringifirdUser = localStorage.getItem("user") || '""';
  return JSON.parse(stringifirdUser || {});
};

export const Protector = ({ children }) => {
  const { jwt } = userData();
  if (!!jwt) {
    return children;
  } else {
    notify("Please login first", "error");
    return <Navigate to="/cart" />;
  }
};
