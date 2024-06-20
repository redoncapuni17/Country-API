import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import Filter from "./Filter";

export default function Menu({
  searchedCountry,
  searchCountry,
  setSearchCountry,
  selectedRegion,
  setSelectedRegion,
  darkMode,
}) {
  return (
    <main
      className={`  duration-300 ${
        darkMode &&
        "xl:bg-gray-800 lg:bg-gray-800 md:bg-gray-800 sm:bg-gray-800 bg-gray-800 duration-300"
      }`}
    >
      <div className="2xl:flex xl:flex lg:flex md:flex sm:block xl:justify-between lg:justify-between md:justify-between 2xl:gap-5 xl:gap-5 lg:gap-5 md:gap-5 sm:gap-5 xl:px-20 lg:px-16 md:px-10 sm:px-10 px-5 s py-4 ">
        <Search
          searchCountry={searchCountry}
          setSearchCountry={setSearchCountry}
          darkMode={darkMode}
        />
        <Filter
          selectedRegion={selectedRegion}
          setSelectedRegion={setSelectedRegion}
          darkMode={darkMode}
        />
      </div>
      <div className=" grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-16 xl:px-20 lg:px-16 md:px-10 sm:px-10 px-5 pb-10">
        {searchedCountry.slice(0, 8).map((country) => (
          <li
            key={country.cca3}
            className={`border rounded-md w-72  shadow-md list-none overflow-hidden duration-300  ${
              darkMode &&
              "xl:bg-gray-700 lg:bg-gray-700 md:bg-gray-700 sm:bg-gray-700 bg-gray-700  border border-gray-700 text-white shadow-2xl duration-300"
            }`}
          >
            <Link to={`/country/${country.cca3}`}>
              <img
                src={country.flags.png}
                alt={country.name.common}
                className="shadow-md"
              />
              <div className="p-3">
                <h1 className="font-bold mb-3 mt-3 text-lg">
                  {country.name.common}
                </h1>
                <p className="font-semibold">
                  Population:
                  <span className="font-light">
                    {" "}
                    {country.population.toLocaleString()}
                  </span>
                </p>
                <p className="font-semibold">
                  Region: <span className="font-light">{country.region}</span>
                </p>
                <p className="font-semibold">
                  Capital: <span className="font-light">{country.capital}</span>
                </p>
              </div>
            </Link>
          </li>
        ))}
      </div>
    </main>
  );
}
