"use client"
import Link from 'next/link'
import React,{useState} from 'react'
import { IoMdHome } from "react-icons/io";
import { MdAccountBalance } from "react-icons/md";
import { BiSolidBank } from "react-icons/bi";
import { FaCashRegister } from "react-icons/fa6";
import { GiReceiveMoney } from "react-icons/gi";
import { GiPayMoney } from "react-icons/gi";
import { useLocale } from 'next-intl';
import { useTranslations } from 'next-intl';
import navbarData from "@/public/assets/data/navbar"
function Header() {
   
  const [selectedItem, setSelectedItem] = useState(null)
  

    const handleClickItem = (index) => {
        setSelectedItem(index)
    }
    
    const locale = useLocale()

    const t = useTranslations('Header')
  return (
    <>
    
         <div className='z-30  flex-shrink-0 w-64 overflow-y-auto bg-white dark:bg-gray-900 h-[100vh] hidden md:flex'>
            <div className='py-4 text-black dark:text-gray-400 '>
                <Link href="/" className='ml-6 text-lg fond-bold text-black dark:text-gray-200'>
                    Logo
                </Link>
                <ul className='mt-6'>
                   {navbarData.map((item,index) => (
                    <li className='relative px-6 py-3' key={index}>
                    <Link onClick={()=>handleClickItem(index)} href={`/${locale}/dashboard/${item.path}`}
                     className={`inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-400  ${selectedItem === index ? "text-black dark:text-gray-100" : "text-gray-400"}`} >
                        <span className={`absolute inset-y-0 left-0 w-1  rounded-tr-lg rounded-br-lg ${selectedItem === index ? " bg-purple-600" : "bg-white dark:bg-gray-900"}`}></span>
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
        </div>

   
           

          
    
     
   
    
   
   
    </>
  )
}

export default Header