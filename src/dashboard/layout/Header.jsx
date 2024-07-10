import profile from "../../assets/profile.jpg";
const Header = () => {
  return (
    <div className="pl-4 pr-4 fixed w-[calc(100vw-250px)] top-4 z-50">
      <div className="w-full rounded h-[70px] flex justify-between items-center p-4 bg-white">
        <input
          type="text"
          placeholder="Search"
          className="px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10"
        />
        <div className="mr-4">
          <div className="flex gap-x-3">
            <div className="flex flex-col justify-center items-end">
              <span className="font-bold text-[16px] leading-none">
                Sirajul Islam
              </span>
              <span className="text-[14px] font-medium">Admin</span>
            </div>
            <img
              src={profile}
              alt=""
              className="w-[45px] h-[45px] border-2 border-green-600 rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
