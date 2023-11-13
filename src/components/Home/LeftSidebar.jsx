import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";
import home from "../../assets/home.svg";
import group from "../../assets/group.svg";
import avatar from "../../assets/avatar.png";

function LeftSidebar() {
  return (
    <div className="flex-col justify-between text-white flex flex-0 w-[17rem] p-5 border-r border-gray-700">
      <div className="w-full">
        <div>
          <img src={logo} alt="logo" className="h-4 w-mobile-view-logo" />
        </div>
        <ul className="mt-7 flex w-full flex-col gap-4">
          <li className="cursor-pointer ">
            <Link
              to="/homefeed"
              className="flex items-center gap-4 font-px-regular"
            >
              <img src={home} alt="home" className="h-6 w-6" />
              <p>Home</p>
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link
              to="/userprofile"
              className="flex items-center gap-4 font-px-regular"
            >
              <img src={group} alt="profile" className="h-5 w-6" />
              <p>Profile</p>
            </Link>
          </li>
        </ul>
        <button className="py-[15px] mt-10 px-[93px] justify-center align-center flex gap-[10px] rounded-[9999px] bg-twitter-blue">
          <span className="text-center text-base font-bold">Post</span>
        </button>
      </div>
      <div className=" ">
        <div className="flex gap-2 items-center ">
          <img src={avatar} alt="user" className="w-9 h-9 flex-shrink-0" />
          <div className="flex flex-col">
            <p className="">md_anas_sabah</p>
            <p className=" text-sm text-gray-500 ">@mdanassabah</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSidebar;
