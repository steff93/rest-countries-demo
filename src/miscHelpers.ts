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
