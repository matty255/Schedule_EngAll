import { useRecoilState, useRecoilValue } from "recoil";
import { ScheduleProps } from "../types/schedule";
import { timeState, cutTime, weekdayArray } from "../store/global";
import { set, setHours, add, addMinutes, format } from "date-fns";

export const getDate = () => {
  const changeTime = useRecoilValue(timeState);
  const date2 = new Date();
  const timeValue = set(date2, {
    hours: changeTime.time,
    minutes: changeTime.startTime,
  });
  const timeEnd = format(addMinutes(timeValue, 40), "HH:mm");
  const selectedTime = format(timeValue, "HH:mm");

  return { selectedTime, timeEnd, timeValue };
};
