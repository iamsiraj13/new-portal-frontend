import { Eye } from "lucide-react";
import thumb from "../../assets/profile.jpg";
import { Link } from "react-router-dom";

const AdminIndex = () => {
  return (
    <div className="mt-3">
      <div className="grid grid-cols-5 gap-x-4">
        <div className="w-full p-8 justify-center flex flex-col rounded-none items-center gap-y-2 bg-white text-gray-600">
          <span className="text-xl font-bold">50</span>
          <span className="text-md">Total News</span>
        </div>
        <div className="w-full p-8 justify-center flex flex-col rounded-none items-center gap-y-2 bg-white text-gray-600">
          <span className="text-xl font-bold">0</span>
          <span className="text-md">Pendin News</span>
        </div>
        <div className="w-full p-8 justify-center flex flex-col rounded-none items-center gap-y-2 bg-white text-gray-600">
          <span className="text-xl font-bold">20</span>
          <span className="text-md">Active News</span>
        </div>
        <div className="w-full p-8 justify-center flex flex-col rounded-none items-center gap-y-2 bg-white text-gray-600">
          <span className="text-xl font-bold">0</span>
          <span className="text-md">Deactive News</span>
        </div>
        <div className="w-full p-8 justify-center flex flex-col rounded-none items-center gap-y-2 bg-white text-gray-600">
          <span className="text-xl font-bold">7</span>
          <span className="text-md">Writers News</span>
        </div>
      </div>

      {/* recent news  */}
      <div className="bg-white p-4 mt-5">
        <div className="flex justify-between items-center pb-4 px-4">
          <h2 className="text-lg font-medium">Recent News</h2>
          <Link>View All</Link>
        </div>
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
              {[1, 2, 3, 4, 5, 6, 7]?.map((_, index) => (
                <>
                  <tr className="bg-white  border-b" key={index}>
                    <td className="px-7 py-3">{index + 1}</td>
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
                      </div>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminIndex;
