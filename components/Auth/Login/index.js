"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import LocaleSwitchers from "@/components/LocaleSwitchers";
import { GrLanguage } from "react-icons/gr";
import { useRouter } from 'next/navigation'
import ThemeSwitchers from "@/components/ThemeSwitchers";

function Login() {
  const router = useRouter()
  const locale = useLocale();
  const t = useTranslations("Login");

 
  const [showDropLang, setShowDropLang] = useState(false);
  const handleDropLangToggle = () => {
    setShowDropLang(!showDropLang);
  };


  const [email, setEmail] = useState('');
const [password, setPassword] = useState('');


  const mockUsers = [
    {
      id: 1,
      email: 'emrah@emrah.com',
      password: '123',
    },
  ];

  const handleLogin = (e) => {
    e.preventDefault()
    const user = mockUsers.find((user => user.email === email && user.password === password))
  
    if (user) {
      console.log("Giriş başarılı");
      router.push(`/${locale}/dashboard/homepage`)
    }else{
      console.log("email veya parola yanlış");
    }
  }



  return (
    <div className="flex items-center min-h-screen p-6 dark:bg-bodyBg bg-gray-50">
      <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden  rounded-lg shadow-xl dark:bg-authBg">
        <div className="flex flex-col overflow-y-auto md:flex-row">
          <div className="h-32 md:h-auto md:w-1/2">
            <img
              src="/assets/images/loginLeft.jpeg"
              alt="login image"
              className=" object-cover w-full h-full"
            />
          </div>
          <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2 relative">
            <div className="w-full">
              <h1 className="mb-4 text-xl font-semibold dark:text-gray-200 text-gray-700">
                {t("title")}
              </h1>
              <form onSubmit={handleLogin}>
               <label className=" text-sm dark:text-gray-400 text-gray-700 ">
                <span>{t("email")}</span>
                <input
                  className=" p-3   mb-4 rounded-lg w-full text-sm dark:text-gray-300 text-gray-800 form-input leading-5 border-solid
                dark:bg-[#24262d] bg-gray-200 mt-2 focus:outline focus:outline-offset-2 focus:outline-4 focus:outline-gray-600"
                  type="email"
                  placeholder="emrah@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <label className=" text-sm dark:text-gray-400 text-gray-700 ">
                <span>{t("password")}</span>
                <input
                  className=" p-3 mb-4 rounded-lg w-full text-sm text-gray-300 form-input leading-5 border-solid
               dark:bg-[#24262d] bg-gray-200 mt-2 focus:outline focus:outline-offset-2 focus:outline-4 focus:outline-gray-600"
                  type="password"
                  placeholder="***************"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                />
              </label>
              <button
                className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors
            duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white
             bg-[#7e3af2] border border-transparent active:bg-[#7e3af2] hover:bg-[#7134da]  w-full mt-4"
                type="submit"
              >
                {t("loginBtn")}
              </button>
              </form>
             
              <hr className="my-8" />
              <p className="mt-4">
                <Link
                  className="text-sm font-medium dark:text-purple-400 text-purple-600 hover:underline "
                  href={`/${locale}/forgot-password`}
                >
                  {t("forgotYourPassword")}
                </Link>
              </p>
              <p className="mt-1">
                <Link
                  className="text-sm font-medium dark:text-purple-400 text-purple-600 hover:underline "
                  href={`/${locale}/signup`}
                >
                  {t("createAccount")}
                </Link>
              </p>
            </div>
            <div className="absolute flex space-x-2 top-0 right-0 text-white p-5">
              <span>
              <ThemeSwitchers/>
              </span>
              <span >
                <GrLanguage
                  className="w-5 h-5 hover:text-purple-800 dark:text-white text-purple-500 cursor-pointer"
                  onClick={handleDropLangToggle}
                />
              </span>
             
              {showDropLang && <div className="text-purple-500 ml-0 ">
                <LocaleSwitchers />
                </div>}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Login;
