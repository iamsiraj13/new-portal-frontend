import { useContext, useState } from "react";
import logo from "../../assets/logo.png";
import { base_url } from "../../config/config";

import toast from "react-hot-toast";
import axios from "axios";
import storeContext from "../../contex/storeContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loader, setLoader] = useState();
  const { dispatch } = useContext(storeContext);
  const navigate = useNavigate();

  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoader(true);
      const { data } = await axios.post(`${base_url}/login`, state);

      setLoader(false);
      localStorage.setItem("newsToken", data.token);
      toast.success(data.message);
      dispatch({
        type: "login_success",
        payload: {
          token: data.token,
        },
      });
      navigate("/dashboard");
    } catch (error) {
      setLoader(false);
      toast.error(error.response.data.message);
    }
  };
  return (
    <div className="min-w-screen min-h-screen bg-slate-200 flex justify-center items-center">
      <div className="w-[340px] text-gray-600 shadow-md">
        <div className="bg-white  h-wull w-full px-7 py-8 rounded-md">
          <div className="w-full flex justify-center items-center   h-28">
            <img src={logo} alt="login" className="w-[200px]" />
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-y-2 mb-3">
              <label
                htmlFor="email"
                className="text-md font-medium text-gray-600"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                required
                onChange={handleInput}
                placeholder="E-mail"
                name="email"
                value={state.email}
                className="px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label
                htmlFor="password"
                className="text-md font-medium text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                onChange={handleInput}
                required
                name="password"
                value={state.password}
                className="px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10"
              />
            </div>
            <button
              type="submit"
              disabled={loader}
              className="bg-gray-600 text-white  text-sm w-full mt-4 rounded-md py-2 font-medium hover:bg-slate-300 hover:text-gray-600"
            >
              {loader ? "Loading" : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
