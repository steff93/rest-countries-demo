import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useCountriesData from "../../hooks/useCountriesData";
import { CountryData, Region } from "../../types";
import { Search } from "../Search/Search";
import Sort from "../Sort/Sort";
import "./CountriesList.scss";
import Country from "./Country";

const CountriesList = ({
  getCountryData,
}: {
  getCountryData: (data: CountryData) => void;
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortRegion, setSortRegion] = useState<Region>("All");
  const [searchResults, setSearchResults] = useState<Array<CountryData>>([]);
  const { isLoading, countriesList } = useCountriesData();
  const navigate = useNavigate();

  let listToUse = searchResults.length ? searchResults : countriesList;
  const countryRegions: Region[] = [];

  countriesList?.forEach((country) => {
    if (!countryRegions.includes(country.region)) {
      countryRegions.push(country.region);
    }
  });

  const handleSearchSubmit = (value: string) => {
    setSearchQuery(value);
  };

  const handleCountryClick = (countryData: CountryData) => {
    getCountryData(countryData);
    navigate(`/rest-countries-demo/${countryData.name.common}`);
  };

  const handleSort = (region: Region) => {
    setSortRegion(region);
  };

  const sortCountriesByRegion = (list: CountryData[] | undefined) => {
    if (sortRegion === "All") {
      return list;
    }

    return list?.filter((country) => {
      return country.region === sortRegion;
    });
  };

  listToUse = sortCountriesByRegion(listToUse);

  useEffect(() => {
    const results = countriesList?.filter((country) => {
      return country.name.common
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
    });

    if (results) setSearchResults(results);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  return (
    <div className="countries" style={{ paddingTop: 100 }}>
      <div className="results-actions">
        <Search onSearchSubmit={handleSearchSubmit} />
        <Sort onSort={handleSort} regions={countryRegions} />
      </div>
      <div className="countries-list">
        {!isLoading &&
          listToUse &&
          listToUse.map((country) => {
            return (
              <Country
                flag={country.flags.png}
                title={country.name.common}
                population={country.population}
                region={country.region}
                capital={country.capital}
                key={country.area + country.name.common}
                onClick={() => handleCountryClick(country)}
              />
            );
          })}
      </div>
    </div>
  );
};

export default CountriesList;
