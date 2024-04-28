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

  return { isLoading, countriesList };
};

export default useCountriesData;
