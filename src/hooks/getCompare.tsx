import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { ScheduleProps } from "../types/schedule";
import {
  set,
  setHours,
  add,
  addMinutes,
  format,
  areIntervalsOverlapping,
} from "date-fns";

export const getCompare = (data: ScheduleProps[], timeFilter: string[]) => {
  const [datas, setDatas] = React.useState<ScheduleProps[]>([]);
  if (data) {
    const isBooked = data.filter(
      (da: ScheduleProps, i: number) =>
        (da.time && da?.time[0]) || (da.time && da?.time[1]) === timeFilter[i],
    );
    setDatas(isBooked);
  } else {
    console.log("arr is not an array");
  }
  return { datas };
};
