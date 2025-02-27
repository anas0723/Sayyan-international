import React from "react";
import { Link } from "react-router-dom";

function AllScreen() {
  return (
    <>
      <div className=" min-h-screen inline-flex j-c flex-col  py-20 px-6 md:px-20">
        <div className=" inline-flex justify-center text-white bg-yellow-500 p-3 rounded-2xl mt-5 hover:underline">
          <Link to={"/forget"}>Forget</Link>
        </div>
        <div className=" inline justify-center text-white bg-yellow-500 p-3 rounded-2xl mt-5 hover:underline">
          <Link to={"/dashboard-sourses"}>Dashboard Sourses</Link>
        </div>
        <div className="  inline-flex justify-center  text-white bg-yellow-500 p-3 rounded-2xl mt-5 hover:underline">
          <Link to={"/dashboard-trips"}>Dashboard Trips</Link>
        </div>
        <div className=" inline-flex justify-center  text-white bg-yellow-500 p-3 rounded-2xl mt-5 hover:underline">
          <Link to={"/email"}>Email</Link>
        </div>
        <div className=" inline-flex justify-center text-white bg-yellow-500 p-3 rounded-2xl mt-5 hover:underline">
          <Link to={"/"}>Sign In</Link>
        </div>
      </div>
    </>
  );
}

export default AllScreen;
