import Link from "next/link";
import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaQuestionCircle } from "react-icons/fa";

// Dropdown Component
const Dropdown = ({ label, options }) => (
  <div className="relative group">
    <button className="flex justify-center gap-1 px-4 py-2 bg-[#e4e2e0] text-black rounded-md shadow">
      {label}
      <MdKeyboardArrowDown className="text-xl" />
    </button>
    <ul className="absolute hidden group-hover:block bg-white shadow-md rounded mt-2 z-10">
      {options.map((option, index) => (
        <li key={index} className="px-4 py-2 text-black">
          {option}
        </li>
      ))}
    </ul>
  </div>
);

//  Dropdown data
const dropdownData = [
  {
    label: "Pay",
    options: ["All Salaries", "£25,000+", "£30,000+", "£35,000+", "£40,000+", "£45,000+"],
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
      "Full-time", "part-time", "Temporary", "Apprenticeship", "Internship", "Zero hours contract",
      "Seasonal", "Permanent", "Fixed term contract", "Temp to perm", "Freelance", "Graduate",
      "Volunteer", "Casual contract",
    ],
  },
  {
    label: "Posted By",
    options: ["Employer and Staffing agency", "Employer", "Staffing Agency"],
  },
  {
    label: "Location",
    options: [
      "London", "Manchester", "Remote", "Leeds", "Birmingham",
      "Glasgow", "Newcastle upon Tyne", "Nottingham",
    ],
  },
  {
    label: "Education level",
    options: [
      "Bachelor's degree", "Master's degree", "Certificate of higher education",
      "Doctoral degree", "Foundation degree",
    ],
  },
  {
    label: "Industry",
    options: [
      "Aerospace & Defence", "Arts, Entertainment & Recreation", "Education",
      "Finance", "Healthcare", "Human Resources & Staffing",
      "Insurance", "Management & Consulting",
    ],
  },
  {
    label: "Encouraged to apply",
    options: [
      "Disability confident", "No degree", "No experience needed",
      "Career change", "Back to work", "First job",
    ],
  },
  {
    label: "DatePosted",
    options: [
      "Jobs you haven't seen", "Last 24 hours", "Last 3 days", "Last 7 days", "Last 14 days",
    ],
  },
];

//  Main Component
export default function MainInbound() {
  return (
    <div className="bg-white flex flex-wrap justify-center p-4 gap-4 w-full">
      {dropdownData.map((item, index) => (
        <Dropdown key={index} label={item.label} options={item.options} />
      ))}
      <PostCv/>
    </div>
  );
}

const PostCv = () => {
  return (
    <div className="bg-white w-full flex gap-4 px-7 mt-11">
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

        <div className="bg-white border-2 border-black rounded-sm mt-5 w-full">
          <h1>Inbound Sales & Service Advisor - Fully Remote</h1>
        </div>
      </div>
      {/* second part */}
      <div className="w-full bg-white  border-2 border-black">
        <h1>Inbound Sales & Service Advisor - Fully Remote</h1>
      </div>
    </div>
  );
};
