import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import storeContext from "../contex/storeContext";

const AdminRoute = () => {
  const { store } = useContext(storeContext);

  // Check if userInfo exists and user is logged in
  if (store?.userInfo) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
};

export default AdminRoute;
