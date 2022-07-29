import React from "react";
import tw from "tailwind-styled-components";
import { ScheduleList, ScheduleProps } from "../../../types/schedule";
import { useScheduleModel } from "../../../api/model/useScheduleModels";
import { ReactComponent as Vector } from "../../../static/image/Vector.svg";

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
        <div className="">
          <StartTime>
            {time.time[0]} {time.time[2]} -
          </StartTime>
          <EndTime>
            {time.time[1]} {time.time[2]}
          </EndTime>
        </div>
        <Cancel onClick={deleteCard}>
          <Vector />
        </Cancel>
      </Card>
    </Box>
  );
};

export default TimeCard;

const Box = tw.td`
flex flex-col w-36
`;
const Card = tw.div`
m-3 bg-slate-200 rounded-md
`;

const StartTime = tw.p``;
const EndTime = tw.p``;
const Cancel = tw.button`
relative bottom-12 ml-[5.85rem] mt-1
`;
