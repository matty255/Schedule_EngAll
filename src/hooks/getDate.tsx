import { useRecoilValue } from "recoil";
import { timeState } from "../store/global";
import { set, addMinutes, format } from "date-fns";

export const getDate = () => {
  const changeTime = useRecoilValue(timeState);

  const date2 = new Date();
  const timeValue = set(date2, {
    hours: changeTime.time,
    minutes: changeTime.startTime,
  });
  const timeValueEnd = addMinutes(timeValue, 40);
  const timeEnd = format(addMinutes(timeValue, 40), "HH:mm");

  const makeArray = (timeValue: Date) => {
    const result = [timeValue];

    for (let i = 0; i < 8; i++) {
      const results = result[i];
      result.push(addMinutes(results, 5));
    }
    const formattedArray: any = result.map((date, i) => format(date, "HH:mm"));
    return formattedArray;
  };
  const timeFilter = makeArray(timeValue);
  const selectedTime = format(timeValue, "HH:mm");

  return { selectedTime, timeEnd, timeValue, timeValueEnd, timeFilter };
};
