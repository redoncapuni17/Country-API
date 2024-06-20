import React from "react";
import { CiSearch } from "react-icons/ci";

export default function Search({ searchCountry, setSearchCountry, darkMode }) {
  return (
    <div
      className={`border flex items-center gap-3 pl-5 mb-4 rounded-md shadow-md overflow-hidden  bg-white  duration-300  ${
        darkMode &&
        "bg-gray-600 border border-gray-700 text-white shadow-2xl duration-300"
      }`}
    >
      <CiSearch />
      <input
        value={searchCountry}
        onChange={(e) => setSearchCountry(e.target.value)}
        className={`p-2 w-96 duration-300  ${
          darkMode && "bg-gray-600 text-white duration-300"
        }`}
        placeholder="Search for a country"
      />
    </div>
  );
}
