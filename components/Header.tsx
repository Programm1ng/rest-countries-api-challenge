import { FunctionComponent, Dispatch, SetStateAction } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

interface IHeaderProps {
  isDarkMode: Boolean;
  setIsDarkMode: Dispatch<SetStateAction<boolean>>;
}

const Header: FunctionComponent<IHeaderProps> = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <div className="bg-white shadow text-black dark:bg-dark-mode-elements dark:text-white">
      <div className=" flex justify-between py-6 px-4 mx-auto max-w-7xl">
        <Link href="/">
          <h1 className="font-bold cursor-pointer select-none sm:text-xl">Where in the world?</h1>
        </Link>
        <div className="flex gap-x-2 items-center cursor-pointer select-none">
          <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} className="text-sm" />
          <a onClick={() => setIsDarkMode(!isDarkMode)} className="font-light text-sm">
            Dark Mode
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
