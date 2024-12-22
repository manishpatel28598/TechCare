import React, { useState } from "react";
import logo from "../assets/TestLogo.svg";
import home from "../assets/home_FILL0_wght300_GRAD0_opsz24.svg";
import patient from "../assets/group_FILL0_wght300_GRAD0_opsz24.svg";
import calender from "../assets/calendar_today_FILL0_wght300_GRAD0_opsz24.svg";
import chat from "../assets/chat_bubble_FILL0_wght300_GRAD0_opsz24.svg";
import creditcard from "../assets/credit_card_FILL0_wght300_GRAD0_opsz24.svg";
import doctorProfile from "../assets/doctorProfile/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png";
import setting from "../assets/settings_FILL0_wght300_GRAD0_opsz24.svg";
import threedots from "../assets/threedot.svg";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className="flex items-center justify-between px-6 py-4 bg-white shadow-lg w-full rounded-full sticky top-0 z-10">
      {/* Logo Section */}
      <div className="flex items-center">
        <img src={logo} alt="logo" className="h-10" />
      </div>

      {/* Nav Links Section */}
      <div className="hidden md:flex space-x-8 items-center">
        <div className="flex items-center gap-2">
          <img src={home} alt="home" className="h-6 w-6" />
          <p className="text-gray-700">Overview</p>
        </div>
        <div className="flex items-center gap-2">
          <img src={patient} alt="patient" className="h-6 w-6" />
          <p className="text-gray-700">Patients</p>
        </div>
        <div className="flex items-center gap-2">
          <img src={chat} alt="chat" className="h-6 w-6" />
          <p className="text-gray-700">Schedule</p>
        </div>
        <div className="flex items-center gap-2">
          <img src={calender} alt="calendar" className="h-6 w-6" />
          <p className="text-gray-700">Transactions</p>
        </div>
        <div className="flex items-center gap-2">
          <img src={creditcard} alt="creditcard" className="h-6 w-6" />
          <p className="text-gray-700">Messages</p>
        </div>
      </div>

      {/* Profile & Settings Section */}
      <div className="flex items-center gap-4">
        {/* Profile */}
        <div className="flex items-center gap-2">
          <img src={doctorProfile} alt="profile" className="h-10 w-10 rounded-full" />
          <div>
            <p className="font-medium text-gray-800">Dr. Jose Simmons</p>
            <p className="text-sm text-gray-500">General Practitioner</p>
          </div>
        </div>

        {/* Vertical Divider */}
        <div className="hidden md:block bg-gray-300 h-10 w-[1px]"></div>

        {/* Settings Icon */}
        <div className="relative">
          <img
            src={setting}
            alt="setting"
            className="h-6 w-6 cursor-pointer"
            onClick={toggleDropdown}
          />
          {isDropdownOpen && (
            <div
              className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg z-10"
              onMouseLeave={closeDropdown}
            >
              <ul>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Profile</li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Settings</li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Logout</li>
              </ul>
            </div>
          )}
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden cursor-pointer">
          <img src={threedots} alt="threedots" className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
