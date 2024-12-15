import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { CountryData } from "../types";
import "./App.scss";
import CountriesList from "./Countries/CountriesList";
import Header from "./Header/Header";
import CountryDetail from "./Single/Single";

const queryClient = new QueryClient();

function App() {
  const [countryData, setCountryData] = useState<CountryData | null>(null);

  const getCountryData = (data: CountryData) => {
    setCountryData(data);
  };

  return (
    <>
      <Header />

      <div className="main">
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route
              path="/rest-countries-demo/"
              element={<CountriesList getCountryData={getCountryData} />}
            ></Route>
            <Route
              path="/rest-countries-demo/:countryName"
              element={<CountryDetail countryData={countryData} />}
            ></Route>
          </Routes>
        </QueryClientProvider>
      </div>

      <div className="footer"></div>
    </>
  );
}

export default App;
