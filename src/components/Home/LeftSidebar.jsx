import { useState } from "react";
import { NavLink } from "react-router-dom";

import home from "../../assets/home.svg";
import option from "../../assets/option.svg";
import group from "../../assets/group.svg";

import logo from "../../assets/logo.png";
import avatar from "../../assets/avatar.png";
import Modal from "../PostModal";
import { useAuth } from "../../context/AuthContext";

function LeftSidebar() {
  const [showOption, setShowOption] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { logout } = useAuth();

  const handleOption = () => {
    setShowOption(!showOption);
  };
  const handlePostButtonClick = () => {
    console.log("clicked post");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      className={`flex-col justify-between text-white flex flex-0 w-[17rem] p-5 border-r border-gray-700}`}
    >
      <div className="w-full">
        <div>
          <img src={logo} alt="logo" className="h-4 w-mobile-view-logo" />
        </div>
        <ul className="mt-7 flex w-full flex-col gap-4">
          <li className="cursor-pointer ">
            <NavLink
              to="/homefeed"
              className="flex items-center gap-4 font-px-regular"
            >
              <img src={home} alt="home" className="h-6 w-6" />
              <p>Home</p>
            </NavLink>
          </li>
          <li className="cursor-pointer">
            <NavLink
              to="/userprofile"
              className="flex items-center gap-4 font-px-regular"
            >
              <img src={group} alt="profile" className="h-5 w-6" />
              <p>Profile</p>
            </NavLink>
          </li>
        </ul>
        <button
          onClick={handlePostButtonClick}
          className="py-[15px] mt-10 px-[93px] justify-center align-center flex gap-[10px] rounded-[9999px] bg-twitter-blue"
        >
          <span className="text-center text-base font-bold">Post</span>
        </button>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} />

      <div
        className="flex justify-between hover:bg-gray-800 h-16 p-2 rounded-full cursor-pointer"
        onClick={handleOption}
      >
        <div className="flex gap-2 items-center ">
          <img src={avatar} alt="user" className="w-9 h-9 flex-shrink-0" />
          <div className="flex flex-col">
            <p className="">md_anas_sabah</p>
            <p className=" text-sm text-gray-500 ">@MdAnasSabah</p>
          </div>
        </div>

        <img src={option} alt="option" />
      </div>
      <div
        onClick={logout}
        className={`${
          showOption ? "flex" : "hidden"
        } bg-neutral-1000  items-center justify-center border shadow shadow-white  h-12 w-52 absolute bottom-[90px] left-[265px] rounded-lg cursor-pointer`}
      >
        Log out @MdAnasSabah
      </div>
    </div>
  );
}

export default LeftSidebar;
