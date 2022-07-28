import { useRecoilState, useRecoilValue } from "recoil";
import { ScheduleProps } from "../types/schedule";
import { timeState, cutTime, weekdayArray } from "../store/global";
import { set, setHours, add, addMinutes, format } from "date-fns";
import { getDate } from "./getDate";

export const useCompare = (data: any) => {
  const { selectedTime, timeEnd, timeValue } = getDate();

  const changeTime = useRecoilValue(timeState);
  const date2 = new Date();

  return { date2 };
};
