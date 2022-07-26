import type { NextPage } from "next";
import InputWrapper from "../components/InputWrapper";
import Input from "../components/Input";
import ComboBox from "../components/ComboBox";
import CountryCardsCollection from "../components/CountryCardsCollection";
import filter, { IFilter } from "../data/filter";
import { useState } from "react";

const Home: NextPage = () => {
  const [selectedFilter, setSelectedFilter] = useState<IFilter | undefined>(undefined);

  const [searchText, setSearchText] = useState<string>("");

  return (
    <div className="max-w-md mx-auto px-2 pt-5 flex flex-col gap-y-12 sm:max-w-7xl">
      <InputWrapper>
        <Input searchText={searchText} setSearchText={setSearchText} />
        <ComboBox filter={filter} selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
      </InputWrapper>
      <CountryCardsCollection selectedFilter={selectedFilter} searchText={searchText} />
    </div>
  );
};

export default Home;
