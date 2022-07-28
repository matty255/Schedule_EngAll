import React, { EventHandler, useState } from "react";
import { useRecoilState } from "recoil";
import { cutTime } from "../store/global";

export const useSingleSelect = () => {
  const [radioState, setRadioState] = useRecoilState(cutTime);

  const onRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRadioState(event.currentTarget.value);
  };

  return { radioState, onRadioChange };
};
