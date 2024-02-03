import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.scss";
import CountriesList from "./Countries/CountriesList";
import Header from "./Header/Header";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <Header />
      <QueryClientProvider client={queryClient}>
        <CountriesList />
      </QueryClientProvider>
    </>
  );
}

export default App;
