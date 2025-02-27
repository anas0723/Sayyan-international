import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { TbLockPassword } from "react-icons/tb";
import { Link } from "react-router-dom";
export default function ChangePassword() {
  return (
    <>
      <div className=" min-h-screen flex-none  py-20 px-6 md:px-20">
        {/* //form section  */}
        <div className="flex flex-col items-center">
          <div className="border-2 border-gray-300 bg-white p-6 shadow-2xl rounded-lg w-full max-w-md">
            <h2 className="text-center font-black  mb-6 tracking-wider text-lg ">
              Change Password
            </h2>

            <div className="w-full">
              {/* Email Input */}
              <div className="relative mr-20 flex items-center w-full mt-4">
                <AiOutlineMail className="absolute left-3 text-gray-500 text-lg" />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 pl-10 rounded border-l-4 border-yellow-500 outline-none"
                />
              </div>

              {/* Password Input */}
              <div className="relative flex items-center w-full mt-4">
                <TbLockPassword className="absolute left-3 text-gray-500 text-lg" />
                <input
                  type="password"
                  placeholder="New Password"
                  className="w-full p-3 pl-10 rounded border-l-4 border-yellow-500 outline-none"
                />
              </div>
              <div className="relative flex items-center w-full mt-4">
                <TbLockPassword className="absolute left-3 text-gray-500 text-lg" />
                <input
                  type="password"
                  placeholder="Re Type Password"
                  className="w-full p-3 pl-10 rounded border-l-4 border-yellow-500 outline-none"
                />
              </div>

              <button className="w-full bg-yellow-500 hover:bg-yellow-400 text-white p-3 mt-4 rounded transition duration-300">
                Save Changes
              </button>


            </div>
          </div>
        </div>
      </div>
    </>
  );
}
