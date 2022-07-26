import "../styles/globals.css";
import type { AppProps } from "next/app";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import DataContext from "../context/dataContext";
import Country, { IAPICountryObject } from "../models/Country";

function MyApp({ Component, pageProps }: AppProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const [data, setData] = useState([]);

  useEffect(() => {
    if (isDarkMode) {
      document.querySelector("html")?.classList.add("dark");
    } else {
      document.querySelector("html")?.classList.remove("dark");
    }
  }, [isDarkMode]);

  useEffect(() => {
    document.body.classList.add("bg-light-mode-background", "dark:bg-dark-mode-background");
    document.body.classList.add("font-nunito-sans");
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      setData(data.map((country: IAPICountryObject, index: number) => new Country(country, index)));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Layout isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}>
      <DataContext.Provider value={data}>
        <Component {...pageProps} />
      </DataContext.Provider>
    </Layout>
  );
}

export default MyApp;
