import React, { useState } from "react";
import Logo from "../assets/VasitumLogo.svg";
import { MdDashboard } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa";
import { MdGroupWork } from "react-icons/md";
import { BiSolidCalendarEvent } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { IoMdSettings } from "react-icons/io";

const Sidebar = () => {
  // Separate state for active items in each menu
  const [activeIndex, setActiveIndex] = useState(null);
  const [otherActiveIndex, setOtherActiveIndex] = useState(null);

  const menuItems = [
    { icon: <MdDashboard />, name: "Dashboard" },
    { icon: <FaUserPlus />, name: "Recruitment" },
    { icon: <BiSolidCalendarEvent />, name: "Schedule" },
    { icon: <FaUsers />, name: "Employee" },
    { icon: <MdGroupWork />, name: "Department" },
  ];

  const otherItems = [
    { icon: <BiSupport />, name: "Support" },
    { icon: <IoMdSettings />, name: "Setting" },
  ];

  // Function to handle main menu item click
  const handleMainMenuClick = (index) => {
    setActiveIndex(index);         // Set active index for main menu
    setOtherActiveIndex(null);     // Reset the other menu active state
  };

  // Function to handle other menu item click
  const handleOtherMenuClick = (index) => {
    setOtherActiveIndex(index);    // Set active index for other menu
    setActiveIndex(null);          // Reset the main menu active state
  };

  return (
    <div className="lg:w-[15.125rem] md:w-[4.625rem] lg:pt-[2.038rem] md:pt-[0.9rem] flex flex-col lg:px-12 bg-[#fafafa] h-screen transition-width duration-300">
      {/* Logo */}
      <div className="flex gap-[0.625rem] flex-col md:flex-row items-center justify-center">
        <img src={Logo} className="w-[2.3rem] h-[2.3rem]" alt="Logo" />
        <h1 className="text-[26px] md:lg:inline-block hidden text-[#0a337a] font-semibold">Vasitum</h1>
      </div>

      {/* Main Menu */}
      <div className="lg:ml-0 md:ml-0 flex-col mt-[3.063rem]">
        <p className="lg:text-xs font-medium lg:text-left md:text-[8px] md:text-center text-[#b1b1b1]">
            MAIN MENU
        </p>

        <div>
          <ul className="w-full pt-3">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="flex items-center lg:justify-start md:justify-center gap-6 cursor-pointer py-4"
                onClick={() => handleMainMenuClick(index)}
              >
                <span
                  className={`text-xl md:text-2xl transition-colors duration-200 ${
                    activeIndex === index ? "text-[#ff5151]" : "text-[#b2b2b2]"
                  }`}
                >
                  {item.icon}
                </span>
                <span
                  className={`text-base lg:inline-block hidden ${
                    activeIndex === index ? "text-[#ff5151]" : "text-[#686868]"
                  }`}
                >
                  {item.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Other Menu */}
      <div className="lg:ml-0 md:ml-0 mt-[3.063rem]">
        <p className="lg:text-xs md:text-[9px] lg:font-medium lg:text-left  text-center md:text-center text-[#b1b1b1]">OTHER</p>
        <div>
          <ul className="w-full pt-3">
            {otherItems.map((item, index) => (
              <li
                key={index}
                className="flex lg:flex-row md:flex-col items-center lg:items-start lg:gap-6 md:gap-0 cursor-pointer py-4"
                onClick={() => handleOtherMenuClick(index)}
              >
                <span
                  className={`text-xl ${
                    otherActiveIndex === index
                      ? "text-[#ff5151]"
                      : "text-[#b2b2b2]"
                  }`}
                >
                  {item.icon}
                </span>
                <span
                  className={`text-base lg:inline-block hidden ${
                    otherActiveIndex === index
                      ? "text-[#ff5151]"
                      : "text-[#686868]"
                  }`}
                >
                  {item.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
