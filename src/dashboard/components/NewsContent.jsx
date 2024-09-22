import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Eye, SquarePen, Trash } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import storeContext from "../../contex/storeContext";
import { base_url } from "../../config/config";
import axios from "axios";
import toast from "react-hot-toast";
import moment from "moment";
import { convert } from "html-to-text";
const NewsContent = () => {
  const { store } = useContext(storeContext);

  const [news, setNews] = useState([]);
  const [loader, setLoader] = useState(false);
  const [allData, setAllData] = useState([]);

  const [perPage, setPerPage] = useState(5);
  const [pages, setPages] = useState(0);
  const [page, setPage] = useState(1);

  const get_news = async () => {
    try {
      setLoader(true);
      const { data } = await axios.get(`${base_url}/news`, {
        headers: {
          Authorization: `Bearer ${store.token}`,
        },
      });
      setLoader(false);
      setAllData(data.news);
      setNews(data.news);
    } catch (error) {
      setLoader(false);
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    get_news();
  }, []);

  useEffect(() => {
    if (news.length > 0) {
      const calculatePage = Math.ceil(news.length / perPage);
      setPages(calculatePage);
    }
  }, [news, perPage]);

  // handle search
  const handleSearch = (e) => {
    const search = e.target.value;
    const filterData = allData.filter(
      (item) => item.title.toLowerCase().indexOf(search.toLowerCase()) > -1
    );
    setNews(filterData);
    setPage(1);
  };
  return (
    <div>
      <div className="px-4 py-3 flex gap-x-3">
        <select className="px-3 py-2 rounded-sm outline-0 border border-gray-300 focus:border-green-500 h-10">
          <option value="">--Selety Type--</option>
          <option value="pendin">Pending</option>
          <option value="active">Active</option>
          <option value="Deactive">Deactive</option>
        </select>
        <input
          type="text"
          onClick={handleSearch}
          className="px-3 py-2 rounded-sm outline-0 border border-gray-300 focus:border-green-500 h-10"
          placeholder="Search News"
        />
      </div>

      {/* table  */}

      <div className="relative overflow-x-auto p-4">
        <table className="w-full text-sm text-left text-gray-600">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100">
            <tr>
              <th className="px-7 py-3">No</th>
              <th className="px-7 py-3">title</th>
              <th className="px-7 py-3">image</th>
              <th className="px-7 py-3">category</th>
              <th className="px-7 py-3">description</th>
              <th className="px-7 py-3">date</th>
              <th className="px-7 py-3">status</th>
              <th className="px-7 py-3">action</th>
            </tr>
          </thead>
          <tbody>
            {news.length > 0 &&
              news
                .slice((page - 1) * perPage, page * perPage)
                .map((item, index) => (
                  <>
                    <tr className="bg-white  border-b" key={index}>
                      <td className="px-7 py-3">{index + 1}</td>
                      <td className="px-7 py-3 font-medium">{item?.title}</td>
                      <td className="px-7 py-3 w-[40px] h-[40px]">
                        <img src={item?.image} alt="" />
                      </td>
                      <td className="px-7 py-3">{item?.category}</td>
                      <td className="px-7 py-3">
                        {convert(item?.description).slice(0, 15)}..
                      </td>
                      <td className="px-7 py-3">
                        {moment(item?.date).format("LL")}
                      </td>

                      <td className="px-7 py-3">
                        <span className="px-2 py-[2px] bg-green-100 text-green-800 rounded-lg text-xs cursor-pointer">
                          {item?.status}
                        </span>
                      </td>
                      <td className="px-7 py-3">
                        <div className="flex justify-start gap-x-2 text-white items-center">
                          <Link className="p-[6px] bg-green-500 rounded hover:shadow-sm hover:shadow-green-500">
                            <Eye size={16} />
                          </Link>
                          <Link className="p-[6px] bg-orange-500 rounded hover:shadow-sm hover:orange-green-500">
                            <SquarePen size={16} />
                          </Link>
                          <div className="p-[6px] bg-red-500 rounded hover:shadow-sm hover:shadow-red-500">
                            <Trash size={16} />
                          </div>
                        </div>
                      </td>
                    </tr>
                  </>
                ))}
          </tbody>
        </table>
      </div>

      {/* pagination  */}
      <div className="flex items-center justify-end px-10 gap-x-3 text-gray-600">
        <div className="flex gap-x-3 justify-center items-center">
          <p className="px-4 py-3 font-semibold text-sm ">News Per Page</p>
          <select
            className="px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10"
            value={perPage}
            onChange={(e) => setPerPage(Number(e.target.value))}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>
        </div>
        <p className="px-6 py-3 font-semibold text-sm">
          {(page - 1) * perPage + 1}/{news.length} - of {pages}
        </p>
        <div className="flex items-center gap-x-3">
          <span
            className="cursor-pointer"
            onClick={() => {
              if (page > 1) setPage(page - 1);
            }}
          >
            <ChevronLeft />
          </span>
          <span
            className="cursor-pointer"
            onClick={() => {
              if (page < pages) setPage(page + 1);
            }}
          >
            <ChevronRight />
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewsContent;
