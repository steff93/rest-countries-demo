import { CountryData } from "../../types";
import "./Single.scss";

interface CountryDetailProps {
  countryData: CountryData;
}

const sectionClass = "country-single";

const CountryDetail = ({ countryData }: CountryDetailProps) => {
  const { flags, name } = countryData;
  const flag = flags?.png;
  const countryName = name.common;
  const nativeName = Object.values(name.nativeName)[0].common;
  const {
    population,
    region,
    capital,
    cca2: domainName,
    currencies,
    languages,
    borders,
  } = countryData;

  const currenciesList = Object.values(currencies).reduce((acc, currency) => {
    return [...acc, currency.name];
  }, [] as string[]);

  console.log(borders);

  return (
    <div className={sectionClass}>
      <button className="back-button">Back</button>

      <div className={`${sectionClass}__info`}>
        <div className={`${sectionClass}__flag`}>
          <img src={flag} alt={`${countryName}-flag`} />
        </div>

        <div className={`${sectionClass}__data`}>
          <h3 className={`${sectionClass}__name`}>{countryName}</h3>

          <div className={`${sectionClass}__details`}>
            <div className={`${sectionClass}__details--left`}>
              <h5 className={`${sectionClass}__native-name`}>
                <b>Native Name:</b> {nativeName}
              </h5>

              <h5 className={`${sectionClass}__population`}>
                <b>Population:</b> {population}
              </h5>

              <h5 className={`${sectionClass}__region`}>
                <b>Region:</b> {region}
              </h5>

              <h5 className={`${sectionClass}__capital`}>
                <b>Capital:</b> {capital?.length ? capital[0] : "N/A"}
              </h5>
            </div>
            <div className={`${sectionClass}__details--right`}>
              <h5 className={`${sectionClass}__domain`}>
                <b>Top Level Domain:</b> .{domainName.toLowerCase()}
              </h5>
              <h5 className={`${sectionClass}__currency`}>
                <b>Currencies:</b> {currenciesList.join(", ")}
              </h5>
              <h5 className={`${sectionClass}__language`}>
                <b>Languages:</b> {Object.values(languages).join(", ")}
              </h5>
            </div>
          </div>
        </div>

        <div className={`${sectionClass}__borders`}>
          <span>Border Countries</span>
          {borders.map((border, index) => {
            return (
              <div className={`${sectionClass}__border`} key={index}>
                {border}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
