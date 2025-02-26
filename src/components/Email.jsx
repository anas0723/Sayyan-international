import React from "react";
import Logo from "../assets/pictures/logo/Group 802.jpg";
import { IoCheckmarkOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function Email() {
  return (
    <>
      <div className=" min-h-screen flex-none py-20 px-6 md:px-20 ">
        {/* card  */}
        <div className="flex items-center  justify-center ">
          <div className="border-2  border-gray-300 bg-white p-6 shadow-2xl rounded-lg w-full max-w-md">
            <div className="flex items-center justify-center">
              <div className="relative w-20 h-20 flex items-center justify-center bg-[#19B23B] max-w-md rounded-full">
                <IoCheckmarkOutline className="text-white text-7xl" />
              </div>
            </div>

            <div className="text-center mt-5">
              <p className="font-extrabold  ">Successfully Sent</p>{" "}
              <p className="mt-2.5 mb-4 text-gray-500">
                {" "}
                Check your email for the link and then sign in.
              </p>
            </div>
            <Link to={"/"}  className="block theme-color text-center text-white hover:bg-amber-300 w-full p-3  rounded transition duration-300">
              Sign in{" "}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Email;
