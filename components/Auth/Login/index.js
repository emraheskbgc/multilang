"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import LocaleSwitchers from "@/components/LocaleSwitchers";
import { GrLanguage } from "react-icons/gr";

function Login() {
  const locale = useLocale();
  const t = useTranslations("Login");

  const [showDropLang, setShowDropLang] = useState(false);
  const handleDropLangToggle = () => {
    setShowDropLang(!showDropLang);
  };
  return (
    <div className="flex items-center min-h-screen p-6 bg-bodyBg">
      <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden  rounded-lg shadow-xl bg-authBg">
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
              <h1 className="mb-4 text-xl font-semibold text-gray-200">
                {t("title")}
              </h1>
              <label className=" text-sm text-gray-400 ">
                <span>{t("email")}</span>
                <input
                  className=" p-3   mb-4 rounded-lg w-full text-sm text-gray-300 form-input leading-5 border-solid
                bg-[#24262d] mt-2 focus:outline focus:outline-offset-2 focus:outline-4 focus:outline-gray-600"
                  type="email"
                  placeholder="emrah@gmail.com"
                />
              </label>
              <label className=" text-sm text-gray-400 ">
                <span>{t("password")}</span>
                <input
                  className=" p-3 mb-4 rounded-lg w-full text-sm text-gray-300 form-input leading-5 border-solid
               bg-[#24262d] mt-2 focus:outline focus:outline-offset-2 focus:outline-4 focus:outline-gray-600"
                  type="password"
                  placeholder="***************"
                />
              </label>
              <Link
                className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors
            duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white
             bg-[#7e3af2] border border-transparent active:bg-[#7e3af2] hover:bg-[#7134da]  w-full mt-4"
                type="button"
                href="/"
              >
                {t("loginBtn")}
              </Link>
              <hr className="my-8" />
              <p className="mt-4">
                <Link
                  className="text-sm font-medium text-purple-400 hover:underline "
                  href={`/${locale}/forgot-password`}
                >
                  {t("forgotYourPassword")}
                </Link>
              </p>
              <p className="mt-1">
                <Link
                  className="text-sm font-medium text-purple-400 hover:underline "
                  href={`/${locale}/signup`}
                >
                  {t("createAccount")}
                </Link>
              </p>
            </div>
            <div className="absolute top-0 right-0 text-white p-5">
              <span >
                <GrLanguage
                  className="w-5 h-5 hover:text-purple-500 cursor-pointer"
                  onClick={handleDropLangToggle}
                />
              </span>
              {showDropLang && <div className="text-purple-500 ml-0">
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
