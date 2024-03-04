import { CountryData } from "../../types";
import "./Single.scss";

interface SingleProps {
  countryFlag: string;
  countryName: string;
  additionalData: Partial<CountryData>;
}

const sectionClass = "country-single";

const Single = (props: SingleProps) => {
  const { additionalData, countryName } = props;
  const flag = additionalData.flags?.png;

  return (
    <div className={sectionClass}>
      <button className="back-button">Back</button>

      <div className={`${sectionClass}__info`}>
        <div className={`${sectionClass}__flag`}>
          <img src={flag} alt={`${countryName}-flag`} />
        </div>

        <div className="country-single__data">
          <h3 className=""></h3>
          {/**
           * NAme
           *
           * Native Name
           * Population
           * Region
           * Sub Region
           * Capital
           * Top Level Domain
           * Currencies
           * Languages
           */}
        </div>
      </div>
    </div>
  );
};

export default Single;
