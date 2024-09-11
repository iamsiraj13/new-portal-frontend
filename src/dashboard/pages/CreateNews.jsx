import { CloudUpload } from "lucide-react";
import { Link } from "react-router-dom";
import JoditEditor from "jodit-react";
import { useState } from "react";
import Gallery from "../components/Gallery";

const CreateNews = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="bg-white rounded-md">
      <div className="flex justify-between p-4 items-center">
        <h2 className="text-xl font-medium ">Create News</h2>

        <Link
          to="/dashboard/news"
          className="px-3 py-[6px] border border-transparent bg-gray-600 rounded-sm text-white hover:bg-white hover:border hover:border-gray-600 hover:text-gray-600"
        >
          News
        </Link>
      </div>

      <div className="p-4">
        <form>
          <div className="flex flex-col gap-y-2 mb-6">
            <label
              htmlFor="title"
              className="text-md font-medium text-gray-600"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              placeholder="Password"
              className="px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="img"
              className={`w-full h-[180px] flex rounded text-gray-500 gap-2 justify-center items-center cursor-pointer border border-dashed border-gray-500`}
            >
              <div className="flex justify-center items-center flex-col gap-y-2">
                <span className="text-2xl">
                  <CloudUpload />
                </span>
                <span>Select Image</span>
              </div>
            </label>
            <input type="file" id="img" className="hidden" />
          </div>
          <div className="flex flex-col gap-y-2 mb-6">
            <div className="flex justify-start items-center gap-x-2">
              <h2>Description</h2>
              <div onClick={() => setShow(true)}>
                <span className="text-2xl cursor-pointer">
                  <CloudUpload size={16} />
                </span>
              </div>
            </div>
            <div>
              <JoditEditor />
            </div>
          </div>
          <div className="mt-4">
            <button className="px-3 py-[6px] bg-gray-600 rounded-sm text-white border border-transparent hover:bg-white hover:border-gray-600 hover:text-gray-600">
              Add News
            </button>
          </div>
        </form>
        <div className="">
          {show === true && <Gallery setShow={setShow} images={[]} />}
        </div>
      </div>
    </div>
  );
};

export default CreateNews;
