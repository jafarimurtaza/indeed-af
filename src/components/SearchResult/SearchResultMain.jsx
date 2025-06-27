import React, { useState } from "react";
import { FaArrowRight, FaSearch, FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";

function JobsPost() {
  return (
    <div className="bg-white w-full">
      <div className="bg-white flex justify-center gap-2 p-2 text-2xl font-bold text-blue-800">
        <Link href="/#" className="underline">
          Upload your CV
        </Link>
        <p className="font-semibold text-xl text-black">
          - It only takes a few seconds
        </p>
      </div>
      <div className="bg-white flex justify-center text-2xl  mt-3 underline text-blue-800 font-bold">
        <Link href="/#">Post a job on Indeed</Link>
      </div>
    </div>
  );
}

function JobsLists() {
  return (
    <div className="w-full text-2xl text-black flex flex-col justify-center items-center">
      <Link href="#">
        <button type="button" className="bg-amber-500 w-full h-auto mt-6">
          What's trending on Indeed
        </button>
      </Link>
      <div className="bg-white w-full text-xl font-bold text-black mt-8 flex justify-start pl-5 gap-4">
        <div className="w-full">
          <h2>Trending searches</h2>
          <ul className="bg-white  text-blue-700 underline mt-5">
            <Link href="#" className="flex flex-col gap-5 font-medium">
              <li>castle donington de74</li>
              <li>sponsorship available</li>
              <li>abbotts ann sp11</li>
              <li>maghull l31</li>
              <li>whoberley cv1</li>
            </Link>
          </ul>
        </div>
        <div className="w-full">
          <h2>Trending jobs</h2>
          <ul className="bg-white  text-blue-700 underline mt-7">
            <Link href="#" className="flex flex-col gap-5 font-medium">
              <li>content creator remote</li>
              <li>retail london</li>
              <li>fully remote remote</li>
              <li>part time england</li>
              <li>finance remote</li>
              <li>full time bristol</li>
              <li>administration remote</li>
              <li>project manager remote</li>
              <li>communications remote</li>
              <li>part time remote</li>
              <li>graphic design remote</li>
            </Link>
          </ul>
        </div>
        <div className="w-full">
          <h2>Popular cities</h2>
          <ul className="bg-white  text-blue-700 underline mt-7">
            <Link href="#" className="flex flex-col gap-5 font-medium">
              <li>slough</li>
              <li>london</li>
              <li>carlisle</li>
              <li>stafford</li>
              <li>wrexham</li>
              <li>birmingham</li>
              <li>halifax telford</li>
              <li>derby</li>
              <li>cardiff</li>
              <li> glasgow</li>
              <li>tamworth</li>
              <li> chester</li>
              <li> newport</li>
              <li> bournemouth</li>
              <li> exeter</li>
              <li>blackpool</li>
              <li> croydon </li>
            </Link>
          </ul>
        </div>
        <div className="w-full">
          <h2>Popular companies</h2>
          <ul className="bg-white  text-blue-700 underline mt-7">
            <Link href="#" className="flex flex-col gap-5 font-medium ">
              <li>pets at home</li>
              <li>holland %26 </li>
              <li>h%26m</li>
              <li>salesforce</li>
              <li>whsmith</li>
              <li>currys</li>
              <li>iss facility services</li>
              <li>the range</li>
              <li>barrett</li>
              <li> asda</li>
              <li> b%26m</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function SearchResultMain() {
  return (
    <div className="bg-white w-full h-auto flex flex-col items-center">
      {/* Search Section */}
      <div className="w-8/12  h-auto   border-1 my-6 border-black bg-white rounded-2xl flex items-center justify-between shadow-sm shadow-gray-900 p-2">
        {/* Search Input */}
        <div className="flex items-center  w-full gap-3  lg:w-1/2 ">
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
        <div className="flex items-center gap-2 text-black w-1/2 lg:w-1/2">
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
          <button className="bg-blue-700 text-white p-4 rounded-xl hover:bg-green-800 w-32 ml-4 font-bold">
            Find Jobs
          </button>
        </Link>
      </div>
      {/* background section */}
      <div className="w-full bg-[#EEF1FF] pt-5 flex justify-center">
        <img
          src="/images/img.jpg"
          className="w-auto  h-[300px] object-contain"
        />
      </div>
      {/* welocome site */}
      <div className="bg-white w-full min-h-screen flex flex-col  p-8">
        <h1 className="text-black font-bold text-3xl mb-4 flex justify-center">
          Welcome to Indeed!
        </h1>
        <p className="text-center text-2xl text-black">
          Create an account or sign in to see your personalised job
          recommendations.
        </p>
        <div className="flex justify-center items-center p-6">
          <Link
            href="/#"
            className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg border border-white flex items-center gap-2"
          >
            Get started
            <FaArrowRight />
          </Link>
        </div>
        <JobsPost />
        <JobsLists />
      </div>
    </div>
  );
}
