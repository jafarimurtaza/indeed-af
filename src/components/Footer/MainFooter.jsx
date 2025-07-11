import React from "react";

// const datafOOterLists=[
//     {
//         items:[
//             'Hiring Lab',
//             'Career advice',
//             'Browse jobs',
//             'Browse companies',
//             'Salaries',
//             'Indeed Events',
//             'Work at Indeed',
//             'Countries',
//             'About',
//             'Help',
//             'ESG at Indeed',
//             'Post a job'

//         ],
//     },
//     {
//         items:[
//             'Anti-Slavery statement',
//             'Accessibility at Indeed',
//             'Privacy Centre and Ad Choices',
//             'Terms'
//         ],
//     }
// ]

export default function MainFooter() {
  return (
    <div className="bg-amber-200 w-full">
      <ul className="flex gap-8 p-3 text-black mt-4 font-medium cursor-pointer hover:underline">
        <li>Hiring Lab</li>
        <li>Career advice</li>
        <li>Browse jobs</li>
        <li>Browse companies</li>
        <li>Salaries</li>
        <li>Work at Indeed</li>
        <li>Countries</li>
        <li>About</li>
        <li>Help</li>
        <li>ESG at Indeed</li>
      </ul>
      <div className="flex text-black">
        <p>© 2025 Indeed</p>
        <ul className="flex gap-8 p-3 text-black cursor-pointer hover:underline">
          <li>Anti-Slavery statement</li>
          <li>Accessibility at Indeed</li>
          <li>Privacy Centre and Ad Choices</li>
          <li>Terms</li>
        </ul>
      </div>
    </div>
  );
}
