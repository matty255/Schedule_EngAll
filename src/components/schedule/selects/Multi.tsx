import React, { useEffect, useState } from "react";
import { useMultiSelect } from "../../../hooks/useMultiSelect";
import { useScheduleModel } from "../../../api/model/useScheduleModels";
import { cutTime, timeState, overBooked } from "../../../store/global";
import { useRecoilState, useRecoilValue } from "recoil";
import axios from "axios";
import _ from "lodash";
import { getCompare } from "../../../hooks/getCompare";
import { getDate } from "../../../hooks/getDate";
import { ScheduleProps, ScheduleList } from "../../../types/schedule";
interface TableProps {
  items: string[];
}

export const Multi = (props: TableProps) => {
  const [warning, setWarning] = useState(false);
  const { selected, isSelected, onChange, setSelected } = useMultiSelect(
    [],
    warning,
  );
  console.log(selected);
  const { timeFilter } = getDate();
  const cut = useRecoilValue(cutTime);
  const [over, setOver] = useRecoilState(overBooked);
  console.log(over);
  const [weeks, setWeeks] = React.useState<any>([]);
  console.log(warning);

  const changeTime = useRecoilValue(timeState);

  useEffect(() => {
    const a: ScheduleProps[] = [];
    const newMyArr = weeks.forEach(
      (currentElement: ScheduleProps[], index: number) => {
        if (
          currentElement[index]?.time.includes(timeFilter[index]) &&
          currentElement[index]?.time.includes(cut)
        ) {
          a.push(currentElement[index]);
        }
      },
    );

    if (a.length > 0) {
      setOver(a);
      setWarning(true);
    }
  }, [weeks, selected]);

  useEffect(() => {
    Promise.all(
      selected.map(async function (week) {
        return await axios
          .get(`http://localhost:8000/${week}/`)
          .then((response) => {
            const result = response.data;
            if (typeof result !== "string") {
              setWeeks(_.uniq([result]));
              setWarning(false);
            }
          })
          .catch((error) => {
            console.log(error.response.data.error);
            throw error;
          });
      }),
    );
  }, [selected]);

  const allChange = () => {
    if (selected.length === props.items.length) {
      setSelected([]);
    } else {
      setSelected([...props.items]);
    }
  };

  useEffect(() => {
    setSelected([]);
    setWarning(false);
    setOver([]);
  }, [cut, warning, changeTime]);

  return (
    <>
      <ul className="flex flex-row gap-3 ">
        {props.items &&
          props.items.map((value) => (
            <li key={value}>
              <input
                id={value}
                type="checkbox"
                value={value}
                checked={!warning && isSelected(value)}
                onChange={onChange}
                onClick={() =>
                  !changeTime.time && alert("시간을 먼저 정해주세요!")
                }
              />
              <label>{value}</label>
            </li>
          ))}
        <li>
          <input onClick={allChange} type="checkbox" />
          <label>select all</label>
        </li>
      </ul>
    </>
  );
};
