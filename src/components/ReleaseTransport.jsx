import React from "react";
import { IoArrowBack } from "react-icons/io5";
function ReleaseTransport() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
        {/* Form Container */}
        <div className="relative bg-white border border-gray-300 w-full max-w-md p-6 rounded-md shadow-md">
          <button className="absolute left-4 top-4 text-gray-600">
            <IoArrowBack className="text-2xl" />
          </button>
          <h2 className="text-xl font-bold text-center mb-4">
            Release Source Money 
          </h2>
          {/* Form */}
          <form className=" space-y-3">
            <select className="w-full p-2  border border-l-2 rounded  border-gray-300 border-l-yellow-400">
              <option disabled selected hidden  className="text-gray-200"> Transport</option>
              <option>Compnay Name 1 </option>
              <option>Compnay Name 2 </option>
              
            </select>
            <div className="flex gap-3">
              <input type="text " placeholder="Release Amount" className=" w-1/2 p-2 border border-l-2 rounded border-gray-300 border-l-yellow-400" />
              <input type="date"  className="w-1/2 p-2 border border-l-2 rounded border-gray-300 border-l-yellow-400"/>
            </div>
            <input type="text" placeholder="Reason" className="w-full p-2 border border-l-2 rounded border-gray-300 border-l-yellow-400  " />
            <button className="w-full bg-yellow-500 text-white font-semibold py-2 rounded mt-2 hover:bg-yellow-400 ">Submit</button>
          </form> 
          </div>
      </div>
    </>
  );
}

export default ReleaseTransport;
