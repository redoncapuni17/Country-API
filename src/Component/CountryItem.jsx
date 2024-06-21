import React from "react";
import { useParams } from "react-router-dom";
import Button from "./Button";

export default function CountryItem({ countries, darkMode }) {
  const { cca3 } = useParams();
  const country = countries.find((country) => country.cca3 === cca3);

  if (!country) {
    return <div>Country not found</div>;
  }

  // Dynamically extract native name
  const nativeNameKey = Object.keys(country.name.nativeName)[0];
  const nativeName = country.name.nativeName[nativeNameKey].common;
  const currencies = Object.values(country.currencies)[0]?.symbol;
  const language = Object.values(country.languages)
    .map((language) => language)
    .join(", ");

  return (
    <main
      className={`xl:h-screen lg:h-screen md:h-screen sm:h-screen h-screen overflow-auto pb-28 ${
        darkMode
          ? "xl:bg-gray-800 lg:bg-gray-800 md:bg-gray-800 sm:bg-gray-800 bg-gray-800 text-white duration-300"
          : "bg-gray-100 duration-300"
      }`}
    >
      <div className="flex xl:px-20 lg:px-16 md:px-10 sm:px-10 px-5 mt-5 mb-10">
        <Button darkMode={darkMode} />
      </div>

      <div className="flex flex-col lg:flex-row justify-between xl:px-20 lg:px-16 md:px-10 sm:px-10 px-5">
        <img
          src={country.flags.png}
          alt={country.name.common}
          className="w-full lg:w-2/5 h-64 sm:h-72 md:h-80 lg:h-96"
        />
        <div className="flex flex-col justify-center gap-10 w-full lg:w-3/6 mt-10 lg:mt-0">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-44 items-start lg:items-center">
            <section>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold pb-5">
                {country.name.common}
              </h1>
              <p className="font-semibold">
                Native Name: <span className="font-light">{nativeName}</span>
              </p>
              <p className="font-semibold">
                Population:{" "}
                <span className="font-light">
                  {country.population.toLocaleString()}
                </span>
              </p>
              <p className="font-semibold">
                Region: <span className="font-light">{country.region}</span>
              </p>
              <p className="font-semibold">
                Sub Region:{" "}
                <span className="font-light">{country.subregion}</span>
              </p>
              <p className="font-semibold">
                Capital: <span className="font-light">{country.capital}</span>
              </p>
            </section>
            <section>
              <p className="font-semibold">
                Top Level Domain:{" "}
                <span className="font-light">{country.tld}</span>
              </p>
              <p className="font-semibold">
                Currencies: <span className="font-light">{currencies}</span>
              </p>
              <p className="font-semibold">
                Language: <span className="font-light">{language}</span>
              </p>
            </section>
          </div>
          <div className="flex flex-col lg:flex-row items-start lg:items-center">
            <p className="font-semibold">Border Countries:</p>
            <div className=" grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 gap-2 lg:gap-4 ml-0 lg:ml-2 mt-2 lg:mt-0 ">
              {country.borders &&
                country.borders.map((border) => (
                  <li
                    className={`list-none px-7 py-2  border rounded-md shadow-sm cursor-pointer flex justify-center  ${
                      darkMode
                        ? "xl:bg-gray-700 lg:bg-gray-700 md:bg-gray-700 sm:bg-gray-700 bg-gray-700 hover:bg-gray-600 border border-gray-800 shadow-2xl text-white duration-300"
                        : "bg-white duration-300 hover:bg-gray-100"
                    }`}
                    key={border}
                  >
                    {border}
                  </li>
                ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
