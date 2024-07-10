import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

const MainLayout = () => {
  return (
    <div className="min-w-screen min-h-screen bg-slate-200">
      <Sidebar />
      <div className="ml-[250px] w-[calc(100vw-250px)]">
        <Header />
      </div>
      <div className="p-4">
        <div className="pt-[85px] ml-[250px]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
