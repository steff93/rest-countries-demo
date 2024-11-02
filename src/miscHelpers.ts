/**
 * Separate a number's digits by comma
 */
export const formatNumber = (number: number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

/**
 * Lowercase country name, remove spaces and replace them with dashes
 */
export const formatCountryName = (countryName: string) => {
  return countryName.replace(/\s+/g, "-").toLowerCase();
};

/**
 * Replace dashes with spaces in a country name. Used for fetching single country
 */
export const formatNameForFetch = (name: string) => {
  return name.replace("-", " ");
};
