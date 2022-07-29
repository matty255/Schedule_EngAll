import { atom } from "recoil";
import { ScheduleProps } from "../types/schedule";
import { set } from "date-fns";

const date = new Date();
const date2 = set(date, {
  hours: 23,
  minutes: 10,
});

export const overBooked = atom<ScheduleProps[]>({
  key: "overBooked",
  default: [],
});

export const CompareValue = atom<Date>({
  key: "CompareValue",
  default: date2,
});

export const timeState = atom({
  key: "timeState",
  default: {
    time: 0,
    startTime: 0,
  },
});

export const cutTime = atom({
  key: "cutTime",
  default: "am",
});

export const weekdayArray = atom({
  key: "weekdayArray",
  default: [""],
});
