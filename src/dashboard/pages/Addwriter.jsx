import { Link } from "react-router-dom";

const Addwriter = () => {
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
    </div>
  );
};

export default Addwriter;
