import { FunctionComponent, ReactNode } from "react";
import CountryCard from "../components/CountryCard";

interface ICountryCardsCollectionProps {
  children: ReactNode;
}

const CountryCardsCollection: FunctionComponent<ICountryCardsCollectionProps> = () => {
  return (
    <div>
      <CountryCard />
      <CountryCard />
      <CountryCard />
    </div>
  );
};

export default CountryCardsCollection;
