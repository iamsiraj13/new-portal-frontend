import { CloudUpload } from "lucide-react";
import { Link } from "react-router-dom";
import JoditEditor from "jodit-react";
import { useContext, useRef, useState } from "react";
import Gallery from "../components/Gallery";
import axios from "axios";
import { base_url } from "../../config/config";
import storeContext from "../../contex/storeContext";
import toast from "react-hot-toast";

const CreateNews = () => {
  const [show, setShow] = useState(false);
  const { store } = useContext(storeContext);

  const editor = useRef(null);

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [img, setImg] = useState("");
  const [description, setDescription] = useState("");

  const [loader, setLoader] = useState(false);

  const imageHandle = (e) => {
    const { files } = e.target;
    if (files.length > 0) {
      setImg(URL.createObjectURL(files[0]));
      setImage(files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", image);

    try {
      setLoader(true);

      const { data } = await axios.post(`${base_url}/news/add`, formData, {
        headers: {
          Authorization: `Bearer ${store.token}`,
        },
      });

      setLoader(false);
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
      setLoader(false);
    }
  };

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
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-y-2 mb-6">
            <label
              htmlFor="title"
              className="text-md font-medium text-gray-600"
            >
              Title
            </label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              required
              id="title"
              placeholder="News Title"
              className="px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="img"
              className={`w-full min-h-[180px] max-h-max flex rounded text-gray-500 gap-2 justify-center items-center cursor-pointer border border-dashed border-gray-500 overflow-hidden`}
            >
              {img ? (
                <img
                  src={img}
                  className="w-full max-h-[600px] h-full  object-cover object-top"
                />
              ) : (
                <div className="flex justify-center items-center flex-col gap-y-2">
                  <span className="text-2xl">
                    <CloudUpload />
                  </span>
                  <span>Select Image</span>
                </div>
              )}
            </label>
            <input
              type="file"
              id="img"
              className="hidden"
              onChange={imageHandle}
              required
            />
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
              <JoditEditor
                ref={editor}
                value={description}
                tabIndex={1}
                onBlur={(value) => setDescription(value)}
                onChange={() => {}}
              />
            </div>
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="px-3 py-[6px] bg-gray-600 rounded-sm text-white border border-transparent hover:bg-white hover:border-gray-600 hover:text-gray-600"
              disabled={loader}
            >
              {loader ? "Loading..." : "Add News"}
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
