import { IoArrowBack } from "react-icons/io5";

export default function EditTrip() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* Form Container */}
      <div className="relative bg-white border border-gray-300 w-full max-w-md p-6 rounded-md shadow-md">
        {/* Back Button */}
        <button className="absolute left-4 top-4 text-gray-600">
          <IoArrowBack className="text-2xl" />
        </button>

        {/* Heading */}
        <h2 className="text-xl font-bold text-center mb-4">Edit Trip</h2>

        {/* Form Inputs */}
        <form className="space-y-3">
          <input
            type="text"
            placeholder="ABC Company"
            className="w-full p-2 border border-gray-300 rounded"
          />

          <div className="flex gap-3">
            <input
              type="date"
              className="w-1/2 p-2 border border-gray-300 rounded"
            />

            <select className="w-1/2 p-2 border border-gray-300 rounded">
              <option>ABC</option>
            </select>
          </div>
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Weight (Ton)"
              className="w-1/2 p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              placeholder="Price"
              className="w-1/2 p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="flex gap-3">
            <input
              placeholder="112,756"
              className="w-1/2 p-2 border border-gray-300 rounded"
            ></input>
            <input
              placeholder="112,756"
              className="w-1/2 p-2 border border-gray-300 rounded"
            ></input>
          </div>

          {/* Submit Button */}
          <button className="w-full bg-yellow-500 text-white font-semibold py-2 rounded mt-2 hover:bg-yellow-600">
            Add trip
          </button>
          {/* Delete Button  */}
          <button className="w-full bg-white hover:bg-red-200 text-red-500 font-semibold py-2 border-2  border-[#FC5B5B] mt02">Delete</button>
        </form>
      </div>
    </div>
  );
}
