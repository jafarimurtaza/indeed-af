import React, { useState } from "react";
import Link from "next/link";

export default function JobSearch() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white w-full min-h-screen">
      <img src="/images/download.jpg" className="w-32 h-32" />
      <hr />
      <div className="w-full  bg-amber-400 flex justify-center items-start">
        <div className="w-[90%] h-14 border-2 border-black bg-white rounded-2xl grid grid-cols-3 items-center px-4 shadow-sm shadow-gray-900">
          {/*search icon*/}
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-search"
            >
              <path d="m21 21-4.34-4.34" />
              <circle cx="11" cy="11" r="8" />
            </svg>
            <input
              type="search"
              name="search"
              placeholder="Job title Keywords or company"
              value={search}
              className="w-full"
            />
            {/* <span className="text-gray-500">full time</span> */}
          </div>

          {/*location icon*/}
          <div className="flex items-center justify-center gap-2 text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-map-pin"
            >
              <path d="M21 10c0 6-9 13-9 13s-9-7-9-13a9 9 0 1 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <input
              type="search"
              name="search"
              placeholder="London, Greater London"
              value={location}
              className="w-full"
            />
            {/* <span>London, Greater London</span> */}
          </div>
          {/* button */}
          <button className="bg-blue-700 text-white px-5 py-2 rounded-xl hover:bg-blue-800 w-[30%] gap-5">
            Find Jobs
          </button>
        </div>
      </div>
      {/* dropdown menu */}
      <div className="bg-green-400  justify-center mt-5 grid grid-cols-11 w-full min-h-screen ">
        <div className="relative">
          <button
            className="bg-gray-400 px-4 py-2 rounded-2xl w-20"
            onClick={handleClick}
          >
            pay
          </button>

          {isOpen && (
            <div className="bg-white  flex flex-col rounded mt-1 p-2 space-y-2 text-white absolute ">
              <Link href="#" className="hover:underline text-black">
                All Salaries
              </Link>
              <Link
                href="#"
                className="hover:underline hover:bg-blue-500 text-black"
              >
                $25,000 +
              </Link>
              <Link
                href="#"
                className="hover:underline hover:bg-blue-500 text-black"
              >
                $35,000 +
              </Link>
              <Link
                href="#"
                className="hover:underline hover:bg-blue-500 text-black"
              >
                $40,000 +
              </Link>
              <Link
                href="#"
                className="hover:underline hover:bg-blue-500 text-black"
              >
                $50,000 +
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
