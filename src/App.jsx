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
import WriterIndex from "./dashboard/pages/WriterIndex";
import CreateNews from "./dashboard/pages/CreateNews";
import { useContext } from "react"; // Assuming storeContext is already set up
import storeContext from "./contex/storeContext"; // Path to storeContext

const App = () => {
  const { store } = useContext(storeContext); // Getting userInfo from the store

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        {/* AdminRoute checks if the user is logged in */}
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route element={<MainLayout />}>
            <Route
              index
              element={
                store?.userInfo?.role === "admin" ? (
                  <Navigate to="/dashboard/admin" />
                ) : (
                  <Navigate to="/dashboard/writer" />
                )
              }
            />
            <Route path="unable-access" element={<Unable />} />

            {/* Routes for writers */}
            <Route
              path="writer"
              element={
                <ProtectRole role="writer">
                  <WriterIndex />
                </ProtectRole>
              }
            />
            <Route
              path="create-news"
              element={
                <ProtectRole role="writer">
                  <CreateNews />
                </ProtectRole>
              }
            />

            {/* Routes for admins */}
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
            {/* Shared routes */}
            <Route path="news" element={<News />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
