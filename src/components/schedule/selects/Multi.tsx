import React, { useEffect, useState } from "react";
import { useMultiSelect } from "../../../hooks/useMultiSelect";
import { cutTime, timeState, overBooked } from "../../../store/global";
import { useRecoilState, useRecoilValue } from "recoil";
import axios from "axios";
import _ from "lodash";
import { getDate } from "../../../hooks/getDate";
import { ScheduleProps } from "../../../types/schedule";
import tw from "tailwind-styled-components";

interface ItemsProps {
  items: string[];
}

export const Multi = (props: ItemsProps) => {
  const [warning, setWarning] = useState(false);
  const { selected, isSelected, onChange, setSelected } = useMultiSelect(
    [],
    warning,
  );

  const { timeFilter } = getDate();
  const cut = useRecoilValue(cutTime);
  const [over, setOver] = useRecoilState(overBooked);
  const [weeks, setWeeks] = React.useState<any>([]);
  const changeTime = useRecoilValue(timeState);

  useEffect(() => {
    const filteredArray: ScheduleProps[] = [];
    const TimeCompare = weeks.forEach(
      (currentElement: ScheduleProps[], index: number) => {
        timeFilter.forEach((element: string, idx: number) => {
          if (
            currentElement[index]?.time.includes(element) &&
            currentElement[index]?.time.includes(cut)
          ) {
            filteredArray.push(currentElement[index]);
          }
        });
      },
    );

    if (filteredArray.length > 0) {
      setOver(filteredArray);
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
      <ul className="flex flex-row gap-3 flex-wrap">
        {props.items &&
          props.items.map((value) => (
            <Box
              key={value}
              className={!warning && isSelected(value) && "bg-gray-200"}
            >
              <Label>
                <input
                  id={value}
                  className="hidden"
                  type="checkbox"
                  value={value}
                  checked={!warning && isSelected(value)}
                  onChange={onChange}
                  onClick={() =>
                    !changeTime.time && alert("시간을 먼저 정해주세요!")
                  }
                />
                {value}
              </Label>
            </Box>
          ))}
        <li>
          <input onClick={allChange} type="checkbox" />
          <label>select all</label>
        </li>
      </ul>
    </>
  );
};

const Box = tw.li`
w-20 h-12 bg-white mt-0.5 shadow-md flex justify-center items-center checked:bg-gray-200 hover:bg-gray-200 cursor-pointer
`;

const Label = tw.label`
text-center checked:bg-gray-200 w-20 h-12 cursor-pointer mt-5
`;
