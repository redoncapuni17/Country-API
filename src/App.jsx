import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Component/Header";
import Menu from "./Component/Menu";
import CountryItem from "./Component/CountryItem";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [countries, setCountries] = useState([]);
  const [searchCountry, setSearchCountry] = useState("");
  const [searchedCountry, setSearchedCountry] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("Filter by Region");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const fetchCountryData = async () => {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      setCountries(response.data);
    };

    fetchCountryData();
  }, []);

  useEffect(() => {
    let filteredCounties = countries;

    if (selectedRegion !== "Filter by Region") {
      filteredCounties = filteredCounties.filter(
        (country) => country.region === selectedRegion
      );
    }

    const searchedData = filteredCounties.filter((data) =>
      data.name.common.toLowerCase().includes(searchCountry.toLowerCase())
    );
    setSearchedCountry(searchedData);
  }, [countries, searchCountry, selectedRegion]);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className="flex flex-col">
        <Header handleDarkMode={handleDarkMode} darkMode={darkMode} />

        <Routes>
          <Route
            path="/"
            element={
              <Menu
                searchedCountry={searchedCountry}
                searchCountry={searchCountry}
                setSearchCountry={setSearchCountry}
                selectedRegion={selectedRegion}
                setSelectedRegion={setSelectedRegion}
                darkMode={darkMode}
              />
            }
          />
          <Route
            path="/country/:cca3"
            element={<CountryItem countries={countries} darkMode={darkMode} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
