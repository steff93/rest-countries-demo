import Country from "./Country";

const someData = [
  {
    flag: "",
    title: "Germany",
    population: "100000",
    region: "Europe",
    capital: "Berlin",
  },
];

const CountriesList = () => {
  return (
    <div style={{ paddingTop: "var(--headerHeight)" }}>
      {someData.map((country, index) => {
        return <Country {...country} key={index} />;
      })}
    </div>
  );
};

export default CountriesList;
