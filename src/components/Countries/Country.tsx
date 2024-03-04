import { formatNumber } from "../../miscHelpers";
import "./Country.scss";

interface CountryProps {
  flag: string;
  title: string;
  population: number;
  region: string;
  capital: string[] | undefined;
}

const Country = ({
  flag,
  title,
  population,
  region,
  capital,
}: CountryProps) => {
  return (
    <a className="country-info">
      <img src={flag} alt={`${title}-flag`} />

      <div className="details">
        <h3 className="country-name">
          <strong>{title}</strong>
        </h3>
        <div className="country-population">
          <strong>Population:</strong> <span>{formatNumber(population)}</span>
        </div>

        <div className="country-region">
          <strong>Region:</strong> <span>{region}</span>
        </div>

        <div className="country-capital">
          <strong>Capital:</strong>{" "}
          <span>{capital?.join(" ") || undefined}</span>
        </div>
      </div>
    </a>
  );
};

export default Country;
