import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function Button({ darkMode }) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/")}
      className={`flex justify-center items-center gap-2 rounded-md shadow-md px-4 py-1 border border-gray-300 bg-white hover:bg-gray-100 duration-300 ${
        darkMode &&
        "bg-gray-600 border border-gray-700 shadow-2xl hover:bg-gray-600 text-white duration-300"
      }`}
    >
      <IoIosArrowRoundBack className="text-xl" />
      Back
    </button>
  );
}
