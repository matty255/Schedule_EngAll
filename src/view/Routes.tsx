import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Home from "./pages/Home";
import AddClass from "./pages/AddClass";
import ViewClass from "./pages/ViewClass";

const Router = () => {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          {["/", "/home", "*"].map((path) => {
            return <Route path={path} element={<Home />} key={path} />;
          })}
          <Route path="/view" element={<ViewClass />} />
          <Route path="/add" element={<AddClass />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
};

export default Router;
