import { useQuery } from "@tanstack/react-query";
import { REST_COUNTRIES_API_ALL } from "../../apiConfig";
import { getApiData } from "../../dataHelpers";
import { CountryData } from "../../types";
import "./CountriesList.scss";
import Country from "./Country";

const CountriesList = () => {
  const { isLoading, data: countriesList } = useQuery({
    queryKey: ["countries"],
    queryFn: () => getApiData(REST_COUNTRIES_API_ALL),
  });

  return (
    <div
      className="countries-list"
      style={{ paddingTop: "var(--headerHeight)" }}
    >
      {!isLoading &&
        (countriesList as Array<CountryData>).map((country) => {
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
