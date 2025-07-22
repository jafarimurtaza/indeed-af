import Link from "next/link";
import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaQuestionCircle } from "react-icons/fa";
export default function MainInbound() {
  return (
    <div className="bg-amber-500 flex justify-center py-10 gap-4">
      {/* <SearchInput/> */}
      {/* Dropdown 1 */}
     <div className="relative group">
        <button className="flex justify-center gap-1 px-4 py-2 bg-white text-black rounded-md shadow">
          Pay
          <MdKeyboardArrowDown className="text-xl" />
        </button>

        <ul
          className="absolute left-0 mt-2 w-40 bg-white text-black rounded-md shadow-lg 
                   opacity-0 group-hover:opacity-100 invisible group-hover:visible 
                   transition-all duration-300 z-10"
        >
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
            All Salaries
          </li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
            £25,000+
          </li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
            £30,000+
          </li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
            £35,000+
          </li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
            £40,000+
          </li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
            £45,000+
          </li>
        </ul>
      </div> 

      {/* Dropdown 2 */}
     <div className="relative group">
        <button className="flex justify-center gap-1 px-4 py-2 bg-white text-black rounded-md shadow">
          Remote
          <MdKeyboardArrowDown className="text-xl" />
        </button>

        <ul
          className="absolute left-0 mt-2 w-40 bg-white text-black rounded-md shadow-lg 
                   opacity-0 group-hover:opacity-100 invisible group-hover:visible 
                   transition-all duration-300 z-10"
        >
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
            All jobs
          </li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
            Hybrid work
          </li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Remote</li>
        </ul>
      </div> 
      {/* Dropdown 3 */}
       <div className="relative group">
        <button className="flex justify-center gap-1 px-4 py-2 bg-white text-black rounded-md shadow">
          Company
          <MdKeyboardArrowDown className="text-xl" />
        </button>

        <ul
          className="absolute left-0 mt-2 w-40 bg-white text-black rounded-md shadow-lg 
                   opacity-0 group-hover:opacity-100 invisible group-hover:visible 
                   transition-all duration-300 z-10"
        >
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
            All companies
          </li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
            Origin Multilingual
          </li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">KPMG</li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
            Spicerhaart Group Services Limited
          </li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
            Amazon.com
          </li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
            Stericycle
          </li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">PwC</li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Fresha</li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
            NFU Mutual
          </li>
        </ul>
      </div>

      <PostCv />
    </div>
  );
}
const PostCv = () => {
  return (
    <div className="bg-white w-full flex gap-4 px-7">
      <div className="w-2/5">
        <div className="flex ">
          <Link href="#">
            <span className="text-[#2557a7] font-normal">Post your CV</span>
          </Link>
          <p className="text-black font-normal">
            and find your next job on Indeed!
          </p>
        </div>
        <hr />
        <div className="p-5">
          <p>inbound jobs</p>
        </div>
        <div className="flex gap-48">
          <p className="text-black">
            Sort by: relevance{" "}
            <Link href="#">
              <span className="text-[#2557a7]">- date</span>
            </Link>
          </p>
          <div className="flex">
            <p className="flex items-center gap-2">
              3,000+ jobs
              <FaQuestionCircle
                size={18}
                className="text-gray-500 cursor-pointer"
              />
            </p>
          </div>
          
        </div>
        {/* second section */}

        <div className="bg-amber-700 border-2 border-black rounded-sm mt-5 w-full">
            <h1>Inbound Sales & Service Advisor - Fully Remote</h1>

          </div>
      </div>
      {/* second part */}
      <div className="w-4/5 bg-blue-400  border-2 border-black">
        <h1>Inbound Sales & Service Advisor - Fully Remote</h1>
      </div>
    </div>
  );
};
