import React from "react";
import tw from "tailwind-styled-components";
import { useScheduleModel } from "../../api/model/useScheduleModels";
import { ReactComponent as Vector } from "../../static/image/Vector.svg";
import { useConfirm } from "../../hooks/useConfirm";
interface TableProps {
  time: string[];
  id: any;
  week: string;
}

const TimeCard = (time: TableProps) => {
  const { deleteSchedule } = useScheduleModel();
  const [visible, setVisible] = React.useState(true);

  const cancelConfirm = () => alert("취소되었습니다.");
  const deleteConfirm = () => {
    alert("삭제되었습니다.");
    deleteSchedule(time.week, time.id);
    setVisible(false);
  };

  const confirmDelete = useConfirm(
    "정말 삭제하시겠어요?",
    deleteConfirm,
    cancelConfirm,
  );

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
        <Cancel onClick={confirmDelete}>
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

const StartTime = tw.p`pl-1`;
const EndTime = tw.p`pl-1`;
const Cancel = tw.button`
relative bottom-12 ml-[5.85rem] mt-1 text-gray-200 hover:text-engall-blue active:text-blue-300
`;
