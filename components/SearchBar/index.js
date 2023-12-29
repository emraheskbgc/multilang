"use client";
import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { FaUserCircle, FaSignOutAlt, FaMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import { GrLanguage } from "react-icons/gr";
import LocaleSwitchers from "../LocaleSwitchers";

function SearchBar() {
  const [showDropdown, setShowDropdown] = useState(false); // Dropdown durumu
  const [isSun, setIsSun] = useState(true);
  const [showDropLang, setShowDropLang]= useState(false)
  
 


 
  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };
  const handleThemeToggle = () => {
    setIsSun(!isSun);
  };
  const handleDropLangToggle = () => {
    setShowDropLang(!showDropLang)
  }


 
  return (
    <header className="z-40 py-4 bg-gray-900 shadow-bottom ">
      <div className="container  mx-auto text-purple-300">
        <div className=" lg:mr-10  flex justify-between ">
          <div className="relative w-full max-w-xl mr-6 focus-within:text-purple-500">
            <div className="absolute inset-y-0 flex items-center pl-2 ">
              <IoMdSearch className="w-4 h-4" />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="w-full p-2 rounded-lg focus:outline focus:outline-offset-2 focus:outline-4 focus:outline-gray-600 text-sm focus:outline-none text-gray-300 form-input leading-5 focus:boder-gray-600 border-gray-600 focus:shadow-outline-gray bg-gray-700 pl-8 "
            />
          </div>
          <div className="flex items-center  relative ">
          
            <span>
              {isSun ? (
                <FiSun
                  className="w-5 h-5 cursor-pointer"
                  onClick={handleThemeToggle}
                />
              ) : (
                <FaMoon
                  className="w-5 h-5 cursor-pointer"
                  onClick={handleThemeToggle}
                />
              )}
            </span>
            <span className="mx-4">
            <GrLanguage className="w-5 h-5 hover:text-purple-500 cursor-pointer" onClick={handleDropLangToggle}/>
            </span>
            {showDropLang && (
             <LocaleSwitchers/>
            )}
            <img
              src="/assets/images/emrah.jpg"
              className="w-9 h-9 rounded-full  cursor-pointer"
              alt="profile"
              onClick={handleDropdownToggle}
            />
            {showDropdown && (
              <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg z-50">
                <ul className="list-none">
                  <li className="py-2 px-4 flex items-center rounded-lg hover:bg-gray-200 cursor-pointer">
                    <FaUserCircle className="mr-2" /> Profile
                  </li>
                  <li className="py-2 px-4 flex items-center rounded-lg hover:bg-gray-200 cursor-pointer">
                    <FaSignOutAlt className="mr-2" /> Logout
                  </li>
                </ul>
              </div>
            )}
          
          </div>
        </div>
      </div>
    </header>
  );
}

export default SearchBar;
