import React from "react";

type TextType = {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
  onClick?: () => void;
};

const Button = (props: TextType) => {
  const init = `bg-engall-blue w-[13.75rem] h-[3.125rem] 
    rounded-md shadow-md font-[1.25rem] text-white font-karla font-semibold`;

  const { children, className, onClick } = props;
  const [classNameList, setClassNameList] = React.useState(init);

  React.useEffect(() => {
    if (className) {
      setClassNameList(classNameList.concat(` ${className}`));
    }
  }, []);

  return (
    <button className={classNameList} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
