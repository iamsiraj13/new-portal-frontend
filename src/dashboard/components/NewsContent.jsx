import { Link } from "react-router-dom";
import thumb from "../../assets/profile.jpg";
import { Eye, SquarePen, Trash } from "lucide-react";
const NewsContent = () => {
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
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]?.map((_, index) => (
              <>
                <tr className="bg-white  border-b" key={index}>
                  <td className="px-7 py-3">1</td>
                  <td className="px-7 py-3 font-medium">
                    India goes against bangladesh
                  </td>
                  <td className="px-7 py-3 w-[40px] h-[40px]">
                    <img src={thumb} alt="" />
                  </td>
                  <td className="px-7 py-3">travel</td>
                  <td className="px-7 py-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nesciunt, qui!
                  </td>
                  <td className="px-7 py-3">11/07/24</td>
                  <td className="px-7 py-3">
                    <span className="px-2 py-[2px] bg-green-100 text-green-800 rounded-lg text-xs cursor-pointer">
                      active
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
    </div>
  );
};

export default NewsContent;
