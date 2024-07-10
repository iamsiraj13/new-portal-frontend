import { Navigate, Outlet } from "react-router-dom";

const AdminRoute = () => {
  const userInfo = {
    name: "Sirajul Islam",
    role: "admin",
  };
  if (userInfo) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
};

export default AdminRoute;
