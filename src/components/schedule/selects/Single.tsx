import React, { useState } from "react";
import { useSingleSelect } from "../../../hooks/useSingleSelect";

interface TableProps {
  items: object[];
}

export const Single = (props: TableProps) => {
  const { radioState, onRadioChange } = useSingleSelect();
  return (
    <>
      {props.items.map(({ view: title, value: time }: any) => {
        return (
          <div key={title}>
            <input
              type="radio"
              value={time}
              name={time}
              checked={time === radioState}
              onChange={(event) => onRadioChange(event)}
            />
            {title}
          </div>
        );
      })}
    </>
  );
};
