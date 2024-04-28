import { useQuery } from "@tanstack/react-query";
import { REST_COUNTRIES_API_ALL } from "../apiConfig";
import { getApiData } from "../dataHelpers";
import { CountryData } from "../types";

const useCountriesData = () => {
  const {
    isLoading,
    data: countriesList,
  }: { isLoading: boolean; data: Array<CountryData> | undefined } = useQuery({
    queryKey: ["countries"],
    queryFn: () => getApiData(REST_COUNTRIES_API_ALL),
  });

  const getCountriesNameByCCA3 = (cca3s: string[] | undefined) => {
    if (!cca3s) return undefined;

    return cca3s.reduce((acc, shortName) => {
      const commonName = countriesList?.find(
        (country) => country.cca3 === shortName
      )?.name.common;

      if (commonName) return [...acc, commonName];

      return acc;
    }, [] as string[]);
  };

  return {
    isLoading,
    countriesList,
    getCountryNameByCCA3: getCountriesNameByCCA3,
  };
};

export default useCountriesData;
