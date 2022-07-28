import React, { useState } from "react";
import Dropdown from "./Dropdown";

interface TableProps {
  menu: number[];
}

const Menu = (menu: TableProps) => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [select, setSelect] = useState<string>("");

  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  const dismissHandler = (event: React.FocusEvent<HTMLButtonElement>): void => {
    if (event.currentTarget === event.target) {
      setShowDropDown(false);
    }
  };

  const menuSelection = (menu: string): void => {
    setSelect(menu);
  };

  return (
    <>
      <button
        className={showDropDown ? "active bg-gray-200 shadow-md" : "shadow-md"}
        onClick={(): void => toggleDropDown()}
        onBlur={(e: React.FocusEvent<HTMLButtonElement>): void =>
          dismissHandler(e)
        }
      >
        <div className="p-1 w-20">{select || "Select ..."}</div>
        {showDropDown && (
          <Dropdown
            menu={menu.menu}
            showDropDown={false}
            toggleDropDown={(): void => toggleDropDown()}
            menuSelection={menuSelection}
          />
        )}
      </button>
    </>
  );
};

export default Menu;
