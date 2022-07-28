import React, { useEffect, useState } from "react";
import { useMultiSelect } from "../../../hooks/useMultiSelect";
import { useScheduleModel } from "../../../api/model/useScheduleModels";
import { ScheduleProps } from "../../../types/schedule";
import { Overlap } from "../../../store/global";
import { useRecoilState } from "recoil";
import axios from "axios";
import { useCompare } from "../../../hooks/useCompare";

interface TableProps {
  items: string[];
}

export const Multi = (props: TableProps) => {
  const { selected, isSelected, onChange, setSelected } = useMultiSelect([]);
  const [data, setData] = useRecoilState(Overlap);
  const { date2 } = useCompare(data);

  useEffect(() => {
    setData([]);
  }, []);

  useEffect(() => {
    Promise.all(
      selected.map(function (week) {
        return axios
          .get(`http://localhost:8000/${week}/`)
          .then((response) => {
            const cp = [response.data];
            setData([...cp, ...data]);
          })
          .catch((error) => {
            console.log(error.response.data.error);
            throw error;
          });
      }),
    );
  }, [selected]);

  const allChange = () => {
    if (selected.length === props.items.length) {
      setSelected([]);
    } else {
      setSelected([...props.items]);
    }
  };
  const clear = () => {
    setSelected([]);
  };

  useEffect(() => {
    clear();
  }, []);

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
              <label>{value}</label>
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
