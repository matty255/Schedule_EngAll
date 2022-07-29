import React, { useState } from "react";
import { useSingleSelect } from "../../../hooks/useSingleSelect";
import tw from "tailwind-styled-components";

type ItemsProps = {
  items: object[];
};

export const Single = (props: ItemsProps) => {
  const { radioState, onRadioChange } = useSingleSelect();
  return (
    <>
      {props.items.map(({ view: title, value: time }: any) => {
        return (
          <Box
            key={title}
            className={time === radioState ? "checked bg-gray-200" : ""}
          >
            <Label>
              <input
                className="hidden"
                type="radio"
                value={time}
                name={time}
                checked={time === radioState}
                onChange={(event) => onRadioChange(event)}
              />
              {title}
            </Label>
          </Box>
        );
      })}
    </>
  );
};

const Box = tw.div`
w-14 bg-white mt-0.5 shadow-md flex justify-center checked:bg-gray-200 hover:bg-gray-200 cursor-pointer
`;

const Label = tw.label`
text-center mt-0.5 checked:bg-gray-200 w-14 cursor-pointer
`;
