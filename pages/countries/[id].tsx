import type { NextPage } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import DataContext from "../../context/dataContext";
import { useContext } from "react";
import { ICountry } from "../../models/Country";

const CountryPage: NextPage = () => {
  const router = useRouter();
  let id = router.query.id as string;

  let data: Array<ICountry> = useContext(DataContext);
  const country = data.find((country: ICountry) => country.id === parseInt(id));

  return (
    <>
      <div className="py-6 px-2 max-w-xs mx-auto flex flex-col gap-y-10 dark:text-white">
        <div>
          <Link href="/">
            <div className="inline-flex gap-x-3 items-center px-7 py-2 drop-shadow bg-white dark:bg-dark-mode-elements cursor-pointer">
              <FontAwesomeIcon icon={faArrowLeft} />
              <div>Back</div>
            </div>
          </Link>
          <div></div>
        </div>

        {country && (
          <div>
            <div className="relative h-48 w-full">
              <Image className="w-full rounded" src={country.flag} layout="fill" objectFit="fill" />
            </div>
            <h2 className="text-xl font-bold mt-8">{country.officialName}</h2>
            <div className="space-y-3 mt-6">
              <p>
                <span className="font-semibold">Native Name</span>: {country.nativeName}
              </p>
              <p>
                <span className="font-semibold">Population</span>: {country.population}
              </p>
              <p>
                <span className="font-semibold">Region</span>: {country.region}
              </p>
              <p>
                <span className="font-semibold">Sub Region</span>: {country.subregion}
              </p>
              <p>
                <span className="font-semibold">Capital</span>: {country.capital}
              </p>
            </div>
            <div className="space-y-3 mt-10">
              <p>
                <span className="font-semibold">Top Level Domain</span>: {country.tld}
              </p>
              <p>
                <span className="font-semibold">Currencies</span>: {country.currencies}
              </p>
              <p>
                <span className="font-semibold">Languages</span>: {country.languages}
              </p>
            </div>

            {country.borders.length > 0 && (
              <div className="mt-10">
                <h3 className="font-semibold text-lg">Border Countries</h3>
                <div className="grid grid-cols-3 gap-2 mt-2">
                  {country.borders.map((borderCountry, index) => (
                    <div key={index} className="w-full border-2 border-slate-200 flex justify-center py-1 text-sm">
                      {borderCountry}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default CountryPage;
