interface ScheduleProps {
  id?: string;
  tutor: string;
  time: string[];
  week?: string;
  date: Date | string;
}

type ScheduleList = ScheduleProps[];

interface Schedule {
  card: {
    monday: ScheduleList;
    tuesday: ScheduleList;
    wednesday: ScheduleList;
    thursday: ScheduleList;
    friday: ScheduleList;
    saturday: ScheduleList;
    sunday: ScheduleList;
  };
}

export { ScheduleProps, ScheduleList, Schedule };
