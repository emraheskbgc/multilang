"use client";
import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";

import { GrLanguage } from "react-icons/gr";
import LocaleSwitchers from "../LocaleSwitchers";
import navbarData from "@/public/assets/data/navbar"
import Link from "next/link";
import { useLocale } from 'next-intl';
import { useTranslations } from 'next-intl';
import 'animate.css';
import ThemeSwitchers from "../ThemeSwitchers";

function SearchBar() {
  const [showDropdown, setShowDropdown] = useState(false); // Dropdown durumu
  
  const [showDropLang, setShowDropLang] = useState(false);
 
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null)
  

  const handleClickItem = (index) => {
      setSelectedItem(index)
      setIsOpen(false)
  }

  const locale = useLocale()

    const t = useTranslations('Header')



  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };
 
  const handleDropLangToggle = () => {
    setShowDropLang(!showDropLang);
  };

  return (
    <>
      <header className="z-40 py-4 bg-white dark:bg-gray-900 shadow-bottom hidden md:flex ">
        <div className="container  mx-auto text-purple-300">
          <div className=" lg:mr-10  flex justify-between ">
            <div className="relative w-full max-w-xl mr-6 focus-within:text-purple-500">
              <div className="absolute inset-y-0 flex items-center pl-2 ">
                <IoMdSearch className="w-4 h-4" />
              </div>
              <input
                type="text"
                placeholder="Search"
                className="w-full p-2 rounded-lg focus:outline focus:outline-offset-2 focus:outline-4 focus:outline-gray-600 text-sm focus:outline-none text-gray-300 form-input leading-5 focus:boder-gray-600 border-gray-600 focus:shadow-outline-gray bg-gray-200 dark:bg-gray-700 pl-8 "
              />
            </div>
            <div className="flex items-center  relative ">
              <span>
                <ThemeSwitchers />
              </span>
              <span className="mx-4">
                <GrLanguage
                  className="w-5 h-5 hover:text-purple-500 cursor-pointer"
                  onClick={handleDropLangToggle}
                />
              </span>
              {showDropLang && <LocaleSwitchers />}
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

      {/* mobile nav */}
      <header
        className={`md:hidden flex justify-between items-center p-4 dark:bg-gray-800 bg-white ${
          isOpen && "fixed w-full"
        }`}
      >
        <div className="p-5 rounded-lg z-40">
          <label>
            <input type="checkbox" onClick={() => setIsOpen(!isOpen)} />
            <div className="bar">
              <span className={`top  bg-gray-800 dark:bg-purple-200`}></span>
              <span className={`middle bg-gray-800 dark:bg-purple-200`}></span>
              <span className={`bottom bg-gray-800 dark:bg-purple-200`}></span>
            </div>
          </label>
        </div>
        {isOpen && (
          <>
            <aside
              className="fixed inset-y-0 z-50 flex-shrink-0 w-64 mt-[70px] overflow-y-auto left-0 bg-white dark:bg-gray-800  
              md:hidden animate__animated animate__slideInLeft" 
            >
              <div className="py-4 text-gray-500 dark:text-gray-400 ">
                <p className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200 ">
                  Logo
                </p>
                <ul className='mt-6'>
                {navbarData.map((item,index) => (
                 <li className='relative px-6 py-3' key={index}>
                 <Link onClick={()=>handleClickItem(index)} href={`/${locale}/dashboard/${item.path}`}
                  className={`inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-400  ${selectedItem === index ? "text-black dark:text-gray-100" : "text-gray-400"}`} >
                     <span className={`absolute inset-y-0 left-0 w-1  rounded-tr-lg rounded-br-lg ${selectedItem === index ? " bg-purple-600" : "bg-white dark:bg-gray-800"}`}></span>
                     {item === "Home" && <IoMdHome className='w-5 h-5' />}
                     {item === "Cari" && <MdAccountBalance className='w-5 h-5' />}
                     {item === "Banka" && <BiSolidBank className='w-5 h-5' />}
                     {item === "Kasa" && <FaCashRegister className='w-5 h-5' />}
                     {item === "Gelir" && <GiReceiveMoney className='w-5 h-5' />}
                     {item === "Gider" && <GiPayMoney className='w-5 h-5' />}
                     <span className='ml-4'>{t(item.title)}</span>
                 </Link>
             </li>
                ))}
                
             </ul>
             <div className="px-6 my-6"><button className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-purple-600 border border-transparent active:bg-purple-600 hover:bg-purple-700 focus:shadow-outline-purple" type="button">{t('button')}<span clas
             ="ml-2" >+</span></button></div>
              </div>
            </aside>
          </>
        )}
        <div className="relative w-auto max-w-xl mr-6 focus-within:text-purple-500">
          <div className="absolute inset-y-0 flex items-center pl-2 ">
            <IoMdSearch className="w-4 h-4" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="w-full p-2 rounded-lg focus:outline focus:outline-offset-2 focus:outline-4 focus:outline-gray-600 text-sm focus:outline-none text-gray-300 form-input leading-5 focus:boder-gray-600 border-gray-600 focus:shadow-outline-gray bg-gray-200 dark:bg-gray-700 pl-8 "
          />
        </div>
        <span>
          <ThemeSwitchers/>
        </span>
        <span className="mx-4">
          <GrLanguage
            className="w-5 h-5 hover:text-purple-500 cursor-pointer"
            onClick={handleDropLangToggle}
          />
        </span>
        {showDropLang && <LocaleSwitchers />}
        <img
          src="/assets/images/emrah.jpg"
          className="w-9 h-9 rounded-full  cursor-pointer"
          alt="profile"
          onClick={handleDropdownToggle}
        />
        {showDropdown && (
          <div className="absolute top-12 right-2 mt-2 bg-gray-700 rounded-lg shadow-lg z-50">
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
      </header>
    </>
  );
}

export default SearchBar;
