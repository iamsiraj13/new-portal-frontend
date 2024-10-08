import { Link } from "react-router-dom";
import NewsContent from "../components/NewsContent";
import { useContext } from "react";
import storeContext from "../../contex/storeContext";

const News = () => {
  const { store } = useContext(storeContext);

  return (
    <div className="bg-white rounded-md">
      <div className="flex justify-between p-4 items-center">
        <h2 className="text-xl font-medium ">News</h2>

        {store?.userInfo && store?.userInfo?.role !== "admin" && (
          <Link
            to="/dashboard/create-news"
            className="px-3 py-[6px] border border-transparent bg-gray-600 rounded-sm text-white hover:bg-white hover:border hover:border-gray-600 hover:text-gray-600"
          >
            Create News
          </Link>
        )}
      </div>
      <NewsContent />
    </div>
  );
};

export default News;
