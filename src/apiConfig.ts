const REST_COUNTRIES_API = "https://restcountries.com/v3.1";
export const REST_COUNTRIES_API_ALL = `${REST_COUNTRIES_API}/all`;

export const getSingleCountryRoute = (countryName: string) =>
  `${REST_COUNTRIES_API}/name/${countryName}?fullText=true`;
