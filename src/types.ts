/* eslint-disable @typescript-eslint/no-explicit-any */
export type CountryData = {
  name: {
    common: string;
    official: string;
    nativeName: {
      cat: {
        official: string;
        common: string;
      };
    };
  };
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies:
    | {
        [key: string]: {
          name: string;
          symbol: string;
        };
      }
    | undefined;
  idd: {
    root: string;
    suffixes: string;
  };
  capital: string[] | undefined;
  altSpellings: string[];
  region: Region;
  subregion: string;
  languages: {
    [key: string]: string;
  };
  translations: any;
  latlng: number[];
  landlocked: boolean;
  borders: string[] | undefined;
  area: number;
  demonyms: any;
  flag: symbol;
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
  population: number;
  fifa: string;
  car: any;
  timezones: string[];
  continents: string[];
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  coatOfArms: any;
  startOfWeek: string;
  capitalInfo: {
    latlng: number[];
  };
  postalCode: {
    format: string;
    regex: string;
  };
};

export type Region =
  | "Europe"
  | "Antarctic"
  | "Asia"
  | "Americas"
  | "Africa"
  | "Oceania"
  | "All";
