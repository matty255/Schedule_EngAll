import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { weekdayArray } from "../store/global";

export const useMultiSelect = (initialValue: string[]) => {
  const [selected, setSelected] = useRecoilState<string[]>(weekdayArray);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
