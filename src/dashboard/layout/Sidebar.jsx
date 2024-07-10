import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import {
  CircleUserRound,
  LayoutGrid,
  LogOut,
  Newspaper,
  UserRoundPlus,
  UsersRound,
} from "lucide-react";

const Sidebar = () => {
  const { pathname } = useLocation();
  return (
    <div className="w-[250px] h-screen fixed top-0 left-0 bg-white">
      <div className="h-[70px]  flex justify-center items-center">
        <Link to="/dashboard">
          <img
            className="w-[190px] h-[90px] object-contain"
            src={logo}
            alt=" logo"
          />
        </Link>
      </div>
      <ul className="px-3 flex flex-col gap-y-1 font-medium">
        <li>
          <Link
            to="/dashboard/admin"
            className={` ${
              pathname === "/dashboard/admin"
                ? "bg-gray-600 text-white"
                : "text-gray-600"
            } flex gap-2 px-3 py-2 items-center text-gray-600 hover:bg-gray-600 hover:text-white rounded-lg`}
          >
            <span>
              <LayoutGrid size={16} />
            </span>
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/news"
            className={` ${
              pathname === "/dashboard/news"
                ? "bg-gray-600 text-white"
                : "text-gray-600"
            } flex gap-2 px-3 py-2 items-center text-gray-600 hover:bg-gray-600 hover:text-white rounded-lg`}
          >
            <span>
              <Newspaper size={16} />
            </span>
            <span>News</span>
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/addwriter"
            className={` ${
              pathname === "/dashboard/addwriter"
                ? "bg-gray-600 text-white"
                : "text-gray-600"
            } flex gap-2 px-3 py-2 items-center text-gray-600 hover:bg-gray-600 hover:text-white rounded-lg`}
          >
            <span>
              <UserRoundPlus size={16} />
            </span>
            <span>Add Writer</span>
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/writers"
            className={` ${
              pathname === "/dashboard/writers"
                ? "bg-gray-600 text-white"
                : "text-gray-600"
            } flex gap-2 px-3 py-2 items-center text-gray-600 hover:bg-gray-600 hover:text-white rounded-lg`}
          >
            <span>
              <UsersRound size={16} />
            </span>
            <span>Writers</span>
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/profile"
            className={` ${
              pathname === "/dashboard/profile"
                ? "bg-gray-600 text-white"
                : "text-gray-600"
            } flex gap-2 px-3 py-2 items-center text-gray-600 hover:bg-gray-600 hover:text-white rounded-lg`}
          >
            <span>
              <CircleUserRound size={16} />
            </span>
            <span>Profile</span>
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/logout"
            className={` ${
              pathname === "/dashboard/logout"
                ? "bg-gray-600 text-white"
                : "text-gray-600"
            } flex gap-2 px-3 py-2 items-center text-gray-600 hover:bg-gray-600 hover:text-white rounded-lg`}
          >
            <span>
              <LogOut size={16} />
            </span>
            <span>Logout</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
