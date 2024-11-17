import React from "react";
import { FiSearch } from "react-icons/fi";
import { BiSolidBell } from "react-icons/bi";
import { RiMessage2Fill } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import userImage from "../assets/userImage.png"
const Navbar = () => {
  return (
    <div className="justify-between bg-white border-b flex md:h-[3.875rem] items-center lg:ml-[3.125rem] lg:h-[5.625rem] md:pr-[3.125rem] ">
        {/* Search Bar */}
      <div className="relative flex w-full md:max-w-[15.313rem] max-w-[21.438rem]">
        <button className="lg:hidden pl-2 pr-4">
            <IoMdMenu className="text-3xl text-[#b2b2b2]"/>
        </button>
        <input
          type="text"
          placeholder="Search"
          className="w-full md:text-[14px] lg:py-[10px] px-4 border text-[#b2b2b2] bg-[#fafafa] border-gray-300 rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button>
        <FiSearch className="absolute md:w-6 md:h-5 w-8 h-6 text-[#b2b2b2] right-3 top-1/2 transform -translate-y-1/2 " />
        </button>
      </div>
      {/* User */}
      <div className="flex items-center text-[#b2b2b2] space-x-[2.063rem] justify-center" >
      <BiSolidBell className="text-2xl" />
      <RiMessage2Fill className="text-2xl" />
      <div className="flex items-center">
        <img className="mr-3 md:w-9" src={userImage} alt="user" />
        <p className="mr-1 md:hidden text-black">Admirra John</p>
        <IoIosArrowDown className="text-xl"/>
      </div>
      </div>
    </div>
  );
};

export default Navbar;
