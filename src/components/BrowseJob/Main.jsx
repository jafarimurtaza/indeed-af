import Link from "next/link";
import React from "react";
const browseJob = [
  {
    title: "Company By letter",
    Alphabets: [
      "A",
      "B",
      "D",
      "C",
      "E",
      "G",
      "F",
      "H",
      "I",
      "J",
      "L",
      "K",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ],
  },
  {
    title: "Company By Tittle",
    Alphabets: [
      "A",
      "B",
      "D",
      "C",
      "E",
      "G",
      "F",
      "H",
      "I",
      "J",
      "L",
      "K",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ],
  },
];
const jobsByLocationAndCategory = [
  {
    title: "Jobs By Location",
    items: [
      "British Overseas Territoris",
      "Scotland",
      "England",
      "Wales",
      "Northren Ireland",
    ],
  },
  {
    title: "Jobs By Category",
    items: [
      "Accounting",
      "Administritive Assistance",
      "Agriculture and forestry",
      "Archticture",
      "Arts and entertenement",
      "Aviation",
      "Banking and fineces",
      "Beauty and wellness",
      "Chimichal Engineering",
      "ChildCare",
      "Civil Engineering",
      "Customer Service",
      "Dental",
      "Driving",
      "Education & Instruction",
      "Electrical Engineering",
      "Hospitality & Tourism",
      "Human Resources",
      "Industrial Engineering",
      "Information Design & Documentation",
      "Installation & Maintenance",
      "Insurance",
      "Legal",
      "Loading and Stocking",
      "Logistic Support",
      "Management",
      "Marketing",
      "Mathematics",
      "Military",
      "Mining",
      "Nursing",
      "Personal Care & Home Health",
      "Pharmacy",
      "Physicians & Surgeons",
      "Production & Manufacturing",
      "Project Management",
      "Real Estate",
      "Retail",
      "Sales",
      "Scientific Research & Development",
      "Security & Public Safety",
      "Social Science",
      "Software Development",
      "Sports",
      "Therapy",
      "Veternairy",
    ],
  },
];

export default function Main() {
  return (
    <div className="bg-white container mx-auto px-4 flex justify-center">
      <main>
        <h1 className="text-black text-3xl font-bold py-8">Browse Job</h1>
        {browseJob.map((item, index) => {
          return (
            <div key={index}>
              <h2 className="text-black font-semibold">{item.title}</h2>
              <ul className="text-[#2557A7] text-[0.90rem] pb-12 flex flex-wrap py-3 justify-start items-center gap-7 ">
                {item.Alphabets.sort().map((value, index) => {
                  return (
                    <li key={index}>
                      <Link href="#">{value}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
        <ul>
          {jobsByLocationAndCategory.map((item, index) => {
            return (
              <li className="pb-12" key={index}>
                <h2 className="text-black font-semibold">{item.title}</h2>
                <ul className="grid grid-cols-3 text-[#2557A7] pb-12">
                  {item?.items?.map((value, index) => {
                    return (
                      <li className="hover:underline pb-4" key={index}>
                        <Link href="#">{value}</Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
}
