import { atom, atomFamily } from "recoil";
import { ScheduleProps, ScheduleList } from "../types/schedule";
import { set, setHours, add, addMinutes, format } from "date-fns";

const date = new Date();
const date2 = set(date, {
  hours: 23,
  minutes: 10,
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

export const Overlap = atom({
  key: "Overlap",
  default: [
    {
      id: "2313213",
      tutor: "123123123",
      time: ["09:00", "09:40", "am"],
      week: "monday",
      date: "2022-07-27T09:00:10.171Z",
    },
  ],
});
