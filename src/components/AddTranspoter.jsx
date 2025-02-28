import { IoArrowBack } from "react-icons/io5";

function AddTranspoter() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* Form Container */}
      <div className="relative bg-white border border-gray-300 w-full max-w-md p-6 rounded-md shadow-md">
        {/* Back Button */}
        <button className="absolute left-4 top-4 text-gray-600">
          <IoArrowBack className="text-2xl" />
        </button>

        {/* Heading */}
        <h2 className="text-xl font-bold text-center mb-4">
          Add A New Transpoter
        </h2>

        {/* Form Inputs */}
        <form className="space-y-3">
          <select className="w-full p-2 border border-l-2 border-l-amber-300 border-gray-300 rounded">
            <option>Transpoter Name</option>
          </select>
          <div className="flex gap-3">
            <select className="w-1/2  border border-l-2 border-l-amber-300 border-gray-300 rounded">
              <option className=" pr-3">Contact Person</option>
            </select>
            <input
              type="number"
              placeholder="Cell#"
              className="w-1/2 p-2 border border-l-2 border-l-amber-300 border-gray-300 rounded"
            />
          </div>

          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Current Bill"
              className="w-1/2 p-2 border border-l-2 border-l-amber-300 border-gray-300 rounded"
            />
            <input
              type="text"
              placeholder="Total Pending"
              className="w-1/2 p-2 border border-l-2 border-l-amber-300 border-gray-300 rounded"
            />
          </div>
          <input
            type="text"
            placeholder="Last Trip"
            className="w-full p-2 border border-l-2 border-l-amber-300 border-gray-300 rounded"
          />
          {/* Submit Button */}
          <button className="w-full bg-yellow-500 text-white font-semibold py-2 rounded mt-2 hover:bg-yellow-600">
            Add Sourses
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddTranspoter;
