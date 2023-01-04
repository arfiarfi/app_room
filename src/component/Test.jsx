import React from "react";
import { Outlet } from "react-router-dom";
// import Content from "../component/Content";
import Topbar from "../component/Topbar";

const Test = () => {
  return (
    <div className="bg-[#E7F6F2] h-[100vh] flex flex-col gap-4">
      <Topbar />
      <div className=" mt-12">
        <Outlet />
      </div>
    </div>
  );
};

export default Test;
