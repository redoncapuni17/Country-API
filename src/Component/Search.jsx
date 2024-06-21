import React from "react";
import { CiSearch } from "react-icons/ci";

export default function Search({ searchCountry, setSearchCountry, darkMode }) {
  return (
    <div
      className={`border flex items-center gap-3 pl-5 mb-4 rounded-md shadow-md overflow-hidden duration-300  ${
        darkMode
          ? "xl:bg-gray-700 lg:bg-gray-700 md:bg-gray-700 sm:bg-gray-700 bg-gray-700  border border-gray-700 text-white shadow-2xl duration-300"
          : "bg-white"
      }`}
    >
      <CiSearch />
      <input
        value={searchCountry}
        onChange={(e) => setSearchCountry(e.target.value)}
        className={`p-2 w-96 duration-300 outline-none  ${
          darkMode
            ? "xl:bg-gray-700 lg:bg-gray-700 md:bg-gray-700 sm:bg-gray-700 bg-gray-700 text-white duration-300"
            : "bg-white"
        }`}
        placeholder="Search for a country"
      />
    </div>
  );
}
