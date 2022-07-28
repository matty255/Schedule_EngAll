import React, { useState } from "react";
import Dropdown from "./Dropdown";
import { timeState } from "../../../store/global";
import { useRecoilState } from "recoil";

interface TableProps {
  menu: number[];
  submit: string;
}
type Time = {
  time: number;
  startTime: number;
};

const Menu = (menu: TableProps) => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [select, setSelect] = useState<string>("");
  const [times, setTimes] = useRecoilState(timeState);

  const submit = menu.submit;

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
    const changeTime: Time = {
      time: submit === "time" ? parseInt(menu) : times.time,
      startTime: submit === "startTime" ? parseInt(menu) : times.startTime,
    };

    setTimes(changeTime);
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
        <div className="p-1 w-20">
          {select || (submit === "time" ? "0" : "00")}
        </div>
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
