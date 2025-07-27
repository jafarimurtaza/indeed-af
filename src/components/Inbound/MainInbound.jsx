import Link from "next/link";
import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaQuestionCircle } from "react-icons/fa";
import { BsBookmark } from "react-icons/bs";

const BUTTON_STYLE = "bg-[#e4e2e0] p-2 rounded-sm ";

//  Dropdown data
const dropdownData = [
  {
    label: "Pay",
    options: [
      "All Salaries",
      "£25,000+",
      "£30,000+",
      "£35,000+",
      "£40,000+",
      "£45,000+",
    ],
  },
  {
    label: "Remote",
    options: ["All jobs", "Hybrid work", "Remote"],
  },
  {
    label: "Company",
    options: [
      "All companies",
      "Origin Multilingual",
      "KPMG",
      "Spicerhaart Group Services Limited",
      "Amazon.com",
      "Stericycle",
      "PwC",
      "Fresha",
      "NFU Mutual",
    ],
  },
  {
    label: "Job type",
    options: [
      "Full-time",
      "part-time",
      "Temporary",
      "Apprenticeship",
      "Internship",
      "Zero hours contract",
      "Seasonal",
      "Permanent",
      "Fixed term contract",
      "Temp to perm",
      "Freelance",
      "Graduate",
      "Volunteer",
      "Casual contract",
    ],
  },
  {
    label: "Posted By",
    options: ["Employer and Staffing agency", "Employer", "Staffing Agency"],
  },
  {
    label: "Location",
    options: [
      "London",
      "Manchester",
      "Remote",
      "Leeds",
      "Birmingham",
      "Glasgow",
      "Newcastle upon Tyne",
      "Nottingham",
    ],
  },
  {
    label: "Education level",
    options: [
      "Bachelor's degree",
      "Master's degree",
      "Certificate of higher education",
      "Doctoral degree",
      "Foundation degree",
    ],
  },
  {
    label: "Industry",
    options: [
      "Aerospace & Defence",
      "Arts, Entertainment & Recreation",
      "Education",
      "Finance",
      "Healthcare",
      "Human Resources & Staffing",
      "Insurance",
      "Management & Consulting",
    ],
  },
  {
    label: "Encouraged to apply",
    options: [
      "Disability confident",
      "No degree",
      "No experience needed",
      "Career change",
      "Back to work",
      "First job",
    ],
  },
  {
    label: "DatePosted",
    options: [
      "Jobs you haven't seen",
      "Last 24 hours",
      "Last 3 days",
      "Last 7 days",
      "Last 14 days",
    ],
  },
];

// Dropdown Component
const Dropdown = ({ label, options }) => (
  <div className="relative group flex">
    <button className="flex justify-center gap-1 px-4 py-2 bg-[#e4e2e0] text-black rounded-md shadow">
      {label}
      <MdKeyboardArrowDown className="text-xl" />
    </button>
    <ul className="absolute hidden group-hover:block bg-white shadow-md rounded mt-2 z-10 ">
      {options.map((option, index) => (
        <li key={index} className="px-4 py-2 text-black">
          {option}
        </li>
      ))}
    </ul>
  </div>
);

//  Main Component
export default function MainInbound() {
  return (
    <div className="bg-white flex flex-wrap justify-center p-4 gap-4 w-full">
      {dropdownData.map((item, index) => (
        <Dropdown key={index} label={item.label} options={item.options} />
      ))}
      <PostLists/>
    </div>
  );
}

const PostLists = () => {
  return (
    <div className="bg-white w-full flex gap-4 px-7 mt-11">
      <div className="w-1/2">
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
            Sort by: relevance
            <Link href="#">
              <span className="text-[#2557a7]">- date</span>
            </Link>
          </p>
          <div className="flex">
            <p className="flex items-center gap-2 text-black font-normal">
              3,000+ jobs
              <FaQuestionCircle
                size={18}
                className="text-gray-500 cursor-pointer"
              />
            </p>
          </div>
        </div>
        {/* second section */}

        <div className="bg-white border-2 border-black rounded-sm mt-5 w-full">
          <Link href="#">
            <h2 className="text-xl font-bold text-black hover:underline  p-3 flex gap-52">
              Inbound Sales & Service Advisor - Fully Remote
              <BsBookmark/>
            </h2>

            <div className="text-black p-3 flex flex-col">
              <h3>Talent Tent </h3>
              <h3>Remote in Cardiff CF24 0ED</h3>
              <div className="flex gap-2 mt-4">
                <Link href="#" className={BUTTON_STYLE}>
                  Company Pension
                </Link>
                <Link href="#" className={BUTTON_STYLE}>
                  Work from Home
                </Link>
              </div>
            </div>
          </Link>
        </div>
        {/* second section */}
        <div className="bg-white border-2 border-black rounded-sm mt-5 w-full">
          <Link href="#">
            <h2 className="text-xl font-bold text-black underline p-3 flex gap-52 ">
              Customer Sales Advisor - Customer Support Sales (Remote & Hybrid)
              <BsBookmark/>
            </h2>
            <div className="text-black p-3">
              <h3>Domestic & General </h3>
              <h3>Remote</h3>
            </div>
            <h3 className="text-[#2557a7] underline p-4 pl-4">View similar jobs with this employer</h3>
          </Link>
        </div>
        {/* third section */}
      <div className="bg-white border-2 border-black rounded-sm mt-5 w-full">
        <Link href="#">
        <h2 className="text-xl font-bold text-black hover:underline p-3 flex gap-52">
          Inbound Sales Advisor Work At Home
           <BsBookmark/>
        </h2>
        <div className="text-black p-3">
              <h3>Domestic & General </h3>
              <h3>Remote</h3>
            </div>
        </Link>
      </div>

        {/* second part */}
        {/* <div className="w-full bg-white  border-2 border-black rounded-2xl">
        <h1>Inbound Sales & Service Advisor - Fully Remote</h1>
      </div> */}
      </div>
    </div>
  );
};
