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
const ViewClass = () => {
  const { getSchedule } = useScheduleModel();
  const [data, setData] = React.useState<ScheduleProps[] | any>();
  const navigate = useNavigate();
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

        <div className="flex flex-col w-full lg:w-4/5 mx-auto">
          <TopBox>
            <h1 className="m-3 mt-12 text-3xl font-bold">Class schedule</h1>
            <button></button>
            <Button className="m-3 mt-12" onClick={() => navigate("/add")}>
              Add Class Schedule
            </Button>
          </TopBox>
          <div className="flex flex-row">
            <Table weekday="monday" data={data?.monday} />
            <Table weekday="tuesday" data={data?.tuesday} />
            <Table weekday="wednesday" data={data?.wednesday} />
            <Table weekday="thursday" data={data?.thursday} />
            <Table weekday="friday" data={data?.friday} />
            <Table weekday="saturday" data={data?.saturday} />
            <Table weekday="sunday" data={data?.sunday} />
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
