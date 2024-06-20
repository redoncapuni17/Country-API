import React from "react";

export default function Filter({
  selectedRegion,
  setSelectedRegion,
  darkMode,
}) {
  return (
    <select
      value={selectedRegion}
      onChange={(e) => setSelectedRegion(e.target.value)}
      className={`border p-3 mb-4 rounded-md shadow-md duration-300  ${
        darkMode &&
        "xl:bg-gray-700 lg:bg-gray-700 md:bg-gray-700 sm:bg-gray-700 bg-gray-700 border border-gray-700 text-white shadow-2xl duration-300"
      }`}
    >
      <option value="Filter by Region">Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
}
