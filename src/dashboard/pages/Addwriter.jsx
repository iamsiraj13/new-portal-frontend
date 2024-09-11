import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { base_url } from "../../config/config";
import storeContext from "../../contex/storeContext";
import toast from "react-hot-toast";

const Addwriter = () => {
  const { store } = useContext(storeContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    category: "",
  });

  const inputHandler = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios.post(`${base_url}/news/writer/add`, state, {
        headers: {
          Authorization: `Bearer ${store.token}`,
        },
      });
      setLoading(false);
      toast.success(data.message);
      navigate("/dashboard/writers");
    } catch (error) {
      setLoading(false);
      toast.error(error.response.data.message);
    }
  };
  return (
    <div className="bg-white rounded-md">
      <div className="flex justify-between p-4 items-center">
        <h2 className="text-xl font-medium ">Writers</h2>

        <Link
          to="/dashboard/writers"
          className="px-3 py-[6px] border border-transparent bg-gray-600 rounded-sm text-white hover:bg-white hover:border hover:border-gray-600 hover:text-gray-600"
        >
          View Writers
        </Link>
      </div>
      <div className="p-4">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-x-8 mb-4">
            <div className="flex flex-col gap-y-2 ">
              <label
                htmlFor="name"
                className="text-md font-medium text-gray-600"
              >
                Name
              </label>
              <input
                type="text"
                placeholder="Name"
                value={state.name}
                onChange={inputHandler}
                name="name"
                id="name"
                required
                className="px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10"
              />
            </div>
            <div className="flex flex-col gap-y-2 ">
              <label
                htmlFor="category"
                className="text-md font-medium text-gray-600"
              >
                Category
              </label>
              <select
                id="category"
                type="text"
                value={state.category}
                onChange={inputHandler}
                name="category"
                placeholder="Name"
                className="px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10"
              >
                <option>--Select Category--</option>
                <option value="travel">Travel</option>
                <option value="eductaion">Education</option>
                <option value="health">Health</option>
                <option value="international">International</option>
                <option value="sports">Sports</option>
                <option value="Technology">Technology</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-8 mb-4">
            <div className="flex flex-col gap-y-2 ">
              <label
                htmlFor="email"
                className="text-md font-medium text-gray-600"
              >
                Email
              </label>
              <input
                type="text"
                placeholder="E-mail"
                id="email"
                value={state.email}
                onChange={inputHandler}
                name="email"
                className="px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10"
              />
            </div>
            <div className="flex flex-col gap-y-2 ">
              <label
                htmlFor="password"
                className="text-md font-medium text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={state.password}
                onChange={inputHandler}
                name="password"
                placeholder="Password"
                className="px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10"
              />
            </div>
          </div>
          <button
            className="px-3 py-[6px] border border-transparent bg-gray-600 rounded-sm text-white hover:bg-white hover:border hover:border-gray-600 hover:text-gray-600"
            disabled={loading}
          >
            {loading ? "Loading..." : "Add Writer"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addwriter;
