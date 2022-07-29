import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { weekdayArray, timeState, overBooked } from "../store/global";

export const useMultiSelect = (initialValue: string[], warning: boolean) => {
  const [selected, setSelected] = useRecoilState<string[]>(weekdayArray);
  const changeTime = useRecoilValue(timeState);
  const [over, setOver] = useRecoilState(overBooked);
  console.log(over[0]?.week);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!changeTime.time) return;

    const value = event.target.value;
    const index = selected.indexOf(value);
    if (index > -1) {
      setSelected([...selected.slice(0, index), ...selected.slice(index + 1)]);
    } else {
      setSelected([...selected, ...[value]]);
    }
  };
  const isSelected = (value: string) => {
    return selected.includes(value);
  };

  return { selected, isSelected, onChange, setSelected };
};
