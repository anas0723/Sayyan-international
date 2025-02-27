import React from "react";
import Logo from "../assets/pictures/logo/Group 802.jpg";
import { FaArrowLeft } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";
import AllScreen from "./AllScreen";

export default function Forget() {
  return (
    <>
      <div className="min-h-screen flex-none  py-20 px-6 md:px-20">
            {/* Card */}
        <div className="flex flex-col justify-center items-center">
          <div className="border-2  border-gray-300 bg-white p-6 shadow-2xl rounded-lg w-full max-w-md">
            <FaArrowLeft className="w-11 h-9" />
            <p className="flex justify-center z-10 text-center text-lg ">
              Forgotten your password? just enter the email <br /> associated
              with it to reset it.
            </p>
            <div className="relative mr-20 flex items-center w-full mt-12">
              <AiOutlineMail className="absolute left-3 text-gray-500 text-lg" />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 pl-10 rounded border-l-4 border-yellow-500 outline-none "
              />
            </div>
            <Link to={'/email'} className=" block w-full bg-yellow-500 hover:bg-yellow-400 text-white p-3 rounded transition mt-7 duration-300 font-bold text-center" >
            Send reset link
            </Link>
          </div>
        </div>
  
      </div>
    </>
  );
}
