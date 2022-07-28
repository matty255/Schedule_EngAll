import React, { useEffect, useState } from "react";
import Header from "../../components/layout/Header";
import Layout from "../../components/layout/Layout";
import tw from "tailwind-styled-components";
import Button from "../../common/Button";
import Menu from "../../components/schedule/dropdown/Menu";
import { time, startTime } from "../../static/constant/time";
import { weekdays } from "../../static/constant/weekdays";
import { Multi } from "../../components/schedule/selects/Multi";
import { Single } from "../../components/schedule/selects/Single";
import { AmPm } from "../../static/constant/AmPm";
import { timeState, weekdayArray } from "../../store/global";
import { useRecoilState, useRecoilValue } from "recoil";

import { useSubmit } from "../../hooks/useSubmit";
import { useScheduleModel } from "../../api/model/useScheduleModels";
import { useNavigate } from "react-router-dom";

const AddClass = () => {
  const { addSchedule } = useScheduleModel();
  const navigate = useNavigate();
  const week = useRecoilValue(weekdayArray);
  const times = useRecoilValue(timeState);
  const { submitData } = useSubmit();

  const onSubmit = () => {
    if (week.length > 0 && times.time !== 0) {
      addSchedule(week, submitData);
      navigate("/view", { replace: true });
    }
  };
  //
  useEffect(() => {}, []);
  return (
    <>
      <Layout>
        <Header />
        <div className="flex flex-col w-full lg:w-4/5 mx-auto">
          <TopBox>
            <h1 className="ml-0 m-7 mt-12 text-3xl font-bold">
              Add Class Schedule
            </h1>
          </TopBox>
          <AddTable>
            <DropdownBox>
              <Text>
                start time :
                <Menu menu={time} submit="time" />
                <Menu menu={startTime} submit="startTime" />
                <Single items={AmPm} />
              </Text>
              <Text>
                repeat on : <Multi items={weekdays} />
              </Text>
            </DropdownBox>
          </AddTable>

          <Button className="self-end mt-3" onClick={onSubmit}>
            Save
          </Button>
        </div>
      </Layout>
    </>
  );
};

export default AddClass;

const TopBox = tw.div`
flex flex-row justify-between
`;

const AddTable = tw.div`
w-full bg-white h-60
`;

const DropdownBox = tw.div`
flex flex-col
`;

const Text = tw.div`
 m-10 flex gap-2
`;
