import React, { useEffect, useState } from "react";

type DropDownProps = {
  menu: number[];
  showDropDown: boolean;
  toggleDropDown: Function;
  menuSelection: Function;
};

const DropDown: React.FC<DropDownProps> = ({
  menu,
  menuSelection,
}: DropDownProps): JSX.Element => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);

  const onClickHandler = (menu: number): void => {
    menuSelection(menu);
  };

  useEffect(() => {
    setShowDropDown(showDropDown);
  }, [showDropDown]);

  return (
    <>
      <div
        className={
          showDropDown ? "dropdown" : "dropdown active fixed  bg-white"
        }
      >
        {menu.map((m: number, index: number): JSX.Element => {
          return (
            <p
              className="hover:bg-gray-200 p-1 w-20"
              key={index}
              onClick={(): void => {
                onClickHandler(m);
              }}
            >
              {m}
            </p>
          );
        })}
      </div>
    </>
  );
};

export default DropDown;
