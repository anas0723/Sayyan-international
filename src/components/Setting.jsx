import { IoArrowBack } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

export default function Settings() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* Heading */}
      <h2 className="text-2xl font-bold mb-16">SETTINGS</h2>

      {/* Card Section */}
      <div className="relative  bg-white shadow-md border border-gray-300 w-[90%] max-w-md mt-12 p-6 rounded-md text-center">
        {/* Profile Image Overlapping the Card */}
        <div className="absolute -top-14  left-1/2 transform -translate-x-1/2 w-[112px] h-[112px] bg-gray-300 rounded-full border-4 border-white flex items-center justify-center shadow-md z-10 "> <CgProfile className="w-20 h-20" />
        </div>

        {/* Back Button */}
        <button className="absolute left-4 top-4 text-gray-600">
          <IoArrowBack className="text-2xl" />
        </button>

        {/* Admin Info */}
        <h3 className="text-lg font-semibold mt-14">Admin</h3>
        <p className="text-gray-500 text-sm">admin@sayyam.com</p>

        {/* Change Password Button */}
        <button className="bg-yellow-400 text-white font-semibold py-2 px-6 rounded-md mt-4 hover:bg-yellow-300 w-full">
          Change Password
        </button>
      </div>
    </div>
  );
}
