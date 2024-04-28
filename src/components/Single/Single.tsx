import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatNumber } from "../../miscHelpers";
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

  const handleBackAction = () => {
    console.log("go back!");
  };

  console.log(borders);

  return (
    <div className={sectionClass}>
      <div className={`${sectionClass}__header`}>
        <button
          className={`${sectionClass}__back-button button`}
          onClick={handleBackAction}
        >
          <FontAwesomeIcon
            icon={faArrowLeftLong}
            className={`${sectionClass}__back-icon`}
          />
          <span>Back</span>
        </button>
      </div>

      <div className={`${sectionClass}__info`}>
        <div className={`${sectionClass}__flag`}>
          <img src={flag} alt={`${countryName}-flag`} />
        </div>

        <div className={`${sectionClass}__data`}>
          <h2 className={`${sectionClass}__name`}>{countryName}</h2>

          <div className={`${sectionClass}__details`}>
            <div className={`${sectionClass}__details--left`}>
              <h5 className={`${sectionClass}__native-name`}>
                <strong>Native Name:</strong> {nativeName}
              </h5>

              <h5 className={`${sectionClass}__population`}>
                <strong>Population:</strong> {formatNumber(population)}
              </h5>

              <h5 className={`${sectionClass}__region`}>
                <strong>Region:</strong> {region}
              </h5>

              <h5 className={`${sectionClass}__capital`}>
                <strong>Capital:</strong> {capital?.length ? capital[0] : "N/A"}
              </h5>
            </div>
            <div className={`${sectionClass}__details--right`}>
              <h5 className={`${sectionClass}__domain`}>
                <strong>Top Level Domain:</strong> .{domainName.toLowerCase()}
              </h5>
              <h5 className={`${sectionClass}__currency`}>
                <strong>Currencies:</strong> {currenciesList.join(", ")}
              </h5>
              <h5 className={`${sectionClass}__language`}>
                <strong>Languages:</strong>{" "}
                {Object.values(languages).join(", ")}
              </h5>
            </div>

            <div className={`${sectionClass}__borders`}>
              <strong className={`${sectionClass}__borders--title`}>
                Border Countries:
              </strong>
              {borders &&
                borders.map((border, index) => {
                  return (
                    <div
                      className={`${sectionClass}__border button`}
                      role="button"
                      key={index}
                    >
                      {border}
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
