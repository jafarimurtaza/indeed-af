import React from "react";
import Header from "@/components/Home/Header";
import HandleCookie from "@/components/Cookies/HandleCookie";

export default function Home() {
  return (
    <div className="!bg-white text-gray-500 min-h-screen">
      <h1>Home page</h1>
      <HandleCookie />
    </div>
  );
}
