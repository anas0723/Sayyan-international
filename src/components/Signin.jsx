import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { TbLockPassword } from "react-icons/tb";

export default function Singin() {
  return (
    <div className="pt-[211px] pb-[133px] pr-[293px] pl-[293px] flex justify-center  ">
      <div className="absolute border-2 border-gray-300 bg-white p-4 shadow-2xl rounded-lg">
        <h2
          className="text-center mb-4 pt-12 tracking-wider text-lg font-normal">
          Please enter your login details
        </h2>
        <div
          className="pl-[101px] pr-[102px]">
          <div className="relative flex items-center w-full mt-10">
            <AiOutlineMail className="absolute ml-3 mt-3.5  -translate-y-1/2 text-gray-500 text-lg" />
            <input 
              type="email"
              placeholder="Email"
              className="w-[363px] p-2 pl-10 border rounded border-l-4 border-yellow-500 outline-none"
            />
          </div>

          <div className="relative flex items-center w-full mt-4">
            <TbLockPassword className="absolute ml-3 -translate-y-1/2 text-gray-500 text-lg" />
            <input
              type="password"
              placeholder="Password"
              className="w-[363px] p-2 mb-3 pl-10 border rounded border-l-4 border-yellow-500 outline-none"
            />
          </div>
          <button className="w-full hover:bg-amber-300 theme-color text-white p-2 mt-2.5 rounded">
            Sign in
          </button>
          <a href="" className="justify-center hover:underline flex text-blue-500 mt-5">Forgotten Password?</a>
        </div>
      </div>
      //{" "}
    </div>
  );
}
