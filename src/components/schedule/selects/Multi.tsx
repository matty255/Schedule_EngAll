import React, { useState } from "react";
import { useMultiSelect } from "../../../hooks/useMultiSelect";

interface TableProps {
  items: string[];
}

export const Multi = (props: TableProps) => {
  const { selected, isSelected, onChange, setSelected } = useMultiSelect([]);

  const allChange = () => {
    if (selected.length === props.items.length) {
      setSelected([]);
    } else {
      setSelected([...props.items]);
    }
  };
  return (
    <>
      <ul className="flex flex-row gap-3">
        {props.items &&
          props.items.map((value) => (
            <li key={value}>
              <input
                id={value}
                type="checkbox"
                value={value}
                checked={isSelected(value)}
                onChange={onChange}
              />
              <label htmlFor={value}>{value}</label>
            </li>
          ))}
        <li>
          <input onClick={allChange} type="checkbox" />
          <label>select all</label>
        </li>
      </ul>
    </>
  );
};
