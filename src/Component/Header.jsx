import React from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { useNavigate } from "react-router-dom";
export default function Header({ handleDarkMode, darkMode }) {
  const navigate = useNavigate();
  return (
    <header
      className={`flex justify-between border-b xl:px-20 lg:px-16 md:px-10 sm:px-10 px-5 py-4 bg-white shadow-sm duration-300  ${
        darkMode &&
        "bg-gray-700 text-white border-b border-gray-700 shadow-2xl duration-300"
      }`}
    >
      <h1
        onClick={() => navigate("/")}
        className="font-bold  cursor-pointer xl:text-lg lg:text-lg md:text-base "
      >
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
