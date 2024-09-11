import { Eye } from "lucide-react";
import { Link } from "react-router-dom";
import thumb from "../../assets/profile.jpg";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { base_url } from "../../config/config";
import storeContext from "../../contex/storeContext";

const Writers = () => {
  const { store } = useContext(storeContext);
  const [loading, setLoading] = useState(false);
  const [writers, setWriter] = useState([]);

  const getWriters = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${base_url}/news/writers`, {
        headers: {
          Authorization: `Bearer ${store.token}`,
        },
      });
      setWriter(data.writers);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    getWriters();
  }, []);

  return (
    <div className="bg-white rounded-md">
      <div className="flex justify-between p-4 items-center">
        <h2 className="text-xl font-medium ">Writers</h2>

        <Link
          to="/dashboard/addwriter"
          className="px-3 py-[6px] border border-transparent bg-gray-600 rounded-sm text-white hover:bg-white hover:border hover:border-gray-600 hover:text-gray-600"
        >
          Add Writer
        </Link>
      </div>

      <div className="relative overflow-x-auto p-4">
        <table className="w-full text-sm text-left text-gray-600">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100">
            <tr>
              <th className="px-7 py-3">No</th>
              <th className="px-7 py-3">Name</th>
              <th className="px-7 py-3">Category</th>
              <th className="px-7 py-3">Roll</th>
              <th className="px-7 py-3">Image</th>
              <th className="px-7 py-3">E-mail</th>
              <th className="px-7 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {writers?.map((writer, index) => (
              <tr className="bg-white  border-b" key={writer._id}>
                <td className="px-7 py-3">{index + 1}</td>
                <td className="px-7 py-3 font-medium">{writer?.name}</td>
                <td className="px-7 py-3 ">{writer?.category}</td>
                <td className="px-7 py-3">{writer?.role}</td>
                <td className="px-7 py-3 w-[40px] h-[40px] rounded-full">
                  <img
                    src={thumb}
                    alt="user"
                    className="w-[40px] h-[40px] rounded-full"
                  />
                </td>
                <td className="px-7 py-3">{writer?.email}</td>

                <td className="px-7 py-3">
                  <div className="flex justify-start gap-x-2 text-white items-center">
                    <Link
                      to={`${writer}/details/${writer._id}`}
                      className="p-[6px] bg-green-500 rounded hover:shadow-sm hover:shadow-green-500"
                    >
                      <Eye size={16} />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Writers;
