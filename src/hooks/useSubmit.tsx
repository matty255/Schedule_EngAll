import { useRecoilValue } from "recoil";
import { ScheduleProps } from "../types/schedule";
import { cutTime } from "../store/global";
import { getDate } from "./getDate";

export const useSubmit = () => {
  const { selectedTime, timeEnd, timeValue } = getDate();
  const cut = useRecoilValue(cutTime);
  const submitData: ScheduleProps = {
    tutor: "pika",
    time: [selectedTime, timeEnd, cut],
    date: timeValue,
  };

  return { submitData };
};
