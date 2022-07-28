import React from "react";
import tw from "tailwind-styled-components";
import { ScheduleList, ScheduleProps } from "../../../types/schedule";
import { useScheduleModel } from "../../../api/model/useScheduleModels";

interface TableProps {
  time: string[];
  id: any;
  week: string;
}

const TimeCard = (time: TableProps) => {
  const { deleteSchedule } = useScheduleModel();
  const [visible, setVisible] = React.useState(true);

  const deleteCard = () => {
    deleteSchedule(time.week, time.id);
    setVisible(false);
  };
  return (
    <Box>
      <Card className={visible ? "" : "hidden"}>
        <StartTime>
          {time.time[0]} {time.time[2]} -
        </StartTime>
        <EndTime>
          {time.time[1]} {time.time[2]}
        </EndTime>
        <Cancel onClick={deleteCard}>삭제</Cancel>
      </Card>
    </Box>
  );
};

export default TimeCard;

const Box = tw.td`

`;
const Card = tw.div`
m-3 bg-gray-200 rounded-md
`;

const StartTime = tw.p``;
const EndTime = tw.p``;
const Cancel = tw.button``;
