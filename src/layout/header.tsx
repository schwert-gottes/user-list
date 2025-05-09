import { Notification, Search } from "@/icons";

const Header = () => {
  return (
    <div className="flex justify-center items-center w-full fixed top-0 z-50 bg-white">
      <div className="max-w-[1440px] w-full flex justify-between items-center gap-4 p-4">
        <div className="font-medium text-[#1F2026]">
          <span className="text-[#767A85] mr-1">Schedule {`>`}</span> Users List
        </div>
        <div className="flex items-center gap-4">
          <div className="cursor-pointer p-2 rounded-full hover:bg-gray-100 transition-all duration-300">
            <Search />
          </div>
          <div className="cursor-pointer p-2 rounded-full hover:bg-gray-100 transition-all duration-300">
            <Notification />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
