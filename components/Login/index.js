

import Link from "next/link";

import React from "react";
import { getDictionary } from "@/app/[lang]/dictionaries";
 async function  Login({ lang }) {
  const dict = await getDictionary(lang) // en
  return (
    <div className="flex items-center min-h-screen p-6 bg-[#121317]">
     <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden  rounded-lg shadow-xl bg-[#1a1c23]">
      <div className="flex flex-col overflow-y-auto md:flex-row">
        <div className="h-32 md:h-auto md:w-1/2">
          <img
            src="/assets/images/loginLeft.jpeg"
            alt="login image"
            className=" object-cover w-full h-full"
          />
        </div>
        <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
          <div className="w-full">
            <h1 className="mb-4 text-xl font-semibold text-gray-200">
            {dict.login}
            </h1>
            <label className=" text-sm text-gray-400 ">
              <span>Email</span>
              <input
                className=" p-3   mb-4 rounded-lg w-full text-sm text-gray-300 form-input leading-5 border-solid
                bg-[#24262d] mt-2 focus:outline focus:outline-offset-2 focus:outline-4 focus:outline-gray-600"
                type="email"
                placeholder="emrah@gmail.com"
              />
            </label>
            <label className=" text-sm text-gray-400 ">
              <span>Password</span>
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
              Log in
            </Link>
            <hr className="my-8"/>
            <p className="mt-4"> 
                <Link className="text-sm font-medium text-purple-400 hover:underline " href="/forgot-password">
                    Forgot your password?
                </Link>
            </p>
            <p className="mt-1"> 
            <Link className="text-sm font-medium text-purple-400 hover:underline " href="/signup">
                Create account
            </Link>
        </p>
          </div>

            
        </main>
      </div>
    </div>
    </div>
   
  );
}

export default Login;
