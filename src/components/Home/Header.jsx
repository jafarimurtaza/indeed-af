import Image from "next/image";
// import { PiLineVerticalThin } from "react-icons/pi";
export default function Header() {
  return (
    <div className="bg-green-600 w-full h-auto p-3">
      <div className="flex gap-1.5 justify-between items-center w-full bg-blue-700">
        <ul className="flex gap-4 bg-amber-500 items-center w-full pt-7">
          <li>
            <img className="w-[7rem] h-[7rem]" src="/images/indeed.png" alt="indded logo" />
          </li>
          <li className="relative inline-block">
            <a
              href="#"
              className="block pb-6 border-b-2 border-blue-600 text-black"
            >
              Home
            </a>
          </li>
          <li className="relative inline-block">
            <a
              href="#"
              className="block pb-6 border-b-2 border-transparent hover:border-blue-600 text-black hover:text-black"
            >
              Company reviews
            </a>
          </li>
          <li className="relative inline-block">
            <a
              href="#"
              className="block pb-6 border-b-2 border-transparent hover:border-blue-600 text-black hover:text-black"
            >
              Salary guide
            </a>
          </li>
        </ul>
        <div className="flex items-center justify-end bg-cyan-100 px-2">
          <ul className="flex gap-4 items-center pt-7">
            <li className="relative">
              <a
                href="#"
                className="block pb-6 border-b-2 border-transparent hover:border-blue-600 text-black hover:text-black"
              >
                Sign in
              </a>
            </li>
            <li>
              {/* <PiLineVerticalThin /> */}
            </li>
            <li className="relative">
              <a
                href="#"
                className="block pb-6 border-b-2 border-transparent hover:border-blue-600 text-black hover:text-black"
              >
                Employers/Post Job
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="border-t border-gray-300 mt-0" />
    </div>
  );
}
