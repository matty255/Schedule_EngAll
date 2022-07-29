import React from "react";
import Header from "../../components/layout/Header";
import Layout from "../../components/layout/Layout";
import Table from "../../components/schedule/Table";
import { useScheduleModel } from "../../api/model/useScheduleModels";
import { ScheduleProps } from "../../types/schedule";
import tw from "tailwind-styled-components";
import Button from "../../common/Button";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { cutTime, timeState } from "../../store/global";
import { sortFunction2 } from "../../hooks/getSort";

const ViewClass = () => {
  const navigate = useNavigate();
  const { getSchedule } = useScheduleModel();
  const [data, setData] = React.useState<ScheduleProps[] | any>();
  const [times, setTimes] = useRecoilState(timeState);
  const [cut, setCut] = useRecoilState(cutTime);

  React.useEffect(() => {
    getSchedule().then((response) => setData(response));
    setTimes({ time: 0, startTime: 0 });
    setCut("am");
  }, []);

  return (
    <>
      <Layout>
        <Header />

        <div className="flex flex-col w-full min-h-full lg:w-[90%] xl:w-4/5 mx-auto ">
          <TopBox>
            <h1 className="m-3 mt-12 text-3xl font-bold">Class schedule</h1>
            <button></button>
            <Button className="m-3 mt-12" onClick={() => navigate("/add")}>
              Add Class Schedule
            </Button>
          </TopBox>
          <div className="flex flex-row overflow-auto">
            <Table weekday="monday" data={data?.monday.sort(sortFunction2)} />
            <Table weekday="tuesday" data={data?.tuesday.sort(sortFunction2)} />
            <Table
              weekday="wednesday"
              data={data?.wednesday.sort(sortFunction2)}
            />
            <Table
              weekday="thursday"
              data={data?.thursday.sort(sortFunction2)}
            />
            <Table weekday="friday" data={data?.friday.sort(sortFunction2)} />
            <Table
              weekday="saturday"
              data={data?.saturday.sort(sortFunction2)}
            />
            <Table weekday="sunday" data={data?.sunday.sort(sortFunction2)} />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ViewClass;

const TopBox = tw.div`
flex flex-row justify-between
`;
