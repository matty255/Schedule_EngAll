import React, { useEffect, useState } from "react";
import { useMultiSelect } from "../../../hooks/useMultiSelect";
import { useScheduleModel } from "../../../api/model/useScheduleModels";
import { Overlap, CompareValue, timeState } from "../../../store/global";
import { useRecoilState, useRecoilValue } from "recoil";
import axios from "axios";
import { getCompare } from "../../../hooks/getCompare";
import { getDate } from "../../../hooks/getDate";

interface TableProps {
  items: string[];
}

export const Multi = (props: TableProps) => {
  const { selected, isSelected, onChange, setSelected } = useMultiSelect([]);
  const { selectedTime, timeEnd, timeValue, timeValueEnd } = getDate();
  const [data, setData] = useRecoilState(Overlap);
  const { newArr, isBooked } = getCompare(data, selectedTime);
  const changeTime = useRecoilValue(timeState);
  console.log(changeTime.time);
  console.log(isBooked);
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
            setData([...cp]);
          })
          .catch((error) => {
            console.log(error.response.data.error);
            // throw error;
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
      <ul className="flex flex-row gap-3 ">
        {props.items &&
          props.items.map((value) => (
            <li key={value}>
              <input
                id={value}
                type="checkbox"
                value={value}
                checked={isSelected(value)}
                onChange={onChange}
                onClick={() =>
                  !changeTime.time && alert("시간을 먼저 정해주세요!")
                }
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
