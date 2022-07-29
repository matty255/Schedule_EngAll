import React, { useEffect, useState } from "react";
import Header from "../../components/layout/Header";
import Layout from "../../components/layout/Layout";
import tw from "tailwind-styled-components";
import Button from "../../common/Button";
import Menu from "../../components/schedule/dropdown/Menu";
import {
  amTime,
  pmTime,
  amStartTime,
  pmStartTime,
} from "../../static/constant/time";
import { weekdays } from "../../static/constant/weekdays";
import { Multi } from "../../components/schedule/selects/Multi";
import { Single } from "../../components/schedule/selects/Single";
import { AmPm } from "../../static/constant/AmPm";
import {
  timeState,
  weekdayArray,
  cutTime,
  Overlap,
  overBooked,
} from "../../store/global";
import { useRecoilState, useRecoilValue } from "recoil";

import { useSubmit } from "../../hooks/useSubmit";
import { useScheduleModel } from "../../api/model/useScheduleModels";
import { useNavigate } from "react-router-dom";
import { ScheduleProps, ScheduleList } from "../../types/schedule";

const AddClass = () => {
  const { addSchedule } = useScheduleModel();
  const navigate = useNavigate();
  const week = useRecoilValue(weekdayArray);
  const times = useRecoilValue(timeState);
  const cut = useRecoilValue(cutTime);
  const { submitData } = useSubmit();
  const [over, setOver] = useRecoilState(overBooked);
  console.log(Object.keys(over).length > 0);

  const onSubmit = () => {
    if (week.length > 0 && times.time !== 0) {
      addSchedule(week, submitData);
      navigate("/view", { replace: true });
    } else if (times.time === 0) {
      alert("시간을 입력해주세요!");
    } else {
      alert("요일을 정해주세요!");
    }
  };
  //

  return (
    <>
      <Layout>
        <Header />
        <div className="flex flex-col w-full lg:w-4/5 mx-auto p-2">
          <TopBox>
            <h1 className="ml-0 m-7 mt-12 text-3xl font-bold">
              Add Class Schedule
            </h1>
          </TopBox>
          <AddTable>
            <DropdownBox>
              <Text>
                start time :
                <Menu menu={cut === "am" ? amTime : pmTime} submit="time" /> :
                <Menu
                  menu={cut === "am" ? amStartTime : pmStartTime}
                  submit="startTime"
                />
                <div className="flex flex-col md:flex-row">
                  <Single items={AmPm} />
                </div>
              </Text>
              <Text>
                repeat on : <Multi items={weekdays} />
              </Text>
            </DropdownBox>
            {Object.keys(over).length > 0 && <div>이미 예약된 시간입니다</div>}
          </AddTable>

          <Button
            className="self-center md:self-end mt-3"
            onClick={onSubmit}
            disabled={Object.keys(over).length > 0}
          >
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
w-full bg-white h-auto
`;

const DropdownBox = tw.div`
flex flex-col
`;

const Text = tw.div`
 m-10 flex gap-2
`;
