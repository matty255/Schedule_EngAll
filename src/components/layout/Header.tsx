import React from "react";
import tw from "tailwind-styled-components";
import { ReactComponent as Logo } from "../../static/image/Logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <EngSkyHeader>
      <Link to="/">
        <Logo />
      </Link>
    </EngSkyHeader>
  );
};

export default Header;

const EngSkyHeader = tw.header`
bg-engall-sky h-[5.063rem] flex items-end pl-[2rem] pb-[0.1rem]
`;
