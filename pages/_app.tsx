import "../styles/globals.css";
import type { AppProps } from "next/app";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import Layout from "../components/Layout";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);

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
  }, []);

  return (
    <Layout isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
