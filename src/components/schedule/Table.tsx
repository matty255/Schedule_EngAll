import React from "react";
import tw from "tailwind-styled-components";
import TimeCard from "./TimeCard";
import { ScheduleList } from "../../types/schedule";

type TableProps = {
  weekday: string;
  data: ScheduleList;
};

const Table = (props: TableProps) => {
  const { weekday, data } = props;
  return (
    <>
      <FlexBox>
        <table>
          <thead>
            <tr>
              <th>{weekday}</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((data) => (
                <tr key={data?.id}>
                  <TimeCard time={data.time} id={data.id} week={weekday} />
                </tr>
              ))}
          </tbody>
        </table>
      </FlexBox>
    </>
  );
};

export default Table;

const FlexBox = tw.div`
flex pt-10 flex-col w-full md:w-[90%] mx-auto justify-start
`;
