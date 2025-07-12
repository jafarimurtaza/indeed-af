
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
    <div className="bg-white w-full text-black p-6 ">

      {footerLists.map((lists ,index)=>(
        <ul key={index} className="flex flex-wrap justify-start  gap-8 mb-6 mt-5">
            {lists.items.map((item ,inx)=>(
                    <li key={inx}>
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
