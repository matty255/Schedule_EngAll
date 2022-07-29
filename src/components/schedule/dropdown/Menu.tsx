import React, { useState } from "react";
import Dropdown from "./Dropdown";
import { timeState, CompareValue, cutTime } from "../../../store/global";
import { useRecoilState, useRecoilValue } from "recoil";
import { getDate } from "../../../hooks/getDate";
interface TableProps {
  menu: number[];
  submit: string;
}
type Time = {
  time: number;
  startTime: number;
};

const Menu = (menu: TableProps) => {
  const { timeValue } = getDate();
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [compareValue, setCompareValue] = useRecoilState(CompareValue);
  const cut = useRecoilValue(cutTime);
  const [select, setSelect] = useState<string>("");
  const [times, setTimes] = useRecoilState(timeState);
  // console.log(times.startTime > 20 && cut === "pm");

  React.useEffect(() => {
    if (times.time !== 0) {
      setCompareValue(timeValue);
    }
  }, [times]);

  React.useEffect(() => {
    if (times.time === 12 || (times.time === 11 && times.startTime > 20)) {
      setSelect("");
      setTimes({ time: 0, startTime: 0 });

      alert("저녁 시간은 11시 20분까지만 선택 가능합니다.");
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
