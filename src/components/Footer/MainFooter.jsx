
import React from "react";
import Link from "next/link";

const footerLists = [
  {
    items: [
      "Hiring Lab",
      "Career advice",
      "Browse jobs",
      "Browse companies",
      "Salaries",
      "Indeed Events",
      "Work at Indeed",
      "Countries",
      "About",
      "Help",
      "ESG at Indeed",
      "Post a job",
    ],
  },
  {
    items: [
      "© 2025 Indeed",
      "Anti-Slavery statement",
      "Accessibility at Indeed",
      "Privacy Centre and Ad Choices",
      "Terms",
    ],
  },
];

export default function MainFooter() {
  return (
    <div className="bg-white w-full text-black p-6 px-4 py-6 ">

      {footerLists.map((lists ,index)=>(
        <ul key={index} className="flex flex-wrap lg:justify-center gap-8 mt-5 sm:justify-start gap-x-6 gap-y-4 mb-6">
            {lists.items.map((item ,inx)=>(
                    <li key={inx} className="text-sm sm:text-base">
              <Link
                href={`/searchresult/${item.replace(/[\s,]+/g, "_").toLowerCase()}`}
                className="text-normal hover:underline text-black"
              >
                {item}
              </Link>
            </li>
            ))}
        </ul>
      ))}
    </div>
  );
}
