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
  const timeValueEnd = addMinutes(timeValue, 40);
  const timeEnd = format(addMinutes(timeValue, 40), "HH:mm");

  // const timeFilter: any = [];
  const makeArray = (timeValue: Date) => {
    const result = [timeValue];

    for (let i = 0; i < 8; i++) {
      const a = result[i];
      result.push(addMinutes(a, 5));
    }
    const a: any = result.map((date, i) => format(date, "HH:mm"));
    return a;
  };
  const timeFilter = makeArray(timeValue);
  const selectedTime = format(timeValue, "HH:mm");

  return { selectedTime, timeEnd, timeValue, timeValueEnd, timeFilter };
};
