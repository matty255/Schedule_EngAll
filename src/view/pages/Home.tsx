import React from "react";
import tw from "tailwind-styled-components";
import Header from "../../components/layout/Header";
import Layout from "../../components/layout/Layout";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Layout>
        <Header />
        <Box>
          <StyledLink to="view">viewClass</StyledLink>
          <StyledLink to="add">addClass</StyledLink>
        </Box>
      </Layout>
    </>
  );
};

export default Home;

const Box = tw.div`
flex gap-10 justify-center mt-10 text-white
`;
const StyledLink = tw(Link)`
bg-engall-blue p-2 rounded-md text-white
`;
