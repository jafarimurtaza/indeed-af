import Image from "next/image";
// import { PiLineVerticalThin } from "react-icons/pi";

export default function Header() {
  return (
    <div className="w-full h-auto p-3 bg-white border-b border-gray-300">
      <div className="flex gap-1.5 justify-between items-center w-full">
        <ul className="flex gap-4 items-center w-full">
          <li>
            <img
              className="w-auto h-16"
              src="/images/indeed.png"
              alt="indded logo"
            />
          </li>
          <li className="relative inline-block">
            <a href="#" className="block border-b-2 border-blue-600 text-black">
              Home
            </a>
          </li>
          <li className="relative inline-block">
            <a
              href="#"
              className="block border-b-2 border-transparent hover:border-blue-600 text-black hover:text-black"
            >
              Company reviews
            </a>
          </li>
          <li className="relative inline-block">
            <a
              href="#"
              className="block border-b-2 border-transparent hover:border-blue-600 text-black hover:text-black"
            >
              Salary guide
            </a>
          </li>
        </ul>
        <div className="flex items-center justify-end px-2 w-[18rem]">
          <ul className="flex gap-4 items-center">
            <li className="relative">
              <a
                href="#"
                className="block border-b-2 border-transparent hover:border-blue-600 text-black hover:text-black"
              >
                Sign in
              </a>
            </li>
            <li>{/* <PiLineVerticalThin /> */}</li>
            <li className="relative">
              <a
                href="#"
                className="block border-b-2 border-transparent hover:border-blue-600 text-black hover:text-black"
              >
                Employers/Post Job
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
