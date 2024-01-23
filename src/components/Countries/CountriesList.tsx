import { useEffect, useState } from "react";
import { REST_COUNTRIES_API_ALL } from "../../apiConfig";
import { getApiData } from "../../dataHelpers";
import { CountryData } from "../../types";
import "./CountriesList.scss";
import Country from "./Country";

const CountriesList = () => {
  const [countriesList, setCountriesList] = useState<Array<CountryData>>([]);

  useEffect(() => {
    getApiData(REST_COUNTRIES_API_ALL).then((response) =>
      setCountriesList(response)
    );
  }, []);

  return (
    <div
      className="countries-list"
      style={{ paddingTop: "var(--headerHeight)" }}
    >
      {countriesList.length &&
        countriesList.map((country) => {
          return (
            <Country
              flag={country.flags.png}
              title={country.name.common}
              population={country.population}
              region={country.region}
              capital={country.capital}
              key={country.area + country.name.common}
            />
          );
        })}
    </div>
  );
};

export default CountriesList;
