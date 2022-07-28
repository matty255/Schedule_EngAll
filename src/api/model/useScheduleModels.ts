import { useState } from "react";
import { apiRequest } from "../instance/instance";
import { ScheduleList, ScheduleProps, Schedule } from "../../types/schedule";

export const useScheduleModel = () => {
  const addSchedule = (week: string[], data: ScheduleProps) => {
    week.map(
      async (week) =>
        week !== "" &&
        (await apiRequest.post(`/${week}`, Object.assign(data, week))),
    );
  };
  const getSchedule = async () => await apiRequest.get<Schedule>("/schedule");

  const deleteSchedule = async (week: string, id: string) =>
    await apiRequest.delete(week, id);

  const getOverlapSchedule = async (week: string[]) =>
    week.map(async (week) => await apiRequest.gett(week));

  return {
    addSchedule,
    getSchedule,
    deleteSchedule,
    getOverlapSchedule,
  };
};
