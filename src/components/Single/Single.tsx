import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleCountryRoute } from "../../apiConfig";
import { getApiData } from "../../dataHelpers";
import useCountriesData from "../../hooks/useCountriesData";
import { formatNameForFetch, formatNumber } from "../../miscHelpers";
import { CountryData } from "../../types";
import "./Single.scss";

interface CountryDetailProps {
  countryData: CountryData | null;
}

const sectionClass = "country-single";

const CountryInterceptor = ({ countryName }: { countryName: string }) => {
  const country = formatNameForFetch(countryName || "");

  const {
    data: countryData,
  }: { isLoading: boolean; data: Array<CountryData> | undefined } = useQuery({
    queryKey: ["single"],
    queryFn: () => getApiData(getSingleCountryRoute(country)),
  });

  if (countryData) {
    return <CountryDetail countryData={countryData[0]} />;
  }
  return null;
};

const CountryDetail = ({ countryData }: CountryDetailProps) => {
  if (!countryData) {
    const { countryName } = useParams();

    return <CountryInterceptor countryName={countryName || ""} />;
  }

  const navigate = useNavigate();

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

  const { getCountryNameByCCA3 } = useCountriesData();

  const currenciesList = currencies
    ? Object.values(currencies).reduce((acc, currency) => {
        return [...acc, currency.name];
      }, [] as string[])
    : undefined;

  const bordersCommonNames = getCountryNameByCCA3(borders);

  const handleBackAction = () => {
    navigate(-1);
  };

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
                <strong>Currencies:</strong>{" "}
                {currenciesList ? currenciesList.join(", ") : "N/A"}
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
              {bordersCommonNames
                ? bordersCommonNames.map((border, index) => {
                    return (
                      <div
                        className={`${sectionClass}__border button`}
                        role="button"
                        key={index}
                      >
                        {border}
                      </div>
                    );
                  })
                : "N/A"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
