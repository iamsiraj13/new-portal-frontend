import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "./dashboard/layout/MainLayout";
import AdminIndex from "./dashboard/pages/AdminIndex";
import News from "./dashboard/pages/News";
import Addwriter from "./dashboard/pages/Addwriter";
import Profile from "./dashboard/pages/Profile";
import Writers from "./dashboard/pages/Writers";
import Login from "./dashboard/pages/Login";
import AdminRoute from "./middleware/AdminRoute";
import ProtectRole from "./middleware/ProtectRole";
import Unable from "./dashboard/pages/Unable";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route element={<MainLayout />}>
            <Route index element={<Navigate to="/dashboard/admin" />} />
            <Route path="unable-access" element={<Unable />} />
            <Route
              path="admin"
              element={
                <ProtectRole role="admin">
                  <AdminIndex />
                </ProtectRole>
              }
            />
            <Route
              path="addwriter"
              element={
                <ProtectRole role="admin">
                  <Addwriter />
                </ProtectRole>
              }
            />
            <Route
              path="writers"
              element={
                <ProtectRole role="admin">
                  <Writers />
                </ProtectRole>
              }
            />
            <Route path="news" element={<News />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
