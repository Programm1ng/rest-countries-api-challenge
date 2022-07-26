import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent, useEffect, useState, Dispatch, SetStateAction, MouseEvent } from "react";
import { faChevronDown, faXmark } from "@fortawesome/free-solid-svg-icons";
import { CSSTransition } from "react-transition-group";
import { IFilter } from "../data/filter";

interface IComboBoxProps {
  filter: Array<IFilter>;
  selectedFilter: IFilter | undefined;
  setSelectedFilter: Dispatch<SetStateAction<IFilter | undefined>>;
}

const ComboBox: FunctionComponent<IComboBoxProps> = ({ filter, selectedFilter, setSelectedFilter }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setTimeout(() => {}, 2000);
  }, [isActive]);

  const handleSelection = (filter: IFilter) => {
    setSelectedFilter(filter);
    setIsActive(false);
  };

  const clearFilter = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setSelectedFilter(undefined);
  };

  return (
    <div className="max-w-[16rem] relative">
      <div onClick={() => setIsActive(!isActive)} className="px-4 py-5 cursor-pointer bg-white flex justify-between items-center shadow select-none rounded dark:bg-dark-mode-elements dark:text-white">
        <div className="flex gap-x-2 items-center">
          <div onClick={(e) => clearFilter(e)} className={`${selectedFilter === undefined ? "hidden" : ""}`}>
            <FontAwesomeIcon icon={faXmark} className="text-lg text-gray-400" />
          </div>
          <p className="">{selectedFilter !== undefined ? selectedFilter!.name : "Filter by Region"}</p>
        </div>
        <FontAwesomeIcon icon={faChevronDown} className="text-lg text-gray-400" />
      </div>

      <CSSTransition in={isActive} unmountOnExit timeout={300} classNames="comboBox-menu">
        <ul className={`select-none bg-white absolute mt-2 left-0 right-0 shadow rounded-lg opacity-0 transition-all duration-300 z-50 dark:bg-dark-mode-elements dark:text-white`}>
          {filter.map((filterItem: IFilter) => (
            <li onClick={() => handleSelection(filterItem)} className={`hover:bg-slate-300 dark:hover:bg-slate-800 py-3 px-4 ${selectedFilter?.id === filterItem.id && "bg-slate-300"}`} key={filterItem.id}>
              {filterItem.name}
            </li>
          ))}
        </ul>
      </CSSTransition>
    </div>
  );
};

export default ComboBox;
