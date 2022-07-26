import { FunctionComponent, Dispatch, SetStateAction } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

interface IInputProps {
  searchText: string | undefined;
  setSearchText: Dispatch<SetStateAction<string>>;
}

const Input: FunctionComponent<IInputProps> = ({ searchText, setSearchText }) => {
  return (
    <div className="flex rounded overflow-hidden shadow">
      <FontAwesomeIcon icon={faMagnifyingGlass} className="text-lg px-6 py-5 bg-white text-gray-400 dark:bg-dark-mode-elements dark:text-white" />
      <input className="grow px-4 outline-none dark:bg-dark-mode-elements dark:text-white" placeholder="Search for a country" type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
    </div>
  );
};

export default Input;
