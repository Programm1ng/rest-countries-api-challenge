import { FunctionComponent, useContext, useState } from "react";
import CountryCard from "../components/CountryCard";
import DataContext from "../context/dataContext";
import { IFilter } from "../data/filter";
import { ICountry } from "../models/Country";

interface ICountryCardsCollectionProps {
  selectedFilter: IFilter | undefined;
  searchText: string;
}

const CountryCardsCollection: FunctionComponent<ICountryCardsCollectionProps> = ({ selectedFilter, searchText }) => {
  const data: Array<ICountry> = useContext(DataContext);

  const getFilteredData = () => {
    let filteredData: Array<ICountry> = data;

    if (selectedFilter !== undefined) filteredData = data.filter((country) => country.region.toLowerCase() === selectedFilter!.name.toLowerCase());

    if (searchText !== "") filteredData = filteredData.filter((country) => country.officialName.toLowerCase().includes(searchText.toLowerCase()));

    return filteredData;
  };

  const filteredData = getFilteredData();

  return <div className="grid gap-y-8 sm:grid-cols-2 sm:gap-x-8 md:grid-cols-3 lg:grid-cols-4">{filteredData.length > 0 && filteredData.map((country, index) => <CountryCard key={index} country={country} />)}</div>;
};

export default CountryCardsCollection;
