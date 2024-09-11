import { Image } from "lucide-react";

const Profile = () => {
  return (
    <div className="w-full grid grid-cols-2 gap-x-6 mt-5">
      <div className="bg-white p-5 rounded flex justify-center items-center gap-x-4">
        <div>
          <label
            htmlFor="img"
            className={`w-[150px] h-[150px] flex rounded text-gray-500 gap-2 justify-center items-center cursor-pointer border border-dashed border-gray-500`}
          >
            <div className="flex justify-center items-center flex-col gap-y-2">
              <span className="text-2xl">
                <Image />
              </span>
              <span>Select Image</span>
            </div>
          </label>
          <input type="file" id="img" className="hidden" />
        </div>
        <div className="text-gray-500 flex flex-col gap-y-1 justify-center items-start">
          <span>Name : Sirajul Islam</span>
          <span>Email : sirajul.dev@gmail.com</span>
          <span>Category : Education</span>
        </div>
      </div>
      <div className="bg-white px-5 py-4 text-gray-500">
        <h2 className="pb-3  font-bold text-2xl">Change Password</h2>
        <form>
          <div className="flex flex-col gap-y-2 mb-3">
            <label
              htmlFor="password"
              className="text-md font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              id="password"
              className="px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10"
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <label
              htmlFor="cpassword"
              className="text-md font-medium text-gray-600"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="cpassword"
              placeholder="Confirm Password"
              className="px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10"
            />
          </div>
          <div className="mt-4">
            <button className="px-3 py-[6px] bg-gray-600 border border-transparent text-white rounded-sm hover:bg-white hover:border-gray-600 hover:text-gray-600">
              Change Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
