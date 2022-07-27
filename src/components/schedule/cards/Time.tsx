import React from "react";
import tw from "tailwind-styled-components";
import { ScheduleList, ScheduleProps } from "../../../types/schedule";

interface TableProps {
  time: string[];
}

const TimeCard = (time: TableProps) => {
  console.log(time);
  return (
    <Box>
      <Card>
        <StartTime>
          {time.time[0]} {time.time[2]} -
        </StartTime>
        <EndTime>
          {time.time[1]} {time.time[2]}
        </EndTime>
        <Cancel />
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
const Cancel = tw.div``;
