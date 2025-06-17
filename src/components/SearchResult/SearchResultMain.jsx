import React, { useState } from "react";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";

export default function SearchResultMain() {
  return (
    <div className="bg-blue-300 w-full h-auto flex flex-col items-center">
      {/* Search Section */}
      <div className="w-[90%] h-auto mt-14 border-2 border-black bg-white rounded-2xl flex items-center justify-between shadow-sm shadow-gray-900 p-4 ">
        {/* Search Input */}
        <div className="flex items-center  w-1/2 gap-3">
          <FaSearch className="text-gray-700 text-xl" />
          <input
            type="search"
            name="search"
            placeholder="Job title, keywords, or company"
            value="full time"
            className="w-full hover:bg-amber-200"
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
            value="location"
            className="w-full hover:bg-amber-700"
          />
        </div>

        {/* Find Jobs Button */}
        <Link href="#">
          <button className="bg-blue-700 text-white px-5 py-2 rounded-xl hover:bg-blue-800 w-32 ml-4">
            Find Jobs
          </button>
        </Link>
      </div>
    </div>
  );
}
