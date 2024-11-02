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
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route
            path="/"
            element={<CountriesList getCountryData={getCountryData} />}
          ></Route>
          <Route
            path="/:countryName"
            element={<CountryDetail countryData={countryData} />}
          ></Route>
        </Routes>
      </QueryClientProvider>
    </>
  );
}

export default App;
