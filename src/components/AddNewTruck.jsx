import React from "react";
import { IoArrowBack } from "react-icons/io5";

export default function AddNewTruck() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
        {/* Form Container */}

        <div className="relative bg-white border border-gray-300 w-full max-w-md p-6 rounded-md shadow-md">
          <div className="flex  items-center mb-4">
            <IoArrowBack className="text-2xl cursor-pointer" />
            <h2 className=" flex text-center  text-xl font-bold ml-2">
              Add New Truck{" "}
            </h2>
          </div>
          <div className="flex gap-3">
            <input
              type="text "
              placeholder="Release Amount "
              className=" w-1/2  p-2 border border-l-2 rounded border-gray-300 border-l-yellow-400"
            />
            <input
              type="text"
              placeholder="Driver Name"
              className="w-1/2  p-2 border border-l-2 rounded border-gray-300 border-l-yellow-400"
            />
          </div>
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Helper Name"
              className=" w-1/2 mt-3 p-2 border border-l-2 rounded border-gray-300 border-l-yellow-400"
            />
            <input
              type="text"
              placeholder="Trips This Month"
              className="w-1/2 mt-3 p-2 border border-l-2 border-l-amber-300 border-gray-300 rounded"
            />
          </div>
          <button className="w-full mt-6 bg-yellow-500 text-white font-semibold py-2 rounded  hover:bg-yellow-600 ">
            Add Company
          </button>
        </div>
      </div>
    </>
  );
}
