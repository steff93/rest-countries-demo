interface CountryData {
  flag: string;
  title: string;
  population: string | number;
  region: string;
  capital: string;
}

const Country = ({ flag, title, population, region, capital }: CountryData) => {
  return (
    <a className="country-info">
      <img src={flag} alt={`${title}-flag`} />

      <div className="details">
        <div className="country-name">
          <strong>{title}</strong>
        </div>
        <div className="country-population">
          <strong>Population:</strong> <span>{population}</span>
        </div>

        <div className="country-region">
          <strong>Region:</strong> <span>{region}</span>
        </div>

        <div className="country-capital">
          <strong>Capital:</strong> <span>{capital}</span>
        </div>
      </div>
    </a>
  );
};

export default Country;
