/* eslint-disable no-unused-vars */

import { CloudUpload, X } from "lucide-react";

/* eslint-disable react/prop-types */
const Gallery = ({ setShow, images }) => {
  return (
    <div className="fixed w-screen h-screen left-0 top-0 z-[9999]">
      <div className="w-full h-full relative">
        <div className="bg-gray-400 opacity-80 w-full h-full absolute top-0 left-0 z-[998]">
          <div className="absolute bg-white w-[50%] p-3 rounded-sm h-[85vh] overflow-y-auto left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]">
            <div className="pb-3 flex justify-between items-center">
              <h2>Galery</h2>
              <div className="cursor-pointer" onClick={() => setShow(false)}>
                <X />
              </div>
            </div>
            <div className="mb-6">
              <label
                htmlFor="images"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
