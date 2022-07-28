import React, { EventHandler, useState } from "react";

export const useSingleSelect = () => {
  const [radioState, setRadioState] = useState("");
  const onRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRadioState(event.currentTarget.value);
  };

  return { radioState, onRadioChange };
};
