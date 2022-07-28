import React, { useState } from "react";
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

const AddClass = () => {
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
                <Menu menu={time} />
                <Menu menu={startTime} />
                <Single items={AmPm} />
              </Text>
              <Text>
                repeat on : <Multi items={weekdays} />
              </Text>
              {/* <div>Selected: {selected.join()}</div> */}
            </DropdownBox>
          </AddTable>

          <Button className="self-end mt-3">Save</Button>
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
