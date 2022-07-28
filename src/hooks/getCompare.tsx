import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { ScheduleProps } from "../types/schedule";
import { CompareValue } from "../store/global";
import {
  set,
  setHours,
  add,
  addMinutes,
  format,
  areIntervalsOverlapping,
} from "date-fns";

export const getCompare = (data: any, selectedTime: string) => {
  // const [compareValue, setCompareValue] = useRecoilState(CompareValue);
  // areIntervalsOverlapping(
  //   { start: timeValue, end: timeValueEnd },
  //   { start: note[0]?.date, end: addMinutes(note[0]?.date, 40) },
  // ),
  // console.log(compareValue.toString());
  const newArr = [];
  const Booked: any = [];

  for (let i = 0; i < Object.keys(data).length; i++) {
    const value = Object.values(data)[i];
    newArr.push(value);
  }
  const filteredArray =
    newArr !== [] &&
    newArr.filter(
      (rowData: any) => rowData[0] && Booked.push(rowData[0]?.time),
    );
  const isBooked = Booked.filter(
    (data: string[]) => data && data[0] === selectedTime,
  );

  // const notes = data.filter(function (rowData: any) {
  //   return rowData[0]?.date === "2022-07-27T09:00:10.171Z";
  // });

  return { newArr, isBooked };
};
