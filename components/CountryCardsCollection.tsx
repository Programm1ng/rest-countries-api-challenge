import { FunctionComponent, ReactNode } from "react";
import CountryCard from "../components/CountryCard";

type Props = {
  childComponent?: ReactNode;
};

const CountryCardsCollection: FunctionComponent<Props> = () => {
  return (
    <div>
      <CountryCard />
      <CountryCard />
      <CountryCard />
    </div>
  );
};

export default CountryCardsCollection;
