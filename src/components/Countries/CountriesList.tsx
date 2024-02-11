import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { REST_COUNTRIES_API_ALL } from "../../apiConfig";
import { getApiData } from "../../dataHelpers";
import { CountryData } from "../../types";
import { Search } from "../Search/Search";
import Sort from "../Sort/Sort";
import "./CountriesList.scss";
import Country from "./Country";

const CountriesList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortRegion, setSortRegion] = useState("All");
  const [searchResults, setSearchResults] = useState<Array<CountryData>>([]);

  const {
    isLoading,
    data: countriesList,
  }: { isLoading: boolean; data: Array<CountryData> | undefined } = useQuery({
    queryKey: ["countries"],
    queryFn: () => getApiData(REST_COUNTRIES_API_ALL),
  });

  let listToUse = searchResults.length ? searchResults : countriesList;

  const countryRegions: string[] = [];

  countriesList?.forEach((country) => {
    if (!countryRegions.includes(country.region)) {
      countryRegions.push(country.region);
    }
  });

  const handleSearchSubmit = (value: string) => {
    setSearchQuery(value);
  };

  const handleSort = (region: string) => {
    setSortRegion(region);
  };

  const sortCountriesByRegion = (list: CountryData[] | undefined) => {
    if (sortRegion === "All") {
      return list;
    }

    return list?.filter((country) => {
      return country.region.toLowerCase() === sortRegion.toLowerCase();
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
              />
            );
          })}
      </div>
    </div>
  );
};

export default CountriesList;
