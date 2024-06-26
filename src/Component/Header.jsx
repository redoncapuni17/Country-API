import React from "react";
import { MdOutlineDarkMode } from "react-icons/md";
export default function Header({ handleDarkMode, darkMode }) {
  return (
    <header
      className={`flex justify-between border-b xl:px-20 lg:px-16 md:px-10 sm:px-10 px-5 py-4   duration-300   ${
        darkMode
          ? "xl:bg-gray-700 lg:bg-gray-700 md:bg-gray-700 sm:bg-gray-700 bg-gray-700  text-white border-b border-gray-700  shadow-2xl duration-300"
          : "bg-white shadow-lg"
      }`}
    >
      <h1 className="font-bold cursor-default xl:text-lg lg:text-lg md:text-base ">
        Where is the world?{" "}
      </h1>
      <p
        onClick={handleDarkMode}
        className="flex items-center gap-2 cursor-pointer xl:text-lg lg:text-lg md:text-base"
      >
        <MdOutlineDarkMode />
        Dark Mode
      </p>
    </header>
  );
}
