import React, { useState } from "react";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const input_style =
  "w-full p-2 lg:p-4 placeholder:text-gray-600 outline-none text-gray-600 lg:text-xl text-sm";

const dataLists = [
  {
    title: "Trending Searches",
    items: [
      "remote medical billing remote",
      "part time city of atlanta, ga",
      "city of detroit, mi",
      "remote ohio",
      "remote work from",
      "home city of atlanta",
      "server city of",
      "atlanta, ga",
      "hiring immediately",
    ],
  },
  {
    title: "Trending Jobs",
    items: [
      "part time tallahassee, fl",
      "part time kearny mesa, ca",
      "part time summerlin, nv",
      "part time aurora, co",
      "data entry clerk remote",
      "urgently hiring remote",
    ],
  },
  {
    title: "Popular Cities",
    items: [
      "columbus, ga",
      "indianapolis, in",
      "dallas, tx",
      "wilmington, nc",
      "kansas city, mo",
      "houston, tx",
      "baltimore, md",
      "vancouver, wa",
      "knoxville, tn",
    ],
  },
  {
    title: "Popular Companies",
    items: [
      "goodwill",
      "deloitte",
      "cigna work at home",
      "northwell health",
      "walmart",
      "walgreens",
      "teleperformance",
      "microsoft",
      "apple",
      "t mobile",
      "tiktok",
    ],
  },
];

export default function SearchResultMain() {
  return (
    <div className="bg-white w-full h-auto flex flex-col  p-3 items-center">
      <SearchInput />

      {/* background section */}
      <div className="bg-white w-full flex justify-center items-center flex-col">
        <div className=" w-full flex justify-center mt-0 ">
          <img src="/images/indeed.png" />
        </div>
        <h2 className="text-3xl text-black font-bold">
          Your next job starts here
        </h2>
        <div className=" flex justify-center">
          <p className="text-black text-xl p-3 w-full">
            Create an account or sign in to see your personalized job
            recommendations.
          </p>
        </div>
        <div className="mt-5">
          <Link
            href="/get-started"
            className="flex items-center gap-2 bg-[#2557a7] text-white font-semibold px-6 py-3 rounded-xl border transition w-56 justify-center "
          >
            Get started <FaArrowRight />
          </Link>
        </div>

        <div className="mt-14 flex gap-2">
          <Link href="#">
            <span className="text-[#2557a7] font-bold text-l underline">
              Post your resume
            </span>
          </Link>
          <p className="text-normal text-black">-It only takes a few seconds</p>
        </div>
        <Link href="#">
          <span className="text-[#2557a7] font-bold text-lg underline">
            Post a job on Indeed
          </span>
        </Link>
      </div>
      <JobPosts />
      <Joblists />
    </div>
  );
}

//////
const JobPosts = () => {
  return (
    <div className="bg-white w-full mt-14">
      <div className="flex justify-center">
        <hr />
        <p className="text-l fond-normal text-black">
          Indeed helps people get jobs:
        </p>
        <Link href="#">
          <span className="text-l font-normal text-[#2557a7] underline">
            Over 16 million stories shared
          </span>
        </Link>
      </div>
      <div className="flex w-full justify-center mt-3 gap-1">
        <p className="text-normal text-black">
          Indeed también está disponible en{" "}
        </p>
        <Link href="#">
          <span className="text-normal text-[#2557a7] underline">español</span>
        </Link>
      </div>
    </div>
  );
};

const Joblists = () => {
  const [isTrendingOpen, setIsTrendingOpen] = useState(false);
  return (
    <div className="w-full text-black  flex-col items-center  flex justify-center mt-6">
      <button
        className="bg-white lg:w-full h-auto flex items-center gap-4 justify-center"
        onClick={() => setIsTrendingOpen(!isTrendingOpen)}
      >
        <span className="cursor-pointer lg:text-lg">
          What's trending on Indeed
        </span>
        <MdKeyboardArrowDown
          className={!isTrendingOpen ? "rotate-180" : "rotate-none"}
        />
      </button>

      {/* section list */}
      {isTrendingOpen && (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  w-full lg:p-14 sm:p-8">
          {dataLists.map((section, index) => (
            <li key={index} className="text-black ">
              <h2 className="font-bold text-xl mb-3">{section.title}</h2>
              <ul className="space-y-2">
                {section.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-[#2557a7] cursor-pointer underline lg:text-base sm:text-lg"
                  >
                    <Link
                      href={`/job/${item
                        .replace(/[\s,]+/g, "_")
                        .toLowerCase()}`}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

function SearchInput() {
  return (
    <div className="bg-white w-full h-auto flex flex-col  p-3 items-center">
      {/* Search Section */}
      <div
        className="w-full md:w-10/12 lg:w-8/12 h-auto border-1 my-6 border-black bg-white rounded-xl  
      flex flex-col lg:flex-row shadow-sm shadow-gray-900 p-2 lg:items-center lg:gap-4 gap-2"
      >
        {/* Search Input */}
        <div className="flex items-center  w-full gap-3 lg:w-1/2 ">
          <FaSearch className="text-gray-700 text-xl" />
          <input
            type="search"
            name="search"
            placeholder="Job title, keywords, or company"
            className={input_style}
          />
        </div>
        {/* <span className="flex justify-center items-center h-[1px] lg:w-[1px] w-full md:h-8 bg-gray-600"></span> */}
        <span className="bg-gray-600 w-full h-[1px] md:h-8 md:w-[1px] flex just"></span>

        {/* Location Input */}
        <div className="flex items-center gap-2 text-black lg:w-1/2 h-full">
          <FaMapMarkerAlt className="text-black text-lg" />
          <input
            type="search"
            name="location"
            placeholder="London, Greater London"
            className={input_style}
          />
        </div>

        {/* Find Jobs Button */}
        <Link href="#">
          <button className="bg-[#2557a7] text-white p-2 lg:p-4 gap-2 rounded-xl w-full lg:w-28 font-bold">
            Find Jobs
          </button>
        </Link>
      </div>
    </div>
  );
}
