import React from "react";

export default function HandleCookie() {
  const buttonStyle =
    "bg-blue-900 w-full md:h-14 h-12 rounded-[0.3rem] p-2 hover:cursor-pointer hover:bg-blue-800 text-white font-bold";
  return (
    <div className="bg-indigo-100 w-full h-auto gap-3 flex lg:flex-row flex-col px-6 py-4">
      <p className="text-black text-[1.3rem]">
        we use cookies to personalize content and ads, analyze traffic and
        improve our sevies.we alsouse essential to inform employers of click to
        their jobs.yuo ackowlegmentthat your use of indeed is subject tp our
        update privacy policy, Cookie policy , and Terms which we encourage you
        to review.
      </p>
      <div className="flex flex-col md:flex-row w-full items-center gap-5">
        <button className={buttonStyle}>Cookie settings</button>
        <button className={buttonStyle}>Reject All</button>
        <button className={buttonStyle}>Accept All Cookie</button>
      </div>
    </div>
  );
}
