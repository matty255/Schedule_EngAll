export function sortFunction2(a: any, b: any) {
  const nameA = a.time[2];
  const nameB = b.time[2];
  const dateA = a.time[0];
  const dateB = b.time[0];
  if (nameA > nameB) return 1;
  if (nameA < nameB) return -1;
  if (dateA < dateB) return -1;
  else return 0;
}

// function sortFunction(a: ScheduleProps, b: ScheduleProps) {
//   const dateA = new Date(a.date).getTime();
//   const dateB = new Date(b.date).getTime();
//   return dateA > dateB ? 1 : -1;
// }
