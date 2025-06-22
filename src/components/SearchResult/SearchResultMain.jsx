import React, { useState } from "react";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";

export default function SearchResultMain() {
  return (
    <div className="bg-white w-full h-auto flex flex-col items-center">
      {/* Search Section */}
      <div className="w-8/12 h-auto border-1 my-6 border-black bg-white rounded-2xl flex items-center justify-between shadow-sm shadow-gray-900 p-2">
        {/* Search Input */}
        <div className="flex items-center  w-1/2 gap-3">
          <FaSearch className="text-gray-700 text-xl" />
          <input
            type="search"
            name="search"
            placeholder="Job title, keywords, or company"
            className="w-full p-4 placeholder:text-gray-600 outline-none text-gray-600 text-xl"
          />
        </div>
        <span className="flex justify-center items-center h-auto w-8">|</span>

        {/* Location Input */}
        <div className="flex items-center gap-2 text-black w-1/2">
          <FaMapMarkerAlt className="text-black text-lg" />
          <input
            type="search"
            name="location"
            placeholder="London, Greater London"
            className="w-full p-4 placeholder:text-gray-600 outline-none text-xl text-gray-600"
          />
        </div>

        {/* Find Jobs Button */}
        <Link href="#">
          <button className="bg-blue-700 text-white p-4 rounded-xl hover:bg-green-800 w-28 ml-4 font-bold">
            Find Jobs
          </button>
        </Link>
      </div>
      {/* background section */}
 <div className="bg-white w-full min-h-screen flex justify-center items-center">
      <svg width="100" height="50">
        <circle cx="50" cy="25" r="20" fill="green" />
      </svg>
</div>



    </div>
  );
}
