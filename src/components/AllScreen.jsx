import React from "react";
import { Link } from "react-router-dom";

function AllScreen() {
  return (
    <>
      <div className=" min-h-screen inline-flex j-c flex-col  py-20 px-6 md:px-20">
        <div className=" inline-flex justify-center text-white bg-yellow-500 p-3 rounded-2xl mt-5 hover:underline">
          <Link to={"/"}>Sinin</Link>
        </div>
        <div className=" inline-flex justify-center text-white bg-yellow-500 p-3 rounded-2xl mt-5 hover:underline">
          <Link to={"/forget"}>Forget</Link>
        </div>
        <div className=" inline-flex justify-center text-white bg-yellow-500 p-3 rounded-2xl mt-5 hover:underline">
          <Link to={"/email"}>Email</Link>
        </div>
        <div className=" inline-flex justify-center text-white bg-yellow-500 p-3 rounded-2xl mt-5 hover:underline">
          <Link to={"/dashboard-trips"}>Dashboard Trips</Link>
        </div>
        <div className=" inline-flex justify-center text-white bg-yellow-500 p-3 rounded-2xl mt-5 hover:underline">
          <Link to={"/dashboard-sourses"}>Dashboard Sourses</Link>
        </div>
        <div className=" inline-flex justify-center text-white bg-yellow-500 p-3 rounded-2xl mt-5 hover:underline">
          <Link to={"/companies"}>Companies</Link>
        </div>
        <div className=" inline-flex justify-center text-white bg-yellow-500 p-3 rounded-2xl mt-5 hover:underline">
          <Link to={"/transpoter"}>Transpoter</Link>
        </div>
        <div className=" inline-flex justify-center text-white bg-yellow-500 p-3 rounded-2xl mt-5 hover:underline">
          <Link to={"/setting"}>Setting</Link>
        </div>
        <div className=" inline-flex justify-center text-white bg-yellow-500 p-3 rounded-2xl mt-5 hover:underline">
          <Link to={"/change-password"}>Change Password</Link>
        </div>
        <div className=" inline-flex justify-center text-white bg-yellow-500 p-3 rounded-2xl mt-5 hover:underline">
          <Link to={"/new-trip"}>New Trip</Link>
        </div>
        <div className=" inline-flex justify-center text-white bg-yellow-500 p-3 rounded-2xl mt-5 hover:underline">
          <Link to={"/edit-trip"}>Edit Trip</Link>
        </div>
        <div className=" inline-flex justify-center text-white bg-yellow-500 p-3 rounded-2xl mt-5 hover:underline">
          <Link to={"/new-sources"}>New Cources</Link>
        </div>
        <div className=" inline-flex justify-center text-white bg-yellow-500 p-3 rounded-2xl mt-5 hover:underline">
          <Link to={"/add-new-transport"}>Add A New Transport</Link>
        </div>
        <div className=" inline-flex justify-center text-white bg-yellow-500 p-3 rounded-2xl mt-5 hover:underline">
          <Link to={"/add-new-compnay"}>Add New Company</Link>
        </div>
        <div className=" inline-flex justify-center text-white bg-yellow-500 p-3 rounded-2xl mt-5 hover:underline">
          <Link to={"/release-money"}>Release Money</Link>
        </div>
        <div className=" inline-flex justify-center text-white bg-yellow-500 p-3 rounded-2xl mt-5 hover:underline">
          <Link to={"/release-transport"}>Release Transport</Link>
        </div>
        <div className=" inline-flex justify-center text-white bg-yellow-500 p-3 rounded-2xl mt-5 hover:underline">
          <Link to={"/receive-company-bill"}>Receive Company Bill</Link>
        </div>
        <div className=" inline-flex justify-center text-white bg-yellow-500 p-3 rounded-2xl mt-5 hover:underline">
          <Link to={"/company-name-dashboard"}>Comany Name Dashboard</Link>
        </div>
        <div className=" inline-flex justify-center text-white bg-yellow-500 p-3 rounded-2xl mt-5 hover:underline">
          <Link to={"/add-new-truck"}>Add New Truck</Link>
        </div>
        <div className=" inline-flex justify-center text-white bg-yellow-500 p-3 rounded-2xl mt-5 hover:underline">
          <Link to={"/add-new-cost"}>Add New Cost</Link>
        </div>
        <div className=" inline-flex justify-center text-white bg-yellow-500 p-3 rounded-2xl mt-5 hover:underline">
          <Link to={"/transport-dashboard"}>Transport Dashboard</Link>
        </div>
      </div>
    </>
  );
}

export default AllScreen;
