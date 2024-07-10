/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";

const ProtectRole = ({ role, children }) => {
  const userInfo = {
    name: "Sirajul Islam",
    role: "admin",
  };
  if (userInfo.role === role) {
    return children;
  } else {
    return <Navigate to="/dashboard/unable-access" />;
  }
};

export default ProtectRole;
