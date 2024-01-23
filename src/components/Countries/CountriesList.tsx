import { useEffect, useState } from "react";
import "./CountriesList.scss";
import Country from "./Country";

const API_URL = "https://restcountries.com/v3.1/all";

const CountriesList = () => {
  const [countriesList, setCountriesList] = useState<Array<any>>([]);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCountriesList(data);
      });
  }, []);

  return (
    <div
      className="countries-list"
      style={{ paddingTop: "var(--headerHeight)" }}
    >
      {countriesList.map((country) => {
        return (
          <Country
            flag={country.flags.png}
            title={country.name.common}
            population={country.population}
            region={country.region}
            capital={country.capital}
            key={country.area}
          />
        );
      })}
    </div>
  );
};

export default CountriesList;
