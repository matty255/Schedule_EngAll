import React, { useState } from "react";
import Dropdown from "./Dropdown";
import { timeState, CompareValue, cutTime } from "../../../store/global";
import { useRecoilState, useRecoilValue } from "recoil";
import { getDate } from "../../../hooks/getDate";
import { ReactComponent as Polygon } from "../../../static/image/Polygon.svg";

type MenuProps = {
  menu: number[];
  submit: string;
};

type Time = {
  time: number;
  startTime: number;
};

const Menu = (menu: MenuProps) => {
  const { timeValue } = getDate();
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [compareValue, setCompareValue] = useRecoilState(CompareValue);
  const cut = useRecoilValue(cutTime);
  const [select, setSelect] = useState<string>("");
  const [times, setTimes] = useRecoilState(timeState);

  React.useEffect(() => {
    if (times.time !== 0) {
      setCompareValue(timeValue);
    }
  }, [times]);

  React.useEffect(() => {
    if (times.time === 11 || (times.time === 10 && times.startTime > 20)) {
      setSelect("");
      setTimes({ time: 0, startTime: 0 });

      alert("저녁 시간은 10시 20분까지만 선택 가능합니다.");
    }
  }, [cut]);

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
        className={
          showDropDown ? "active bg-gray-200 shadow-md flex" : "shadow-md flex"
        }
        onClick={(): void => toggleDropDown()}
        onBlur={(event: React.FocusEvent<HTMLButtonElement>): void =>
          dismissHandler(event)
        }
      >
        <div className="p-1 w-[3.5rem]">
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
        <Polygon
          className={
            showDropDown
              ? "flex relative text-white  mt-2 mr-1 rotate-180 transition duration-150"
              : "flex relative text-gray-200 mt-2 mr-1 transition duration-150"
          }
        />
      </button>
    </>
  );
};

export default Menu;
