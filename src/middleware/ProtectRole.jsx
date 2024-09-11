/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import storeContext from "../contex/storeContext";

const ProtectRole = ({ role, children }) => {
  const { store } = useContext(storeContext);

  if (store?.userInfo?.role === role) {
    return children;
  } else {
    return <Navigate to="/dashboard/unable-access" />;
  }
};

export default ProtectRole;
