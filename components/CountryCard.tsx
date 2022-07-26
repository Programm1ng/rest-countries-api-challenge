import { FunctionComponent } from "react";
import Image from "next/image";
import { ICountry } from "../models/Country";
import Router from "next/router";
import Link from "next/link";

type Props = {
  country: ICountry;
};

const CountryCard: FunctionComponent<Props> = ({ country }) => {
  return (
    <Link href={`/countries/${country.id}`}>
      <div className="bg-white rounded shadow max-w-xs mx-auto w-full dark:bg-dark-mode-elements dark:text-white cursor-pointer">
        <div className="relative h-48 w-full">
          <Image className="w-full rounded" src={country.flag} layout="fill" objectFit="fill" />
        </div>
        <div className="p-6">
          <h2 className=" text-xl font-semibold mb-3">{country.officialName}</h2>
          <div className="space-y-1">
            <p>
              <span className="font-semibold">Population</span>: {country.population}
            </p>
            <p>
              <span className="font-semibold">Region</span>: {country.region}
            </p>
            <p>
              <span className="font-semibold">Capital</span>: {country.capital}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
